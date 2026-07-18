/**
 * Importa a planilha Dados Gerais.xlsx para a edição ativa.
 * Uso: npx tsx prisma/import-dados-gerais.ts [caminho-xlsx]
 */
import 'dotenv/config';
import * as fs from 'fs';
import * as path from 'path';
import * as XLSX from 'xlsx';
import { PrismaPg } from '@prisma/adapter-pg';
import {
  OrigemCadastro,
  PrismaClient,
  StatusInscricaoStartup,
} from '../generated/prisma/client';
import { normalizeCpf } from '../src/common/utils/cpf.util';
import { randomSuffix, slugify } from '../src/common/utils/slug.util';
import { parseStartupImportRow } from '../src/inscricoes/startup-import.util';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

function pickSheet(names: string[], wanted: string) {
  return (
    names.find((n) => n.trim().toLowerCase() === wanted) ||
    names.find((n) => n.trim().toLowerCase().startsWith(wanted))
  );
}

async function uniqueSlug(nome: string) {
  const base = slugify(nome) || 'startup';
  let slug = base;
  while (await prisma.inscricaoStartup.findUnique({ where: { slugPublico: slug } })) {
    slug = `${base}-${randomSuffix()}`;
  }
  return slug;
}

async function findOrCreateComunidade(
  edicaoId: string,
  nome: string,
  cidade?: string,
  estado?: string,
) {
  const existing = await prisma.comunidade.findFirst({ where: { edicaoId, nome } });
  if (existing) return existing;

  const slugBase = slugify(nome) || 'comunidade';
  let slug = slugBase;
  let attempt = 0;
  while (await prisma.comunidade.findFirst({ where: { edicaoId, slug } })) {
    attempt++;
    slug = `${slugBase}-${attempt}`;
  }

  const uf = (estado || 'PI').trim().toUpperCase().slice(0, 2) || 'PI';
  return prisma.comunidade.create({
    data: {
      edicaoId,
      nome,
      cidade: cidade || '—',
      estado: uf.length === 2 ? uf : 'PI',
      slug,
    },
  });
}

async function main() {
  const defaultPath = path.resolve(__dirname, '../../Dados Gerais.xlsx');
  const filePath = path.resolve(process.argv[2] || defaultPath);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Arquivo não encontrado: ${filePath}`);
  }

  const edicao = await prisma.edicao.findFirst({ where: { ativa: true } });
  if (!edicao) throw new Error('Nenhuma edição ativa. Rode o seed antes.');

  console.log(`Edição: ${edicao.nome} (${edicao.ano})`);
  console.log(`Arquivo: ${filePath}`);

  const workbook = XLSX.readFile(filePath);
  const bdName =
    pickSheet(workbook.SheetNames, 'bd') || workbook.SheetNames[0];
  const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(
    workbook.Sheets[bdName],
    { defval: '' },
  );

  // CNPJ lookup
  const cnpjName = pickSheet(workbook.SheetNames, 'cnpj');
  const cnpjById = new Map<string, string>();
  if (cnpjName) {
    for (const row of XLSX.utils.sheet_to_json<Record<string, unknown>>(
      workbook.Sheets[cnpjName],
      { defval: '' },
    )) {
      const id = String(row['id.supi'] ?? '').trim().toLowerCase();
      const cnpj = String(row.CNPJ ?? '').trim();
      if (id && cnpj) cnpjById.set(id, cnpj);
    }
  }

  // Equipe lookup
  const nomesName = workbook.SheetNames.find((n) =>
    n.trim().toLowerCase().startsWith('nomes e cpfs'),
  );
  const equipeById = new Map<
    string,
    Array<{ nome: string; cpf?: string; turma?: string }>
  >();
  if (nomesName) {
    for (const row of XLSX.utils.sheet_to_json<Record<string, unknown>>(
      workbook.Sheets[nomesName],
      { defval: '' },
    )) {
      const id = String(row.idsupi ?? row['id.supi'] ?? '')
        .trim()
        .toLowerCase();
      const nome = String(row['Nome Completo'] ?? '').trim();
      if (!id || !nome) continue;
      const list = equipeById.get(id) || [];
      list.push({
        nome,
        cpf: String(row.CPF ?? '').trim() || undefined,
        turma: String(row.Turma ?? '').trim() || undefined,
      });
      equipeById.set(id, list);
    }
  }

  let importadas = 0;
  let ignoradas = 0;
  const erros: Array<{ linha: number; motivo: string }> = [];
  const usedCpfs = new Set<string>();

  for (let i = 0; i < rows.length; i++) {
    const row = { ...rows[i] };
    const id = String(row['id.supi'] ?? '').trim().toLowerCase();
    if (!String(row.CNPJ ?? '').trim() && id && cnpjById.has(id)) {
      row.CNPJ = cnpjById.get(id);
    }

    const isEmpty = Object.values(row).every(
      (v) => v === '' || v === null || v === undefined,
    );
    if (isEmpty) {
      ignoradas++;
      continue;
    }

    const parsed = parseStartupImportRow(row);
    if (parsed.erro || !parsed.data) {
      erros.push({ linha: i + 2, motivo: parsed.erro || 'Linha inválida' });
      continue;
    }

    const dto = parsed.data;
    if (id && equipeById.has(id)) {
      dto.metricas = { ...(dto.metricas ?? {}), equipe: equipeById.get(id) };
    }

    try {
      const comunidade = await findOrCreateComunidade(
        edicao.id,
        dto.comunidade,
        dto.cidadeOperacao,
        dto.metricas?.estado,
      );

      let responsavelCpf: string | undefined;
      const cpfRaw = dto.responsavelCpf?.trim();
      if (cpfRaw) {
        const digits = normalizeCpf(cpfRaw);
        if (digits && !usedCpfs.has(digits)) {
          const exists = await prisma.inscricaoStartup.findFirst({
            where: { edicaoId: edicao.id, responsavelCpf: digits },
            select: { id: true },
          });
          if (!exists) {
            responsavelCpf = digits;
            usedCpfs.add(digits);
          }
        }
      }

      const metricas = {
        ...(dto.metricas ?? {}),
        ...(cpfRaw && !responsavelCpf ? { cpfResponsavel: cpfRaw } : {}),
      };

      const now = new Date();
      await prisma.inscricaoStartup.create({
        data: {
          edicaoId: edicao.id,
          comunidadeId: comunidade.id,
          nomeStartup: dto.nomeStartup,
          responsavelNome: dto.responsavelNome || dto.nomeStartup,
          responsavelCpf,
          responsavelEmail: dto.responsavelEmail,
          responsavelTelefone: dto.responsavelTelefone,
          categoria: dto.categoria,
          cidadeOperacao: dto.cidadeOperacao || comunidade.cidade,
          site: dto.site,
          descricao: dto.descricao,
          pitchCurto: dto.pitchCurto,
          metricasJson: Object.keys(metricas).length ? metricas : undefined,
          etapaAtual: 3,
          status:
            dto.status === 'Ativo'
              ? StatusInscricaoStartup.ATIVO
              : StatusInscricaoStartup.PENDENTE,
          slugPublico: await uniqueSlug(dto.nomeStartup),
          lgpdAceitoEm: now,
          cpfUnicoConfirmado: false,
          confirmadoEm: now,
          origem: OrigemCadastro.IMPORTACAO,
        },
      });
      importadas++;
      if (importadas % 100 === 0) console.log(`  … ${importadas} importadas`);
    } catch (error) {
      erros.push({
        linha: i + 2,
        motivo: error instanceof Error ? error.message : 'Erro ao importar',
      });
    }
  }

  await prisma.importacaoLote.create({
    data: {
      edicaoId: edicao.id,
      arquivoNome: path.basename(filePath),
      totalLinhas: rows.length,
      importadas,
      ignoradas: ignoradas + erros.length,
      errosJson: erros.length ? erros : undefined,
    },
  });

  console.log(
    JSON.stringify(
      {
        totalLinhas: rows.length,
        importadas,
        ignoradas: ignoradas + erros.length,
        erros: erros.slice(0, 10),
        errosTotal: erros.length,
        cnpjs: cnpjById.size,
        equipes: equipeById.size,
      },
      null,
      2,
    ),
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
