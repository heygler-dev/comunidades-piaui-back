-- CreateEnum
CREATE TYPE "StatusSolicitacao" AS ENUM ('PENDENTE', 'APROVADA', 'REJEITADA');

-- CreateEnum
CREATE TYPE "TipoSolicitacaoCadastro" AS ENUM ('LIDER', 'STARTUP');

-- CreateTable
CREATE TABLE "solicitacoes_cadastro" (
    "id" TEXT NOT NULL,
    "edicao_id" TEXT NOT NULL,
    "comunidade_id" TEXT NOT NULL,
    "tipo" "TipoSolicitacaoCadastro" NOT NULL,
    "status" "StatusSolicitacao" NOT NULL DEFAULT 'PENDENTE',
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "senha_hash" TEXT NOT NULL,
    "lgpd_aceito_em" TIMESTAMP(3) NOT NULL,
    "nome_startup" TEXT,
    "categoria" TEXT,
    "cidade_operacao" TEXT,
    "site" TEXT,
    "descricao" TEXT,
    "cpf_unico_confirmado" BOOLEAN NOT NULL DEFAULT false,
    "revisado_por_lider_id" TEXT,
    "revisado_em" TIMESTAMP(3),
    "motivo_rejeicao" TEXT,
    "inscricao_startup_id" TEXT,
    "lider_criado_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "solicitacoes_cadastro_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "solicitacoes_cadastro_inscricao_startup_id_key" ON "solicitacoes_cadastro"("inscricao_startup_id");

-- CreateIndex
CREATE INDEX "solicitacoes_cadastro_comunidade_id_status_tipo_idx" ON "solicitacoes_cadastro"("comunidade_id", "status", "tipo");

-- CreateIndex
CREATE INDEX "solicitacoes_cadastro_edicao_id_cpf_idx" ON "solicitacoes_cadastro"("edicao_id", "cpf");

-- AddForeignKey
ALTER TABLE "solicitacoes_cadastro" ADD CONSTRAINT "solicitacoes_cadastro_edicao_id_fkey" FOREIGN KEY ("edicao_id") REFERENCES "edicoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitacoes_cadastro" ADD CONSTRAINT "solicitacoes_cadastro_comunidade_id_fkey" FOREIGN KEY ("comunidade_id") REFERENCES "comunidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitacoes_cadastro" ADD CONSTRAINT "solicitacoes_cadastro_revisado_por_lider_id_fkey" FOREIGN KEY ("revisado_por_lider_id") REFERENCES "lideres"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitacoes_cadastro" ADD CONSTRAINT "solicitacoes_cadastro_inscricao_startup_id_fkey" FOREIGN KEY ("inscricao_startup_id") REFERENCES "inscricoes_startup"("id") ON DELETE SET NULL ON UPDATE CASCADE;
