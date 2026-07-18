-- AlterEnum FasePremio
ALTER TYPE "FasePremio" ADD VALUE 'FASE_3_COLEGIO_SELETOR';
ALTER TYPE "FasePremio" ADD VALUE 'FASE_4_VOTO_POPULAR';
ALTER TYPE "FasePremio" ADD VALUE 'FASE_5_APURACAO';

-- CreateEnum
CREATE TYPE "TipoLider" AS ENUM ('SEMENTE', 'COMUNITARIO');
CREATE TYPE "StatusIndicacao" AS ENUM ('ATIVA', 'CANCELADA');
CREATE TYPE "StatusSelecaoColegio" AS ENUM ('EM_ANALISE', 'AVANCADA', 'REJEITADA', 'ABSTENCAO');
CREATE TYPE "TipoAuditoria" AS ENUM ('VOTO', 'INDICACAO', 'SELECAO_COLEGIO', 'FASE_ALTERADA', 'RESULTADO_PUBLICADO', 'LOGIN', 'DADOS_ALTERADOS');
CREATE TYPE "PapelAuditoria" AS ENUM ('ADMIN', 'LIDER', 'EMPREENDEDOR', 'SISTEMA');

-- AlterTable edicoes
ALTER TABLE "edicoes"
  ADD COLUMN "indicacoes_abertas" BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN "colegio_habilitado" BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN "x_lideres_colegio" INTEGER NOT NULL DEFAULT 1,
  ADD COLUMN "n_finalistas_por_categoria" INTEGER NOT NULL DEFAULT 3,
  ADD COLUMN "cotas_regionais_ativas" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable comunidades
ALTER TABLE "comunidades"
  ADD COLUMN "is_padrao_startup_piaui" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable lideres
ALTER TABLE "lideres"
  ADD COLUMN "tipo_lider" "TipoLider" NOT NULL DEFAULT 'SEMENTE',
  ADD COLUMN "nomeado_por_id" TEXT;

-- AlterTable inscricoes_startup
ALTER TABLE "inscricoes_startup"
  ADD COLUMN "senha_hash" TEXT,
  ADD COLUMN "logo_url" TEXT,
  ADD COLUMN "pitch_curto" TEXT,
  ADD COLUMN "video_url" TEXT,
  ADD COLUMN "metricas_json" JSONB;

-- AlterTable votos
ALTER TABLE "votos"
  ADD COLUMN "votante_lider_id" TEXT,
  ADD COLUMN "votante_inscricao_id" TEXT;

-- CreateTable startup_comunidade_badges
CREATE TABLE "startup_comunidade_badges" (
    "id" TEXT NOT NULL,
    "edicao_id" TEXT NOT NULL,
    "inscricao_startup_id" TEXT NOT NULL,
    "comunidade_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "startup_comunidade_badges_pkey" PRIMARY KEY ("id")
);

-- CreateTable indicacoes
CREATE TABLE "indicacoes" (
    "id" TEXT NOT NULL,
    "edicao_id" TEXT NOT NULL,
    "categoria_id" TEXT NOT NULL,
    "inscricao_startup_id" TEXT NOT NULL,
    "indicante_lider_id" TEXT,
    "indicante_inscricao_id" TEXT,
    "justificativa" TEXT,
    "status" "StatusIndicacao" NOT NULL DEFAULT 'ATIVA',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "indicacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable membros_colegio
CREATE TABLE "membros_colegio" (
    "id" TEXT NOT NULL,
    "edicao_id" TEXT NOT NULL,
    "comunidade_id" TEXT NOT NULL,
    "lider_id" TEXT NOT NULL,
    "apontado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "membros_colegio_pkey" PRIMARY KEY ("id")
);

-- CreateTable selecoes_colegio
CREATE TABLE "selecoes_colegio" (
    "id" TEXT NOT NULL,
    "edicao_id" TEXT NOT NULL,
    "categoria_id" TEXT NOT NULL,
    "inscricao_startup_id" TEXT NOT NULL,
    "membro_colegio_id" TEXT NOT NULL,
    "status" "StatusSelecaoColegio" NOT NULL,
    "conflito_interesse" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "selecoes_colegio_pkey" PRIMARY KEY ("id")
);

-- CreateTable resultados_categoria
CREATE TABLE "resultados_categoria" (
    "id" TEXT NOT NULL,
    "edicao_id" TEXT NOT NULL,
    "categoria_id" TEXT NOT NULL,
    "finalista_id" TEXT NOT NULL,
    "total_votos" INTEGER NOT NULL,
    "publicado_em" TIMESTAMP(3),
    "validado_por_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "resultados_categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable atas_apuracao
CREATE TABLE "atas_apuracao" (
    "id" TEXT NOT NULL,
    "edicao_id" TEXT NOT NULL,
    "conteudo_md" TEXT NOT NULL,
    "publicada_em" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "atas_apuracao_pkey" PRIMARY KEY ("id")
);

-- CreateTable auditoria_eventos
CREATE TABLE "auditoria_eventos" (
    "id" TEXT NOT NULL,
    "edicao_id" TEXT,
    "tipo" "TipoAuditoria" NOT NULL,
    "ator_papel" "PapelAuditoria",
    "ator_id" TEXT,
    "cpf_hash" TEXT,
    "payload" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "auditoria_eventos_pkey" PRIMARY KEY ("id")
);

-- Indexes / uniques
CREATE UNIQUE INDEX "startup_comunidade_badges_inscricao_startup_id_comunidade_id_key"
  ON "startup_comunidade_badges"("inscricao_startup_id", "comunidade_id");

CREATE INDEX "indicacoes_edicao_id_categoria_id_idx"
  ON "indicacoes"("edicao_id", "categoria_id");

CREATE UNIQUE INDEX "membros_colegio_edicao_id_lider_id_key"
  ON "membros_colegio"("edicao_id", "lider_id");

CREATE UNIQUE INDEX "membros_colegio_edicao_id_comunidade_id_lider_id_key"
  ON "membros_colegio"("edicao_id", "comunidade_id", "lider_id");

CREATE UNIQUE INDEX "selecoes_colegio_edicao_id_categoria_id_inscricao_startup_id_membro_colegio_id_key"
  ON "selecoes_colegio"("edicao_id", "categoria_id", "inscricao_startup_id", "membro_colegio_id");

CREATE UNIQUE INDEX "resultados_categoria_edicao_id_categoria_id_key"
  ON "resultados_categoria"("edicao_id", "categoria_id");

CREATE INDEX "auditoria_eventos_edicao_id_tipo_idx"
  ON "auditoria_eventos"("edicao_id", "tipo");

-- Foreign keys
ALTER TABLE "lideres"
  ADD CONSTRAINT "lideres_nomeado_por_id_fkey"
  FOREIGN KEY ("nomeado_por_id") REFERENCES "lideres"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "votos"
  ADD CONSTRAINT "votos_votante_lider_id_fkey"
  FOREIGN KEY ("votante_lider_id") REFERENCES "lideres"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "votos"
  ADD CONSTRAINT "votos_votante_inscricao_id_fkey"
  FOREIGN KEY ("votante_inscricao_id") REFERENCES "inscricoes_startup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "startup_comunidade_badges"
  ADD CONSTRAINT "startup_comunidade_badges_edicao_id_fkey"
  FOREIGN KEY ("edicao_id") REFERENCES "edicoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "startup_comunidade_badges"
  ADD CONSTRAINT "startup_comunidade_badges_inscricao_startup_id_fkey"
  FOREIGN KEY ("inscricao_startup_id") REFERENCES "inscricoes_startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "startup_comunidade_badges"
  ADD CONSTRAINT "startup_comunidade_badges_comunidade_id_fkey"
  FOREIGN KEY ("comunidade_id") REFERENCES "comunidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "indicacoes"
  ADD CONSTRAINT "indicacoes_edicao_id_fkey"
  FOREIGN KEY ("edicao_id") REFERENCES "edicoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "indicacoes"
  ADD CONSTRAINT "indicacoes_categoria_id_fkey"
  FOREIGN KEY ("categoria_id") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "indicacoes"
  ADD CONSTRAINT "indicacoes_inscricao_startup_id_fkey"
  FOREIGN KEY ("inscricao_startup_id") REFERENCES "inscricoes_startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "indicacoes"
  ADD CONSTRAINT "indicacoes_indicante_lider_id_fkey"
  FOREIGN KEY ("indicante_lider_id") REFERENCES "lideres"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "indicacoes"
  ADD CONSTRAINT "indicacoes_indicante_inscricao_id_fkey"
  FOREIGN KEY ("indicante_inscricao_id") REFERENCES "inscricoes_startup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "membros_colegio"
  ADD CONSTRAINT "membros_colegio_edicao_id_fkey"
  FOREIGN KEY ("edicao_id") REFERENCES "edicoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "membros_colegio"
  ADD CONSTRAINT "membros_colegio_comunidade_id_fkey"
  FOREIGN KEY ("comunidade_id") REFERENCES "comunidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "membros_colegio"
  ADD CONSTRAINT "membros_colegio_lider_id_fkey"
  FOREIGN KEY ("lider_id") REFERENCES "lideres"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "selecoes_colegio"
  ADD CONSTRAINT "selecoes_colegio_edicao_id_fkey"
  FOREIGN KEY ("edicao_id") REFERENCES "edicoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "selecoes_colegio"
  ADD CONSTRAINT "selecoes_colegio_categoria_id_fkey"
  FOREIGN KEY ("categoria_id") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "selecoes_colegio"
  ADD CONSTRAINT "selecoes_colegio_inscricao_startup_id_fkey"
  FOREIGN KEY ("inscricao_startup_id") REFERENCES "inscricoes_startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "selecoes_colegio"
  ADD CONSTRAINT "selecoes_colegio_membro_colegio_id_fkey"
  FOREIGN KEY ("membro_colegio_id") REFERENCES "membros_colegio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "resultados_categoria"
  ADD CONSTRAINT "resultados_categoria_edicao_id_fkey"
  FOREIGN KEY ("edicao_id") REFERENCES "edicoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "resultados_categoria"
  ADD CONSTRAINT "resultados_categoria_categoria_id_fkey"
  FOREIGN KEY ("categoria_id") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "resultados_categoria"
  ADD CONSTRAINT "resultados_categoria_finalista_id_fkey"
  FOREIGN KEY ("finalista_id") REFERENCES "finalistas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "resultados_categoria"
  ADD CONSTRAINT "resultados_categoria_validado_por_id_fkey"
  FOREIGN KEY ("validado_por_id") REFERENCES "usuarios_admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "atas_apuracao"
  ADD CONSTRAINT "atas_apuracao_edicao_id_fkey"
  FOREIGN KEY ("edicao_id") REFERENCES "edicoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "auditoria_eventos"
  ADD CONSTRAINT "auditoria_eventos_edicao_id_fkey"
  FOREIGN KEY ("edicao_id") REFERENCES "edicoes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
