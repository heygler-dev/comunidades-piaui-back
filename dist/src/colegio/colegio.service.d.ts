import { StatusIndicacao, StatusSelecaoColegio } from '../../generated/prisma/client';
import { AuditoriaService } from '../auditoria/auditoria.service';
import { EdicoesService } from '../edicoes/edicoes.service';
import { PrismaService } from '../prisma/prisma.service';
import { RegistrarSelecaoDto } from './dto/colegio.dto';
export declare class ColegioService {
    private readonly prisma;
    private readonly edicoesService;
    private readonly auditoria;
    constructor(prisma: PrismaService, edicoesService: EdicoesService, auditoria: AuditoriaService);
    listIndicadas(pessoaId: string, categoriaId?: string): Promise<{
        mesmaComunidade: boolean;
        minhaSelecao: {
            status: StatusSelecaoColegio;
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
        status: StatusIndicacao;
        inscricaoStartupId: string;
        categoriaId: string;
        indicanteLiderId: string | null;
        indicanteInscricaoId: string | null;
        justificativa: string | null;
    }[]>;
    registrarSelecao(pessoaId: string, dto: RegistrarSelecaoDto): Promise<{
        id: string;
        createdAt: Date;
        edicaoId: string;
        status: StatusSelecaoColegio;
        inscricaoStartupId: string;
        categoriaId: string;
        membroColegioId: string;
        conflitoInteresse: boolean;
    }>;
    minhasSelecoes(pessoaId: string): Promise<({
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
        status: StatusSelecaoColegio;
        inscricaoStartupId: string;
        categoriaId: string;
        membroColegioId: string;
        conflitoInteresse: boolean;
    })[]>;
    private assertMembroAtivo;
}
