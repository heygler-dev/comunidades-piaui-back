"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDateOnlyStart = parseDateOnlyStart;
exports.parseDateOnlyEnd = parseDateOnlyEnd;
exports.formatDateOnlyBR = formatDateOnlyBR;
exports.toDateInputValue = toDateInputValue;
exports.isWithinIndicacoesPeriodo = isWithinIndicacoesPeriodo;
exports.indicacoesPermitidas = indicacoesPermitidas;
exports.mensagemIndicacoesFechadas = mensagemIndicacoesFechadas;
function parseDateOnlyStart(value) {
    if (value === undefined)
        return undefined;
    if (!value)
        return null;
    const [y, m, d] = value.split('-').map(Number);
    if (!y || !m || !d)
        return null;
    return new Date(Date.UTC(y, m - 1, d, 0, 0, 0, 0));
}
function parseDateOnlyEnd(value) {
    if (value === undefined)
        return undefined;
    if (!value)
        return null;
    const [y, m, d] = value.split('-').map(Number);
    if (!y || !m || !d)
        return null;
    return new Date(Date.UTC(y, m - 1, d, 23, 59, 59, 999));
}
function formatDateOnlyBR(date) {
    if (!date)
        return '';
    return date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
}
function toDateInputValue(date) {
    if (!date)
        return '';
    const y = date.getUTCFullYear();
    const m = String(date.getUTCMonth() + 1).padStart(2, '0');
    const d = String(date.getUTCDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}
function isWithinIndicacoesPeriodo(edicao) {
    const now = new Date();
    if (edicao.indicacoesInicio && now < edicao.indicacoesInicio)
        return false;
    if (edicao.indicacoesFim && now > edicao.indicacoesFim)
        return false;
    return true;
}
function indicacoesPermitidas(edicao) {
    if (!edicao.indicacoesAbertas)
        return false;
    return isWithinIndicacoesPeriodo(edicao);
}
function mensagemIndicacoesFechadas(edicao) {
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
//# sourceMappingURL=edicoes-periodo.util.js.map