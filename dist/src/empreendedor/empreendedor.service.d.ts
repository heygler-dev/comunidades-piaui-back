import { StatusInscricaoStartup } from '../../generated/prisma/client';
import { AuditoriaService } from '../auditoria/auditoria.service';
import { PrismaService } from '../prisma/prisma.service';
import { DefinirSenhaDto, SetBadgesDto, UpdateInscricaoEmpreendedorDto } from './dto/empreendedor.dto';
export declare class EmpreendedorService {
    private readonly prisma;
    private readonly auditoria;
    constructor(prisma: PrismaService, auditoria: AuditoriaService);
    me(pessoaId: string): Promise<{
        id: string;
        nomeStartup: string | null;
        categoria: string | null;
        cidadeOperacao: string | null;
        site: string | null;
        descricao: string | null;
        logoUrl: string | null;
        pitchCurto: string | null;
        videoUrl: string | null;
        slugPublico: string | null;
        paginaUrl: string;
        status: StatusInscricaoStartup;
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
        finalistas: {
            id: string;
            categoriaId: string;
            categoria: string;
            metaResumo: string | null;
            vencedor: boolean;
            totalVotos: number | null;
        }[];
        votacaoAberta: boolean;
        edicaoNome: string | null;
        edicaoAno: number | null;
    }>;
    update(pessoaId: string, dto: UpdateInscricaoEmpreendedorDto): Promise<{
        id: string;
        nomeStartup: string | null;
        categoria: string | null;
        cidadeOperacao: string | null;
        site: string | null;
        descricao: string | null;
        logoUrl: string | null;
        pitchCurto: string | null;
        videoUrl: string | null;
        slugPublico: string | null;
        paginaUrl: string;
        status: StatusInscricaoStartup;
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
        finalistas: {
            id: string;
            categoriaId: string;
            categoria: string;
            metaResumo: string | null;
            vencedor: boolean;
            totalVotos: number | null;
        }[];
        votacaoAberta: boolean;
        edicaoNome: string | null;
        edicaoAno: number | null;
    }>;
    updateLogo(pessoaId: string, logoUrl: string): Promise<{
        id: string;
        nomeStartup: string | null;
        categoria: string | null;
        cidadeOperacao: string | null;
        site: string | null;
        descricao: string | null;
        logoUrl: string | null;
        pitchCurto: string | null;
        videoUrl: string | null;
        slugPublico: string | null;
        paginaUrl: string;
        status: StatusInscricaoStartup;
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
        finalistas: {
            id: string;
            categoriaId: string;
            categoria: string;
            metaResumo: string | null;
            vencedor: boolean;
            totalVotos: number | null;
        }[];
        votacaoAberta: boolean;
        edicaoNome: string | null;
        edicaoAno: number | null;
    }>;
    setBadges(pessoaId: string, dto: SetBadgesDto): Promise<{
        id: string;
        nomeStartup: string | null;
        categoria: string | null;
        cidadeOperacao: string | null;
        site: string | null;
        descricao: string | null;
        logoUrl: string | null;
        pitchCurto: string | null;
        videoUrl: string | null;
        slugPublico: string | null;
        paginaUrl: string;
        status: StatusInscricaoStartup;
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
        finalistas: {
            id: string;
            categoriaId: string;
            categoria: string;
            metaResumo: string | null;
            vencedor: boolean;
            totalVotos: number | null;
        }[];
        votacaoAberta: boolean;
        edicaoNome: string | null;
        edicaoAno: number | null;
    }>;
    definirSenha(pessoaId: string, dto: DefinirSenhaDto): Promise<{
        ok: boolean;
    }>;
    private resolveInscricao;
    private getInscricao;
    private toPublic;
}
