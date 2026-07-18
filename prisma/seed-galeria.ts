import 'dotenv/config';
import { randomBytes } from 'crypto';
import { PrismaPg } from '@prisma/adapter-pg';
import {
  FasePremio,
  PrismaClient,
  StatusTestemunhaApuracao,
} from '../generated/prisma/client';

/**
 * Cria uma edição encerrada (2025) com vencedores publicados + testemunha
 * confirmada, para popular a galeria/histórico sem afetar a edição ativa.
 *
 * Uso: npx tsx prisma/seed-galeria.ts
 */
const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

async function main() {
  const edicaoAtiva = await prisma.edicao.findFirst({ where: { ativa: true } });
  if (!edicaoAtiva) {
    throw new Error('Nenhuma edição ativa. Rode o seed principal antes.');
  }

  const startups = await prisma.inscricaoStartup.findMany({
    where: { edicaoId: edicaoAtiva.id },
    take: 5,
    orderBy: { createdAt: 'asc' },
  });
  if (startups.length < 2) {
    throw new Error('Precisa de ao menos 2 startups na edição ativa (rode o seed).');
  }

  let edicaoPassada = await prisma.edicao.findFirst({ where: { ano: 2025 } });
  if (edicaoPassada) {
    await prisma.resultadoCategoria.deleteMany({ where: { edicaoId: edicaoPassada.id } });
    await prisma.ataApuracao.deleteMany({ where: { edicaoId: edicaoPassada.id } });
    await prisma.testemunhaApuracao.deleteMany({ where: { edicaoId: edicaoPassada.id } });
    await prisma.finalista.deleteMany({ where: { edicaoId: edicaoPassada.id } });
    await prisma.categoria.deleteMany({ where: { edicaoId: edicaoPassada.id } });
    edicaoPassada = await prisma.edicao.update({
      where: { id: edicaoPassada.id },
      data: {
        nome: 'Prêmio Comunitário de Startups do Piauí — 2025',
        faseAtual: FasePremio.FASE_5_APURACAO,
        votacaoAberta: false,
        indicacoesAbertas: false,
        ativa: false,
      },
    });
  } else {
    edicaoPassada = await prisma.edicao.create({
      data: {
        nome: 'Prêmio Comunitário de Startups do Piauí — 2025',
        ano: 2025,
        faseAtual: FasePremio.FASE_5_APURACAO,
        votacaoAberta: false,
        indicacoesAbertas: false,
        ativa: false,
      },
    });
  }

  const nomesCat = ['Impacto social', 'Agrotech', 'Cidades inteligentes'];
  const categorias = [];
  for (let i = 0; i < nomesCat.length; i++) {
    categorias.push(
      await prisma.categoria.create({
        data: {
          edicaoId: edicaoPassada.id,
          nome: nomesCat[i],
          ordem: i + 1,
        },
      }),
    );
  }

  const publicados = [];
  for (let i = 0; i < categorias.length; i++) {
    const startup = startups[i % startups.length];
    const finalista = await prisma.finalista.create({
      data: {
        edicaoId: edicaoPassada.id,
        categoriaId: categorias[i].id,
        inscricaoStartupId: startup.id,
        ativo: true,
      },
    });
    const resultado = await prisma.resultadoCategoria.create({
      data: {
        edicaoId: edicaoPassada.id,
        categoriaId: categorias[i].id,
        finalistaId: finalista.id,
        totalVotos: 40 + i * 7,
        publicadoEm: new Date('2025-11-20T18:00:00.000Z'),
      },
    });
    publicados.push({ categoria: categorias[i].nome, startup: startup.nomeStartup, votos: resultado.totalVotos });
  }

  await prisma.ataApuracao.create({
    data: {
      edicaoId: edicaoPassada.id,
      conteudoMd: `# Ata de apuração — ${edicaoPassada.nome}\n\nEdição histórica (seed).`,
      publicadaEm: new Date('2025-11-20T18:00:00.000Z'),
    },
  });

  await prisma.testemunhaApuracao.create({
    data: {
      edicaoId: edicaoPassada.id,
      nome: 'Maria Observadora',
      email: 'testemunha2025@exemplo.org',
      organizacao: 'Rede Nordeste de Inovação',
      token: randomBytes(16).toString('hex'),
      status: StatusTestemunhaApuracao.CONFIRMADA,
      confirmadaEm: new Date('2025-11-19T15:00:00.000Z'),
      observacao: 'Acompanhei a apuração da edição 2025.',
    },
  });

  console.log('Galeria seed OK — edição 2025 com vencedores:');
  for (const p of publicados) {
    console.log(`  - ${p.categoria}: ${p.startup} (${p.votos} votos)`);
  }
  console.log('Acesse /galeria.html no front.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
