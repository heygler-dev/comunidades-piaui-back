-- AlterTable
ALTER TABLE "edicoes" ADD COLUMN IF NOT EXISTS "cota_min_capital" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "edicoes" ADD COLUMN IF NOT EXISTS "cota_min_interior" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "edicoes" ADD COLUMN IF NOT EXISTS "cidades_capital" TEXT NOT NULL DEFAULT 'Teresina';
ALTER TABLE "edicoes" ADD COLUMN IF NOT EXISTS "criterios_md" TEXT;

-- CreateTable
CREATE TABLE IF NOT EXISTS "regulamento_versoes" (
    "id" TEXT NOT NULL,
    "edicao_id" TEXT NOT NULL,
    "versao" INTEGER NOT NULL,
    "criterios_md" TEXT NOT NULL,
    "snapshot" JSONB NOT NULL,
    "publicada_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "regulamento_versoes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX IF NOT EXISTS "regulamento_versoes_edicao_id_versao_key" ON "regulamento_versoes"("edicao_id", "versao");

-- CreateIndex
CREATE INDEX IF NOT EXISTS "regulamento_versoes_edicao_id_publicada_em_idx" ON "regulamento_versoes"("edicao_id", "publicada_em");

-- AddForeignKey
DO $$ BEGIN
  ALTER TABLE "regulamento_versoes" ADD CONSTRAINT "regulamento_versoes_edicao_id_fkey"
    FOREIGN KEY ("edicao_id") REFERENCES "edicoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL;
END $$;
