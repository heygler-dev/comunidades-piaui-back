import { Controller, Get, Header, Res, UseGuards } from '@nestjs/common';
import type { Response } from 'express';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminBackupService } from './admin-backup.service';

@Controller('api/v1/admin/backup')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
export class AdminBackupController {
  constructor(private readonly backupService: AdminBackupService) {}

  @Get('inscricoes.csv')
  @Header('Content-Type', 'text/csv; charset=utf-8')
  async inscricoes(@Res() res: Response) {
    const file = await this.backupService.exportInscricoesCsv();
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${file.filename}"`,
    );
    res.send(file.content);
  }

  @Get('votos.csv')
  @Header('Content-Type', 'text/csv; charset=utf-8')
  async votos(@Res() res: Response) {
    const file = await this.backupService.exportVotosCsv();
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${file.filename}"`,
    );
    res.send(file.content);
  }
}
