import { Module } from '@nestjs/common';
import { AuditoriaModule } from '../auditoria/auditoria.module';
import { AuthModule } from '../auth/auth.module';
import { InscricoesModule } from '../inscricoes/inscricoes.module';
import { PessoasModule } from '../pessoas/pessoas.module';
import { AdminAuditoriaController } from './admin-auditoria.controller';
import { AdminBackupController } from './admin-backup.controller';
import { AdminBackupService } from './admin-backup.service';
import { AdminComunidadesController } from './admin-comunidades.controller';
import { AdminEdicoesController } from './admin-edicoes.controller';
import { AdminInscricoesController } from './admin-inscricoes.controller';
import { ComunidadesService } from './comunidades.service';

@Module({
  imports: [AuthModule, InscricoesModule, PessoasModule, AuditoriaModule],
  controllers: [
    AdminInscricoesController,
    AdminComunidadesController,
    AdminEdicoesController,
    AdminAuditoriaController,
    AdminBackupController,
  ],
  providers: [ComunidadesService, AdminBackupService],
})
export class AdminModule {}
