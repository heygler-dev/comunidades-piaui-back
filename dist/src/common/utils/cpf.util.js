"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeCpf = normalizeCpf;
exports.formatCpf = formatCpf;
exports.isValidCpf = isValidCpf;
function normalizeCpf(cpf) {
    return cpf.replace(/\D/g, '');
}
function formatCpf(cpf) {
    const digits = normalizeCpf(cpf);
    if (digits.length !== 11)
        return cpf;
    return digits.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}
function isValidCpf(cpf) {
    const digits = normalizeCpf(cpf);
    if (digits.length !== 11 || /^(\d)\1{10}$/.test(digits))
        return false;
    let sum = 0;
    for (let i = 0; i < 9; i++)
        sum += parseInt(digits[i], 10) * (10 - i);
    let d1 = (sum * 10) % 11;
    if (d1 === 10)
        d1 = 0;
    if (d1 !== parseInt(digits[9], 10))
        return false;
    sum = 0;
    for (let i = 0; i < 10; i++)
        sum += parseInt(digits[i], 10) * (11 - i);
    let d2 = (sum * 10) % 11;
    if (d2 === 10)
        d2 = 0;
    return d2 === parseInt(digits[10], 10);
}
//# sourceMappingURL=cpf.util.js.map