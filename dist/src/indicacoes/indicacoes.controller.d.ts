import { AuthUser } from '../auth/jwt.strategy';
import { BuscarStartupsQueryDto, CreateIndicacaoDto } from './dto/indicacoes.dto';
import { IndicacoesService } from './indicacoes.service';
export declare class IndicacoesController {
    private readonly indicacoesService;
    constructor(indicacoesService: IndicacoesService);
    buscar(query: BuscarStartupsQueryDto): Promise<{
        id: string;
        nomeStartup: string | null;
        categoria: string | null;
        cidadeOperacao: string | null;
        slugPublico: string | null;
        comunidade: {
            id: string;
            nome: string;
            slug: string;
        };
    }[]>;
    minhas(req: {
        user: AuthUser;
    }): Promise<({
        categoria: {
            id: string;
            nome: string;
            edicaoId: string;
            ordem: number;
        };
        inscricaoStartup: {
            id: string;
            nomeStartup: string | null;
            slugPublico: string | null;
            comunidade: {
                nome: string;
            };
        };
    } & {
        id: string;
        createdAt: Date;
        edicaoId: string;
        status: import("../../generated/prisma/enums").StatusIndicacao;
        inscricaoStartupId: string;
        categoriaId: string;
        indicanteLiderId: string | null;
        indicanteInscricaoId: string | null;
        justificativa: string | null;
    })[]>;
    criar(req: {
        user: AuthUser;
    }, dto: CreateIndicacaoDto): Promise<{
        categoria: {
            id: string;
            nome: string;
            edicaoId: string;
            ordem: number;
        };
        inscricaoStartup: {
            id: string;
            nomeStartup: string | null;
            slugPublico: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        edicaoId: string;
        status: import("../../generated/prisma/enums").StatusIndicacao;
        inscricaoStartupId: string;
        categoriaId: string;
        indicanteLiderId: string | null;
        indicanteInscricaoId: string | null;
        justificativa: string | null;
    }>;
}
