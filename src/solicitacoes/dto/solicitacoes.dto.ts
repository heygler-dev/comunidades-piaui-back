import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';

export class SolicitarLiderDto {
  @IsUUID()
  comunidadeId!: string;

  @IsString()
  @MinLength(2)
  nome!: string;

  @IsString()
  cpf!: string;

  @IsString()
  telefone!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(8)
  senha!: string;

  @IsBoolean()
  lgpdAceito!: boolean;
}

export class SolicitarStartupDto {
  @IsUUID()
  comunidadeId!: string;

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

  @IsBoolean()
  lgpdAceito!: boolean;

  @IsBoolean()
  cpfUnicoConfirmado!: boolean;
}

export class RejeitarSolicitacaoDto {
  @IsOptional()
  @IsString()
  motivo?: string;
}
