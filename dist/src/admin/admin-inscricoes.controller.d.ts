import { InscricoesService } from '../inscricoes/inscricoes.service';
import { CreateManualInscricaoDto, DeleteInscricaoQueryDto, ListInscricoesQueryDto, UpdateInscricaoDto } from './dto/inscricoes.dto';
export declare class AdminInscricoesController {
    private readonly inscricoesService;
    constructor(inscricoesService: InscricoesService);
    stats(): Promise<import("../inscricoes/inscricoes.types").InscricaoAdminStats>;
    list(query: ListInscricoesQueryDto): Promise<{
        data: {
            data: string;
            status: string;
            id: string;
            nome: string;
            tipo: "lider" | "startup";
            comunidade: string;
            cidade: string;
            email: string;
            telefone: string;
            inscritoEm: Date;
            origem?: string;
        }[];
        meta: {
            page: number;
            limit: number;
            total: number;
        };
    }>;
    create(dto: CreateManualInscricaoDto): Promise<import("../inscricoes/inscricoes.types").InscricaoAdminItem>;
    update(id: string, dto: UpdateInscricaoDto): Promise<import("../inscricoes/inscricoes.types").InscricaoAdminItem>;
    remove(id: string, query: DeleteInscricaoQueryDto): Promise<{
        deleted: boolean;
    }>;
    importStartups(file: Express.Multer.File, req: {
        user: {
            id: string;
        };
    }): Promise<{
        totalLinhas: number;
        importadas: number;
        ignoradas: number;
        erros: {
            linha: number;
            motivo: string;
        }[];
    }>;
    importStartupsColumns(): readonly [{
        readonly campo: "nomeStartup";
        readonly obrigatorio: true;
        readonly exemplos: "nome, NOME, startup, empresa, nome da startup";
    }, {
        readonly campo: "responsavelNome";
        readonly obrigatorio: false;
        readonly exemplos: "responsavel, COORDENADOR, nome do responsável";
    }, {
        readonly campo: "responsavelCpf";
        readonly obrigatorio: false;
        readonly exemplos: "cpf, CPF, cpf responsável";
    }, {
        readonly campo: "responsavelEmail";
        readonly obrigatorio: false;
        readonly exemplos: "email, EMAIL, e-mail";
    }, {
        readonly campo: "responsavelTelefone";
        readonly obrigatorio: false;
        readonly exemplos: "telefone, TELEFONE, celular";
    }, {
        readonly campo: "comunidade";
        readonly obrigatorio: false;
        readonly exemplos: "comunidade, Região (padrão: Não informada)";
    }, {
        readonly campo: "cidadeOperacao";
        readonly obrigatorio: false;
        readonly exemplos: "cidade, CIDADE";
    }, {
        readonly campo: "categoria";
        readonly obrigatorio: false;
        readonly exemplos: "categoria, Mercado, segmento";
    }, {
        readonly campo: "site";
        readonly obrigatorio: false;
        readonly exemplos: "site, website, url";
    }, {
        readonly campo: "descricao";
        readonly obrigatorio: false;
        readonly exemplos: "descricao, O QUE FAZ, Solução, sobre";
    }, {
        readonly campo: "status";
        readonly obrigatorio: false;
        readonly exemplos: "status, Status no Programa (ATIVA→Ativo, INATIVA→Pendente)";
    }, {
        readonly campo: "metricas (Dados Gerais)";
        readonly obrigatorio: false;
        readonly exemplos: "id.supi, TURMA, Origem, TRL, Maturidade, CNPJ, Postos de trabalho, sócios, faturamento, Modelo de Negócios, Tipo de Cliente, ESTADO, Região";
    }];
    import(file: Express.Multer.File, req: {
        user: {
            id: string;
        };
    }): Promise<{
        totalLinhas: number;
        importadas: number;
        ignoradas: number;
        erros: {
            linha: number;
            motivo: string;
        }[];
    }>;
}
