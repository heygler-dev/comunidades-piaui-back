import { PapelAuditoria, TipoAuditoria, Prisma } from '../../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';
export declare class AuditoriaService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    registrar(input: {
        edicaoId?: string;
        tipo: TipoAuditoria;
        atorPapel?: PapelAuditoria;
        atorId?: string;
        cpfHash?: string;
        payload?: Prisma.InputJsonValue;
    }): Prisma.Prisma__AuditoriaEventoClient<{
        id: string;
        createdAt: Date;
        edicaoId: string | null;
        tipo: TipoAuditoria;
        atorPapel: PapelAuditoria | null;
        atorId: string | null;
        cpfHash: string | null;
        payload: import("@prisma/client/runtime/client").JsonValue | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: Prisma.GlobalOmitConfig | undefined;
    }>;
    listAdmin(params: {
        tipo?: TipoAuditoria | 'TODOS';
        page?: number;
        limit?: number;
    }): Promise<{
        edicao: {
            id: string;
            nome: string;
            ano: number;
        };
        page: number;
        limit: number;
        total: number;
        totalPages: number;
        filtros: {
            tipo: "VOTO" | "INDICACAO" | "SELECAO_COLEGIO" | "FASE_ALTERADA" | "RESULTADO_PUBLICADO" | "LOGIN" | "DADOS_ALTERADOS";
            label: string;
            total: number;
        }[];
        data: {
            id: string;
            tipo: TipoAuditoria;
            tipoLabel: string;
            atorPapel: PapelAuditoria | null;
            atorId: string | null;
            cpfHashPrefix: string | null;
            resumo: string;
            payload: import("@prisma/client/runtime/client").JsonValue;
            createdAt: Date;
        }[];
    }>;
    private toAdminRow;
    private sanitizePayload;
    private resumoPayload;
}
