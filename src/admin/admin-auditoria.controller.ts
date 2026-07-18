import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { TipoAuditoria } from '../../generated/prisma/client';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuditoriaService } from '../auditoria/auditoria.service';

@Controller('api/v1/admin/auditoria')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
export class AdminAuditoriaController {
  constructor(private readonly auditoriaService: AuditoriaService) {}

  @Get()
  list(
    @Query('tipo') tipo?: TipoAuditoria | 'TODOS',
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    return this.auditoriaService.listAdmin({
      tipo,
      page: page ? Number(page) : undefined,
      limit: limit ? Number(limit) : undefined,
    });
  }
}
