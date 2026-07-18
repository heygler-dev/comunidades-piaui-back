import { StatusIndicacao } from '../../generated/prisma/client';
import { AppRole } from '../common/decorators/roles.decorator';
import { AuditoriaService } from '../auditoria/auditoria.service';
import { EdicoesService } from '../edicoes/edicoes.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateIndicacaoDto } from './dto/indicacoes.dto';
export declare class IndicacoesService {
    private readonly prisma;
    private readonly edicoesService;
    private readonly auditoria;
    constructor(prisma: PrismaService, edicoesService: EdicoesService, auditoria: AuditoriaService);
    buscar(params: {
        q?: string;
        categoriaId?: string;
        comunidadeId?: string;
    }): Promise<{
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
    criar(user: {
        id: string;
        role: AppRole;
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
        status: StatusIndicacao;
        inscricaoStartupId: string;
        categoriaId: string;
        indicanteLiderId: string | null;
        indicanteInscricaoId: string | null;
        justificativa: string | null;
    }>;
    minhas(user: {
        id: string;
        role: AppRole;
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
        status: StatusIndicacao;
        inscricaoStartupId: string;
        categoriaId: string;
        indicanteLiderId: string | null;
        indicanteInscricaoId: string | null;
        justificativa: string | null;
    })[]>;
    private categoriaNomes;
}
