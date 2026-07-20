/**
 * Provisiona login para startups importadas (senha: minha-startup).
 * Uso no host: npx tsx prisma/backfill-import-acesso.ts
 * Uso no container: npx tsx prisma/backfill-import-acesso.ts
 */
import 'dotenv/config';
import { createHash } from 'crypto';
import * as bcrypt from 'bcrypt';
import { PrismaPg } from '@prisma/adapter-pg';
import {
  OrigemCadastro,
  PrismaClient,
  StatusInscricaoStartup,
} from '../generated/prisma/client';

const SENHA = 'minha-startup';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

function allocateCpf(edicaoId: string, email: string, used: Set<string>) {
  const base = createHash('sha256')
    .update(`premio-import:${edicaoId}:${email.toLowerCase()}`)
    .digest('hex');
  let digits = '';
  for (const ch of base) {
    if (digits.length >= 11) break;
    if (ch >= '0' && ch <= '9') digits += ch;
  }
  while (digits.length < 11) digits += '0';
  digits = digits.slice(0, 11);
  for (let i = 0; i < 50; i++) {
    const candidate =
      i === 0
        ? digits
        : `${digits.slice(0, 8)}${String(i).padStart(3, '0')}`.slice(0, 11);
    if (!used.has(candidate)) {
      used.add(candidate);
      return candidate;
    }
  }
  throw new Error(`CPF sintético esgotado para ${email}`);
}

async function main() {
  const edicao = await prisma.edicao.findFirst({
    where: { ativa: true },
    orderBy: { createdAt: 'desc' },
  });
  if (!edicao) throw new Error('Nenhuma edição ativa.');

  const rows = await prisma.inscricaoStartup.findMany({
    where: {
      edicaoId: edicao.id,
      origem: OrigemCadastro.IMPORTACAO,
      responsavelEmail: { not: null },
      status: {
        in: [StatusInscricaoStartup.ATIVO, StatusInscricaoStartup.PENDENTE],
      },
    },
  });

  const pessoas = await prisma.pessoa.findMany({
    where: { edicaoId: edicao.id },
    select: { id: true, cpf: true, email: true, mustChangePassword: true },
  });
  const usedCpfs = new Set(pessoas.map((p) => p.cpf));
  const byEmail = new Map(pessoas.map((p) => [p.email.toLowerCase(), p]));

  const hash = await bcrypt.hash(SENHA, 10);
  let provisionados = 0;
  let atualizados = 0;
  let ignorados = 0;
  const erros: string[] = [];

  for (const row of rows) {
    const email = row.responsavelEmail?.trim();
    if (!email) {
      ignorados += 1;
      continue;
    }
    try {
      let pessoa = byEmail.get(email.toLowerCase()) as
        | {
            id: string;
            cpf: string;
            email: string;
            mustChangePassword: boolean;
          }
        | undefined;

      if (pessoa) {
        if (pessoa.mustChangePassword) {
          const updated = await prisma.pessoa.update({
            where: { id: pessoa.id },
            data: { senhaHash: hash, mustChangePassword: true },
          });
          pessoa = {
            id: updated.id,
            cpf: updated.cpf,
            email: updated.email,
            mustChangePassword: true,
          };
          byEmail.set(email.toLowerCase(), pessoa);
          atualizados += 1;
        } else {
          if (row.pessoaId !== pessoa.id) {
            await prisma.inscricaoStartup.update({
              where: { id: row.id },
              data: { pessoaId: pessoa.id },
            });
          }
          ignorados += 1;
          continue;
        }
      } else {
        let cpf = row.responsavelCpf || '';
        if (!cpf || usedCpfs.has(cpf)) {
          cpf = allocateCpf(edicao.id, email, usedCpfs);
        } else {
          usedCpfs.add(cpf);
        }
        const created = await prisma.pessoa.create({
          data: {
            edicaoId: edicao.id,
            cpf,
            nome: row.responsavelNome || row.nomeStartup || 'Startup',
            email,
            telefone: row.responsavelTelefone,
            senhaHash: hash,
            mustChangePassword: true,
            lgpdAceitoEm: row.lgpdAceitoEm || new Date(),
          },
        });
        pessoa = {
          id: created.id,
          cpf: created.cpf,
          email: created.email,
          mustChangePassword: true,
        };
        byEmail.set(email.toLowerCase(), pessoa);
        provisionados += 1;
      }

      await prisma.inscricaoStartup.update({
        where: { id: row.id },
        data: {
          pessoaId: pessoa.id,
          senhaHash: hash,
        },
      });
    } catch (err) {
      erros.push(`${email}: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  console.log(
    JSON.stringify(
      {
        total: rows.length,
        provisionados,
        atualizados,
        ignorados,
        erros,
        senhaTemporaria: SENHA,
      },
      null,
      2,
    ),
  );
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
