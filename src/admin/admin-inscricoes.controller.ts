import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { InscricoesService } from '../inscricoes/inscricoes.service';
import {
  CreateManualInscricaoDto,
  DeleteInscricaoQueryDto,
  ListInscricoesQueryDto,
  UpdateInscricaoDto,
} from './dto/inscricoes.dto';

@Controller('api/v1/admin/inscricoes')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
export class AdminInscricoesController {
  constructor(private readonly inscricoesService: InscricoesService) {}

  @Get('stats')
  stats() {
    return this.inscricoesService.stats();
  }

  @Get()
  list(@Query() query: ListInscricoesQueryDto) {
    return this.inscricoesService.listAdmin({
      tipo: query.tipo,
      q: query.q,
      page: query.page ? Number(query.page) : 1,
      limit: query.limit ? Number(query.limit) : 50,
    });
  }

  @Post()
  create(@Body() dto: CreateManualInscricaoDto) {
    return this.inscricoesService.createManual(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateInscricaoDto) {
    return this.inscricoesService.updateAdmin(id, dto.tipo, dto);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
    @Query() query: DeleteInscricaoQueryDto,
  ) {
    return this.inscricoesService.deleteAdmin(id, query.tipo);
  }

  @Post('import/startups/provisionar-acesso')
  provisionarAcessoImportados() {
    return this.inscricoesService.backfillAcessoImportados();
  }

  @Post('import/startups')
  @UseInterceptors(FileInterceptor('arquivo'))
  importStartups(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: { user: { id: string } },
  ) {
    return this.inscricoesService.importStartupsSpreadsheet(file, req.user.id);
  }

  @Get('import/startups/colunas')
  importStartupsColumns() {
    return this.inscricoesService.getStartupImportColumns();
  }

  @Post('import')
  @UseInterceptors(FileInterceptor('arquivo'))
  import(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: { user: { id: string } },
  ) {
    return this.inscricoesService.importSpreadsheet(file, req.user.id);
  }
}
