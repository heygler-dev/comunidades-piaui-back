import { normalizeKey } from '../common/utils/normalize-key.util';

/** Campos extras da planilha "Dados Gerais" (aba BD), persistidos em metricasJson. */
export type StartupImportMetricas = {
  idSupi?: string;
  turma?: string;
  mercadoPrioritario?: string;
  statusPrograma?: string;
  origemPrograma?: string;
  trl?: string;
  maturidade?: string;
  maturidadeSebrae?: string;
  cnpj?: string;
  postosTrabalho?: string;
  socios?: string;
  mulheresRef?: string;
  faseInicial?: string;
  faseFinal?: string;
  faturamento?: string;
  solucao?: string;
  modeloNegocios?: string;
  tipoCliente?: string;
  estado?: string;
  regiao?: string;
  /** Membros da aba "NOMES E CPFS" cruzados por id.supi */
  equipe?: Array<{ nome: string; cpf?: string; turma?: string }>;
  /** CPF do responsável quando não pôde ir na coluna (duplicado) */
  cpfResponsavel?: string;
};

export type StartupImportRow = {
  nomeStartup: string;
  responsavelNome?: string;
  responsavelCpf?: string;
  responsavelEmail?: string;
  responsavelTelefone?: string;
  comunidade: string;
  cidadeOperacao?: string;
  categoria?: string;
  site?: string;
  descricao?: string;
  pitchCurto?: string;
  status: 'Ativo' | 'Pendente';
  metricas?: StartupImportMetricas;
};

type ImportField = keyof StartupImportRow | keyof StartupImportMetricas | 'oQueFaz';

/** Colunas aceitas na planilha (cabeçalhos normalizados → campo). */
const COLUMN_MAP: Record<string, ImportField> = {
  // Nome
  nome: 'nomeStartup',
  startup: 'nomeStartup',
  empresa: 'nomeStartup',
  'nome startup': 'nomeStartup',
  nome_startup: 'nomeStartup',
  'nome da startup': 'nomeStartup',

  // Responsável (legado + Dados Gerais)
  responsavel: 'responsavelNome',
  'nome responsavel': 'responsavelNome',
  responsavel_nome: 'responsavelNome',
  'nome do responsavel': 'responsavelNome',
  coordenador: 'responsavelNome',

  cpf: 'responsavelCpf',
  'cpf responsavel': 'responsavelCpf',
  responsavel_cpf: 'responsavelCpf',
  'cpf do responsavel': 'responsavelCpf',

  email: 'responsavelEmail',
  'e-mail': 'responsavelEmail',
  'email responsavel': 'responsavelEmail',
  responsavel_email: 'responsavelEmail',

  telefone: 'responsavelTelefone',
  fone: 'responsavelTelefone',
  celular: 'responsavelTelefone',
  'telefone responsavel': 'responsavelTelefone',
  responsavel_telefone: 'responsavelTelefone',

  comunidade: 'comunidade',
  regiao: 'regiao',

  cidade: 'cidadeOperacao',
  'cidade operacao': 'cidadeOperacao',
  cidade_operacao: 'cidadeOperacao',
  'cidade de operacao': 'cidadeOperacao',

  categoria: 'categoria',
  segmento: 'categoria',
  mercado: 'categoria',

  site: 'site',
  website: 'site',
  url: 'site',

  descricao: 'descricao',
  'descricao da startup': 'descricao',
  sobre: 'descricao',
  'o que faz': 'oQueFaz',
  solucao: 'solucao',

  status: 'status',
  'status no programa': 'statusPrograma',

  // Dados Gerais — extras
  'id.supi': 'idSupi',
  idsupi: 'idSupi',
  'id supi': 'idSupi',
  turma: 'turma',
  'mercado prioritario equivalente': 'mercadoPrioritario',
  origem: 'origemPrograma',
  trl: 'trl',
  maturidade: 'maturidade',
  'maturidade (sebrae)': 'maturidadeSebrae',
  cnpj: 'cnpj',
  'postos de trabalho': 'postosTrabalho',
  socios: 'socios',
  'mulheres ref.': 'mulheresRef',
  'mulheres ref': 'mulheresRef',
  'fase inicial': 'faseInicial',
  faseinicial: 'faseInicial',
  fasefinal: 'faseFinal',
  'fase final': 'faseFinal',
  faturamento: 'faturamento',
  'modelo de negocios': 'modeloNegocios',
  'tipo de cliente': 'tipoCliente',
  estado: 'estado',
};

const METRICA_FIELDS = new Set<keyof StartupImportMetricas>([
  'idSupi',
  'turma',
  'mercadoPrioritario',
  'statusPrograma',
  'origemPrograma',
  'trl',
  'maturidade',
  'maturidadeSebrae',
  'cnpj',
  'postosTrabalho',
  'socios',
  'mulheresRef',
  'faseInicial',
  'faseFinal',
  'faturamento',
  'solucao',
  'modeloNegocios',
  'tipoCliente',
  'estado',
  'regiao',
]);

export const STARTUP_IMPORT_COLUMNS = [
  {
    campo: 'nomeStartup',
    obrigatorio: true,
    exemplos: 'nome, NOME, startup, empresa, nome da startup',
  },
  {
    campo: 'responsavelNome',
    obrigatorio: false,
    exemplos: 'responsavel, COORDENADOR, nome do responsável',
  },
  { campo: 'responsavelCpf', obrigatorio: false, exemplos: 'cpf, CPF, cpf responsável' },
  { campo: 'responsavelEmail', obrigatorio: false, exemplos: 'email, EMAIL, e-mail' },
  {
    campo: 'responsavelTelefone',
    obrigatorio: false,
    exemplos: 'telefone, TELEFONE, celular',
  },
  {
    campo: 'comunidade',
    obrigatorio: false,
    exemplos: 'comunidade, Região (padrão: Não informada)',
  },
  { campo: 'cidadeOperacao', obrigatorio: false, exemplos: 'cidade, CIDADE' },
  { campo: 'categoria', obrigatorio: false, exemplos: 'categoria, Mercado, segmento' },
  { campo: 'site', obrigatorio: false, exemplos: 'site, website, url' },
  {
    campo: 'descricao',
    obrigatorio: false,
    exemplos: 'descricao, O QUE FAZ, Solução, sobre',
  },
  {
    campo: 'status',
    obrigatorio: false,
    exemplos: 'status, Status no Programa (ATIVA→Ativo, INATIVA→Pendente)',
  },
  {
    campo: 'metricas (Dados Gerais)',
    obrigatorio: false,
    exemplos:
      'id.supi, TURMA, Origem, TRL, Maturidade, CNPJ, Postos de trabalho, sócios, faturamento, Modelo de Negócios, Tipo de Cliente, ESTADO, Região',
  },
] as const;

function normalizeHeaderKey(key: string): string {
  return normalizeKey(key)
    .replace(/\s+/g, ' ')
    .replace(/\.$/, '')
    .trim();
}

function normalizeRow(row: Record<string, unknown>): Record<string, string> {
  const norm: Record<string, string> = {};
  for (const [key, value] of Object.entries(row)) {
    const normalizedKey = normalizeHeaderKey(key);
    const text = value === null || value === undefined ? '' : String(value).trim();
    if (text && normalizedKey) {
      norm[normalizedKey] = text;
    }
  }
  return norm;
}

function parseStatus(raw: string | undefined): 'Ativo' | 'Pendente' {
  const value = (raw || '').trim().toLowerCase();
  if (
    value === 'ativo' ||
    value === 'ativa' ||
    value === 'active' ||
    value === 'inscrita' ||
    value === 'qualificada'
  ) {
    return 'Ativo';
  }
  return 'Pendente';
}

function compactMetricas(metricas: StartupImportMetricas): StartupImportMetricas | undefined {
  const out: StartupImportMetricas = {};
  for (const [key, value] of Object.entries(metricas)) {
    if (key === 'equipe') {
      if (Array.isArray(value) && value.length) {
        out.equipe = value as StartupImportMetricas['equipe'];
      }
      continue;
    }
    if (typeof value === 'string' && value.trim()) {
      (out as Record<string, string>)[key] = value.trim();
    }
  }
  return Object.keys(out).length ? out : undefined;
}

function isPlaceholderText(value: string | undefined): boolean {
  if (!value) return true;
  const v = value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
  return (
    !v ||
    v === 'nao sei' ||
    v.startsWith('nao temos essa inform') ||
    v === '#n/a' ||
    v === 'n/a' ||
    v === '-' ||
    v === '—'
  );
}

function firstMeaningful(...values: Array<string | undefined>): string | undefined {
  for (const value of values) {
    const trimmed = value?.trim();
    if (trimmed && !isPlaceholderText(trimmed)) return trimmed;
  }
  return undefined;
}

export function parseStartupImportRow(
  row: Record<string, unknown>,
): { data?: StartupImportRow; erro?: string } {
  const norm = normalizeRow(row);
  const parsed: Partial<StartupImportRow> & { oQueFaz?: string } = {
    status: 'Pendente',
  };
  const metricas: StartupImportMetricas = {};

  for (const [header, value] of Object.entries(norm)) {
    const field = COLUMN_MAP[header];
    if (!field) continue;

    if (field === 'status' || field === 'statusPrograma') {
      if (field === 'statusPrograma') {
        metricas.statusPrograma = value;
        // Só define status do sistema se a coluna legada `status` não veio
        if (!norm.status) {
          parsed.status = parseStatus(value);
        }
      } else {
        parsed.status = parseStatus(value);
      }
      continue;
    }

    if (field === 'oQueFaz') {
      parsed.oQueFaz = value;
      continue;
    }

    if (METRICA_FIELDS.has(field as keyof StartupImportMetricas)) {
      (metricas as Record<string, string>)[field] = value;
      continue;
    }

    (parsed as Record<string, string>)[field] = value;
  }

  const nomeStartup = parsed.nomeStartup?.trim();
  if (!nomeStartup) {
    return {
      erro: 'Nome da startup vazio (use coluna: nome, NOME, startup ou empresa)',
    };
  }

  const oQueFaz = parsed.oQueFaz?.trim();
  const solucao = metricas.solucao?.trim();
  const descricao = firstMeaningful(parsed.descricao, oQueFaz, solucao);
  const pitchCurto = firstMeaningful(solucao, oQueFaz, descricao)?.slice(0, 280);

  // Comunidade: coluna explícita → região territorial → origem do programa
  const comunidade =
    parsed.comunidade?.trim() ||
    metricas.regiao?.trim() ||
    metricas.origemPrograma?.trim() ||
    'Não informada';

  return {
    data: {
      nomeStartup,
      responsavelNome: parsed.responsavelNome?.trim() || nomeStartup,
      responsavelCpf: parsed.responsavelCpf?.trim(),
      responsavelEmail: parsed.responsavelEmail?.trim(),
      responsavelTelefone: parsed.responsavelTelefone?.trim(),
      comunidade,
      cidadeOperacao: parsed.cidadeOperacao?.trim(),
      categoria: parsed.categoria?.trim(),
      site: parsed.site?.trim(),
      descricao,
      pitchCurto,
      status: parsed.status || 'Pendente',
      metricas: compactMetricas(metricas),
    },
  };
}
