import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class ConvidarTestemunhaDto {
  @IsString()
  @MinLength(2)
  nome!: string;

  @IsEmail()
  email!: string;

  @IsOptional()
  @IsString()
  organizacao?: string;
}

export class ConfirmarTestemunhaDto {
  @IsOptional()
  @IsString()
  observacao?: string;
}
