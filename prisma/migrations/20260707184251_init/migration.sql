-- CreateEnum
CREATE TYPE "FasePremio" AS ENUM ('FASE_1_CADASTRO', 'FASE_2_INDICACOES', 'FASE_3_VOTO_POPULAR');

-- CreateEnum
CREATE TYPE "TipoConvite" AS ENUM ('LIDER', 'STARTUP');

-- CreateEnum
CREATE TYPE "StatusParticipante" AS ENUM ('ATIVO', 'PENDENTE');

-- CreateEnum
CREATE TYPE "StatusInscricaoStartup" AS ENUM ('RASCUNHO', 'PENDENTE', 'ATIVO', 'CANCELADO');

-- CreateEnum
CREATE TYPE "OrigemCadastro" AS ENUM ('PORTAL', 'MANUAL', 'IMPORTACAO');

-- CreateTable
CREATE TABLE "edicoes" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "fase_atual" "FasePremio" NOT NULL DEFAULT 'FASE_1_CADASTRO',
    "votacao_aberta" BOOLEAN NOT NULL DEFAULT false,
    "ativa" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "edicoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios_admin" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha_hash" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comunidades" (
    "id" TEXT NOT NULL,
    "edicao_id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'PI',
    "slug" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'ativa',
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comunidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "convites" (
    "id" TEXT NOT NULL,
    "edicao_id" TEXT NOT NULL,
    "comunidade_id" TEXT NOT NULL,
    "tipo" "TipoConvite" NOT NULL,
    "token" TEXT NOT NULL,
    "criado_por_id" TEXT,
    "lider_criador_id" TEXT,
    "expira_em" TIMESTAMP(3),
    "usado_em" TIMESTAMP(3),
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "convites_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lideres" (
    "id" TEXT NOT NULL,
    "edicao_id" TEXT NOT NULL,
    "comunidade_id" TEXT NOT NULL,
    "convite_id" TEXT,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "senha_hash" TEXT NOT NULL,
    "status" "StatusParticipante" NOT NULL DEFAULT 'ATIVO',
    "lgpd_aceito_em" TIMESTAMP(3) NOT NULL,
    "ativado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lideres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "links_comunidade" (
    "id" TEXT NOT NULL,
    "edicao_id" TEXT NOT NULL,
    "comunidade_id" TEXT NOT NULL,
    "lider_id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "links_comunidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inscricoes_startup" (
    "id" TEXT NOT NULL,
    "edicao_id" TEXT NOT NULL,
    "comunidade_id" TEXT NOT NULL,
    "lider_id" TEXT,
    "link_comunidade_id" TEXT,
    "responsavel_nome" TEXT,
    "responsavel_cpf" TEXT,
    "responsavel_telefone" TEXT,
    "responsavel_email" TEXT,
    "nome_startup" TEXT,
    "categoria" TEXT,
    "cidade_operacao" TEXT,
    "site" TEXT,
    "descricao" TEXT,
    "etapa_atual" INTEGER NOT NULL DEFAULT 1,
    "status" "StatusInscricaoStartup" NOT NULL DEFAULT 'RASCUNHO',
    "slug_publico" TEXT,
    "lgpd_aceito_em" TIMESTAMP(3),
    "cpf_unico_confirmado" BOOLEAN NOT NULL DEFAULT false,
    "confirmado_em" TIMESTAMP(3),
    "origem" "OrigemCadastro" NOT NULL DEFAULT 'PORTAL',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "inscricoes_startup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categorias" (
    "id" TEXT NOT NULL,
    "edicao_id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "ordem" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "finalistas" (
    "id" TEXT NOT NULL,
    "edicao_id" TEXT NOT NULL,
    "categoria_id" TEXT NOT NULL,
    "inscricao_startup_id" TEXT NOT NULL,
    "meta_resumo" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "finalistas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "votos" (
    "id" TEXT NOT NULL,
    "edicao_id" TEXT NOT NULL,
    "finalista_id" TEXT NOT NULL,
    "votante_nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "lgpd_aceito_em" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "votos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "importacoes_lote" (
    "id" TEXT NOT NULL,
    "edicao_id" TEXT NOT NULL,
    "arquivo_nome" TEXT NOT NULL,
    "total_linhas" INTEGER NOT NULL,
    "importadas" INTEGER NOT NULL,
    "ignoradas" INTEGER NOT NULL,
    "erros_json" JSONB,
    "admin_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "importacoes_lote_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_admin_email_key" ON "usuarios_admin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "comunidades_edicao_id_slug_key" ON "comunidades"("edicao_id", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "convites_token_key" ON "convites"("token");

-- CreateIndex
CREATE UNIQUE INDEX "lideres_edicao_id_cpf_key" ON "lideres"("edicao_id", "cpf");

-- CreateIndex
CREATE UNIQUE INDEX "lideres_edicao_id_email_key" ON "lideres"("edicao_id", "email");

-- CreateIndex
CREATE UNIQUE INDEX "links_comunidade_slug_key" ON "links_comunidade"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "inscricoes_startup_slug_publico_key" ON "inscricoes_startup"("slug_publico");

-- CreateIndex
CREATE UNIQUE INDEX "inscricoes_startup_edicao_id_responsavel_cpf_key" ON "inscricoes_startup"("edicao_id", "responsavel_cpf");

-- CreateIndex
CREATE UNIQUE INDEX "categorias_edicao_id_nome_key" ON "categorias"("edicao_id", "nome");

-- CreateIndex
CREATE UNIQUE INDEX "finalistas_edicao_id_categoria_id_inscricao_startup_id_key" ON "finalistas"("edicao_id", "categoria_id", "inscricao_startup_id");

-- CreateIndex
CREATE UNIQUE INDEX "votos_edicao_id_cpf_key" ON "votos"("edicao_id", "cpf");

-- AddForeignKey
ALTER TABLE "comunidades" ADD CONSTRAINT "comunidades_edicao_id_fkey" FOREIGN KEY ("edicao_id") REFERENCES "edicoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comunidades" ADD CONSTRAINT "comunidades_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "usuarios_admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "convites" ADD CONSTRAINT "convites_edicao_id_fkey" FOREIGN KEY ("edicao_id") REFERENCES "edicoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "convites" ADD CONSTRAINT "convites_comunidade_id_fkey" FOREIGN KEY ("comunidade_id") REFERENCES "comunidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "convites" ADD CONSTRAINT "convites_criado_por_id_fkey" FOREIGN KEY ("criado_por_id") REFERENCES "usuarios_admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "convites" ADD CONSTRAINT "convites_lider_criador_id_fkey" FOREIGN KEY ("lider_criador_id") REFERENCES "lideres"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lideres" ADD CONSTRAINT "lideres_edicao_id_fkey" FOREIGN KEY ("edicao_id") REFERENCES "edicoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lideres" ADD CONSTRAINT "lideres_comunidade_id_fkey" FOREIGN KEY ("comunidade_id") REFERENCES "comunidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lideres" ADD CONSTRAINT "lideres_convite_id_fkey" FOREIGN KEY ("convite_id") REFERENCES "convites"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "links_comunidade" ADD CONSTRAINT "links_comunidade_edicao_id_fkey" FOREIGN KEY ("edicao_id") REFERENCES "edicoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "links_comunidade" ADD CONSTRAINT "links_comunidade_comunidade_id_fkey" FOREIGN KEY ("comunidade_id") REFERENCES "comunidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "links_comunidade" ADD CONSTRAINT "links_comunidade_lider_id_fkey" FOREIGN KEY ("lider_id") REFERENCES "lideres"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inscricoes_startup" ADD CONSTRAINT "inscricoes_startup_edicao_id_fkey" FOREIGN KEY ("edicao_id") REFERENCES "edicoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inscricoes_startup" ADD CONSTRAINT "inscricoes_startup_comunidade_id_fkey" FOREIGN KEY ("comunidade_id") REFERENCES "comunidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inscricoes_startup" ADD CONSTRAINT "inscricoes_startup_lider_id_fkey" FOREIGN KEY ("lider_id") REFERENCES "lideres"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inscricoes_startup" ADD CONSTRAINT "inscricoes_startup_link_comunidade_id_fkey" FOREIGN KEY ("link_comunidade_id") REFERENCES "links_comunidade"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categorias" ADD CONSTRAINT "categorias_edicao_id_fkey" FOREIGN KEY ("edicao_id") REFERENCES "edicoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "finalistas" ADD CONSTRAINT "finalistas_edicao_id_fkey" FOREIGN KEY ("edicao_id") REFERENCES "edicoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "finalistas" ADD CONSTRAINT "finalistas_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "finalistas" ADD CONSTRAINT "finalistas_inscricao_startup_id_fkey" FOREIGN KEY ("inscricao_startup_id") REFERENCES "inscricoes_startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "votos" ADD CONSTRAINT "votos_edicao_id_fkey" FOREIGN KEY ("edicao_id") REFERENCES "edicoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "votos" ADD CONSTRAINT "votos_finalista_id_fkey" FOREIGN KEY ("finalista_id") REFERENCES "finalistas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "importacoes_lote" ADD CONSTRAINT "importacoes_lote_edicao_id_fkey" FOREIGN KEY ("edicao_id") REFERENCES "edicoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "importacoes_lote" ADD CONSTRAINT "importacoes_lote_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "usuarios_admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
