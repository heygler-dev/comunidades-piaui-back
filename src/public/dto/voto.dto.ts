import {
  IsBoolean,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';

export class RegistrarVotoDto {
  @IsString()
  @MinLength(2)
  nome!: string;

  @IsString()
  cpf!: string;

  @IsString()
  categoria!: string;

  @IsUUID()
  finalistaId!: string;

  @IsBoolean()
  lgpdAceito!: boolean;
}
