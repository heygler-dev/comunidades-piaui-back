import { Module } from '@nestjs/common';
import { ApuracaoModule } from '../apuracao/apuracao.module';
import { AuditoriaModule } from '../auditoria/auditoria.module';
import { AuthModule } from '../auth/auth.module';
import { PessoasModule } from '../pessoas/pessoas.module';
import { SolicitacoesModule } from '../solicitacoes/solicitacoes.module';
import { PublicController } from './public.controller';
import {
  PublicConvitesService,
  PublicStartupService,
  PublicVotoService,
} from './public.service';
import { VotoController } from './voto.controller';

@Module({
  imports: [
    AuthModule,
    AuditoriaModule,
    ApuracaoModule,
    PessoasModule,
    SolicitacoesModule,
  ],
  controllers: [PublicController, VotoController],
  providers: [PublicConvitesService, PublicStartupService, PublicVotoService],
})
export class PublicModule {}
