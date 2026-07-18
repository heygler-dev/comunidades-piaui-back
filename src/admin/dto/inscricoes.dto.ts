import {
  IsBoolean,
  IsEmail,
  IsIn,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateManualInscricaoDto {
  @IsString()
  @MinLength(2)
  nome!: string;

  @IsIn(['lider', 'startup'])
  tipo!: 'lider' | 'startup';

  @IsOptional()
  @IsIn(['Ativo', 'Pendente'])
  status?: 'Ativo' | 'Pendente';

  @IsString()
  comunidade!: string;

  @IsOptional()
  @IsString()
  cidade?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  telefone?: string;
}

export class UpdateInscricaoDto {
  @IsOptional()
  @IsString()
  nome?: string;

  @IsIn(['lider', 'startup'])
  tipo!: 'lider' | 'startup';

  @IsOptional()
  @IsIn(['Ativo', 'Pendente'])
  status?: 'Ativo' | 'Pendente';

  @IsOptional()
  @IsString()
  comunidade?: string;

  @IsOptional()
  @IsString()
  cidade?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  telefone?: string;
}

export class DeleteInscricaoQueryDto {
  @IsIn(['lider', 'startup'])
  tipo!: 'lider' | 'startup';
}

export class ListInscricoesQueryDto {
  @IsOptional()
  @IsIn(['todos', 'lider', 'startup'])
  tipo?: 'todos' | 'lider' | 'startup';

  @IsOptional()
  @IsString()
  q?: string;

  @IsOptional()
  page?: number;

  @IsOptional()
  limit?: number;
}
