import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Transform } from 'class-transformer';
import { IsOptional, IsUUID } from 'class-validator';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthUser } from '../auth/jwt.strategy';
import { RegistrarSelecaoDto } from './dto/colegio.dto';
import { ColegioService } from './colegio.service';

class ListIndicadasQuery {
  @IsOptional()
  @Transform(({ value }) => (value === '' || value == null ? undefined : value))
  @IsUUID()
  categoriaId?: string;
}

@Controller('api/v1/colegio')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('lider')
export class ColegioController {
  constructor(private readonly colegioService: ColegioService) {}

  @Get('indicadas')
  indicadas(
    @Req() req: { user: AuthUser },
    @Query() query: ListIndicadasQuery,
  ) {
    return this.colegioService.listIndicadas(req.user.id, query.categoriaId);
  }

  @Get('selecoes')
  selecoes(@Req() req: { user: AuthUser }) {
    return this.colegioService.minhasSelecoes(req.user.id);
  }

  @Post('selecoes')
  registrar(
    @Req() req: { user: AuthUser },
    @Body() dto: RegistrarSelecaoDto,
  ) {
    return this.colegioService.registrarSelecao(req.user.id, dto);
  }
}
