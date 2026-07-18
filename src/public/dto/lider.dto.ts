import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class AtivarLiderDto {
  @IsString()
  token!: string;

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
