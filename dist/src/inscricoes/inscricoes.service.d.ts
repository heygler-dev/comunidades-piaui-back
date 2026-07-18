import { StartupImportRow } from './startup-import.util';
import { EdicoesService } from '../edicoes/edicoes.service';
import { PessoasService } from '../pessoas/pessoas.service';
import { PrismaService } from '../prisma/prisma.service';
import { InscricaoAdminItem, InscricaoAdminStats, TipoInscricaoAdmin } from './inscricoes.types';
export declare class InscricoesService {
    private readonly prisma;
    private readonly edicoesService;
    private readonly pessoasService;
    constructor(prisma: PrismaService, edicoesService: EdicoesService, pessoasService: PessoasService);
    private mapStatusParticipante;
    private mapStatusStartup;
    listAdmin(params: {
        tipo?: TipoInscricaoAdmin;
        q?: string;
        page?: number;
        limit?: number;
    }): Promise<{
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
    stats(): Promise<InscricaoAdminStats>;
    createManual(dto: {
        nome: string;
        tipo: 'lider' | 'startup';
        status?: 'Ativo' | 'Pendente';
        comunidade: string;
        cidade?: string;
        email?: string;
        telefone?: string;
    }): Promise<InscricaoAdminItem>;
    updateAdmin(id: string, tipo: 'lider' | 'startup', dto: {
        nome?: string;
        status?: 'Ativo' | 'Pendente';
        comunidade?: string;
        cidade?: string;
        email?: string;
        telefone?: string;
    }): Promise<InscricaoAdminItem>;
    deleteAdmin(id: string, tipo: 'lider' | 'startup'): Promise<{
        deleted: boolean;
    }>;
    importSpreadsheet(file: Express.Multer.File | undefined, adminId?: string): Promise<{
        totalLinhas: number;
        importadas: number;
        ignoradas: number;
        erros: {
            linha: number;
            motivo: string;
        }[];
    }>;
    getStartupImportColumns(): readonly [{
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
    importStartupsSpreadsheet(file: Express.Multer.File | undefined, adminId?: string): Promise<{
        totalLinhas: number;
        importadas: number;
        ignoradas: number;
        erros: {
            linha: number;
            motivo: string;
        }[];
    }>;
    createStartupFromImport(dto: StartupImportRow): Promise<InscricaoAdminItem>;
    private readSpreadsheetRows;
    private pickImportSheetName;
    private enrichDadosGeraisRows;
    private readCnpjLookup;
    private readEquipeLookup;
    private runImportBatch;
    private fetchAdminItems;
    private toAdminItemFromLider;
    private toAdminItemFromStartup;
    private findOrCreateComunidade;
    private uniqueStartupSlug;
    private generatePlaceholderCpf;
    private formatDate;
    private capitalizeStatus;
    assertCpf(cpf: string): string;
    assertCpfUnicoStartup(edicaoId: string, cpf: string, ignoreId?: string): Promise<void>;
}
