"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoSolicitacaoCadastro = exports.StatusSolicitacao = exports.StatusTestemunhaApuracao = exports.PapelAuditoria = exports.TipoAuditoria = exports.StatusSelecaoColegio = exports.StatusIndicacao = exports.TipoLider = exports.OrigemCadastro = exports.StatusInscricaoStartup = exports.StatusParticipante = exports.TipoConvite = exports.FasePremio = void 0;
exports.FasePremio = {
    FASE_1_CADASTRO: 'FASE_1_CADASTRO',
    FASE_2_INDICACOES: 'FASE_2_INDICACOES',
    FASE_3_VOTO_POPULAR: 'FASE_3_VOTO_POPULAR',
    FASE_3_COLEGIO_SELETOR: 'FASE_3_COLEGIO_SELETOR',
    FASE_4_VOTO_POPULAR: 'FASE_4_VOTO_POPULAR',
    FASE_5_APURACAO: 'FASE_5_APURACAO'
};
exports.TipoConvite = {
    LIDER: 'LIDER',
    STARTUP: 'STARTUP'
};
exports.StatusParticipante = {
    ATIVO: 'ATIVO',
    PENDENTE: 'PENDENTE'
};
exports.StatusInscricaoStartup = {
    RASCUNHO: 'RASCUNHO',
    PENDENTE: 'PENDENTE',
    ATIVO: 'ATIVO',
    CANCELADO: 'CANCELADO'
};
exports.OrigemCadastro = {
    PORTAL: 'PORTAL',
    MANUAL: 'MANUAL',
    IMPORTACAO: 'IMPORTACAO'
};
exports.TipoLider = {
    SEMENTE: 'SEMENTE',
    COMUNITARIO: 'COMUNITARIO'
};
exports.StatusIndicacao = {
    ATIVA: 'ATIVA',
    CANCELADA: 'CANCELADA'
};
exports.StatusSelecaoColegio = {
    EM_ANALISE: 'EM_ANALISE',
    AVANCADA: 'AVANCADA',
    REJEITADA: 'REJEITADA',
    ABSTENCAO: 'ABSTENCAO'
};
exports.TipoAuditoria = {
    VOTO: 'VOTO',
    INDICACAO: 'INDICACAO',
    SELECAO_COLEGIO: 'SELECAO_COLEGIO',
    FASE_ALTERADA: 'FASE_ALTERADA',
    RESULTADO_PUBLICADO: 'RESULTADO_PUBLICADO',
    LOGIN: 'LOGIN',
    DADOS_ALTERADOS: 'DADOS_ALTERADOS'
};
exports.PapelAuditoria = {
    ADMIN: 'ADMIN',
    LIDER: 'LIDER',
    EMPREENDEDOR: 'EMPREENDEDOR',
    SISTEMA: 'SISTEMA'
};
exports.StatusTestemunhaApuracao = {
    CONVITE_PENDENTE: 'CONVITE_PENDENTE',
    CONFIRMADA: 'CONFIRMADA',
    RECUSADA: 'RECUSADA'
};
exports.StatusSolicitacao = {
    PENDENTE: 'PENDENTE',
    APROVADA: 'APROVADA',
    REJEITADA: 'REJEITADA'
};
exports.TipoSolicitacaoCadastro = {
    LIDER: 'LIDER',
    STARTUP: 'STARTUP'
};
//# sourceMappingURL=enums.js.map