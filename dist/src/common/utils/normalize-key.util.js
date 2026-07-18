"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeKey = normalizeKey;
function normalizeKey(key) {
    return key
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
}
//# sourceMappingURL=normalize-key.util.js.map