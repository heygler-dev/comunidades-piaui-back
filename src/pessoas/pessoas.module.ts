import { Module } from '@nestjs/common';
import { PessoasService } from './pessoas.service';

@Module({
  providers: [PessoasService],
  exports: [PessoasService],
})
export class PessoasModule {}
