"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeSiteKey = normalizeSiteKey;
exports.publicPathForStartup = publicPathForStartup;
function normalizeSiteKey(site) {
    return site
        .trim()
        .toLowerCase()
        .replace(/^https?:\/\//i, '')
        .replace(/\/.*$/, '')
        .replace(/\/+$/, '');
}
function publicPathForStartup(site, slugPublico) {
    const siteKey = site?.trim() ? normalizeSiteKey(site) : '';
    const slug = slugPublico?.trim() || '';
    const key = siteKey || slug;
    if (!key)
        return '';
    return `/startup.html?slug=${encodeURIComponent(key)}`;
}
//# sourceMappingURL=startup-url.util.js.map