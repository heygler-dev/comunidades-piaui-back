-- CreateTable pessoas
CREATE TABLE "pessoas" (
    "id" TEXT NOT NULL,
    "edicao_id" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT,
    "senha_hash" TEXT NOT NULL,
    "lgpd_aceito_em" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "pessoas_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "pessoas_edicao_id_cpf_key" ON "pessoas"("edicao_id", "cpf");
CREATE UNIQUE INDEX "pessoas_edicao_id_email_key" ON "pessoas"("edicao_id", "email");

ALTER TABLE "pessoas"
  ADD CONSTRAINT "pessoas_edicao_id_fkey"
  FOREIGN KEY ("edicao_id") REFERENCES "edicoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Backfill pessoas from existing lideres (one row per edicao+cpf)
INSERT INTO "pessoas" ("id", "edicao_id", "cpf", "nome", "email", "telefone", "senha_hash", "lgpd_aceito_em", "created_at", "updated_at")
SELECT DISTINCT ON (l."edicao_id", l."cpf")
  gen_random_uuid()::text,
  l."edicao_id",
  l."cpf",
  l."nome",
  l."email",
  l."telefone",
  l."senha_hash",
  l."lgpd_aceito_em",
  l."created_at",
  NOW()
FROM "lideres" l
ORDER BY l."edicao_id", l."cpf", l."ativado_em" ASC;

-- Backfill pessoas from startups whose CPF is not already a pessoa
INSERT INTO "pessoas" ("id", "edicao_id", "cpf", "nome", "email", "telefone", "senha_hash", "lgpd_aceito_em", "created_at", "updated_at")
SELECT
  gen_random_uuid()::text,
  i."edicao_id",
  i."responsavel_cpf",
  COALESCE(i."responsavel_nome", 'Responsável'),
  COALESCE(i."responsavel_email", i."responsavel_cpf" || '@premio.local'),
  i."responsavel_telefone",
  COALESCE(i."senha_hash", '$2b$10$placeholderplaceholderplaceholde'),
  i."lgpd_aceito_em",
  i."created_at",
  NOW()
FROM "inscricoes_startup" i
WHERE i."responsavel_cpf" IS NOT NULL
  AND NOT EXISTS (
    SELECT 1 FROM "pessoas" p
    WHERE p."edicao_id" = i."edicao_id" AND p."cpf" = i."responsavel_cpf"
  );

-- Alter lideres: add pessoa_id, drop old uniques, add new uniques
ALTER TABLE "lideres" ADD COLUMN "pessoa_id" TEXT;

UPDATE "lideres" l
SET "pessoa_id" = p."id"
FROM "pessoas" p
WHERE p."edicao_id" = l."edicao_id" AND p."cpf" = l."cpf";

ALTER TABLE "lideres" ALTER COLUMN "pessoa_id" SET NOT NULL;

ALTER TABLE "lideres" DROP CONSTRAINT IF EXISTS "lideres_edicao_id_cpf_key";
ALTER TABLE "lideres" DROP CONSTRAINT IF EXISTS "lideres_edicao_id_email_key";

CREATE UNIQUE INDEX "lideres_edicao_id_comunidade_id_cpf_key" ON "lideres"("edicao_id", "comunidade_id", "cpf");
CREATE UNIQUE INDEX "lideres_edicao_id_pessoa_id_comunidade_id_key" ON "lideres"("edicao_id", "pessoa_id", "comunidade_id");
CREATE INDEX "lideres_edicao_id_cpf_idx" ON "lideres"("edicao_id", "cpf");
CREATE INDEX "lideres_edicao_id_email_idx" ON "lideres"("edicao_id", "email");

ALTER TABLE "lideres"
  ADD CONSTRAINT "lideres_pessoa_id_fkey"
  FOREIGN KEY ("pessoa_id") REFERENCES "pessoas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- Alter inscricoes_startup: add pessoa_id
ALTER TABLE "inscricoes_startup" ADD COLUMN "pessoa_id" TEXT;

UPDATE "inscricoes_startup" i
SET "pessoa_id" = p."id"
FROM "pessoas" p
WHERE i."responsavel_cpf" IS NOT NULL
  AND p."edicao_id" = i."edicao_id"
  AND p."cpf" = i."responsavel_cpf";

CREATE INDEX "inscricoes_startup_pessoa_id_idx" ON "inscricoes_startup"("pessoa_id");

ALTER TABLE "inscricoes_startup"
  ADD CONSTRAINT "inscricoes_startup_pessoa_id_fkey"
  FOREIGN KEY ("pessoa_id") REFERENCES "pessoas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Alter votos: add pessoa_id
ALTER TABLE "votos" ADD COLUMN "pessoa_id" TEXT;

UPDATE "votos" v
SET "pessoa_id" = p."id"
FROM "pessoas" p
WHERE p."edicao_id" = v."edicao_id" AND p."cpf" = v."cpf";

ALTER TABLE "votos"
  ADD CONSTRAINT "votos_pessoa_id_fkey"
  FOREIGN KEY ("pessoa_id") REFERENCES "pessoas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
