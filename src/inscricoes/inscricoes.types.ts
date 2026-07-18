import {
  OrigemCadastro,
  StatusInscricaoStartup,
  StatusParticipante,
  TipoConvite,
} from '../../generated/prisma/client';

export type TipoInscricaoAdmin = 'lider' | 'startup' | 'todos';

export interface InscricaoAdminItem {
  id: string;
  nome: string;
  tipo: 'lider' | 'startup';
  comunidade: string;
  cidade: string;
  email: string;
  telefone: string;
  inscritoEm: Date;
  status: string;
  origem?: string;
}

export interface InscricaoAdminStats {
  total: number;
  lideres: number;
  startups: number;
  percentualLideres: number;
  percentualStartups: number;
  comunidadesAtivas: number;
  fase: string;
  periodoLabel: string;
}

export { OrigemCadastro, StatusInscricaoStartup, StatusParticipante, TipoConvite };
