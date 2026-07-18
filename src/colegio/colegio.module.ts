import { Module } from '@nestjs/common';
import { AuditoriaModule } from '../auditoria/auditoria.module';
import { AuthModule } from '../auth/auth.module';
import { ColegioController } from './colegio.controller';
import { ColegioService } from './colegio.service';

@Module({
  imports: [AuthModule, AuditoriaModule],
  controllers: [ColegioController],
  providers: [ColegioService],
})
export class ColegioModule {}
