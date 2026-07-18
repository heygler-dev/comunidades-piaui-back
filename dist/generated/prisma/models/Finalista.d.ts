import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type FinalistaModel = runtime.Types.Result.DefaultSelection<Prisma.$FinalistaPayload>;
export type AggregateFinalista = {
    _count: FinalistaCountAggregateOutputType | null;
    _min: FinalistaMinAggregateOutputType | null;
    _max: FinalistaMaxAggregateOutputType | null;
};
export type FinalistaMinAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    categoriaId: string | null;
    inscricaoStartupId: string | null;
    metaResumo: string | null;
    ativo: boolean | null;
    createdAt: Date | null;
};
export type FinalistaMaxAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    categoriaId: string | null;
    inscricaoStartupId: string | null;
    metaResumo: string | null;
    ativo: boolean | null;
    createdAt: Date | null;
};
export type FinalistaCountAggregateOutputType = {
    id: number;
    edicaoId: number;
    categoriaId: number;
    inscricaoStartupId: number;
    metaResumo: number;
    ativo: number;
    createdAt: number;
    _all: number;
};
export type FinalistaMinAggregateInputType = {
    id?: true;
    edicaoId?: true;
    categoriaId?: true;
    inscricaoStartupId?: true;
    metaResumo?: true;
    ativo?: true;
    createdAt?: true;
};
export type FinalistaMaxAggregateInputType = {
    id?: true;
    edicaoId?: true;
    categoriaId?: true;
    inscricaoStartupId?: true;
    metaResumo?: true;
    ativo?: true;
    createdAt?: true;
};
export type FinalistaCountAggregateInputType = {
    id?: true;
    edicaoId?: true;
    categoriaId?: true;
    inscricaoStartupId?: true;
    metaResumo?: true;
    ativo?: true;
    createdAt?: true;
    _all?: true;
};
export type FinalistaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FinalistaWhereInput;
    orderBy?: Prisma.FinalistaOrderByWithRelationInput | Prisma.FinalistaOrderByWithRelationInput[];
    cursor?: Prisma.FinalistaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FinalistaCountAggregateInputType;
    _min?: FinalistaMinAggregateInputType;
    _max?: FinalistaMaxAggregateInputType;
};
export type GetFinalistaAggregateType<T extends FinalistaAggregateArgs> = {
    [P in keyof T & keyof AggregateFinalista]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFinalista[P]> : Prisma.GetScalarType<T[P], AggregateFinalista[P]>;
};
export type FinalistaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FinalistaWhereInput;
    orderBy?: Prisma.FinalistaOrderByWithAggregationInput | Prisma.FinalistaOrderByWithAggregationInput[];
    by: Prisma.FinalistaScalarFieldEnum[] | Prisma.FinalistaScalarFieldEnum;
    having?: Prisma.FinalistaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FinalistaCountAggregateInputType | true;
    _min?: FinalistaMinAggregateInputType;
    _max?: FinalistaMaxAggregateInputType;
};
export type FinalistaGroupByOutputType = {
    id: string;
    edicaoId: string;
    categoriaId: string;
    inscricaoStartupId: string;
    metaResumo: string | null;
    ativo: boolean;
    createdAt: Date;
    _count: FinalistaCountAggregateOutputType | null;
    _min: FinalistaMinAggregateOutputType | null;
    _max: FinalistaMaxAggregateOutputType | null;
};
export type GetFinalistaGroupByPayload<T extends FinalistaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FinalistaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FinalistaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FinalistaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FinalistaGroupByOutputType[P]>;
}>>;
export type FinalistaWhereInput = {
    AND?: Prisma.FinalistaWhereInput | Prisma.FinalistaWhereInput[];
    OR?: Prisma.FinalistaWhereInput[];
    NOT?: Prisma.FinalistaWhereInput | Prisma.FinalistaWhereInput[];
    id?: Prisma.StringFilter<"Finalista"> | string;
    edicaoId?: Prisma.StringFilter<"Finalista"> | string;
    categoriaId?: Prisma.StringFilter<"Finalista"> | string;
    inscricaoStartupId?: Prisma.StringFilter<"Finalista"> | string;
    metaResumo?: Prisma.StringNullableFilter<"Finalista"> | string | null;
    ativo?: Prisma.BoolFilter<"Finalista"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Finalista"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
    categoria?: Prisma.XOR<Prisma.CategoriaScalarRelationFilter, Prisma.CategoriaWhereInput>;
    inscricaoStartup?: Prisma.XOR<Prisma.InscricaoStartupScalarRelationFilter, Prisma.InscricaoStartupWhereInput>;
    votos?: Prisma.VotoListRelationFilter;
    resultados?: Prisma.ResultadoCategoriaListRelationFilter;
};
export type FinalistaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    inscricaoStartupId?: Prisma.SortOrder;
    metaResumo?: Prisma.SortOrderInput | Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    edicao?: Prisma.EdicaoOrderByWithRelationInput;
    categoria?: Prisma.CategoriaOrderByWithRelationInput;
    inscricaoStartup?: Prisma.InscricaoStartupOrderByWithRelationInput;
    votos?: Prisma.VotoOrderByRelationAggregateInput;
    resultados?: Prisma.ResultadoCategoriaOrderByRelationAggregateInput;
};
export type FinalistaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    edicaoId_categoriaId_inscricaoStartupId?: Prisma.FinalistaEdicaoIdCategoriaIdInscricaoStartupIdCompoundUniqueInput;
    AND?: Prisma.FinalistaWhereInput | Prisma.FinalistaWhereInput[];
    OR?: Prisma.FinalistaWhereInput[];
    NOT?: Prisma.FinalistaWhereInput | Prisma.FinalistaWhereInput[];
    edicaoId?: Prisma.StringFilter<"Finalista"> | string;
    categoriaId?: Prisma.StringFilter<"Finalista"> | string;
    inscricaoStartupId?: Prisma.StringFilter<"Finalista"> | string;
    metaResumo?: Prisma.StringNullableFilter<"Finalista"> | string | null;
    ativo?: Prisma.BoolFilter<"Finalista"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Finalista"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
    categoria?: Prisma.XOR<Prisma.CategoriaScalarRelationFilter, Prisma.CategoriaWhereInput>;
    inscricaoStartup?: Prisma.XOR<Prisma.InscricaoStartupScalarRelationFilter, Prisma.InscricaoStartupWhereInput>;
    votos?: Prisma.VotoListRelationFilter;
    resultados?: Prisma.ResultadoCategoriaListRelationFilter;
}, "id" | "edicaoId_categoriaId_inscricaoStartupId">;
export type FinalistaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    inscricaoStartupId?: Prisma.SortOrder;
    metaResumo?: Prisma.SortOrderInput | Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.FinalistaCountOrderByAggregateInput;
    _max?: Prisma.FinalistaMaxOrderByAggregateInput;
    _min?: Prisma.FinalistaMinOrderByAggregateInput;
};
export type FinalistaScalarWhereWithAggregatesInput = {
    AND?: Prisma.FinalistaScalarWhereWithAggregatesInput | Prisma.FinalistaScalarWhereWithAggregatesInput[];
    OR?: Prisma.FinalistaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FinalistaScalarWhereWithAggregatesInput | Prisma.FinalistaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Finalista"> | string;
    edicaoId?: Prisma.StringWithAggregatesFilter<"Finalista"> | string;
    categoriaId?: Prisma.StringWithAggregatesFilter<"Finalista"> | string;
    inscricaoStartupId?: Prisma.StringWithAggregatesFilter<"Finalista"> | string;
    metaResumo?: Prisma.StringNullableWithAggregatesFilter<"Finalista"> | string | null;
    ativo?: Prisma.BoolWithAggregatesFilter<"Finalista"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Finalista"> | Date | string;
};
export type FinalistaCreateInput = {
    id?: string;
    metaResumo?: string | null;
    ativo?: boolean;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutFinalistasInput;
    categoria: Prisma.CategoriaCreateNestedOneWithoutFinalistasInput;
    inscricaoStartup: Prisma.InscricaoStartupCreateNestedOneWithoutFinalistasInput;
    votos?: Prisma.VotoCreateNestedManyWithoutFinalistaInput;
    resultados?: Prisma.ResultadoCategoriaCreateNestedManyWithoutFinalistaInput;
};
export type FinalistaUncheckedCreateInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    inscricaoStartupId: string;
    metaResumo?: string | null;
    ativo?: boolean;
    createdAt?: Date | string;
    votos?: Prisma.VotoUncheckedCreateNestedManyWithoutFinalistaInput;
    resultados?: Prisma.ResultadoCategoriaUncheckedCreateNestedManyWithoutFinalistaInput;
};
export type FinalistaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metaResumo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutFinalistasNestedInput;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutFinalistasNestedInput;
    inscricaoStartup?: Prisma.InscricaoStartupUpdateOneRequiredWithoutFinalistasNestedInput;
    votos?: Prisma.VotoUpdateManyWithoutFinalistaNestedInput;
    resultados?: Prisma.ResultadoCategoriaUpdateManyWithoutFinalistaNestedInput;
};
export type FinalistaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    metaResumo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    votos?: Prisma.VotoUncheckedUpdateManyWithoutFinalistaNestedInput;
    resultados?: Prisma.ResultadoCategoriaUncheckedUpdateManyWithoutFinalistaNestedInput;
};
export type FinalistaCreateManyInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    inscricaoStartupId: string;
    metaResumo?: string | null;
    ativo?: boolean;
    createdAt?: Date | string;
};
export type FinalistaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metaResumo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FinalistaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    metaResumo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FinalistaListRelationFilter = {
    every?: Prisma.FinalistaWhereInput;
    some?: Prisma.FinalistaWhereInput;
    none?: Prisma.FinalistaWhereInput;
};
export type FinalistaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FinalistaEdicaoIdCategoriaIdInscricaoStartupIdCompoundUniqueInput = {
    edicaoId: string;
    categoriaId: string;
    inscricaoStartupId: string;
};
export type FinalistaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    inscricaoStartupId?: Prisma.SortOrder;
    metaResumo?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FinalistaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    inscricaoStartupId?: Prisma.SortOrder;
    metaResumo?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FinalistaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    inscricaoStartupId?: Prisma.SortOrder;
    metaResumo?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type FinalistaScalarRelationFilter = {
    is?: Prisma.FinalistaWhereInput;
    isNot?: Prisma.FinalistaWhereInput;
};
export type FinalistaCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.FinalistaCreateWithoutEdicaoInput, Prisma.FinalistaUncheckedCreateWithoutEdicaoInput> | Prisma.FinalistaCreateWithoutEdicaoInput[] | Prisma.FinalistaUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.FinalistaCreateOrConnectWithoutEdicaoInput | Prisma.FinalistaCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.FinalistaCreateManyEdicaoInputEnvelope;
    connect?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
};
export type FinalistaUncheckedCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.FinalistaCreateWithoutEdicaoInput, Prisma.FinalistaUncheckedCreateWithoutEdicaoInput> | Prisma.FinalistaCreateWithoutEdicaoInput[] | Prisma.FinalistaUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.FinalistaCreateOrConnectWithoutEdicaoInput | Prisma.FinalistaCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.FinalistaCreateManyEdicaoInputEnvelope;
    connect?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
};
export type FinalistaUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.FinalistaCreateWithoutEdicaoInput, Prisma.FinalistaUncheckedCreateWithoutEdicaoInput> | Prisma.FinalistaCreateWithoutEdicaoInput[] | Prisma.FinalistaUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.FinalistaCreateOrConnectWithoutEdicaoInput | Prisma.FinalistaCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.FinalistaUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.FinalistaUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.FinalistaCreateManyEdicaoInputEnvelope;
    set?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
    disconnect?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
    delete?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
    connect?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
    update?: Prisma.FinalistaUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.FinalistaUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.FinalistaUpdateManyWithWhereWithoutEdicaoInput | Prisma.FinalistaUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.FinalistaScalarWhereInput | Prisma.FinalistaScalarWhereInput[];
};
export type FinalistaUncheckedUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.FinalistaCreateWithoutEdicaoInput, Prisma.FinalistaUncheckedCreateWithoutEdicaoInput> | Prisma.FinalistaCreateWithoutEdicaoInput[] | Prisma.FinalistaUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.FinalistaCreateOrConnectWithoutEdicaoInput | Prisma.FinalistaCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.FinalistaUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.FinalistaUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.FinalistaCreateManyEdicaoInputEnvelope;
    set?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
    disconnect?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
    delete?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
    connect?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
    update?: Prisma.FinalistaUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.FinalistaUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.FinalistaUpdateManyWithWhereWithoutEdicaoInput | Prisma.FinalistaUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.FinalistaScalarWhereInput | Prisma.FinalistaScalarWhereInput[];
};
export type FinalistaCreateNestedManyWithoutInscricaoStartupInput = {
    create?: Prisma.XOR<Prisma.FinalistaCreateWithoutInscricaoStartupInput, Prisma.FinalistaUncheckedCreateWithoutInscricaoStartupInput> | Prisma.FinalistaCreateWithoutInscricaoStartupInput[] | Prisma.FinalistaUncheckedCreateWithoutInscricaoStartupInput[];
    connectOrCreate?: Prisma.FinalistaCreateOrConnectWithoutInscricaoStartupInput | Prisma.FinalistaCreateOrConnectWithoutInscricaoStartupInput[];
    createMany?: Prisma.FinalistaCreateManyInscricaoStartupInputEnvelope;
    connect?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
};
export type FinalistaUncheckedCreateNestedManyWithoutInscricaoStartupInput = {
    create?: Prisma.XOR<Prisma.FinalistaCreateWithoutInscricaoStartupInput, Prisma.FinalistaUncheckedCreateWithoutInscricaoStartupInput> | Prisma.FinalistaCreateWithoutInscricaoStartupInput[] | Prisma.FinalistaUncheckedCreateWithoutInscricaoStartupInput[];
    connectOrCreate?: Prisma.FinalistaCreateOrConnectWithoutInscricaoStartupInput | Prisma.FinalistaCreateOrConnectWithoutInscricaoStartupInput[];
    createMany?: Prisma.FinalistaCreateManyInscricaoStartupInputEnvelope;
    connect?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
};
export type FinalistaUpdateManyWithoutInscricaoStartupNestedInput = {
    create?: Prisma.XOR<Prisma.FinalistaCreateWithoutInscricaoStartupInput, Prisma.FinalistaUncheckedCreateWithoutInscricaoStartupInput> | Prisma.FinalistaCreateWithoutInscricaoStartupInput[] | Prisma.FinalistaUncheckedCreateWithoutInscricaoStartupInput[];
    connectOrCreate?: Prisma.FinalistaCreateOrConnectWithoutInscricaoStartupInput | Prisma.FinalistaCreateOrConnectWithoutInscricaoStartupInput[];
    upsert?: Prisma.FinalistaUpsertWithWhereUniqueWithoutInscricaoStartupInput | Prisma.FinalistaUpsertWithWhereUniqueWithoutInscricaoStartupInput[];
    createMany?: Prisma.FinalistaCreateManyInscricaoStartupInputEnvelope;
    set?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
    disconnect?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
    delete?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
    connect?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
    update?: Prisma.FinalistaUpdateWithWhereUniqueWithoutInscricaoStartupInput | Prisma.FinalistaUpdateWithWhereUniqueWithoutInscricaoStartupInput[];
    updateMany?: Prisma.FinalistaUpdateManyWithWhereWithoutInscricaoStartupInput | Prisma.FinalistaUpdateManyWithWhereWithoutInscricaoStartupInput[];
    deleteMany?: Prisma.FinalistaScalarWhereInput | Prisma.FinalistaScalarWhereInput[];
};
export type FinalistaUncheckedUpdateManyWithoutInscricaoStartupNestedInput = {
    create?: Prisma.XOR<Prisma.FinalistaCreateWithoutInscricaoStartupInput, Prisma.FinalistaUncheckedCreateWithoutInscricaoStartupInput> | Prisma.FinalistaCreateWithoutInscricaoStartupInput[] | Prisma.FinalistaUncheckedCreateWithoutInscricaoStartupInput[];
    connectOrCreate?: Prisma.FinalistaCreateOrConnectWithoutInscricaoStartupInput | Prisma.FinalistaCreateOrConnectWithoutInscricaoStartupInput[];
    upsert?: Prisma.FinalistaUpsertWithWhereUniqueWithoutInscricaoStartupInput | Prisma.FinalistaUpsertWithWhereUniqueWithoutInscricaoStartupInput[];
    createMany?: Prisma.FinalistaCreateManyInscricaoStartupInputEnvelope;
    set?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
    disconnect?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
    delete?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
    connect?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
    update?: Prisma.FinalistaUpdateWithWhereUniqueWithoutInscricaoStartupInput | Prisma.FinalistaUpdateWithWhereUniqueWithoutInscricaoStartupInput[];
    updateMany?: Prisma.FinalistaUpdateManyWithWhereWithoutInscricaoStartupInput | Prisma.FinalistaUpdateManyWithWhereWithoutInscricaoStartupInput[];
    deleteMany?: Prisma.FinalistaScalarWhereInput | Prisma.FinalistaScalarWhereInput[];
};
export type FinalistaCreateNestedManyWithoutCategoriaInput = {
    create?: Prisma.XOR<Prisma.FinalistaCreateWithoutCategoriaInput, Prisma.FinalistaUncheckedCreateWithoutCategoriaInput> | Prisma.FinalistaCreateWithoutCategoriaInput[] | Prisma.FinalistaUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.FinalistaCreateOrConnectWithoutCategoriaInput | Prisma.FinalistaCreateOrConnectWithoutCategoriaInput[];
    createMany?: Prisma.FinalistaCreateManyCategoriaInputEnvelope;
    connect?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
};
export type FinalistaUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: Prisma.XOR<Prisma.FinalistaCreateWithoutCategoriaInput, Prisma.FinalistaUncheckedCreateWithoutCategoriaInput> | Prisma.FinalistaCreateWithoutCategoriaInput[] | Prisma.FinalistaUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.FinalistaCreateOrConnectWithoutCategoriaInput | Prisma.FinalistaCreateOrConnectWithoutCategoriaInput[];
    createMany?: Prisma.FinalistaCreateManyCategoriaInputEnvelope;
    connect?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
};
export type FinalistaUpdateManyWithoutCategoriaNestedInput = {
    create?: Prisma.XOR<Prisma.FinalistaCreateWithoutCategoriaInput, Prisma.FinalistaUncheckedCreateWithoutCategoriaInput> | Prisma.FinalistaCreateWithoutCategoriaInput[] | Prisma.FinalistaUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.FinalistaCreateOrConnectWithoutCategoriaInput | Prisma.FinalistaCreateOrConnectWithoutCategoriaInput[];
    upsert?: Prisma.FinalistaUpsertWithWhereUniqueWithoutCategoriaInput | Prisma.FinalistaUpsertWithWhereUniqueWithoutCategoriaInput[];
    createMany?: Prisma.FinalistaCreateManyCategoriaInputEnvelope;
    set?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
    disconnect?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
    delete?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
    connect?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
    update?: Prisma.FinalistaUpdateWithWhereUniqueWithoutCategoriaInput | Prisma.FinalistaUpdateWithWhereUniqueWithoutCategoriaInput[];
    updateMany?: Prisma.FinalistaUpdateManyWithWhereWithoutCategoriaInput | Prisma.FinalistaUpdateManyWithWhereWithoutCategoriaInput[];
    deleteMany?: Prisma.FinalistaScalarWhereInput | Prisma.FinalistaScalarWhereInput[];
};
export type FinalistaUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: Prisma.XOR<Prisma.FinalistaCreateWithoutCategoriaInput, Prisma.FinalistaUncheckedCreateWithoutCategoriaInput> | Prisma.FinalistaCreateWithoutCategoriaInput[] | Prisma.FinalistaUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.FinalistaCreateOrConnectWithoutCategoriaInput | Prisma.FinalistaCreateOrConnectWithoutCategoriaInput[];
    upsert?: Prisma.FinalistaUpsertWithWhereUniqueWithoutCategoriaInput | Prisma.FinalistaUpsertWithWhereUniqueWithoutCategoriaInput[];
    createMany?: Prisma.FinalistaCreateManyCategoriaInputEnvelope;
    set?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
    disconnect?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
    delete?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
    connect?: Prisma.FinalistaWhereUniqueInput | Prisma.FinalistaWhereUniqueInput[];
    update?: Prisma.FinalistaUpdateWithWhereUniqueWithoutCategoriaInput | Prisma.FinalistaUpdateWithWhereUniqueWithoutCategoriaInput[];
    updateMany?: Prisma.FinalistaUpdateManyWithWhereWithoutCategoriaInput | Prisma.FinalistaUpdateManyWithWhereWithoutCategoriaInput[];
    deleteMany?: Prisma.FinalistaScalarWhereInput | Prisma.FinalistaScalarWhereInput[];
};
export type FinalistaCreateNestedOneWithoutVotosInput = {
    create?: Prisma.XOR<Prisma.FinalistaCreateWithoutVotosInput, Prisma.FinalistaUncheckedCreateWithoutVotosInput>;
    connectOrCreate?: Prisma.FinalistaCreateOrConnectWithoutVotosInput;
    connect?: Prisma.FinalistaWhereUniqueInput;
};
export type FinalistaUpdateOneRequiredWithoutVotosNestedInput = {
    create?: Prisma.XOR<Prisma.FinalistaCreateWithoutVotosInput, Prisma.FinalistaUncheckedCreateWithoutVotosInput>;
    connectOrCreate?: Prisma.FinalistaCreateOrConnectWithoutVotosInput;
    upsert?: Prisma.FinalistaUpsertWithoutVotosInput;
    connect?: Prisma.FinalistaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FinalistaUpdateToOneWithWhereWithoutVotosInput, Prisma.FinalistaUpdateWithoutVotosInput>, Prisma.FinalistaUncheckedUpdateWithoutVotosInput>;
};
export type FinalistaCreateNestedOneWithoutResultadosInput = {
    create?: Prisma.XOR<Prisma.FinalistaCreateWithoutResultadosInput, Prisma.FinalistaUncheckedCreateWithoutResultadosInput>;
    connectOrCreate?: Prisma.FinalistaCreateOrConnectWithoutResultadosInput;
    connect?: Prisma.FinalistaWhereUniqueInput;
};
export type FinalistaUpdateOneRequiredWithoutResultadosNestedInput = {
    create?: Prisma.XOR<Prisma.FinalistaCreateWithoutResultadosInput, Prisma.FinalistaUncheckedCreateWithoutResultadosInput>;
    connectOrCreate?: Prisma.FinalistaCreateOrConnectWithoutResultadosInput;
    upsert?: Prisma.FinalistaUpsertWithoutResultadosInput;
    connect?: Prisma.FinalistaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FinalistaUpdateToOneWithWhereWithoutResultadosInput, Prisma.FinalistaUpdateWithoutResultadosInput>, Prisma.FinalistaUncheckedUpdateWithoutResultadosInput>;
};
export type FinalistaCreateWithoutEdicaoInput = {
    id?: string;
    metaResumo?: string | null;
    ativo?: boolean;
    createdAt?: Date | string;
    categoria: Prisma.CategoriaCreateNestedOneWithoutFinalistasInput;
    inscricaoStartup: Prisma.InscricaoStartupCreateNestedOneWithoutFinalistasInput;
    votos?: Prisma.VotoCreateNestedManyWithoutFinalistaInput;
    resultados?: Prisma.ResultadoCategoriaCreateNestedManyWithoutFinalistaInput;
};
export type FinalistaUncheckedCreateWithoutEdicaoInput = {
    id?: string;
    categoriaId: string;
    inscricaoStartupId: string;
    metaResumo?: string | null;
    ativo?: boolean;
    createdAt?: Date | string;
    votos?: Prisma.VotoUncheckedCreateNestedManyWithoutFinalistaInput;
    resultados?: Prisma.ResultadoCategoriaUncheckedCreateNestedManyWithoutFinalistaInput;
};
export type FinalistaCreateOrConnectWithoutEdicaoInput = {
    where: Prisma.FinalistaWhereUniqueInput;
    create: Prisma.XOR<Prisma.FinalistaCreateWithoutEdicaoInput, Prisma.FinalistaUncheckedCreateWithoutEdicaoInput>;
};
export type FinalistaCreateManyEdicaoInputEnvelope = {
    data: Prisma.FinalistaCreateManyEdicaoInput | Prisma.FinalistaCreateManyEdicaoInput[];
    skipDuplicates?: boolean;
};
export type FinalistaUpsertWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.FinalistaWhereUniqueInput;
    update: Prisma.XOR<Prisma.FinalistaUpdateWithoutEdicaoInput, Prisma.FinalistaUncheckedUpdateWithoutEdicaoInput>;
    create: Prisma.XOR<Prisma.FinalistaCreateWithoutEdicaoInput, Prisma.FinalistaUncheckedCreateWithoutEdicaoInput>;
};
export type FinalistaUpdateWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.FinalistaWhereUniqueInput;
    data: Prisma.XOR<Prisma.FinalistaUpdateWithoutEdicaoInput, Prisma.FinalistaUncheckedUpdateWithoutEdicaoInput>;
};
export type FinalistaUpdateManyWithWhereWithoutEdicaoInput = {
    where: Prisma.FinalistaScalarWhereInput;
    data: Prisma.XOR<Prisma.FinalistaUpdateManyMutationInput, Prisma.FinalistaUncheckedUpdateManyWithoutEdicaoInput>;
};
export type FinalistaScalarWhereInput = {
    AND?: Prisma.FinalistaScalarWhereInput | Prisma.FinalistaScalarWhereInput[];
    OR?: Prisma.FinalistaScalarWhereInput[];
    NOT?: Prisma.FinalistaScalarWhereInput | Prisma.FinalistaScalarWhereInput[];
    id?: Prisma.StringFilter<"Finalista"> | string;
    edicaoId?: Prisma.StringFilter<"Finalista"> | string;
    categoriaId?: Prisma.StringFilter<"Finalista"> | string;
    inscricaoStartupId?: Prisma.StringFilter<"Finalista"> | string;
    metaResumo?: Prisma.StringNullableFilter<"Finalista"> | string | null;
    ativo?: Prisma.BoolFilter<"Finalista"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Finalista"> | Date | string;
};
export type FinalistaCreateWithoutInscricaoStartupInput = {
    id?: string;
    metaResumo?: string | null;
    ativo?: boolean;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutFinalistasInput;
    categoria: Prisma.CategoriaCreateNestedOneWithoutFinalistasInput;
    votos?: Prisma.VotoCreateNestedManyWithoutFinalistaInput;
    resultados?: Prisma.ResultadoCategoriaCreateNestedManyWithoutFinalistaInput;
};
export type FinalistaUncheckedCreateWithoutInscricaoStartupInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    metaResumo?: string | null;
    ativo?: boolean;
    createdAt?: Date | string;
    votos?: Prisma.VotoUncheckedCreateNestedManyWithoutFinalistaInput;
    resultados?: Prisma.ResultadoCategoriaUncheckedCreateNestedManyWithoutFinalistaInput;
};
export type FinalistaCreateOrConnectWithoutInscricaoStartupInput = {
    where: Prisma.FinalistaWhereUniqueInput;
    create: Prisma.XOR<Prisma.FinalistaCreateWithoutInscricaoStartupInput, Prisma.FinalistaUncheckedCreateWithoutInscricaoStartupInput>;
};
export type FinalistaCreateManyInscricaoStartupInputEnvelope = {
    data: Prisma.FinalistaCreateManyInscricaoStartupInput | Prisma.FinalistaCreateManyInscricaoStartupInput[];
    skipDuplicates?: boolean;
};
export type FinalistaUpsertWithWhereUniqueWithoutInscricaoStartupInput = {
    where: Prisma.FinalistaWhereUniqueInput;
    update: Prisma.XOR<Prisma.FinalistaUpdateWithoutInscricaoStartupInput, Prisma.FinalistaUncheckedUpdateWithoutInscricaoStartupInput>;
    create: Prisma.XOR<Prisma.FinalistaCreateWithoutInscricaoStartupInput, Prisma.FinalistaUncheckedCreateWithoutInscricaoStartupInput>;
};
export type FinalistaUpdateWithWhereUniqueWithoutInscricaoStartupInput = {
    where: Prisma.FinalistaWhereUniqueInput;
    data: Prisma.XOR<Prisma.FinalistaUpdateWithoutInscricaoStartupInput, Prisma.FinalistaUncheckedUpdateWithoutInscricaoStartupInput>;
};
export type FinalistaUpdateManyWithWhereWithoutInscricaoStartupInput = {
    where: Prisma.FinalistaScalarWhereInput;
    data: Prisma.XOR<Prisma.FinalistaUpdateManyMutationInput, Prisma.FinalistaUncheckedUpdateManyWithoutInscricaoStartupInput>;
};
export type FinalistaCreateWithoutCategoriaInput = {
    id?: string;
    metaResumo?: string | null;
    ativo?: boolean;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutFinalistasInput;
    inscricaoStartup: Prisma.InscricaoStartupCreateNestedOneWithoutFinalistasInput;
    votos?: Prisma.VotoCreateNestedManyWithoutFinalistaInput;
    resultados?: Prisma.ResultadoCategoriaCreateNestedManyWithoutFinalistaInput;
};
export type FinalistaUncheckedCreateWithoutCategoriaInput = {
    id?: string;
    edicaoId: string;
    inscricaoStartupId: string;
    metaResumo?: string | null;
    ativo?: boolean;
    createdAt?: Date | string;
    votos?: Prisma.VotoUncheckedCreateNestedManyWithoutFinalistaInput;
    resultados?: Prisma.ResultadoCategoriaUncheckedCreateNestedManyWithoutFinalistaInput;
};
export type FinalistaCreateOrConnectWithoutCategoriaInput = {
    where: Prisma.FinalistaWhereUniqueInput;
    create: Prisma.XOR<Prisma.FinalistaCreateWithoutCategoriaInput, Prisma.FinalistaUncheckedCreateWithoutCategoriaInput>;
};
export type FinalistaCreateManyCategoriaInputEnvelope = {
    data: Prisma.FinalistaCreateManyCategoriaInput | Prisma.FinalistaCreateManyCategoriaInput[];
    skipDuplicates?: boolean;
};
export type FinalistaUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: Prisma.FinalistaWhereUniqueInput;
    update: Prisma.XOR<Prisma.FinalistaUpdateWithoutCategoriaInput, Prisma.FinalistaUncheckedUpdateWithoutCategoriaInput>;
    create: Prisma.XOR<Prisma.FinalistaCreateWithoutCategoriaInput, Prisma.FinalistaUncheckedCreateWithoutCategoriaInput>;
};
export type FinalistaUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: Prisma.FinalistaWhereUniqueInput;
    data: Prisma.XOR<Prisma.FinalistaUpdateWithoutCategoriaInput, Prisma.FinalistaUncheckedUpdateWithoutCategoriaInput>;
};
export type FinalistaUpdateManyWithWhereWithoutCategoriaInput = {
    where: Prisma.FinalistaScalarWhereInput;
    data: Prisma.XOR<Prisma.FinalistaUpdateManyMutationInput, Prisma.FinalistaUncheckedUpdateManyWithoutCategoriaInput>;
};
export type FinalistaCreateWithoutVotosInput = {
    id?: string;
    metaResumo?: string | null;
    ativo?: boolean;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutFinalistasInput;
    categoria: Prisma.CategoriaCreateNestedOneWithoutFinalistasInput;
    inscricaoStartup: Prisma.InscricaoStartupCreateNestedOneWithoutFinalistasInput;
    resultados?: Prisma.ResultadoCategoriaCreateNestedManyWithoutFinalistaInput;
};
export type FinalistaUncheckedCreateWithoutVotosInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    inscricaoStartupId: string;
    metaResumo?: string | null;
    ativo?: boolean;
    createdAt?: Date | string;
    resultados?: Prisma.ResultadoCategoriaUncheckedCreateNestedManyWithoutFinalistaInput;
};
export type FinalistaCreateOrConnectWithoutVotosInput = {
    where: Prisma.FinalistaWhereUniqueInput;
    create: Prisma.XOR<Prisma.FinalistaCreateWithoutVotosInput, Prisma.FinalistaUncheckedCreateWithoutVotosInput>;
};
export type FinalistaUpsertWithoutVotosInput = {
    update: Prisma.XOR<Prisma.FinalistaUpdateWithoutVotosInput, Prisma.FinalistaUncheckedUpdateWithoutVotosInput>;
    create: Prisma.XOR<Prisma.FinalistaCreateWithoutVotosInput, Prisma.FinalistaUncheckedCreateWithoutVotosInput>;
    where?: Prisma.FinalistaWhereInput;
};
export type FinalistaUpdateToOneWithWhereWithoutVotosInput = {
    where?: Prisma.FinalistaWhereInput;
    data: Prisma.XOR<Prisma.FinalistaUpdateWithoutVotosInput, Prisma.FinalistaUncheckedUpdateWithoutVotosInput>;
};
export type FinalistaUpdateWithoutVotosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metaResumo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutFinalistasNestedInput;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutFinalistasNestedInput;
    inscricaoStartup?: Prisma.InscricaoStartupUpdateOneRequiredWithoutFinalistasNestedInput;
    resultados?: Prisma.ResultadoCategoriaUpdateManyWithoutFinalistaNestedInput;
};
export type FinalistaUncheckedUpdateWithoutVotosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    metaResumo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resultados?: Prisma.ResultadoCategoriaUncheckedUpdateManyWithoutFinalistaNestedInput;
};
export type FinalistaCreateWithoutResultadosInput = {
    id?: string;
    metaResumo?: string | null;
    ativo?: boolean;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutFinalistasInput;
    categoria: Prisma.CategoriaCreateNestedOneWithoutFinalistasInput;
    inscricaoStartup: Prisma.InscricaoStartupCreateNestedOneWithoutFinalistasInput;
    votos?: Prisma.VotoCreateNestedManyWithoutFinalistaInput;
};
export type FinalistaUncheckedCreateWithoutResultadosInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    inscricaoStartupId: string;
    metaResumo?: string | null;
    ativo?: boolean;
    createdAt?: Date | string;
    votos?: Prisma.VotoUncheckedCreateNestedManyWithoutFinalistaInput;
};
export type FinalistaCreateOrConnectWithoutResultadosInput = {
    where: Prisma.FinalistaWhereUniqueInput;
    create: Prisma.XOR<Prisma.FinalistaCreateWithoutResultadosInput, Prisma.FinalistaUncheckedCreateWithoutResultadosInput>;
};
export type FinalistaUpsertWithoutResultadosInput = {
    update: Prisma.XOR<Prisma.FinalistaUpdateWithoutResultadosInput, Prisma.FinalistaUncheckedUpdateWithoutResultadosInput>;
    create: Prisma.XOR<Prisma.FinalistaCreateWithoutResultadosInput, Prisma.FinalistaUncheckedCreateWithoutResultadosInput>;
    where?: Prisma.FinalistaWhereInput;
};
export type FinalistaUpdateToOneWithWhereWithoutResultadosInput = {
    where?: Prisma.FinalistaWhereInput;
    data: Prisma.XOR<Prisma.FinalistaUpdateWithoutResultadosInput, Prisma.FinalistaUncheckedUpdateWithoutResultadosInput>;
};
export type FinalistaUpdateWithoutResultadosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metaResumo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutFinalistasNestedInput;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutFinalistasNestedInput;
    inscricaoStartup?: Prisma.InscricaoStartupUpdateOneRequiredWithoutFinalistasNestedInput;
    votos?: Prisma.VotoUpdateManyWithoutFinalistaNestedInput;
};
export type FinalistaUncheckedUpdateWithoutResultadosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    metaResumo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    votos?: Prisma.VotoUncheckedUpdateManyWithoutFinalistaNestedInput;
};
export type FinalistaCreateManyEdicaoInput = {
    id?: string;
    categoriaId: string;
    inscricaoStartupId: string;
    metaResumo?: string | null;
    ativo?: boolean;
    createdAt?: Date | string;
};
export type FinalistaUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metaResumo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutFinalistasNestedInput;
    inscricaoStartup?: Prisma.InscricaoStartupUpdateOneRequiredWithoutFinalistasNestedInput;
    votos?: Prisma.VotoUpdateManyWithoutFinalistaNestedInput;
    resultados?: Prisma.ResultadoCategoriaUpdateManyWithoutFinalistaNestedInput;
};
export type FinalistaUncheckedUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    metaResumo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    votos?: Prisma.VotoUncheckedUpdateManyWithoutFinalistaNestedInput;
    resultados?: Prisma.ResultadoCategoriaUncheckedUpdateManyWithoutFinalistaNestedInput;
};
export type FinalistaUncheckedUpdateManyWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    metaResumo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FinalistaCreateManyInscricaoStartupInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    metaResumo?: string | null;
    ativo?: boolean;
    createdAt?: Date | string;
};
export type FinalistaUpdateWithoutInscricaoStartupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metaResumo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutFinalistasNestedInput;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutFinalistasNestedInput;
    votos?: Prisma.VotoUpdateManyWithoutFinalistaNestedInput;
    resultados?: Prisma.ResultadoCategoriaUpdateManyWithoutFinalistaNestedInput;
};
export type FinalistaUncheckedUpdateWithoutInscricaoStartupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    metaResumo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    votos?: Prisma.VotoUncheckedUpdateManyWithoutFinalistaNestedInput;
    resultados?: Prisma.ResultadoCategoriaUncheckedUpdateManyWithoutFinalistaNestedInput;
};
export type FinalistaUncheckedUpdateManyWithoutInscricaoStartupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    metaResumo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FinalistaCreateManyCategoriaInput = {
    id?: string;
    edicaoId: string;
    inscricaoStartupId: string;
    metaResumo?: string | null;
    ativo?: boolean;
    createdAt?: Date | string;
};
export type FinalistaUpdateWithoutCategoriaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    metaResumo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutFinalistasNestedInput;
    inscricaoStartup?: Prisma.InscricaoStartupUpdateOneRequiredWithoutFinalistasNestedInput;
    votos?: Prisma.VotoUpdateManyWithoutFinalistaNestedInput;
    resultados?: Prisma.ResultadoCategoriaUpdateManyWithoutFinalistaNestedInput;
};
export type FinalistaUncheckedUpdateWithoutCategoriaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    metaResumo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    votos?: Prisma.VotoUncheckedUpdateManyWithoutFinalistaNestedInput;
    resultados?: Prisma.ResultadoCategoriaUncheckedUpdateManyWithoutFinalistaNestedInput;
};
export type FinalistaUncheckedUpdateManyWithoutCategoriaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    metaResumo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FinalistaCountOutputType = {
    votos: number;
    resultados: number;
};
export type FinalistaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    votos?: boolean | FinalistaCountOutputTypeCountVotosArgs;
    resultados?: boolean | FinalistaCountOutputTypeCountResultadosArgs;
};
export type FinalistaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FinalistaCountOutputTypeSelect<ExtArgs> | null;
};
export type FinalistaCountOutputTypeCountVotosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VotoWhereInput;
};
export type FinalistaCountOutputTypeCountResultadosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResultadoCategoriaWhereInput;
};
export type FinalistaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    categoriaId?: boolean;
    inscricaoStartupId?: boolean;
    metaResumo?: boolean;
    ativo?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    inscricaoStartup?: boolean | Prisma.InscricaoStartupDefaultArgs<ExtArgs>;
    votos?: boolean | Prisma.Finalista$votosArgs<ExtArgs>;
    resultados?: boolean | Prisma.Finalista$resultadosArgs<ExtArgs>;
    _count?: boolean | Prisma.FinalistaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["finalista"]>;
export type FinalistaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    categoriaId?: boolean;
    inscricaoStartupId?: boolean;
    metaResumo?: boolean;
    ativo?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    inscricaoStartup?: boolean | Prisma.InscricaoStartupDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["finalista"]>;
export type FinalistaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    categoriaId?: boolean;
    inscricaoStartupId?: boolean;
    metaResumo?: boolean;
    ativo?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    inscricaoStartup?: boolean | Prisma.InscricaoStartupDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["finalista"]>;
export type FinalistaSelectScalar = {
    id?: boolean;
    edicaoId?: boolean;
    categoriaId?: boolean;
    inscricaoStartupId?: boolean;
    metaResumo?: boolean;
    ativo?: boolean;
    createdAt?: boolean;
};
export type FinalistaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "edicaoId" | "categoriaId" | "inscricaoStartupId" | "metaResumo" | "ativo" | "createdAt", ExtArgs["result"]["finalista"]>;
export type FinalistaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    inscricaoStartup?: boolean | Prisma.InscricaoStartupDefaultArgs<ExtArgs>;
    votos?: boolean | Prisma.Finalista$votosArgs<ExtArgs>;
    resultados?: boolean | Prisma.Finalista$resultadosArgs<ExtArgs>;
    _count?: boolean | Prisma.FinalistaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type FinalistaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    inscricaoStartup?: boolean | Prisma.InscricaoStartupDefaultArgs<ExtArgs>;
};
export type FinalistaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    inscricaoStartup?: boolean | Prisma.InscricaoStartupDefaultArgs<ExtArgs>;
};
export type $FinalistaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Finalista";
    objects: {
        edicao: Prisma.$EdicaoPayload<ExtArgs>;
        categoria: Prisma.$CategoriaPayload<ExtArgs>;
        inscricaoStartup: Prisma.$InscricaoStartupPayload<ExtArgs>;
        votos: Prisma.$VotoPayload<ExtArgs>[];
        resultados: Prisma.$ResultadoCategoriaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        edicaoId: string;
        categoriaId: string;
        inscricaoStartupId: string;
        metaResumo: string | null;
        ativo: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["finalista"]>;
    composites: {};
};
export type FinalistaGetPayload<S extends boolean | null | undefined | FinalistaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FinalistaPayload, S>;
export type FinalistaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FinalistaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FinalistaCountAggregateInputType | true;
};
export interface FinalistaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Finalista'];
        meta: {
            name: 'Finalista';
        };
    };
    findUnique<T extends FinalistaFindUniqueArgs>(args: Prisma.SelectSubset<T, FinalistaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FinalistaClient<runtime.Types.Result.GetResult<Prisma.$FinalistaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FinalistaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FinalistaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FinalistaClient<runtime.Types.Result.GetResult<Prisma.$FinalistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FinalistaFindFirstArgs>(args?: Prisma.SelectSubset<T, FinalistaFindFirstArgs<ExtArgs>>): Prisma.Prisma__FinalistaClient<runtime.Types.Result.GetResult<Prisma.$FinalistaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FinalistaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FinalistaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FinalistaClient<runtime.Types.Result.GetResult<Prisma.$FinalistaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FinalistaFindManyArgs>(args?: Prisma.SelectSubset<T, FinalistaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FinalistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FinalistaCreateArgs>(args: Prisma.SelectSubset<T, FinalistaCreateArgs<ExtArgs>>): Prisma.Prisma__FinalistaClient<runtime.Types.Result.GetResult<Prisma.$FinalistaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FinalistaCreateManyArgs>(args?: Prisma.SelectSubset<T, FinalistaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FinalistaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FinalistaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FinalistaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FinalistaDeleteArgs>(args: Prisma.SelectSubset<T, FinalistaDeleteArgs<ExtArgs>>): Prisma.Prisma__FinalistaClient<runtime.Types.Result.GetResult<Prisma.$FinalistaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FinalistaUpdateArgs>(args: Prisma.SelectSubset<T, FinalistaUpdateArgs<ExtArgs>>): Prisma.Prisma__FinalistaClient<runtime.Types.Result.GetResult<Prisma.$FinalistaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FinalistaDeleteManyArgs>(args?: Prisma.SelectSubset<T, FinalistaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FinalistaUpdateManyArgs>(args: Prisma.SelectSubset<T, FinalistaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FinalistaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FinalistaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FinalistaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FinalistaUpsertArgs>(args: Prisma.SelectSubset<T, FinalistaUpsertArgs<ExtArgs>>): Prisma.Prisma__FinalistaClient<runtime.Types.Result.GetResult<Prisma.$FinalistaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FinalistaCountArgs>(args?: Prisma.Subset<T, FinalistaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FinalistaCountAggregateOutputType> : number>;
    aggregate<T extends FinalistaAggregateArgs>(args: Prisma.Subset<T, FinalistaAggregateArgs>): Prisma.PrismaPromise<GetFinalistaAggregateType<T>>;
    groupBy<T extends FinalistaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FinalistaGroupByArgs['orderBy'];
    } : {
        orderBy?: FinalistaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FinalistaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinalistaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FinalistaFieldRefs;
}
export interface Prisma__FinalistaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    edicao<T extends Prisma.EdicaoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EdicaoDefaultArgs<ExtArgs>>): Prisma.Prisma__EdicaoClient<runtime.Types.Result.GetResult<Prisma.$EdicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    categoria<T extends Prisma.CategoriaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoriaDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoriaClient<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    inscricaoStartup<T extends Prisma.InscricaoStartupDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InscricaoStartupDefaultArgs<ExtArgs>>): Prisma.Prisma__InscricaoStartupClient<runtime.Types.Result.GetResult<Prisma.$InscricaoStartupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    votos<T extends Prisma.Finalista$votosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Finalista$votosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    resultados<T extends Prisma.Finalista$resultadosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Finalista$resultadosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResultadoCategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FinalistaFieldRefs {
    readonly id: Prisma.FieldRef<"Finalista", 'String'>;
    readonly edicaoId: Prisma.FieldRef<"Finalista", 'String'>;
    readonly categoriaId: Prisma.FieldRef<"Finalista", 'String'>;
    readonly inscricaoStartupId: Prisma.FieldRef<"Finalista", 'String'>;
    readonly metaResumo: Prisma.FieldRef<"Finalista", 'String'>;
    readonly ativo: Prisma.FieldRef<"Finalista", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Finalista", 'DateTime'>;
}
export type FinalistaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FinalistaSelect<ExtArgs> | null;
    omit?: Prisma.FinalistaOmit<ExtArgs> | null;
    include?: Prisma.FinalistaInclude<ExtArgs> | null;
    where: Prisma.FinalistaWhereUniqueInput;
};
export type FinalistaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FinalistaSelect<ExtArgs> | null;
    omit?: Prisma.FinalistaOmit<ExtArgs> | null;
    include?: Prisma.FinalistaInclude<ExtArgs> | null;
    where: Prisma.FinalistaWhereUniqueInput;
};
export type FinalistaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FinalistaSelect<ExtArgs> | null;
    omit?: Prisma.FinalistaOmit<ExtArgs> | null;
    include?: Prisma.FinalistaInclude<ExtArgs> | null;
    where?: Prisma.FinalistaWhereInput;
    orderBy?: Prisma.FinalistaOrderByWithRelationInput | Prisma.FinalistaOrderByWithRelationInput[];
    cursor?: Prisma.FinalistaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FinalistaScalarFieldEnum | Prisma.FinalistaScalarFieldEnum[];
};
export type FinalistaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FinalistaSelect<ExtArgs> | null;
    omit?: Prisma.FinalistaOmit<ExtArgs> | null;
    include?: Prisma.FinalistaInclude<ExtArgs> | null;
    where?: Prisma.FinalistaWhereInput;
    orderBy?: Prisma.FinalistaOrderByWithRelationInput | Prisma.FinalistaOrderByWithRelationInput[];
    cursor?: Prisma.FinalistaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FinalistaScalarFieldEnum | Prisma.FinalistaScalarFieldEnum[];
};
export type FinalistaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FinalistaSelect<ExtArgs> | null;
    omit?: Prisma.FinalistaOmit<ExtArgs> | null;
    include?: Prisma.FinalistaInclude<ExtArgs> | null;
    where?: Prisma.FinalistaWhereInput;
    orderBy?: Prisma.FinalistaOrderByWithRelationInput | Prisma.FinalistaOrderByWithRelationInput[];
    cursor?: Prisma.FinalistaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FinalistaScalarFieldEnum | Prisma.FinalistaScalarFieldEnum[];
};
export type FinalistaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FinalistaSelect<ExtArgs> | null;
    omit?: Prisma.FinalistaOmit<ExtArgs> | null;
    include?: Prisma.FinalistaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FinalistaCreateInput, Prisma.FinalistaUncheckedCreateInput>;
};
export type FinalistaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FinalistaCreateManyInput | Prisma.FinalistaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FinalistaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FinalistaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FinalistaOmit<ExtArgs> | null;
    data: Prisma.FinalistaCreateManyInput | Prisma.FinalistaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FinalistaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FinalistaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FinalistaSelect<ExtArgs> | null;
    omit?: Prisma.FinalistaOmit<ExtArgs> | null;
    include?: Prisma.FinalistaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FinalistaUpdateInput, Prisma.FinalistaUncheckedUpdateInput>;
    where: Prisma.FinalistaWhereUniqueInput;
};
export type FinalistaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FinalistaUpdateManyMutationInput, Prisma.FinalistaUncheckedUpdateManyInput>;
    where?: Prisma.FinalistaWhereInput;
    limit?: number;
};
export type FinalistaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FinalistaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FinalistaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FinalistaUpdateManyMutationInput, Prisma.FinalistaUncheckedUpdateManyInput>;
    where?: Prisma.FinalistaWhereInput;
    limit?: number;
    include?: Prisma.FinalistaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FinalistaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FinalistaSelect<ExtArgs> | null;
    omit?: Prisma.FinalistaOmit<ExtArgs> | null;
    include?: Prisma.FinalistaInclude<ExtArgs> | null;
    where: Prisma.FinalistaWhereUniqueInput;
    create: Prisma.XOR<Prisma.FinalistaCreateInput, Prisma.FinalistaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FinalistaUpdateInput, Prisma.FinalistaUncheckedUpdateInput>;
};
export type FinalistaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FinalistaSelect<ExtArgs> | null;
    omit?: Prisma.FinalistaOmit<ExtArgs> | null;
    include?: Prisma.FinalistaInclude<ExtArgs> | null;
    where: Prisma.FinalistaWhereUniqueInput;
};
export type FinalistaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FinalistaWhereInput;
    limit?: number;
};
export type Finalista$votosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VotoSelect<ExtArgs> | null;
    omit?: Prisma.VotoOmit<ExtArgs> | null;
    include?: Prisma.VotoInclude<ExtArgs> | null;
    where?: Prisma.VotoWhereInput;
    orderBy?: Prisma.VotoOrderByWithRelationInput | Prisma.VotoOrderByWithRelationInput[];
    cursor?: Prisma.VotoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VotoScalarFieldEnum | Prisma.VotoScalarFieldEnum[];
};
export type Finalista$resultadosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type FinalistaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FinalistaSelect<ExtArgs> | null;
    omit?: Prisma.FinalistaOmit<ExtArgs> | null;
    include?: Prisma.FinalistaInclude<ExtArgs> | null;
};
