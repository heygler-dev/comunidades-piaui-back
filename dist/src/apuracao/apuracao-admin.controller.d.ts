import { AuthUser } from '../auth/jwt.strategy';
import { ApuracaoService } from './apuracao.service';
import { ConvidarTestemunhaDto } from './dto/testemunha.dto';
export declare class ApuracaoAdminController {
    private readonly apuracaoService;
    constructor(apuracaoService: ApuracaoService);
    anomalias(): Promise<{
        totalVotos: number;
        picos: {
            hora: string;
            total: number;
        }[];
        votosSemElegibilidade: number;
    }>;
    quorum(): Promise<{
        comunidades: number;
        membrosAtivos: number;
        comunidadesRepresentadas: number;
        membrosQueSelecionaram: number;
        xLideresColegio: number;
        esperado: number;
    }>;
    promover(): Promise<{
        finalistas: number;
    }>;
    publicar(req: {
        user: AuthUser;
    }): Promise<{
        resultados: ({
            categoria: {
                id: string;
                nome: string;
                edicaoId: string;
                ordem: number;
            };
            finalista: {
                inscricaoStartup: {
                    nomeStartup: string | null;
                    slugPublico: string | null;
                };
            } & {
                id: string;
                createdAt: Date;
                edicaoId: string;
                ativo: boolean;
                inscricaoStartupId: string;
                categoriaId: string;
                metaResumo: string | null;
            };
        } & {
            id: string;
            createdAt: Date;
            edicaoId: string;
            categoriaId: string;
            finalistaId: string;
            totalVotos: number;
            publicadoEm: Date | null;
            validadoPorId: string | null;
        })[];
        ata: {
            id: string;
            createdAt: Date;
            edicaoId: string;
            publicadaEm: Date | null;
            conteudoMd: string;
        };
        ranking: {
            posicao: number;
            finalistaId: string;
            nomeStartup: string;
            categoria: string;
            cidade: string | null;
            slugPublico: string | null;
            totalVotos: number;
        }[];
    }>;
    ranking(): Promise<{
        posicao: number;
        finalistaId: string;
        nomeStartup: string;
        categoria: string;
        cidade: string | null;
        slugPublico: string | null;
        totalVotos: number;
    }[]>;
    testemunhas(): Promise<{
        id: string;
        nome: string;
        createdAt: Date;
        edicaoId: string;
        email: string;
        status: import("../../generated/prisma/enums").StatusTestemunhaApuracao;
        token: string;
        organizacao: string | null;
        convidadaEm: Date;
        confirmadaEm: Date | null;
        observacao: string | null;
    }[]>;
    convidarTestemunha(dto: ConvidarTestemunhaDto): Promise<{
        confirmaUrl: string;
        id: string;
        nome: string;
        createdAt: Date;
        edicaoId: string;
        email: string;
        status: import("../../generated/prisma/enums").StatusTestemunhaApuracao;
        token: string;
        organizacao: string | null;
        convidadaEm: Date;
        confirmadaEm: Date | null;
        observacao: string | null;
    }>;
}
