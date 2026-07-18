export declare class CreateManualInscricaoDto {
    nome: string;
    tipo: 'lider' | 'startup';
    status?: 'Ativo' | 'Pendente';
    comunidade: string;
    cidade?: string;
    email?: string;
    telefone?: string;
}
export declare class UpdateInscricaoDto {
    nome?: string;
    tipo: 'lider' | 'startup';
    status?: 'Ativo' | 'Pendente';
    comunidade?: string;
    cidade?: string;
    email?: string;
    telefone?: string;
}
export declare class DeleteInscricaoQueryDto {
    tipo: 'lider' | 'startup';
}
export declare class ListInscricoesQueryDto {
    tipo?: 'todos' | 'lider' | 'startup';
    q?: string;
    page?: number;
    limit?: number;
}
