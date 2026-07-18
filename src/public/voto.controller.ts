import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthUser } from '../auth/jwt.strategy';
import { RegistrarVotoAutenticadoDto } from './dto/voto-auth.dto';
import { PublicVotoService } from './public.service';

@Controller('api/v1/voto')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('lider', 'empreendedor')
export class VotoController {
  constructor(private readonly votoService: PublicVotoService) {}

  @Post()
  votar(
    @Req() req: { user: AuthUser },
    @Body() dto: RegistrarVotoAutenticadoDto,
  ) {
    return this.votoService.registrarVotoAutenticado(
      {
        id: req.user.id,
        role: req.user.role as 'lider' | 'empreendedor',
        pessoaId: req.user.pessoaId,
      },
      dto,
    );
  }
}
