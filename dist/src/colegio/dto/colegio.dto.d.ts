export declare class RegistrarSelecaoDto {
    categoriaId: string;
    inscricaoStartupId: string;
    status: 'AVANCADA' | 'REJEITADA' | 'ABSTENCAO' | 'EM_ANALISE';
    conflitoInteresse?: boolean;
}
