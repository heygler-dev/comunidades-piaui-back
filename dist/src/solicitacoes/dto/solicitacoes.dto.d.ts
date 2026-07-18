export declare class SolicitarLiderDto {
    comunidadeId: string;
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
    senha: string;
    lgpdAceito: boolean;
}
export declare class SolicitarStartupDto {
    comunidadeId: string;
    responsavelNome: string;
    cpf: string;
    telefone: string;
    email: string;
    senha: string;
    nomeStartup: string;
    categoria: string;
    cidadeOperacao: string;
    site?: string;
    descricao: string;
    lgpdAceito: boolean;
    cpfUnicoConfirmado: boolean;
}
export declare class RejeitarSolicitacaoDto {
    motivo?: string;
}
