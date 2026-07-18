import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { PessoasModule } from '../pessoas/pessoas.module';
import { SolicitacoesModule } from '../solicitacoes/solicitacoes.module';
import { LiderController } from './lider.controller';
import { LiderService } from './lider.service';

@Module({
  imports: [AuthModule, PessoasModule, SolicitacoesModule],
  controllers: [LiderController],
  providers: [LiderService],
  exports: [LiderService],
})
export class LiderModule {}
