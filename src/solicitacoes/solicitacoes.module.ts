import { Module } from '@nestjs/common';
import { EdicoesModule } from '../edicoes/edicoes.module';
import { PessoasModule } from '../pessoas/pessoas.module';
import { SolicitacoesService } from './solicitacoes.service';

@Module({
  imports: [EdicoesModule, PessoasModule],
  providers: [SolicitacoesService],
  exports: [SolicitacoesService],
})
export class SolicitacoesModule {}
