/**
 * Gera um pico de votos (≥20 na mesma hora) para testar anomalias no admin.
 * Uso: npx tsx prisma/seed-anomalia.ts
 */
import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
});

/** Gera CPF-like único de 11 dígitos (não valida dígitos verificadores). */
function fakeCpf(i: number) {
  return String(90000000000 + i).padStart(11, '0');
}

async function main() {
  const edicao = await prisma.edicao.findFirst({
    where: { ativa: true },
    orderBy: { ano: 'desc' },
  });
  if (!edicao) throw new Error('Nenhuma edição ativa.');

  await prisma.edicao.update({
    where: { id: edicao.id },
    data: { votacaoAberta: true },
  });

  const finalista = await prisma.finalista.findFirst({
    where: { edicaoId: edicao.id, ativo: true },
    include: {
      inscricaoStartup: { select: { nomeStartup: true } },
      categoria: { select: { nome: true } },
    },
  });
  if (!finalista) {
    throw new Error('Nenhum finalista na edição. Rode o seed principal primeiro.');
  }

  // Remove votos de demonstração anteriores deste script
  await prisma.voto.deleteMany({
    where: {
      edicaoId: edicao.id,
      cpf: { startsWith: '900' },
    },
  });

  const picoEm = new Date();
  picoEm.setMinutes(30, 0, 0); // mesma hora UTC/local para o bucket ISO slice(0,13)

  const quantidade = 25;
  const data = Array.from({ length: quantidade }, (_, i) => ({
    edicaoId: edicao.id,
    finalistaId: finalista.id,
    votanteNome: `Votante demo ${i + 1}`,
    cpf: fakeCpf(i),
    lgpdAceitoEm: picoEm,
    createdAt: picoEm,
    // sem vínculo → também dispara votosSemElegibilidade
    votanteLiderId: null,
    votanteInscricaoId: null,
    pessoaId: null,
  }));

  await prisma.voto.createMany({ data });

  const horaKey = picoEm.toISOString().slice(0, 13);
  console.log('Anomalia de demonstração criada.');
  console.log(`Edição: ${edicao.nome} (${edicao.ano})`);
  console.log(
    `Finalista: ${finalista.inscricaoStartup.nomeStartup} · ${finalista.categoria.nome}`,
  );
  console.log(`Votos inseridos: ${quantidade} · bucket hora: ${horaKey}`);
  console.log('Abra o admin → Apuração → Anomalias de voto (Atualizar).');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
