import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class CreateIndicacaoDto {
  @IsUUID()
  inscricaoStartupId!: string;

  @IsUUID()
  categoriaId!: string;

  @IsOptional()
  @IsString()
  @MinLength(5)
  justificativa?: string;

  /** Quando o CPF tem mais de uma startup, define qual está indicando. */
  @IsOptional()
  @IsUUID()
  indicanteInscricaoId?: string;
}

export class BuscarStartupsQueryDto {
  @IsOptional()
  @IsString()
  q?: string;

  @IsOptional()
  @IsUUID()
  categoriaId?: string;

  @IsOptional()
  @IsUUID()
  comunidadeId?: string;
}
