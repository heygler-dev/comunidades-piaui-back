import { TipoAuditoria } from '../../generated/prisma/client';
import { AuditoriaService } from '../auditoria/auditoria.service';
export declare class AdminAuditoriaController {
    private readonly auditoriaService;
    constructor(auditoriaService: AuditoriaService);
    list(tipo?: TipoAuditoria | 'TODOS', page?: string, limit?: string): Promise<{
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
            atorPapel: import("../../generated/prisma/enums").PapelAuditoria | null;
            atorId: string | null;
            cpfHashPrefix: string | null;
            resumo: string;
            payload: import("@prisma/client/runtime/client").JsonValue;
            createdAt: Date;
        }[];
    }>;
}
