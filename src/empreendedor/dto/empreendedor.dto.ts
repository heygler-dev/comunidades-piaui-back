import {
  IsArray,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';

export class UpdateInscricaoEmpreendedorDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  nomeStartup?: string;

  @IsOptional()
  @IsString()
  categoria?: string;

  @IsOptional()
  @IsString()
  cidadeOperacao?: string;

  @IsOptional()
  @IsString()
  site?: string;

  @IsOptional()
  @IsString()
  @MinLength(10)
  descricao?: string;

  @IsOptional()
  @IsString()
  logoUrl?: string;

  @IsOptional()
  @IsString()
  pitchCurto?: string;

  @IsOptional()
  @IsString()
  videoUrl?: string;
}

export class SetBadgesDto {
  @IsArray()
  @IsUUID('4', { each: true })
  comunidadeIds!: string[];
}

export class DefinirSenhaDto {
  @IsString()
  @MinLength(6)
  senha!: string;
}
