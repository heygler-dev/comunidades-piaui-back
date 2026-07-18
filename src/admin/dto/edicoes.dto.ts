import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Min,
  MinLength,
  ValidateIf,
} from 'class-validator';
import { FasePremio } from '../../../generated/prisma/client';

export class ToggleVotacaoDto {
  @IsBoolean()
  aberta!: boolean;
}

export class ToggleIndicacoesDto {
  @IsBoolean()
  abertas!: boolean;
}

export class ToggleColegioDto {
  @IsBoolean()
  habilitado!: boolean;
}

export class UpdateEdicaoConfigDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  xLideresColegio?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  nFinalistasPorCategoria?: number;

  @IsOptional()
  @IsBoolean()
  cotasRegionaisAtivas?: boolean;

  @IsOptional()
  @IsInt()
  @Min(0)
  cotaMinCapital?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  cotaMinInterior?: number;

  @IsOptional()
  @IsString()
  cidadesCapital?: string;

  @IsOptional()
  @IsString()
  criteriosMd?: string | null;

  @IsOptional()
  @IsEnum(FasePremio)
  faseAtual?: FasePremio;

  @IsOptional()
  @ValidateIf((_, v) => v !== null)
  @IsDateString()
  indicacoesInicio?: string | null;

  @IsOptional()
  @ValidateIf((_, v) => v !== null)
  @IsDateString()
  indicacoesFim?: string | null;
}

export class ClonarEdicaoDto {
  @IsUUID()
  fonteEdicaoId!: string;
}

export class CreateCategoriaDto {
  @IsString()
  @MinLength(2)
  nome!: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  ordem?: number;
}

export class CreateFinalistaDto {
  @IsUUID()
  inscricaoStartupId!: string;

  @IsString()
  @MinLength(2)
  categoria!: string;

  @IsOptional()
  @IsString()
  metaResumo?: string;
}
