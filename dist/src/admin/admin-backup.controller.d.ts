import type { Response } from 'express';
import { AdminBackupService } from './admin-backup.service';
export declare class AdminBackupController {
    private readonly backupService;
    constructor(backupService: AdminBackupService);
    inscricoes(res: Response): Promise<void>;
    votos(res: Response): Promise<void>;
}
