import { StatusInscricaoStartup } from '../../generated/prisma/client';
import { AuditoriaService } from '../auditoria/auditoria.service';
import { EdicoesService } from '../edicoes/edicoes.service';
import { PessoasService } from '../pessoas/pessoas.service';
import { PrismaService } from '../prisma/prisma.service';
import { AtivarLiderDto } from './dto/lider.dto';
export declare class PublicConvitesService {
    private readonly prisma;
    private readonly edicoesService;
    private readonly pessoasService;
    constructor(prisma: PrismaService, edicoesService: EdicoesService, pessoasService: PessoasService);
    private assertConviteLiderValido;
    getConviteLider(token: string): Promise<{
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
}
export declare class PublicStartupService {
    private readonly prisma;
    private readonly edicoesService;
    private readonly pessoasService;
    constructor(prisma: PrismaService, edicoesService: EdicoesService, pessoasService: PessoasService);
    createDraft(slug: string): Promise<{
        id: string;
        etapaAtual: number;
        status: StatusInscricaoStartup;
        comunidade: {
            nome: string;
            cidade: string;
            estado: string;
        };
    }>;
    saveEtapa1(id: string, dto: {
        responsavelNome: string;
        cpf: string;
        telefone: string;
        email: string;
        senha: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        edicaoId: string;
        senhaHash: string | null;
        lgpdAceitoEm: Date | null;
        updatedAt: Date;
        descricao: string | null;
        logoUrl: string | null;
        status: StatusInscricaoStartup;
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
        origem: import("../../generated/prisma/enums").OrigemCadastro;
    }>;
    saveEtapa2(id: string, dto: {
        nomeStartup: string;
        categoria: string;
        cidadeOperacao: string;
        site?: string;
        descricao: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        edicaoId: string;
        senhaHash: string | null;
        lgpdAceitoEm: Date | null;
        updatedAt: Date;
        descricao: string | null;
        logoUrl: string | null;
        status: StatusInscricaoStartup;
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
        origem: import("../../generated/prisma/enums").OrigemCadastro;
    }>;
    confirmar(id: string, dto: {
        lgpdAceito: boolean;
        cpfUnicoConfirmado: boolean;
        senha?: string;
    }): Promise<{
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
    getInscricao(id: string): Promise<{
        id: string;
        etapaAtual: number;
        status: StatusInscricaoStartup;
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
    getLandingPage(identifier: string): Promise<{
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
    listComunidadesPublicas(): Promise<{
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
    private getInscricaoRascunho;
    private assertCpfUnico;
    private getLink;
    private findInscricaoPublica;
    private uniqueSlug;
}
export declare class PublicVotoService {
    private readonly prisma;
    private readonly edicoesService;
    private readonly auditoria;
    private readonly pessoasService;
    constructor(prisma: PrismaService, edicoesService: EdicoesService, auditoria: AuditoriaService, pessoasService: PessoasService);
    statusVotacao(): Promise<{
        votacaoAberta: boolean;
    }>;
    listCategorias(): Promise<{
        id: string;
        nome: string;
        edicaoId: string;
        ordem: number;
    }[]>;
    listFinalistas(categoria: string): Promise<{
        id: string;
        nome: string | null;
        categoria: string;
        metaResumo: string;
        inicial: string | undefined;
    }[]>;
    totalVotos(): Promise<{
        total: number;
    }>;
    registrarVoto(dto: {
        nome: string;
        cpf: string;
        categoria: string;
        finalistaId: string;
        lgpdAceito: boolean;
    }): Promise<{
        startup: string | null;
        categoria: string;
        totalVotos: number;
    }>;
    registrarVotoAutenticado(user: {
        id: string;
        role: 'lider' | 'empreendedor';
        pessoaId?: string;
    }, dto: {
        categoria: string;
        finalistaId: string;
        lgpdAceito: boolean;
    }): Promise<{
        startup: string | null;
        categoria: string;
        totalVotos: number;
    }>;
}
