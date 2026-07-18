export declare function parseDateOnlyStart(value?: string | null): Date | null | undefined;
export declare function parseDateOnlyEnd(value?: string | null): Date | null | undefined;
export declare function formatDateOnlyBR(date: Date | null | undefined): string;
export declare function toDateInputValue(date: Date | null | undefined): string;
export declare function isWithinIndicacoesPeriodo(edicao: {
    indicacoesInicio: Date | null;
    indicacoesFim: Date | null;
}): boolean;
export declare function indicacoesPermitidas(edicao: {
    indicacoesAbertas: boolean;
    indicacoesInicio: Date | null;
    indicacoesFim: Date | null;
}): boolean;
export declare function mensagemIndicacoesFechadas(edicao: {
    indicacoesAbertas: boolean;
    indicacoesInicio: Date | null;
    indicacoesFim: Date | null;
}): string;
