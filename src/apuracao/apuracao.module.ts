import { Module } from '@nestjs/common';
import { AuditoriaModule } from '../auditoria/auditoria.module';
import { AuthModule } from '../auth/auth.module';
import { ApuracaoAdminController } from './apuracao-admin.controller';
import { ApuracaoService } from './apuracao.service';

@Module({
  imports: [AuthModule, AuditoriaModule],
  controllers: [ApuracaoAdminController],
  providers: [ApuracaoService],
  exports: [ApuracaoService],
})
export class ApuracaoModule {}
