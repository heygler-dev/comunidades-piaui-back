/** Normaliza site para comparação e path público (sem protocolo). */
export function normalizeSiteKey(site: string): string {
  return site
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//i, '')
    .replace(/\/.*$/, '')
    .replace(/\/+$/, '');
}

/** Path público da LP: prioriza o site cadastrado, senão o slug. */
export function publicPathForStartup(
  site: string | null | undefined,
  slugPublico: string | null | undefined,
): string {
  const siteKey = site?.trim() ? normalizeSiteKey(site) : '';
  const slug = slugPublico?.trim() || '';
  const key = siteKey || slug;
  if (!key) return '';
  return `/startup.html?slug=${encodeURIComponent(key)}`;
}
