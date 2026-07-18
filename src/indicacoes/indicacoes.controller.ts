import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthUser } from '../auth/jwt.strategy';
import {
  BuscarStartupsQueryDto,
  CreateIndicacaoDto,
} from './dto/indicacoes.dto';
import { IndicacoesService } from './indicacoes.service';

@Controller('api/v1/indicacoes')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('lider', 'empreendedor')
export class IndicacoesController {
  constructor(private readonly indicacoesService: IndicacoesService) {}

  @Get('startups')
  buscar(@Query() query: BuscarStartupsQueryDto) {
    return this.indicacoesService.buscar(query);
  }

  @Get('minhas')
  minhas(@Req() req: { user: AuthUser }) {
    return this.indicacoesService.minhas(req.user);
  }

  @Post()
  criar(@Req() req: { user: AuthUser }, @Body() dto: CreateIndicacaoDto) {
    return this.indicacoesService.criar(req.user, dto);
  }
}
