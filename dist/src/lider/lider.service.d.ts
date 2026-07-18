import { StatusInscricaoStartup, StatusParticipante, TipoLider } from '../../generated/prisma/client';
import { EdicoesService } from '../edicoes/edicoes.service';
import { PessoasService } from '../pessoas/pessoas.service';
import { PrismaService } from '../prisma/prisma.service';
import { NomearLiderDto } from './dto/lider.dto';
export declare class LiderService {
    private readonly prisma;
    private readonly edicoesService;
    private readonly pessoasService;
    constructor(prisma: PrismaService, edicoesService: EdicoesService, pessoasService: PessoasService);
    me(pessoaId: string): Promise<{
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
            tipoLider: TipoLider;
            comunidade: {
                id: string;
                nome: string;
                cidade: string;
                slug: string;
            };
        }[];
        startups: {
            id: string;
            status: StatusInscricaoStartup;
            nomeStartup: string | null;
            slugPublico: string | null;
            comunidade: {
                id: string;
                nome: string;
                slug: string;
            };
        }[];
    }>;
    getLink(pessoaId: string, comunidadeId?: string): Promise<{
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
    stats(pessoaId: string, comunidadeId?: string): Promise<{
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
    listLideresComunidade(pessoaId: string, comunidadeId?: string): Promise<{
        id: string;
        nome: string;
        email: string;
        telefone: string;
        status: StatusParticipante;
        tipoLider: TipoLider;
        ativadoEm: Date;
    }[]>;
    nomearLider(pessoaId: string, dto: NomearLiderDto, comunidadeId?: string): Promise<{
        id: string;
        nome: string;
        email: string;
        status: StatusParticipante;
        pessoaId: string;
        tipoLider: TipoLider;
    }>;
    apontarColegio(pessoaId: string, liderIds: string[], comunidadeId?: string): Promise<({
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
    listInscricoes(pessoaId: string, comunidadeId?: string): Promise<{
        id: string;
        createdAt: Date;
        status: StatusInscricaoStartup;
        nomeStartup: string | null;
        categoria: string | null;
        cidadeOperacao: string | null;
        site: string | null;
        slugPublico: string | null;
        confirmadoEm: Date | null;
    }[]>;
    aprovarInscricao(pessoaId: string, inscricaoId: string, comunidadeId?: string): Promise<{
        mensagem: string;
        id: string;
        status: StatusInscricaoStartup;
        nomeStartup: string | null;
        slugPublico: string | null;
    }>;
    rejeitarInscricao(pessoaId: string, inscricaoId: string, comunidadeId?: string): Promise<{
        mensagem: string;
        id: string;
        status: StatusInscricaoStartup;
        nomeStartup: string | null;
    }>;
    private resolveLider;
}
