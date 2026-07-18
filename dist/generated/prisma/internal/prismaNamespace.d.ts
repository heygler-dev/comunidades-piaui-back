import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Edicao: "Edicao";
    readonly RegulamentoVersao: "RegulamentoVersao";
    readonly Pessoa: "Pessoa";
    readonly UsuarioAdmin: "UsuarioAdmin";
    readonly Comunidade: "Comunidade";
    readonly Convite: "Convite";
    readonly Lider: "Lider";
    readonly LinkComunidade: "LinkComunidade";
    readonly InscricaoStartup: "InscricaoStartup";
    readonly StartupComunidadeBadge: "StartupComunidadeBadge";
    readonly Categoria: "Categoria";
    readonly Indicacao: "Indicacao";
    readonly MembroColegio: "MembroColegio";
    readonly SelecaoColegio: "SelecaoColegio";
    readonly Finalista: "Finalista";
    readonly Voto: "Voto";
    readonly ResultadoCategoria: "ResultadoCategoria";
    readonly AtaApuracao: "AtaApuracao";
    readonly TestemunhaApuracao: "TestemunhaApuracao";
    readonly AuditoriaEvento: "AuditoriaEvento";
    readonly SolicitacaoCadastro: "SolicitacaoCadastro";
    readonly ImportacaoLote: "ImportacaoLote";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "edicao" | "regulamentoVersao" | "pessoa" | "usuarioAdmin" | "comunidade" | "convite" | "lider" | "linkComunidade" | "inscricaoStartup" | "startupComunidadeBadge" | "categoria" | "indicacao" | "membroColegio" | "selecaoColegio" | "finalista" | "voto" | "resultadoCategoria" | "ataApuracao" | "testemunhaApuracao" | "auditoriaEvento" | "solicitacaoCadastro" | "importacaoLote";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Edicao: {
            payload: Prisma.$EdicaoPayload<ExtArgs>;
            fields: Prisma.EdicaoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EdicaoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EdicaoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EdicaoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EdicaoPayload>;
                };
                findFirst: {
                    args: Prisma.EdicaoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EdicaoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EdicaoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EdicaoPayload>;
                };
                findMany: {
                    args: Prisma.EdicaoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EdicaoPayload>[];
                };
                create: {
                    args: Prisma.EdicaoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EdicaoPayload>;
                };
                createMany: {
                    args: Prisma.EdicaoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EdicaoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EdicaoPayload>[];
                };
                delete: {
                    args: Prisma.EdicaoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EdicaoPayload>;
                };
                update: {
                    args: Prisma.EdicaoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EdicaoPayload>;
                };
                deleteMany: {
                    args: Prisma.EdicaoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EdicaoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EdicaoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EdicaoPayload>[];
                };
                upsert: {
                    args: Prisma.EdicaoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EdicaoPayload>;
                };
                aggregate: {
                    args: Prisma.EdicaoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEdicao>;
                };
                groupBy: {
                    args: Prisma.EdicaoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EdicaoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EdicaoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EdicaoCountAggregateOutputType> | number;
                };
            };
        };
        RegulamentoVersao: {
            payload: Prisma.$RegulamentoVersaoPayload<ExtArgs>;
            fields: Prisma.RegulamentoVersaoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RegulamentoVersaoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegulamentoVersaoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RegulamentoVersaoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegulamentoVersaoPayload>;
                };
                findFirst: {
                    args: Prisma.RegulamentoVersaoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegulamentoVersaoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RegulamentoVersaoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegulamentoVersaoPayload>;
                };
                findMany: {
                    args: Prisma.RegulamentoVersaoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegulamentoVersaoPayload>[];
                };
                create: {
                    args: Prisma.RegulamentoVersaoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegulamentoVersaoPayload>;
                };
                createMany: {
                    args: Prisma.RegulamentoVersaoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RegulamentoVersaoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegulamentoVersaoPayload>[];
                };
                delete: {
                    args: Prisma.RegulamentoVersaoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegulamentoVersaoPayload>;
                };
                update: {
                    args: Prisma.RegulamentoVersaoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegulamentoVersaoPayload>;
                };
                deleteMany: {
                    args: Prisma.RegulamentoVersaoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RegulamentoVersaoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RegulamentoVersaoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegulamentoVersaoPayload>[];
                };
                upsert: {
                    args: Prisma.RegulamentoVersaoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RegulamentoVersaoPayload>;
                };
                aggregate: {
                    args: Prisma.RegulamentoVersaoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRegulamentoVersao>;
                };
                groupBy: {
                    args: Prisma.RegulamentoVersaoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RegulamentoVersaoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RegulamentoVersaoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RegulamentoVersaoCountAggregateOutputType> | number;
                };
            };
        };
        Pessoa: {
            payload: Prisma.$PessoaPayload<ExtArgs>;
            fields: Prisma.PessoaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PessoaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PessoaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PessoaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PessoaPayload>;
                };
                findFirst: {
                    args: Prisma.PessoaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PessoaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PessoaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PessoaPayload>;
                };
                findMany: {
                    args: Prisma.PessoaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PessoaPayload>[];
                };
                create: {
                    args: Prisma.PessoaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PessoaPayload>;
                };
                createMany: {
                    args: Prisma.PessoaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PessoaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PessoaPayload>[];
                };
                delete: {
                    args: Prisma.PessoaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PessoaPayload>;
                };
                update: {
                    args: Prisma.PessoaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PessoaPayload>;
                };
                deleteMany: {
                    args: Prisma.PessoaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PessoaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PessoaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PessoaPayload>[];
                };
                upsert: {
                    args: Prisma.PessoaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PessoaPayload>;
                };
                aggregate: {
                    args: Prisma.PessoaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePessoa>;
                };
                groupBy: {
                    args: Prisma.PessoaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PessoaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PessoaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PessoaCountAggregateOutputType> | number;
                };
            };
        };
        UsuarioAdmin: {
            payload: Prisma.$UsuarioAdminPayload<ExtArgs>;
            fields: Prisma.UsuarioAdminFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UsuarioAdminFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioAdminPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UsuarioAdminFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>;
                };
                findFirst: {
                    args: Prisma.UsuarioAdminFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioAdminPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UsuarioAdminFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>;
                };
                findMany: {
                    args: Prisma.UsuarioAdminFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>[];
                };
                create: {
                    args: Prisma.UsuarioAdminCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>;
                };
                createMany: {
                    args: Prisma.UsuarioAdminCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UsuarioAdminCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>[];
                };
                delete: {
                    args: Prisma.UsuarioAdminDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>;
                };
                update: {
                    args: Prisma.UsuarioAdminUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>;
                };
                deleteMany: {
                    args: Prisma.UsuarioAdminDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UsuarioAdminUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UsuarioAdminUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>[];
                };
                upsert: {
                    args: Prisma.UsuarioAdminUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioAdminPayload>;
                };
                aggregate: {
                    args: Prisma.UsuarioAdminAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsuarioAdmin>;
                };
                groupBy: {
                    args: Prisma.UsuarioAdminGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioAdminGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UsuarioAdminCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioAdminCountAggregateOutputType> | number;
                };
            };
        };
        Comunidade: {
            payload: Prisma.$ComunidadePayload<ExtArgs>;
            fields: Prisma.ComunidadeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ComunidadeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComunidadePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ComunidadeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComunidadePayload>;
                };
                findFirst: {
                    args: Prisma.ComunidadeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComunidadePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ComunidadeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComunidadePayload>;
                };
                findMany: {
                    args: Prisma.ComunidadeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComunidadePayload>[];
                };
                create: {
                    args: Prisma.ComunidadeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComunidadePayload>;
                };
                createMany: {
                    args: Prisma.ComunidadeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ComunidadeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComunidadePayload>[];
                };
                delete: {
                    args: Prisma.ComunidadeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComunidadePayload>;
                };
                update: {
                    args: Prisma.ComunidadeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComunidadePayload>;
                };
                deleteMany: {
                    args: Prisma.ComunidadeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ComunidadeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ComunidadeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComunidadePayload>[];
                };
                upsert: {
                    args: Prisma.ComunidadeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ComunidadePayload>;
                };
                aggregate: {
                    args: Prisma.ComunidadeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateComunidade>;
                };
                groupBy: {
                    args: Prisma.ComunidadeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ComunidadeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ComunidadeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ComunidadeCountAggregateOutputType> | number;
                };
            };
        };
        Convite: {
            payload: Prisma.$ConvitePayload<ExtArgs>;
            fields: Prisma.ConviteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ConviteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvitePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ConviteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvitePayload>;
                };
                findFirst: {
                    args: Prisma.ConviteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvitePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ConviteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvitePayload>;
                };
                findMany: {
                    args: Prisma.ConviteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvitePayload>[];
                };
                create: {
                    args: Prisma.ConviteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvitePayload>;
                };
                createMany: {
                    args: Prisma.ConviteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ConviteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvitePayload>[];
                };
                delete: {
                    args: Prisma.ConviteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvitePayload>;
                };
                update: {
                    args: Prisma.ConviteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvitePayload>;
                };
                deleteMany: {
                    args: Prisma.ConviteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ConviteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ConviteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvitePayload>[];
                };
                upsert: {
                    args: Prisma.ConviteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ConvitePayload>;
                };
                aggregate: {
                    args: Prisma.ConviteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConvite>;
                };
                groupBy: {
                    args: Prisma.ConviteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConviteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ConviteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ConviteCountAggregateOutputType> | number;
                };
            };
        };
        Lider: {
            payload: Prisma.$LiderPayload<ExtArgs>;
            fields: Prisma.LiderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LiderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LiderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LiderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LiderPayload>;
                };
                findFirst: {
                    args: Prisma.LiderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LiderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LiderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LiderPayload>;
                };
                findMany: {
                    args: Prisma.LiderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LiderPayload>[];
                };
                create: {
                    args: Prisma.LiderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LiderPayload>;
                };
                createMany: {
                    args: Prisma.LiderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LiderCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LiderPayload>[];
                };
                delete: {
                    args: Prisma.LiderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LiderPayload>;
                };
                update: {
                    args: Prisma.LiderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LiderPayload>;
                };
                deleteMany: {
                    args: Prisma.LiderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LiderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LiderUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LiderPayload>[];
                };
                upsert: {
                    args: Prisma.LiderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LiderPayload>;
                };
                aggregate: {
                    args: Prisma.LiderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLider>;
                };
                groupBy: {
                    args: Prisma.LiderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LiderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LiderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LiderCountAggregateOutputType> | number;
                };
            };
        };
        LinkComunidade: {
            payload: Prisma.$LinkComunidadePayload<ExtArgs>;
            fields: Prisma.LinkComunidadeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LinkComunidadeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LinkComunidadePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LinkComunidadeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LinkComunidadePayload>;
                };
                findFirst: {
                    args: Prisma.LinkComunidadeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LinkComunidadePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LinkComunidadeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LinkComunidadePayload>;
                };
                findMany: {
                    args: Prisma.LinkComunidadeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LinkComunidadePayload>[];
                };
                create: {
                    args: Prisma.LinkComunidadeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LinkComunidadePayload>;
                };
                createMany: {
                    args: Prisma.LinkComunidadeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LinkComunidadeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LinkComunidadePayload>[];
                };
                delete: {
                    args: Prisma.LinkComunidadeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LinkComunidadePayload>;
                };
                update: {
                    args: Prisma.LinkComunidadeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LinkComunidadePayload>;
                };
                deleteMany: {
                    args: Prisma.LinkComunidadeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LinkComunidadeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LinkComunidadeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LinkComunidadePayload>[];
                };
                upsert: {
                    args: Prisma.LinkComunidadeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LinkComunidadePayload>;
                };
                aggregate: {
                    args: Prisma.LinkComunidadeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLinkComunidade>;
                };
                groupBy: {
                    args: Prisma.LinkComunidadeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LinkComunidadeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LinkComunidadeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LinkComunidadeCountAggregateOutputType> | number;
                };
            };
        };
        InscricaoStartup: {
            payload: Prisma.$InscricaoStartupPayload<ExtArgs>;
            fields: Prisma.InscricaoStartupFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InscricaoStartupFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InscricaoStartupPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InscricaoStartupFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InscricaoStartupPayload>;
                };
                findFirst: {
                    args: Prisma.InscricaoStartupFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InscricaoStartupPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InscricaoStartupFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InscricaoStartupPayload>;
                };
                findMany: {
                    args: Prisma.InscricaoStartupFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InscricaoStartupPayload>[];
                };
                create: {
                    args: Prisma.InscricaoStartupCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InscricaoStartupPayload>;
                };
                createMany: {
                    args: Prisma.InscricaoStartupCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InscricaoStartupCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InscricaoStartupPayload>[];
                };
                delete: {
                    args: Prisma.InscricaoStartupDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InscricaoStartupPayload>;
                };
                update: {
                    args: Prisma.InscricaoStartupUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InscricaoStartupPayload>;
                };
                deleteMany: {
                    args: Prisma.InscricaoStartupDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InscricaoStartupUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InscricaoStartupUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InscricaoStartupPayload>[];
                };
                upsert: {
                    args: Prisma.InscricaoStartupUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InscricaoStartupPayload>;
                };
                aggregate: {
                    args: Prisma.InscricaoStartupAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInscricaoStartup>;
                };
                groupBy: {
                    args: Prisma.InscricaoStartupGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InscricaoStartupGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InscricaoStartupCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InscricaoStartupCountAggregateOutputType> | number;
                };
            };
        };
        StartupComunidadeBadge: {
            payload: Prisma.$StartupComunidadeBadgePayload<ExtArgs>;
            fields: Prisma.StartupComunidadeBadgeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.StartupComunidadeBadgeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StartupComunidadeBadgePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.StartupComunidadeBadgeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StartupComunidadeBadgePayload>;
                };
                findFirst: {
                    args: Prisma.StartupComunidadeBadgeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StartupComunidadeBadgePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.StartupComunidadeBadgeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StartupComunidadeBadgePayload>;
                };
                findMany: {
                    args: Prisma.StartupComunidadeBadgeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StartupComunidadeBadgePayload>[];
                };
                create: {
                    args: Prisma.StartupComunidadeBadgeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StartupComunidadeBadgePayload>;
                };
                createMany: {
                    args: Prisma.StartupComunidadeBadgeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.StartupComunidadeBadgeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StartupComunidadeBadgePayload>[];
                };
                delete: {
                    args: Prisma.StartupComunidadeBadgeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StartupComunidadeBadgePayload>;
                };
                update: {
                    args: Prisma.StartupComunidadeBadgeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StartupComunidadeBadgePayload>;
                };
                deleteMany: {
                    args: Prisma.StartupComunidadeBadgeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.StartupComunidadeBadgeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.StartupComunidadeBadgeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StartupComunidadeBadgePayload>[];
                };
                upsert: {
                    args: Prisma.StartupComunidadeBadgeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$StartupComunidadeBadgePayload>;
                };
                aggregate: {
                    args: Prisma.StartupComunidadeBadgeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStartupComunidadeBadge>;
                };
                groupBy: {
                    args: Prisma.StartupComunidadeBadgeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StartupComunidadeBadgeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.StartupComunidadeBadgeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.StartupComunidadeBadgeCountAggregateOutputType> | number;
                };
            };
        };
        Categoria: {
            payload: Prisma.$CategoriaPayload<ExtArgs>;
            fields: Prisma.CategoriaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CategoriaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaPayload>;
                };
                findFirst: {
                    args: Prisma.CategoriaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaPayload>;
                };
                findMany: {
                    args: Prisma.CategoriaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaPayload>[];
                };
                create: {
                    args: Prisma.CategoriaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaPayload>;
                };
                createMany: {
                    args: Prisma.CategoriaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaPayload>[];
                };
                delete: {
                    args: Prisma.CategoriaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaPayload>;
                };
                update: {
                    args: Prisma.CategoriaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaPayload>;
                };
                deleteMany: {
                    args: Prisma.CategoriaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CategoriaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaPayload>[];
                };
                upsert: {
                    args: Prisma.CategoriaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CategoriaPayload>;
                };
                aggregate: {
                    args: Prisma.CategoriaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCategoria>;
                };
                groupBy: {
                    args: Prisma.CategoriaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoriaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CategoriaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CategoriaCountAggregateOutputType> | number;
                };
            };
        };
        Indicacao: {
            payload: Prisma.$IndicacaoPayload<ExtArgs>;
            fields: Prisma.IndicacaoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.IndicacaoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IndicacaoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.IndicacaoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IndicacaoPayload>;
                };
                findFirst: {
                    args: Prisma.IndicacaoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IndicacaoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.IndicacaoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IndicacaoPayload>;
                };
                findMany: {
                    args: Prisma.IndicacaoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IndicacaoPayload>[];
                };
                create: {
                    args: Prisma.IndicacaoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IndicacaoPayload>;
                };
                createMany: {
                    args: Prisma.IndicacaoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.IndicacaoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IndicacaoPayload>[];
                };
                delete: {
                    args: Prisma.IndicacaoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IndicacaoPayload>;
                };
                update: {
                    args: Prisma.IndicacaoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IndicacaoPayload>;
                };
                deleteMany: {
                    args: Prisma.IndicacaoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.IndicacaoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.IndicacaoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IndicacaoPayload>[];
                };
                upsert: {
                    args: Prisma.IndicacaoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IndicacaoPayload>;
                };
                aggregate: {
                    args: Prisma.IndicacaoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateIndicacao>;
                };
                groupBy: {
                    args: Prisma.IndicacaoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IndicacaoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.IndicacaoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IndicacaoCountAggregateOutputType> | number;
                };
            };
        };
        MembroColegio: {
            payload: Prisma.$MembroColegioPayload<ExtArgs>;
            fields: Prisma.MembroColegioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MembroColegioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MembroColegioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MembroColegioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MembroColegioPayload>;
                };
                findFirst: {
                    args: Prisma.MembroColegioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MembroColegioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MembroColegioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MembroColegioPayload>;
                };
                findMany: {
                    args: Prisma.MembroColegioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MembroColegioPayload>[];
                };
                create: {
                    args: Prisma.MembroColegioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MembroColegioPayload>;
                };
                createMany: {
                    args: Prisma.MembroColegioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MembroColegioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MembroColegioPayload>[];
                };
                delete: {
                    args: Prisma.MembroColegioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MembroColegioPayload>;
                };
                update: {
                    args: Prisma.MembroColegioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MembroColegioPayload>;
                };
                deleteMany: {
                    args: Prisma.MembroColegioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MembroColegioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MembroColegioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MembroColegioPayload>[];
                };
                upsert: {
                    args: Prisma.MembroColegioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MembroColegioPayload>;
                };
                aggregate: {
                    args: Prisma.MembroColegioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMembroColegio>;
                };
                groupBy: {
                    args: Prisma.MembroColegioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MembroColegioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MembroColegioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MembroColegioCountAggregateOutputType> | number;
                };
            };
        };
        SelecaoColegio: {
            payload: Prisma.$SelecaoColegioPayload<ExtArgs>;
            fields: Prisma.SelecaoColegioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SelecaoColegioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SelecaoColegioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SelecaoColegioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SelecaoColegioPayload>;
                };
                findFirst: {
                    args: Prisma.SelecaoColegioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SelecaoColegioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SelecaoColegioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SelecaoColegioPayload>;
                };
                findMany: {
                    args: Prisma.SelecaoColegioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SelecaoColegioPayload>[];
                };
                create: {
                    args: Prisma.SelecaoColegioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SelecaoColegioPayload>;
                };
                createMany: {
                    args: Prisma.SelecaoColegioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SelecaoColegioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SelecaoColegioPayload>[];
                };
                delete: {
                    args: Prisma.SelecaoColegioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SelecaoColegioPayload>;
                };
                update: {
                    args: Prisma.SelecaoColegioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SelecaoColegioPayload>;
                };
                deleteMany: {
                    args: Prisma.SelecaoColegioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SelecaoColegioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SelecaoColegioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SelecaoColegioPayload>[];
                };
                upsert: {
                    args: Prisma.SelecaoColegioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SelecaoColegioPayload>;
                };
                aggregate: {
                    args: Prisma.SelecaoColegioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSelecaoColegio>;
                };
                groupBy: {
                    args: Prisma.SelecaoColegioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SelecaoColegioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SelecaoColegioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SelecaoColegioCountAggregateOutputType> | number;
                };
            };
        };
        Finalista: {
            payload: Prisma.$FinalistaPayload<ExtArgs>;
            fields: Prisma.FinalistaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FinalistaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FinalistaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FinalistaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FinalistaPayload>;
                };
                findFirst: {
                    args: Prisma.FinalistaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FinalistaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FinalistaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FinalistaPayload>;
                };
                findMany: {
                    args: Prisma.FinalistaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FinalistaPayload>[];
                };
                create: {
                    args: Prisma.FinalistaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FinalistaPayload>;
                };
                createMany: {
                    args: Prisma.FinalistaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FinalistaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FinalistaPayload>[];
                };
                delete: {
                    args: Prisma.FinalistaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FinalistaPayload>;
                };
                update: {
                    args: Prisma.FinalistaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FinalistaPayload>;
                };
                deleteMany: {
                    args: Prisma.FinalistaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FinalistaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FinalistaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FinalistaPayload>[];
                };
                upsert: {
                    args: Prisma.FinalistaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FinalistaPayload>;
                };
                aggregate: {
                    args: Prisma.FinalistaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFinalista>;
                };
                groupBy: {
                    args: Prisma.FinalistaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FinalistaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FinalistaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FinalistaCountAggregateOutputType> | number;
                };
            };
        };
        Voto: {
            payload: Prisma.$VotoPayload<ExtArgs>;
            fields: Prisma.VotoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VotoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VotoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotoPayload>;
                };
                findFirst: {
                    args: Prisma.VotoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VotoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotoPayload>;
                };
                findMany: {
                    args: Prisma.VotoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotoPayload>[];
                };
                create: {
                    args: Prisma.VotoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotoPayload>;
                };
                createMany: {
                    args: Prisma.VotoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VotoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotoPayload>[];
                };
                delete: {
                    args: Prisma.VotoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotoPayload>;
                };
                update: {
                    args: Prisma.VotoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotoPayload>;
                };
                deleteMany: {
                    args: Prisma.VotoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VotoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VotoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotoPayload>[];
                };
                upsert: {
                    args: Prisma.VotoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VotoPayload>;
                };
                aggregate: {
                    args: Prisma.VotoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVoto>;
                };
                groupBy: {
                    args: Prisma.VotoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VotoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VotoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VotoCountAggregateOutputType> | number;
                };
            };
        };
        ResultadoCategoria: {
            payload: Prisma.$ResultadoCategoriaPayload<ExtArgs>;
            fields: Prisma.ResultadoCategoriaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ResultadoCategoriaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResultadoCategoriaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ResultadoCategoriaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResultadoCategoriaPayload>;
                };
                findFirst: {
                    args: Prisma.ResultadoCategoriaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResultadoCategoriaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ResultadoCategoriaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResultadoCategoriaPayload>;
                };
                findMany: {
                    args: Prisma.ResultadoCategoriaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResultadoCategoriaPayload>[];
                };
                create: {
                    args: Prisma.ResultadoCategoriaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResultadoCategoriaPayload>;
                };
                createMany: {
                    args: Prisma.ResultadoCategoriaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ResultadoCategoriaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResultadoCategoriaPayload>[];
                };
                delete: {
                    args: Prisma.ResultadoCategoriaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResultadoCategoriaPayload>;
                };
                update: {
                    args: Prisma.ResultadoCategoriaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResultadoCategoriaPayload>;
                };
                deleteMany: {
                    args: Prisma.ResultadoCategoriaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ResultadoCategoriaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ResultadoCategoriaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResultadoCategoriaPayload>[];
                };
                upsert: {
                    args: Prisma.ResultadoCategoriaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ResultadoCategoriaPayload>;
                };
                aggregate: {
                    args: Prisma.ResultadoCategoriaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateResultadoCategoria>;
                };
                groupBy: {
                    args: Prisma.ResultadoCategoriaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ResultadoCategoriaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ResultadoCategoriaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ResultadoCategoriaCountAggregateOutputType> | number;
                };
            };
        };
        AtaApuracao: {
            payload: Prisma.$AtaApuracaoPayload<ExtArgs>;
            fields: Prisma.AtaApuracaoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AtaApuracaoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AtaApuracaoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AtaApuracaoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AtaApuracaoPayload>;
                };
                findFirst: {
                    args: Prisma.AtaApuracaoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AtaApuracaoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AtaApuracaoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AtaApuracaoPayload>;
                };
                findMany: {
                    args: Prisma.AtaApuracaoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AtaApuracaoPayload>[];
                };
                create: {
                    args: Prisma.AtaApuracaoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AtaApuracaoPayload>;
                };
                createMany: {
                    args: Prisma.AtaApuracaoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AtaApuracaoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AtaApuracaoPayload>[];
                };
                delete: {
                    args: Prisma.AtaApuracaoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AtaApuracaoPayload>;
                };
                update: {
                    args: Prisma.AtaApuracaoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AtaApuracaoPayload>;
                };
                deleteMany: {
                    args: Prisma.AtaApuracaoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AtaApuracaoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AtaApuracaoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AtaApuracaoPayload>[];
                };
                upsert: {
                    args: Prisma.AtaApuracaoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AtaApuracaoPayload>;
                };
                aggregate: {
                    args: Prisma.AtaApuracaoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAtaApuracao>;
                };
                groupBy: {
                    args: Prisma.AtaApuracaoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AtaApuracaoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AtaApuracaoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AtaApuracaoCountAggregateOutputType> | number;
                };
            };
        };
        TestemunhaApuracao: {
            payload: Prisma.$TestemunhaApuracaoPayload<ExtArgs>;
            fields: Prisma.TestemunhaApuracaoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TestemunhaApuracaoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestemunhaApuracaoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TestemunhaApuracaoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestemunhaApuracaoPayload>;
                };
                findFirst: {
                    args: Prisma.TestemunhaApuracaoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestemunhaApuracaoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TestemunhaApuracaoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestemunhaApuracaoPayload>;
                };
                findMany: {
                    args: Prisma.TestemunhaApuracaoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestemunhaApuracaoPayload>[];
                };
                create: {
                    args: Prisma.TestemunhaApuracaoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestemunhaApuracaoPayload>;
                };
                createMany: {
                    args: Prisma.TestemunhaApuracaoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TestemunhaApuracaoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestemunhaApuracaoPayload>[];
                };
                delete: {
                    args: Prisma.TestemunhaApuracaoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestemunhaApuracaoPayload>;
                };
                update: {
                    args: Prisma.TestemunhaApuracaoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestemunhaApuracaoPayload>;
                };
                deleteMany: {
                    args: Prisma.TestemunhaApuracaoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TestemunhaApuracaoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TestemunhaApuracaoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestemunhaApuracaoPayload>[];
                };
                upsert: {
                    args: Prisma.TestemunhaApuracaoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TestemunhaApuracaoPayload>;
                };
                aggregate: {
                    args: Prisma.TestemunhaApuracaoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTestemunhaApuracao>;
                };
                groupBy: {
                    args: Prisma.TestemunhaApuracaoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TestemunhaApuracaoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TestemunhaApuracaoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TestemunhaApuracaoCountAggregateOutputType> | number;
                };
            };
        };
        AuditoriaEvento: {
            payload: Prisma.$AuditoriaEventoPayload<ExtArgs>;
            fields: Prisma.AuditoriaEventoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditoriaEventoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditoriaEventoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditoriaEventoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditoriaEventoPayload>;
                };
                findFirst: {
                    args: Prisma.AuditoriaEventoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditoriaEventoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditoriaEventoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditoriaEventoPayload>;
                };
                findMany: {
                    args: Prisma.AuditoriaEventoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditoriaEventoPayload>[];
                };
                create: {
                    args: Prisma.AuditoriaEventoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditoriaEventoPayload>;
                };
                createMany: {
                    args: Prisma.AuditoriaEventoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuditoriaEventoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditoriaEventoPayload>[];
                };
                delete: {
                    args: Prisma.AuditoriaEventoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditoriaEventoPayload>;
                };
                update: {
                    args: Prisma.AuditoriaEventoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditoriaEventoPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditoriaEventoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditoriaEventoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuditoriaEventoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditoriaEventoPayload>[];
                };
                upsert: {
                    args: Prisma.AuditoriaEventoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditoriaEventoPayload>;
                };
                aggregate: {
                    args: Prisma.AuditoriaEventoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditoriaEvento>;
                };
                groupBy: {
                    args: Prisma.AuditoriaEventoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditoriaEventoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditoriaEventoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditoriaEventoCountAggregateOutputType> | number;
                };
            };
        };
        SolicitacaoCadastro: {
            payload: Prisma.$SolicitacaoCadastroPayload<ExtArgs>;
            fields: Prisma.SolicitacaoCadastroFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SolicitacaoCadastroFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SolicitacaoCadastroPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SolicitacaoCadastroFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SolicitacaoCadastroPayload>;
                };
                findFirst: {
                    args: Prisma.SolicitacaoCadastroFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SolicitacaoCadastroPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SolicitacaoCadastroFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SolicitacaoCadastroPayload>;
                };
                findMany: {
                    args: Prisma.SolicitacaoCadastroFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SolicitacaoCadastroPayload>[];
                };
                create: {
                    args: Prisma.SolicitacaoCadastroCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SolicitacaoCadastroPayload>;
                };
                createMany: {
                    args: Prisma.SolicitacaoCadastroCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SolicitacaoCadastroCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SolicitacaoCadastroPayload>[];
                };
                delete: {
                    args: Prisma.SolicitacaoCadastroDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SolicitacaoCadastroPayload>;
                };
                update: {
                    args: Prisma.SolicitacaoCadastroUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SolicitacaoCadastroPayload>;
                };
                deleteMany: {
                    args: Prisma.SolicitacaoCadastroDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SolicitacaoCadastroUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SolicitacaoCadastroUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SolicitacaoCadastroPayload>[];
                };
                upsert: {
                    args: Prisma.SolicitacaoCadastroUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SolicitacaoCadastroPayload>;
                };
                aggregate: {
                    args: Prisma.SolicitacaoCadastroAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSolicitacaoCadastro>;
                };
                groupBy: {
                    args: Prisma.SolicitacaoCadastroGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SolicitacaoCadastroGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SolicitacaoCadastroCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SolicitacaoCadastroCountAggregateOutputType> | number;
                };
            };
        };
        ImportacaoLote: {
            payload: Prisma.$ImportacaoLotePayload<ExtArgs>;
            fields: Prisma.ImportacaoLoteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ImportacaoLoteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportacaoLotePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ImportacaoLoteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportacaoLotePayload>;
                };
                findFirst: {
                    args: Prisma.ImportacaoLoteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportacaoLotePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ImportacaoLoteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportacaoLotePayload>;
                };
                findMany: {
                    args: Prisma.ImportacaoLoteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportacaoLotePayload>[];
                };
                create: {
                    args: Prisma.ImportacaoLoteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportacaoLotePayload>;
                };
                createMany: {
                    args: Prisma.ImportacaoLoteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ImportacaoLoteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportacaoLotePayload>[];
                };
                delete: {
                    args: Prisma.ImportacaoLoteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportacaoLotePayload>;
                };
                update: {
                    args: Prisma.ImportacaoLoteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportacaoLotePayload>;
                };
                deleteMany: {
                    args: Prisma.ImportacaoLoteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ImportacaoLoteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ImportacaoLoteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportacaoLotePayload>[];
                };
                upsert: {
                    args: Prisma.ImportacaoLoteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ImportacaoLotePayload>;
                };
                aggregate: {
                    args: Prisma.ImportacaoLoteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateImportacaoLote>;
                };
                groupBy: {
                    args: Prisma.ImportacaoLoteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ImportacaoLoteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ImportacaoLoteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ImportacaoLoteCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const EdicaoScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly ano: "ano";
    readonly faseAtual: "faseAtual";
    readonly votacaoAberta: "votacaoAberta";
    readonly indicacoesAbertas: "indicacoesAbertas";
    readonly colegioHabilitado: "colegioHabilitado";
    readonly xLideresColegio: "xLideresColegio";
    readonly nFinalistasPorCategoria: "nFinalistasPorCategoria";
    readonly cotasRegionaisAtivas: "cotasRegionaisAtivas";
    readonly cotaMinCapital: "cotaMinCapital";
    readonly cotaMinInterior: "cotaMinInterior";
    readonly cidadesCapital: "cidadesCapital";
    readonly criteriosMd: "criteriosMd";
    readonly indicacoesInicio: "indicacoesInicio";
    readonly indicacoesFim: "indicacoesFim";
    readonly ativa: "ativa";
    readonly createdAt: "createdAt";
};
export type EdicaoScalarFieldEnum = (typeof EdicaoScalarFieldEnum)[keyof typeof EdicaoScalarFieldEnum];
export declare const RegulamentoVersaoScalarFieldEnum: {
    readonly id: "id";
    readonly edicaoId: "edicaoId";
    readonly versao: "versao";
    readonly criteriosMd: "criteriosMd";
    readonly snapshot: "snapshot";
    readonly publicadaEm: "publicadaEm";
    readonly createdAt: "createdAt";
};
export type RegulamentoVersaoScalarFieldEnum = (typeof RegulamentoVersaoScalarFieldEnum)[keyof typeof RegulamentoVersaoScalarFieldEnum];
export declare const PessoaScalarFieldEnum: {
    readonly id: "id";
    readonly edicaoId: "edicaoId";
    readonly cpf: "cpf";
    readonly nome: "nome";
    readonly email: "email";
    readonly telefone: "telefone";
    readonly senhaHash: "senhaHash";
    readonly lgpdAceitoEm: "lgpdAceitoEm";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PessoaScalarFieldEnum = (typeof PessoaScalarFieldEnum)[keyof typeof PessoaScalarFieldEnum];
export declare const UsuarioAdminScalarFieldEnum: {
    readonly id: "id";
    readonly nome: "nome";
    readonly email: "email";
    readonly senhaHash: "senhaHash";
    readonly ativo: "ativo";
    readonly createdAt: "createdAt";
};
export type UsuarioAdminScalarFieldEnum = (typeof UsuarioAdminScalarFieldEnum)[keyof typeof UsuarioAdminScalarFieldEnum];
export declare const ComunidadeScalarFieldEnum: {
    readonly id: "id";
    readonly edicaoId: "edicaoId";
    readonly nome: "nome";
    readonly descricao: "descricao";
    readonly institucional: "institucional";
    readonly cidade: "cidade";
    readonly estado: "estado";
    readonly cidadesAtuacao: "cidadesAtuacao";
    readonly logoUrl: "logoUrl";
    readonly slug: "slug";
    readonly status: "status";
    readonly isPadraoStartupPiaui: "isPadraoStartupPiaui";
    readonly createdBy: "createdBy";
    readonly createdAt: "createdAt";
};
export type ComunidadeScalarFieldEnum = (typeof ComunidadeScalarFieldEnum)[keyof typeof ComunidadeScalarFieldEnum];
export declare const ConviteScalarFieldEnum: {
    readonly id: "id";
    readonly edicaoId: "edicaoId";
    readonly comunidadeId: "comunidadeId";
    readonly tipo: "tipo";
    readonly token: "token";
    readonly criadoPorId: "criadoPorId";
    readonly liderCriadorId: "liderCriadorId";
    readonly expiraEm: "expiraEm";
    readonly usadoEm: "usadoEm";
    readonly ativo: "ativo";
    readonly createdAt: "createdAt";
};
export type ConviteScalarFieldEnum = (typeof ConviteScalarFieldEnum)[keyof typeof ConviteScalarFieldEnum];
export declare const LiderScalarFieldEnum: {
    readonly id: "id";
    readonly edicaoId: "edicaoId";
    readonly pessoaId: "pessoaId";
    readonly comunidadeId: "comunidadeId";
    readonly conviteId: "conviteId";
    readonly nome: "nome";
    readonly cpf: "cpf";
    readonly email: "email";
    readonly telefone: "telefone";
    readonly senhaHash: "senhaHash";
    readonly tipoLider: "tipoLider";
    readonly nomeadoPorId: "nomeadoPorId";
    readonly status: "status";
    readonly lgpdAceitoEm: "lgpdAceitoEm";
    readonly ativadoEm: "ativadoEm";
    readonly createdAt: "createdAt";
};
export type LiderScalarFieldEnum = (typeof LiderScalarFieldEnum)[keyof typeof LiderScalarFieldEnum];
export declare const LinkComunidadeScalarFieldEnum: {
    readonly id: "id";
    readonly edicaoId: "edicaoId";
    readonly comunidadeId: "comunidadeId";
    readonly liderId: "liderId";
    readonly slug: "slug";
    readonly ativo: "ativo";
    readonly createdAt: "createdAt";
};
export type LinkComunidadeScalarFieldEnum = (typeof LinkComunidadeScalarFieldEnum)[keyof typeof LinkComunidadeScalarFieldEnum];
export declare const InscricaoStartupScalarFieldEnum: {
    readonly id: "id";
    readonly edicaoId: "edicaoId";
    readonly comunidadeId: "comunidadeId";
    readonly liderId: "liderId";
    readonly linkComunidadeId: "linkComunidadeId";
    readonly pessoaId: "pessoaId";
    readonly responsavelNome: "responsavelNome";
    readonly responsavelCpf: "responsavelCpf";
    readonly responsavelTelefone: "responsavelTelefone";
    readonly responsavelEmail: "responsavelEmail";
    readonly senhaHash: "senhaHash";
    readonly nomeStartup: "nomeStartup";
    readonly categoria: "categoria";
    readonly cidadeOperacao: "cidadeOperacao";
    readonly site: "site";
    readonly descricao: "descricao";
    readonly logoUrl: "logoUrl";
    readonly pitchCurto: "pitchCurto";
    readonly videoUrl: "videoUrl";
    readonly metricasJson: "metricasJson";
    readonly etapaAtual: "etapaAtual";
    readonly status: "status";
    readonly slugPublico: "slugPublico";
    readonly lgpdAceitoEm: "lgpdAceitoEm";
    readonly cpfUnicoConfirmado: "cpfUnicoConfirmado";
    readonly confirmadoEm: "confirmadoEm";
    readonly origem: "origem";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type InscricaoStartupScalarFieldEnum = (typeof InscricaoStartupScalarFieldEnum)[keyof typeof InscricaoStartupScalarFieldEnum];
export declare const StartupComunidadeBadgeScalarFieldEnum: {
    readonly id: "id";
    readonly edicaoId: "edicaoId";
    readonly inscricaoStartupId: "inscricaoStartupId";
    readonly comunidadeId: "comunidadeId";
    readonly createdAt: "createdAt";
};
export type StartupComunidadeBadgeScalarFieldEnum = (typeof StartupComunidadeBadgeScalarFieldEnum)[keyof typeof StartupComunidadeBadgeScalarFieldEnum];
export declare const CategoriaScalarFieldEnum: {
    readonly id: "id";
    readonly edicaoId: "edicaoId";
    readonly nome: "nome";
    readonly ordem: "ordem";
};
export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum];
export declare const IndicacaoScalarFieldEnum: {
    readonly id: "id";
    readonly edicaoId: "edicaoId";
    readonly categoriaId: "categoriaId";
    readonly inscricaoStartupId: "inscricaoStartupId";
    readonly indicanteLiderId: "indicanteLiderId";
    readonly indicanteInscricaoId: "indicanteInscricaoId";
    readonly justificativa: "justificativa";
    readonly status: "status";
    readonly createdAt: "createdAt";
};
export type IndicacaoScalarFieldEnum = (typeof IndicacaoScalarFieldEnum)[keyof typeof IndicacaoScalarFieldEnum];
export declare const MembroColegioScalarFieldEnum: {
    readonly id: "id";
    readonly edicaoId: "edicaoId";
    readonly comunidadeId: "comunidadeId";
    readonly liderId: "liderId";
    readonly apontadoEm: "apontadoEm";
    readonly ativo: "ativo";
};
export type MembroColegioScalarFieldEnum = (typeof MembroColegioScalarFieldEnum)[keyof typeof MembroColegioScalarFieldEnum];
export declare const SelecaoColegioScalarFieldEnum: {
    readonly id: "id";
    readonly edicaoId: "edicaoId";
    readonly categoriaId: "categoriaId";
    readonly inscricaoStartupId: "inscricaoStartupId";
    readonly membroColegioId: "membroColegioId";
    readonly status: "status";
    readonly conflitoInteresse: "conflitoInteresse";
    readonly createdAt: "createdAt";
};
export type SelecaoColegioScalarFieldEnum = (typeof SelecaoColegioScalarFieldEnum)[keyof typeof SelecaoColegioScalarFieldEnum];
export declare const FinalistaScalarFieldEnum: {
    readonly id: "id";
    readonly edicaoId: "edicaoId";
    readonly categoriaId: "categoriaId";
    readonly inscricaoStartupId: "inscricaoStartupId";
    readonly metaResumo: "metaResumo";
    readonly ativo: "ativo";
    readonly createdAt: "createdAt";
};
export type FinalistaScalarFieldEnum = (typeof FinalistaScalarFieldEnum)[keyof typeof FinalistaScalarFieldEnum];
export declare const VotoScalarFieldEnum: {
    readonly id: "id";
    readonly edicaoId: "edicaoId";
    readonly finalistaId: "finalistaId";
    readonly votanteNome: "votanteNome";
    readonly cpf: "cpf";
    readonly pessoaId: "pessoaId";
    readonly votanteLiderId: "votanteLiderId";
    readonly votanteInscricaoId: "votanteInscricaoId";
    readonly lgpdAceitoEm: "lgpdAceitoEm";
    readonly createdAt: "createdAt";
};
export type VotoScalarFieldEnum = (typeof VotoScalarFieldEnum)[keyof typeof VotoScalarFieldEnum];
export declare const ResultadoCategoriaScalarFieldEnum: {
    readonly id: "id";
    readonly edicaoId: "edicaoId";
    readonly categoriaId: "categoriaId";
    readonly finalistaId: "finalistaId";
    readonly totalVotos: "totalVotos";
    readonly publicadoEm: "publicadoEm";
    readonly validadoPorId: "validadoPorId";
    readonly createdAt: "createdAt";
};
export type ResultadoCategoriaScalarFieldEnum = (typeof ResultadoCategoriaScalarFieldEnum)[keyof typeof ResultadoCategoriaScalarFieldEnum];
export declare const AtaApuracaoScalarFieldEnum: {
    readonly id: "id";
    readonly edicaoId: "edicaoId";
    readonly conteudoMd: "conteudoMd";
    readonly publicadaEm: "publicadaEm";
    readonly createdAt: "createdAt";
};
export type AtaApuracaoScalarFieldEnum = (typeof AtaApuracaoScalarFieldEnum)[keyof typeof AtaApuracaoScalarFieldEnum];
export declare const TestemunhaApuracaoScalarFieldEnum: {
    readonly id: "id";
    readonly edicaoId: "edicaoId";
    readonly nome: "nome";
    readonly email: "email";
    readonly organizacao: "organizacao";
    readonly token: "token";
    readonly status: "status";
    readonly convidadaEm: "convidadaEm";
    readonly confirmadaEm: "confirmadaEm";
    readonly observacao: "observacao";
    readonly createdAt: "createdAt";
};
export type TestemunhaApuracaoScalarFieldEnum = (typeof TestemunhaApuracaoScalarFieldEnum)[keyof typeof TestemunhaApuracaoScalarFieldEnum];
export declare const AuditoriaEventoScalarFieldEnum: {
    readonly id: "id";
    readonly edicaoId: "edicaoId";
    readonly tipo: "tipo";
    readonly atorPapel: "atorPapel";
    readonly atorId: "atorId";
    readonly cpfHash: "cpfHash";
    readonly payload: "payload";
    readonly createdAt: "createdAt";
};
export type AuditoriaEventoScalarFieldEnum = (typeof AuditoriaEventoScalarFieldEnum)[keyof typeof AuditoriaEventoScalarFieldEnum];
export declare const SolicitacaoCadastroScalarFieldEnum: {
    readonly id: "id";
    readonly edicaoId: "edicaoId";
    readonly comunidadeId: "comunidadeId";
    readonly tipo: "tipo";
    readonly status: "status";
    readonly nome: "nome";
    readonly cpf: "cpf";
    readonly email: "email";
    readonly telefone: "telefone";
    readonly senhaHash: "senhaHash";
    readonly lgpdAceitoEm: "lgpdAceitoEm";
    readonly nomeStartup: "nomeStartup";
    readonly categoria: "categoria";
    readonly cidadeOperacao: "cidadeOperacao";
    readonly site: "site";
    readonly descricao: "descricao";
    readonly cpfUnicoConfirmado: "cpfUnicoConfirmado";
    readonly revisadoPorLiderId: "revisadoPorLiderId";
    readonly revisadoEm: "revisadoEm";
    readonly motivoRejeicao: "motivoRejeicao";
    readonly inscricaoStartupId: "inscricaoStartupId";
    readonly liderCriadoId: "liderCriadoId";
    readonly createdAt: "createdAt";
};
export type SolicitacaoCadastroScalarFieldEnum = (typeof SolicitacaoCadastroScalarFieldEnum)[keyof typeof SolicitacaoCadastroScalarFieldEnum];
export declare const ImportacaoLoteScalarFieldEnum: {
    readonly id: "id";
    readonly edicaoId: "edicaoId";
    readonly arquivoNome: "arquivoNome";
    readonly totalLinhas: "totalLinhas";
    readonly importadas: "importadas";
    readonly ignoradas: "ignoradas";
    readonly errosJson: "errosJson";
    readonly adminId: "adminId";
    readonly createdAt: "createdAt";
};
export type ImportacaoLoteScalarFieldEnum = (typeof ImportacaoLoteScalarFieldEnum)[keyof typeof ImportacaoLoteScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const JsonNullValueInput: {
    readonly JsonNull: runtime.JsonNullClass;
};
export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type EnumFasePremioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FasePremio'>;
export type ListEnumFasePremioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FasePremio[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type EnumTipoConviteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoConvite'>;
export type ListEnumTipoConviteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoConvite[]'>;
export type EnumTipoLiderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoLider'>;
export type ListEnumTipoLiderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoLider[]'>;
export type EnumStatusParticipanteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusParticipante'>;
export type ListEnumStatusParticipanteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusParticipante[]'>;
export type EnumStatusInscricaoStartupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusInscricaoStartup'>;
export type ListEnumStatusInscricaoStartupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusInscricaoStartup[]'>;
export type EnumOrigemCadastroFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrigemCadastro'>;
export type ListEnumOrigemCadastroFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrigemCadastro[]'>;
export type EnumStatusIndicacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusIndicacao'>;
export type ListEnumStatusIndicacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusIndicacao[]'>;
export type EnumStatusSelecaoColegioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSelecaoColegio'>;
export type ListEnumStatusSelecaoColegioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSelecaoColegio[]'>;
export type EnumStatusTestemunhaApuracaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusTestemunhaApuracao'>;
export type ListEnumStatusTestemunhaApuracaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusTestemunhaApuracao[]'>;
export type EnumTipoAuditoriaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoAuditoria'>;
export type ListEnumTipoAuditoriaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoAuditoria[]'>;
export type EnumPapelAuditoriaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PapelAuditoria'>;
export type ListEnumPapelAuditoriaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PapelAuditoria[]'>;
export type EnumTipoSolicitacaoCadastroFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoSolicitacaoCadastro'>;
export type ListEnumTipoSolicitacaoCadastroFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoSolicitacaoCadastro[]'>;
export type EnumStatusSolicitacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSolicitacao'>;
export type ListEnumStatusSolicitacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusSolicitacao[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    edicao?: Prisma.EdicaoOmit;
    regulamentoVersao?: Prisma.RegulamentoVersaoOmit;
    pessoa?: Prisma.PessoaOmit;
    usuarioAdmin?: Prisma.UsuarioAdminOmit;
    comunidade?: Prisma.ComunidadeOmit;
    convite?: Prisma.ConviteOmit;
    lider?: Prisma.LiderOmit;
    linkComunidade?: Prisma.LinkComunidadeOmit;
    inscricaoStartup?: Prisma.InscricaoStartupOmit;
    startupComunidadeBadge?: Prisma.StartupComunidadeBadgeOmit;
    categoria?: Prisma.CategoriaOmit;
    indicacao?: Prisma.IndicacaoOmit;
    membroColegio?: Prisma.MembroColegioOmit;
    selecaoColegio?: Prisma.SelecaoColegioOmit;
    finalista?: Prisma.FinalistaOmit;
    voto?: Prisma.VotoOmit;
    resultadoCategoria?: Prisma.ResultadoCategoriaOmit;
    ataApuracao?: Prisma.AtaApuracaoOmit;
    testemunhaApuracao?: Prisma.TestemunhaApuracaoOmit;
    auditoriaEvento?: Prisma.AuditoriaEventoOmit;
    solicitacaoCadastro?: Prisma.SolicitacaoCadastroOmit;
    importacaoLote?: Prisma.ImportacaoLoteOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
