-- CreateEnum
CREATE TYPE "StatusTestemunhaApuracao" AS ENUM ('CONVITE_PENDENTE', 'CONFIRMADA', 'RECUSADA');

-- CreateTable
CREATE TABLE "testemunhas_apuracao" (
    "id" TEXT NOT NULL,
    "edicao_id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "organizacao" TEXT,
    "token" TEXT NOT NULL,
    "status" "StatusTestemunhaApuracao" NOT NULL DEFAULT 'CONVITE_PENDENTE',
    "convidada_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "confirmada_em" TIMESTAMP(3),
    "observacao" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "testemunhas_apuracao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "testemunhas_apuracao_token_key" ON "testemunhas_apuracao"("token");

-- CreateIndex
CREATE INDEX "testemunhas_apuracao_edicao_id_status_idx" ON "testemunhas_apuracao"("edicao_id", "status");

-- AddForeignKey
ALTER TABLE "testemunhas_apuracao" ADD CONSTRAINT "testemunhas_apuracao_edicao_id_fkey" FOREIGN KEY ("edicao_id") REFERENCES "edicoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
