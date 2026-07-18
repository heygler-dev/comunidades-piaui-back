import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Put,
  Query,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { existsSync, mkdirSync } from 'fs';
import { extname, join } from 'path';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthUser } from '../auth/jwt.strategy';
import { randomSuffix } from '../common/utils/slug.util';
import {
  DefinirSenhaDto,
  SetBadgesDto,
  UpdateInscricaoEmpreendedorDto,
} from './dto/empreendedor.dto';
import { EmpreendedorService } from './empreendedor.service';

const LOGO_DIR = join(process.cwd(), 'uploads', 'startups');
const LOGO_MIME = new Set([
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/svg+xml',
]);

function ensureLogoDir() {
  if (!existsSync(LOGO_DIR)) {
    mkdirSync(LOGO_DIR, { recursive: true });
  }
}

@Controller('api/v1/empreendedor')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('empreendedor')
export class EmpreendedorController {
  constructor(private readonly empreendedorService: EmpreendedorService) {}

  @Get('me')
  me(
    @Req() req: { user: AuthUser },
    @Query('inscricaoId') inscricaoId?: string,
  ) {
    return this.empreendedorService.me(req.user.id, inscricaoId);
  }

  @Patch('inscricao')
  update(
    @Req() req: { user: AuthUser },
    @Body() dto: UpdateInscricaoEmpreendedorDto,
    @Query('inscricaoId') inscricaoId?: string,
  ) {
    return this.empreendedorService.update(req.user.id, dto, inscricaoId);
  }

  @Post('logo')
  @UseInterceptors(
    FileInterceptor('logo', {
      storage: diskStorage({
        destination: (_req, _file, cb) => {
          ensureLogoDir();
          cb(null, LOGO_DIR);
        },
        filename: (_req, file, cb) => {
          const ext = extname(file.originalname).toLowerCase() || '.png';
          cb(null, `startup-${Date.now()}-${randomSuffix()}${ext}`);
        },
      }),
      limits: { fileSize: 2 * 1024 * 1024 },
      fileFilter: (_req, file, cb) => {
        if (!LOGO_MIME.has(file.mimetype)) {
          cb(
            new BadRequestException(
              'Logo inválida. Envie PNG, JPG, WEBP, GIF ou SVG (máx. 2 MB).',
            ) as unknown as Error,
            false,
          );
          return;
        }
        cb(null, true);
      },
    }),
  )
  uploadLogo(
    @Req() req: { user: AuthUser },
    @UploadedFile() logo: Express.Multer.File | undefined,
    @Query('inscricaoId') inscricaoId?: string,
  ) {
    if (!logo) {
      throw new BadRequestException('Envie um arquivo de logo.');
    }
    return this.empreendedorService.updateLogo(
      req.user.id,
      `/uploads/startups/${logo.filename}`,
      inscricaoId,
    );
  }

  @Put('badges')
  badges(
    @Req() req: { user: AuthUser },
    @Body() dto: SetBadgesDto,
    @Query('inscricaoId') inscricaoId?: string,
  ) {
    return this.empreendedorService.setBadges(req.user.id, dto, inscricaoId);
  }

  @Put('senha')
  senha(
    @Req() req: { user: AuthUser },
    @Body() dto: DefinirSenhaDto,
    @Query('inscricaoId') inscricaoId?: string,
  ) {
    return this.empreendedorService.definirSenha(req.user.id, dto, inscricaoId);
  }
}
