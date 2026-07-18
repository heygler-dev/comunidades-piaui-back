import { IsEmail, IsIn, IsOptional, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(6)
  senha!: string;

  @IsOptional()
  @IsIn(['admin', 'lider', 'empreendedor'])
  papel?: 'admin' | 'lider' | 'empreendedor';
}
