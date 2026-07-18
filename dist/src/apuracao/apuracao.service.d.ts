import { StatusTestemunhaApuracao } from '../../generated/prisma/client';
import { AuditoriaService } from '../auditoria/auditoria.service';
import { EdicoesService } from '../edicoes/edicoes.service';
import { PrismaService } from '../prisma/prisma.service';
import { ConfirmarTestemunhaDto, ConvidarTestemunhaDto } from './dto/testemunha.dto';
export declare class ApuracaoService {
    private readonly prisma;
    private readonly edicoesService;
    private readonly auditoria;
    constructor(prisma: PrismaService, edicoesService: EdicoesService, auditoria: AuditoriaService);
    anomalias(): Promise<{
        totalVotos: number;
        picos: {
            hora: string;
            total: number;
        }[];
        votosSemElegibilidade: number;
    }>;
    quorumColegio(): Promise<{
        comunidades: number;
        membrosAtivos: number;
        comunidadesRepresentadas: number;
        membrosQueSelecionaram: number;
        xLideresColegio: number;
        esperado: number;
    }>;
    publicarResultados(adminId: string): Promise<{
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
    rankingMaisVotadas(limit?: number): Promise<{
        posicao: number;
        finalistaId: string;
        nomeStartup: string;
        categoria: string;
        cidade: string | null;
        slugPublico: string | null;
        totalVotos: number;
    }[]>;
    promoverFinalistasDoColegio(): Promise<{
        finalistas: number;
    }>;
    private selecionarComCotas;
    getAtaPublica(): Promise<{
        edicao: {
            id: string;
            nome: string;
            ano: number;
        };
        testemunhas: {
            id: string;
            nome: string;
            email: string;
            organizacao: string | null;
            confirmadaEm: Date | null;
            observacao: string | null;
        }[];
        id: string;
        createdAt: Date;
        edicaoId: string;
        publicadaEm: Date | null;
        conteudoMd: string;
    }>;
    listResultadosPublicos(): Promise<({
        categoria: {
            id: string;
            nome: string;
            edicaoId: string;
            ordem: number;
        };
        finalista: {
            inscricaoStartup: {
                nomeStartup: string | null;
                cidadeOperacao: string | null;
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
    })[]>;
    listTestemunhasAdmin(): Promise<{
        id: string;
        nome: string;
        createdAt: Date;
        edicaoId: string;
        email: string;
        status: StatusTestemunhaApuracao;
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
        status: StatusTestemunhaApuracao;
        token: string;
        organizacao: string | null;
        convidadaEm: Date;
        confirmadaEm: Date | null;
        observacao: string | null;
    }>;
    getConviteTestemunha(token: string): Promise<{
        id: string;
        nome: string;
        email: string;
        organizacao: string | null;
        status: StatusTestemunhaApuracao;
        confirmadaEm: Date | null;
        edicao: {
            id: string;
            nome: string;
            ano: number;
        };
    }>;
    confirmarTestemunha(token: string, dto?: ConfirmarTestemunhaDto): Promise<{
        id: string;
        nome: string;
        createdAt: Date;
        edicaoId: string;
        email: string;
        status: StatusTestemunhaApuracao;
        token: string;
        organizacao: string | null;
        convidadaEm: Date;
        confirmadaEm: Date | null;
        observacao: string | null;
    }>;
    galeriaVencedores(): Promise<{
        id: string;
        nome: string;
        ano: number;
        ativa: boolean;
        vencedores: {
            categoria: string;
            totalVotos: number;
            publicadoEm: Date | null;
            startup: string | null;
            slugPublico: string | null;
            cidade: string | null;
            logoUrl: string | null;
        }[];
        testemunhas: {
            nome: string;
            organizacao: string | null;
            confirmadaEm: Date | null;
        }[];
    }[]>;
}
