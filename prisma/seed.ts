import 'dotenv/config';
import * as bcrypt from 'bcrypt';
import { PrismaPg } from '@prisma/adapter-pg';
import { FasePremio, PrismaClient } from '../generated/prisma/client';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

async function main() {
  await prisma.voto.deleteMany();
  await prisma.resultadoCategoria.deleteMany();
  await prisma.ataApuracao.deleteMany();
  await prisma.testemunhaApuracao.deleteMany();
  await prisma.regulamentoVersao.deleteMany();
  await prisma.selecaoColegio.deleteMany();
  await prisma.membroColegio.deleteMany();
  await prisma.indicacao.deleteMany();
  await prisma.startupComunidadeBadge.deleteMany();
  await prisma.auditoriaEvento.deleteMany();
  await prisma.finalista.deleteMany();
  await prisma.categoria.deleteMany();
  await prisma.importacaoLote.deleteMany();
  await prisma.inscricaoStartup.deleteMany();
  await prisma.linkComunidade.deleteMany();
  await prisma.lider.deleteMany();
  await prisma.pessoa.deleteMany();
  await prisma.convite.deleteMany();
  await prisma.comunidade.deleteMany();
  await prisma.usuarioAdmin.deleteMany();
  await prisma.edicao.deleteMany();

  await prisma.edicao.create({
    data: {
      nome: 'Prêmio Comunitário de Startups do Piauí',
      ano: 2026,
      faseAtual: FasePremio.FASE_2_INDICACOES,
      votacaoAberta: false,
      indicacoesAbertas: true,
      indicacoesInicio: new Date(Date.UTC(2026, 6, 10)),
      indicacoesFim: new Date(Date.UTC(2026, 7, 31, 23, 59, 59, 999)),
      ativa: true,
    },
  });

  await prisma.usuarioAdmin.create({
    data: {
      nome: 'Admin Startup Piauí',
      email: 'admin@premiopiaui.org',
      senhaHash: await bcrypt.hash('admin123', 10),
    },
  });

  console.log('Seed concluído.');
  console.log('Admin: admin@premiopiaui.org / admin123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
