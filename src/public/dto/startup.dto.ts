import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateInscricaoStartupDto {
  @IsString()
  slug!: string;
}

export class Etapa1StartupDto {
  @IsString()
  @MinLength(2)
  responsavelNome!: string;

  @IsString()
  cpf!: string;

  @IsString()
  telefone!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(8)
  senha!: string;
}

export class Etapa2StartupDto {
  @IsString()
  @MinLength(2)
  nomeStartup!: string;

  @IsString()
  categoria!: string;

  @IsString()
  cidadeOperacao!: string;

  @IsOptional()
  @IsString()
  site?: string;

  @IsString()
  @MinLength(10)
  descricao!: string;
}

export class ConfirmarInscricaoDto {
  @IsBoolean()
  lgpdAceito!: boolean;

  @IsBoolean()
  cpfUnicoConfirmado!: boolean;

  @IsOptional()
  @IsString()
  @MinLength(6)
  senha?: string;
}
