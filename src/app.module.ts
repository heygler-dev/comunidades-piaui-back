import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './admin/admin.module';
import { ApuracaoModule } from './apuracao/apuracao.module';
import { AuditoriaModule } from './auditoria/auditoria.module';
import { AuthModule } from './auth/auth.module';
import { ColegioModule } from './colegio/colegio.module';
import { EdicoesModule } from './edicoes/edicoes.module';
import { EmpreendedorModule } from './empreendedor/empreendedor.module';
import { IndicacoesModule } from './indicacoes/indicacoes.module';
import { InscricoesModule } from './inscricoes/inscricoes.module';
import { LiderModule } from './lider/lider.module';
import { PessoasModule } from './pessoas/pessoas.module';
import { PrismaModule } from './prisma/prisma.module';
import { PublicModule } from './public/public.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    PessoasModule,
    AuditoriaModule,
    EdicoesModule,
    InscricoesModule,
    AuthModule,
    AdminModule,
    PublicModule,
    LiderModule,
    EmpreendedorModule,
    IndicacoesModule,
    ColegioModule,
    ApuracaoModule,
  ],
})
export class AppModule {}
