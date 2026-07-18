import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { IsOptional, IsUUID } from 'class-validator';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthUser } from '../auth/jwt.strategy';
import { ApontarColegioDto, NomearLiderDto } from './dto/lider.dto';
import { LiderService } from './lider.service';
import { RejeitarSolicitacaoDto } from '../solicitacoes/dto/solicitacoes.dto';
import { SolicitacoesService } from '../solicitacoes/solicitacoes.service';
import { TipoSolicitacaoCadastro } from '../../generated/prisma/client';

class ComunidadeQuery {
  @IsOptional()
  @IsUUID()
  comunidadeId?: string;
}

@Controller('api/v1/lider')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('lider')
export class LiderController {
  constructor(
    private readonly liderService: LiderService,
    private readonly solicitacoesService: SolicitacoesService,
  ) {}

  @Get('me')
  me(@Req() req: { user: AuthUser }) {
    return this.liderService.me(req.user.pessoaId || req.user.id);
  }

  @Get('link')
  link(
    @Req() req: { user: AuthUser },
    @Query() query: ComunidadeQuery,
  ) {
    return this.liderService.getLink(
      req.user.pessoaId || req.user.id,
      query.comunidadeId,
    );
  }

  @Get('stats')
  stats(
    @Req() req: { user: AuthUser },
    @Query() query: ComunidadeQuery,
  ) {
    return this.liderService.stats(
      req.user.pessoaId || req.user.id,
      query.comunidadeId,
    );
  }

  @Get('inscricoes')
  inscricoes(
    @Req() req: { user: AuthUser },
    @Query() query: ComunidadeQuery,
  ) {
    return this.liderService.listInscricoes(
      req.user.pessoaId || req.user.id,
      query.comunidadeId,
    );
  }

  @Post('inscricoes/:id/aprovar')
  aprovarInscricao(
    @Req() req: { user: AuthUser },
    @Param('id') id: string,
    @Query() query: ComunidadeQuery,
  ) {
    return this.liderService.aprovarInscricao(
      req.user.pessoaId || req.user.id,
      id,
      query.comunidadeId,
    );
  }

  @Post('inscricoes/:id/rejeitar')
  rejeitarInscricao(
    @Req() req: { user: AuthUser },
    @Param('id') id: string,
    @Query() query: ComunidadeQuery,
  ) {
    return this.liderService.rejeitarInscricao(
      req.user.pessoaId || req.user.id,
      id,
      query.comunidadeId,
    );
  }

  @Get('lideres')
  listLideres(
    @Req() req: { user: AuthUser },
    @Query() query: ComunidadeQuery,
  ) {
    return this.liderService.listLideresComunidade(
      req.user.pessoaId || req.user.id,
      query.comunidadeId,
    );
  }

  @Post('lideres')
  nomear(
    @Req() req: { user: AuthUser },
    @Body() dto: NomearLiderDto,
    @Query() query: ComunidadeQuery,
  ) {
    return this.liderService.nomearLider(
      req.user.pessoaId || req.user.id,
      dto,
      query.comunidadeId,
    );
  }

  @Put('colegio')
  apontarColegio(
    @Req() req: { user: AuthUser },
    @Body() dto: ApontarColegioDto,
    @Query() query: ComunidadeQuery,
  ) {
    return this.liderService.apontarColegio(
      req.user.pessoaId || req.user.id,
      dto.liderIds,
      query.comunidadeId,
    );
  }

  @Get('solicitacoes')
  listSolicitacoes(
    @Req() req: { user: AuthUser },
    @Query() query: ComunidadeQuery & { tipo?: TipoSolicitacaoCadastro },
  ) {
    return this.solicitacoesService.listarParaLider(
      req.user.pessoaId || req.user.id,
      query.comunidadeId,
      query.tipo,
    );
  }

  @Post('solicitacoes/:id/aprovar')
  aprovarSolicitacao(
    @Req() req: { user: AuthUser },
    @Param('id') id: string,
    @Query() query: ComunidadeQuery,
  ) {
    return this.solicitacoesService.aprovar(
      req.user.pessoaId || req.user.id,
      id,
      query.comunidadeId,
    );
  }

  @Post('solicitacoes/:id/rejeitar')
  rejeitarSolicitacao(
    @Req() req: { user: AuthUser },
    @Param('id') id: string,
    @Body() dto: RejeitarSolicitacaoDto,
    @Query() query: ComunidadeQuery,
  ) {
    return this.solicitacoesService.rejeitar(
      req.user.pessoaId || req.user.id,
      id,
      dto,
      query.comunidadeId,
    );
  }
}
