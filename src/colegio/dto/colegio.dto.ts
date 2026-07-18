import { IsBoolean, IsIn, IsOptional, IsUUID } from 'class-validator';

export class RegistrarSelecaoDto {
  @IsUUID()
  categoriaId!: string;

  @IsUUID()
  inscricaoStartupId!: string;

  @IsIn(['AVANCADA', 'REJEITADA', 'ABSTENCAO', 'EM_ANALISE'])
  status!: 'AVANCADA' | 'REJEITADA' | 'ABSTENCAO' | 'EM_ANALISE';

  @IsOptional()
  @IsBoolean()
  conflitoInteresse?: boolean;
}
