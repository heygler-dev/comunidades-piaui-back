import { Module } from '@nestjs/common';
import { PessoasModule } from '../pessoas/pessoas.module';
import { InscricoesService } from './inscricoes.service';

@Module({
  imports: [PessoasModule],
  providers: [InscricoesService],
  exports: [InscricoesService],
})
export class InscricoesModule {}
