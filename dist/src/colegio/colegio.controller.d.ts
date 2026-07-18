import { AuthUser } from '../auth/jwt.strategy';
import { RegistrarSelecaoDto } from './dto/colegio.dto';
import { ColegioService } from './colegio.service';
declare class ListIndicadasQuery {
    categoriaId?: string;
}
export declare class ColegioController {
    private readonly colegioService;
    constructor(colegioService: ColegioService);
    indicadas(req: {
        user: AuthUser;
    }, query: ListIndicadasQuery): Promise<{
        mesmaComunidade: boolean;
        minhaSelecao: {
            status: import("../../generated/prisma/enums").StatusSelecaoColegio;
            inscricaoStartupId: string;
            categoriaId: string;
            conflitoInteresse: boolean;
        } | null;
        categoria: {
            id: string;
            nome: string;
            edicaoId: string;
            ordem: number;
        };
        inscricaoStartup: {
            id: string;
            comunidadeId: string;
            nomeStartup: string | null;
            cidadeOperacao: string | null;
            slugPublico: string | null;
            comunidade: {
                id: string;
                nome: string;
            };
        };
        id: string;
        createdAt: Date;
        edicaoId: string;
        status: import("../../generated/prisma/enums").StatusIndicacao;
        inscricaoStartupId: string;
        categoriaId: string;
        indicanteLiderId: string | null;
        indicanteInscricaoId: string | null;
        justificativa: string | null;
    }[]>;
    selecoes(req: {
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
        };
    } & {
        id: string;
        createdAt: Date;
        edicaoId: string;
        status: import("../../generated/prisma/enums").StatusSelecaoColegio;
        inscricaoStartupId: string;
        categoriaId: string;
        membroColegioId: string;
        conflitoInteresse: boolean;
    })[]>;
    registrar(req: {
        user: AuthUser;
    }, dto: RegistrarSelecaoDto): Promise<{
        id: string;
        createdAt: Date;
        edicaoId: string;
        status: import("../../generated/prisma/enums").StatusSelecaoColegio;
        inscricaoStartupId: string;
        categoriaId: string;
        membroColegioId: string;
        conflitoInteresse: boolean;
    }>;
}
export {};
