import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get edicao(): Prisma.EdicaoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get regulamentoVersao(): Prisma.RegulamentoVersaoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get pessoa(): Prisma.PessoaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get usuarioAdmin(): Prisma.UsuarioAdminDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get comunidade(): Prisma.ComunidadeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get convite(): Prisma.ConviteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get lider(): Prisma.LiderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get linkComunidade(): Prisma.LinkComunidadeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get inscricaoStartup(): Prisma.InscricaoStartupDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get startupComunidadeBadge(): Prisma.StartupComunidadeBadgeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get categoria(): Prisma.CategoriaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get indicacao(): Prisma.IndicacaoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get membroColegio(): Prisma.MembroColegioDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get selecaoColegio(): Prisma.SelecaoColegioDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get finalista(): Prisma.FinalistaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get voto(): Prisma.VotoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get resultadoCategoria(): Prisma.ResultadoCategoriaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get ataApuracao(): Prisma.AtaApuracaoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get testemunhaApuracao(): Prisma.TestemunhaApuracaoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get auditoriaEvento(): Prisma.AuditoriaEventoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get solicitacaoCadastro(): Prisma.SolicitacaoCadastroDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get importacaoLote(): Prisma.ImportacaoLoteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
