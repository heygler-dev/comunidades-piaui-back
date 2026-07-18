import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthUser } from '../auth/jwt.strategy';
import { ApuracaoService } from './apuracao.service';
import { ConvidarTestemunhaDto } from './dto/testemunha.dto';

@Controller('api/v1/admin/apuracao')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
export class ApuracaoAdminController {
  constructor(private readonly apuracaoService: ApuracaoService) {}

  @Get('anomalias')
  anomalias() {
    return this.apuracaoService.anomalias();
  }

  @Get('colegio/quorum')
  quorum() {
    return this.apuracaoService.quorumColegio();
  }

  @Post('colegio/promover-finalistas')
  promover() {
    return this.apuracaoService.promoverFinalistasDoColegio();
  }

  @Post('publicar')
  publicar(@Req() req: { user: AuthUser }) {
    return this.apuracaoService.publicarResultados(req.user.id);
  }

  @Get('ranking')
  ranking() {
    return this.apuracaoService.rankingMaisVotadas(10);
  }

  @Get('testemunhas')
  testemunhas() {
    return this.apuracaoService.listTestemunhasAdmin();
  }

  @Post('testemunhas')
  convidarTestemunha(@Body() dto: ConvidarTestemunhaDto) {
    return this.apuracaoService.convidarTestemunha(dto);
  }
}
