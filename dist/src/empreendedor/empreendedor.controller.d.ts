import { AuthUser } from '../auth/jwt.strategy';
import { DefinirSenhaDto, SetBadgesDto, UpdateInscricaoEmpreendedorDto } from './dto/empreendedor.dto';
import { EmpreendedorService } from './empreendedor.service';
export declare class EmpreendedorController {
    private readonly empreendedorService;
    constructor(empreendedorService: EmpreendedorService);
    me(req: {
        user: AuthUser;
    }): Promise<{
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
        status: import("../inscricoes/inscricoes.types").StatusInscricaoStartup;
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
    update(req: {
        user: AuthUser;
    }, dto: UpdateInscricaoEmpreendedorDto): Promise<{
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
        status: import("../inscricoes/inscricoes.types").StatusInscricaoStartup;
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
    uploadLogo(req: {
        user: AuthUser;
    }, logo: Express.Multer.File | undefined): Promise<{
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
        status: import("../inscricoes/inscricoes.types").StatusInscricaoStartup;
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
    badges(req: {
        user: AuthUser;
    }, dto: SetBadgesDto): Promise<{
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
        status: import("../inscricoes/inscricoes.types").StatusInscricaoStartup;
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
    senha(req: {
        user: AuthUser;
    }, dto: DefinirSenhaDto): Promise<{
        ok: boolean;
    }>;
}
