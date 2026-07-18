import { StatusParticipante, TipoConvite, TipoLider } from '../../generated/prisma/client';
import { EdicoesService } from '../edicoes/edicoes.service';
import { PessoasService } from '../pessoas/pessoas.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateComunidadeDto, CreateLiderSementeDto } from './dto/comunidades.dto';
export declare class ComunidadesService {
    private readonly prisma;
    private readonly edicoesService;
    private readonly pessoasService;
    constructor(prisma: PrismaService, edicoesService: EdicoesService, pessoasService: PessoasService);
    create(dto: CreateComunidadeDto, adminId: string): Promise<{
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
    list(): Promise<({
        lideres: {
            id: string;
            nome: string;
            email: string;
            status: StatusParticipante;
            tipoLider: TipoLider;
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
    createConviteLider(comunidadeId: string, adminId: string): Promise<{
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
        tipo: TipoConvite;
        token: string;
        criadoPorId: string | null;
        liderCriadorId: string | null;
        expiraEm: Date | null;
        usadoEm: Date | null;
    }>;
    createLiderSemente(dto: CreateLiderSementeDto): Promise<{
        lider: {
            id: string;
            nome: string;
            email: string;
            tipoLider: TipoLider;
            status: StatusParticipante;
        };
        comunidade: {
            id: string;
            nome: string;
            slug: string;
        };
    }>;
}
