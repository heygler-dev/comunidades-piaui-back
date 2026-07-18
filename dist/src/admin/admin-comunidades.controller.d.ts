import { ComunidadesService } from './comunidades.service';
import { CreateComunidadeDto, CreateConviteLiderDto, CreateLiderSementeDto } from './dto/comunidades.dto';
export declare class AdminComunidadesController {
    private readonly comunidadesService;
    constructor(comunidadesService: ComunidadesService);
    list(): Promise<({
        lideres: {
            id: string;
            nome: string;
            email: string;
            status: import("../inscricoes/inscricoes.types").StatusParticipante;
            tipoLider: import("../../generated/prisma/enums").TipoLider;
        }[];
        _count: {
            lideres: number;
            inscricoesStartup: number;
        };
    } & {
        id: string;
        nome: string;
        createdAt: Date;
        edicaoId: string;
        descricao: string | null;
        institucional: boolean;
        cidade: string;
        estado: string;
        cidadesAtuacao: string | null;
        logoUrl: string | null;
        slug: string;
        status: string;
        isPadraoStartupPiaui: boolean;
        createdBy: string | null;
    })[]>;
    create(dto: CreateComunidadeDto, logo: Express.Multer.File | undefined, req: {
        user: {
            id: string;
        };
    }): Promise<{
        id: string;
        nome: string;
        createdAt: Date;
        edicaoId: string;
        descricao: string | null;
        institucional: boolean;
        cidade: string;
        estado: string;
        cidadesAtuacao: string | null;
        logoUrl: string | null;
        slug: string;
        status: string;
        isPadraoStartupPiaui: boolean;
        createdBy: string | null;
    }>;
    createLiderSemente(dto: CreateLiderSementeDto): Promise<{
        lider: {
            id: string;
            nome: string;
            email: string;
            tipoLider: import("../../generated/prisma/enums").TipoLider;
            status: import("../inscricoes/inscricoes.types").StatusParticipante;
        };
        comunidade: {
            id: string;
            nome: string;
            slug: string;
        };
    }>;
    createConvite(dto: CreateConviteLiderDto, req: {
        user: {
            id: string;
        };
    }): Promise<{
        comunidade: {
            id: string;
            nome: string;
            createdAt: Date;
            edicaoId: string;
            descricao: string | null;
            institucional: boolean;
            cidade: string;
            estado: string;
            cidadesAtuacao: string | null;
            logoUrl: string | null;
            slug: string;
            status: string;
            isPadraoStartupPiaui: boolean;
            createdBy: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        edicaoId: string;
        ativo: boolean;
        comunidadeId: string;
        tipo: import("../inscricoes/inscricoes.types").TipoConvite;
        token: string;
        criadoPorId: string | null;
        liderCriadorId: string | null;
        expiraEm: Date | null;
        usadoEm: Date | null;
    }>;
}
