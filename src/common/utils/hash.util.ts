import { createHash } from 'crypto';

export function hashCpf(cpf: string): string {
  return createHash('sha256').update(cpf).digest('hex');
}
