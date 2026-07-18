import {
  IsArray,
  IsEmail,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';

export class NomearLiderDto {
  @IsString()
  @MinLength(2)
  nome!: string;

  @IsString()
  cpf!: string;

  @IsEmail()
  email!: string;

  @IsString()
  telefone!: string;

  @IsString()
  @MinLength(6)
  senha!: string;
}

export class ApontarColegioDto {
  @IsArray()
  @IsUUID('4', { each: true })
  liderIds!: string[];
}
