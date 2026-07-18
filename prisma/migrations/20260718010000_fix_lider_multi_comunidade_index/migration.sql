-- A migration pessoa_multi_papel usava DROP CONSTRAINT, mas o init
-- criou UNIQUE INDEX (não constraint). O índice antigo impedia o mesmo
-- CPF de ser líder em mais de uma comunidade na mesma edição.
DROP INDEX IF EXISTS "lideres_edicao_id_cpf_key";
DROP INDEX IF EXISTS "lideres_edicao_id_email_key";
