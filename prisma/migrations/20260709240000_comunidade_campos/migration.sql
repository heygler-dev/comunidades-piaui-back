-- AlterTable
ALTER TABLE "comunidades" ADD COLUMN IF NOT EXISTS "descricao" TEXT;
ALTER TABLE "comunidades" ADD COLUMN IF NOT EXISTS "institucional" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "comunidades" ADD COLUMN IF NOT EXISTS "cidades_atuacao" TEXT;
ALTER TABLE "comunidades" ADD COLUMN IF NOT EXISTS "logo_url" TEXT;
