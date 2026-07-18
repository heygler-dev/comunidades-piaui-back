"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.NullableJsonNullValueInput = exports.JsonNullValueInput = exports.SortOrder = exports.ImportacaoLoteScalarFieldEnum = exports.SolicitacaoCadastroScalarFieldEnum = exports.AuditoriaEventoScalarFieldEnum = exports.TestemunhaApuracaoScalarFieldEnum = exports.AtaApuracaoScalarFieldEnum = exports.ResultadoCategoriaScalarFieldEnum = exports.VotoScalarFieldEnum = exports.FinalistaScalarFieldEnum = exports.SelecaoColegioScalarFieldEnum = exports.MembroColegioScalarFieldEnum = exports.IndicacaoScalarFieldEnum = exports.CategoriaScalarFieldEnum = exports.StartupComunidadeBadgeScalarFieldEnum = exports.InscricaoStartupScalarFieldEnum = exports.LinkComunidadeScalarFieldEnum = exports.LiderScalarFieldEnum = exports.ConviteScalarFieldEnum = exports.ComunidadeScalarFieldEnum = exports.UsuarioAdminScalarFieldEnum = exports.PessoaScalarFieldEnum = exports.RegulamentoVersaoScalarFieldEnum = exports.EdicaoScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = require("@prisma/client/runtime/client");
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.8.0",
    engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Edicao: 'Edicao',
    RegulamentoVersao: 'RegulamentoVersao',
    Pessoa: 'Pessoa',
    UsuarioAdmin: 'UsuarioAdmin',
    Comunidade: 'Comunidade',
    Convite: 'Convite',
    Lider: 'Lider',
    LinkComunidade: 'LinkComunidade',
    InscricaoStartup: 'InscricaoStartup',
    StartupComunidadeBadge: 'StartupComunidadeBadge',
    Categoria: 'Categoria',
    Indicacao: 'Indicacao',
    MembroColegio: 'MembroColegio',
    SelecaoColegio: 'SelecaoColegio',
    Finalista: 'Finalista',
    Voto: 'Voto',
    ResultadoCategoria: 'ResultadoCategoria',
    AtaApuracao: 'AtaApuracao',
    TestemunhaApuracao: 'TestemunhaApuracao',
    AuditoriaEvento: 'AuditoriaEvento',
    SolicitacaoCadastro: 'SolicitacaoCadastro',
    ImportacaoLote: 'ImportacaoLote'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.EdicaoScalarFieldEnum = {
    id: 'id',
    nome: 'nome',
    ano: 'ano',
    faseAtual: 'faseAtual',
    votacaoAberta: 'votacaoAberta',
    indicacoesAbertas: 'indicacoesAbertas',
    colegioHabilitado: 'colegioHabilitado',
    xLideresColegio: 'xLideresColegio',
    nFinalistasPorCategoria: 'nFinalistasPorCategoria',
    cotasRegionaisAtivas: 'cotasRegionaisAtivas',
    cotaMinCapital: 'cotaMinCapital',
    cotaMinInterior: 'cotaMinInterior',
    cidadesCapital: 'cidadesCapital',
    criteriosMd: 'criteriosMd',
    indicacoesInicio: 'indicacoesInicio',
    indicacoesFim: 'indicacoesFim',
    ativa: 'ativa',
    createdAt: 'createdAt'
};
exports.RegulamentoVersaoScalarFieldEnum = {
    id: 'id',
    edicaoId: 'edicaoId',
    versao: 'versao',
    criteriosMd: 'criteriosMd',
    snapshot: 'snapshot',
    publicadaEm: 'publicadaEm',
    createdAt: 'createdAt'
};
exports.PessoaScalarFieldEnum = {
    id: 'id',
    edicaoId: 'edicaoId',
    cpf: 'cpf',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    senhaHash: 'senhaHash',
    lgpdAceitoEm: 'lgpdAceitoEm',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.UsuarioAdminScalarFieldEnum = {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senhaHash: 'senhaHash',
    ativo: 'ativo',
    createdAt: 'createdAt'
};
exports.ComunidadeScalarFieldEnum = {
    id: 'id',
    edicaoId: 'edicaoId',
    nome: 'nome',
    descricao: 'descricao',
    institucional: 'institucional',
    cidade: 'cidade',
    estado: 'estado',
    cidadesAtuacao: 'cidadesAtuacao',
    logoUrl: 'logoUrl',
    slug: 'slug',
    status: 'status',
    isPadraoStartupPiaui: 'isPadraoStartupPiaui',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
};
exports.ConviteScalarFieldEnum = {
    id: 'id',
    edicaoId: 'edicaoId',
    comunidadeId: 'comunidadeId',
    tipo: 'tipo',
    token: 'token',
    criadoPorId: 'criadoPorId',
    liderCriadorId: 'liderCriadorId',
    expiraEm: 'expiraEm',
    usadoEm: 'usadoEm',
    ativo: 'ativo',
    createdAt: 'createdAt'
};
exports.LiderScalarFieldEnum = {
    id: 'id',
    edicaoId: 'edicaoId',
    pessoaId: 'pessoaId',
    comunidadeId: 'comunidadeId',
    conviteId: 'conviteId',
    nome: 'nome',
    cpf: 'cpf',
    email: 'email',
    telefone: 'telefone',
    senhaHash: 'senhaHash',
    tipoLider: 'tipoLider',
    nomeadoPorId: 'nomeadoPorId',
    status: 'status',
    lgpdAceitoEm: 'lgpdAceitoEm',
    ativadoEm: 'ativadoEm',
    createdAt: 'createdAt'
};
exports.LinkComunidadeScalarFieldEnum = {
    id: 'id',
    edicaoId: 'edicaoId',
    comunidadeId: 'comunidadeId',
    liderId: 'liderId',
    slug: 'slug',
    ativo: 'ativo',
    createdAt: 'createdAt'
};
exports.InscricaoStartupScalarFieldEnum = {
    id: 'id',
    edicaoId: 'edicaoId',
    comunidadeId: 'comunidadeId',
    liderId: 'liderId',
    linkComunidadeId: 'linkComunidadeId',
    pessoaId: 'pessoaId',
    responsavelNome: 'responsavelNome',
    responsavelCpf: 'responsavelCpf',
    responsavelTelefone: 'responsavelTelefone',
    responsavelEmail: 'responsavelEmail',
    senhaHash: 'senhaHash',
    nomeStartup: 'nomeStartup',
    categoria: 'categoria',
    cidadeOperacao: 'cidadeOperacao',
    site: 'site',
    descricao: 'descricao',
    logoUrl: 'logoUrl',
    pitchCurto: 'pitchCurto',
    videoUrl: 'videoUrl',
    metricasJson: 'metricasJson',
    etapaAtual: 'etapaAtual',
    status: 'status',
    slugPublico: 'slugPublico',
    lgpdAceitoEm: 'lgpdAceitoEm',
    cpfUnicoConfirmado: 'cpfUnicoConfirmado',
    confirmadoEm: 'confirmadoEm',
    origem: 'origem',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.StartupComunidadeBadgeScalarFieldEnum = {
    id: 'id',
    edicaoId: 'edicaoId',
    inscricaoStartupId: 'inscricaoStartupId',
    comunidadeId: 'comunidadeId',
    createdAt: 'createdAt'
};
exports.CategoriaScalarFieldEnum = {
    id: 'id',
    edicaoId: 'edicaoId',
    nome: 'nome',
    ordem: 'ordem'
};
exports.IndicacaoScalarFieldEnum = {
    id: 'id',
    edicaoId: 'edicaoId',
    categoriaId: 'categoriaId',
    inscricaoStartupId: 'inscricaoStartupId',
    indicanteLiderId: 'indicanteLiderId',
    indicanteInscricaoId: 'indicanteInscricaoId',
    justificativa: 'justificativa',
    status: 'status',
    createdAt: 'createdAt'
};
exports.MembroColegioScalarFieldEnum = {
    id: 'id',
    edicaoId: 'edicaoId',
    comunidadeId: 'comunidadeId',
    liderId: 'liderId',
    apontadoEm: 'apontadoEm',
    ativo: 'ativo'
};
exports.SelecaoColegioScalarFieldEnum = {
    id: 'id',
    edicaoId: 'edicaoId',
    categoriaId: 'categoriaId',
    inscricaoStartupId: 'inscricaoStartupId',
    membroColegioId: 'membroColegioId',
    status: 'status',
    conflitoInteresse: 'conflitoInteresse',
    createdAt: 'createdAt'
};
exports.FinalistaScalarFieldEnum = {
    id: 'id',
    edicaoId: 'edicaoId',
    categoriaId: 'categoriaId',
    inscricaoStartupId: 'inscricaoStartupId',
    metaResumo: 'metaResumo',
    ativo: 'ativo',
    createdAt: 'createdAt'
};
exports.VotoScalarFieldEnum = {
    id: 'id',
    edicaoId: 'edicaoId',
    finalistaId: 'finalistaId',
    votanteNome: 'votanteNome',
    cpf: 'cpf',
    pessoaId: 'pessoaId',
    votanteLiderId: 'votanteLiderId',
    votanteInscricaoId: 'votanteInscricaoId',
    lgpdAceitoEm: 'lgpdAceitoEm',
    createdAt: 'createdAt'
};
exports.ResultadoCategoriaScalarFieldEnum = {
    id: 'id',
    edicaoId: 'edicaoId',
    categoriaId: 'categoriaId',
    finalistaId: 'finalistaId',
    totalVotos: 'totalVotos',
    publicadoEm: 'publicadoEm',
    validadoPorId: 'validadoPorId',
    createdAt: 'createdAt'
};
exports.AtaApuracaoScalarFieldEnum = {
    id: 'id',
    edicaoId: 'edicaoId',
    conteudoMd: 'conteudoMd',
    publicadaEm: 'publicadaEm',
    createdAt: 'createdAt'
};
exports.TestemunhaApuracaoScalarFieldEnum = {
    id: 'id',
    edicaoId: 'edicaoId',
    nome: 'nome',
    email: 'email',
    organizacao: 'organizacao',
    token: 'token',
    status: 'status',
    convidadaEm: 'convidadaEm',
    confirmadaEm: 'confirmadaEm',
    observacao: 'observacao',
    createdAt: 'createdAt'
};
exports.AuditoriaEventoScalarFieldEnum = {
    id: 'id',
    edicaoId: 'edicaoId',
    tipo: 'tipo',
    atorPapel: 'atorPapel',
    atorId: 'atorId',
    cpfHash: 'cpfHash',
    payload: 'payload',
    createdAt: 'createdAt'
};
exports.SolicitacaoCadastroScalarFieldEnum = {
    id: 'id',
    edicaoId: 'edicaoId',
    comunidadeId: 'comunidadeId',
    tipo: 'tipo',
    status: 'status',
    nome: 'nome',
    cpf: 'cpf',
    email: 'email',
    telefone: 'telefone',
    senhaHash: 'senhaHash',
    lgpdAceitoEm: 'lgpdAceitoEm',
    nomeStartup: 'nomeStartup',
    categoria: 'categoria',
    cidadeOperacao: 'cidadeOperacao',
    site: 'site',
    descricao: 'descricao',
    cpfUnicoConfirmado: 'cpfUnicoConfirmado',
    revisadoPorLiderId: 'revisadoPorLiderId',
    revisadoEm: 'revisadoEm',
    motivoRejeicao: 'motivoRejeicao',
    inscricaoStartupId: 'inscricaoStartupId',
    liderCriadoId: 'liderCriadoId',
    createdAt: 'createdAt'
};
exports.ImportacaoLoteScalarFieldEnum = {
    id: 'id',
    edicaoId: 'edicaoId',
    arquivoNome: 'arquivoNome',
    totalLinhas: 'totalLinhas',
    importadas: 'importadas',
    ignoradas: 'ignoradas',
    errosJson: 'errosJson',
    adminId: 'adminId',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.JsonNullValueInput = {
    JsonNull: exports.JsonNull
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map