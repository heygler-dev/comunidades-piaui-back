import { AuthUser } from '../auth/jwt.strategy';
import { ApontarColegioDto, NomearLiderDto } from './dto/lider.dto';
import { LiderService } from './lider.service';
import { RejeitarSolicitacaoDto } from '../solicitacoes/dto/solicitacoes.dto';
import { SolicitacoesService } from '../solicitacoes/solicitacoes.service';
import { TipoSolicitacaoCadastro } from '../../generated/prisma/client';
declare class ComunidadeQuery {
    comunidadeId?: string;
}
export declare class LiderController {
    private readonly liderService;
    private readonly solicitacoesService;
    constructor(liderService: LiderService, solicitacoesService: SolicitacoesService);
    me(req: {
        user: AuthUser;
    }): Promise<{
        id: string;
        nome: string;
        email: string;
        cpfMascarado: string;
        papeis: {
            lider: boolean;
            empreendedor: boolean;
        };
        vinculosLider: {
            liderId: string;
            tipoLider: import("../../generated/prisma/enums").TipoLider;
            comunidade: {
                id: string;
                nome: string;
                cidade: string;
                slug: string;
            };
        }[];
        startups: {
            id: string;
            status: import("../../generated/prisma/enums").StatusInscricaoStartup;
            nomeStartup: string | null;
            slugPublico: string | null;
            comunidade: {
                id: string;
                nome: string;
                slug: string;
            };
        }[];
    }>;
    link(req: {
        user: AuthUser;
    }, query: ComunidadeQuery): Promise<{
        slug: string;
        linkInscricao: string;
        ativo: boolean;
        comunidade: {
            id: string;
            nome: string;
            cidade: string;
            slug: string;
        };
        liderId: string;
    }>;
    stats(req: {
        user: AuthUser;
    }, query: ComunidadeQuery): Promise<{
        comunidade: {
            id: string;
            nome: string;
            cidade: string;
            slug: string;
        };
        total: number;
        porStatus: {
            [k: string]: number;
        };
    }>;
    inscricoes(req: {
        user: AuthUser;
    }, query: ComunidadeQuery): Promise<{
        id: string;
        createdAt: Date;
        status: import("../../generated/prisma/enums").StatusInscricaoStartup;
        nomeStartup: string | null;
        categoria: string | null;
        cidadeOperacao: string | null;
        site: string | null;
        slugPublico: string | null;
        confirmadoEm: Date | null;
    }[]>;
    aprovarInscricao(req: {
        user: AuthUser;
    }, id: string, query: ComunidadeQuery): Promise<{
        mensagem: string;
        id: string;
        status: import("../../generated/prisma/enums").StatusInscricaoStartup;
        nomeStartup: string | null;
        slugPublico: string | null;
    }>;
    rejeitarInscricao(req: {
        user: AuthUser;
    }, id: string, query: ComunidadeQuery): Promise<{
        mensagem: string;
        id: string;
        status: import("../../generated/prisma/enums").StatusInscricaoStartup;
        nomeStartup: string | null;
    }>;
    listLideres(req: {
        user: AuthUser;
    }, query: ComunidadeQuery): Promise<{
        id: string;
        nome: string;
        email: string;
        telefone: string;
        status: import("../../generated/prisma/enums").StatusParticipante;
        tipoLider: import("../../generated/prisma/enums").TipoLider;
        ativadoEm: Date;
    }[]>;
    nomear(req: {
        user: AuthUser;
    }, dto: NomearLiderDto, query: ComunidadeQuery): Promise<{
        id: string;
        nome: string;
        email: string;
        status: import("../../generated/prisma/enums").StatusParticipante;
        pessoaId: string;
        tipoLider: import("../../generated/prisma/enums").TipoLider;
    }>;
    apontarColegio(req: {
        user: AuthUser;
    }, dto: ApontarColegioDto, query: ComunidadeQuery): Promise<({
        lider: {
            id: string;
            nome: string;
            email: string;
        };
    } & {
        id: string;
        edicaoId: string;
        ativo: boolean;
        comunidadeId: string;
        liderId: string;
        apontadoEm: Date;
    })[]>;
    listSolicitacoes(req: {
        user: AuthUser;
    }, query: ComunidadeQuery & {
        tipo?: TipoSolicitacaoCadastro;
    }): Promise<{
        items: {
            id: string;
            nome: string;
            createdAt: Date;
            cpf: string;
            email: string;
            telefone: string;
            descricao: string | null;
            status: import("../../generated/prisma/enums").StatusSolicitacao;
            tipo: TipoSolicitacaoCadastro;
            nomeStartup: string | null;
            categoria: string | null;
            cidadeOperacao: string | null;
            site: string | null;
        }[];
        pendentes: {
            startup: number;
            lider: number;
        };
        podeRevisarLider: boolean;
    }>;
    aprovarSolicitacao(req: {
        user: AuthUser;
    }, id: string, query: ComunidadeQuery): Promise<{
        id: string;
        status: "APROVADA";
        liderId: string;
        mensagem: string;
    } | {
        id: string;
        status: "APROVADA";
        inscricaoId: string;
        slugPublico: string | null;
        paginaUrl: string;
        mensagem: string;
    }>;
    rejeitarSolicitacao(req: {
        user: AuthUser;
    }, id: string, dto: RejeitarSolicitacaoDto, query: ComunidadeQuery): Promise<{
        id: string;
        status: "REJEITADA";
        mensagem: string;
    }>;
}
export {};
