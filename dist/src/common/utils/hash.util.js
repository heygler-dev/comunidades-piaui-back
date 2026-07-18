"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashCpf = hashCpf;
const crypto_1 = require("crypto");
function hashCpf(cpf) {
    return (0, crypto_1.createHash)('sha256').update(cpf).digest('hex');
}
//# sourceMappingURL=hash.util.js.map