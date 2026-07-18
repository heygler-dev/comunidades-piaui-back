export type StartupImportMetricas = {
    idSupi?: string;
    turma?: string;
    mercadoPrioritario?: string;
    statusPrograma?: string;
    origemPrograma?: string;
    trl?: string;
    maturidade?: string;
    maturidadeSebrae?: string;
    cnpj?: string;
    postosTrabalho?: string;
    socios?: string;
    mulheresRef?: string;
    faseInicial?: string;
    faseFinal?: string;
    faturamento?: string;
    solucao?: string;
    modeloNegocios?: string;
    tipoCliente?: string;
    estado?: string;
    regiao?: string;
    equipe?: Array<{
        nome: string;
        cpf?: string;
        turma?: string;
    }>;
    cpfResponsavel?: string;
};
export type StartupImportRow = {
    nomeStartup: string;
    responsavelNome?: string;
    responsavelCpf?: string;
    responsavelEmail?: string;
    responsavelTelefone?: string;
    comunidade: string;
    cidadeOperacao?: string;
    categoria?: string;
    site?: string;
    descricao?: string;
    pitchCurto?: string;
    status: 'Ativo' | 'Pendente';
    metricas?: StartupImportMetricas;
};
export declare const STARTUP_IMPORT_COLUMNS: readonly [{
    readonly campo: "nomeStartup";
    readonly obrigatorio: true;
    readonly exemplos: "nome, NOME, startup, empresa, nome da startup";
}, {
    readonly campo: "responsavelNome";
    readonly obrigatorio: false;
    readonly exemplos: "responsavel, COORDENADOR, nome do responsável";
}, {
    readonly campo: "responsavelCpf";
    readonly obrigatorio: false;
    readonly exemplos: "cpf, CPF, cpf responsável";
}, {
    readonly campo: "responsavelEmail";
    readonly obrigatorio: false;
    readonly exemplos: "email, EMAIL, e-mail";
}, {
    readonly campo: "responsavelTelefone";
    readonly obrigatorio: false;
    readonly exemplos: "telefone, TELEFONE, celular";
}, {
    readonly campo: "comunidade";
    readonly obrigatorio: false;
    readonly exemplos: "comunidade, Região (padrão: Não informada)";
}, {
    readonly campo: "cidadeOperacao";
    readonly obrigatorio: false;
    readonly exemplos: "cidade, CIDADE";
}, {
    readonly campo: "categoria";
    readonly obrigatorio: false;
    readonly exemplos: "categoria, Mercado, segmento";
}, {
    readonly campo: "site";
    readonly obrigatorio: false;
    readonly exemplos: "site, website, url";
}, {
    readonly campo: "descricao";
    readonly obrigatorio: false;
    readonly exemplos: "descricao, O QUE FAZ, Solução, sobre";
}, {
    readonly campo: "status";
    readonly obrigatorio: false;
    readonly exemplos: "status, Status no Programa (ATIVA→Ativo, INATIVA→Pendente)";
}, {
    readonly campo: "metricas (Dados Gerais)";
    readonly obrigatorio: false;
    readonly exemplos: "id.supi, TURMA, Origem, TRL, Maturidade, CNPJ, Postos de trabalho, sócios, faturamento, Modelo de Negócios, Tipo de Cliente, ESTADO, Região";
}];
export declare function parseStartupImportRow(row: Record<string, unknown>): {
    data?: StartupImportRow;
    erro?: string;
};
