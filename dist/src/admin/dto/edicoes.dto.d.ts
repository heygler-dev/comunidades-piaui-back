import { FasePremio } from '../../../generated/prisma/client';
export declare class ToggleVotacaoDto {
    aberta: boolean;
}
export declare class ToggleIndicacoesDto {
    abertas: boolean;
}
export declare class ToggleColegioDto {
    habilitado: boolean;
}
export declare class UpdateEdicaoConfigDto {
    xLideresColegio?: number;
    nFinalistasPorCategoria?: number;
    cotasRegionaisAtivas?: boolean;
    cotaMinCapital?: number;
    cotaMinInterior?: number;
    cidadesCapital?: string;
    criteriosMd?: string | null;
    faseAtual?: FasePremio;
    indicacoesInicio?: string | null;
    indicacoesFim?: string | null;
}
export declare class ClonarEdicaoDto {
    fonteEdicaoId: string;
}
export declare class CreateCategoriaDto {
    nome: string;
    ordem?: number;
}
export declare class CreateFinalistaDto {
    inscricaoStartupId: string;
    categoria: string;
    metaResumo?: string;
}
