import { EdicoesService } from '../edicoes/edicoes.service';
import { AuthUser } from '../auth/jwt.strategy';
import { ClonarEdicaoDto, CreateCategoriaDto, CreateFinalistaDto, ToggleColegioDto, ToggleIndicacoesDto, ToggleVotacaoDto, UpdateEdicaoConfigDto } from './dto/edicoes.dto';
export declare class AdminEdicoesController {
    private readonly edicoesService;
    constructor(edicoesService: EdicoesService);
    getEdicao(): Promise<{
        id: string;
        nome: string;
        ano: number;
        faseAtual: import("../../generated/prisma/enums").FasePremio;
        votacaoAberta: boolean;
        indicacoesAbertas: boolean;
        colegioHabilitado: boolean;
        xLideresColegio: number;
        nFinalistasPorCategoria: number;
        cotasRegionaisAtivas: boolean;
        cotaMinCapital: number;
        cotaMinInterior: number;
        cidadesCapital: string;
        criteriosMd: string | null;
        indicacoesInicio: Date | null;
        indicacoesFim: Date | null;
        ativa: boolean;
        createdAt: Date;
    }>;
    listEdicoes(): Promise<{
        id: string;
        nome: string;
        ano: number;
        xLideresColegio: number;
        nFinalistasPorCategoria: number;
        cotasRegionaisAtivas: boolean;
        ativa: boolean;
        _count: {
            categorias: number;
        };
    }[]>;
    clonar(dto: ClonarEdicaoDto, req: {
        user: AuthUser;
    }): Promise<{
        edicao: {
            id: string;
            nome: string;
            ano: number;
            faseAtual: import("../../generated/prisma/enums").FasePremio;
            votacaoAberta: boolean;
            indicacoesAbertas: boolean;
            colegioHabilitado: boolean;
            xLideresColegio: number;
            nFinalistasPorCategoria: number;
            cotasRegionaisAtivas: boolean;
            cotaMinCapital: number;
            cotaMinInterior: number;
            cidadesCapital: string;
            criteriosMd: string | null;
            indicacoesInicio: Date | null;
            indicacoesFim: Date | null;
            ativa: boolean;
            createdAt: Date;
        };
        fonte: {
            id: string;
            nome: string;
            ano: number;
        };
        categoriasCriadas: number;
        message: string;
    }>;
    publicarRegulamento(req: {
        user: AuthUser;
    }): Promise<{
        id: string;
        criteriosMd: string;
        createdAt: Date;
        edicaoId: string;
        versao: number;
        snapshot: import("@prisma/client/runtime/client").JsonValue;
        publicadaEm: Date;
    }>;
    updateConfig(id: string, dto: UpdateEdicaoConfigDto, req: {
        user: AuthUser;
    }): Promise<{
        id: string;
        nome: string;
        ano: number;
        faseAtual: import("../../generated/prisma/enums").FasePremio;
        votacaoAberta: boolean;
        indicacoesAbertas: boolean;
        colegioHabilitado: boolean;
        xLideresColegio: number;
        nFinalistasPorCategoria: number;
        cotasRegionaisAtivas: boolean;
        cotaMinCapital: number;
        cotaMinInterior: number;
        cidadesCapital: string;
        criteriosMd: string | null;
        indicacoesInicio: Date | null;
        indicacoesFim: Date | null;
        ativa: boolean;
        createdAt: Date;
    }>;
    listCategorias(): Promise<{
        id: string;
        nome: string;
        edicaoId: string;
        ordem: number;
    }[]>;
    createCategoria(dto: CreateCategoriaDto): Promise<{
        id: string;
        nome: string;
        edicaoId: string;
        ordem: number;
    }>;
    listFinalistas(): Promise<({
        categoria: {
            id: string;
            nome: string;
            edicaoId: string;
            ordem: number;
        };
        inscricaoStartup: {
            id: string;
            status: import("../inscricoes/inscricoes.types").StatusInscricaoStartup;
            nomeStartup: string | null;
            cidadeOperacao: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        edicaoId: string;
        ativo: boolean;
        inscricaoStartupId: string;
        categoriaId: string;
        metaResumo: string | null;
    })[]>;
    createFinalista(dto: CreateFinalistaDto): Promise<{
        categoria: {
            id: string;
            nome: string;
            edicaoId: string;
            ordem: number;
        };
        inscricaoStartup: {
            id: string;
            nomeStartup: string | null;
            categoria: string | null;
            cidadeOperacao: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        edicaoId: string;
        ativo: boolean;
        inscricaoStartupId: string;
        categoriaId: string;
        metaResumo: string | null;
    }>;
    toggleVotacao(id: string, dto: ToggleVotacaoDto): Promise<{
        id: string;
        nome: string;
        faseAtual: import("../../generated/prisma/enums").FasePremio;
        votacaoAberta: boolean;
    }>;
    toggleIndicacoes(id: string, dto: ToggleIndicacoesDto): Promise<{
        id: string;
        nome: string;
        faseAtual: import("../../generated/prisma/enums").FasePremio;
        indicacoesAbertas: boolean;
        indicacoesInicio: Date | null;
        indicacoesFim: Date | null;
    }>;
    toggleColegio(id: string, dto: ToggleColegioDto): Promise<{
        id: string;
        nome: string;
        faseAtual: import("../../generated/prisma/enums").FasePremio;
        colegioHabilitado: boolean;
    }>;
}
