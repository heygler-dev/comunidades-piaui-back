import { IsBoolean, IsString, IsUUID } from 'class-validator';

/** Voto autenticado: CPF e nome vêm da sessão (pessoa logada). */
export class RegistrarVotoAutenticadoDto {
  @IsString()
  categoria!: string;

  @IsUUID()
  finalistaId!: string;

  @IsBoolean()
  lgpdAceito!: boolean;
}
