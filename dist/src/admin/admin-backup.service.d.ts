import { EdicoesService } from '../edicoes/edicoes.service';
import { PrismaService } from '../prisma/prisma.service';
export declare class AdminBackupService {
    private readonly prisma;
    private readonly edicoesService;
    constructor(prisma: PrismaService, edicoesService: EdicoesService);
    private csvEscape;
    private toCsv;
    exportInscricoesCsv(): Promise<{
        filename: string;
        content: string;
        total: number;
    }>;
    exportVotosCsv(): Promise<{
        filename: string;
        content: string;
        total: number;
    }>;
}
