export declare class CreateInscricaoStartupDto {
    slug: string;
}
export declare class Etapa1StartupDto {
    responsavelNome: string;
    cpf: string;
    telefone: string;
    email: string;
    senha: string;
}
export declare class Etapa2StartupDto {
    nomeStartup: string;
    categoria: string;
    cidadeOperacao: string;
    site?: string;
    descricao: string;
}
export declare class ConfirmarInscricaoDto {
    lgpdAceito: boolean;
    cpfUnicoConfirmado: boolean;
    senha?: string;
}
