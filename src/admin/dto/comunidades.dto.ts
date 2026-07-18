import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

function toOptionalBoolean(value: unknown): boolean | undefined {
  if (value === undefined || value === null || value === '') return undefined;
  if (typeof value === 'boolean') return value;
  const s = String(value).trim().toLowerCase();
  if (['true', '1', 's', 'sim', 'yes'].includes(s)) return true;
  if (['false', '0', 'n', 'nao', 'não', 'no'].includes(s)) return false;
  return Boolean(value);
}

export class CreateComunidadeDto {
  @IsString()
  @MinLength(2)
  nome!: string;

  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @Transform(({ value }) => toOptionalBoolean(value))
  @IsBoolean()
  institucional?: boolean;

  /** Cidade sede */
  @IsString()
  @MinLength(2)
  cidade!: string;

  @IsOptional()
  @IsString()
  estado?: string;

  /** Cidades de atuação no PI (texto livre) */
  @IsOptional()
  @IsString()
  cidadesAtuacao?: string;

  /** Preenchido pelo controller após upload; não enviar pelo cliente */
  @IsOptional()
  @IsString()
  logoUrl?: string;
}

export class CreateConviteLiderDto {
  @IsString()
  comunidadeId!: string;
}

/** Cadastro manual do líder-semente após criar a comunidade */
export class CreateLiderSementeDto {
  @IsString()
  comunidadeId!: string;

  @IsString()
  @MinLength(2)
  nome!: string;

  @IsString()
  cpf!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(8)
  telefone!: string;

  @IsString()
  @MinLength(8)
  senha!: string;
}
