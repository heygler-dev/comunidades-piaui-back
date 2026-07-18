export declare class CreateComunidadeDto {
    nome: string;
    descricao?: string;
    institucional?: boolean;
    cidade: string;
    estado?: string;
    cidadesAtuacao?: string;
    logoUrl?: string;
}
export declare class CreateConviteLiderDto {
    comunidadeId: string;
}
export declare class CreateLiderSementeDto {
    comunidadeId: string;
    nome: string;
    cpf: string;
    email: string;
    telefone: string;
    senha: string;
}
