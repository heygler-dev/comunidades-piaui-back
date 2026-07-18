import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ResultadoCategoriaModel = runtime.Types.Result.DefaultSelection<Prisma.$ResultadoCategoriaPayload>;
export type AggregateResultadoCategoria = {
    _count: ResultadoCategoriaCountAggregateOutputType | null;
    _avg: ResultadoCategoriaAvgAggregateOutputType | null;
    _sum: ResultadoCategoriaSumAggregateOutputType | null;
    _min: ResultadoCategoriaMinAggregateOutputType | null;
    _max: ResultadoCategoriaMaxAggregateOutputType | null;
};
export type ResultadoCategoriaAvgAggregateOutputType = {
    totalVotos: number | null;
};
export type ResultadoCategoriaSumAggregateOutputType = {
    totalVotos: number | null;
};
export type ResultadoCategoriaMinAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    categoriaId: string | null;
    finalistaId: string | null;
    totalVotos: number | null;
    publicadoEm: Date | null;
    validadoPorId: string | null;
    createdAt: Date | null;
};
export type ResultadoCategoriaMaxAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    categoriaId: string | null;
    finalistaId: string | null;
    totalVotos: number | null;
    publicadoEm: Date | null;
    validadoPorId: string | null;
    createdAt: Date | null;
};
export type ResultadoCategoriaCountAggregateOutputType = {
    id: number;
    edicaoId: number;
    categoriaId: number;
    finalistaId: number;
    totalVotos: number;
    publicadoEm: number;
    validadoPorId: number;
    createdAt: number;
    _all: number;
};
export type ResultadoCategoriaAvgAggregateInputType = {
    totalVotos?: true;
};
export type ResultadoCategoriaSumAggregateInputType = {
    totalVotos?: true;
};
export type ResultadoCategoriaMinAggregateInputType = {
    id?: true;
    edicaoId?: true;
    categoriaId?: true;
    finalistaId?: true;
    totalVotos?: true;
    publicadoEm?: true;
    validadoPorId?: true;
    createdAt?: true;
};
export type ResultadoCategoriaMaxAggregateInputType = {
    id?: true;
    edicaoId?: true;
    categoriaId?: true;
    finalistaId?: true;
    totalVotos?: true;
    publicadoEm?: true;
    validadoPorId?: true;
    createdAt?: true;
};
export type ResultadoCategoriaCountAggregateInputType = {
    id?: true;
    edicaoId?: true;
    categoriaId?: true;
    finalistaId?: true;
    totalVotos?: true;
    publicadoEm?: true;
    validadoPorId?: true;
    createdAt?: true;
    _all?: true;
};
export type ResultadoCategoriaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResultadoCategoriaWhereInput;
    orderBy?: Prisma.ResultadoCategoriaOrderByWithRelationInput | Prisma.ResultadoCategoriaOrderByWithRelationInput[];
    cursor?: Prisma.ResultadoCategoriaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ResultadoCategoriaCountAggregateInputType;
    _avg?: ResultadoCategoriaAvgAggregateInputType;
    _sum?: ResultadoCategoriaSumAggregateInputType;
    _min?: ResultadoCategoriaMinAggregateInputType;
    _max?: ResultadoCategoriaMaxAggregateInputType;
};
export type GetResultadoCategoriaAggregateType<T extends ResultadoCategoriaAggregateArgs> = {
    [P in keyof T & keyof AggregateResultadoCategoria]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateResultadoCategoria[P]> : Prisma.GetScalarType<T[P], AggregateResultadoCategoria[P]>;
};
export type ResultadoCategoriaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResultadoCategoriaWhereInput;
    orderBy?: Prisma.ResultadoCategoriaOrderByWithAggregationInput | Prisma.ResultadoCategoriaOrderByWithAggregationInput[];
    by: Prisma.ResultadoCategoriaScalarFieldEnum[] | Prisma.ResultadoCategoriaScalarFieldEnum;
    having?: Prisma.ResultadoCategoriaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ResultadoCategoriaCountAggregateInputType | true;
    _avg?: ResultadoCategoriaAvgAggregateInputType;
    _sum?: ResultadoCategoriaSumAggregateInputType;
    _min?: ResultadoCategoriaMinAggregateInputType;
    _max?: ResultadoCategoriaMaxAggregateInputType;
};
export type ResultadoCategoriaGroupByOutputType = {
    id: string;
    edicaoId: string;
    categoriaId: string;
    finalistaId: string;
    totalVotos: number;
    publicadoEm: Date | null;
    validadoPorId: string | null;
    createdAt: Date;
    _count: ResultadoCategoriaCountAggregateOutputType | null;
    _avg: ResultadoCategoriaAvgAggregateOutputType | null;
    _sum: ResultadoCategoriaSumAggregateOutputType | null;
    _min: ResultadoCategoriaMinAggregateOutputType | null;
    _max: ResultadoCategoriaMaxAggregateOutputType | null;
};
export type GetResultadoCategoriaGroupByPayload<T extends ResultadoCategoriaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ResultadoCategoriaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ResultadoCategoriaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ResultadoCategoriaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ResultadoCategoriaGroupByOutputType[P]>;
}>>;
export type ResultadoCategoriaWhereInput = {
    AND?: Prisma.ResultadoCategoriaWhereInput | Prisma.ResultadoCategoriaWhereInput[];
    OR?: Prisma.ResultadoCategoriaWhereInput[];
    NOT?: Prisma.ResultadoCategoriaWhereInput | Prisma.ResultadoCategoriaWhereInput[];
    id?: Prisma.StringFilter<"ResultadoCategoria"> | string;
    edicaoId?: Prisma.StringFilter<"ResultadoCategoria"> | string;
    categoriaId?: Prisma.StringFilter<"ResultadoCategoria"> | string;
    finalistaId?: Prisma.StringFilter<"ResultadoCategoria"> | string;
    totalVotos?: Prisma.IntFilter<"ResultadoCategoria"> | number;
    publicadoEm?: Prisma.DateTimeNullableFilter<"ResultadoCategoria"> | Date | string | null;
    validadoPorId?: Prisma.StringNullableFilter<"ResultadoCategoria"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ResultadoCategoria"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
    categoria?: Prisma.XOR<Prisma.CategoriaScalarRelationFilter, Prisma.CategoriaWhereInput>;
    finalista?: Prisma.XOR<Prisma.FinalistaScalarRelationFilter, Prisma.FinalistaWhereInput>;
    validadoPor?: Prisma.XOR<Prisma.UsuarioAdminNullableScalarRelationFilter, Prisma.UsuarioAdminWhereInput> | null;
};
export type ResultadoCategoriaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    finalistaId?: Prisma.SortOrder;
    totalVotos?: Prisma.SortOrder;
    publicadoEm?: Prisma.SortOrderInput | Prisma.SortOrder;
    validadoPorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    edicao?: Prisma.EdicaoOrderByWithRelationInput;
    categoria?: Prisma.CategoriaOrderByWithRelationInput;
    finalista?: Prisma.FinalistaOrderByWithRelationInput;
    validadoPor?: Prisma.UsuarioAdminOrderByWithRelationInput;
};
export type ResultadoCategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    edicaoId_categoriaId?: Prisma.ResultadoCategoriaEdicaoIdCategoriaIdCompoundUniqueInput;
    AND?: Prisma.ResultadoCategoriaWhereInput | Prisma.ResultadoCategoriaWhereInput[];
    OR?: Prisma.ResultadoCategoriaWhereInput[];
    NOT?: Prisma.ResultadoCategoriaWhereInput | Prisma.ResultadoCategoriaWhereInput[];
    edicaoId?: Prisma.StringFilter<"ResultadoCategoria"> | string;
    categoriaId?: Prisma.StringFilter<"ResultadoCategoria"> | string;
    finalistaId?: Prisma.StringFilter<"ResultadoCategoria"> | string;
    totalVotos?: Prisma.IntFilter<"ResultadoCategoria"> | number;
    publicadoEm?: Prisma.DateTimeNullableFilter<"ResultadoCategoria"> | Date | string | null;
    validadoPorId?: Prisma.StringNullableFilter<"ResultadoCategoria"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ResultadoCategoria"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
    categoria?: Prisma.XOR<Prisma.CategoriaScalarRelationFilter, Prisma.CategoriaWhereInput>;
    finalista?: Prisma.XOR<Prisma.FinalistaScalarRelationFilter, Prisma.FinalistaWhereInput>;
    validadoPor?: Prisma.XOR<Prisma.UsuarioAdminNullableScalarRelationFilter, Prisma.UsuarioAdminWhereInput> | null;
}, "id" | "edicaoId_categoriaId">;
export type ResultadoCategoriaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    finalistaId?: Prisma.SortOrder;
    totalVotos?: Prisma.SortOrder;
    publicadoEm?: Prisma.SortOrderInput | Prisma.SortOrder;
    validadoPorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ResultadoCategoriaCountOrderByAggregateInput;
    _avg?: Prisma.ResultadoCategoriaAvgOrderByAggregateInput;
    _max?: Prisma.ResultadoCategoriaMaxOrderByAggregateInput;
    _min?: Prisma.ResultadoCategoriaMinOrderByAggregateInput;
    _sum?: Prisma.ResultadoCategoriaSumOrderByAggregateInput;
};
export type ResultadoCategoriaScalarWhereWithAggregatesInput = {
    AND?: Prisma.ResultadoCategoriaScalarWhereWithAggregatesInput | Prisma.ResultadoCategoriaScalarWhereWithAggregatesInput[];
    OR?: Prisma.ResultadoCategoriaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ResultadoCategoriaScalarWhereWithAggregatesInput | Prisma.ResultadoCategoriaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ResultadoCategoria"> | string;
    edicaoId?: Prisma.StringWithAggregatesFilter<"ResultadoCategoria"> | string;
    categoriaId?: Prisma.StringWithAggregatesFilter<"ResultadoCategoria"> | string;
    finalistaId?: Prisma.StringWithAggregatesFilter<"ResultadoCategoria"> | string;
    totalVotos?: Prisma.IntWithAggregatesFilter<"ResultadoCategoria"> | number;
    publicadoEm?: Prisma.DateTimeNullableWithAggregatesFilter<"ResultadoCategoria"> | Date | string | null;
    validadoPorId?: Prisma.StringNullableWithAggregatesFilter<"ResultadoCategoria"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ResultadoCategoria"> | Date | string;
};
export type ResultadoCategoriaCreateInput = {
    id?: string;
    totalVotos: number;
    publicadoEm?: Date | string | null;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutResultadosInput;
    categoria: Prisma.CategoriaCreateNestedOneWithoutResultadosInput;
    finalista: Prisma.FinalistaCreateNestedOneWithoutResultadosInput;
    validadoPor?: Prisma.UsuarioAdminCreateNestedOneWithoutResultadosValidadosInput;
};
export type ResultadoCategoriaUncheckedCreateInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    finalistaId: string;
    totalVotos: number;
    publicadoEm?: Date | string | null;
    validadoPorId?: string | null;
    createdAt?: Date | string;
};
export type ResultadoCategoriaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalVotos?: Prisma.IntFieldUpdateOperationsInput | number;
    publicadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutResultadosNestedInput;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutResultadosNestedInput;
    finalista?: Prisma.FinalistaUpdateOneRequiredWithoutResultadosNestedInput;
    validadoPor?: Prisma.UsuarioAdminUpdateOneWithoutResultadosValidadosNestedInput;
};
export type ResultadoCategoriaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    finalistaId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalVotos?: Prisma.IntFieldUpdateOperationsInput | number;
    publicadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validadoPorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResultadoCategoriaCreateManyInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    finalistaId: string;
    totalVotos: number;
    publicadoEm?: Date | string | null;
    validadoPorId?: string | null;
    createdAt?: Date | string;
};
export type ResultadoCategoriaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalVotos?: Prisma.IntFieldUpdateOperationsInput | number;
    publicadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResultadoCategoriaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    finalistaId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalVotos?: Prisma.IntFieldUpdateOperationsInput | number;
    publicadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validadoPorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResultadoCategoriaListRelationFilter = {
    every?: Prisma.ResultadoCategoriaWhereInput;
    some?: Prisma.ResultadoCategoriaWhereInput;
    none?: Prisma.ResultadoCategoriaWhereInput;
};
export type ResultadoCategoriaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ResultadoCategoriaEdicaoIdCategoriaIdCompoundUniqueInput = {
    edicaoId: string;
    categoriaId: string;
};
export type ResultadoCategoriaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    finalistaId?: Prisma.SortOrder;
    totalVotos?: Prisma.SortOrder;
    publicadoEm?: Prisma.SortOrder;
    validadoPorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ResultadoCategoriaAvgOrderByAggregateInput = {
    totalVotos?: Prisma.SortOrder;
};
export type ResultadoCategoriaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    finalistaId?: Prisma.SortOrder;
    totalVotos?: Prisma.SortOrder;
    publicadoEm?: Prisma.SortOrder;
    validadoPorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ResultadoCategoriaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    finalistaId?: Prisma.SortOrder;
    totalVotos?: Prisma.SortOrder;
    publicadoEm?: Prisma.SortOrder;
    validadoPorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ResultadoCategoriaSumOrderByAggregateInput = {
    totalVotos?: Prisma.SortOrder;
};
export type ResultadoCategoriaCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.ResultadoCategoriaCreateWithoutEdicaoInput, Prisma.ResultadoCategoriaUncheckedCreateWithoutEdicaoInput> | Prisma.ResultadoCategoriaCreateWithoutEdicaoInput[] | Prisma.ResultadoCategoriaUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.ResultadoCategoriaCreateOrConnectWithoutEdicaoInput | Prisma.ResultadoCategoriaCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.ResultadoCategoriaCreateManyEdicaoInputEnvelope;
    connect?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
};
export type ResultadoCategoriaUncheckedCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.ResultadoCategoriaCreateWithoutEdicaoInput, Prisma.ResultadoCategoriaUncheckedCreateWithoutEdicaoInput> | Prisma.ResultadoCategoriaCreateWithoutEdicaoInput[] | Prisma.ResultadoCategoriaUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.ResultadoCategoriaCreateOrConnectWithoutEdicaoInput | Prisma.ResultadoCategoriaCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.ResultadoCategoriaCreateManyEdicaoInputEnvelope;
    connect?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
};
export type ResultadoCategoriaUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.ResultadoCategoriaCreateWithoutEdicaoInput, Prisma.ResultadoCategoriaUncheckedCreateWithoutEdicaoInput> | Prisma.ResultadoCategoriaCreateWithoutEdicaoInput[] | Prisma.ResultadoCategoriaUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.ResultadoCategoriaCreateOrConnectWithoutEdicaoInput | Prisma.ResultadoCategoriaCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.ResultadoCategoriaUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.ResultadoCategoriaUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.ResultadoCategoriaCreateManyEdicaoInputEnvelope;
    set?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    disconnect?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    delete?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    connect?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    update?: Prisma.ResultadoCategoriaUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.ResultadoCategoriaUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.ResultadoCategoriaUpdateManyWithWhereWithoutEdicaoInput | Prisma.ResultadoCategoriaUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.ResultadoCategoriaScalarWhereInput | Prisma.ResultadoCategoriaScalarWhereInput[];
};
export type ResultadoCategoriaUncheckedUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.ResultadoCategoriaCreateWithoutEdicaoInput, Prisma.ResultadoCategoriaUncheckedCreateWithoutEdicaoInput> | Prisma.ResultadoCategoriaCreateWithoutEdicaoInput[] | Prisma.ResultadoCategoriaUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.ResultadoCategoriaCreateOrConnectWithoutEdicaoInput | Prisma.ResultadoCategoriaCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.ResultadoCategoriaUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.ResultadoCategoriaUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.ResultadoCategoriaCreateManyEdicaoInputEnvelope;
    set?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    disconnect?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    delete?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    connect?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    update?: Prisma.ResultadoCategoriaUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.ResultadoCategoriaUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.ResultadoCategoriaUpdateManyWithWhereWithoutEdicaoInput | Prisma.ResultadoCategoriaUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.ResultadoCategoriaScalarWhereInput | Prisma.ResultadoCategoriaScalarWhereInput[];
};
export type ResultadoCategoriaCreateNestedManyWithoutValidadoPorInput = {
    create?: Prisma.XOR<Prisma.ResultadoCategoriaCreateWithoutValidadoPorInput, Prisma.ResultadoCategoriaUncheckedCreateWithoutValidadoPorInput> | Prisma.ResultadoCategoriaCreateWithoutValidadoPorInput[] | Prisma.ResultadoCategoriaUncheckedCreateWithoutValidadoPorInput[];
    connectOrCreate?: Prisma.ResultadoCategoriaCreateOrConnectWithoutValidadoPorInput | Prisma.ResultadoCategoriaCreateOrConnectWithoutValidadoPorInput[];
    createMany?: Prisma.ResultadoCategoriaCreateManyValidadoPorInputEnvelope;
    connect?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
};
export type ResultadoCategoriaUncheckedCreateNestedManyWithoutValidadoPorInput = {
    create?: Prisma.XOR<Prisma.ResultadoCategoriaCreateWithoutValidadoPorInput, Prisma.ResultadoCategoriaUncheckedCreateWithoutValidadoPorInput> | Prisma.ResultadoCategoriaCreateWithoutValidadoPorInput[] | Prisma.ResultadoCategoriaUncheckedCreateWithoutValidadoPorInput[];
    connectOrCreate?: Prisma.ResultadoCategoriaCreateOrConnectWithoutValidadoPorInput | Prisma.ResultadoCategoriaCreateOrConnectWithoutValidadoPorInput[];
    createMany?: Prisma.ResultadoCategoriaCreateManyValidadoPorInputEnvelope;
    connect?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
};
export type ResultadoCategoriaUpdateManyWithoutValidadoPorNestedInput = {
    create?: Prisma.XOR<Prisma.ResultadoCategoriaCreateWithoutValidadoPorInput, Prisma.ResultadoCategoriaUncheckedCreateWithoutValidadoPorInput> | Prisma.ResultadoCategoriaCreateWithoutValidadoPorInput[] | Prisma.ResultadoCategoriaUncheckedCreateWithoutValidadoPorInput[];
    connectOrCreate?: Prisma.ResultadoCategoriaCreateOrConnectWithoutValidadoPorInput | Prisma.ResultadoCategoriaCreateOrConnectWithoutValidadoPorInput[];
    upsert?: Prisma.ResultadoCategoriaUpsertWithWhereUniqueWithoutValidadoPorInput | Prisma.ResultadoCategoriaUpsertWithWhereUniqueWithoutValidadoPorInput[];
    createMany?: Prisma.ResultadoCategoriaCreateManyValidadoPorInputEnvelope;
    set?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    disconnect?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    delete?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    connect?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    update?: Prisma.ResultadoCategoriaUpdateWithWhereUniqueWithoutValidadoPorInput | Prisma.ResultadoCategoriaUpdateWithWhereUniqueWithoutValidadoPorInput[];
    updateMany?: Prisma.ResultadoCategoriaUpdateManyWithWhereWithoutValidadoPorInput | Prisma.ResultadoCategoriaUpdateManyWithWhereWithoutValidadoPorInput[];
    deleteMany?: Prisma.ResultadoCategoriaScalarWhereInput | Prisma.ResultadoCategoriaScalarWhereInput[];
};
export type ResultadoCategoriaUncheckedUpdateManyWithoutValidadoPorNestedInput = {
    create?: Prisma.XOR<Prisma.ResultadoCategoriaCreateWithoutValidadoPorInput, Prisma.ResultadoCategoriaUncheckedCreateWithoutValidadoPorInput> | Prisma.ResultadoCategoriaCreateWithoutValidadoPorInput[] | Prisma.ResultadoCategoriaUncheckedCreateWithoutValidadoPorInput[];
    connectOrCreate?: Prisma.ResultadoCategoriaCreateOrConnectWithoutValidadoPorInput | Prisma.ResultadoCategoriaCreateOrConnectWithoutValidadoPorInput[];
    upsert?: Prisma.ResultadoCategoriaUpsertWithWhereUniqueWithoutValidadoPorInput | Prisma.ResultadoCategoriaUpsertWithWhereUniqueWithoutValidadoPorInput[];
    createMany?: Prisma.ResultadoCategoriaCreateManyValidadoPorInputEnvelope;
    set?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    disconnect?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    delete?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    connect?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    update?: Prisma.ResultadoCategoriaUpdateWithWhereUniqueWithoutValidadoPorInput | Prisma.ResultadoCategoriaUpdateWithWhereUniqueWithoutValidadoPorInput[];
    updateMany?: Prisma.ResultadoCategoriaUpdateManyWithWhereWithoutValidadoPorInput | Prisma.ResultadoCategoriaUpdateManyWithWhereWithoutValidadoPorInput[];
    deleteMany?: Prisma.ResultadoCategoriaScalarWhereInput | Prisma.ResultadoCategoriaScalarWhereInput[];
};
export type ResultadoCategoriaCreateNestedManyWithoutCategoriaInput = {
    create?: Prisma.XOR<Prisma.ResultadoCategoriaCreateWithoutCategoriaInput, Prisma.ResultadoCategoriaUncheckedCreateWithoutCategoriaInput> | Prisma.ResultadoCategoriaCreateWithoutCategoriaInput[] | Prisma.ResultadoCategoriaUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.ResultadoCategoriaCreateOrConnectWithoutCategoriaInput | Prisma.ResultadoCategoriaCreateOrConnectWithoutCategoriaInput[];
    createMany?: Prisma.ResultadoCategoriaCreateManyCategoriaInputEnvelope;
    connect?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
};
export type ResultadoCategoriaUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: Prisma.XOR<Prisma.ResultadoCategoriaCreateWithoutCategoriaInput, Prisma.ResultadoCategoriaUncheckedCreateWithoutCategoriaInput> | Prisma.ResultadoCategoriaCreateWithoutCategoriaInput[] | Prisma.ResultadoCategoriaUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.ResultadoCategoriaCreateOrConnectWithoutCategoriaInput | Prisma.ResultadoCategoriaCreateOrConnectWithoutCategoriaInput[];
    createMany?: Prisma.ResultadoCategoriaCreateManyCategoriaInputEnvelope;
    connect?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
};
export type ResultadoCategoriaUpdateManyWithoutCategoriaNestedInput = {
    create?: Prisma.XOR<Prisma.ResultadoCategoriaCreateWithoutCategoriaInput, Prisma.ResultadoCategoriaUncheckedCreateWithoutCategoriaInput> | Prisma.ResultadoCategoriaCreateWithoutCategoriaInput[] | Prisma.ResultadoCategoriaUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.ResultadoCategoriaCreateOrConnectWithoutCategoriaInput | Prisma.ResultadoCategoriaCreateOrConnectWithoutCategoriaInput[];
    upsert?: Prisma.ResultadoCategoriaUpsertWithWhereUniqueWithoutCategoriaInput | Prisma.ResultadoCategoriaUpsertWithWhereUniqueWithoutCategoriaInput[];
    createMany?: Prisma.ResultadoCategoriaCreateManyCategoriaInputEnvelope;
    set?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    disconnect?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    delete?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    connect?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    update?: Prisma.ResultadoCategoriaUpdateWithWhereUniqueWithoutCategoriaInput | Prisma.ResultadoCategoriaUpdateWithWhereUniqueWithoutCategoriaInput[];
    updateMany?: Prisma.ResultadoCategoriaUpdateManyWithWhereWithoutCategoriaInput | Prisma.ResultadoCategoriaUpdateManyWithWhereWithoutCategoriaInput[];
    deleteMany?: Prisma.ResultadoCategoriaScalarWhereInput | Prisma.ResultadoCategoriaScalarWhereInput[];
};
export type ResultadoCategoriaUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: Prisma.XOR<Prisma.ResultadoCategoriaCreateWithoutCategoriaInput, Prisma.ResultadoCategoriaUncheckedCreateWithoutCategoriaInput> | Prisma.ResultadoCategoriaCreateWithoutCategoriaInput[] | Prisma.ResultadoCategoriaUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.ResultadoCategoriaCreateOrConnectWithoutCategoriaInput | Prisma.ResultadoCategoriaCreateOrConnectWithoutCategoriaInput[];
    upsert?: Prisma.ResultadoCategoriaUpsertWithWhereUniqueWithoutCategoriaInput | Prisma.ResultadoCategoriaUpsertWithWhereUniqueWithoutCategoriaInput[];
    createMany?: Prisma.ResultadoCategoriaCreateManyCategoriaInputEnvelope;
    set?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    disconnect?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    delete?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    connect?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    update?: Prisma.ResultadoCategoriaUpdateWithWhereUniqueWithoutCategoriaInput | Prisma.ResultadoCategoriaUpdateWithWhereUniqueWithoutCategoriaInput[];
    updateMany?: Prisma.ResultadoCategoriaUpdateManyWithWhereWithoutCategoriaInput | Prisma.ResultadoCategoriaUpdateManyWithWhereWithoutCategoriaInput[];
    deleteMany?: Prisma.ResultadoCategoriaScalarWhereInput | Prisma.ResultadoCategoriaScalarWhereInput[];
};
export type ResultadoCategoriaCreateNestedManyWithoutFinalistaInput = {
    create?: Prisma.XOR<Prisma.ResultadoCategoriaCreateWithoutFinalistaInput, Prisma.ResultadoCategoriaUncheckedCreateWithoutFinalistaInput> | Prisma.ResultadoCategoriaCreateWithoutFinalistaInput[] | Prisma.ResultadoCategoriaUncheckedCreateWithoutFinalistaInput[];
    connectOrCreate?: Prisma.ResultadoCategoriaCreateOrConnectWithoutFinalistaInput | Prisma.ResultadoCategoriaCreateOrConnectWithoutFinalistaInput[];
    createMany?: Prisma.ResultadoCategoriaCreateManyFinalistaInputEnvelope;
    connect?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
};
export type ResultadoCategoriaUncheckedCreateNestedManyWithoutFinalistaInput = {
    create?: Prisma.XOR<Prisma.ResultadoCategoriaCreateWithoutFinalistaInput, Prisma.ResultadoCategoriaUncheckedCreateWithoutFinalistaInput> | Prisma.ResultadoCategoriaCreateWithoutFinalistaInput[] | Prisma.ResultadoCategoriaUncheckedCreateWithoutFinalistaInput[];
    connectOrCreate?: Prisma.ResultadoCategoriaCreateOrConnectWithoutFinalistaInput | Prisma.ResultadoCategoriaCreateOrConnectWithoutFinalistaInput[];
    createMany?: Prisma.ResultadoCategoriaCreateManyFinalistaInputEnvelope;
    connect?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
};
export type ResultadoCategoriaUpdateManyWithoutFinalistaNestedInput = {
    create?: Prisma.XOR<Prisma.ResultadoCategoriaCreateWithoutFinalistaInput, Prisma.ResultadoCategoriaUncheckedCreateWithoutFinalistaInput> | Prisma.ResultadoCategoriaCreateWithoutFinalistaInput[] | Prisma.ResultadoCategoriaUncheckedCreateWithoutFinalistaInput[];
    connectOrCreate?: Prisma.ResultadoCategoriaCreateOrConnectWithoutFinalistaInput | Prisma.ResultadoCategoriaCreateOrConnectWithoutFinalistaInput[];
    upsert?: Prisma.ResultadoCategoriaUpsertWithWhereUniqueWithoutFinalistaInput | Prisma.ResultadoCategoriaUpsertWithWhereUniqueWithoutFinalistaInput[];
    createMany?: Prisma.ResultadoCategoriaCreateManyFinalistaInputEnvelope;
    set?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    disconnect?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    delete?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    connect?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    update?: Prisma.ResultadoCategoriaUpdateWithWhereUniqueWithoutFinalistaInput | Prisma.ResultadoCategoriaUpdateWithWhereUniqueWithoutFinalistaInput[];
    updateMany?: Prisma.ResultadoCategoriaUpdateManyWithWhereWithoutFinalistaInput | Prisma.ResultadoCategoriaUpdateManyWithWhereWithoutFinalistaInput[];
    deleteMany?: Prisma.ResultadoCategoriaScalarWhereInput | Prisma.ResultadoCategoriaScalarWhereInput[];
};
export type ResultadoCategoriaUncheckedUpdateManyWithoutFinalistaNestedInput = {
    create?: Prisma.XOR<Prisma.ResultadoCategoriaCreateWithoutFinalistaInput, Prisma.ResultadoCategoriaUncheckedCreateWithoutFinalistaInput> | Prisma.ResultadoCategoriaCreateWithoutFinalistaInput[] | Prisma.ResultadoCategoriaUncheckedCreateWithoutFinalistaInput[];
    connectOrCreate?: Prisma.ResultadoCategoriaCreateOrConnectWithoutFinalistaInput | Prisma.ResultadoCategoriaCreateOrConnectWithoutFinalistaInput[];
    upsert?: Prisma.ResultadoCategoriaUpsertWithWhereUniqueWithoutFinalistaInput | Prisma.ResultadoCategoriaUpsertWithWhereUniqueWithoutFinalistaInput[];
    createMany?: Prisma.ResultadoCategoriaCreateManyFinalistaInputEnvelope;
    set?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    disconnect?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    delete?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    connect?: Prisma.ResultadoCategoriaWhereUniqueInput | Prisma.ResultadoCategoriaWhereUniqueInput[];
    update?: Prisma.ResultadoCategoriaUpdateWithWhereUniqueWithoutFinalistaInput | Prisma.ResultadoCategoriaUpdateWithWhereUniqueWithoutFinalistaInput[];
    updateMany?: Prisma.ResultadoCategoriaUpdateManyWithWhereWithoutFinalistaInput | Prisma.ResultadoCategoriaUpdateManyWithWhereWithoutFinalistaInput[];
    deleteMany?: Prisma.ResultadoCategoriaScalarWhereInput | Prisma.ResultadoCategoriaScalarWhereInput[];
};
export type ResultadoCategoriaCreateWithoutEdicaoInput = {
    id?: string;
    totalVotos: number;
    publicadoEm?: Date | string | null;
    createdAt?: Date | string;
    categoria: Prisma.CategoriaCreateNestedOneWithoutResultadosInput;
    finalista: Prisma.FinalistaCreateNestedOneWithoutResultadosInput;
    validadoPor?: Prisma.UsuarioAdminCreateNestedOneWithoutResultadosValidadosInput;
};
export type ResultadoCategoriaUncheckedCreateWithoutEdicaoInput = {
    id?: string;
    categoriaId: string;
    finalistaId: string;
    totalVotos: number;
    publicadoEm?: Date | string | null;
    validadoPorId?: string | null;
    createdAt?: Date | string;
};
export type ResultadoCategoriaCreateOrConnectWithoutEdicaoInput = {
    where: Prisma.ResultadoCategoriaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ResultadoCategoriaCreateWithoutEdicaoInput, Prisma.ResultadoCategoriaUncheckedCreateWithoutEdicaoInput>;
};
export type ResultadoCategoriaCreateManyEdicaoInputEnvelope = {
    data: Prisma.ResultadoCategoriaCreateManyEdicaoInput | Prisma.ResultadoCategoriaCreateManyEdicaoInput[];
    skipDuplicates?: boolean;
};
export type ResultadoCategoriaUpsertWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.ResultadoCategoriaWhereUniqueInput;
    update: Prisma.XOR<Prisma.ResultadoCategoriaUpdateWithoutEdicaoInput, Prisma.ResultadoCategoriaUncheckedUpdateWithoutEdicaoInput>;
    create: Prisma.XOR<Prisma.ResultadoCategoriaCreateWithoutEdicaoInput, Prisma.ResultadoCategoriaUncheckedCreateWithoutEdicaoInput>;
};
export type ResultadoCategoriaUpdateWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.ResultadoCategoriaWhereUniqueInput;
    data: Prisma.XOR<Prisma.ResultadoCategoriaUpdateWithoutEdicaoInput, Prisma.ResultadoCategoriaUncheckedUpdateWithoutEdicaoInput>;
};
export type ResultadoCategoriaUpdateManyWithWhereWithoutEdicaoInput = {
    where: Prisma.ResultadoCategoriaScalarWhereInput;
    data: Prisma.XOR<Prisma.ResultadoCategoriaUpdateManyMutationInput, Prisma.ResultadoCategoriaUncheckedUpdateManyWithoutEdicaoInput>;
};
export type ResultadoCategoriaScalarWhereInput = {
    AND?: Prisma.ResultadoCategoriaScalarWhereInput | Prisma.ResultadoCategoriaScalarWhereInput[];
    OR?: Prisma.ResultadoCategoriaScalarWhereInput[];
    NOT?: Prisma.ResultadoCategoriaScalarWhereInput | Prisma.ResultadoCategoriaScalarWhereInput[];
    id?: Prisma.StringFilter<"ResultadoCategoria"> | string;
    edicaoId?: Prisma.StringFilter<"ResultadoCategoria"> | string;
    categoriaId?: Prisma.StringFilter<"ResultadoCategoria"> | string;
    finalistaId?: Prisma.StringFilter<"ResultadoCategoria"> | string;
    totalVotos?: Prisma.IntFilter<"ResultadoCategoria"> | number;
    publicadoEm?: Prisma.DateTimeNullableFilter<"ResultadoCategoria"> | Date | string | null;
    validadoPorId?: Prisma.StringNullableFilter<"ResultadoCategoria"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ResultadoCategoria"> | Date | string;
};
export type ResultadoCategoriaCreateWithoutValidadoPorInput = {
    id?: string;
    totalVotos: number;
    publicadoEm?: Date | string | null;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutResultadosInput;
    categoria: Prisma.CategoriaCreateNestedOneWithoutResultadosInput;
    finalista: Prisma.FinalistaCreateNestedOneWithoutResultadosInput;
};
export type ResultadoCategoriaUncheckedCreateWithoutValidadoPorInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    finalistaId: string;
    totalVotos: number;
    publicadoEm?: Date | string | null;
    createdAt?: Date | string;
};
export type ResultadoCategoriaCreateOrConnectWithoutValidadoPorInput = {
    where: Prisma.ResultadoCategoriaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ResultadoCategoriaCreateWithoutValidadoPorInput, Prisma.ResultadoCategoriaUncheckedCreateWithoutValidadoPorInput>;
};
export type ResultadoCategoriaCreateManyValidadoPorInputEnvelope = {
    data: Prisma.ResultadoCategoriaCreateManyValidadoPorInput | Prisma.ResultadoCategoriaCreateManyValidadoPorInput[];
    skipDuplicates?: boolean;
};
export type ResultadoCategoriaUpsertWithWhereUniqueWithoutValidadoPorInput = {
    where: Prisma.ResultadoCategoriaWhereUniqueInput;
    update: Prisma.XOR<Prisma.ResultadoCategoriaUpdateWithoutValidadoPorInput, Prisma.ResultadoCategoriaUncheckedUpdateWithoutValidadoPorInput>;
    create: Prisma.XOR<Prisma.ResultadoCategoriaCreateWithoutValidadoPorInput, Prisma.ResultadoCategoriaUncheckedCreateWithoutValidadoPorInput>;
};
export type ResultadoCategoriaUpdateWithWhereUniqueWithoutValidadoPorInput = {
    where: Prisma.ResultadoCategoriaWhereUniqueInput;
    data: Prisma.XOR<Prisma.ResultadoCategoriaUpdateWithoutValidadoPorInput, Prisma.ResultadoCategoriaUncheckedUpdateWithoutValidadoPorInput>;
};
export type ResultadoCategoriaUpdateManyWithWhereWithoutValidadoPorInput = {
    where: Prisma.ResultadoCategoriaScalarWhereInput;
    data: Prisma.XOR<Prisma.ResultadoCategoriaUpdateManyMutationInput, Prisma.ResultadoCategoriaUncheckedUpdateManyWithoutValidadoPorInput>;
};
export type ResultadoCategoriaCreateWithoutCategoriaInput = {
    id?: string;
    totalVotos: number;
    publicadoEm?: Date | string | null;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutResultadosInput;
    finalista: Prisma.FinalistaCreateNestedOneWithoutResultadosInput;
    validadoPor?: Prisma.UsuarioAdminCreateNestedOneWithoutResultadosValidadosInput;
};
export type ResultadoCategoriaUncheckedCreateWithoutCategoriaInput = {
    id?: string;
    edicaoId: string;
    finalistaId: string;
    totalVotos: number;
    publicadoEm?: Date | string | null;
    validadoPorId?: string | null;
    createdAt?: Date | string;
};
export type ResultadoCategoriaCreateOrConnectWithoutCategoriaInput = {
    where: Prisma.ResultadoCategoriaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ResultadoCategoriaCreateWithoutCategoriaInput, Prisma.ResultadoCategoriaUncheckedCreateWithoutCategoriaInput>;
};
export type ResultadoCategoriaCreateManyCategoriaInputEnvelope = {
    data: Prisma.ResultadoCategoriaCreateManyCategoriaInput | Prisma.ResultadoCategoriaCreateManyCategoriaInput[];
    skipDuplicates?: boolean;
};
export type ResultadoCategoriaUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: Prisma.ResultadoCategoriaWhereUniqueInput;
    update: Prisma.XOR<Prisma.ResultadoCategoriaUpdateWithoutCategoriaInput, Prisma.ResultadoCategoriaUncheckedUpdateWithoutCategoriaInput>;
    create: Prisma.XOR<Prisma.ResultadoCategoriaCreateWithoutCategoriaInput, Prisma.ResultadoCategoriaUncheckedCreateWithoutCategoriaInput>;
};
export type ResultadoCategoriaUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: Prisma.ResultadoCategoriaWhereUniqueInput;
    data: Prisma.XOR<Prisma.ResultadoCategoriaUpdateWithoutCategoriaInput, Prisma.ResultadoCategoriaUncheckedUpdateWithoutCategoriaInput>;
};
export type ResultadoCategoriaUpdateManyWithWhereWithoutCategoriaInput = {
    where: Prisma.ResultadoCategoriaScalarWhereInput;
    data: Prisma.XOR<Prisma.ResultadoCategoriaUpdateManyMutationInput, Prisma.ResultadoCategoriaUncheckedUpdateManyWithoutCategoriaInput>;
};
export type ResultadoCategoriaCreateWithoutFinalistaInput = {
    id?: string;
    totalVotos: number;
    publicadoEm?: Date | string | null;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutResultadosInput;
    categoria: Prisma.CategoriaCreateNestedOneWithoutResultadosInput;
    validadoPor?: Prisma.UsuarioAdminCreateNestedOneWithoutResultadosValidadosInput;
};
export type ResultadoCategoriaUncheckedCreateWithoutFinalistaInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    totalVotos: number;
    publicadoEm?: Date | string | null;
    validadoPorId?: string | null;
    createdAt?: Date | string;
};
export type ResultadoCategoriaCreateOrConnectWithoutFinalistaInput = {
    where: Prisma.ResultadoCategoriaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ResultadoCategoriaCreateWithoutFinalistaInput, Prisma.ResultadoCategoriaUncheckedCreateWithoutFinalistaInput>;
};
export type ResultadoCategoriaCreateManyFinalistaInputEnvelope = {
    data: Prisma.ResultadoCategoriaCreateManyFinalistaInput | Prisma.ResultadoCategoriaCreateManyFinalistaInput[];
    skipDuplicates?: boolean;
};
export type ResultadoCategoriaUpsertWithWhereUniqueWithoutFinalistaInput = {
    where: Prisma.ResultadoCategoriaWhereUniqueInput;
    update: Prisma.XOR<Prisma.ResultadoCategoriaUpdateWithoutFinalistaInput, Prisma.ResultadoCategoriaUncheckedUpdateWithoutFinalistaInput>;
    create: Prisma.XOR<Prisma.ResultadoCategoriaCreateWithoutFinalistaInput, Prisma.ResultadoCategoriaUncheckedCreateWithoutFinalistaInput>;
};
export type ResultadoCategoriaUpdateWithWhereUniqueWithoutFinalistaInput = {
    where: Prisma.ResultadoCategoriaWhereUniqueInput;
    data: Prisma.XOR<Prisma.ResultadoCategoriaUpdateWithoutFinalistaInput, Prisma.ResultadoCategoriaUncheckedUpdateWithoutFinalistaInput>;
};
export type ResultadoCategoriaUpdateManyWithWhereWithoutFinalistaInput = {
    where: Prisma.ResultadoCategoriaScalarWhereInput;
    data: Prisma.XOR<Prisma.ResultadoCategoriaUpdateManyMutationInput, Prisma.ResultadoCategoriaUncheckedUpdateManyWithoutFinalistaInput>;
};
export type ResultadoCategoriaCreateManyEdicaoInput = {
    id?: string;
    categoriaId: string;
    finalistaId: string;
    totalVotos: number;
    publicadoEm?: Date | string | null;
    validadoPorId?: string | null;
    createdAt?: Date | string;
};
export type ResultadoCategoriaUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalVotos?: Prisma.IntFieldUpdateOperationsInput | number;
    publicadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutResultadosNestedInput;
    finalista?: Prisma.FinalistaUpdateOneRequiredWithoutResultadosNestedInput;
    validadoPor?: Prisma.UsuarioAdminUpdateOneWithoutResultadosValidadosNestedInput;
};
export type ResultadoCategoriaUncheckedUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    finalistaId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalVotos?: Prisma.IntFieldUpdateOperationsInput | number;
    publicadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validadoPorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResultadoCategoriaUncheckedUpdateManyWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    finalistaId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalVotos?: Prisma.IntFieldUpdateOperationsInput | number;
    publicadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validadoPorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResultadoCategoriaCreateManyValidadoPorInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    finalistaId: string;
    totalVotos: number;
    publicadoEm?: Date | string | null;
    createdAt?: Date | string;
};
export type ResultadoCategoriaUpdateWithoutValidadoPorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalVotos?: Prisma.IntFieldUpdateOperationsInput | number;
    publicadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutResultadosNestedInput;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutResultadosNestedInput;
    finalista?: Prisma.FinalistaUpdateOneRequiredWithoutResultadosNestedInput;
};
export type ResultadoCategoriaUncheckedUpdateWithoutValidadoPorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    finalistaId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalVotos?: Prisma.IntFieldUpdateOperationsInput | number;
    publicadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResultadoCategoriaUncheckedUpdateManyWithoutValidadoPorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    finalistaId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalVotos?: Prisma.IntFieldUpdateOperationsInput | number;
    publicadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResultadoCategoriaCreateManyCategoriaInput = {
    id?: string;
    edicaoId: string;
    finalistaId: string;
    totalVotos: number;
    publicadoEm?: Date | string | null;
    validadoPorId?: string | null;
    createdAt?: Date | string;
};
export type ResultadoCategoriaUpdateWithoutCategoriaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalVotos?: Prisma.IntFieldUpdateOperationsInput | number;
    publicadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutResultadosNestedInput;
    finalista?: Prisma.FinalistaUpdateOneRequiredWithoutResultadosNestedInput;
    validadoPor?: Prisma.UsuarioAdminUpdateOneWithoutResultadosValidadosNestedInput;
};
export type ResultadoCategoriaUncheckedUpdateWithoutCategoriaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    finalistaId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalVotos?: Prisma.IntFieldUpdateOperationsInput | number;
    publicadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validadoPorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResultadoCategoriaUncheckedUpdateManyWithoutCategoriaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    finalistaId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalVotos?: Prisma.IntFieldUpdateOperationsInput | number;
    publicadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validadoPorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResultadoCategoriaCreateManyFinalistaInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    totalVotos: number;
    publicadoEm?: Date | string | null;
    validadoPorId?: string | null;
    createdAt?: Date | string;
};
export type ResultadoCategoriaUpdateWithoutFinalistaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    totalVotos?: Prisma.IntFieldUpdateOperationsInput | number;
    publicadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutResultadosNestedInput;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutResultadosNestedInput;
    validadoPor?: Prisma.UsuarioAdminUpdateOneWithoutResultadosValidadosNestedInput;
};
export type ResultadoCategoriaUncheckedUpdateWithoutFinalistaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalVotos?: Prisma.IntFieldUpdateOperationsInput | number;
    publicadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validadoPorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResultadoCategoriaUncheckedUpdateManyWithoutFinalistaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalVotos?: Prisma.IntFieldUpdateOperationsInput | number;
    publicadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    validadoPorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ResultadoCategoriaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    categoriaId?: boolean;
    finalistaId?: boolean;
    totalVotos?: boolean;
    publicadoEm?: boolean;
    validadoPorId?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    finalista?: boolean | Prisma.FinalistaDefaultArgs<ExtArgs>;
    validadoPor?: boolean | Prisma.ResultadoCategoria$validadoPorArgs<ExtArgs>;
}, ExtArgs["result"]["resultadoCategoria"]>;
export type ResultadoCategoriaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    categoriaId?: boolean;
    finalistaId?: boolean;
    totalVotos?: boolean;
    publicadoEm?: boolean;
    validadoPorId?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    finalista?: boolean | Prisma.FinalistaDefaultArgs<ExtArgs>;
    validadoPor?: boolean | Prisma.ResultadoCategoria$validadoPorArgs<ExtArgs>;
}, ExtArgs["result"]["resultadoCategoria"]>;
export type ResultadoCategoriaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    categoriaId?: boolean;
    finalistaId?: boolean;
    totalVotos?: boolean;
    publicadoEm?: boolean;
    validadoPorId?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    finalista?: boolean | Prisma.FinalistaDefaultArgs<ExtArgs>;
    validadoPor?: boolean | Prisma.ResultadoCategoria$validadoPorArgs<ExtArgs>;
}, ExtArgs["result"]["resultadoCategoria"]>;
export type ResultadoCategoriaSelectScalar = {
    id?: boolean;
    edicaoId?: boolean;
    categoriaId?: boolean;
    finalistaId?: boolean;
    totalVotos?: boolean;
    publicadoEm?: boolean;
    validadoPorId?: boolean;
    createdAt?: boolean;
};
export type ResultadoCategoriaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "edicaoId" | "categoriaId" | "finalistaId" | "totalVotos" | "publicadoEm" | "validadoPorId" | "createdAt", ExtArgs["result"]["resultadoCategoria"]>;
export type ResultadoCategoriaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    finalista?: boolean | Prisma.FinalistaDefaultArgs<ExtArgs>;
    validadoPor?: boolean | Prisma.ResultadoCategoria$validadoPorArgs<ExtArgs>;
};
export type ResultadoCategoriaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    finalista?: boolean | Prisma.FinalistaDefaultArgs<ExtArgs>;
    validadoPor?: boolean | Prisma.ResultadoCategoria$validadoPorArgs<ExtArgs>;
};
export type ResultadoCategoriaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    finalista?: boolean | Prisma.FinalistaDefaultArgs<ExtArgs>;
    validadoPor?: boolean | Prisma.ResultadoCategoria$validadoPorArgs<ExtArgs>;
};
export type $ResultadoCategoriaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ResultadoCategoria";
    objects: {
        edicao: Prisma.$EdicaoPayload<ExtArgs>;
        categoria: Prisma.$CategoriaPayload<ExtArgs>;
        finalista: Prisma.$FinalistaPayload<ExtArgs>;
        validadoPor: Prisma.$UsuarioAdminPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        edicaoId: string;
        categoriaId: string;
        finalistaId: string;
        totalVotos: number;
        publicadoEm: Date | null;
        validadoPorId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["resultadoCategoria"]>;
    composites: {};
};
export type ResultadoCategoriaGetPayload<S extends boolean | null | undefined | ResultadoCategoriaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ResultadoCategoriaPayload, S>;
export type ResultadoCategoriaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ResultadoCategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ResultadoCategoriaCountAggregateInputType | true;
};
export interface ResultadoCategoriaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ResultadoCategoria'];
        meta: {
            name: 'ResultadoCategoria';
        };
    };
    findUnique<T extends ResultadoCategoriaFindUniqueArgs>(args: Prisma.SelectSubset<T, ResultadoCategoriaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ResultadoCategoriaClient<runtime.Types.Result.GetResult<Prisma.$ResultadoCategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ResultadoCategoriaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ResultadoCategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ResultadoCategoriaClient<runtime.Types.Result.GetResult<Prisma.$ResultadoCategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ResultadoCategoriaFindFirstArgs>(args?: Prisma.SelectSubset<T, ResultadoCategoriaFindFirstArgs<ExtArgs>>): Prisma.Prisma__ResultadoCategoriaClient<runtime.Types.Result.GetResult<Prisma.$ResultadoCategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ResultadoCategoriaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ResultadoCategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ResultadoCategoriaClient<runtime.Types.Result.GetResult<Prisma.$ResultadoCategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ResultadoCategoriaFindManyArgs>(args?: Prisma.SelectSubset<T, ResultadoCategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResultadoCategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ResultadoCategoriaCreateArgs>(args: Prisma.SelectSubset<T, ResultadoCategoriaCreateArgs<ExtArgs>>): Prisma.Prisma__ResultadoCategoriaClient<runtime.Types.Result.GetResult<Prisma.$ResultadoCategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ResultadoCategoriaCreateManyArgs>(args?: Prisma.SelectSubset<T, ResultadoCategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ResultadoCategoriaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ResultadoCategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResultadoCategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ResultadoCategoriaDeleteArgs>(args: Prisma.SelectSubset<T, ResultadoCategoriaDeleteArgs<ExtArgs>>): Prisma.Prisma__ResultadoCategoriaClient<runtime.Types.Result.GetResult<Prisma.$ResultadoCategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ResultadoCategoriaUpdateArgs>(args: Prisma.SelectSubset<T, ResultadoCategoriaUpdateArgs<ExtArgs>>): Prisma.Prisma__ResultadoCategoriaClient<runtime.Types.Result.GetResult<Prisma.$ResultadoCategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ResultadoCategoriaDeleteManyArgs>(args?: Prisma.SelectSubset<T, ResultadoCategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ResultadoCategoriaUpdateManyArgs>(args: Prisma.SelectSubset<T, ResultadoCategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ResultadoCategoriaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ResultadoCategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResultadoCategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ResultadoCategoriaUpsertArgs>(args: Prisma.SelectSubset<T, ResultadoCategoriaUpsertArgs<ExtArgs>>): Prisma.Prisma__ResultadoCategoriaClient<runtime.Types.Result.GetResult<Prisma.$ResultadoCategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ResultadoCategoriaCountArgs>(args?: Prisma.Subset<T, ResultadoCategoriaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ResultadoCategoriaCountAggregateOutputType> : number>;
    aggregate<T extends ResultadoCategoriaAggregateArgs>(args: Prisma.Subset<T, ResultadoCategoriaAggregateArgs>): Prisma.PrismaPromise<GetResultadoCategoriaAggregateType<T>>;
    groupBy<T extends ResultadoCategoriaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ResultadoCategoriaGroupByArgs['orderBy'];
    } : {
        orderBy?: ResultadoCategoriaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ResultadoCategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultadoCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ResultadoCategoriaFieldRefs;
}
export interface Prisma__ResultadoCategoriaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    edicao<T extends Prisma.EdicaoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EdicaoDefaultArgs<ExtArgs>>): Prisma.Prisma__EdicaoClient<runtime.Types.Result.GetResult<Prisma.$EdicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    categoria<T extends Prisma.CategoriaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoriaDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoriaClient<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    finalista<T extends Prisma.FinalistaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FinalistaDefaultArgs<ExtArgs>>): Prisma.Prisma__FinalistaClient<runtime.Types.Result.GetResult<Prisma.$FinalistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    validadoPor<T extends Prisma.ResultadoCategoria$validadoPorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ResultadoCategoria$validadoPorArgs<ExtArgs>>): Prisma.Prisma__UsuarioAdminClient<runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ResultadoCategoriaFieldRefs {
    readonly id: Prisma.FieldRef<"ResultadoCategoria", 'String'>;
    readonly edicaoId: Prisma.FieldRef<"ResultadoCategoria", 'String'>;
    readonly categoriaId: Prisma.FieldRef<"ResultadoCategoria", 'String'>;
    readonly finalistaId: Prisma.FieldRef<"ResultadoCategoria", 'String'>;
    readonly totalVotos: Prisma.FieldRef<"ResultadoCategoria", 'Int'>;
    readonly publicadoEm: Prisma.FieldRef<"ResultadoCategoria", 'DateTime'>;
    readonly validadoPorId: Prisma.FieldRef<"ResultadoCategoria", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ResultadoCategoria", 'DateTime'>;
}
export type ResultadoCategoriaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResultadoCategoriaSelect<ExtArgs> | null;
    omit?: Prisma.ResultadoCategoriaOmit<ExtArgs> | null;
    include?: Prisma.ResultadoCategoriaInclude<ExtArgs> | null;
    where: Prisma.ResultadoCategoriaWhereUniqueInput;
};
export type ResultadoCategoriaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResultadoCategoriaSelect<ExtArgs> | null;
    omit?: Prisma.ResultadoCategoriaOmit<ExtArgs> | null;
    include?: Prisma.ResultadoCategoriaInclude<ExtArgs> | null;
    where: Prisma.ResultadoCategoriaWhereUniqueInput;
};
export type ResultadoCategoriaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ResultadoCategoriaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ResultadoCategoriaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ResultadoCategoriaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResultadoCategoriaSelect<ExtArgs> | null;
    omit?: Prisma.ResultadoCategoriaOmit<ExtArgs> | null;
    include?: Prisma.ResultadoCategoriaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ResultadoCategoriaCreateInput, Prisma.ResultadoCategoriaUncheckedCreateInput>;
};
export type ResultadoCategoriaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ResultadoCategoriaCreateManyInput | Prisma.ResultadoCategoriaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ResultadoCategoriaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResultadoCategoriaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ResultadoCategoriaOmit<ExtArgs> | null;
    data: Prisma.ResultadoCategoriaCreateManyInput | Prisma.ResultadoCategoriaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ResultadoCategoriaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ResultadoCategoriaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResultadoCategoriaSelect<ExtArgs> | null;
    omit?: Prisma.ResultadoCategoriaOmit<ExtArgs> | null;
    include?: Prisma.ResultadoCategoriaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ResultadoCategoriaUpdateInput, Prisma.ResultadoCategoriaUncheckedUpdateInput>;
    where: Prisma.ResultadoCategoriaWhereUniqueInput;
};
export type ResultadoCategoriaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ResultadoCategoriaUpdateManyMutationInput, Prisma.ResultadoCategoriaUncheckedUpdateManyInput>;
    where?: Prisma.ResultadoCategoriaWhereInput;
    limit?: number;
};
export type ResultadoCategoriaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResultadoCategoriaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ResultadoCategoriaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ResultadoCategoriaUpdateManyMutationInput, Prisma.ResultadoCategoriaUncheckedUpdateManyInput>;
    where?: Prisma.ResultadoCategoriaWhereInput;
    limit?: number;
    include?: Prisma.ResultadoCategoriaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ResultadoCategoriaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResultadoCategoriaSelect<ExtArgs> | null;
    omit?: Prisma.ResultadoCategoriaOmit<ExtArgs> | null;
    include?: Prisma.ResultadoCategoriaInclude<ExtArgs> | null;
    where: Prisma.ResultadoCategoriaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ResultadoCategoriaCreateInput, Prisma.ResultadoCategoriaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ResultadoCategoriaUpdateInput, Prisma.ResultadoCategoriaUncheckedUpdateInput>;
};
export type ResultadoCategoriaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResultadoCategoriaSelect<ExtArgs> | null;
    omit?: Prisma.ResultadoCategoriaOmit<ExtArgs> | null;
    include?: Prisma.ResultadoCategoriaInclude<ExtArgs> | null;
    where: Prisma.ResultadoCategoriaWhereUniqueInput;
};
export type ResultadoCategoriaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResultadoCategoriaWhereInput;
    limit?: number;
};
export type ResultadoCategoria$validadoPorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioAdminSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    include?: Prisma.UsuarioAdminInclude<ExtArgs> | null;
    where?: Prisma.UsuarioAdminWhereInput;
};
export type ResultadoCategoriaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ResultadoCategoriaSelect<ExtArgs> | null;
    omit?: Prisma.ResultadoCategoriaOmit<ExtArgs> | null;
    include?: Prisma.ResultadoCategoriaInclude<ExtArgs> | null;
};
