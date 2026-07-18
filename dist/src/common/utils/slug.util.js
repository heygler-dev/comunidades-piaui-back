"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugify = slugify;
exports.randomSuffix = randomSuffix;
function slugify(text) {
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}
function randomSuffix(length = 4) {
    return Math.random()
        .toString(36)
        .slice(2, 2 + length);
}
//# sourceMappingURL=slug.util.js.map