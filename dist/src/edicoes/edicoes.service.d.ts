import { FasePremio, StatusInscricaoStartup } from '../../generated/prisma/client';
import { AuditoriaService } from '../auditoria/auditoria.service';
import { PrismaService } from '../prisma/prisma.service';
export declare class EdicoesService {
    private readonly prisma;
    private readonly auditoria;
    constructor(prisma: PrismaService, auditoria: AuditoriaService);
    getEdicaoAtiva(): Promise<{
        id: string;
        nome: string;
        ano: number;
        faseAtual: FasePremio;
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
    getEdicaoAtivaId(): Promise<string>;
    getConfig(): Promise<{
        id: string;
        nome: string;
        ano: number;
        faseAtual: FasePremio;
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
    parseCidadesCapital(raw?: string | null): string[];
    isCapital(cidade: string | null | undefined, cidadesCapital: string[]): boolean;
    updateConfig(edicaoId: string, dto: {
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
    }, adminId?: string): Promise<{
        id: string;
        nome: string;
        ano: number;
        faseAtual: FasePremio;
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
    clonarConfigParaAtiva(fonteEdicaoId: string, adminId?: string): Promise<{
        edicao: {
            id: string;
            nome: string;
            ano: number;
            faseAtual: FasePremio;
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
    publicarRegulamento(adminId?: string): Promise<{
        id: string;
        criteriosMd: string;
        createdAt: Date;
        edicaoId: string;
        versao: number;
        snapshot: import("@prisma/client/runtime/client").JsonValue;
        publicadaEm: Date;
    }>;
    getRegrasPublicas(versao?: number): Promise<{
        edicao: {
            id: string;
            nome: string;
            ano: number;
            ativa: boolean;
        };
        vigente: {
            nome: string;
            ano: number;
            faseAtual: FasePremio;
            faseLabel: string;
            xLideresColegio: number;
            nFinalistasPorCategoria: number;
            cotasRegionaisAtivas: boolean;
            cotaMinCapital: number;
            cotaMinInterior: number;
            cidadesCapital: string;
            categorias: {
                nome: string;
                ordem: number;
            }[];
            criteriosMd: string | null;
        };
        regulamento: {
            versao: number;
            publicadaEm: Date;
            criteriosMd: string;
            snapshot: import("@prisma/client/runtime/client").JsonValue;
        } | null;
        historico: {
            versao: number;
            publicadaEm: Date;
        }[];
    }>;
    setVotacaoAberta(edicaoId: string, aberta: boolean): Promise<{
        id: string;
        nome: string;
        faseAtual: FasePremio;
        votacaoAberta: boolean;
    }>;
    setIndicacoesAbertas(edicaoId: string, abertas: boolean): Promise<{
        id: string;
        nome: string;
        faseAtual: FasePremio;
        indicacoesAbertas: boolean;
        indicacoesInicio: Date | null;
        indicacoesFim: Date | null;
    }>;
    setColegioHabilitado(edicaoId: string, habilitado: boolean): Promise<{
        id: string;
        nome: string;
        faseAtual: FasePremio;
        colegioHabilitado: boolean;
    }>;
    listCategorias(): Promise<{
        id: string;
        nome: string;
        edicaoId: string;
        ordem: number;
    }[]>;
    createCategoria(dto: {
        nome: string;
        ordem?: number;
    }): Promise<{
        id: string;
        nome: string;
        edicaoId: string;
        ordem: number;
    }>;
    createFinalista(dto: {
        inscricaoStartupId: string;
        categoria: string;
        metaResumo?: string;
    }): Promise<{
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
    listFinalistasAdmin(): Promise<({
        categoria: {
            id: string;
            nome: string;
            edicaoId: string;
            ordem: number;
        };
        inscricaoStartup: {
            id: string;
            status: StatusInscricaoStartup;
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
}
