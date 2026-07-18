import { IsIn } from 'class-validator';

export class SwitchPapelDto {
  @IsIn(['lider', 'empreendedor'])
  papel!: 'lider' | 'empreendedor';
}
