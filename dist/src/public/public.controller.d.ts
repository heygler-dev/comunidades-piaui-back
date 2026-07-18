import { ApuracaoService } from '../apuracao/apuracao.service';
import { ConfirmarTestemunhaDto } from '../apuracao/dto/testemunha.dto';
import { EdicoesService } from '../edicoes/edicoes.service';
import { SolicitarLiderDto, SolicitarStartupDto } from '../solicitacoes/dto/solicitacoes.dto';
import { SolicitacoesService } from '../solicitacoes/solicitacoes.service';
import { AtivarLiderDto } from './dto/lider.dto';
import { ConfirmarInscricaoDto, CreateInscricaoStartupDto, Etapa1StartupDto, Etapa2StartupDto } from './dto/startup.dto';
import { PublicConvitesService, PublicStartupService, PublicVotoService } from './public.service';
export declare class PublicController {
    private readonly convitesService;
    private readonly startupService;
    private readonly votoService;
    private readonly apuracaoService;
    private readonly solicitacoesService;
    private readonly edicoesService;
    constructor(convitesService: PublicConvitesService, startupService: PublicStartupService, votoService: PublicVotoService, apuracaoService: ApuracaoService, solicitacoesService: SolicitacoesService, edicoesService: EdicoesService);
    getConvite(token: string): Promise<{
        token: string;
        tipo: string;
        comunidade: {
            nome: string;
            cidade: string;
            estado: string;
        };
        linkValido: boolean;
    }>;
    getLinkInscricao(slug: string): Promise<{
        slug: string;
        comunidade: {
            nome: string;
            cidade: string;
            estado: string;
        };
        lider: {
            nome: string;
        };
        linkValido: boolean;
    }>;
    ativarLider(dto: AtivarLiderDto): Promise<{
        liderId: string;
        nome: string;
        linkInscricao: string;
        slug: string;
    }>;
    solicitarLider(dto: SolicitarLiderDto): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").StatusSolicitacao;
        comunidade: {
            nome: string;
            cidade: string;
            estado: string;
        };
        mensagem: string;
    }>;
    solicitarStartup(dto: SolicitarStartupDto): Promise<{
        id: string;
        status: import("../../generated/prisma/enums").StatusSolicitacao;
        comunidade: {
            nome: string;
            cidade: string;
            estado: string;
        };
        mensagem: string;
    }>;
    createInscricao(dto: CreateInscricaoStartupDto): Promise<{
        id: string;
        etapaAtual: number;
        status: import("../inscricoes/inscricoes.types").StatusInscricaoStartup;
        comunidade: {
            nome: string;
            cidade: string;
            estado: string;
        };
    }>;
    getInscricao(id: string): Promise<{
        id: string;
        etapaAtual: number;
        status: import("../inscricoes/inscricoes.types").StatusInscricaoStartup;
        responsavelNome: string | null;
        responsavelTelefone: string | null;
        responsavelEmail: string | null;
        nomeStartup: string | null;
        categoria: string | null;
        cidadeOperacao: string | null;
        site: string | null;
        descricao: string | null;
        slugPublico: string | null;
        comunidade: {
            nome: string;
            cidade: string;
            estado: string;
        };
    }>;
    etapa1(id: string, dto: Etapa1StartupDto): Promise<{
        id: string;
        createdAt: Date;
        edicaoId: string;
        senhaHash: string | null;
        lgpdAceitoEm: Date | null;
        updatedAt: Date;
        descricao: string | null;
        logoUrl: string | null;
        status: import("../inscricoes/inscricoes.types").StatusInscricaoStartup;
        comunidadeId: string;
        pessoaId: string | null;
        liderId: string | null;
        linkComunidadeId: string | null;
        responsavelNome: string | null;
        responsavelCpf: string | null;
        responsavelTelefone: string | null;
        responsavelEmail: string | null;
        nomeStartup: string | null;
        categoria: string | null;
        cidadeOperacao: string | null;
        site: string | null;
        pitchCurto: string | null;
        videoUrl: string | null;
        metricasJson: import("@prisma/client/runtime/client").JsonValue | null;
        etapaAtual: number;
        slugPublico: string | null;
        cpfUnicoConfirmado: boolean;
        confirmadoEm: Date | null;
        origem: import("../inscricoes/inscricoes.types").OrigemCadastro;
    }>;
    etapa2(id: string, dto: Etapa2StartupDto): Promise<{
        id: string;
        createdAt: Date;
        edicaoId: string;
        senhaHash: string | null;
        lgpdAceitoEm: Date | null;
        updatedAt: Date;
        descricao: string | null;
        logoUrl: string | null;
        status: import("../inscricoes/inscricoes.types").StatusInscricaoStartup;
        comunidadeId: string;
        pessoaId: string | null;
        liderId: string | null;
        linkComunidadeId: string | null;
        responsavelNome: string | null;
        responsavelCpf: string | null;
        responsavelTelefone: string | null;
        responsavelEmail: string | null;
        nomeStartup: string | null;
        categoria: string | null;
        cidadeOperacao: string | null;
        site: string | null;
        pitchCurto: string | null;
        videoUrl: string | null;
        metricasJson: import("@prisma/client/runtime/client").JsonValue | null;
        etapaAtual: number;
        slugPublico: string | null;
        cpfUnicoConfirmado: boolean;
        confirmadoEm: Date | null;
        origem: import("../inscricoes/inscricoes.types").OrigemCadastro;
    }>;
    confirmar(id: string, dto: ConfirmarInscricaoDto): Promise<{
        inscricaoId: string;
        slugPublico: string | null;
        paginaUrl: string;
        preview: {
            nome: string | null;
            categoria: string | null;
            cidade: string | null;
            descricao: string | null;
            inicial: string | undefined;
        };
        comunidade: string;
    }>;
    landingPage(slug: string): Promise<{
        nomeStartup: string | null;
        categoria: string | null;
        cidadeOperacao: string | null;
        site: string | null;
        descricao: string | null;
        logoUrl: string | null;
        pitchCurto: string | null;
        videoUrl: string | null;
        metricas: import("@prisma/client/runtime/client").JsonValue;
        slugPublico: string | null;
        paginaUrl: string;
        comunidade: {
            id: string;
            nome: string;
            slug: string;
        };
        badges: {
            id: string;
            nome: string;
            slug: string;
        }[];
        ehFinalista: boolean;
        ehVencedor: boolean;
        categoriasFinalista: string[];
    }>;
    listComunidades(): Promise<{
        id: string;
        nome: string;
        descricao: string | null;
        institucional: boolean;
        cidade: string;
        cidadesAtuacao: string | null;
        logoUrl: string | null;
        slug: string;
        isPadraoStartupPiaui: boolean;
    }[]>;
    statusVotacao(): Promise<{
        votacaoAberta: boolean;
    }>;
    categorias(): Promise<{
        id: string;
        nome: string;
        edicaoId: string;
        ordem: number;
    }[]>;
    finalistas(categoria: string): Promise<{
        id: string;
        nome: string | null;
        categoria: string;
        metaResumo: string;
        inicial: string | undefined;
    }[]>;
    totalVotos(): Promise<{
        total: number;
    }>;
    votarAnonimo(): void;
    resultados(): Promise<({
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
    ata(): Promise<{
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
    galeria(): Promise<{
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
    regras(versao?: string): Promise<{
        edicao: {
            id: string;
            nome: string;
            ano: number;
            ativa: boolean;
        };
        vigente: {
            nome: string;
            ano: number;
            faseAtual: import("../../generated/prisma/enums").FasePremio;
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
    getConviteTestemunha(token: string): Promise<{
        id: string;
        nome: string;
        email: string;
        organizacao: string | null;
        status: import("../../generated/prisma/enums").StatusTestemunhaApuracao;
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
        status: import("../../generated/prisma/enums").StatusTestemunhaApuracao;
        token: string;
        organizacao: string | null;
        convidadaEm: Date;
        confirmadaEm: Date | null;
        observacao: string | null;
    }>;
}
