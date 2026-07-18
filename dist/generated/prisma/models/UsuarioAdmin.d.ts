import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type UsuarioAdminModel = runtime.Types.Result.DefaultSelection<Prisma.$UsuarioAdminPayload>;
export type AggregateUsuarioAdmin = {
    _count: UsuarioAdminCountAggregateOutputType | null;
    _min: UsuarioAdminMinAggregateOutputType | null;
    _max: UsuarioAdminMaxAggregateOutputType | null;
};
export type UsuarioAdminMinAggregateOutputType = {
    id: string | null;
    nome: string | null;
    email: string | null;
    senhaHash: string | null;
    ativo: boolean | null;
    createdAt: Date | null;
};
export type UsuarioAdminMaxAggregateOutputType = {
    id: string | null;
    nome: string | null;
    email: string | null;
    senhaHash: string | null;
    ativo: boolean | null;
    createdAt: Date | null;
};
export type UsuarioAdminCountAggregateOutputType = {
    id: number;
    nome: number;
    email: number;
    senhaHash: number;
    ativo: number;
    createdAt: number;
    _all: number;
};
export type UsuarioAdminMinAggregateInputType = {
    id?: true;
    nome?: true;
    email?: true;
    senhaHash?: true;
    ativo?: true;
    createdAt?: true;
};
export type UsuarioAdminMaxAggregateInputType = {
    id?: true;
    nome?: true;
    email?: true;
    senhaHash?: true;
    ativo?: true;
    createdAt?: true;
};
export type UsuarioAdminCountAggregateInputType = {
    id?: true;
    nome?: true;
    email?: true;
    senhaHash?: true;
    ativo?: true;
    createdAt?: true;
    _all?: true;
};
export type UsuarioAdminAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioAdminWhereInput;
    orderBy?: Prisma.UsuarioAdminOrderByWithRelationInput | Prisma.UsuarioAdminOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioAdminWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsuarioAdminCountAggregateInputType;
    _min?: UsuarioAdminMinAggregateInputType;
    _max?: UsuarioAdminMaxAggregateInputType;
};
export type GetUsuarioAdminAggregateType<T extends UsuarioAdminAggregateArgs> = {
    [P in keyof T & keyof AggregateUsuarioAdmin]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsuarioAdmin[P]> : Prisma.GetScalarType<T[P], AggregateUsuarioAdmin[P]>;
};
export type UsuarioAdminGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioAdminWhereInput;
    orderBy?: Prisma.UsuarioAdminOrderByWithAggregationInput | Prisma.UsuarioAdminOrderByWithAggregationInput[];
    by: Prisma.UsuarioAdminScalarFieldEnum[] | Prisma.UsuarioAdminScalarFieldEnum;
    having?: Prisma.UsuarioAdminScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsuarioAdminCountAggregateInputType | true;
    _min?: UsuarioAdminMinAggregateInputType;
    _max?: UsuarioAdminMaxAggregateInputType;
};
export type UsuarioAdminGroupByOutputType = {
    id: string;
    nome: string;
    email: string;
    senhaHash: string;
    ativo: boolean;
    createdAt: Date;
    _count: UsuarioAdminCountAggregateOutputType | null;
    _min: UsuarioAdminMinAggregateOutputType | null;
    _max: UsuarioAdminMaxAggregateOutputType | null;
};
export type GetUsuarioAdminGroupByPayload<T extends UsuarioAdminGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsuarioAdminGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsuarioAdminGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsuarioAdminGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsuarioAdminGroupByOutputType[P]>;
}>>;
export type UsuarioAdminWhereInput = {
    AND?: Prisma.UsuarioAdminWhereInput | Prisma.UsuarioAdminWhereInput[];
    OR?: Prisma.UsuarioAdminWhereInput[];
    NOT?: Prisma.UsuarioAdminWhereInput | Prisma.UsuarioAdminWhereInput[];
    id?: Prisma.StringFilter<"UsuarioAdmin"> | string;
    nome?: Prisma.StringFilter<"UsuarioAdmin"> | string;
    email?: Prisma.StringFilter<"UsuarioAdmin"> | string;
    senhaHash?: Prisma.StringFilter<"UsuarioAdmin"> | string;
    ativo?: Prisma.BoolFilter<"UsuarioAdmin"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"UsuarioAdmin"> | Date | string;
    comunidadesCriadas?: Prisma.ComunidadeListRelationFilter;
    convitesCriados?: Prisma.ConviteListRelationFilter;
    importacoesLote?: Prisma.ImportacaoLoteListRelationFilter;
    resultadosValidados?: Prisma.ResultadoCategoriaListRelationFilter;
};
export type UsuarioAdminOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    senhaHash?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    comunidadesCriadas?: Prisma.ComunidadeOrderByRelationAggregateInput;
    convitesCriados?: Prisma.ConviteOrderByRelationAggregateInput;
    importacoesLote?: Prisma.ImportacaoLoteOrderByRelationAggregateInput;
    resultadosValidados?: Prisma.ResultadoCategoriaOrderByRelationAggregateInput;
};
export type UsuarioAdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UsuarioAdminWhereInput | Prisma.UsuarioAdminWhereInput[];
    OR?: Prisma.UsuarioAdminWhereInput[];
    NOT?: Prisma.UsuarioAdminWhereInput | Prisma.UsuarioAdminWhereInput[];
    nome?: Prisma.StringFilter<"UsuarioAdmin"> | string;
    senhaHash?: Prisma.StringFilter<"UsuarioAdmin"> | string;
    ativo?: Prisma.BoolFilter<"UsuarioAdmin"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"UsuarioAdmin"> | Date | string;
    comunidadesCriadas?: Prisma.ComunidadeListRelationFilter;
    convitesCriados?: Prisma.ConviteListRelationFilter;
    importacoesLote?: Prisma.ImportacaoLoteListRelationFilter;
    resultadosValidados?: Prisma.ResultadoCategoriaListRelationFilter;
}, "id" | "email">;
export type UsuarioAdminOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    senhaHash?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.UsuarioAdminCountOrderByAggregateInput;
    _max?: Prisma.UsuarioAdminMaxOrderByAggregateInput;
    _min?: Prisma.UsuarioAdminMinOrderByAggregateInput;
};
export type UsuarioAdminScalarWhereWithAggregatesInput = {
    AND?: Prisma.UsuarioAdminScalarWhereWithAggregatesInput | Prisma.UsuarioAdminScalarWhereWithAggregatesInput[];
    OR?: Prisma.UsuarioAdminScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UsuarioAdminScalarWhereWithAggregatesInput | Prisma.UsuarioAdminScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"UsuarioAdmin"> | string;
    nome?: Prisma.StringWithAggregatesFilter<"UsuarioAdmin"> | string;
    email?: Prisma.StringWithAggregatesFilter<"UsuarioAdmin"> | string;
    senhaHash?: Prisma.StringWithAggregatesFilter<"UsuarioAdmin"> | string;
    ativo?: Prisma.BoolWithAggregatesFilter<"UsuarioAdmin"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"UsuarioAdmin"> | Date | string;
};
export type UsuarioAdminCreateInput = {
    id?: string;
    nome: string;
    email: string;
    senhaHash: string;
    ativo?: boolean;
    createdAt?: Date | string;
    comunidadesCriadas?: Prisma.ComunidadeCreateNestedManyWithoutCriadorInput;
    convitesCriados?: Prisma.ConviteCreateNestedManyWithoutCriadoPorInput;
    importacoesLote?: Prisma.ImportacaoLoteCreateNestedManyWithoutAdminInput;
    resultadosValidados?: Prisma.ResultadoCategoriaCreateNestedManyWithoutValidadoPorInput;
};
export type UsuarioAdminUncheckedCreateInput = {
    id?: string;
    nome: string;
    email: string;
    senhaHash: string;
    ativo?: boolean;
    createdAt?: Date | string;
    comunidadesCriadas?: Prisma.ComunidadeUncheckedCreateNestedManyWithoutCriadorInput;
    convitesCriados?: Prisma.ConviteUncheckedCreateNestedManyWithoutCriadoPorInput;
    importacoesLote?: Prisma.ImportacaoLoteUncheckedCreateNestedManyWithoutAdminInput;
    resultadosValidados?: Prisma.ResultadoCategoriaUncheckedCreateNestedManyWithoutValidadoPorInput;
};
export type UsuarioAdminUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comunidadesCriadas?: Prisma.ComunidadeUpdateManyWithoutCriadorNestedInput;
    convitesCriados?: Prisma.ConviteUpdateManyWithoutCriadoPorNestedInput;
    importacoesLote?: Prisma.ImportacaoLoteUpdateManyWithoutAdminNestedInput;
    resultadosValidados?: Prisma.ResultadoCategoriaUpdateManyWithoutValidadoPorNestedInput;
};
export type UsuarioAdminUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comunidadesCriadas?: Prisma.ComunidadeUncheckedUpdateManyWithoutCriadorNestedInput;
    convitesCriados?: Prisma.ConviteUncheckedUpdateManyWithoutCriadoPorNestedInput;
    importacoesLote?: Prisma.ImportacaoLoteUncheckedUpdateManyWithoutAdminNestedInput;
    resultadosValidados?: Prisma.ResultadoCategoriaUncheckedUpdateManyWithoutValidadoPorNestedInput;
};
export type UsuarioAdminCreateManyInput = {
    id?: string;
    nome: string;
    email: string;
    senhaHash: string;
    ativo?: boolean;
    createdAt?: Date | string;
};
export type UsuarioAdminUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsuarioAdminUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsuarioAdminCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    senhaHash?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UsuarioAdminMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    senhaHash?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UsuarioAdminMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    senhaHash?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UsuarioAdminNullableScalarRelationFilter = {
    is?: Prisma.UsuarioAdminWhereInput | null;
    isNot?: Prisma.UsuarioAdminWhereInput | null;
};
export type UsuarioAdminCreateNestedOneWithoutComunidadesCriadasInput = {
    create?: Prisma.XOR<Prisma.UsuarioAdminCreateWithoutComunidadesCriadasInput, Prisma.UsuarioAdminUncheckedCreateWithoutComunidadesCriadasInput>;
    connectOrCreate?: Prisma.UsuarioAdminCreateOrConnectWithoutComunidadesCriadasInput;
    connect?: Prisma.UsuarioAdminWhereUniqueInput;
};
export type UsuarioAdminUpdateOneWithoutComunidadesCriadasNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioAdminCreateWithoutComunidadesCriadasInput, Prisma.UsuarioAdminUncheckedCreateWithoutComunidadesCriadasInput>;
    connectOrCreate?: Prisma.UsuarioAdminCreateOrConnectWithoutComunidadesCriadasInput;
    upsert?: Prisma.UsuarioAdminUpsertWithoutComunidadesCriadasInput;
    disconnect?: Prisma.UsuarioAdminWhereInput | boolean;
    delete?: Prisma.UsuarioAdminWhereInput | boolean;
    connect?: Prisma.UsuarioAdminWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioAdminUpdateToOneWithWhereWithoutComunidadesCriadasInput, Prisma.UsuarioAdminUpdateWithoutComunidadesCriadasInput>, Prisma.UsuarioAdminUncheckedUpdateWithoutComunidadesCriadasInput>;
};
export type UsuarioAdminCreateNestedOneWithoutConvitesCriadosInput = {
    create?: Prisma.XOR<Prisma.UsuarioAdminCreateWithoutConvitesCriadosInput, Prisma.UsuarioAdminUncheckedCreateWithoutConvitesCriadosInput>;
    connectOrCreate?: Prisma.UsuarioAdminCreateOrConnectWithoutConvitesCriadosInput;
    connect?: Prisma.UsuarioAdminWhereUniqueInput;
};
export type UsuarioAdminUpdateOneWithoutConvitesCriadosNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioAdminCreateWithoutConvitesCriadosInput, Prisma.UsuarioAdminUncheckedCreateWithoutConvitesCriadosInput>;
    connectOrCreate?: Prisma.UsuarioAdminCreateOrConnectWithoutConvitesCriadosInput;
    upsert?: Prisma.UsuarioAdminUpsertWithoutConvitesCriadosInput;
    disconnect?: Prisma.UsuarioAdminWhereInput | boolean;
    delete?: Prisma.UsuarioAdminWhereInput | boolean;
    connect?: Prisma.UsuarioAdminWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioAdminUpdateToOneWithWhereWithoutConvitesCriadosInput, Prisma.UsuarioAdminUpdateWithoutConvitesCriadosInput>, Prisma.UsuarioAdminUncheckedUpdateWithoutConvitesCriadosInput>;
};
export type UsuarioAdminCreateNestedOneWithoutResultadosValidadosInput = {
    create?: Prisma.XOR<Prisma.UsuarioAdminCreateWithoutResultadosValidadosInput, Prisma.UsuarioAdminUncheckedCreateWithoutResultadosValidadosInput>;
    connectOrCreate?: Prisma.UsuarioAdminCreateOrConnectWithoutResultadosValidadosInput;
    connect?: Prisma.UsuarioAdminWhereUniqueInput;
};
export type UsuarioAdminUpdateOneWithoutResultadosValidadosNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioAdminCreateWithoutResultadosValidadosInput, Prisma.UsuarioAdminUncheckedCreateWithoutResultadosValidadosInput>;
    connectOrCreate?: Prisma.UsuarioAdminCreateOrConnectWithoutResultadosValidadosInput;
    upsert?: Prisma.UsuarioAdminUpsertWithoutResultadosValidadosInput;
    disconnect?: Prisma.UsuarioAdminWhereInput | boolean;
    delete?: Prisma.UsuarioAdminWhereInput | boolean;
    connect?: Prisma.UsuarioAdminWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioAdminUpdateToOneWithWhereWithoutResultadosValidadosInput, Prisma.UsuarioAdminUpdateWithoutResultadosValidadosInput>, Prisma.UsuarioAdminUncheckedUpdateWithoutResultadosValidadosInput>;
};
export type UsuarioAdminCreateNestedOneWithoutImportacoesLoteInput = {
    create?: Prisma.XOR<Prisma.UsuarioAdminCreateWithoutImportacoesLoteInput, Prisma.UsuarioAdminUncheckedCreateWithoutImportacoesLoteInput>;
    connectOrCreate?: Prisma.UsuarioAdminCreateOrConnectWithoutImportacoesLoteInput;
    connect?: Prisma.UsuarioAdminWhereUniqueInput;
};
export type UsuarioAdminUpdateOneWithoutImportacoesLoteNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioAdminCreateWithoutImportacoesLoteInput, Prisma.UsuarioAdminUncheckedCreateWithoutImportacoesLoteInput>;
    connectOrCreate?: Prisma.UsuarioAdminCreateOrConnectWithoutImportacoesLoteInput;
    upsert?: Prisma.UsuarioAdminUpsertWithoutImportacoesLoteInput;
    disconnect?: Prisma.UsuarioAdminWhereInput | boolean;
    delete?: Prisma.UsuarioAdminWhereInput | boolean;
    connect?: Prisma.UsuarioAdminWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioAdminUpdateToOneWithWhereWithoutImportacoesLoteInput, Prisma.UsuarioAdminUpdateWithoutImportacoesLoteInput>, Prisma.UsuarioAdminUncheckedUpdateWithoutImportacoesLoteInput>;
};
export type UsuarioAdminCreateWithoutComunidadesCriadasInput = {
    id?: string;
    nome: string;
    email: string;
    senhaHash: string;
    ativo?: boolean;
    createdAt?: Date | string;
    convitesCriados?: Prisma.ConviteCreateNestedManyWithoutCriadoPorInput;
    importacoesLote?: Prisma.ImportacaoLoteCreateNestedManyWithoutAdminInput;
    resultadosValidados?: Prisma.ResultadoCategoriaCreateNestedManyWithoutValidadoPorInput;
};
export type UsuarioAdminUncheckedCreateWithoutComunidadesCriadasInput = {
    id?: string;
    nome: string;
    email: string;
    senhaHash: string;
    ativo?: boolean;
    createdAt?: Date | string;
    convitesCriados?: Prisma.ConviteUncheckedCreateNestedManyWithoutCriadoPorInput;
    importacoesLote?: Prisma.ImportacaoLoteUncheckedCreateNestedManyWithoutAdminInput;
    resultadosValidados?: Prisma.ResultadoCategoriaUncheckedCreateNestedManyWithoutValidadoPorInput;
};
export type UsuarioAdminCreateOrConnectWithoutComunidadesCriadasInput = {
    where: Prisma.UsuarioAdminWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioAdminCreateWithoutComunidadesCriadasInput, Prisma.UsuarioAdminUncheckedCreateWithoutComunidadesCriadasInput>;
};
export type UsuarioAdminUpsertWithoutComunidadesCriadasInput = {
    update: Prisma.XOR<Prisma.UsuarioAdminUpdateWithoutComunidadesCriadasInput, Prisma.UsuarioAdminUncheckedUpdateWithoutComunidadesCriadasInput>;
    create: Prisma.XOR<Prisma.UsuarioAdminCreateWithoutComunidadesCriadasInput, Prisma.UsuarioAdminUncheckedCreateWithoutComunidadesCriadasInput>;
    where?: Prisma.UsuarioAdminWhereInput;
};
export type UsuarioAdminUpdateToOneWithWhereWithoutComunidadesCriadasInput = {
    where?: Prisma.UsuarioAdminWhereInput;
    data: Prisma.XOR<Prisma.UsuarioAdminUpdateWithoutComunidadesCriadasInput, Prisma.UsuarioAdminUncheckedUpdateWithoutComunidadesCriadasInput>;
};
export type UsuarioAdminUpdateWithoutComunidadesCriadasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    convitesCriados?: Prisma.ConviteUpdateManyWithoutCriadoPorNestedInput;
    importacoesLote?: Prisma.ImportacaoLoteUpdateManyWithoutAdminNestedInput;
    resultadosValidados?: Prisma.ResultadoCategoriaUpdateManyWithoutValidadoPorNestedInput;
};
export type UsuarioAdminUncheckedUpdateWithoutComunidadesCriadasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    convitesCriados?: Prisma.ConviteUncheckedUpdateManyWithoutCriadoPorNestedInput;
    importacoesLote?: Prisma.ImportacaoLoteUncheckedUpdateManyWithoutAdminNestedInput;
    resultadosValidados?: Prisma.ResultadoCategoriaUncheckedUpdateManyWithoutValidadoPorNestedInput;
};
export type UsuarioAdminCreateWithoutConvitesCriadosInput = {
    id?: string;
    nome: string;
    email: string;
    senhaHash: string;
    ativo?: boolean;
    createdAt?: Date | string;
    comunidadesCriadas?: Prisma.ComunidadeCreateNestedManyWithoutCriadorInput;
    importacoesLote?: Prisma.ImportacaoLoteCreateNestedManyWithoutAdminInput;
    resultadosValidados?: Prisma.ResultadoCategoriaCreateNestedManyWithoutValidadoPorInput;
};
export type UsuarioAdminUncheckedCreateWithoutConvitesCriadosInput = {
    id?: string;
    nome: string;
    email: string;
    senhaHash: string;
    ativo?: boolean;
    createdAt?: Date | string;
    comunidadesCriadas?: Prisma.ComunidadeUncheckedCreateNestedManyWithoutCriadorInput;
    importacoesLote?: Prisma.ImportacaoLoteUncheckedCreateNestedManyWithoutAdminInput;
    resultadosValidados?: Prisma.ResultadoCategoriaUncheckedCreateNestedManyWithoutValidadoPorInput;
};
export type UsuarioAdminCreateOrConnectWithoutConvitesCriadosInput = {
    where: Prisma.UsuarioAdminWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioAdminCreateWithoutConvitesCriadosInput, Prisma.UsuarioAdminUncheckedCreateWithoutConvitesCriadosInput>;
};
export type UsuarioAdminUpsertWithoutConvitesCriadosInput = {
    update: Prisma.XOR<Prisma.UsuarioAdminUpdateWithoutConvitesCriadosInput, Prisma.UsuarioAdminUncheckedUpdateWithoutConvitesCriadosInput>;
    create: Prisma.XOR<Prisma.UsuarioAdminCreateWithoutConvitesCriadosInput, Prisma.UsuarioAdminUncheckedCreateWithoutConvitesCriadosInput>;
    where?: Prisma.UsuarioAdminWhereInput;
};
export type UsuarioAdminUpdateToOneWithWhereWithoutConvitesCriadosInput = {
    where?: Prisma.UsuarioAdminWhereInput;
    data: Prisma.XOR<Prisma.UsuarioAdminUpdateWithoutConvitesCriadosInput, Prisma.UsuarioAdminUncheckedUpdateWithoutConvitesCriadosInput>;
};
export type UsuarioAdminUpdateWithoutConvitesCriadosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comunidadesCriadas?: Prisma.ComunidadeUpdateManyWithoutCriadorNestedInput;
    importacoesLote?: Prisma.ImportacaoLoteUpdateManyWithoutAdminNestedInput;
    resultadosValidados?: Prisma.ResultadoCategoriaUpdateManyWithoutValidadoPorNestedInput;
};
export type UsuarioAdminUncheckedUpdateWithoutConvitesCriadosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comunidadesCriadas?: Prisma.ComunidadeUncheckedUpdateManyWithoutCriadorNestedInput;
    importacoesLote?: Prisma.ImportacaoLoteUncheckedUpdateManyWithoutAdminNestedInput;
    resultadosValidados?: Prisma.ResultadoCategoriaUncheckedUpdateManyWithoutValidadoPorNestedInput;
};
export type UsuarioAdminCreateWithoutResultadosValidadosInput = {
    id?: string;
    nome: string;
    email: string;
    senhaHash: string;
    ativo?: boolean;
    createdAt?: Date | string;
    comunidadesCriadas?: Prisma.ComunidadeCreateNestedManyWithoutCriadorInput;
    convitesCriados?: Prisma.ConviteCreateNestedManyWithoutCriadoPorInput;
    importacoesLote?: Prisma.ImportacaoLoteCreateNestedManyWithoutAdminInput;
};
export type UsuarioAdminUncheckedCreateWithoutResultadosValidadosInput = {
    id?: string;
    nome: string;
    email: string;
    senhaHash: string;
    ativo?: boolean;
    createdAt?: Date | string;
    comunidadesCriadas?: Prisma.ComunidadeUncheckedCreateNestedManyWithoutCriadorInput;
    convitesCriados?: Prisma.ConviteUncheckedCreateNestedManyWithoutCriadoPorInput;
    importacoesLote?: Prisma.ImportacaoLoteUncheckedCreateNestedManyWithoutAdminInput;
};
export type UsuarioAdminCreateOrConnectWithoutResultadosValidadosInput = {
    where: Prisma.UsuarioAdminWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioAdminCreateWithoutResultadosValidadosInput, Prisma.UsuarioAdminUncheckedCreateWithoutResultadosValidadosInput>;
};
export type UsuarioAdminUpsertWithoutResultadosValidadosInput = {
    update: Prisma.XOR<Prisma.UsuarioAdminUpdateWithoutResultadosValidadosInput, Prisma.UsuarioAdminUncheckedUpdateWithoutResultadosValidadosInput>;
    create: Prisma.XOR<Prisma.UsuarioAdminCreateWithoutResultadosValidadosInput, Prisma.UsuarioAdminUncheckedCreateWithoutResultadosValidadosInput>;
    where?: Prisma.UsuarioAdminWhereInput;
};
export type UsuarioAdminUpdateToOneWithWhereWithoutResultadosValidadosInput = {
    where?: Prisma.UsuarioAdminWhereInput;
    data: Prisma.XOR<Prisma.UsuarioAdminUpdateWithoutResultadosValidadosInput, Prisma.UsuarioAdminUncheckedUpdateWithoutResultadosValidadosInput>;
};
export type UsuarioAdminUpdateWithoutResultadosValidadosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comunidadesCriadas?: Prisma.ComunidadeUpdateManyWithoutCriadorNestedInput;
    convitesCriados?: Prisma.ConviteUpdateManyWithoutCriadoPorNestedInput;
    importacoesLote?: Prisma.ImportacaoLoteUpdateManyWithoutAdminNestedInput;
};
export type UsuarioAdminUncheckedUpdateWithoutResultadosValidadosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comunidadesCriadas?: Prisma.ComunidadeUncheckedUpdateManyWithoutCriadorNestedInput;
    convitesCriados?: Prisma.ConviteUncheckedUpdateManyWithoutCriadoPorNestedInput;
    importacoesLote?: Prisma.ImportacaoLoteUncheckedUpdateManyWithoutAdminNestedInput;
};
export type UsuarioAdminCreateWithoutImportacoesLoteInput = {
    id?: string;
    nome: string;
    email: string;
    senhaHash: string;
    ativo?: boolean;
    createdAt?: Date | string;
    comunidadesCriadas?: Prisma.ComunidadeCreateNestedManyWithoutCriadorInput;
    convitesCriados?: Prisma.ConviteCreateNestedManyWithoutCriadoPorInput;
    resultadosValidados?: Prisma.ResultadoCategoriaCreateNestedManyWithoutValidadoPorInput;
};
export type UsuarioAdminUncheckedCreateWithoutImportacoesLoteInput = {
    id?: string;
    nome: string;
    email: string;
    senhaHash: string;
    ativo?: boolean;
    createdAt?: Date | string;
    comunidadesCriadas?: Prisma.ComunidadeUncheckedCreateNestedManyWithoutCriadorInput;
    convitesCriados?: Prisma.ConviteUncheckedCreateNestedManyWithoutCriadoPorInput;
    resultadosValidados?: Prisma.ResultadoCategoriaUncheckedCreateNestedManyWithoutValidadoPorInput;
};
export type UsuarioAdminCreateOrConnectWithoutImportacoesLoteInput = {
    where: Prisma.UsuarioAdminWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioAdminCreateWithoutImportacoesLoteInput, Prisma.UsuarioAdminUncheckedCreateWithoutImportacoesLoteInput>;
};
export type UsuarioAdminUpsertWithoutImportacoesLoteInput = {
    update: Prisma.XOR<Prisma.UsuarioAdminUpdateWithoutImportacoesLoteInput, Prisma.UsuarioAdminUncheckedUpdateWithoutImportacoesLoteInput>;
    create: Prisma.XOR<Prisma.UsuarioAdminCreateWithoutImportacoesLoteInput, Prisma.UsuarioAdminUncheckedCreateWithoutImportacoesLoteInput>;
    where?: Prisma.UsuarioAdminWhereInput;
};
export type UsuarioAdminUpdateToOneWithWhereWithoutImportacoesLoteInput = {
    where?: Prisma.UsuarioAdminWhereInput;
    data: Prisma.XOR<Prisma.UsuarioAdminUpdateWithoutImportacoesLoteInput, Prisma.UsuarioAdminUncheckedUpdateWithoutImportacoesLoteInput>;
};
export type UsuarioAdminUpdateWithoutImportacoesLoteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comunidadesCriadas?: Prisma.ComunidadeUpdateManyWithoutCriadorNestedInput;
    convitesCriados?: Prisma.ConviteUpdateManyWithoutCriadoPorNestedInput;
    resultadosValidados?: Prisma.ResultadoCategoriaUpdateManyWithoutValidadoPorNestedInput;
};
export type UsuarioAdminUncheckedUpdateWithoutImportacoesLoteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comunidadesCriadas?: Prisma.ComunidadeUncheckedUpdateManyWithoutCriadorNestedInput;
    convitesCriados?: Prisma.ConviteUncheckedUpdateManyWithoutCriadoPorNestedInput;
    resultadosValidados?: Prisma.ResultadoCategoriaUncheckedUpdateManyWithoutValidadoPorNestedInput;
};
export type UsuarioAdminCountOutputType = {
    comunidadesCriadas: number;
    convitesCriados: number;
    importacoesLote: number;
    resultadosValidados: number;
};
export type UsuarioAdminCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comunidadesCriadas?: boolean | UsuarioAdminCountOutputTypeCountComunidadesCriadasArgs;
    convitesCriados?: boolean | UsuarioAdminCountOutputTypeCountConvitesCriadosArgs;
    importacoesLote?: boolean | UsuarioAdminCountOutputTypeCountImportacoesLoteArgs;
    resultadosValidados?: boolean | UsuarioAdminCountOutputTypeCountResultadosValidadosArgs;
};
export type UsuarioAdminCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioAdminCountOutputTypeSelect<ExtArgs> | null;
};
export type UsuarioAdminCountOutputTypeCountComunidadesCriadasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ComunidadeWhereInput;
};
export type UsuarioAdminCountOutputTypeCountConvitesCriadosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConviteWhereInput;
};
export type UsuarioAdminCountOutputTypeCountImportacoesLoteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImportacaoLoteWhereInput;
};
export type UsuarioAdminCountOutputTypeCountResultadosValidadosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResultadoCategoriaWhereInput;
};
export type UsuarioAdminSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    email?: boolean;
    senhaHash?: boolean;
    ativo?: boolean;
    createdAt?: boolean;
    comunidadesCriadas?: boolean | Prisma.UsuarioAdmin$comunidadesCriadasArgs<ExtArgs>;
    convitesCriados?: boolean | Prisma.UsuarioAdmin$convitesCriadosArgs<ExtArgs>;
    importacoesLote?: boolean | Prisma.UsuarioAdmin$importacoesLoteArgs<ExtArgs>;
    resultadosValidados?: boolean | Prisma.UsuarioAdmin$resultadosValidadosArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuarioAdminCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuarioAdmin"]>;
export type UsuarioAdminSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    email?: boolean;
    senhaHash?: boolean;
    ativo?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["usuarioAdmin"]>;
export type UsuarioAdminSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nome?: boolean;
    email?: boolean;
    senhaHash?: boolean;
    ativo?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["usuarioAdmin"]>;
export type UsuarioAdminSelectScalar = {
    id?: boolean;
    nome?: boolean;
    email?: boolean;
    senhaHash?: boolean;
    ativo?: boolean;
    createdAt?: boolean;
};
export type UsuarioAdminOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nome" | "email" | "senhaHash" | "ativo" | "createdAt", ExtArgs["result"]["usuarioAdmin"]>;
export type UsuarioAdminInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    comunidadesCriadas?: boolean | Prisma.UsuarioAdmin$comunidadesCriadasArgs<ExtArgs>;
    convitesCriados?: boolean | Prisma.UsuarioAdmin$convitesCriadosArgs<ExtArgs>;
    importacoesLote?: boolean | Prisma.UsuarioAdmin$importacoesLoteArgs<ExtArgs>;
    resultadosValidados?: boolean | Prisma.UsuarioAdmin$resultadosValidadosArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuarioAdminCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UsuarioAdminIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UsuarioAdminIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UsuarioAdminPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "UsuarioAdmin";
    objects: {
        comunidadesCriadas: Prisma.$ComunidadePayload<ExtArgs>[];
        convitesCriados: Prisma.$ConvitePayload<ExtArgs>[];
        importacoesLote: Prisma.$ImportacaoLotePayload<ExtArgs>[];
        resultadosValidados: Prisma.$ResultadoCategoriaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nome: string;
        email: string;
        senhaHash: string;
        ativo: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["usuarioAdmin"]>;
    composites: {};
};
export type UsuarioAdminGetPayload<S extends boolean | null | undefined | UsuarioAdminDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload, S>;
export type UsuarioAdminCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UsuarioAdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsuarioAdminCountAggregateInputType | true;
};
export interface UsuarioAdminDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['UsuarioAdmin'];
        meta: {
            name: 'UsuarioAdmin';
        };
    };
    findUnique<T extends UsuarioAdminFindUniqueArgs>(args: Prisma.SelectSubset<T, UsuarioAdminFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UsuarioAdminClient<runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UsuarioAdminFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UsuarioAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuarioAdminClient<runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UsuarioAdminFindFirstArgs>(args?: Prisma.SelectSubset<T, UsuarioAdminFindFirstArgs<ExtArgs>>): Prisma.Prisma__UsuarioAdminClient<runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UsuarioAdminFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UsuarioAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuarioAdminClient<runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UsuarioAdminFindManyArgs>(args?: Prisma.SelectSubset<T, UsuarioAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UsuarioAdminCreateArgs>(args: Prisma.SelectSubset<T, UsuarioAdminCreateArgs<ExtArgs>>): Prisma.Prisma__UsuarioAdminClient<runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UsuarioAdminCreateManyArgs>(args?: Prisma.SelectSubset<T, UsuarioAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UsuarioAdminCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UsuarioAdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UsuarioAdminDeleteArgs>(args: Prisma.SelectSubset<T, UsuarioAdminDeleteArgs<ExtArgs>>): Prisma.Prisma__UsuarioAdminClient<runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UsuarioAdminUpdateArgs>(args: Prisma.SelectSubset<T, UsuarioAdminUpdateArgs<ExtArgs>>): Prisma.Prisma__UsuarioAdminClient<runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UsuarioAdminDeleteManyArgs>(args?: Prisma.SelectSubset<T, UsuarioAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UsuarioAdminUpdateManyArgs>(args: Prisma.SelectSubset<T, UsuarioAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UsuarioAdminUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UsuarioAdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UsuarioAdminUpsertArgs>(args: Prisma.SelectSubset<T, UsuarioAdminUpsertArgs<ExtArgs>>): Prisma.Prisma__UsuarioAdminClient<runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UsuarioAdminCountArgs>(args?: Prisma.Subset<T, UsuarioAdminCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsuarioAdminCountAggregateOutputType> : number>;
    aggregate<T extends UsuarioAdminAggregateArgs>(args: Prisma.Subset<T, UsuarioAdminAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAdminAggregateType<T>>;
    groupBy<T extends UsuarioAdminGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UsuarioAdminGroupByArgs['orderBy'];
    } : {
        orderBy?: UsuarioAdminGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UsuarioAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UsuarioAdminFieldRefs;
}
export interface Prisma__UsuarioAdminClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    comunidadesCriadas<T extends Prisma.UsuarioAdmin$comunidadesCriadasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioAdmin$comunidadesCriadasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    convitesCriados<T extends Prisma.UsuarioAdmin$convitesCriadosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioAdmin$convitesCriadosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    importacoesLote<T extends Prisma.UsuarioAdmin$importacoesLoteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioAdmin$importacoesLoteArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImportacaoLotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    resultadosValidados<T extends Prisma.UsuarioAdmin$resultadosValidadosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioAdmin$resultadosValidadosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResultadoCategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UsuarioAdminFieldRefs {
    readonly id: Prisma.FieldRef<"UsuarioAdmin", 'String'>;
    readonly nome: Prisma.FieldRef<"UsuarioAdmin", 'String'>;
    readonly email: Prisma.FieldRef<"UsuarioAdmin", 'String'>;
    readonly senhaHash: Prisma.FieldRef<"UsuarioAdmin", 'String'>;
    readonly ativo: Prisma.FieldRef<"UsuarioAdmin", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"UsuarioAdmin", 'DateTime'>;
}
export type UsuarioAdminFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioAdminSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    include?: Prisma.UsuarioAdminInclude<ExtArgs> | null;
    where: Prisma.UsuarioAdminWhereUniqueInput;
};
export type UsuarioAdminFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioAdminSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    include?: Prisma.UsuarioAdminInclude<ExtArgs> | null;
    where: Prisma.UsuarioAdminWhereUniqueInput;
};
export type UsuarioAdminFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioAdminSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    include?: Prisma.UsuarioAdminInclude<ExtArgs> | null;
    where?: Prisma.UsuarioAdminWhereInput;
    orderBy?: Prisma.UsuarioAdminOrderByWithRelationInput | Prisma.UsuarioAdminOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioAdminWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioAdminScalarFieldEnum | Prisma.UsuarioAdminScalarFieldEnum[];
};
export type UsuarioAdminFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioAdminSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    include?: Prisma.UsuarioAdminInclude<ExtArgs> | null;
    where?: Prisma.UsuarioAdminWhereInput;
    orderBy?: Prisma.UsuarioAdminOrderByWithRelationInput | Prisma.UsuarioAdminOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioAdminWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioAdminScalarFieldEnum | Prisma.UsuarioAdminScalarFieldEnum[];
};
export type UsuarioAdminFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioAdminSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    include?: Prisma.UsuarioAdminInclude<ExtArgs> | null;
    where?: Prisma.UsuarioAdminWhereInput;
    orderBy?: Prisma.UsuarioAdminOrderByWithRelationInput | Prisma.UsuarioAdminOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioAdminWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioAdminScalarFieldEnum | Prisma.UsuarioAdminScalarFieldEnum[];
};
export type UsuarioAdminCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioAdminSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    include?: Prisma.UsuarioAdminInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioAdminCreateInput, Prisma.UsuarioAdminUncheckedCreateInput>;
};
export type UsuarioAdminCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UsuarioAdminCreateManyInput | Prisma.UsuarioAdminCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UsuarioAdminCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioAdminSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    data: Prisma.UsuarioAdminCreateManyInput | Prisma.UsuarioAdminCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UsuarioAdminUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioAdminSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    include?: Prisma.UsuarioAdminInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioAdminUpdateInput, Prisma.UsuarioAdminUncheckedUpdateInput>;
    where: Prisma.UsuarioAdminWhereUniqueInput;
};
export type UsuarioAdminUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UsuarioAdminUpdateManyMutationInput, Prisma.UsuarioAdminUncheckedUpdateManyInput>;
    where?: Prisma.UsuarioAdminWhereInput;
    limit?: number;
};
export type UsuarioAdminUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioAdminSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioAdminUpdateManyMutationInput, Prisma.UsuarioAdminUncheckedUpdateManyInput>;
    where?: Prisma.UsuarioAdminWhereInput;
    limit?: number;
};
export type UsuarioAdminUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioAdminSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    include?: Prisma.UsuarioAdminInclude<ExtArgs> | null;
    where: Prisma.UsuarioAdminWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioAdminCreateInput, Prisma.UsuarioAdminUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UsuarioAdminUpdateInput, Prisma.UsuarioAdminUncheckedUpdateInput>;
};
export type UsuarioAdminDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioAdminSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    include?: Prisma.UsuarioAdminInclude<ExtArgs> | null;
    where: Prisma.UsuarioAdminWhereUniqueInput;
};
export type UsuarioAdminDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioAdminWhereInput;
    limit?: number;
};
export type UsuarioAdmin$comunidadesCriadasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ComunidadeSelect<ExtArgs> | null;
    omit?: Prisma.ComunidadeOmit<ExtArgs> | null;
    include?: Prisma.ComunidadeInclude<ExtArgs> | null;
    where?: Prisma.ComunidadeWhereInput;
    orderBy?: Prisma.ComunidadeOrderByWithRelationInput | Prisma.ComunidadeOrderByWithRelationInput[];
    cursor?: Prisma.ComunidadeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ComunidadeScalarFieldEnum | Prisma.ComunidadeScalarFieldEnum[];
};
export type UsuarioAdmin$convitesCriadosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConviteSelect<ExtArgs> | null;
    omit?: Prisma.ConviteOmit<ExtArgs> | null;
    include?: Prisma.ConviteInclude<ExtArgs> | null;
    where?: Prisma.ConviteWhereInput;
    orderBy?: Prisma.ConviteOrderByWithRelationInput | Prisma.ConviteOrderByWithRelationInput[];
    cursor?: Prisma.ConviteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConviteScalarFieldEnum | Prisma.ConviteScalarFieldEnum[];
};
export type UsuarioAdmin$importacoesLoteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportacaoLoteSelect<ExtArgs> | null;
    omit?: Prisma.ImportacaoLoteOmit<ExtArgs> | null;
    include?: Prisma.ImportacaoLoteInclude<ExtArgs> | null;
    where?: Prisma.ImportacaoLoteWhereInput;
    orderBy?: Prisma.ImportacaoLoteOrderByWithRelationInput | Prisma.ImportacaoLoteOrderByWithRelationInput[];
    cursor?: Prisma.ImportacaoLoteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ImportacaoLoteScalarFieldEnum | Prisma.ImportacaoLoteScalarFieldEnum[];
};
export type UsuarioAdmin$resultadosValidadosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResultadoCategoriaSelect<ExtArgs> | null;
    omit?: Prisma.ResultadoCategoriaOmit<ExtArgs> | null;
    include?: Prisma.ResultadoCategoriaInclude<ExtArgs> | null;
    where?: Prisma.ResultadoCategoriaWhereInput;
    orderBy?: Prisma.ResultadoCategoriaOrderByWithRelationInput | Prisma.ResultadoCategoriaOrderByWithRelationInput[];
    cursor?: Prisma.ResultadoCategoriaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ResultadoCategoriaScalarFieldEnum | Prisma.ResultadoCategoriaScalarFieldEnum[];
};
export type UsuarioAdminDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioAdminSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    include?: Prisma.UsuarioAdminInclude<ExtArgs> | null;
};
