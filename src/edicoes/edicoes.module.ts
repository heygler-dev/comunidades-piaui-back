import { Global, Module } from '@nestjs/common';
import { AuditoriaModule } from '../auditoria/auditoria.module';
import { EdicoesService } from './edicoes.service';

@Global()
@Module({
  imports: [AuditoriaModule],
  providers: [EdicoesService],
  exports: [EdicoesService],
})
export class EdicoesModule {}
