export declare const FasePremio: {
    readonly FASE_1_CADASTRO: "FASE_1_CADASTRO";
    readonly FASE_2_INDICACOES: "FASE_2_INDICACOES";
    readonly FASE_3_VOTO_POPULAR: "FASE_3_VOTO_POPULAR";
    readonly FASE_3_COLEGIO_SELETOR: "FASE_3_COLEGIO_SELETOR";
    readonly FASE_4_VOTO_POPULAR: "FASE_4_VOTO_POPULAR";
    readonly FASE_5_APURACAO: "FASE_5_APURACAO";
};
export type FasePremio = (typeof FasePremio)[keyof typeof FasePremio];
export declare const TipoConvite: {
    readonly LIDER: "LIDER";
    readonly STARTUP: "STARTUP";
};
export type TipoConvite = (typeof TipoConvite)[keyof typeof TipoConvite];
export declare const StatusParticipante: {
    readonly ATIVO: "ATIVO";
    readonly PENDENTE: "PENDENTE";
};
export type StatusParticipante = (typeof StatusParticipante)[keyof typeof StatusParticipante];
export declare const StatusInscricaoStartup: {
    readonly RASCUNHO: "RASCUNHO";
    readonly PENDENTE: "PENDENTE";
    readonly ATIVO: "ATIVO";
    readonly CANCELADO: "CANCELADO";
};
export type StatusInscricaoStartup = (typeof StatusInscricaoStartup)[keyof typeof StatusInscricaoStartup];
export declare const OrigemCadastro: {
    readonly PORTAL: "PORTAL";
    readonly MANUAL: "MANUAL";
    readonly IMPORTACAO: "IMPORTACAO";
};
export type OrigemCadastro = (typeof OrigemCadastro)[keyof typeof OrigemCadastro];
export declare const TipoLider: {
    readonly SEMENTE: "SEMENTE";
    readonly COMUNITARIO: "COMUNITARIO";
};
export type TipoLider = (typeof TipoLider)[keyof typeof TipoLider];
export declare const StatusIndicacao: {
    readonly ATIVA: "ATIVA";
    readonly CANCELADA: "CANCELADA";
};
export type StatusIndicacao = (typeof StatusIndicacao)[keyof typeof StatusIndicacao];
export declare const StatusSelecaoColegio: {
    readonly EM_ANALISE: "EM_ANALISE";
    readonly AVANCADA: "AVANCADA";
    readonly REJEITADA: "REJEITADA";
    readonly ABSTENCAO: "ABSTENCAO";
};
export type StatusSelecaoColegio = (typeof StatusSelecaoColegio)[keyof typeof StatusSelecaoColegio];
export declare const TipoAuditoria: {
    readonly VOTO: "VOTO";
    readonly INDICACAO: "INDICACAO";
    readonly SELECAO_COLEGIO: "SELECAO_COLEGIO";
    readonly FASE_ALTERADA: "FASE_ALTERADA";
    readonly RESULTADO_PUBLICADO: "RESULTADO_PUBLICADO";
    readonly LOGIN: "LOGIN";
    readonly DADOS_ALTERADOS: "DADOS_ALTERADOS";
};
export type TipoAuditoria = (typeof TipoAuditoria)[keyof typeof TipoAuditoria];
export declare const PapelAuditoria: {
    readonly ADMIN: "ADMIN";
    readonly LIDER: "LIDER";
    readonly EMPREENDEDOR: "EMPREENDEDOR";
    readonly SISTEMA: "SISTEMA";
};
export type PapelAuditoria = (typeof PapelAuditoria)[keyof typeof PapelAuditoria];
export declare const StatusTestemunhaApuracao: {
    readonly CONVITE_PENDENTE: "CONVITE_PENDENTE";
    readonly CONFIRMADA: "CONFIRMADA";
    readonly RECUSADA: "RECUSADA";
};
export type StatusTestemunhaApuracao = (typeof StatusTestemunhaApuracao)[keyof typeof StatusTestemunhaApuracao];
export declare const StatusSolicitacao: {
    readonly PENDENTE: "PENDENTE";
    readonly APROVADA: "APROVADA";
    readonly REJEITADA: "REJEITADA";
};
export type StatusSolicitacao = (typeof StatusSolicitacao)[keyof typeof StatusSolicitacao];
export declare const TipoSolicitacaoCadastro: {
    readonly LIDER: "LIDER";
    readonly STARTUP: "STARTUP";
};
export type TipoSolicitacaoCadastro = (typeof TipoSolicitacaoCadastro)[keyof typeof TipoSolicitacaoCadastro];
