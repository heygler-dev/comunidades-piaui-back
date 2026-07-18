/** Converte YYYY-MM-DD para início do dia (UTC). */
export function parseDateOnlyStart(value?: string | null): Date | null | undefined {
  if (value === undefined) return undefined;
  if (!value) return null;
  const [y, m, d] = value.split('-').map(Number);
  if (!y || !m || !d) return null;
  return new Date(Date.UTC(y, m - 1, d, 0, 0, 0, 0));
}

/** Converte YYYY-MM-DD para fim do dia (UTC). */
export function parseDateOnlyEnd(value?: string | null): Date | null | undefined {
  if (value === undefined) return undefined;
  if (!value) return null;
  const [y, m, d] = value.split('-').map(Number);
  if (!y || !m || !d) return null;
  return new Date(Date.UTC(y, m - 1, d, 23, 59, 59, 999));
}

export function formatDateOnlyBR(date: Date | null | undefined): string {
  if (!date) return '';
  return date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
}

export function toDateInputValue(date: Date | null | undefined): string {
  if (!date) return '';
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const d = String(date.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function isWithinIndicacoesPeriodo(edicao: {
  indicacoesInicio: Date | null;
  indicacoesFim: Date | null;
}): boolean {
  const now = new Date();
  if (edicao.indicacoesInicio && now < edicao.indicacoesInicio) return false;
  if (edicao.indicacoesFim && now > edicao.indicacoesFim) return false;
  return true;
}

export function indicacoesPermitidas(edicao: {
  indicacoesAbertas: boolean;
  indicacoesInicio: Date | null;
  indicacoesFim: Date | null;
}): boolean {
  if (!edicao.indicacoesAbertas) return false;
  return isWithinIndicacoesPeriodo(edicao);
}

export function mensagemIndicacoesFechadas(edicao: {
  indicacoesAbertas: boolean;
  indicacoesInicio: Date | null;
  indicacoesFim: Date | null;
}): string {
  if (!edicao.indicacoesAbertas) {
    return 'A janela de indicações está fechada.';
  }
  const now = new Date();
  if (edicao.indicacoesInicio && now < edicao.indicacoesInicio) {
    return `As indicações abrem em ${formatDateOnlyBR(edicao.indicacoesInicio)}.`;
  }
  if (edicao.indicacoesFim && now > edicao.indicacoesFim) {
    return `O período de indicações encerrou em ${formatDateOnlyBR(edicao.indicacoesFim)}.`;
  }
  return 'A janela de indicações está fechada.';
}
