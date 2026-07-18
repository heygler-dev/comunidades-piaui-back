import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { randomSuffix } from '../common/utils/slug.util';
import { ComunidadesService } from './comunidades.service';
import {
  CreateComunidadeDto,
  CreateConviteLiderDto,
  CreateLiderSementeDto,
} from './dto/comunidades.dto';

const LOGO_DIR = join(process.cwd(), 'uploads', 'comunidades');
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

@Controller('api/v1/admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
export class AdminComunidadesController {
  constructor(private readonly comunidadesService: ComunidadesService) {}

  @Get('comunidades')
  list() {
    return this.comunidadesService.list();
  }

  @Post('comunidades')
  @UseInterceptors(
    FileInterceptor('logo', {
      storage: diskStorage({
        destination: (_req, _file, cb) => {
          ensureLogoDir();
          cb(null, LOGO_DIR);
        },
        filename: (_req, file, cb) => {
          const ext = extname(file.originalname).toLowerCase() || '.png';
          cb(null, `comunidade-${Date.now()}-${randomSuffix()}${ext}`);
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
  create(
    @Body() dto: CreateComunidadeDto,
    @UploadedFile() logo: Express.Multer.File | undefined,
    @Req() req: { user: { id: string } },
  ) {
    if (logo) {
      dto.logoUrl = `/uploads/comunidades/${logo.filename}`;
    }
    return this.comunidadesService.create(dto, req.user.id);
  }

  @Post('comunidades/lider-semente')
  createLiderSemente(@Body() dto: CreateLiderSementeDto) {
    return this.comunidadesService.createLiderSemente(dto);
  }

  @Post('convites/lider')
  createConvite(
    @Body() dto: CreateConviteLiderDto,
    @Req() req: { user: { id: string } },
  ) {
    return this.comunidadesService.createConviteLider(
      dto.comunidadeId,
      req.user.id,
    );
  }
}
