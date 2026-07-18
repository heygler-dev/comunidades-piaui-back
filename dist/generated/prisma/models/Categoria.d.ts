import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type CategoriaModel = runtime.Types.Result.DefaultSelection<Prisma.$CategoriaPayload>;
export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null;
    _avg: CategoriaAvgAggregateOutputType | null;
    _sum: CategoriaSumAggregateOutputType | null;
    _min: CategoriaMinAggregateOutputType | null;
    _max: CategoriaMaxAggregateOutputType | null;
};
export type CategoriaAvgAggregateOutputType = {
    ordem: number | null;
};
export type CategoriaSumAggregateOutputType = {
    ordem: number | null;
};
export type CategoriaMinAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    nome: string | null;
    ordem: number | null;
};
export type CategoriaMaxAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    nome: string | null;
    ordem: number | null;
};
export type CategoriaCountAggregateOutputType = {
    id: number;
    edicaoId: number;
    nome: number;
    ordem: number;
    _all: number;
};
export type CategoriaAvgAggregateInputType = {
    ordem?: true;
};
export type CategoriaSumAggregateInputType = {
    ordem?: true;
};
export type CategoriaMinAggregateInputType = {
    id?: true;
    edicaoId?: true;
    nome?: true;
    ordem?: true;
};
export type CategoriaMaxAggregateInputType = {
    id?: true;
    edicaoId?: true;
    nome?: true;
    ordem?: true;
};
export type CategoriaCountAggregateInputType = {
    id?: true;
    edicaoId?: true;
    nome?: true;
    ordem?: true;
    _all?: true;
};
export type CategoriaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoriaWhereInput;
    orderBy?: Prisma.CategoriaOrderByWithRelationInput | Prisma.CategoriaOrderByWithRelationInput[];
    cursor?: Prisma.CategoriaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CategoriaCountAggregateInputType;
    _avg?: CategoriaAvgAggregateInputType;
    _sum?: CategoriaSumAggregateInputType;
    _min?: CategoriaMinAggregateInputType;
    _max?: CategoriaMaxAggregateInputType;
};
export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
    [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCategoria[P]> : Prisma.GetScalarType<T[P], AggregateCategoria[P]>;
};
export type CategoriaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoriaWhereInput;
    orderBy?: Prisma.CategoriaOrderByWithAggregationInput | Prisma.CategoriaOrderByWithAggregationInput[];
    by: Prisma.CategoriaScalarFieldEnum[] | Prisma.CategoriaScalarFieldEnum;
    having?: Prisma.CategoriaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoriaCountAggregateInputType | true;
    _avg?: CategoriaAvgAggregateInputType;
    _sum?: CategoriaSumAggregateInputType;
    _min?: CategoriaMinAggregateInputType;
    _max?: CategoriaMaxAggregateInputType;
};
export type CategoriaGroupByOutputType = {
    id: string;
    edicaoId: string;
    nome: string;
    ordem: number;
    _count: CategoriaCountAggregateOutputType | null;
    _avg: CategoriaAvgAggregateOutputType | null;
    _sum: CategoriaSumAggregateOutputType | null;
    _min: CategoriaMinAggregateOutputType | null;
    _max: CategoriaMaxAggregateOutputType | null;
};
export type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CategoriaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CategoriaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CategoriaGroupByOutputType[P]>;
}>>;
export type CategoriaWhereInput = {
    AND?: Prisma.CategoriaWhereInput | Prisma.CategoriaWhereInput[];
    OR?: Prisma.CategoriaWhereInput[];
    NOT?: Prisma.CategoriaWhereInput | Prisma.CategoriaWhereInput[];
    id?: Prisma.StringFilter<"Categoria"> | string;
    edicaoId?: Prisma.StringFilter<"Categoria"> | string;
    nome?: Prisma.StringFilter<"Categoria"> | string;
    ordem?: Prisma.IntFilter<"Categoria"> | number;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
    finalistas?: Prisma.FinalistaListRelationFilter;
    indicacoes?: Prisma.IndicacaoListRelationFilter;
    selecoesColegio?: Prisma.SelecaoColegioListRelationFilter;
    resultados?: Prisma.ResultadoCategoriaListRelationFilter;
};
export type CategoriaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    ordem?: Prisma.SortOrder;
    edicao?: Prisma.EdicaoOrderByWithRelationInput;
    finalistas?: Prisma.FinalistaOrderByRelationAggregateInput;
    indicacoes?: Prisma.IndicacaoOrderByRelationAggregateInput;
    selecoesColegio?: Prisma.SelecaoColegioOrderByRelationAggregateInput;
    resultados?: Prisma.ResultadoCategoriaOrderByRelationAggregateInput;
};
export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    edicaoId_nome?: Prisma.CategoriaEdicaoIdNomeCompoundUniqueInput;
    AND?: Prisma.CategoriaWhereInput | Prisma.CategoriaWhereInput[];
    OR?: Prisma.CategoriaWhereInput[];
    NOT?: Prisma.CategoriaWhereInput | Prisma.CategoriaWhereInput[];
    edicaoId?: Prisma.StringFilter<"Categoria"> | string;
    nome?: Prisma.StringFilter<"Categoria"> | string;
    ordem?: Prisma.IntFilter<"Categoria"> | number;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
    finalistas?: Prisma.FinalistaListRelationFilter;
    indicacoes?: Prisma.IndicacaoListRelationFilter;
    selecoesColegio?: Prisma.SelecaoColegioListRelationFilter;
    resultados?: Prisma.ResultadoCategoriaListRelationFilter;
}, "id" | "edicaoId_nome">;
export type CategoriaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    ordem?: Prisma.SortOrder;
    _count?: Prisma.CategoriaCountOrderByAggregateInput;
    _avg?: Prisma.CategoriaAvgOrderByAggregateInput;
    _max?: Prisma.CategoriaMaxOrderByAggregateInput;
    _min?: Prisma.CategoriaMinOrderByAggregateInput;
    _sum?: Prisma.CategoriaSumOrderByAggregateInput;
};
export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: Prisma.CategoriaScalarWhereWithAggregatesInput | Prisma.CategoriaScalarWhereWithAggregatesInput[];
    OR?: Prisma.CategoriaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CategoriaScalarWhereWithAggregatesInput | Prisma.CategoriaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Categoria"> | string;
    edicaoId?: Prisma.StringWithAggregatesFilter<"Categoria"> | string;
    nome?: Prisma.StringWithAggregatesFilter<"Categoria"> | string;
    ordem?: Prisma.IntWithAggregatesFilter<"Categoria"> | number;
};
export type CategoriaCreateInput = {
    id?: string;
    nome: string;
    ordem?: number;
    edicao: Prisma.EdicaoCreateNestedOneWithoutCategoriasInput;
    finalistas?: Prisma.FinalistaCreateNestedManyWithoutCategoriaInput;
    indicacoes?: Prisma.IndicacaoCreateNestedManyWithoutCategoriaInput;
    selecoesColegio?: Prisma.SelecaoColegioCreateNestedManyWithoutCategoriaInput;
    resultados?: Prisma.ResultadoCategoriaCreateNestedManyWithoutCategoriaInput;
};
export type CategoriaUncheckedCreateInput = {
    id?: string;
    edicaoId: string;
    nome: string;
    ordem?: number;
    finalistas?: Prisma.FinalistaUncheckedCreateNestedManyWithoutCategoriaInput;
    indicacoes?: Prisma.IndicacaoUncheckedCreateNestedManyWithoutCategoriaInput;
    selecoesColegio?: Prisma.SelecaoColegioUncheckedCreateNestedManyWithoutCategoriaInput;
    resultados?: Prisma.ResultadoCategoriaUncheckedCreateNestedManyWithoutCategoriaInput;
};
export type CategoriaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    ordem?: Prisma.IntFieldUpdateOperationsInput | number;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutCategoriasNestedInput;
    finalistas?: Prisma.FinalistaUpdateManyWithoutCategoriaNestedInput;
    indicacoes?: Prisma.IndicacaoUpdateManyWithoutCategoriaNestedInput;
    selecoesColegio?: Prisma.SelecaoColegioUpdateManyWithoutCategoriaNestedInput;
    resultados?: Prisma.ResultadoCategoriaUpdateManyWithoutCategoriaNestedInput;
};
export type CategoriaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    ordem?: Prisma.IntFieldUpdateOperationsInput | number;
    finalistas?: Prisma.FinalistaUncheckedUpdateManyWithoutCategoriaNestedInput;
    indicacoes?: Prisma.IndicacaoUncheckedUpdateManyWithoutCategoriaNestedInput;
    selecoesColegio?: Prisma.SelecaoColegioUncheckedUpdateManyWithoutCategoriaNestedInput;
    resultados?: Prisma.ResultadoCategoriaUncheckedUpdateManyWithoutCategoriaNestedInput;
};
export type CategoriaCreateManyInput = {
    id?: string;
    edicaoId: string;
    nome: string;
    ordem?: number;
};
export type CategoriaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    ordem?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CategoriaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    ordem?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CategoriaListRelationFilter = {
    every?: Prisma.CategoriaWhereInput;
    some?: Prisma.CategoriaWhereInput;
    none?: Prisma.CategoriaWhereInput;
};
export type CategoriaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CategoriaEdicaoIdNomeCompoundUniqueInput = {
    edicaoId: string;
    nome: string;
};
export type CategoriaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    ordem?: Prisma.SortOrder;
};
export type CategoriaAvgOrderByAggregateInput = {
    ordem?: Prisma.SortOrder;
};
export type CategoriaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    ordem?: Prisma.SortOrder;
};
export type CategoriaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    ordem?: Prisma.SortOrder;
};
export type CategoriaSumOrderByAggregateInput = {
    ordem?: Prisma.SortOrder;
};
export type CategoriaScalarRelationFilter = {
    is?: Prisma.CategoriaWhereInput;
    isNot?: Prisma.CategoriaWhereInput;
};
export type CategoriaCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.CategoriaCreateWithoutEdicaoInput, Prisma.CategoriaUncheckedCreateWithoutEdicaoInput> | Prisma.CategoriaCreateWithoutEdicaoInput[] | Prisma.CategoriaUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.CategoriaCreateOrConnectWithoutEdicaoInput | Prisma.CategoriaCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.CategoriaCreateManyEdicaoInputEnvelope;
    connect?: Prisma.CategoriaWhereUniqueInput | Prisma.CategoriaWhereUniqueInput[];
};
export type CategoriaUncheckedCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.CategoriaCreateWithoutEdicaoInput, Prisma.CategoriaUncheckedCreateWithoutEdicaoInput> | Prisma.CategoriaCreateWithoutEdicaoInput[] | Prisma.CategoriaUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.CategoriaCreateOrConnectWithoutEdicaoInput | Prisma.CategoriaCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.CategoriaCreateManyEdicaoInputEnvelope;
    connect?: Prisma.CategoriaWhereUniqueInput | Prisma.CategoriaWhereUniqueInput[];
};
export type CategoriaUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.CategoriaCreateWithoutEdicaoInput, Prisma.CategoriaUncheckedCreateWithoutEdicaoInput> | Prisma.CategoriaCreateWithoutEdicaoInput[] | Prisma.CategoriaUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.CategoriaCreateOrConnectWithoutEdicaoInput | Prisma.CategoriaCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.CategoriaUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.CategoriaUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.CategoriaCreateManyEdicaoInputEnvelope;
    set?: Prisma.CategoriaWhereUniqueInput | Prisma.CategoriaWhereUniqueInput[];
    disconnect?: Prisma.CategoriaWhereUniqueInput | Prisma.CategoriaWhereUniqueInput[];
    delete?: Prisma.CategoriaWhereUniqueInput | Prisma.CategoriaWhereUniqueInput[];
    connect?: Prisma.CategoriaWhereUniqueInput | Prisma.CategoriaWhereUniqueInput[];
    update?: Prisma.CategoriaUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.CategoriaUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.CategoriaUpdateManyWithWhereWithoutEdicaoInput | Prisma.CategoriaUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.CategoriaScalarWhereInput | Prisma.CategoriaScalarWhereInput[];
};
export type CategoriaUncheckedUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.CategoriaCreateWithoutEdicaoInput, Prisma.CategoriaUncheckedCreateWithoutEdicaoInput> | Prisma.CategoriaCreateWithoutEdicaoInput[] | Prisma.CategoriaUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.CategoriaCreateOrConnectWithoutEdicaoInput | Prisma.CategoriaCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.CategoriaUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.CategoriaUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.CategoriaCreateManyEdicaoInputEnvelope;
    set?: Prisma.CategoriaWhereUniqueInput | Prisma.CategoriaWhereUniqueInput[];
    disconnect?: Prisma.CategoriaWhereUniqueInput | Prisma.CategoriaWhereUniqueInput[];
    delete?: Prisma.CategoriaWhereUniqueInput | Prisma.CategoriaWhereUniqueInput[];
    connect?: Prisma.CategoriaWhereUniqueInput | Prisma.CategoriaWhereUniqueInput[];
    update?: Prisma.CategoriaUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.CategoriaUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.CategoriaUpdateManyWithWhereWithoutEdicaoInput | Prisma.CategoriaUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.CategoriaScalarWhereInput | Prisma.CategoriaScalarWhereInput[];
};
export type CategoriaCreateNestedOneWithoutIndicacoesInput = {
    create?: Prisma.XOR<Prisma.CategoriaCreateWithoutIndicacoesInput, Prisma.CategoriaUncheckedCreateWithoutIndicacoesInput>;
    connectOrCreate?: Prisma.CategoriaCreateOrConnectWithoutIndicacoesInput;
    connect?: Prisma.CategoriaWhereUniqueInput;
};
export type CategoriaUpdateOneRequiredWithoutIndicacoesNestedInput = {
    create?: Prisma.XOR<Prisma.CategoriaCreateWithoutIndicacoesInput, Prisma.CategoriaUncheckedCreateWithoutIndicacoesInput>;
    connectOrCreate?: Prisma.CategoriaCreateOrConnectWithoutIndicacoesInput;
    upsert?: Prisma.CategoriaUpsertWithoutIndicacoesInput;
    connect?: Prisma.CategoriaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CategoriaUpdateToOneWithWhereWithoutIndicacoesInput, Prisma.CategoriaUpdateWithoutIndicacoesInput>, Prisma.CategoriaUncheckedUpdateWithoutIndicacoesInput>;
};
export type CategoriaCreateNestedOneWithoutSelecoesColegioInput = {
    create?: Prisma.XOR<Prisma.CategoriaCreateWithoutSelecoesColegioInput, Prisma.CategoriaUncheckedCreateWithoutSelecoesColegioInput>;
    connectOrCreate?: Prisma.CategoriaCreateOrConnectWithoutSelecoesColegioInput;
    connect?: Prisma.CategoriaWhereUniqueInput;
};
export type CategoriaUpdateOneRequiredWithoutSelecoesColegioNestedInput = {
    create?: Prisma.XOR<Prisma.CategoriaCreateWithoutSelecoesColegioInput, Prisma.CategoriaUncheckedCreateWithoutSelecoesColegioInput>;
    connectOrCreate?: Prisma.CategoriaCreateOrConnectWithoutSelecoesColegioInput;
    upsert?: Prisma.CategoriaUpsertWithoutSelecoesColegioInput;
    connect?: Prisma.CategoriaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CategoriaUpdateToOneWithWhereWithoutSelecoesColegioInput, Prisma.CategoriaUpdateWithoutSelecoesColegioInput>, Prisma.CategoriaUncheckedUpdateWithoutSelecoesColegioInput>;
};
export type CategoriaCreateNestedOneWithoutFinalistasInput = {
    create?: Prisma.XOR<Prisma.CategoriaCreateWithoutFinalistasInput, Prisma.CategoriaUncheckedCreateWithoutFinalistasInput>;
    connectOrCreate?: Prisma.CategoriaCreateOrConnectWithoutFinalistasInput;
    connect?: Prisma.CategoriaWhereUniqueInput;
};
export type CategoriaUpdateOneRequiredWithoutFinalistasNestedInput = {
    create?: Prisma.XOR<Prisma.CategoriaCreateWithoutFinalistasInput, Prisma.CategoriaUncheckedCreateWithoutFinalistasInput>;
    connectOrCreate?: Prisma.CategoriaCreateOrConnectWithoutFinalistasInput;
    upsert?: Prisma.CategoriaUpsertWithoutFinalistasInput;
    connect?: Prisma.CategoriaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CategoriaUpdateToOneWithWhereWithoutFinalistasInput, Prisma.CategoriaUpdateWithoutFinalistasInput>, Prisma.CategoriaUncheckedUpdateWithoutFinalistasInput>;
};
export type CategoriaCreateNestedOneWithoutResultadosInput = {
    create?: Prisma.XOR<Prisma.CategoriaCreateWithoutResultadosInput, Prisma.CategoriaUncheckedCreateWithoutResultadosInput>;
    connectOrCreate?: Prisma.CategoriaCreateOrConnectWithoutResultadosInput;
    connect?: Prisma.CategoriaWhereUniqueInput;
};
export type CategoriaUpdateOneRequiredWithoutResultadosNestedInput = {
    create?: Prisma.XOR<Prisma.CategoriaCreateWithoutResultadosInput, Prisma.CategoriaUncheckedCreateWithoutResultadosInput>;
    connectOrCreate?: Prisma.CategoriaCreateOrConnectWithoutResultadosInput;
    upsert?: Prisma.CategoriaUpsertWithoutResultadosInput;
    connect?: Prisma.CategoriaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CategoriaUpdateToOneWithWhereWithoutResultadosInput, Prisma.CategoriaUpdateWithoutResultadosInput>, Prisma.CategoriaUncheckedUpdateWithoutResultadosInput>;
};
export type CategoriaCreateWithoutEdicaoInput = {
    id?: string;
    nome: string;
    ordem?: number;
    finalistas?: Prisma.FinalistaCreateNestedManyWithoutCategoriaInput;
    indicacoes?: Prisma.IndicacaoCreateNestedManyWithoutCategoriaInput;
    selecoesColegio?: Prisma.SelecaoColegioCreateNestedManyWithoutCategoriaInput;
    resultados?: Prisma.ResultadoCategoriaCreateNestedManyWithoutCategoriaInput;
};
export type CategoriaUncheckedCreateWithoutEdicaoInput = {
    id?: string;
    nome: string;
    ordem?: number;
    finalistas?: Prisma.FinalistaUncheckedCreateNestedManyWithoutCategoriaInput;
    indicacoes?: Prisma.IndicacaoUncheckedCreateNestedManyWithoutCategoriaInput;
    selecoesColegio?: Prisma.SelecaoColegioUncheckedCreateNestedManyWithoutCategoriaInput;
    resultados?: Prisma.ResultadoCategoriaUncheckedCreateNestedManyWithoutCategoriaInput;
};
export type CategoriaCreateOrConnectWithoutEdicaoInput = {
    where: Prisma.CategoriaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategoriaCreateWithoutEdicaoInput, Prisma.CategoriaUncheckedCreateWithoutEdicaoInput>;
};
export type CategoriaCreateManyEdicaoInputEnvelope = {
    data: Prisma.CategoriaCreateManyEdicaoInput | Prisma.CategoriaCreateManyEdicaoInput[];
    skipDuplicates?: boolean;
};
export type CategoriaUpsertWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.CategoriaWhereUniqueInput;
    update: Prisma.XOR<Prisma.CategoriaUpdateWithoutEdicaoInput, Prisma.CategoriaUncheckedUpdateWithoutEdicaoInput>;
    create: Prisma.XOR<Prisma.CategoriaCreateWithoutEdicaoInput, Prisma.CategoriaUncheckedCreateWithoutEdicaoInput>;
};
export type CategoriaUpdateWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.CategoriaWhereUniqueInput;
    data: Prisma.XOR<Prisma.CategoriaUpdateWithoutEdicaoInput, Prisma.CategoriaUncheckedUpdateWithoutEdicaoInput>;
};
export type CategoriaUpdateManyWithWhereWithoutEdicaoInput = {
    where: Prisma.CategoriaScalarWhereInput;
    data: Prisma.XOR<Prisma.CategoriaUpdateManyMutationInput, Prisma.CategoriaUncheckedUpdateManyWithoutEdicaoInput>;
};
export type CategoriaScalarWhereInput = {
    AND?: Prisma.CategoriaScalarWhereInput | Prisma.CategoriaScalarWhereInput[];
    OR?: Prisma.CategoriaScalarWhereInput[];
    NOT?: Prisma.CategoriaScalarWhereInput | Prisma.CategoriaScalarWhereInput[];
    id?: Prisma.StringFilter<"Categoria"> | string;
    edicaoId?: Prisma.StringFilter<"Categoria"> | string;
    nome?: Prisma.StringFilter<"Categoria"> | string;
    ordem?: Prisma.IntFilter<"Categoria"> | number;
};
export type CategoriaCreateWithoutIndicacoesInput = {
    id?: string;
    nome: string;
    ordem?: number;
    edicao: Prisma.EdicaoCreateNestedOneWithoutCategoriasInput;
    finalistas?: Prisma.FinalistaCreateNestedManyWithoutCategoriaInput;
    selecoesColegio?: Prisma.SelecaoColegioCreateNestedManyWithoutCategoriaInput;
    resultados?: Prisma.ResultadoCategoriaCreateNestedManyWithoutCategoriaInput;
};
export type CategoriaUncheckedCreateWithoutIndicacoesInput = {
    id?: string;
    edicaoId: string;
    nome: string;
    ordem?: number;
    finalistas?: Prisma.FinalistaUncheckedCreateNestedManyWithoutCategoriaInput;
    selecoesColegio?: Prisma.SelecaoColegioUncheckedCreateNestedManyWithoutCategoriaInput;
    resultados?: Prisma.ResultadoCategoriaUncheckedCreateNestedManyWithoutCategoriaInput;
};
export type CategoriaCreateOrConnectWithoutIndicacoesInput = {
    where: Prisma.CategoriaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategoriaCreateWithoutIndicacoesInput, Prisma.CategoriaUncheckedCreateWithoutIndicacoesInput>;
};
export type CategoriaUpsertWithoutIndicacoesInput = {
    update: Prisma.XOR<Prisma.CategoriaUpdateWithoutIndicacoesInput, Prisma.CategoriaUncheckedUpdateWithoutIndicacoesInput>;
    create: Prisma.XOR<Prisma.CategoriaCreateWithoutIndicacoesInput, Prisma.CategoriaUncheckedCreateWithoutIndicacoesInput>;
    where?: Prisma.CategoriaWhereInput;
};
export type CategoriaUpdateToOneWithWhereWithoutIndicacoesInput = {
    where?: Prisma.CategoriaWhereInput;
    data: Prisma.XOR<Prisma.CategoriaUpdateWithoutIndicacoesInput, Prisma.CategoriaUncheckedUpdateWithoutIndicacoesInput>;
};
export type CategoriaUpdateWithoutIndicacoesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    ordem?: Prisma.IntFieldUpdateOperationsInput | number;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutCategoriasNestedInput;
    finalistas?: Prisma.FinalistaUpdateManyWithoutCategoriaNestedInput;
    selecoesColegio?: Prisma.SelecaoColegioUpdateManyWithoutCategoriaNestedInput;
    resultados?: Prisma.ResultadoCategoriaUpdateManyWithoutCategoriaNestedInput;
};
export type CategoriaUncheckedUpdateWithoutIndicacoesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    ordem?: Prisma.IntFieldUpdateOperationsInput | number;
    finalistas?: Prisma.FinalistaUncheckedUpdateManyWithoutCategoriaNestedInput;
    selecoesColegio?: Prisma.SelecaoColegioUncheckedUpdateManyWithoutCategoriaNestedInput;
    resultados?: Prisma.ResultadoCategoriaUncheckedUpdateManyWithoutCategoriaNestedInput;
};
export type CategoriaCreateWithoutSelecoesColegioInput = {
    id?: string;
    nome: string;
    ordem?: number;
    edicao: Prisma.EdicaoCreateNestedOneWithoutCategoriasInput;
    finalistas?: Prisma.FinalistaCreateNestedManyWithoutCategoriaInput;
    indicacoes?: Prisma.IndicacaoCreateNestedManyWithoutCategoriaInput;
    resultados?: Prisma.ResultadoCategoriaCreateNestedManyWithoutCategoriaInput;
};
export type CategoriaUncheckedCreateWithoutSelecoesColegioInput = {
    id?: string;
    edicaoId: string;
    nome: string;
    ordem?: number;
    finalistas?: Prisma.FinalistaUncheckedCreateNestedManyWithoutCategoriaInput;
    indicacoes?: Prisma.IndicacaoUncheckedCreateNestedManyWithoutCategoriaInput;
    resultados?: Prisma.ResultadoCategoriaUncheckedCreateNestedManyWithoutCategoriaInput;
};
export type CategoriaCreateOrConnectWithoutSelecoesColegioInput = {
    where: Prisma.CategoriaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategoriaCreateWithoutSelecoesColegioInput, Prisma.CategoriaUncheckedCreateWithoutSelecoesColegioInput>;
};
export type CategoriaUpsertWithoutSelecoesColegioInput = {
    update: Prisma.XOR<Prisma.CategoriaUpdateWithoutSelecoesColegioInput, Prisma.CategoriaUncheckedUpdateWithoutSelecoesColegioInput>;
    create: Prisma.XOR<Prisma.CategoriaCreateWithoutSelecoesColegioInput, Prisma.CategoriaUncheckedCreateWithoutSelecoesColegioInput>;
    where?: Prisma.CategoriaWhereInput;
};
export type CategoriaUpdateToOneWithWhereWithoutSelecoesColegioInput = {
    where?: Prisma.CategoriaWhereInput;
    data: Prisma.XOR<Prisma.CategoriaUpdateWithoutSelecoesColegioInput, Prisma.CategoriaUncheckedUpdateWithoutSelecoesColegioInput>;
};
export type CategoriaUpdateWithoutSelecoesColegioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    ordem?: Prisma.IntFieldUpdateOperationsInput | number;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutCategoriasNestedInput;
    finalistas?: Prisma.FinalistaUpdateManyWithoutCategoriaNestedInput;
    indicacoes?: Prisma.IndicacaoUpdateManyWithoutCategoriaNestedInput;
    resultados?: Prisma.ResultadoCategoriaUpdateManyWithoutCategoriaNestedInput;
};
export type CategoriaUncheckedUpdateWithoutSelecoesColegioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    ordem?: Prisma.IntFieldUpdateOperationsInput | number;
    finalistas?: Prisma.FinalistaUncheckedUpdateManyWithoutCategoriaNestedInput;
    indicacoes?: Prisma.IndicacaoUncheckedUpdateManyWithoutCategoriaNestedInput;
    resultados?: Prisma.ResultadoCategoriaUncheckedUpdateManyWithoutCategoriaNestedInput;
};
export type CategoriaCreateWithoutFinalistasInput = {
    id?: string;
    nome: string;
    ordem?: number;
    edicao: Prisma.EdicaoCreateNestedOneWithoutCategoriasInput;
    indicacoes?: Prisma.IndicacaoCreateNestedManyWithoutCategoriaInput;
    selecoesColegio?: Prisma.SelecaoColegioCreateNestedManyWithoutCategoriaInput;
    resultados?: Prisma.ResultadoCategoriaCreateNestedManyWithoutCategoriaInput;
};
export type CategoriaUncheckedCreateWithoutFinalistasInput = {
    id?: string;
    edicaoId: string;
    nome: string;
    ordem?: number;
    indicacoes?: Prisma.IndicacaoUncheckedCreateNestedManyWithoutCategoriaInput;
    selecoesColegio?: Prisma.SelecaoColegioUncheckedCreateNestedManyWithoutCategoriaInput;
    resultados?: Prisma.ResultadoCategoriaUncheckedCreateNestedManyWithoutCategoriaInput;
};
export type CategoriaCreateOrConnectWithoutFinalistasInput = {
    where: Prisma.CategoriaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategoriaCreateWithoutFinalistasInput, Prisma.CategoriaUncheckedCreateWithoutFinalistasInput>;
};
export type CategoriaUpsertWithoutFinalistasInput = {
    update: Prisma.XOR<Prisma.CategoriaUpdateWithoutFinalistasInput, Prisma.CategoriaUncheckedUpdateWithoutFinalistasInput>;
    create: Prisma.XOR<Prisma.CategoriaCreateWithoutFinalistasInput, Prisma.CategoriaUncheckedCreateWithoutFinalistasInput>;
    where?: Prisma.CategoriaWhereInput;
};
export type CategoriaUpdateToOneWithWhereWithoutFinalistasInput = {
    where?: Prisma.CategoriaWhereInput;
    data: Prisma.XOR<Prisma.CategoriaUpdateWithoutFinalistasInput, Prisma.CategoriaUncheckedUpdateWithoutFinalistasInput>;
};
export type CategoriaUpdateWithoutFinalistasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    ordem?: Prisma.IntFieldUpdateOperationsInput | number;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutCategoriasNestedInput;
    indicacoes?: Prisma.IndicacaoUpdateManyWithoutCategoriaNestedInput;
    selecoesColegio?: Prisma.SelecaoColegioUpdateManyWithoutCategoriaNestedInput;
    resultados?: Prisma.ResultadoCategoriaUpdateManyWithoutCategoriaNestedInput;
};
export type CategoriaUncheckedUpdateWithoutFinalistasInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    ordem?: Prisma.IntFieldUpdateOperationsInput | number;
    indicacoes?: Prisma.IndicacaoUncheckedUpdateManyWithoutCategoriaNestedInput;
    selecoesColegio?: Prisma.SelecaoColegioUncheckedUpdateManyWithoutCategoriaNestedInput;
    resultados?: Prisma.ResultadoCategoriaUncheckedUpdateManyWithoutCategoriaNestedInput;
};
export type CategoriaCreateWithoutResultadosInput = {
    id?: string;
    nome: string;
    ordem?: number;
    edicao: Prisma.EdicaoCreateNestedOneWithoutCategoriasInput;
    finalistas?: Prisma.FinalistaCreateNestedManyWithoutCategoriaInput;
    indicacoes?: Prisma.IndicacaoCreateNestedManyWithoutCategoriaInput;
    selecoesColegio?: Prisma.SelecaoColegioCreateNestedManyWithoutCategoriaInput;
};
export type CategoriaUncheckedCreateWithoutResultadosInput = {
    id?: string;
    edicaoId: string;
    nome: string;
    ordem?: number;
    finalistas?: Prisma.FinalistaUncheckedCreateNestedManyWithoutCategoriaInput;
    indicacoes?: Prisma.IndicacaoUncheckedCreateNestedManyWithoutCategoriaInput;
    selecoesColegio?: Prisma.SelecaoColegioUncheckedCreateNestedManyWithoutCategoriaInput;
};
export type CategoriaCreateOrConnectWithoutResultadosInput = {
    where: Prisma.CategoriaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategoriaCreateWithoutResultadosInput, Prisma.CategoriaUncheckedCreateWithoutResultadosInput>;
};
export type CategoriaUpsertWithoutResultadosInput = {
    update: Prisma.XOR<Prisma.CategoriaUpdateWithoutResultadosInput, Prisma.CategoriaUncheckedUpdateWithoutResultadosInput>;
    create: Prisma.XOR<Prisma.CategoriaCreateWithoutResultadosInput, Prisma.CategoriaUncheckedCreateWithoutResultadosInput>;
    where?: Prisma.CategoriaWhereInput;
};
export type CategoriaUpdateToOneWithWhereWithoutResultadosInput = {
    where?: Prisma.CategoriaWhereInput;
    data: Prisma.XOR<Prisma.CategoriaUpdateWithoutResultadosInput, Prisma.CategoriaUncheckedUpdateWithoutResultadosInput>;
};
export type CategoriaUpdateWithoutResultadosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    ordem?: Prisma.IntFieldUpdateOperationsInput | number;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutCategoriasNestedInput;
    finalistas?: Prisma.FinalistaUpdateManyWithoutCategoriaNestedInput;
    indicacoes?: Prisma.IndicacaoUpdateManyWithoutCategoriaNestedInput;
    selecoesColegio?: Prisma.SelecaoColegioUpdateManyWithoutCategoriaNestedInput;
};
export type CategoriaUncheckedUpdateWithoutResultadosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    ordem?: Prisma.IntFieldUpdateOperationsInput | number;
    finalistas?: Prisma.FinalistaUncheckedUpdateManyWithoutCategoriaNestedInput;
    indicacoes?: Prisma.IndicacaoUncheckedUpdateManyWithoutCategoriaNestedInput;
    selecoesColegio?: Prisma.SelecaoColegioUncheckedUpdateManyWithoutCategoriaNestedInput;
};
export type CategoriaCreateManyEdicaoInput = {
    id?: string;
    nome: string;
    ordem?: number;
};
export type CategoriaUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    ordem?: Prisma.IntFieldUpdateOperationsInput | number;
    finalistas?: Prisma.FinalistaUpdateManyWithoutCategoriaNestedInput;
    indicacoes?: Prisma.IndicacaoUpdateManyWithoutCategoriaNestedInput;
    selecoesColegio?: Prisma.SelecaoColegioUpdateManyWithoutCategoriaNestedInput;
    resultados?: Prisma.ResultadoCategoriaUpdateManyWithoutCategoriaNestedInput;
};
export type CategoriaUncheckedUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    ordem?: Prisma.IntFieldUpdateOperationsInput | number;
    finalistas?: Prisma.FinalistaUncheckedUpdateManyWithoutCategoriaNestedInput;
    indicacoes?: Prisma.IndicacaoUncheckedUpdateManyWithoutCategoriaNestedInput;
    selecoesColegio?: Prisma.SelecaoColegioUncheckedUpdateManyWithoutCategoriaNestedInput;
    resultados?: Prisma.ResultadoCategoriaUncheckedUpdateManyWithoutCategoriaNestedInput;
};
export type CategoriaUncheckedUpdateManyWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    ordem?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CategoriaCountOutputType = {
    finalistas: number;
    indicacoes: number;
    selecoesColegio: number;
    resultados: number;
};
export type CategoriaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    finalistas?: boolean | CategoriaCountOutputTypeCountFinalistasArgs;
    indicacoes?: boolean | CategoriaCountOutputTypeCountIndicacoesArgs;
    selecoesColegio?: boolean | CategoriaCountOutputTypeCountSelecoesColegioArgs;
    resultados?: boolean | CategoriaCountOutputTypeCountResultadosArgs;
};
export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaCountOutputTypeSelect<ExtArgs> | null;
};
export type CategoriaCountOutputTypeCountFinalistasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FinalistaWhereInput;
};
export type CategoriaCountOutputTypeCountIndicacoesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IndicacaoWhereInput;
};
export type CategoriaCountOutputTypeCountSelecoesColegioArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SelecaoColegioWhereInput;
};
export type CategoriaCountOutputTypeCountResultadosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ResultadoCategoriaWhereInput;
};
export type CategoriaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    nome?: boolean;
    ordem?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    finalistas?: boolean | Prisma.Categoria$finalistasArgs<ExtArgs>;
    indicacoes?: boolean | Prisma.Categoria$indicacoesArgs<ExtArgs>;
    selecoesColegio?: boolean | Prisma.Categoria$selecoesColegioArgs<ExtArgs>;
    resultados?: boolean | Prisma.Categoria$resultadosArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoriaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["categoria"]>;
export type CategoriaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    nome?: boolean;
    ordem?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["categoria"]>;
export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    nome?: boolean;
    ordem?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["categoria"]>;
export type CategoriaSelectScalar = {
    id?: boolean;
    edicaoId?: boolean;
    nome?: boolean;
    ordem?: boolean;
};
export type CategoriaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "edicaoId" | "nome" | "ordem", ExtArgs["result"]["categoria"]>;
export type CategoriaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    finalistas?: boolean | Prisma.Categoria$finalistasArgs<ExtArgs>;
    indicacoes?: boolean | Prisma.Categoria$indicacoesArgs<ExtArgs>;
    selecoesColegio?: boolean | Prisma.Categoria$selecoesColegioArgs<ExtArgs>;
    resultados?: boolean | Prisma.Categoria$resultadosArgs<ExtArgs>;
    _count?: boolean | Prisma.CategoriaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
};
export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
};
export type $CategoriaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Categoria";
    objects: {
        edicao: Prisma.$EdicaoPayload<ExtArgs>;
        finalistas: Prisma.$FinalistaPayload<ExtArgs>[];
        indicacoes: Prisma.$IndicacaoPayload<ExtArgs>[];
        selecoesColegio: Prisma.$SelecaoColegioPayload<ExtArgs>[];
        resultados: Prisma.$ResultadoCategoriaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        edicaoId: string;
        nome: string;
        ordem: number;
    }, ExtArgs["result"]["categoria"]>;
    composites: {};
};
export type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CategoriaPayload, S>;
export type CategoriaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CategoriaCountAggregateInputType | true;
};
export interface CategoriaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Categoria'];
        meta: {
            name: 'Categoria';
        };
    };
    findUnique<T extends CategoriaFindUniqueArgs>(args: Prisma.SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CategoriaClient<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CategoriaClient<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CategoriaFindFirstArgs>(args?: Prisma.SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma.Prisma__CategoriaClient<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CategoriaClient<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CategoriaFindManyArgs>(args?: Prisma.SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CategoriaCreateArgs>(args: Prisma.SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma.Prisma__CategoriaClient<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CategoriaCreateManyArgs>(args?: Prisma.SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CategoriaDeleteArgs>(args: Prisma.SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma.Prisma__CategoriaClient<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CategoriaUpdateArgs>(args: Prisma.SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma.Prisma__CategoriaClient<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: Prisma.SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CategoriaUpdateManyArgs>(args: Prisma.SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CategoriaUpsertArgs>(args: Prisma.SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma.Prisma__CategoriaClient<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CategoriaCountArgs>(args?: Prisma.Subset<T, CategoriaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CategoriaCountAggregateOutputType> : number>;
    aggregate<T extends CategoriaAggregateArgs>(args: Prisma.Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>;
    groupBy<T extends CategoriaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CategoriaGroupByArgs['orderBy'];
    } : {
        orderBy?: CategoriaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CategoriaFieldRefs;
}
export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    edicao<T extends Prisma.EdicaoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EdicaoDefaultArgs<ExtArgs>>): Prisma.Prisma__EdicaoClient<runtime.Types.Result.GetResult<Prisma.$EdicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    finalistas<T extends Prisma.Categoria$finalistasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Categoria$finalistasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FinalistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    indicacoes<T extends Prisma.Categoria$indicacoesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Categoria$indicacoesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IndicacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    selecoesColegio<T extends Prisma.Categoria$selecoesColegioArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Categoria$selecoesColegioArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SelecaoColegioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    resultados<T extends Prisma.Categoria$resultadosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Categoria$resultadosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ResultadoCategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CategoriaFieldRefs {
    readonly id: Prisma.FieldRef<"Categoria", 'String'>;
    readonly edicaoId: Prisma.FieldRef<"Categoria", 'String'>;
    readonly nome: Prisma.FieldRef<"Categoria", 'String'>;
    readonly ordem: Prisma.FieldRef<"Categoria", 'Int'>;
}
export type CategoriaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaOmit<ExtArgs> | null;
    include?: Prisma.CategoriaInclude<ExtArgs> | null;
    where: Prisma.CategoriaWhereUniqueInput;
};
export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaOmit<ExtArgs> | null;
    include?: Prisma.CategoriaInclude<ExtArgs> | null;
    where: Prisma.CategoriaWhereUniqueInput;
};
export type CategoriaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaOmit<ExtArgs> | null;
    include?: Prisma.CategoriaInclude<ExtArgs> | null;
    where?: Prisma.CategoriaWhereInput;
    orderBy?: Prisma.CategoriaOrderByWithRelationInput | Prisma.CategoriaOrderByWithRelationInput[];
    cursor?: Prisma.CategoriaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriaScalarFieldEnum | Prisma.CategoriaScalarFieldEnum[];
};
export type CategoriaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaOmit<ExtArgs> | null;
    include?: Prisma.CategoriaInclude<ExtArgs> | null;
    where?: Prisma.CategoriaWhereInput;
    orderBy?: Prisma.CategoriaOrderByWithRelationInput | Prisma.CategoriaOrderByWithRelationInput[];
    cursor?: Prisma.CategoriaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriaScalarFieldEnum | Prisma.CategoriaScalarFieldEnum[];
};
export type CategoriaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaOmit<ExtArgs> | null;
    include?: Prisma.CategoriaInclude<ExtArgs> | null;
    where?: Prisma.CategoriaWhereInput;
    orderBy?: Prisma.CategoriaOrderByWithRelationInput | Prisma.CategoriaOrderByWithRelationInput[];
    cursor?: Prisma.CategoriaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CategoriaScalarFieldEnum | Prisma.CategoriaScalarFieldEnum[];
};
export type CategoriaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaOmit<ExtArgs> | null;
    include?: Prisma.CategoriaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CategoriaCreateInput, Prisma.CategoriaUncheckedCreateInput>;
};
export type CategoriaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CategoriaCreateManyInput | Prisma.CategoriaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CategoriaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CategoriaOmit<ExtArgs> | null;
    data: Prisma.CategoriaCreateManyInput | Prisma.CategoriaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CategoriaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CategoriaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaOmit<ExtArgs> | null;
    include?: Prisma.CategoriaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CategoriaUpdateInput, Prisma.CategoriaUncheckedUpdateInput>;
    where: Prisma.CategoriaWhereUniqueInput;
};
export type CategoriaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CategoriaUpdateManyMutationInput, Prisma.CategoriaUncheckedUpdateManyInput>;
    where?: Prisma.CategoriaWhereInput;
    limit?: number;
};
export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CategoriaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CategoriaUpdateManyMutationInput, Prisma.CategoriaUncheckedUpdateManyInput>;
    where?: Prisma.CategoriaWhereInput;
    limit?: number;
    include?: Prisma.CategoriaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CategoriaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaOmit<ExtArgs> | null;
    include?: Prisma.CategoriaInclude<ExtArgs> | null;
    where: Prisma.CategoriaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CategoriaCreateInput, Prisma.CategoriaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CategoriaUpdateInput, Prisma.CategoriaUncheckedUpdateInput>;
};
export type CategoriaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaOmit<ExtArgs> | null;
    include?: Prisma.CategoriaInclude<ExtArgs> | null;
    where: Prisma.CategoriaWhereUniqueInput;
};
export type CategoriaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CategoriaWhereInput;
    limit?: number;
};
export type Categoria$finalistasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Categoria$indicacoesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IndicacaoSelect<ExtArgs> | null;
    omit?: Prisma.IndicacaoOmit<ExtArgs> | null;
    include?: Prisma.IndicacaoInclude<ExtArgs> | null;
    where?: Prisma.IndicacaoWhereInput;
    orderBy?: Prisma.IndicacaoOrderByWithRelationInput | Prisma.IndicacaoOrderByWithRelationInput[];
    cursor?: Prisma.IndicacaoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.IndicacaoScalarFieldEnum | Prisma.IndicacaoScalarFieldEnum[];
};
export type Categoria$selecoesColegioArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SelecaoColegioSelect<ExtArgs> | null;
    omit?: Prisma.SelecaoColegioOmit<ExtArgs> | null;
    include?: Prisma.SelecaoColegioInclude<ExtArgs> | null;
    where?: Prisma.SelecaoColegioWhereInput;
    orderBy?: Prisma.SelecaoColegioOrderByWithRelationInput | Prisma.SelecaoColegioOrderByWithRelationInput[];
    cursor?: Prisma.SelecaoColegioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SelecaoColegioScalarFieldEnum | Prisma.SelecaoColegioScalarFieldEnum[];
};
export type Categoria$resultadosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CategoriaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CategoriaSelect<ExtArgs> | null;
    omit?: Prisma.CategoriaOmit<ExtArgs> | null;
    include?: Prisma.CategoriaInclude<ExtArgs> | null;
};
