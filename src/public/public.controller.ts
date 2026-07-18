import { Body, Controller, Get, Param, Patch, Post, Query, UnauthorizedException } from '@nestjs/common';
import { ApuracaoService } from '../apuracao/apuracao.service';
import { ConfirmarTestemunhaDto } from '../apuracao/dto/testemunha.dto';
import { EdicoesService } from '../edicoes/edicoes.service';
import {
  SolicitarLiderDto,
  SolicitarStartupDto,
} from '../solicitacoes/dto/solicitacoes.dto';
import { SolicitacoesService } from '../solicitacoes/solicitacoes.service';
import { AtivarLiderDto } from './dto/lider.dto';
import {
  ConfirmarInscricaoDto,
  CreateInscricaoStartupDto,
  Etapa1StartupDto,
  Etapa2StartupDto,
} from './dto/startup.dto';
import {
  PublicConvitesService,
  PublicStartupService,
  PublicVotoService,
} from './public.service';

@Controller('api/v1/public')
export class PublicController {
  constructor(
    private readonly convitesService: PublicConvitesService,
    private readonly startupService: PublicStartupService,
    private readonly votoService: PublicVotoService,
    private readonly apuracaoService: ApuracaoService,
    private readonly solicitacoesService: SolicitacoesService,
    private readonly edicoesService: EdicoesService,
  ) {}

  @Get('convites/:token')
  getConvite(@Param('token') token: string) {
    return this.convitesService.getConviteLider(token);
  }

  @Get('inscrever/:slug')
  getLinkInscricao(@Param('slug') slug: string) {
    return this.convitesService.getLinkInscricao(slug);
  }

  @Post('lideres/ativar')
  ativarLider(@Body() dto: AtivarLiderDto) {
    return this.convitesService.ativarLider(dto);
  }

  @Post('solicitacoes/lider')
  solicitarLider(@Body() dto: SolicitarLiderDto) {
    return this.solicitacoesService.solicitarLider(dto);
  }

  @Post('solicitacoes/startup')
  solicitarStartup(@Body() dto: SolicitarStartupDto) {
    return this.solicitacoesService.solicitarStartup(dto);
  }

  @Post('inscricoes')
  createInscricao(@Body() dto: CreateInscricaoStartupDto) {
    return this.startupService.createDraft(dto.slug);
  }

  @Get('inscricoes/:id')
  getInscricao(@Param('id') id: string) {
    return this.startupService.getInscricao(id);
  }

  @Patch('inscricoes/:id/etapa/1')
  etapa1(@Param('id') id: string, @Body() dto: Etapa1StartupDto) {
    return this.startupService.saveEtapa1(id, dto);
  }

  @Patch('inscricoes/:id/etapa/2')
  etapa2(@Param('id') id: string, @Body() dto: Etapa2StartupDto) {
    return this.startupService.saveEtapa2(id, dto);
  }

  @Post('inscricoes/:id/confirmar')
  confirmar(@Param('id') id: string, @Body() dto: ConfirmarInscricaoDto) {
    return this.startupService.confirmar(id, dto);
  }

  @Get('startups/:slug')
  landingPage(@Param('slug') slug: string) {
    return this.startupService.getLandingPage(slug);
  }

  @Get('comunidades')
  listComunidades() {
    return this.startupService.listComunidadesPublicas();
  }

  @Get('voto/status')
  statusVotacao() {
    return this.votoService.statusVotacao();
  }

  @Get('voto/categorias')
  categorias() {
    return this.votoService.listCategorias();
  }

  @Get('voto/finalistas')
  finalistas(@Query('categoria') categoria: string) {
    return this.votoService.listFinalistas(categoria);
  }

  @Get('voto/total')
  totalVotos() {
    return this.votoService.totalVotos();
  }

  @Post('voto')
  votarAnonimo() {
    throw new UnauthorizedException(
      'Para votar, entre com a conta de líder comunitário ou empreendedor cadastrado.',
    );
  }

  @Get('edicao/status')
  edicaoStatus() {
    return this.edicoesService.getStatusPublico();
  }

  @Get('resultados')
  resultados() {
    return this.apuracaoService.listResultadosPublicos();
  }

  @Get('ata')
  ata() {
    return this.apuracaoService.getAtaPublica();
  }

  @Get('galeria')
  galeria() {
    return this.apuracaoService.galeriaVencedores();
  }

  @Get('regras')
  regras(@Query('versao') versao?: string) {
    return this.edicoesService.getRegrasPublicas(
      versao ? Number(versao) : undefined,
    );
  }

  @Get('testemunhas/:token')
  getConviteTestemunha(@Param('token') token: string) {
    return this.apuracaoService.getConviteTestemunha(token);
  }

  @Post('testemunhas/:token/confirmar')
  confirmarTestemunha(
    @Param('token') token: string,
    @Body() dto: ConfirmarTestemunhaDto = {},
  ) {
    return this.apuracaoService.confirmarTestemunha(token, dto);
  }
}
