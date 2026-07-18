import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ImportacaoLoteModel = runtime.Types.Result.DefaultSelection<Prisma.$ImportacaoLotePayload>;
export type AggregateImportacaoLote = {
    _count: ImportacaoLoteCountAggregateOutputType | null;
    _avg: ImportacaoLoteAvgAggregateOutputType | null;
    _sum: ImportacaoLoteSumAggregateOutputType | null;
    _min: ImportacaoLoteMinAggregateOutputType | null;
    _max: ImportacaoLoteMaxAggregateOutputType | null;
};
export type ImportacaoLoteAvgAggregateOutputType = {
    totalLinhas: number | null;
    importadas: number | null;
    ignoradas: number | null;
};
export type ImportacaoLoteSumAggregateOutputType = {
    totalLinhas: number | null;
    importadas: number | null;
    ignoradas: number | null;
};
export type ImportacaoLoteMinAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    arquivoNome: string | null;
    totalLinhas: number | null;
    importadas: number | null;
    ignoradas: number | null;
    adminId: string | null;
    createdAt: Date | null;
};
export type ImportacaoLoteMaxAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    arquivoNome: string | null;
    totalLinhas: number | null;
    importadas: number | null;
    ignoradas: number | null;
    adminId: string | null;
    createdAt: Date | null;
};
export type ImportacaoLoteCountAggregateOutputType = {
    id: number;
    edicaoId: number;
    arquivoNome: number;
    totalLinhas: number;
    importadas: number;
    ignoradas: number;
    errosJson: number;
    adminId: number;
    createdAt: number;
    _all: number;
};
export type ImportacaoLoteAvgAggregateInputType = {
    totalLinhas?: true;
    importadas?: true;
    ignoradas?: true;
};
export type ImportacaoLoteSumAggregateInputType = {
    totalLinhas?: true;
    importadas?: true;
    ignoradas?: true;
};
export type ImportacaoLoteMinAggregateInputType = {
    id?: true;
    edicaoId?: true;
    arquivoNome?: true;
    totalLinhas?: true;
    importadas?: true;
    ignoradas?: true;
    adminId?: true;
    createdAt?: true;
};
export type ImportacaoLoteMaxAggregateInputType = {
    id?: true;
    edicaoId?: true;
    arquivoNome?: true;
    totalLinhas?: true;
    importadas?: true;
    ignoradas?: true;
    adminId?: true;
    createdAt?: true;
};
export type ImportacaoLoteCountAggregateInputType = {
    id?: true;
    edicaoId?: true;
    arquivoNome?: true;
    totalLinhas?: true;
    importadas?: true;
    ignoradas?: true;
    errosJson?: true;
    adminId?: true;
    createdAt?: true;
    _all?: true;
};
export type ImportacaoLoteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImportacaoLoteWhereInput;
    orderBy?: Prisma.ImportacaoLoteOrderByWithRelationInput | Prisma.ImportacaoLoteOrderByWithRelationInput[];
    cursor?: Prisma.ImportacaoLoteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ImportacaoLoteCountAggregateInputType;
    _avg?: ImportacaoLoteAvgAggregateInputType;
    _sum?: ImportacaoLoteSumAggregateInputType;
    _min?: ImportacaoLoteMinAggregateInputType;
    _max?: ImportacaoLoteMaxAggregateInputType;
};
export type GetImportacaoLoteAggregateType<T extends ImportacaoLoteAggregateArgs> = {
    [P in keyof T & keyof AggregateImportacaoLote]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateImportacaoLote[P]> : Prisma.GetScalarType<T[P], AggregateImportacaoLote[P]>;
};
export type ImportacaoLoteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImportacaoLoteWhereInput;
    orderBy?: Prisma.ImportacaoLoteOrderByWithAggregationInput | Prisma.ImportacaoLoteOrderByWithAggregationInput[];
    by: Prisma.ImportacaoLoteScalarFieldEnum[] | Prisma.ImportacaoLoteScalarFieldEnum;
    having?: Prisma.ImportacaoLoteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ImportacaoLoteCountAggregateInputType | true;
    _avg?: ImportacaoLoteAvgAggregateInputType;
    _sum?: ImportacaoLoteSumAggregateInputType;
    _min?: ImportacaoLoteMinAggregateInputType;
    _max?: ImportacaoLoteMaxAggregateInputType;
};
export type ImportacaoLoteGroupByOutputType = {
    id: string;
    edicaoId: string;
    arquivoNome: string;
    totalLinhas: number;
    importadas: number;
    ignoradas: number;
    errosJson: runtime.JsonValue | null;
    adminId: string | null;
    createdAt: Date;
    _count: ImportacaoLoteCountAggregateOutputType | null;
    _avg: ImportacaoLoteAvgAggregateOutputType | null;
    _sum: ImportacaoLoteSumAggregateOutputType | null;
    _min: ImportacaoLoteMinAggregateOutputType | null;
    _max: ImportacaoLoteMaxAggregateOutputType | null;
};
export type GetImportacaoLoteGroupByPayload<T extends ImportacaoLoteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ImportacaoLoteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ImportacaoLoteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ImportacaoLoteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ImportacaoLoteGroupByOutputType[P]>;
}>>;
export type ImportacaoLoteWhereInput = {
    AND?: Prisma.ImportacaoLoteWhereInput | Prisma.ImportacaoLoteWhereInput[];
    OR?: Prisma.ImportacaoLoteWhereInput[];
    NOT?: Prisma.ImportacaoLoteWhereInput | Prisma.ImportacaoLoteWhereInput[];
    id?: Prisma.StringFilter<"ImportacaoLote"> | string;
    edicaoId?: Prisma.StringFilter<"ImportacaoLote"> | string;
    arquivoNome?: Prisma.StringFilter<"ImportacaoLote"> | string;
    totalLinhas?: Prisma.IntFilter<"ImportacaoLote"> | number;
    importadas?: Prisma.IntFilter<"ImportacaoLote"> | number;
    ignoradas?: Prisma.IntFilter<"ImportacaoLote"> | number;
    errosJson?: Prisma.JsonNullableFilter<"ImportacaoLote">;
    adminId?: Prisma.StringNullableFilter<"ImportacaoLote"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ImportacaoLote"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
    admin?: Prisma.XOR<Prisma.UsuarioAdminNullableScalarRelationFilter, Prisma.UsuarioAdminWhereInput> | null;
};
export type ImportacaoLoteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    arquivoNome?: Prisma.SortOrder;
    totalLinhas?: Prisma.SortOrder;
    importadas?: Prisma.SortOrder;
    ignoradas?: Prisma.SortOrder;
    errosJson?: Prisma.SortOrderInput | Prisma.SortOrder;
    adminId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    edicao?: Prisma.EdicaoOrderByWithRelationInput;
    admin?: Prisma.UsuarioAdminOrderByWithRelationInput;
};
export type ImportacaoLoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ImportacaoLoteWhereInput | Prisma.ImportacaoLoteWhereInput[];
    OR?: Prisma.ImportacaoLoteWhereInput[];
    NOT?: Prisma.ImportacaoLoteWhereInput | Prisma.ImportacaoLoteWhereInput[];
    edicaoId?: Prisma.StringFilter<"ImportacaoLote"> | string;
    arquivoNome?: Prisma.StringFilter<"ImportacaoLote"> | string;
    totalLinhas?: Prisma.IntFilter<"ImportacaoLote"> | number;
    importadas?: Prisma.IntFilter<"ImportacaoLote"> | number;
    ignoradas?: Prisma.IntFilter<"ImportacaoLote"> | number;
    errosJson?: Prisma.JsonNullableFilter<"ImportacaoLote">;
    adminId?: Prisma.StringNullableFilter<"ImportacaoLote"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ImportacaoLote"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
    admin?: Prisma.XOR<Prisma.UsuarioAdminNullableScalarRelationFilter, Prisma.UsuarioAdminWhereInput> | null;
}, "id">;
export type ImportacaoLoteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    arquivoNome?: Prisma.SortOrder;
    totalLinhas?: Prisma.SortOrder;
    importadas?: Prisma.SortOrder;
    ignoradas?: Prisma.SortOrder;
    errosJson?: Prisma.SortOrderInput | Prisma.SortOrder;
    adminId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ImportacaoLoteCountOrderByAggregateInput;
    _avg?: Prisma.ImportacaoLoteAvgOrderByAggregateInput;
    _max?: Prisma.ImportacaoLoteMaxOrderByAggregateInput;
    _min?: Prisma.ImportacaoLoteMinOrderByAggregateInput;
    _sum?: Prisma.ImportacaoLoteSumOrderByAggregateInput;
};
export type ImportacaoLoteScalarWhereWithAggregatesInput = {
    AND?: Prisma.ImportacaoLoteScalarWhereWithAggregatesInput | Prisma.ImportacaoLoteScalarWhereWithAggregatesInput[];
    OR?: Prisma.ImportacaoLoteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ImportacaoLoteScalarWhereWithAggregatesInput | Prisma.ImportacaoLoteScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ImportacaoLote"> | string;
    edicaoId?: Prisma.StringWithAggregatesFilter<"ImportacaoLote"> | string;
    arquivoNome?: Prisma.StringWithAggregatesFilter<"ImportacaoLote"> | string;
    totalLinhas?: Prisma.IntWithAggregatesFilter<"ImportacaoLote"> | number;
    importadas?: Prisma.IntWithAggregatesFilter<"ImportacaoLote"> | number;
    ignoradas?: Prisma.IntWithAggregatesFilter<"ImportacaoLote"> | number;
    errosJson?: Prisma.JsonNullableWithAggregatesFilter<"ImportacaoLote">;
    adminId?: Prisma.StringNullableWithAggregatesFilter<"ImportacaoLote"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ImportacaoLote"> | Date | string;
};
export type ImportacaoLoteCreateInput = {
    id?: string;
    arquivoNome: string;
    totalLinhas: number;
    importadas: number;
    ignoradas: number;
    errosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutImportacoesLoteInput;
    admin?: Prisma.UsuarioAdminCreateNestedOneWithoutImportacoesLoteInput;
};
export type ImportacaoLoteUncheckedCreateInput = {
    id?: string;
    edicaoId: string;
    arquivoNome: string;
    totalLinhas: number;
    importadas: number;
    ignoradas: number;
    errosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    adminId?: string | null;
    createdAt?: Date | string;
};
export type ImportacaoLoteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    arquivoNome?: Prisma.StringFieldUpdateOperationsInput | string;
    totalLinhas?: Prisma.IntFieldUpdateOperationsInput | number;
    importadas?: Prisma.IntFieldUpdateOperationsInput | number;
    ignoradas?: Prisma.IntFieldUpdateOperationsInput | number;
    errosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutImportacoesLoteNestedInput;
    admin?: Prisma.UsuarioAdminUpdateOneWithoutImportacoesLoteNestedInput;
};
export type ImportacaoLoteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    arquivoNome?: Prisma.StringFieldUpdateOperationsInput | string;
    totalLinhas?: Prisma.IntFieldUpdateOperationsInput | number;
    importadas?: Prisma.IntFieldUpdateOperationsInput | number;
    ignoradas?: Prisma.IntFieldUpdateOperationsInput | number;
    errosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    adminId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImportacaoLoteCreateManyInput = {
    id?: string;
    edicaoId: string;
    arquivoNome: string;
    totalLinhas: number;
    importadas: number;
    ignoradas: number;
    errosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    adminId?: string | null;
    createdAt?: Date | string;
};
export type ImportacaoLoteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    arquivoNome?: Prisma.StringFieldUpdateOperationsInput | string;
    totalLinhas?: Prisma.IntFieldUpdateOperationsInput | number;
    importadas?: Prisma.IntFieldUpdateOperationsInput | number;
    ignoradas?: Prisma.IntFieldUpdateOperationsInput | number;
    errosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImportacaoLoteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    arquivoNome?: Prisma.StringFieldUpdateOperationsInput | string;
    totalLinhas?: Prisma.IntFieldUpdateOperationsInput | number;
    importadas?: Prisma.IntFieldUpdateOperationsInput | number;
    ignoradas?: Prisma.IntFieldUpdateOperationsInput | number;
    errosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    adminId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImportacaoLoteListRelationFilter = {
    every?: Prisma.ImportacaoLoteWhereInput;
    some?: Prisma.ImportacaoLoteWhereInput;
    none?: Prisma.ImportacaoLoteWhereInput;
};
export type ImportacaoLoteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ImportacaoLoteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    arquivoNome?: Prisma.SortOrder;
    totalLinhas?: Prisma.SortOrder;
    importadas?: Prisma.SortOrder;
    ignoradas?: Prisma.SortOrder;
    errosJson?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ImportacaoLoteAvgOrderByAggregateInput = {
    totalLinhas?: Prisma.SortOrder;
    importadas?: Prisma.SortOrder;
    ignoradas?: Prisma.SortOrder;
};
export type ImportacaoLoteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    arquivoNome?: Prisma.SortOrder;
    totalLinhas?: Prisma.SortOrder;
    importadas?: Prisma.SortOrder;
    ignoradas?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ImportacaoLoteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    arquivoNome?: Prisma.SortOrder;
    totalLinhas?: Prisma.SortOrder;
    importadas?: Prisma.SortOrder;
    ignoradas?: Prisma.SortOrder;
    adminId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ImportacaoLoteSumOrderByAggregateInput = {
    totalLinhas?: Prisma.SortOrder;
    importadas?: Prisma.SortOrder;
    ignoradas?: Prisma.SortOrder;
};
export type ImportacaoLoteCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.ImportacaoLoteCreateWithoutEdicaoInput, Prisma.ImportacaoLoteUncheckedCreateWithoutEdicaoInput> | Prisma.ImportacaoLoteCreateWithoutEdicaoInput[] | Prisma.ImportacaoLoteUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.ImportacaoLoteCreateOrConnectWithoutEdicaoInput | Prisma.ImportacaoLoteCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.ImportacaoLoteCreateManyEdicaoInputEnvelope;
    connect?: Prisma.ImportacaoLoteWhereUniqueInput | Prisma.ImportacaoLoteWhereUniqueInput[];
};
export type ImportacaoLoteUncheckedCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.ImportacaoLoteCreateWithoutEdicaoInput, Prisma.ImportacaoLoteUncheckedCreateWithoutEdicaoInput> | Prisma.ImportacaoLoteCreateWithoutEdicaoInput[] | Prisma.ImportacaoLoteUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.ImportacaoLoteCreateOrConnectWithoutEdicaoInput | Prisma.ImportacaoLoteCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.ImportacaoLoteCreateManyEdicaoInputEnvelope;
    connect?: Prisma.ImportacaoLoteWhereUniqueInput | Prisma.ImportacaoLoteWhereUniqueInput[];
};
export type ImportacaoLoteUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.ImportacaoLoteCreateWithoutEdicaoInput, Prisma.ImportacaoLoteUncheckedCreateWithoutEdicaoInput> | Prisma.ImportacaoLoteCreateWithoutEdicaoInput[] | Prisma.ImportacaoLoteUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.ImportacaoLoteCreateOrConnectWithoutEdicaoInput | Prisma.ImportacaoLoteCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.ImportacaoLoteUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.ImportacaoLoteUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.ImportacaoLoteCreateManyEdicaoInputEnvelope;
    set?: Prisma.ImportacaoLoteWhereUniqueInput | Prisma.ImportacaoLoteWhereUniqueInput[];
    disconnect?: Prisma.ImportacaoLoteWhereUniqueInput | Prisma.ImportacaoLoteWhereUniqueInput[];
    delete?: Prisma.ImportacaoLoteWhereUniqueInput | Prisma.ImportacaoLoteWhereUniqueInput[];
    connect?: Prisma.ImportacaoLoteWhereUniqueInput | Prisma.ImportacaoLoteWhereUniqueInput[];
    update?: Prisma.ImportacaoLoteUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.ImportacaoLoteUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.ImportacaoLoteUpdateManyWithWhereWithoutEdicaoInput | Prisma.ImportacaoLoteUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.ImportacaoLoteScalarWhereInput | Prisma.ImportacaoLoteScalarWhereInput[];
};
export type ImportacaoLoteUncheckedUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.ImportacaoLoteCreateWithoutEdicaoInput, Prisma.ImportacaoLoteUncheckedCreateWithoutEdicaoInput> | Prisma.ImportacaoLoteCreateWithoutEdicaoInput[] | Prisma.ImportacaoLoteUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.ImportacaoLoteCreateOrConnectWithoutEdicaoInput | Prisma.ImportacaoLoteCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.ImportacaoLoteUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.ImportacaoLoteUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.ImportacaoLoteCreateManyEdicaoInputEnvelope;
    set?: Prisma.ImportacaoLoteWhereUniqueInput | Prisma.ImportacaoLoteWhereUniqueInput[];
    disconnect?: Prisma.ImportacaoLoteWhereUniqueInput | Prisma.ImportacaoLoteWhereUniqueInput[];
    delete?: Prisma.ImportacaoLoteWhereUniqueInput | Prisma.ImportacaoLoteWhereUniqueInput[];
    connect?: Prisma.ImportacaoLoteWhereUniqueInput | Prisma.ImportacaoLoteWhereUniqueInput[];
    update?: Prisma.ImportacaoLoteUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.ImportacaoLoteUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.ImportacaoLoteUpdateManyWithWhereWithoutEdicaoInput | Prisma.ImportacaoLoteUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.ImportacaoLoteScalarWhereInput | Prisma.ImportacaoLoteScalarWhereInput[];
};
export type ImportacaoLoteCreateNestedManyWithoutAdminInput = {
    create?: Prisma.XOR<Prisma.ImportacaoLoteCreateWithoutAdminInput, Prisma.ImportacaoLoteUncheckedCreateWithoutAdminInput> | Prisma.ImportacaoLoteCreateWithoutAdminInput[] | Prisma.ImportacaoLoteUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.ImportacaoLoteCreateOrConnectWithoutAdminInput | Prisma.ImportacaoLoteCreateOrConnectWithoutAdminInput[];
    createMany?: Prisma.ImportacaoLoteCreateManyAdminInputEnvelope;
    connect?: Prisma.ImportacaoLoteWhereUniqueInput | Prisma.ImportacaoLoteWhereUniqueInput[];
};
export type ImportacaoLoteUncheckedCreateNestedManyWithoutAdminInput = {
    create?: Prisma.XOR<Prisma.ImportacaoLoteCreateWithoutAdminInput, Prisma.ImportacaoLoteUncheckedCreateWithoutAdminInput> | Prisma.ImportacaoLoteCreateWithoutAdminInput[] | Prisma.ImportacaoLoteUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.ImportacaoLoteCreateOrConnectWithoutAdminInput | Prisma.ImportacaoLoteCreateOrConnectWithoutAdminInput[];
    createMany?: Prisma.ImportacaoLoteCreateManyAdminInputEnvelope;
    connect?: Prisma.ImportacaoLoteWhereUniqueInput | Prisma.ImportacaoLoteWhereUniqueInput[];
};
export type ImportacaoLoteUpdateManyWithoutAdminNestedInput = {
    create?: Prisma.XOR<Prisma.ImportacaoLoteCreateWithoutAdminInput, Prisma.ImportacaoLoteUncheckedCreateWithoutAdminInput> | Prisma.ImportacaoLoteCreateWithoutAdminInput[] | Prisma.ImportacaoLoteUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.ImportacaoLoteCreateOrConnectWithoutAdminInput | Prisma.ImportacaoLoteCreateOrConnectWithoutAdminInput[];
    upsert?: Prisma.ImportacaoLoteUpsertWithWhereUniqueWithoutAdminInput | Prisma.ImportacaoLoteUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: Prisma.ImportacaoLoteCreateManyAdminInputEnvelope;
    set?: Prisma.ImportacaoLoteWhereUniqueInput | Prisma.ImportacaoLoteWhereUniqueInput[];
    disconnect?: Prisma.ImportacaoLoteWhereUniqueInput | Prisma.ImportacaoLoteWhereUniqueInput[];
    delete?: Prisma.ImportacaoLoteWhereUniqueInput | Prisma.ImportacaoLoteWhereUniqueInput[];
    connect?: Prisma.ImportacaoLoteWhereUniqueInput | Prisma.ImportacaoLoteWhereUniqueInput[];
    update?: Prisma.ImportacaoLoteUpdateWithWhereUniqueWithoutAdminInput | Prisma.ImportacaoLoteUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?: Prisma.ImportacaoLoteUpdateManyWithWhereWithoutAdminInput | Prisma.ImportacaoLoteUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: Prisma.ImportacaoLoteScalarWhereInput | Prisma.ImportacaoLoteScalarWhereInput[];
};
export type ImportacaoLoteUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: Prisma.XOR<Prisma.ImportacaoLoteCreateWithoutAdminInput, Prisma.ImportacaoLoteUncheckedCreateWithoutAdminInput> | Prisma.ImportacaoLoteCreateWithoutAdminInput[] | Prisma.ImportacaoLoteUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.ImportacaoLoteCreateOrConnectWithoutAdminInput | Prisma.ImportacaoLoteCreateOrConnectWithoutAdminInput[];
    upsert?: Prisma.ImportacaoLoteUpsertWithWhereUniqueWithoutAdminInput | Prisma.ImportacaoLoteUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: Prisma.ImportacaoLoteCreateManyAdminInputEnvelope;
    set?: Prisma.ImportacaoLoteWhereUniqueInput | Prisma.ImportacaoLoteWhereUniqueInput[];
    disconnect?: Prisma.ImportacaoLoteWhereUniqueInput | Prisma.ImportacaoLoteWhereUniqueInput[];
    delete?: Prisma.ImportacaoLoteWhereUniqueInput | Prisma.ImportacaoLoteWhereUniqueInput[];
    connect?: Prisma.ImportacaoLoteWhereUniqueInput | Prisma.ImportacaoLoteWhereUniqueInput[];
    update?: Prisma.ImportacaoLoteUpdateWithWhereUniqueWithoutAdminInput | Prisma.ImportacaoLoteUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?: Prisma.ImportacaoLoteUpdateManyWithWhereWithoutAdminInput | Prisma.ImportacaoLoteUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: Prisma.ImportacaoLoteScalarWhereInput | Prisma.ImportacaoLoteScalarWhereInput[];
};
export type ImportacaoLoteCreateWithoutEdicaoInput = {
    id?: string;
    arquivoNome: string;
    totalLinhas: number;
    importadas: number;
    ignoradas: number;
    errosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    admin?: Prisma.UsuarioAdminCreateNestedOneWithoutImportacoesLoteInput;
};
export type ImportacaoLoteUncheckedCreateWithoutEdicaoInput = {
    id?: string;
    arquivoNome: string;
    totalLinhas: number;
    importadas: number;
    ignoradas: number;
    errosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    adminId?: string | null;
    createdAt?: Date | string;
};
export type ImportacaoLoteCreateOrConnectWithoutEdicaoInput = {
    where: Prisma.ImportacaoLoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ImportacaoLoteCreateWithoutEdicaoInput, Prisma.ImportacaoLoteUncheckedCreateWithoutEdicaoInput>;
};
export type ImportacaoLoteCreateManyEdicaoInputEnvelope = {
    data: Prisma.ImportacaoLoteCreateManyEdicaoInput | Prisma.ImportacaoLoteCreateManyEdicaoInput[];
    skipDuplicates?: boolean;
};
export type ImportacaoLoteUpsertWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.ImportacaoLoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.ImportacaoLoteUpdateWithoutEdicaoInput, Prisma.ImportacaoLoteUncheckedUpdateWithoutEdicaoInput>;
    create: Prisma.XOR<Prisma.ImportacaoLoteCreateWithoutEdicaoInput, Prisma.ImportacaoLoteUncheckedCreateWithoutEdicaoInput>;
};
export type ImportacaoLoteUpdateWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.ImportacaoLoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.ImportacaoLoteUpdateWithoutEdicaoInput, Prisma.ImportacaoLoteUncheckedUpdateWithoutEdicaoInput>;
};
export type ImportacaoLoteUpdateManyWithWhereWithoutEdicaoInput = {
    where: Prisma.ImportacaoLoteScalarWhereInput;
    data: Prisma.XOR<Prisma.ImportacaoLoteUpdateManyMutationInput, Prisma.ImportacaoLoteUncheckedUpdateManyWithoutEdicaoInput>;
};
export type ImportacaoLoteScalarWhereInput = {
    AND?: Prisma.ImportacaoLoteScalarWhereInput | Prisma.ImportacaoLoteScalarWhereInput[];
    OR?: Prisma.ImportacaoLoteScalarWhereInput[];
    NOT?: Prisma.ImportacaoLoteScalarWhereInput | Prisma.ImportacaoLoteScalarWhereInput[];
    id?: Prisma.StringFilter<"ImportacaoLote"> | string;
    edicaoId?: Prisma.StringFilter<"ImportacaoLote"> | string;
    arquivoNome?: Prisma.StringFilter<"ImportacaoLote"> | string;
    totalLinhas?: Prisma.IntFilter<"ImportacaoLote"> | number;
    importadas?: Prisma.IntFilter<"ImportacaoLote"> | number;
    ignoradas?: Prisma.IntFilter<"ImportacaoLote"> | number;
    errosJson?: Prisma.JsonNullableFilter<"ImportacaoLote">;
    adminId?: Prisma.StringNullableFilter<"ImportacaoLote"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ImportacaoLote"> | Date | string;
};
export type ImportacaoLoteCreateWithoutAdminInput = {
    id?: string;
    arquivoNome: string;
    totalLinhas: number;
    importadas: number;
    ignoradas: number;
    errosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutImportacoesLoteInput;
};
export type ImportacaoLoteUncheckedCreateWithoutAdminInput = {
    id?: string;
    edicaoId: string;
    arquivoNome: string;
    totalLinhas: number;
    importadas: number;
    ignoradas: number;
    errosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ImportacaoLoteCreateOrConnectWithoutAdminInput = {
    where: Prisma.ImportacaoLoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ImportacaoLoteCreateWithoutAdminInput, Prisma.ImportacaoLoteUncheckedCreateWithoutAdminInput>;
};
export type ImportacaoLoteCreateManyAdminInputEnvelope = {
    data: Prisma.ImportacaoLoteCreateManyAdminInput | Prisma.ImportacaoLoteCreateManyAdminInput[];
    skipDuplicates?: boolean;
};
export type ImportacaoLoteUpsertWithWhereUniqueWithoutAdminInput = {
    where: Prisma.ImportacaoLoteWhereUniqueInput;
    update: Prisma.XOR<Prisma.ImportacaoLoteUpdateWithoutAdminInput, Prisma.ImportacaoLoteUncheckedUpdateWithoutAdminInput>;
    create: Prisma.XOR<Prisma.ImportacaoLoteCreateWithoutAdminInput, Prisma.ImportacaoLoteUncheckedCreateWithoutAdminInput>;
};
export type ImportacaoLoteUpdateWithWhereUniqueWithoutAdminInput = {
    where: Prisma.ImportacaoLoteWhereUniqueInput;
    data: Prisma.XOR<Prisma.ImportacaoLoteUpdateWithoutAdminInput, Prisma.ImportacaoLoteUncheckedUpdateWithoutAdminInput>;
};
export type ImportacaoLoteUpdateManyWithWhereWithoutAdminInput = {
    where: Prisma.ImportacaoLoteScalarWhereInput;
    data: Prisma.XOR<Prisma.ImportacaoLoteUpdateManyMutationInput, Prisma.ImportacaoLoteUncheckedUpdateManyWithoutAdminInput>;
};
export type ImportacaoLoteCreateManyEdicaoInput = {
    id?: string;
    arquivoNome: string;
    totalLinhas: number;
    importadas: number;
    ignoradas: number;
    errosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    adminId?: string | null;
    createdAt?: Date | string;
};
export type ImportacaoLoteUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    arquivoNome?: Prisma.StringFieldUpdateOperationsInput | string;
    totalLinhas?: Prisma.IntFieldUpdateOperationsInput | number;
    importadas?: Prisma.IntFieldUpdateOperationsInput | number;
    ignoradas?: Prisma.IntFieldUpdateOperationsInput | number;
    errosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    admin?: Prisma.UsuarioAdminUpdateOneWithoutImportacoesLoteNestedInput;
};
export type ImportacaoLoteUncheckedUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    arquivoNome?: Prisma.StringFieldUpdateOperationsInput | string;
    totalLinhas?: Prisma.IntFieldUpdateOperationsInput | number;
    importadas?: Prisma.IntFieldUpdateOperationsInput | number;
    ignoradas?: Prisma.IntFieldUpdateOperationsInput | number;
    errosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    adminId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImportacaoLoteUncheckedUpdateManyWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    arquivoNome?: Prisma.StringFieldUpdateOperationsInput | string;
    totalLinhas?: Prisma.IntFieldUpdateOperationsInput | number;
    importadas?: Prisma.IntFieldUpdateOperationsInput | number;
    ignoradas?: Prisma.IntFieldUpdateOperationsInput | number;
    errosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    adminId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImportacaoLoteCreateManyAdminInput = {
    id?: string;
    edicaoId: string;
    arquivoNome: string;
    totalLinhas: number;
    importadas: number;
    ignoradas: number;
    errosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ImportacaoLoteUpdateWithoutAdminInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    arquivoNome?: Prisma.StringFieldUpdateOperationsInput | string;
    totalLinhas?: Prisma.IntFieldUpdateOperationsInput | number;
    importadas?: Prisma.IntFieldUpdateOperationsInput | number;
    ignoradas?: Prisma.IntFieldUpdateOperationsInput | number;
    errosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutImportacoesLoteNestedInput;
};
export type ImportacaoLoteUncheckedUpdateWithoutAdminInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    arquivoNome?: Prisma.StringFieldUpdateOperationsInput | string;
    totalLinhas?: Prisma.IntFieldUpdateOperationsInput | number;
    importadas?: Prisma.IntFieldUpdateOperationsInput | number;
    ignoradas?: Prisma.IntFieldUpdateOperationsInput | number;
    errosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImportacaoLoteUncheckedUpdateManyWithoutAdminInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    arquivoNome?: Prisma.StringFieldUpdateOperationsInput | string;
    totalLinhas?: Prisma.IntFieldUpdateOperationsInput | number;
    importadas?: Prisma.IntFieldUpdateOperationsInput | number;
    ignoradas?: Prisma.IntFieldUpdateOperationsInput | number;
    errosJson?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ImportacaoLoteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    arquivoNome?: boolean;
    totalLinhas?: boolean;
    importadas?: boolean;
    ignoradas?: boolean;
    errosJson?: boolean;
    adminId?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    admin?: boolean | Prisma.ImportacaoLote$adminArgs<ExtArgs>;
}, ExtArgs["result"]["importacaoLote"]>;
export type ImportacaoLoteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    arquivoNome?: boolean;
    totalLinhas?: boolean;
    importadas?: boolean;
    ignoradas?: boolean;
    errosJson?: boolean;
    adminId?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    admin?: boolean | Prisma.ImportacaoLote$adminArgs<ExtArgs>;
}, ExtArgs["result"]["importacaoLote"]>;
export type ImportacaoLoteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    arquivoNome?: boolean;
    totalLinhas?: boolean;
    importadas?: boolean;
    ignoradas?: boolean;
    errosJson?: boolean;
    adminId?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    admin?: boolean | Prisma.ImportacaoLote$adminArgs<ExtArgs>;
}, ExtArgs["result"]["importacaoLote"]>;
export type ImportacaoLoteSelectScalar = {
    id?: boolean;
    edicaoId?: boolean;
    arquivoNome?: boolean;
    totalLinhas?: boolean;
    importadas?: boolean;
    ignoradas?: boolean;
    errosJson?: boolean;
    adminId?: boolean;
    createdAt?: boolean;
};
export type ImportacaoLoteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "edicaoId" | "arquivoNome" | "totalLinhas" | "importadas" | "ignoradas" | "errosJson" | "adminId" | "createdAt", ExtArgs["result"]["importacaoLote"]>;
export type ImportacaoLoteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    admin?: boolean | Prisma.ImportacaoLote$adminArgs<ExtArgs>;
};
export type ImportacaoLoteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    admin?: boolean | Prisma.ImportacaoLote$adminArgs<ExtArgs>;
};
export type ImportacaoLoteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    admin?: boolean | Prisma.ImportacaoLote$adminArgs<ExtArgs>;
};
export type $ImportacaoLotePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ImportacaoLote";
    objects: {
        edicao: Prisma.$EdicaoPayload<ExtArgs>;
        admin: Prisma.$UsuarioAdminPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        edicaoId: string;
        arquivoNome: string;
        totalLinhas: number;
        importadas: number;
        ignoradas: number;
        errosJson: runtime.JsonValue | null;
        adminId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["importacaoLote"]>;
    composites: {};
};
export type ImportacaoLoteGetPayload<S extends boolean | null | undefined | ImportacaoLoteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ImportacaoLotePayload, S>;
export type ImportacaoLoteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ImportacaoLoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ImportacaoLoteCountAggregateInputType | true;
};
export interface ImportacaoLoteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ImportacaoLote'];
        meta: {
            name: 'ImportacaoLote';
        };
    };
    findUnique<T extends ImportacaoLoteFindUniqueArgs>(args: Prisma.SelectSubset<T, ImportacaoLoteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ImportacaoLoteClient<runtime.Types.Result.GetResult<Prisma.$ImportacaoLotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ImportacaoLoteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ImportacaoLoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ImportacaoLoteClient<runtime.Types.Result.GetResult<Prisma.$ImportacaoLotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ImportacaoLoteFindFirstArgs>(args?: Prisma.SelectSubset<T, ImportacaoLoteFindFirstArgs<ExtArgs>>): Prisma.Prisma__ImportacaoLoteClient<runtime.Types.Result.GetResult<Prisma.$ImportacaoLotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ImportacaoLoteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ImportacaoLoteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ImportacaoLoteClient<runtime.Types.Result.GetResult<Prisma.$ImportacaoLotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ImportacaoLoteFindManyArgs>(args?: Prisma.SelectSubset<T, ImportacaoLoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImportacaoLotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ImportacaoLoteCreateArgs>(args: Prisma.SelectSubset<T, ImportacaoLoteCreateArgs<ExtArgs>>): Prisma.Prisma__ImportacaoLoteClient<runtime.Types.Result.GetResult<Prisma.$ImportacaoLotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ImportacaoLoteCreateManyArgs>(args?: Prisma.SelectSubset<T, ImportacaoLoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ImportacaoLoteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ImportacaoLoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImportacaoLotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ImportacaoLoteDeleteArgs>(args: Prisma.SelectSubset<T, ImportacaoLoteDeleteArgs<ExtArgs>>): Prisma.Prisma__ImportacaoLoteClient<runtime.Types.Result.GetResult<Prisma.$ImportacaoLotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ImportacaoLoteUpdateArgs>(args: Prisma.SelectSubset<T, ImportacaoLoteUpdateArgs<ExtArgs>>): Prisma.Prisma__ImportacaoLoteClient<runtime.Types.Result.GetResult<Prisma.$ImportacaoLotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ImportacaoLoteDeleteManyArgs>(args?: Prisma.SelectSubset<T, ImportacaoLoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ImportacaoLoteUpdateManyArgs>(args: Prisma.SelectSubset<T, ImportacaoLoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ImportacaoLoteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ImportacaoLoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ImportacaoLotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ImportacaoLoteUpsertArgs>(args: Prisma.SelectSubset<T, ImportacaoLoteUpsertArgs<ExtArgs>>): Prisma.Prisma__ImportacaoLoteClient<runtime.Types.Result.GetResult<Prisma.$ImportacaoLotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ImportacaoLoteCountArgs>(args?: Prisma.Subset<T, ImportacaoLoteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ImportacaoLoteCountAggregateOutputType> : number>;
    aggregate<T extends ImportacaoLoteAggregateArgs>(args: Prisma.Subset<T, ImportacaoLoteAggregateArgs>): Prisma.PrismaPromise<GetImportacaoLoteAggregateType<T>>;
    groupBy<T extends ImportacaoLoteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ImportacaoLoteGroupByArgs['orderBy'];
    } : {
        orderBy?: ImportacaoLoteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ImportacaoLoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImportacaoLoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ImportacaoLoteFieldRefs;
}
export interface Prisma__ImportacaoLoteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    edicao<T extends Prisma.EdicaoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EdicaoDefaultArgs<ExtArgs>>): Prisma.Prisma__EdicaoClient<runtime.Types.Result.GetResult<Prisma.$EdicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    admin<T extends Prisma.ImportacaoLote$adminArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ImportacaoLote$adminArgs<ExtArgs>>): Prisma.Prisma__UsuarioAdminClient<runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ImportacaoLoteFieldRefs {
    readonly id: Prisma.FieldRef<"ImportacaoLote", 'String'>;
    readonly edicaoId: Prisma.FieldRef<"ImportacaoLote", 'String'>;
    readonly arquivoNome: Prisma.FieldRef<"ImportacaoLote", 'String'>;
    readonly totalLinhas: Prisma.FieldRef<"ImportacaoLote", 'Int'>;
    readonly importadas: Prisma.FieldRef<"ImportacaoLote", 'Int'>;
    readonly ignoradas: Prisma.FieldRef<"ImportacaoLote", 'Int'>;
    readonly errosJson: Prisma.FieldRef<"ImportacaoLote", 'Json'>;
    readonly adminId: Prisma.FieldRef<"ImportacaoLote", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ImportacaoLote", 'DateTime'>;
}
export type ImportacaoLoteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportacaoLoteSelect<ExtArgs> | null;
    omit?: Prisma.ImportacaoLoteOmit<ExtArgs> | null;
    include?: Prisma.ImportacaoLoteInclude<ExtArgs> | null;
    where: Prisma.ImportacaoLoteWhereUniqueInput;
};
export type ImportacaoLoteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportacaoLoteSelect<ExtArgs> | null;
    omit?: Prisma.ImportacaoLoteOmit<ExtArgs> | null;
    include?: Prisma.ImportacaoLoteInclude<ExtArgs> | null;
    where: Prisma.ImportacaoLoteWhereUniqueInput;
};
export type ImportacaoLoteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ImportacaoLoteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ImportacaoLoteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ImportacaoLoteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportacaoLoteSelect<ExtArgs> | null;
    omit?: Prisma.ImportacaoLoteOmit<ExtArgs> | null;
    include?: Prisma.ImportacaoLoteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ImportacaoLoteCreateInput, Prisma.ImportacaoLoteUncheckedCreateInput>;
};
export type ImportacaoLoteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ImportacaoLoteCreateManyInput | Prisma.ImportacaoLoteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ImportacaoLoteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportacaoLoteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ImportacaoLoteOmit<ExtArgs> | null;
    data: Prisma.ImportacaoLoteCreateManyInput | Prisma.ImportacaoLoteCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ImportacaoLoteIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ImportacaoLoteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportacaoLoteSelect<ExtArgs> | null;
    omit?: Prisma.ImportacaoLoteOmit<ExtArgs> | null;
    include?: Prisma.ImportacaoLoteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ImportacaoLoteUpdateInput, Prisma.ImportacaoLoteUncheckedUpdateInput>;
    where: Prisma.ImportacaoLoteWhereUniqueInput;
};
export type ImportacaoLoteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ImportacaoLoteUpdateManyMutationInput, Prisma.ImportacaoLoteUncheckedUpdateManyInput>;
    where?: Prisma.ImportacaoLoteWhereInput;
    limit?: number;
};
export type ImportacaoLoteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportacaoLoteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ImportacaoLoteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ImportacaoLoteUpdateManyMutationInput, Prisma.ImportacaoLoteUncheckedUpdateManyInput>;
    where?: Prisma.ImportacaoLoteWhereInput;
    limit?: number;
    include?: Prisma.ImportacaoLoteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ImportacaoLoteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportacaoLoteSelect<ExtArgs> | null;
    omit?: Prisma.ImportacaoLoteOmit<ExtArgs> | null;
    include?: Prisma.ImportacaoLoteInclude<ExtArgs> | null;
    where: Prisma.ImportacaoLoteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ImportacaoLoteCreateInput, Prisma.ImportacaoLoteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ImportacaoLoteUpdateInput, Prisma.ImportacaoLoteUncheckedUpdateInput>;
};
export type ImportacaoLoteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportacaoLoteSelect<ExtArgs> | null;
    omit?: Prisma.ImportacaoLoteOmit<ExtArgs> | null;
    include?: Prisma.ImportacaoLoteInclude<ExtArgs> | null;
    where: Prisma.ImportacaoLoteWhereUniqueInput;
};
export type ImportacaoLoteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ImportacaoLoteWhereInput;
    limit?: number;
};
export type ImportacaoLote$adminArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioAdminSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    include?: Prisma.UsuarioAdminInclude<ExtArgs> | null;
    where?: Prisma.UsuarioAdminWhereInput;
};
export type ImportacaoLoteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ImportacaoLoteSelect<ExtArgs> | null;
    omit?: Prisma.ImportacaoLoteOmit<ExtArgs> | null;
    include?: Prisma.ImportacaoLoteInclude<ExtArgs> | null;
};
