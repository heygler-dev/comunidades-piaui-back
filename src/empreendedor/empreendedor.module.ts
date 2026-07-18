import { Module } from '@nestjs/common';
import { AuditoriaModule } from '../auditoria/auditoria.module';
import { AuthModule } from '../auth/auth.module';
import { PessoasModule } from '../pessoas/pessoas.module';
import { EmpreendedorController } from './empreendedor.controller';
import { EmpreendedorService } from './empreendedor.service';

@Module({
  imports: [AuthModule, AuditoriaModule, PessoasModule],
  controllers: [EmpreendedorController],
  providers: [EmpreendedorService],
})
export class EmpreendedorModule {}
