# Prêmio Comunitário de Startups do Piauí — API

Backend em **NestJS + Prisma + PostgreSQL** para o portal de cadastro, painel administrativo e voto popular.

---

## Requisitos

| Ferramenta | Versão |
|------------|--------|
| Node.js | 20.19+ (veja `.nvmrc`) |
| PostgreSQL | 14+ instalado e em execução |
| npm | 10+ |

> O Prisma **não substitui** o PostgreSQL. Ele gera o client e aplica as migrations em um banco que já precisa estar rodando.

---

## Como subir o projeto (passo a passo)

### 1. Entrar na pasta e usar o Node correto

```bash
cd premio-back
nvm use          # usa a versão do .nvmrc (20.19.1)
npm install
```

### 2. Configurar o PostgreSQL

O banco precisa existir **antes** de rodar as migrations. Com Postgres local (porta padrão **5432**):

```bash
sudo -u postgres psql
```

```sql
CREATE USER premio WITH PASSWORD 'premio123';
CREATE DATABASE premio_piaui OWNER premio;
GRANT ALL PRIVILEGES ON DATABASE premio_piaui TO premio;
\q
```

Se preferir usar o usuário `postgres` que já existe na sua máquina, pule a criação do usuário e use suas credenciais no `.env`.

### 3. Variáveis de ambiente

```bash
cp .env.example .env
```

Edite o `.env` e confira a `DATABASE_URL`. Exemplo com Postgres local na porta **5432**:

```env
DATABASE_URL="postgresql://premio:premio123@localhost:5432/premio_piaui?schema=public"
JWT_SECRET="premio-piaui-dev-secret-change-in-production"
JWT_EXPIRES_IN="7d"
PORT=3000
```

Ajuste **usuário**, **senha** e **porta** conforme a sua instalação.

### 4. Prisma — gerar client, migrations e seed

```bash
npx prisma generate
npx prisma migrate dev
npm run db:seed
```

| Comando | O que faz |
|---------|-----------|
| `prisma generate` | Gera o Prisma Client em `generated/prisma` |
| `prisma migrate dev` | Cria/aplica as tabelas no banco (use este, **não** `migrate init`) |
| `npm run db:seed` | Popula admin e edição ativa de teste |

Se aparecer `Already in sync, no schema change or pending migration was found.`, as migrations **já foram aplicadas** — siga para o seed.

### 5. Rodar a API

```bash
npm run start:dev
```

API disponível em **http://localhost:3000**.

### 6. Testar se a API responde

```bash
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@premiopiaui.org","senha":"admin123"}'
```

Se retornar `access_token`, está funcionando. Para testar todas as rotas com interface gráfica, use o Insomnia (próxima seção).

---

## Resumo rápido (já configurado)

```bash
nvm use
npm install
npx prisma generate
npx prisma migrate dev
npm run db:seed
npm run start:dev
```

---

## Opção alternativa: PostgreSQL via Docker

Se não tiver Postgres instalado localmente:

```bash
docker compose -f docker-compose.dev.yml up -d
```

O container expõe a porta **5434** (mapeada do 5432 interno). Nesse caso, use no `.env`:

```env
DATABASE_URL="postgresql://premio:premio123@localhost:5434/premio_piaui?schema=public"
```

Depois rode os mesmos comandos Prisma (`generate`, `migrate dev`, `seed`).

### Docker (API + Postgres)

```bash
docker compose up -d --build
```

API: http://localhost:3000 (ex.: `GET /api/v1/public/comunidades`)

O front tem Docker próprio em `premio-front`.

---

## Credenciais de desenvolvimento (seed)

| Papel | Login | Senha |
|-------|-------|-------|
| Admin | `admin@premiopiaui.org` | `admin123` |

---

## Testar a API com Insomnia

O projeto inclui uma coleção pronta com **todas as rotas** da API, variáveis de ambiente e exemplos de body.

**Arquivo:** [`insomnia/premio-piaui-api.json`](./insomnia/premio-piaui-api.json)

### Pré-requisito

A API precisa estar rodando:

```bash
npm run start:dev
```

### 1. Instalar o Insomnia

Baixe em [insomnia.rest/download](https://insomnia.rest/download) (versão desktop para Linux).

### 2. Importar a coleção

1. Abra o Insomnia
2. No canto superior esquerdo, clique em **Application** → **Preferences** (ou use o atalho) — *ou* clique no nome do workspace e depois em **Import**
3. Selecione **Import** → **From File** (ou arraste o arquivo para a janela)
4. Navegue até a pasta do projeto e escolha:

   ```
   premio-back/insomnia/premio-piaui-api.json
   ```

5. Confirme a importação. Deve aparecer o workspace **Prêmio Piauí API** com três pastas:
   - **Auth**
   - **Público**
   - **Admin**

> **Dica:** Se já tiver outro workspace aberto, o Insomnia pode perguntar se deseja importar para o workspace atual ou criar um novo. Escolha **criar/importar como novo** para manter a coleção separada.

### 3. Selecionar o environment

1. No canto superior esquerdo da coleção, abra o seletor de environment (ícone de olho ou dropdown)
2. Escolha **Local**
3. Confira se `base_url` está como `http://localhost:3000`

Para editar variáveis: clique na engrenagem ao lado do environment **Local** → **Manage Environments**.

| Variável | Valor padrão | Descrição |
|----------|--------------|-----------|
| `base_url` | `http://localhost:3000` | URL da API |
| `access_token` | *(vazio)* | Preenchido automaticamente após o login |
| `convite_token` | `a91f` | Token de convite de líder (seed) |
| `slug_inscricao` | `cerrado-vivo-a91f` | Slug do link de inscrição (seed) |
| `inscricao_id` | *(vazio)* | ID da inscrição em andamento |
| `inscricao_tipo` | `startup` | `lider` ou `startup` (rotas admin) |
| `comunidade_id` | *(vazio)* | UUID da comunidade |
| `edicao_id` | *(vazio)* | UUID da edição (abrir/fechar votação) |
| `finalista_id` | *(vazio)* | UUID do finalista (registrar voto) |

### 4. Autenticar (rotas admin)

1. Abra a pasta **Auth**
2. Execute **Login** (botão **Send**)
3. A resposta deve conter `access_token`
4. O script da requisição salva o token automaticamente na variável `access_token`

Rotas da pasta **Admin** já usam `Bearer {{ _.access_token }}`. Se receber **401 Unauthorized**, rode o **Login** novamente.

### 5. Ordem sugerida para testar

**Público — inscrição de startup**

1. `Público → Link inscrição startup`
2. `Público → Criar rascunho inscrição startup` *(salva `inscricao_id`)*
3. `Público → Inscrição — etapa 1`
4. `Público → Inscrição — etapa 2`
5. `Público → Inscrição — confirmar`

**Admin**

1. `Auth → Login`
2. `Admin → Inscrições — estatísticas`
3. `Admin → Inscrições — listar`
4. `Admin → Comunidades — listar`

**Voto popular**

1. `Admin → Finalistas — listar` *(copie um `id` para `finalista_id`)*
2. `Público → Voto — listar categorias`
3. `Público → Voto — listar finalistas`
4. `Público → Voto — registrar`

### 6. Importar planilha no Insomnia

1. `Auth → Login`
2. Abra `Admin → Inscrições — importar startups (completo)`
3. Na aba **Body**, no campo `arquivo`, clique e selecione seu `.xlsx`, `.xls` ou `.csv`
4. Clique em **Send**

A rota `Admin → Inscrições — colunas da planilha startups` lista os cabeçalhos aceitos.

### 7. Problemas comuns no Insomnia

| Problema | Solução |
|----------|---------|
| `ECONNREFUSED` / falha de conexão | Rode `npm run start:dev` e confira `base_url` |
| `401 Unauthorized` nas rotas admin | Execute **Auth → Login** de novo |
| Variáveis `{{ _.inscricao_id }}` vazias | Rode antes a requisição que preenche o ID (ex.: criar rascunho) |
| Upload não envia arquivo | No Body, tipo **Multipart Form**; campo `arquivo` como **File** |

---

## Comandos úteis

| Comando | Descrição |
|---------|-----------|
| `npm run start:dev` | API com hot-reload |
| `npm run build` | Compila o projeto |
| `npm run start:prod` | Roda a versão compilada (`dist/`) |
| `npm run db:reset` | Apaga o banco, reaplica migrations e roda o seed |
| `npx prisma studio` | Interface web para ver/editar dados |
| `docker compose -f docker-compose.dev.yml down` | Para o Postgres local (dev) |
| `docker compose up -d --build` | Sobe API + Postgres |
| `docker compose down` | Para a stack do backend |

---

## Problemas comuns

### Erro de conexão com o banco

- Confira se o PostgreSQL está rodando: `sudo systemctl status postgresql`
- Verifique **porta** na `DATABASE_URL` (`5432` local vs `5434` Docker)
- Confira usuário, senha e se o banco `premio_piaui` existe

### `Already in sync` no migrate

Não é erro. As tabelas já existem. Execute `npm run db:seed` e `npm run start:dev`.

### Banco vazio ou dados antigos

```bash
npm run db:reset
```

---

## Endpoints principais

### Auth

- `POST /api/v1/auth/login`
- `GET /api/v1/auth/me` (Bearer JWT)

### Público

- `GET /api/v1/public/convites/:token`
- `GET /api/v1/public/inscrever/:slug`
- `POST /api/v1/public/lideres/ativar`
- `POST /api/v1/public/inscricoes` — body: `{ "slug": "cerrado-vivo-a91f" }`
- `PATCH /api/v1/public/inscricoes/:id/etapa/1`
- `PATCH /api/v1/public/inscricoes/:id/etapa/2`
- `POST /api/v1/public/inscricoes/:id/confirmar`
- `GET /api/v1/public/voto/categorias`
- `GET /api/v1/public/voto/finalistas?categoria=Agtech`
- `POST /api/v1/public/voto`
- `GET /api/v1/public/voto/total`

### Admin (Bearer JWT)

- `GET /api/v1/admin/inscricoes/stats`
- `GET /api/v1/admin/inscricoes?tipo=&q=`
- `POST /api/v1/admin/inscricoes`
- `PUT /api/v1/admin/inscricoes/:id`
- `DELETE /api/v1/admin/inscricoes/:id?tipo=lider|startup`
- `POST /api/v1/admin/inscricoes/import` — multipart `arquivo` (líderes + startups, colunas básicas)
- `POST /api/v1/admin/inscricoes/import/startups` — multipart `arquivo` (startups com todos os campos)
- `GET /api/v1/admin/inscricoes/import/startups/colunas` — colunas aceitas na planilha
- `GET /api/v1/admin/comunidades`
- `POST /api/v1/admin/comunidades`
- `POST /api/v1/admin/convites/lider`
- `GET /api/v1/admin/finalistas`
- `POST /api/v1/admin/finalistas`
- `PATCH /api/v1/admin/edicoes/:id/votacao` — body: `{ "aberta": true }`

---

## Importação de startups via planilha

**Endpoint:** `POST /api/v1/admin/inscricoes/import/startups`  
**Content-Type:** `multipart/form-data`  
**Campo do arquivo:** `arquivo` (`.xlsx`, `.xls` ou `.csv`)

### Modelo suportado: Dados Gerais.xlsx

A importação lê a aba **`BD`** (quando existir) e cruza CNPJs da aba **`CNPJ`** pelo `id.supi`.

| Campo no sistema | Obrigatório | Cabeçalhos do modelo / aliases |
|------------------|-------------|-------------------------------|
| Nome da startup | Sim | `NOME`, `nome`, `startup`, `empresa` |
| Responsável | Não | `COORDENADOR`, `responsavel` |
| CPF | Não | `CPF`, `cpf` |
| E-mail | Não | `EMAIL`, `email` |
| Telefone | Não | `TELEFONE`, `telefone` |
| Comunidade | Não | `comunidade`, senão `Região`, senão `Origem` (padrão: Não informada) |
| Cidade | Não | `CIDADE`, `cidade` |
| Categoria | Não | `Mercado`, `categoria`, `segmento` |
| Descrição | Não | `O QUE FAZ`, `Solução`, `descricao` |
| Status | Não | `Status no Programa` (`ATIVA`→Ativo, `INATIVA`→Pendente) ou `status` |
| Métricas (JSON) | Não | `id.supi`, `TURMA`, `Origem`, `TRL`, `Maturidade`, `CNPJ`, postos, sócios, faturamento, modelo de negócios, tipo de cliente, estado, região, etc. |

Campos extras da planilha vão para `metricasJson` na inscrição. Consulte `GET /api/v1/admin/inscricoes/import/startups/colunas` para a lista em JSON.

### Exemplo de resposta

```json
{
  "totalLinhas": 10,
  "importadas": 8,
  "ignoradas": 2,
  "erros": [
    { "linha": 5, "motivo": "CPF inválido." },
    { "linha": 9, "motivo": "Nome da startup vazio (use coluna: nome, startup ou empresa)" }
  ]
}
```

Cada startup importada é criada com `origem: IMPORTACAO`, etapas concluídas e slug público gerado automaticamente.
