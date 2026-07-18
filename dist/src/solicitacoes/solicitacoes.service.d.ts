import { StatusSolicitacao, TipoSolicitacaoCadastro } from '../../generated/prisma/client';
import { EdicoesService } from '../edicoes/edicoes.service';
import { PessoasService } from '../pessoas/pessoas.service';
import { PrismaService } from '../prisma/prisma.service';
import { RejeitarSolicitacaoDto, SolicitarLiderDto, SolicitarStartupDto } from './dto/solicitacoes.dto';
export declare class SolicitacoesService {
    private readonly prisma;
    private readonly edicoesService;
    private readonly pessoasService;
    constructor(prisma: PrismaService, edicoesService: EdicoesService, pessoasService: PessoasService);
    private assertComunidadeAtiva;
    private assertSemSolicitacaoPendente;
    solicitarLider(dto: SolicitarLiderDto): Promise<{
        id: string;
        status: StatusSolicitacao;
        comunidade: {
            nome: string;
            cidade: string;
            estado: string;
        };
        mensagem: string;
    }>;
    solicitarStartup(dto: SolicitarStartupDto): Promise<{
        id: string;
        status: StatusSolicitacao;
        comunidade: {
            nome: string;
            cidade: string;
            estado: string;
        };
        mensagem: string;
    }>;
    private resolveLiderRevisor;
    listarParaLider(pessoaId: string, comunidadeId: string | undefined, tipo?: TipoSolicitacaoCadastro): Promise<{
        items: {
            id: string;
            nome: string;
            createdAt: Date;
            cpf: string;
            email: string;
            telefone: string;
            descricao: string | null;
            status: StatusSolicitacao;
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
    aprovar(pessoaId: string, solicitacaoId: string, comunidadeId?: string): Promise<{
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
    private aprovarLider;
    private aprovarStartup;
    rejeitar(pessoaId: string, solicitacaoId: string, dto: RejeitarSolicitacaoDto, comunidadeId?: string): Promise<{
        id: string;
        status: "REJEITADA";
        mensagem: string;
    }>;
    private uniqueSlug;
}
