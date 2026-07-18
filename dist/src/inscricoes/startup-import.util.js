"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STARTUP_IMPORT_COLUMNS = void 0;
exports.parseStartupImportRow = parseStartupImportRow;
const normalize_key_util_1 = require("../common/utils/normalize-key.util");
const COLUMN_MAP = {
    nome: 'nomeStartup',
    startup: 'nomeStartup',
    empresa: 'nomeStartup',
    'nome startup': 'nomeStartup',
    nome_startup: 'nomeStartup',
    'nome da startup': 'nomeStartup',
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
const METRICA_FIELDS = new Set([
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
exports.STARTUP_IMPORT_COLUMNS = [
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
        exemplos: 'id.supi, TURMA, Origem, TRL, Maturidade, CNPJ, Postos de trabalho, sócios, faturamento, Modelo de Negócios, Tipo de Cliente, ESTADO, Região',
    },
];
function normalizeHeaderKey(key) {
    return (0, normalize_key_util_1.normalizeKey)(key)
        .replace(/\s+/g, ' ')
        .replace(/\.$/, '')
        .trim();
}
function normalizeRow(row) {
    const norm = {};
    for (const [key, value] of Object.entries(row)) {
        const normalizedKey = normalizeHeaderKey(key);
        const text = value === null || value === undefined ? '' : String(value).trim();
        if (text && normalizedKey) {
            norm[normalizedKey] = text;
        }
    }
    return norm;
}
function parseStatus(raw) {
    const value = (raw || '').trim().toLowerCase();
    if (value === 'ativo' ||
        value === 'ativa' ||
        value === 'active' ||
        value === 'inscrita' ||
        value === 'qualificada') {
        return 'Ativo';
    }
    return 'Pendente';
}
function compactMetricas(metricas) {
    const out = {};
    for (const [key, value] of Object.entries(metricas)) {
        if (key === 'equipe') {
            if (Array.isArray(value) && value.length) {
                out.equipe = value;
            }
            continue;
        }
        if (typeof value === 'string' && value.trim()) {
            out[key] = value.trim();
        }
    }
    return Object.keys(out).length ? out : undefined;
}
function isPlaceholderText(value) {
    if (!value)
        return true;
    const v = value
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    return (!v ||
        v === 'nao sei' ||
        v.startsWith('nao temos essa inform') ||
        v === '#n/a' ||
        v === 'n/a' ||
        v === '-' ||
        v === '—');
}
function firstMeaningful(...values) {
    for (const value of values) {
        const trimmed = value?.trim();
        if (trimmed && !isPlaceholderText(trimmed))
            return trimmed;
    }
    return undefined;
}
function parseStartupImportRow(row) {
    const norm = normalizeRow(row);
    const parsed = {
        status: 'Pendente',
    };
    const metricas = {};
    for (const [header, value] of Object.entries(norm)) {
        const field = COLUMN_MAP[header];
        if (!field)
            continue;
        if (field === 'status' || field === 'statusPrograma') {
            if (field === 'statusPrograma') {
                metricas.statusPrograma = value;
                if (!norm.status) {
                    parsed.status = parseStatus(value);
                }
            }
            else {
                parsed.status = parseStatus(value);
            }
            continue;
        }
        if (field === 'oQueFaz') {
            parsed.oQueFaz = value;
            continue;
        }
        if (METRICA_FIELDS.has(field)) {
            metricas[field] = value;
            continue;
        }
        parsed[field] = value;
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
    const comunidade = parsed.comunidade?.trim() ||
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
//# sourceMappingURL=startup-import.util.js.map