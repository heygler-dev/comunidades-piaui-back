import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { EdicoesService } from '../edicoes/edicoes.service';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthUser } from '../auth/jwt.strategy';
import {
  ClonarEdicaoDto,
  CreateCategoriaDto,
  CreateFinalistaDto,
  ToggleColegioDto,
  ToggleIndicacoesDto,
  ToggleVotacaoDto,
  UpdateEdicaoConfigDto,
} from './dto/edicoes.dto';

@Controller('api/v1/admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
export class AdminEdicoesController {
  constructor(private readonly edicoesService: EdicoesService) {}

  @Get('edicao')
  getEdicao() {
    return this.edicoesService.getConfig();
  }

  @Get('edicoes')
  listEdicoes() {
    return this.edicoesService.listEdicoes();
  }

  @Post('edicoes/clonar')
  clonar(@Body() dto: ClonarEdicaoDto, @Req() req: { user: AuthUser }) {
    return this.edicoesService.clonarConfigParaAtiva(
      dto.fonteEdicaoId,
      req.user.id,
    );
  }

  @Post('edicao/regulamento/publicar')
  publicarRegulamento(@Req() req: { user: AuthUser }) {
    return this.edicoesService.publicarRegulamento(req.user.id);
  }

  @Patch('edicoes/:id/config')
  updateConfig(
    @Param('id') id: string,
    @Body() dto: UpdateEdicaoConfigDto,
    @Req() req: { user: AuthUser },
  ) {
    return this.edicoesService.updateConfig(id, dto, req.user.id);
  }

  @Get('categorias')
  listCategorias() {
    return this.edicoesService.listCategorias();
  }

  @Post('categorias')
  createCategoria(@Body() dto: CreateCategoriaDto) {
    return this.edicoesService.createCategoria(dto);
  }

  @Get('finalistas')
  listFinalistas() {
    return this.edicoesService.listFinalistasAdmin();
  }

  @Post('finalistas')
  createFinalista(@Body() dto: CreateFinalistaDto) {
    return this.edicoesService.createFinalista(dto);
  }

  @Patch('edicoes/:id/votacao')
  toggleVotacao(@Param('id') id: string, @Body() dto: ToggleVotacaoDto) {
    return this.edicoesService.setVotacaoAberta(id, dto.aberta);
  }

  @Patch('edicoes/:id/indicacoes')
  toggleIndicacoes(@Param('id') id: string, @Body() dto: ToggleIndicacoesDto) {
    return this.edicoesService.setIndicacoesAbertas(id, dto.abertas);
  }

  @Patch('edicoes/:id/colegio')
  toggleColegio(@Param('id') id: string, @Body() dto: ToggleColegioDto) {
    return this.edicoesService.setColegioHabilitado(id, dto.habilitado);
  }
}
