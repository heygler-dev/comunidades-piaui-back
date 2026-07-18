import { Module } from '@nestjs/common';
import { AuditoriaModule } from '../auditoria/auditoria.module';
import { AuthModule } from '../auth/auth.module';
import { IndicacoesController } from './indicacoes.controller';
import { IndicacoesService } from './indicacoes.service';

@Module({
  imports: [AuthModule, AuditoriaModule],
  controllers: [IndicacoesController],
  providers: [IndicacoesService],
})
export class IndicacoesModule {}
