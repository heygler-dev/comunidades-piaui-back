import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type IndicacaoModel = runtime.Types.Result.DefaultSelection<Prisma.$IndicacaoPayload>;
export type AggregateIndicacao = {
    _count: IndicacaoCountAggregateOutputType | null;
    _min: IndicacaoMinAggregateOutputType | null;
    _max: IndicacaoMaxAggregateOutputType | null;
};
export type IndicacaoMinAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    categoriaId: string | null;
    inscricaoStartupId: string | null;
    indicanteLiderId: string | null;
    indicanteInscricaoId: string | null;
    justificativa: string | null;
    status: $Enums.StatusIndicacao | null;
    createdAt: Date | null;
};
export type IndicacaoMaxAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    categoriaId: string | null;
    inscricaoStartupId: string | null;
    indicanteLiderId: string | null;
    indicanteInscricaoId: string | null;
    justificativa: string | null;
    status: $Enums.StatusIndicacao | null;
    createdAt: Date | null;
};
export type IndicacaoCountAggregateOutputType = {
    id: number;
    edicaoId: number;
    categoriaId: number;
    inscricaoStartupId: number;
    indicanteLiderId: number;
    indicanteInscricaoId: number;
    justificativa: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type IndicacaoMinAggregateInputType = {
    id?: true;
    edicaoId?: true;
    categoriaId?: true;
    inscricaoStartupId?: true;
    indicanteLiderId?: true;
    indicanteInscricaoId?: true;
    justificativa?: true;
    status?: true;
    createdAt?: true;
};
export type IndicacaoMaxAggregateInputType = {
    id?: true;
    edicaoId?: true;
    categoriaId?: true;
    inscricaoStartupId?: true;
    indicanteLiderId?: true;
    indicanteInscricaoId?: true;
    justificativa?: true;
    status?: true;
    createdAt?: true;
};
export type IndicacaoCountAggregateInputType = {
    id?: true;
    edicaoId?: true;
    categoriaId?: true;
    inscricaoStartupId?: true;
    indicanteLiderId?: true;
    indicanteInscricaoId?: true;
    justificativa?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type IndicacaoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IndicacaoWhereInput;
    orderBy?: Prisma.IndicacaoOrderByWithRelationInput | Prisma.IndicacaoOrderByWithRelationInput[];
    cursor?: Prisma.IndicacaoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | IndicacaoCountAggregateInputType;
    _min?: IndicacaoMinAggregateInputType;
    _max?: IndicacaoMaxAggregateInputType;
};
export type GetIndicacaoAggregateType<T extends IndicacaoAggregateArgs> = {
    [P in keyof T & keyof AggregateIndicacao]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIndicacao[P]> : Prisma.GetScalarType<T[P], AggregateIndicacao[P]>;
};
export type IndicacaoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IndicacaoWhereInput;
    orderBy?: Prisma.IndicacaoOrderByWithAggregationInput | Prisma.IndicacaoOrderByWithAggregationInput[];
    by: Prisma.IndicacaoScalarFieldEnum[] | Prisma.IndicacaoScalarFieldEnum;
    having?: Prisma.IndicacaoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IndicacaoCountAggregateInputType | true;
    _min?: IndicacaoMinAggregateInputType;
    _max?: IndicacaoMaxAggregateInputType;
};
export type IndicacaoGroupByOutputType = {
    id: string;
    edicaoId: string;
    categoriaId: string;
    inscricaoStartupId: string;
    indicanteLiderId: string | null;
    indicanteInscricaoId: string | null;
    justificativa: string | null;
    status: $Enums.StatusIndicacao;
    createdAt: Date;
    _count: IndicacaoCountAggregateOutputType | null;
    _min: IndicacaoMinAggregateOutputType | null;
    _max: IndicacaoMaxAggregateOutputType | null;
};
export type GetIndicacaoGroupByPayload<T extends IndicacaoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IndicacaoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IndicacaoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IndicacaoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IndicacaoGroupByOutputType[P]>;
}>>;
export type IndicacaoWhereInput = {
    AND?: Prisma.IndicacaoWhereInput | Prisma.IndicacaoWhereInput[];
    OR?: Prisma.IndicacaoWhereInput[];
    NOT?: Prisma.IndicacaoWhereInput | Prisma.IndicacaoWhereInput[];
    id?: Prisma.StringFilter<"Indicacao"> | string;
    edicaoId?: Prisma.StringFilter<"Indicacao"> | string;
    categoriaId?: Prisma.StringFilter<"Indicacao"> | string;
    inscricaoStartupId?: Prisma.StringFilter<"Indicacao"> | string;
    indicanteLiderId?: Prisma.StringNullableFilter<"Indicacao"> | string | null;
    indicanteInscricaoId?: Prisma.StringNullableFilter<"Indicacao"> | string | null;
    justificativa?: Prisma.StringNullableFilter<"Indicacao"> | string | null;
    status?: Prisma.EnumStatusIndicacaoFilter<"Indicacao"> | $Enums.StatusIndicacao;
    createdAt?: Prisma.DateTimeFilter<"Indicacao"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
    categoria?: Prisma.XOR<Prisma.CategoriaScalarRelationFilter, Prisma.CategoriaWhereInput>;
    inscricaoStartup?: Prisma.XOR<Prisma.InscricaoStartupScalarRelationFilter, Prisma.InscricaoStartupWhereInput>;
    indicanteLider?: Prisma.XOR<Prisma.LiderNullableScalarRelationFilter, Prisma.LiderWhereInput> | null;
    indicanteInscricao?: Prisma.XOR<Prisma.InscricaoStartupNullableScalarRelationFilter, Prisma.InscricaoStartupWhereInput> | null;
};
export type IndicacaoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    inscricaoStartupId?: Prisma.SortOrder;
    indicanteLiderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    indicanteInscricaoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    justificativa?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    edicao?: Prisma.EdicaoOrderByWithRelationInput;
    categoria?: Prisma.CategoriaOrderByWithRelationInput;
    inscricaoStartup?: Prisma.InscricaoStartupOrderByWithRelationInput;
    indicanteLider?: Prisma.LiderOrderByWithRelationInput;
    indicanteInscricao?: Prisma.InscricaoStartupOrderByWithRelationInput;
};
export type IndicacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.IndicacaoWhereInput | Prisma.IndicacaoWhereInput[];
    OR?: Prisma.IndicacaoWhereInput[];
    NOT?: Prisma.IndicacaoWhereInput | Prisma.IndicacaoWhereInput[];
    edicaoId?: Prisma.StringFilter<"Indicacao"> | string;
    categoriaId?: Prisma.StringFilter<"Indicacao"> | string;
    inscricaoStartupId?: Prisma.StringFilter<"Indicacao"> | string;
    indicanteLiderId?: Prisma.StringNullableFilter<"Indicacao"> | string | null;
    indicanteInscricaoId?: Prisma.StringNullableFilter<"Indicacao"> | string | null;
    justificativa?: Prisma.StringNullableFilter<"Indicacao"> | string | null;
    status?: Prisma.EnumStatusIndicacaoFilter<"Indicacao"> | $Enums.StatusIndicacao;
    createdAt?: Prisma.DateTimeFilter<"Indicacao"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
    categoria?: Prisma.XOR<Prisma.CategoriaScalarRelationFilter, Prisma.CategoriaWhereInput>;
    inscricaoStartup?: Prisma.XOR<Prisma.InscricaoStartupScalarRelationFilter, Prisma.InscricaoStartupWhereInput>;
    indicanteLider?: Prisma.XOR<Prisma.LiderNullableScalarRelationFilter, Prisma.LiderWhereInput> | null;
    indicanteInscricao?: Prisma.XOR<Prisma.InscricaoStartupNullableScalarRelationFilter, Prisma.InscricaoStartupWhereInput> | null;
}, "id">;
export type IndicacaoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    inscricaoStartupId?: Prisma.SortOrder;
    indicanteLiderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    indicanteInscricaoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    justificativa?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.IndicacaoCountOrderByAggregateInput;
    _max?: Prisma.IndicacaoMaxOrderByAggregateInput;
    _min?: Prisma.IndicacaoMinOrderByAggregateInput;
};
export type IndicacaoScalarWhereWithAggregatesInput = {
    AND?: Prisma.IndicacaoScalarWhereWithAggregatesInput | Prisma.IndicacaoScalarWhereWithAggregatesInput[];
    OR?: Prisma.IndicacaoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.IndicacaoScalarWhereWithAggregatesInput | Prisma.IndicacaoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Indicacao"> | string;
    edicaoId?: Prisma.StringWithAggregatesFilter<"Indicacao"> | string;
    categoriaId?: Prisma.StringWithAggregatesFilter<"Indicacao"> | string;
    inscricaoStartupId?: Prisma.StringWithAggregatesFilter<"Indicacao"> | string;
    indicanteLiderId?: Prisma.StringNullableWithAggregatesFilter<"Indicacao"> | string | null;
    indicanteInscricaoId?: Prisma.StringNullableWithAggregatesFilter<"Indicacao"> | string | null;
    justificativa?: Prisma.StringNullableWithAggregatesFilter<"Indicacao"> | string | null;
    status?: Prisma.EnumStatusIndicacaoWithAggregatesFilter<"Indicacao"> | $Enums.StatusIndicacao;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Indicacao"> | Date | string;
};
export type IndicacaoCreateInput = {
    id?: string;
    justificativa?: string | null;
    status?: $Enums.StatusIndicacao;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutIndicacoesInput;
    categoria: Prisma.CategoriaCreateNestedOneWithoutIndicacoesInput;
    inscricaoStartup: Prisma.InscricaoStartupCreateNestedOneWithoutIndicacoesRecebidasInput;
    indicanteLider?: Prisma.LiderCreateNestedOneWithoutIndicacoesInput;
    indicanteInscricao?: Prisma.InscricaoStartupCreateNestedOneWithoutIndicacoesFeitasInput;
};
export type IndicacaoUncheckedCreateInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    inscricaoStartupId: string;
    indicanteLiderId?: string | null;
    indicanteInscricaoId?: string | null;
    justificativa?: string | null;
    status?: $Enums.StatusIndicacao;
    createdAt?: Date | string;
};
export type IndicacaoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    justificativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusIndicacaoFieldUpdateOperationsInput | $Enums.StatusIndicacao;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutIndicacoesNestedInput;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutIndicacoesNestedInput;
    inscricaoStartup?: Prisma.InscricaoStartupUpdateOneRequiredWithoutIndicacoesRecebidasNestedInput;
    indicanteLider?: Prisma.LiderUpdateOneWithoutIndicacoesNestedInput;
    indicanteInscricao?: Prisma.InscricaoStartupUpdateOneWithoutIndicacoesFeitasNestedInput;
};
export type IndicacaoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    indicanteLiderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    indicanteInscricaoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    justificativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusIndicacaoFieldUpdateOperationsInput | $Enums.StatusIndicacao;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IndicacaoCreateManyInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    inscricaoStartupId: string;
    indicanteLiderId?: string | null;
    indicanteInscricaoId?: string | null;
    justificativa?: string | null;
    status?: $Enums.StatusIndicacao;
    createdAt?: Date | string;
};
export type IndicacaoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    justificativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusIndicacaoFieldUpdateOperationsInput | $Enums.StatusIndicacao;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IndicacaoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    indicanteLiderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    indicanteInscricaoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    justificativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusIndicacaoFieldUpdateOperationsInput | $Enums.StatusIndicacao;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IndicacaoListRelationFilter = {
    every?: Prisma.IndicacaoWhereInput;
    some?: Prisma.IndicacaoWhereInput;
    none?: Prisma.IndicacaoWhereInput;
};
export type IndicacaoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type IndicacaoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    inscricaoStartupId?: Prisma.SortOrder;
    indicanteLiderId?: Prisma.SortOrder;
    indicanteInscricaoId?: Prisma.SortOrder;
    justificativa?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IndicacaoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    inscricaoStartupId?: Prisma.SortOrder;
    indicanteLiderId?: Prisma.SortOrder;
    indicanteInscricaoId?: Prisma.SortOrder;
    justificativa?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IndicacaoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    inscricaoStartupId?: Prisma.SortOrder;
    indicanteLiderId?: Prisma.SortOrder;
    indicanteInscricaoId?: Prisma.SortOrder;
    justificativa?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type IndicacaoCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.IndicacaoCreateWithoutEdicaoInput, Prisma.IndicacaoUncheckedCreateWithoutEdicaoInput> | Prisma.IndicacaoCreateWithoutEdicaoInput[] | Prisma.IndicacaoUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.IndicacaoCreateOrConnectWithoutEdicaoInput | Prisma.IndicacaoCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.IndicacaoCreateManyEdicaoInputEnvelope;
    connect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
};
export type IndicacaoUncheckedCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.IndicacaoCreateWithoutEdicaoInput, Prisma.IndicacaoUncheckedCreateWithoutEdicaoInput> | Prisma.IndicacaoCreateWithoutEdicaoInput[] | Prisma.IndicacaoUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.IndicacaoCreateOrConnectWithoutEdicaoInput | Prisma.IndicacaoCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.IndicacaoCreateManyEdicaoInputEnvelope;
    connect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
};
export type IndicacaoUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.IndicacaoCreateWithoutEdicaoInput, Prisma.IndicacaoUncheckedCreateWithoutEdicaoInput> | Prisma.IndicacaoCreateWithoutEdicaoInput[] | Prisma.IndicacaoUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.IndicacaoCreateOrConnectWithoutEdicaoInput | Prisma.IndicacaoCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.IndicacaoUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.IndicacaoUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.IndicacaoCreateManyEdicaoInputEnvelope;
    set?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    disconnect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    delete?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    connect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    update?: Prisma.IndicacaoUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.IndicacaoUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.IndicacaoUpdateManyWithWhereWithoutEdicaoInput | Prisma.IndicacaoUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.IndicacaoScalarWhereInput | Prisma.IndicacaoScalarWhereInput[];
};
export type IndicacaoUncheckedUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.IndicacaoCreateWithoutEdicaoInput, Prisma.IndicacaoUncheckedCreateWithoutEdicaoInput> | Prisma.IndicacaoCreateWithoutEdicaoInput[] | Prisma.IndicacaoUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.IndicacaoCreateOrConnectWithoutEdicaoInput | Prisma.IndicacaoCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.IndicacaoUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.IndicacaoUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.IndicacaoCreateManyEdicaoInputEnvelope;
    set?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    disconnect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    delete?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    connect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    update?: Prisma.IndicacaoUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.IndicacaoUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.IndicacaoUpdateManyWithWhereWithoutEdicaoInput | Prisma.IndicacaoUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.IndicacaoScalarWhereInput | Prisma.IndicacaoScalarWhereInput[];
};
export type IndicacaoCreateNestedManyWithoutIndicanteLiderInput = {
    create?: Prisma.XOR<Prisma.IndicacaoCreateWithoutIndicanteLiderInput, Prisma.IndicacaoUncheckedCreateWithoutIndicanteLiderInput> | Prisma.IndicacaoCreateWithoutIndicanteLiderInput[] | Prisma.IndicacaoUncheckedCreateWithoutIndicanteLiderInput[];
    connectOrCreate?: Prisma.IndicacaoCreateOrConnectWithoutIndicanteLiderInput | Prisma.IndicacaoCreateOrConnectWithoutIndicanteLiderInput[];
    createMany?: Prisma.IndicacaoCreateManyIndicanteLiderInputEnvelope;
    connect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
};
export type IndicacaoUncheckedCreateNestedManyWithoutIndicanteLiderInput = {
    create?: Prisma.XOR<Prisma.IndicacaoCreateWithoutIndicanteLiderInput, Prisma.IndicacaoUncheckedCreateWithoutIndicanteLiderInput> | Prisma.IndicacaoCreateWithoutIndicanteLiderInput[] | Prisma.IndicacaoUncheckedCreateWithoutIndicanteLiderInput[];
    connectOrCreate?: Prisma.IndicacaoCreateOrConnectWithoutIndicanteLiderInput | Prisma.IndicacaoCreateOrConnectWithoutIndicanteLiderInput[];
    createMany?: Prisma.IndicacaoCreateManyIndicanteLiderInputEnvelope;
    connect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
};
export type IndicacaoUpdateManyWithoutIndicanteLiderNestedInput = {
    create?: Prisma.XOR<Prisma.IndicacaoCreateWithoutIndicanteLiderInput, Prisma.IndicacaoUncheckedCreateWithoutIndicanteLiderInput> | Prisma.IndicacaoCreateWithoutIndicanteLiderInput[] | Prisma.IndicacaoUncheckedCreateWithoutIndicanteLiderInput[];
    connectOrCreate?: Prisma.IndicacaoCreateOrConnectWithoutIndicanteLiderInput | Prisma.IndicacaoCreateOrConnectWithoutIndicanteLiderInput[];
    upsert?: Prisma.IndicacaoUpsertWithWhereUniqueWithoutIndicanteLiderInput | Prisma.IndicacaoUpsertWithWhereUniqueWithoutIndicanteLiderInput[];
    createMany?: Prisma.IndicacaoCreateManyIndicanteLiderInputEnvelope;
    set?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    disconnect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    delete?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    connect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    update?: Prisma.IndicacaoUpdateWithWhereUniqueWithoutIndicanteLiderInput | Prisma.IndicacaoUpdateWithWhereUniqueWithoutIndicanteLiderInput[];
    updateMany?: Prisma.IndicacaoUpdateManyWithWhereWithoutIndicanteLiderInput | Prisma.IndicacaoUpdateManyWithWhereWithoutIndicanteLiderInput[];
    deleteMany?: Prisma.IndicacaoScalarWhereInput | Prisma.IndicacaoScalarWhereInput[];
};
export type IndicacaoUncheckedUpdateManyWithoutIndicanteLiderNestedInput = {
    create?: Prisma.XOR<Prisma.IndicacaoCreateWithoutIndicanteLiderInput, Prisma.IndicacaoUncheckedCreateWithoutIndicanteLiderInput> | Prisma.IndicacaoCreateWithoutIndicanteLiderInput[] | Prisma.IndicacaoUncheckedCreateWithoutIndicanteLiderInput[];
    connectOrCreate?: Prisma.IndicacaoCreateOrConnectWithoutIndicanteLiderInput | Prisma.IndicacaoCreateOrConnectWithoutIndicanteLiderInput[];
    upsert?: Prisma.IndicacaoUpsertWithWhereUniqueWithoutIndicanteLiderInput | Prisma.IndicacaoUpsertWithWhereUniqueWithoutIndicanteLiderInput[];
    createMany?: Prisma.IndicacaoCreateManyIndicanteLiderInputEnvelope;
    set?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    disconnect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    delete?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    connect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    update?: Prisma.IndicacaoUpdateWithWhereUniqueWithoutIndicanteLiderInput | Prisma.IndicacaoUpdateWithWhereUniqueWithoutIndicanteLiderInput[];
    updateMany?: Prisma.IndicacaoUpdateManyWithWhereWithoutIndicanteLiderInput | Prisma.IndicacaoUpdateManyWithWhereWithoutIndicanteLiderInput[];
    deleteMany?: Prisma.IndicacaoScalarWhereInput | Prisma.IndicacaoScalarWhereInput[];
};
export type IndicacaoCreateNestedManyWithoutInscricaoStartupInput = {
    create?: Prisma.XOR<Prisma.IndicacaoCreateWithoutInscricaoStartupInput, Prisma.IndicacaoUncheckedCreateWithoutInscricaoStartupInput> | Prisma.IndicacaoCreateWithoutInscricaoStartupInput[] | Prisma.IndicacaoUncheckedCreateWithoutInscricaoStartupInput[];
    connectOrCreate?: Prisma.IndicacaoCreateOrConnectWithoutInscricaoStartupInput | Prisma.IndicacaoCreateOrConnectWithoutInscricaoStartupInput[];
    createMany?: Prisma.IndicacaoCreateManyInscricaoStartupInputEnvelope;
    connect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
};
export type IndicacaoCreateNestedManyWithoutIndicanteInscricaoInput = {
    create?: Prisma.XOR<Prisma.IndicacaoCreateWithoutIndicanteInscricaoInput, Prisma.IndicacaoUncheckedCreateWithoutIndicanteInscricaoInput> | Prisma.IndicacaoCreateWithoutIndicanteInscricaoInput[] | Prisma.IndicacaoUncheckedCreateWithoutIndicanteInscricaoInput[];
    connectOrCreate?: Prisma.IndicacaoCreateOrConnectWithoutIndicanteInscricaoInput | Prisma.IndicacaoCreateOrConnectWithoutIndicanteInscricaoInput[];
    createMany?: Prisma.IndicacaoCreateManyIndicanteInscricaoInputEnvelope;
    connect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
};
export type IndicacaoUncheckedCreateNestedManyWithoutInscricaoStartupInput = {
    create?: Prisma.XOR<Prisma.IndicacaoCreateWithoutInscricaoStartupInput, Prisma.IndicacaoUncheckedCreateWithoutInscricaoStartupInput> | Prisma.IndicacaoCreateWithoutInscricaoStartupInput[] | Prisma.IndicacaoUncheckedCreateWithoutInscricaoStartupInput[];
    connectOrCreate?: Prisma.IndicacaoCreateOrConnectWithoutInscricaoStartupInput | Prisma.IndicacaoCreateOrConnectWithoutInscricaoStartupInput[];
    createMany?: Prisma.IndicacaoCreateManyInscricaoStartupInputEnvelope;
    connect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
};
export type IndicacaoUncheckedCreateNestedManyWithoutIndicanteInscricaoInput = {
    create?: Prisma.XOR<Prisma.IndicacaoCreateWithoutIndicanteInscricaoInput, Prisma.IndicacaoUncheckedCreateWithoutIndicanteInscricaoInput> | Prisma.IndicacaoCreateWithoutIndicanteInscricaoInput[] | Prisma.IndicacaoUncheckedCreateWithoutIndicanteInscricaoInput[];
    connectOrCreate?: Prisma.IndicacaoCreateOrConnectWithoutIndicanteInscricaoInput | Prisma.IndicacaoCreateOrConnectWithoutIndicanteInscricaoInput[];
    createMany?: Prisma.IndicacaoCreateManyIndicanteInscricaoInputEnvelope;
    connect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
};
export type IndicacaoUpdateManyWithoutInscricaoStartupNestedInput = {
    create?: Prisma.XOR<Prisma.IndicacaoCreateWithoutInscricaoStartupInput, Prisma.IndicacaoUncheckedCreateWithoutInscricaoStartupInput> | Prisma.IndicacaoCreateWithoutInscricaoStartupInput[] | Prisma.IndicacaoUncheckedCreateWithoutInscricaoStartupInput[];
    connectOrCreate?: Prisma.IndicacaoCreateOrConnectWithoutInscricaoStartupInput | Prisma.IndicacaoCreateOrConnectWithoutInscricaoStartupInput[];
    upsert?: Prisma.IndicacaoUpsertWithWhereUniqueWithoutInscricaoStartupInput | Prisma.IndicacaoUpsertWithWhereUniqueWithoutInscricaoStartupInput[];
    createMany?: Prisma.IndicacaoCreateManyInscricaoStartupInputEnvelope;
    set?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    disconnect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    delete?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    connect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    update?: Prisma.IndicacaoUpdateWithWhereUniqueWithoutInscricaoStartupInput | Prisma.IndicacaoUpdateWithWhereUniqueWithoutInscricaoStartupInput[];
    updateMany?: Prisma.IndicacaoUpdateManyWithWhereWithoutInscricaoStartupInput | Prisma.IndicacaoUpdateManyWithWhereWithoutInscricaoStartupInput[];
    deleteMany?: Prisma.IndicacaoScalarWhereInput | Prisma.IndicacaoScalarWhereInput[];
};
export type IndicacaoUpdateManyWithoutIndicanteInscricaoNestedInput = {
    create?: Prisma.XOR<Prisma.IndicacaoCreateWithoutIndicanteInscricaoInput, Prisma.IndicacaoUncheckedCreateWithoutIndicanteInscricaoInput> | Prisma.IndicacaoCreateWithoutIndicanteInscricaoInput[] | Prisma.IndicacaoUncheckedCreateWithoutIndicanteInscricaoInput[];
    connectOrCreate?: Prisma.IndicacaoCreateOrConnectWithoutIndicanteInscricaoInput | Prisma.IndicacaoCreateOrConnectWithoutIndicanteInscricaoInput[];
    upsert?: Prisma.IndicacaoUpsertWithWhereUniqueWithoutIndicanteInscricaoInput | Prisma.IndicacaoUpsertWithWhereUniqueWithoutIndicanteInscricaoInput[];
    createMany?: Prisma.IndicacaoCreateManyIndicanteInscricaoInputEnvelope;
    set?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    disconnect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    delete?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    connect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    update?: Prisma.IndicacaoUpdateWithWhereUniqueWithoutIndicanteInscricaoInput | Prisma.IndicacaoUpdateWithWhereUniqueWithoutIndicanteInscricaoInput[];
    updateMany?: Prisma.IndicacaoUpdateManyWithWhereWithoutIndicanteInscricaoInput | Prisma.IndicacaoUpdateManyWithWhereWithoutIndicanteInscricaoInput[];
    deleteMany?: Prisma.IndicacaoScalarWhereInput | Prisma.IndicacaoScalarWhereInput[];
};
export type IndicacaoUncheckedUpdateManyWithoutInscricaoStartupNestedInput = {
    create?: Prisma.XOR<Prisma.IndicacaoCreateWithoutInscricaoStartupInput, Prisma.IndicacaoUncheckedCreateWithoutInscricaoStartupInput> | Prisma.IndicacaoCreateWithoutInscricaoStartupInput[] | Prisma.IndicacaoUncheckedCreateWithoutInscricaoStartupInput[];
    connectOrCreate?: Prisma.IndicacaoCreateOrConnectWithoutInscricaoStartupInput | Prisma.IndicacaoCreateOrConnectWithoutInscricaoStartupInput[];
    upsert?: Prisma.IndicacaoUpsertWithWhereUniqueWithoutInscricaoStartupInput | Prisma.IndicacaoUpsertWithWhereUniqueWithoutInscricaoStartupInput[];
    createMany?: Prisma.IndicacaoCreateManyInscricaoStartupInputEnvelope;
    set?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    disconnect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    delete?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    connect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    update?: Prisma.IndicacaoUpdateWithWhereUniqueWithoutInscricaoStartupInput | Prisma.IndicacaoUpdateWithWhereUniqueWithoutInscricaoStartupInput[];
    updateMany?: Prisma.IndicacaoUpdateManyWithWhereWithoutInscricaoStartupInput | Prisma.IndicacaoUpdateManyWithWhereWithoutInscricaoStartupInput[];
    deleteMany?: Prisma.IndicacaoScalarWhereInput | Prisma.IndicacaoScalarWhereInput[];
};
export type IndicacaoUncheckedUpdateManyWithoutIndicanteInscricaoNestedInput = {
    create?: Prisma.XOR<Prisma.IndicacaoCreateWithoutIndicanteInscricaoInput, Prisma.IndicacaoUncheckedCreateWithoutIndicanteInscricaoInput> | Prisma.IndicacaoCreateWithoutIndicanteInscricaoInput[] | Prisma.IndicacaoUncheckedCreateWithoutIndicanteInscricaoInput[];
    connectOrCreate?: Prisma.IndicacaoCreateOrConnectWithoutIndicanteInscricaoInput | Prisma.IndicacaoCreateOrConnectWithoutIndicanteInscricaoInput[];
    upsert?: Prisma.IndicacaoUpsertWithWhereUniqueWithoutIndicanteInscricaoInput | Prisma.IndicacaoUpsertWithWhereUniqueWithoutIndicanteInscricaoInput[];
    createMany?: Prisma.IndicacaoCreateManyIndicanteInscricaoInputEnvelope;
    set?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    disconnect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    delete?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    connect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    update?: Prisma.IndicacaoUpdateWithWhereUniqueWithoutIndicanteInscricaoInput | Prisma.IndicacaoUpdateWithWhereUniqueWithoutIndicanteInscricaoInput[];
    updateMany?: Prisma.IndicacaoUpdateManyWithWhereWithoutIndicanteInscricaoInput | Prisma.IndicacaoUpdateManyWithWhereWithoutIndicanteInscricaoInput[];
    deleteMany?: Prisma.IndicacaoScalarWhereInput | Prisma.IndicacaoScalarWhereInput[];
};
export type IndicacaoCreateNestedManyWithoutCategoriaInput = {
    create?: Prisma.XOR<Prisma.IndicacaoCreateWithoutCategoriaInput, Prisma.IndicacaoUncheckedCreateWithoutCategoriaInput> | Prisma.IndicacaoCreateWithoutCategoriaInput[] | Prisma.IndicacaoUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.IndicacaoCreateOrConnectWithoutCategoriaInput | Prisma.IndicacaoCreateOrConnectWithoutCategoriaInput[];
    createMany?: Prisma.IndicacaoCreateManyCategoriaInputEnvelope;
    connect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
};
export type IndicacaoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: Prisma.XOR<Prisma.IndicacaoCreateWithoutCategoriaInput, Prisma.IndicacaoUncheckedCreateWithoutCategoriaInput> | Prisma.IndicacaoCreateWithoutCategoriaInput[] | Prisma.IndicacaoUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.IndicacaoCreateOrConnectWithoutCategoriaInput | Prisma.IndicacaoCreateOrConnectWithoutCategoriaInput[];
    createMany?: Prisma.IndicacaoCreateManyCategoriaInputEnvelope;
    connect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
};
export type IndicacaoUpdateManyWithoutCategoriaNestedInput = {
    create?: Prisma.XOR<Prisma.IndicacaoCreateWithoutCategoriaInput, Prisma.IndicacaoUncheckedCreateWithoutCategoriaInput> | Prisma.IndicacaoCreateWithoutCategoriaInput[] | Prisma.IndicacaoUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.IndicacaoCreateOrConnectWithoutCategoriaInput | Prisma.IndicacaoCreateOrConnectWithoutCategoriaInput[];
    upsert?: Prisma.IndicacaoUpsertWithWhereUniqueWithoutCategoriaInput | Prisma.IndicacaoUpsertWithWhereUniqueWithoutCategoriaInput[];
    createMany?: Prisma.IndicacaoCreateManyCategoriaInputEnvelope;
    set?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    disconnect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    delete?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    connect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    update?: Prisma.IndicacaoUpdateWithWhereUniqueWithoutCategoriaInput | Prisma.IndicacaoUpdateWithWhereUniqueWithoutCategoriaInput[];
    updateMany?: Prisma.IndicacaoUpdateManyWithWhereWithoutCategoriaInput | Prisma.IndicacaoUpdateManyWithWhereWithoutCategoriaInput[];
    deleteMany?: Prisma.IndicacaoScalarWhereInput | Prisma.IndicacaoScalarWhereInput[];
};
export type IndicacaoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: Prisma.XOR<Prisma.IndicacaoCreateWithoutCategoriaInput, Prisma.IndicacaoUncheckedCreateWithoutCategoriaInput> | Prisma.IndicacaoCreateWithoutCategoriaInput[] | Prisma.IndicacaoUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.IndicacaoCreateOrConnectWithoutCategoriaInput | Prisma.IndicacaoCreateOrConnectWithoutCategoriaInput[];
    upsert?: Prisma.IndicacaoUpsertWithWhereUniqueWithoutCategoriaInput | Prisma.IndicacaoUpsertWithWhereUniqueWithoutCategoriaInput[];
    createMany?: Prisma.IndicacaoCreateManyCategoriaInputEnvelope;
    set?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    disconnect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    delete?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    connect?: Prisma.IndicacaoWhereUniqueInput | Prisma.IndicacaoWhereUniqueInput[];
    update?: Prisma.IndicacaoUpdateWithWhereUniqueWithoutCategoriaInput | Prisma.IndicacaoUpdateWithWhereUniqueWithoutCategoriaInput[];
    updateMany?: Prisma.IndicacaoUpdateManyWithWhereWithoutCategoriaInput | Prisma.IndicacaoUpdateManyWithWhereWithoutCategoriaInput[];
    deleteMany?: Prisma.IndicacaoScalarWhereInput | Prisma.IndicacaoScalarWhereInput[];
};
export type EnumStatusIndicacaoFieldUpdateOperationsInput = {
    set?: $Enums.StatusIndicacao;
};
export type IndicacaoCreateWithoutEdicaoInput = {
    id?: string;
    justificativa?: string | null;
    status?: $Enums.StatusIndicacao;
    createdAt?: Date | string;
    categoria: Prisma.CategoriaCreateNestedOneWithoutIndicacoesInput;
    inscricaoStartup: Prisma.InscricaoStartupCreateNestedOneWithoutIndicacoesRecebidasInput;
    indicanteLider?: Prisma.LiderCreateNestedOneWithoutIndicacoesInput;
    indicanteInscricao?: Prisma.InscricaoStartupCreateNestedOneWithoutIndicacoesFeitasInput;
};
export type IndicacaoUncheckedCreateWithoutEdicaoInput = {
    id?: string;
    categoriaId: string;
    inscricaoStartupId: string;
    indicanteLiderId?: string | null;
    indicanteInscricaoId?: string | null;
    justificativa?: string | null;
    status?: $Enums.StatusIndicacao;
    createdAt?: Date | string;
};
export type IndicacaoCreateOrConnectWithoutEdicaoInput = {
    where: Prisma.IndicacaoWhereUniqueInput;
    create: Prisma.XOR<Prisma.IndicacaoCreateWithoutEdicaoInput, Prisma.IndicacaoUncheckedCreateWithoutEdicaoInput>;
};
export type IndicacaoCreateManyEdicaoInputEnvelope = {
    data: Prisma.IndicacaoCreateManyEdicaoInput | Prisma.IndicacaoCreateManyEdicaoInput[];
    skipDuplicates?: boolean;
};
export type IndicacaoUpsertWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.IndicacaoWhereUniqueInput;
    update: Prisma.XOR<Prisma.IndicacaoUpdateWithoutEdicaoInput, Prisma.IndicacaoUncheckedUpdateWithoutEdicaoInput>;
    create: Prisma.XOR<Prisma.IndicacaoCreateWithoutEdicaoInput, Prisma.IndicacaoUncheckedCreateWithoutEdicaoInput>;
};
export type IndicacaoUpdateWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.IndicacaoWhereUniqueInput;
    data: Prisma.XOR<Prisma.IndicacaoUpdateWithoutEdicaoInput, Prisma.IndicacaoUncheckedUpdateWithoutEdicaoInput>;
};
export type IndicacaoUpdateManyWithWhereWithoutEdicaoInput = {
    where: Prisma.IndicacaoScalarWhereInput;
    data: Prisma.XOR<Prisma.IndicacaoUpdateManyMutationInput, Prisma.IndicacaoUncheckedUpdateManyWithoutEdicaoInput>;
};
export type IndicacaoScalarWhereInput = {
    AND?: Prisma.IndicacaoScalarWhereInput | Prisma.IndicacaoScalarWhereInput[];
    OR?: Prisma.IndicacaoScalarWhereInput[];
    NOT?: Prisma.IndicacaoScalarWhereInput | Prisma.IndicacaoScalarWhereInput[];
    id?: Prisma.StringFilter<"Indicacao"> | string;
    edicaoId?: Prisma.StringFilter<"Indicacao"> | string;
    categoriaId?: Prisma.StringFilter<"Indicacao"> | string;
    inscricaoStartupId?: Prisma.StringFilter<"Indicacao"> | string;
    indicanteLiderId?: Prisma.StringNullableFilter<"Indicacao"> | string | null;
    indicanteInscricaoId?: Prisma.StringNullableFilter<"Indicacao"> | string | null;
    justificativa?: Prisma.StringNullableFilter<"Indicacao"> | string | null;
    status?: Prisma.EnumStatusIndicacaoFilter<"Indicacao"> | $Enums.StatusIndicacao;
    createdAt?: Prisma.DateTimeFilter<"Indicacao"> | Date | string;
};
export type IndicacaoCreateWithoutIndicanteLiderInput = {
    id?: string;
    justificativa?: string | null;
    status?: $Enums.StatusIndicacao;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutIndicacoesInput;
    categoria: Prisma.CategoriaCreateNestedOneWithoutIndicacoesInput;
    inscricaoStartup: Prisma.InscricaoStartupCreateNestedOneWithoutIndicacoesRecebidasInput;
    indicanteInscricao?: Prisma.InscricaoStartupCreateNestedOneWithoutIndicacoesFeitasInput;
};
export type IndicacaoUncheckedCreateWithoutIndicanteLiderInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    inscricaoStartupId: string;
    indicanteInscricaoId?: string | null;
    justificativa?: string | null;
    status?: $Enums.StatusIndicacao;
    createdAt?: Date | string;
};
export type IndicacaoCreateOrConnectWithoutIndicanteLiderInput = {
    where: Prisma.IndicacaoWhereUniqueInput;
    create: Prisma.XOR<Prisma.IndicacaoCreateWithoutIndicanteLiderInput, Prisma.IndicacaoUncheckedCreateWithoutIndicanteLiderInput>;
};
export type IndicacaoCreateManyIndicanteLiderInputEnvelope = {
    data: Prisma.IndicacaoCreateManyIndicanteLiderInput | Prisma.IndicacaoCreateManyIndicanteLiderInput[];
    skipDuplicates?: boolean;
};
export type IndicacaoUpsertWithWhereUniqueWithoutIndicanteLiderInput = {
    where: Prisma.IndicacaoWhereUniqueInput;
    update: Prisma.XOR<Prisma.IndicacaoUpdateWithoutIndicanteLiderInput, Prisma.IndicacaoUncheckedUpdateWithoutIndicanteLiderInput>;
    create: Prisma.XOR<Prisma.IndicacaoCreateWithoutIndicanteLiderInput, Prisma.IndicacaoUncheckedCreateWithoutIndicanteLiderInput>;
};
export type IndicacaoUpdateWithWhereUniqueWithoutIndicanteLiderInput = {
    where: Prisma.IndicacaoWhereUniqueInput;
    data: Prisma.XOR<Prisma.IndicacaoUpdateWithoutIndicanteLiderInput, Prisma.IndicacaoUncheckedUpdateWithoutIndicanteLiderInput>;
};
export type IndicacaoUpdateManyWithWhereWithoutIndicanteLiderInput = {
    where: Prisma.IndicacaoScalarWhereInput;
    data: Prisma.XOR<Prisma.IndicacaoUpdateManyMutationInput, Prisma.IndicacaoUncheckedUpdateManyWithoutIndicanteLiderInput>;
};
export type IndicacaoCreateWithoutInscricaoStartupInput = {
    id?: string;
    justificativa?: string | null;
    status?: $Enums.StatusIndicacao;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutIndicacoesInput;
    categoria: Prisma.CategoriaCreateNestedOneWithoutIndicacoesInput;
    indicanteLider?: Prisma.LiderCreateNestedOneWithoutIndicacoesInput;
    indicanteInscricao?: Prisma.InscricaoStartupCreateNestedOneWithoutIndicacoesFeitasInput;
};
export type IndicacaoUncheckedCreateWithoutInscricaoStartupInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    indicanteLiderId?: string | null;
    indicanteInscricaoId?: string | null;
    justificativa?: string | null;
    status?: $Enums.StatusIndicacao;
    createdAt?: Date | string;
};
export type IndicacaoCreateOrConnectWithoutInscricaoStartupInput = {
    where: Prisma.IndicacaoWhereUniqueInput;
    create: Prisma.XOR<Prisma.IndicacaoCreateWithoutInscricaoStartupInput, Prisma.IndicacaoUncheckedCreateWithoutInscricaoStartupInput>;
};
export type IndicacaoCreateManyInscricaoStartupInputEnvelope = {
    data: Prisma.IndicacaoCreateManyInscricaoStartupInput | Prisma.IndicacaoCreateManyInscricaoStartupInput[];
    skipDuplicates?: boolean;
};
export type IndicacaoCreateWithoutIndicanteInscricaoInput = {
    id?: string;
    justificativa?: string | null;
    status?: $Enums.StatusIndicacao;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutIndicacoesInput;
    categoria: Prisma.CategoriaCreateNestedOneWithoutIndicacoesInput;
    inscricaoStartup: Prisma.InscricaoStartupCreateNestedOneWithoutIndicacoesRecebidasInput;
    indicanteLider?: Prisma.LiderCreateNestedOneWithoutIndicacoesInput;
};
export type IndicacaoUncheckedCreateWithoutIndicanteInscricaoInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    inscricaoStartupId: string;
    indicanteLiderId?: string | null;
    justificativa?: string | null;
    status?: $Enums.StatusIndicacao;
    createdAt?: Date | string;
};
export type IndicacaoCreateOrConnectWithoutIndicanteInscricaoInput = {
    where: Prisma.IndicacaoWhereUniqueInput;
    create: Prisma.XOR<Prisma.IndicacaoCreateWithoutIndicanteInscricaoInput, Prisma.IndicacaoUncheckedCreateWithoutIndicanteInscricaoInput>;
};
export type IndicacaoCreateManyIndicanteInscricaoInputEnvelope = {
    data: Prisma.IndicacaoCreateManyIndicanteInscricaoInput | Prisma.IndicacaoCreateManyIndicanteInscricaoInput[];
    skipDuplicates?: boolean;
};
export type IndicacaoUpsertWithWhereUniqueWithoutInscricaoStartupInput = {
    where: Prisma.IndicacaoWhereUniqueInput;
    update: Prisma.XOR<Prisma.IndicacaoUpdateWithoutInscricaoStartupInput, Prisma.IndicacaoUncheckedUpdateWithoutInscricaoStartupInput>;
    create: Prisma.XOR<Prisma.IndicacaoCreateWithoutInscricaoStartupInput, Prisma.IndicacaoUncheckedCreateWithoutInscricaoStartupInput>;
};
export type IndicacaoUpdateWithWhereUniqueWithoutInscricaoStartupInput = {
    where: Prisma.IndicacaoWhereUniqueInput;
    data: Prisma.XOR<Prisma.IndicacaoUpdateWithoutInscricaoStartupInput, Prisma.IndicacaoUncheckedUpdateWithoutInscricaoStartupInput>;
};
export type IndicacaoUpdateManyWithWhereWithoutInscricaoStartupInput = {
    where: Prisma.IndicacaoScalarWhereInput;
    data: Prisma.XOR<Prisma.IndicacaoUpdateManyMutationInput, Prisma.IndicacaoUncheckedUpdateManyWithoutInscricaoStartupInput>;
};
export type IndicacaoUpsertWithWhereUniqueWithoutIndicanteInscricaoInput = {
    where: Prisma.IndicacaoWhereUniqueInput;
    update: Prisma.XOR<Prisma.IndicacaoUpdateWithoutIndicanteInscricaoInput, Prisma.IndicacaoUncheckedUpdateWithoutIndicanteInscricaoInput>;
    create: Prisma.XOR<Prisma.IndicacaoCreateWithoutIndicanteInscricaoInput, Prisma.IndicacaoUncheckedCreateWithoutIndicanteInscricaoInput>;
};
export type IndicacaoUpdateWithWhereUniqueWithoutIndicanteInscricaoInput = {
    where: Prisma.IndicacaoWhereUniqueInput;
    data: Prisma.XOR<Prisma.IndicacaoUpdateWithoutIndicanteInscricaoInput, Prisma.IndicacaoUncheckedUpdateWithoutIndicanteInscricaoInput>;
};
export type IndicacaoUpdateManyWithWhereWithoutIndicanteInscricaoInput = {
    where: Prisma.IndicacaoScalarWhereInput;
    data: Prisma.XOR<Prisma.IndicacaoUpdateManyMutationInput, Prisma.IndicacaoUncheckedUpdateManyWithoutIndicanteInscricaoInput>;
};
export type IndicacaoCreateWithoutCategoriaInput = {
    id?: string;
    justificativa?: string | null;
    status?: $Enums.StatusIndicacao;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutIndicacoesInput;
    inscricaoStartup: Prisma.InscricaoStartupCreateNestedOneWithoutIndicacoesRecebidasInput;
    indicanteLider?: Prisma.LiderCreateNestedOneWithoutIndicacoesInput;
    indicanteInscricao?: Prisma.InscricaoStartupCreateNestedOneWithoutIndicacoesFeitasInput;
};
export type IndicacaoUncheckedCreateWithoutCategoriaInput = {
    id?: string;
    edicaoId: string;
    inscricaoStartupId: string;
    indicanteLiderId?: string | null;
    indicanteInscricaoId?: string | null;
    justificativa?: string | null;
    status?: $Enums.StatusIndicacao;
    createdAt?: Date | string;
};
export type IndicacaoCreateOrConnectWithoutCategoriaInput = {
    where: Prisma.IndicacaoWhereUniqueInput;
    create: Prisma.XOR<Prisma.IndicacaoCreateWithoutCategoriaInput, Prisma.IndicacaoUncheckedCreateWithoutCategoriaInput>;
};
export type IndicacaoCreateManyCategoriaInputEnvelope = {
    data: Prisma.IndicacaoCreateManyCategoriaInput | Prisma.IndicacaoCreateManyCategoriaInput[];
    skipDuplicates?: boolean;
};
export type IndicacaoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: Prisma.IndicacaoWhereUniqueInput;
    update: Prisma.XOR<Prisma.IndicacaoUpdateWithoutCategoriaInput, Prisma.IndicacaoUncheckedUpdateWithoutCategoriaInput>;
    create: Prisma.XOR<Prisma.IndicacaoCreateWithoutCategoriaInput, Prisma.IndicacaoUncheckedCreateWithoutCategoriaInput>;
};
export type IndicacaoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: Prisma.IndicacaoWhereUniqueInput;
    data: Prisma.XOR<Prisma.IndicacaoUpdateWithoutCategoriaInput, Prisma.IndicacaoUncheckedUpdateWithoutCategoriaInput>;
};
export type IndicacaoUpdateManyWithWhereWithoutCategoriaInput = {
    where: Prisma.IndicacaoScalarWhereInput;
    data: Prisma.XOR<Prisma.IndicacaoUpdateManyMutationInput, Prisma.IndicacaoUncheckedUpdateManyWithoutCategoriaInput>;
};
export type IndicacaoCreateManyEdicaoInput = {
    id?: string;
    categoriaId: string;
    inscricaoStartupId: string;
    indicanteLiderId?: string | null;
    indicanteInscricaoId?: string | null;
    justificativa?: string | null;
    status?: $Enums.StatusIndicacao;
    createdAt?: Date | string;
};
export type IndicacaoUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    justificativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusIndicacaoFieldUpdateOperationsInput | $Enums.StatusIndicacao;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutIndicacoesNestedInput;
    inscricaoStartup?: Prisma.InscricaoStartupUpdateOneRequiredWithoutIndicacoesRecebidasNestedInput;
    indicanteLider?: Prisma.LiderUpdateOneWithoutIndicacoesNestedInput;
    indicanteInscricao?: Prisma.InscricaoStartupUpdateOneWithoutIndicacoesFeitasNestedInput;
};
export type IndicacaoUncheckedUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    indicanteLiderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    indicanteInscricaoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    justificativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusIndicacaoFieldUpdateOperationsInput | $Enums.StatusIndicacao;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IndicacaoUncheckedUpdateManyWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    indicanteLiderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    indicanteInscricaoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    justificativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusIndicacaoFieldUpdateOperationsInput | $Enums.StatusIndicacao;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IndicacaoCreateManyIndicanteLiderInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    inscricaoStartupId: string;
    indicanteInscricaoId?: string | null;
    justificativa?: string | null;
    status?: $Enums.StatusIndicacao;
    createdAt?: Date | string;
};
export type IndicacaoUpdateWithoutIndicanteLiderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    justificativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusIndicacaoFieldUpdateOperationsInput | $Enums.StatusIndicacao;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutIndicacoesNestedInput;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutIndicacoesNestedInput;
    inscricaoStartup?: Prisma.InscricaoStartupUpdateOneRequiredWithoutIndicacoesRecebidasNestedInput;
    indicanteInscricao?: Prisma.InscricaoStartupUpdateOneWithoutIndicacoesFeitasNestedInput;
};
export type IndicacaoUncheckedUpdateWithoutIndicanteLiderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    indicanteInscricaoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    justificativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusIndicacaoFieldUpdateOperationsInput | $Enums.StatusIndicacao;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IndicacaoUncheckedUpdateManyWithoutIndicanteLiderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    indicanteInscricaoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    justificativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusIndicacaoFieldUpdateOperationsInput | $Enums.StatusIndicacao;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IndicacaoCreateManyInscricaoStartupInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    indicanteLiderId?: string | null;
    indicanteInscricaoId?: string | null;
    justificativa?: string | null;
    status?: $Enums.StatusIndicacao;
    createdAt?: Date | string;
};
export type IndicacaoCreateManyIndicanteInscricaoInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    inscricaoStartupId: string;
    indicanteLiderId?: string | null;
    justificativa?: string | null;
    status?: $Enums.StatusIndicacao;
    createdAt?: Date | string;
};
export type IndicacaoUpdateWithoutInscricaoStartupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    justificativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusIndicacaoFieldUpdateOperationsInput | $Enums.StatusIndicacao;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutIndicacoesNestedInput;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutIndicacoesNestedInput;
    indicanteLider?: Prisma.LiderUpdateOneWithoutIndicacoesNestedInput;
    indicanteInscricao?: Prisma.InscricaoStartupUpdateOneWithoutIndicacoesFeitasNestedInput;
};
export type IndicacaoUncheckedUpdateWithoutInscricaoStartupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    indicanteLiderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    indicanteInscricaoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    justificativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusIndicacaoFieldUpdateOperationsInput | $Enums.StatusIndicacao;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IndicacaoUncheckedUpdateManyWithoutInscricaoStartupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    indicanteLiderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    indicanteInscricaoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    justificativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusIndicacaoFieldUpdateOperationsInput | $Enums.StatusIndicacao;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IndicacaoUpdateWithoutIndicanteInscricaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    justificativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusIndicacaoFieldUpdateOperationsInput | $Enums.StatusIndicacao;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutIndicacoesNestedInput;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutIndicacoesNestedInput;
    inscricaoStartup?: Prisma.InscricaoStartupUpdateOneRequiredWithoutIndicacoesRecebidasNestedInput;
    indicanteLider?: Prisma.LiderUpdateOneWithoutIndicacoesNestedInput;
};
export type IndicacaoUncheckedUpdateWithoutIndicanteInscricaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    indicanteLiderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    justificativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusIndicacaoFieldUpdateOperationsInput | $Enums.StatusIndicacao;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IndicacaoUncheckedUpdateManyWithoutIndicanteInscricaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    indicanteLiderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    justificativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusIndicacaoFieldUpdateOperationsInput | $Enums.StatusIndicacao;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IndicacaoCreateManyCategoriaInput = {
    id?: string;
    edicaoId: string;
    inscricaoStartupId: string;
    indicanteLiderId?: string | null;
    indicanteInscricaoId?: string | null;
    justificativa?: string | null;
    status?: $Enums.StatusIndicacao;
    createdAt?: Date | string;
};
export type IndicacaoUpdateWithoutCategoriaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    justificativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusIndicacaoFieldUpdateOperationsInput | $Enums.StatusIndicacao;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutIndicacoesNestedInput;
    inscricaoStartup?: Prisma.InscricaoStartupUpdateOneRequiredWithoutIndicacoesRecebidasNestedInput;
    indicanteLider?: Prisma.LiderUpdateOneWithoutIndicacoesNestedInput;
    indicanteInscricao?: Prisma.InscricaoStartupUpdateOneWithoutIndicacoesFeitasNestedInput;
};
export type IndicacaoUncheckedUpdateWithoutCategoriaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    indicanteLiderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    indicanteInscricaoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    justificativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusIndicacaoFieldUpdateOperationsInput | $Enums.StatusIndicacao;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IndicacaoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    indicanteLiderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    indicanteInscricaoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    justificativa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumStatusIndicacaoFieldUpdateOperationsInput | $Enums.StatusIndicacao;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type IndicacaoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    categoriaId?: boolean;
    inscricaoStartupId?: boolean;
    indicanteLiderId?: boolean;
    indicanteInscricaoId?: boolean;
    justificativa?: boolean;
    status?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    inscricaoStartup?: boolean | Prisma.InscricaoStartupDefaultArgs<ExtArgs>;
    indicanteLider?: boolean | Prisma.Indicacao$indicanteLiderArgs<ExtArgs>;
    indicanteInscricao?: boolean | Prisma.Indicacao$indicanteInscricaoArgs<ExtArgs>;
}, ExtArgs["result"]["indicacao"]>;
export type IndicacaoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    categoriaId?: boolean;
    inscricaoStartupId?: boolean;
    indicanteLiderId?: boolean;
    indicanteInscricaoId?: boolean;
    justificativa?: boolean;
    status?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    inscricaoStartup?: boolean | Prisma.InscricaoStartupDefaultArgs<ExtArgs>;
    indicanteLider?: boolean | Prisma.Indicacao$indicanteLiderArgs<ExtArgs>;
    indicanteInscricao?: boolean | Prisma.Indicacao$indicanteInscricaoArgs<ExtArgs>;
}, ExtArgs["result"]["indicacao"]>;
export type IndicacaoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    categoriaId?: boolean;
    inscricaoStartupId?: boolean;
    indicanteLiderId?: boolean;
    indicanteInscricaoId?: boolean;
    justificativa?: boolean;
    status?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    inscricaoStartup?: boolean | Prisma.InscricaoStartupDefaultArgs<ExtArgs>;
    indicanteLider?: boolean | Prisma.Indicacao$indicanteLiderArgs<ExtArgs>;
    indicanteInscricao?: boolean | Prisma.Indicacao$indicanteInscricaoArgs<ExtArgs>;
}, ExtArgs["result"]["indicacao"]>;
export type IndicacaoSelectScalar = {
    id?: boolean;
    edicaoId?: boolean;
    categoriaId?: boolean;
    inscricaoStartupId?: boolean;
    indicanteLiderId?: boolean;
    indicanteInscricaoId?: boolean;
    justificativa?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type IndicacaoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "edicaoId" | "categoriaId" | "inscricaoStartupId" | "indicanteLiderId" | "indicanteInscricaoId" | "justificativa" | "status" | "createdAt", ExtArgs["result"]["indicacao"]>;
export type IndicacaoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    inscricaoStartup?: boolean | Prisma.InscricaoStartupDefaultArgs<ExtArgs>;
    indicanteLider?: boolean | Prisma.Indicacao$indicanteLiderArgs<ExtArgs>;
    indicanteInscricao?: boolean | Prisma.Indicacao$indicanteInscricaoArgs<ExtArgs>;
};
export type IndicacaoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    inscricaoStartup?: boolean | Prisma.InscricaoStartupDefaultArgs<ExtArgs>;
    indicanteLider?: boolean | Prisma.Indicacao$indicanteLiderArgs<ExtArgs>;
    indicanteInscricao?: boolean | Prisma.Indicacao$indicanteInscricaoArgs<ExtArgs>;
};
export type IndicacaoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    inscricaoStartup?: boolean | Prisma.InscricaoStartupDefaultArgs<ExtArgs>;
    indicanteLider?: boolean | Prisma.Indicacao$indicanteLiderArgs<ExtArgs>;
    indicanteInscricao?: boolean | Prisma.Indicacao$indicanteInscricaoArgs<ExtArgs>;
};
export type $IndicacaoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Indicacao";
    objects: {
        edicao: Prisma.$EdicaoPayload<ExtArgs>;
        categoria: Prisma.$CategoriaPayload<ExtArgs>;
        inscricaoStartup: Prisma.$InscricaoStartupPayload<ExtArgs>;
        indicanteLider: Prisma.$LiderPayload<ExtArgs> | null;
        indicanteInscricao: Prisma.$InscricaoStartupPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        edicaoId: string;
        categoriaId: string;
        inscricaoStartupId: string;
        indicanteLiderId: string | null;
        indicanteInscricaoId: string | null;
        justificativa: string | null;
        status: $Enums.StatusIndicacao;
        createdAt: Date;
    }, ExtArgs["result"]["indicacao"]>;
    composites: {};
};
export type IndicacaoGetPayload<S extends boolean | null | undefined | IndicacaoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$IndicacaoPayload, S>;
export type IndicacaoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<IndicacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IndicacaoCountAggregateInputType | true;
};
export interface IndicacaoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Indicacao'];
        meta: {
            name: 'Indicacao';
        };
    };
    findUnique<T extends IndicacaoFindUniqueArgs>(args: Prisma.SelectSubset<T, IndicacaoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__IndicacaoClient<runtime.Types.Result.GetResult<Prisma.$IndicacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends IndicacaoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, IndicacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__IndicacaoClient<runtime.Types.Result.GetResult<Prisma.$IndicacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends IndicacaoFindFirstArgs>(args?: Prisma.SelectSubset<T, IndicacaoFindFirstArgs<ExtArgs>>): Prisma.Prisma__IndicacaoClient<runtime.Types.Result.GetResult<Prisma.$IndicacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends IndicacaoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, IndicacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__IndicacaoClient<runtime.Types.Result.GetResult<Prisma.$IndicacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends IndicacaoFindManyArgs>(args?: Prisma.SelectSubset<T, IndicacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IndicacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends IndicacaoCreateArgs>(args: Prisma.SelectSubset<T, IndicacaoCreateArgs<ExtArgs>>): Prisma.Prisma__IndicacaoClient<runtime.Types.Result.GetResult<Prisma.$IndicacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends IndicacaoCreateManyArgs>(args?: Prisma.SelectSubset<T, IndicacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends IndicacaoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, IndicacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IndicacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends IndicacaoDeleteArgs>(args: Prisma.SelectSubset<T, IndicacaoDeleteArgs<ExtArgs>>): Prisma.Prisma__IndicacaoClient<runtime.Types.Result.GetResult<Prisma.$IndicacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends IndicacaoUpdateArgs>(args: Prisma.SelectSubset<T, IndicacaoUpdateArgs<ExtArgs>>): Prisma.Prisma__IndicacaoClient<runtime.Types.Result.GetResult<Prisma.$IndicacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends IndicacaoDeleteManyArgs>(args?: Prisma.SelectSubset<T, IndicacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends IndicacaoUpdateManyArgs>(args: Prisma.SelectSubset<T, IndicacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends IndicacaoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, IndicacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$IndicacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends IndicacaoUpsertArgs>(args: Prisma.SelectSubset<T, IndicacaoUpsertArgs<ExtArgs>>): Prisma.Prisma__IndicacaoClient<runtime.Types.Result.GetResult<Prisma.$IndicacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends IndicacaoCountArgs>(args?: Prisma.Subset<T, IndicacaoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IndicacaoCountAggregateOutputType> : number>;
    aggregate<T extends IndicacaoAggregateArgs>(args: Prisma.Subset<T, IndicacaoAggregateArgs>): Prisma.PrismaPromise<GetIndicacaoAggregateType<T>>;
    groupBy<T extends IndicacaoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: IndicacaoGroupByArgs['orderBy'];
    } : {
        orderBy?: IndicacaoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, IndicacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIndicacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: IndicacaoFieldRefs;
}
export interface Prisma__IndicacaoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    edicao<T extends Prisma.EdicaoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EdicaoDefaultArgs<ExtArgs>>): Prisma.Prisma__EdicaoClient<runtime.Types.Result.GetResult<Prisma.$EdicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    categoria<T extends Prisma.CategoriaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoriaDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoriaClient<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    inscricaoStartup<T extends Prisma.InscricaoStartupDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InscricaoStartupDefaultArgs<ExtArgs>>): Prisma.Prisma__InscricaoStartupClient<runtime.Types.Result.GetResult<Prisma.$InscricaoStartupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    indicanteLider<T extends Prisma.Indicacao$indicanteLiderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Indicacao$indicanteLiderArgs<ExtArgs>>): Prisma.Prisma__LiderClient<runtime.Types.Result.GetResult<Prisma.$LiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    indicanteInscricao<T extends Prisma.Indicacao$indicanteInscricaoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Indicacao$indicanteInscricaoArgs<ExtArgs>>): Prisma.Prisma__InscricaoStartupClient<runtime.Types.Result.GetResult<Prisma.$InscricaoStartupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface IndicacaoFieldRefs {
    readonly id: Prisma.FieldRef<"Indicacao", 'String'>;
    readonly edicaoId: Prisma.FieldRef<"Indicacao", 'String'>;
    readonly categoriaId: Prisma.FieldRef<"Indicacao", 'String'>;
    readonly inscricaoStartupId: Prisma.FieldRef<"Indicacao", 'String'>;
    readonly indicanteLiderId: Prisma.FieldRef<"Indicacao", 'String'>;
    readonly indicanteInscricaoId: Prisma.FieldRef<"Indicacao", 'String'>;
    readonly justificativa: Prisma.FieldRef<"Indicacao", 'String'>;
    readonly status: Prisma.FieldRef<"Indicacao", 'StatusIndicacao'>;
    readonly createdAt: Prisma.FieldRef<"Indicacao", 'DateTime'>;
}
export type IndicacaoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IndicacaoSelect<ExtArgs> | null;
    omit?: Prisma.IndicacaoOmit<ExtArgs> | null;
    include?: Prisma.IndicacaoInclude<ExtArgs> | null;
    where: Prisma.IndicacaoWhereUniqueInput;
};
export type IndicacaoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IndicacaoSelect<ExtArgs> | null;
    omit?: Prisma.IndicacaoOmit<ExtArgs> | null;
    include?: Prisma.IndicacaoInclude<ExtArgs> | null;
    where: Prisma.IndicacaoWhereUniqueInput;
};
export type IndicacaoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type IndicacaoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type IndicacaoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type IndicacaoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IndicacaoSelect<ExtArgs> | null;
    omit?: Prisma.IndicacaoOmit<ExtArgs> | null;
    include?: Prisma.IndicacaoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IndicacaoCreateInput, Prisma.IndicacaoUncheckedCreateInput>;
};
export type IndicacaoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.IndicacaoCreateManyInput | Prisma.IndicacaoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type IndicacaoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IndicacaoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IndicacaoOmit<ExtArgs> | null;
    data: Prisma.IndicacaoCreateManyInput | Prisma.IndicacaoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.IndicacaoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type IndicacaoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IndicacaoSelect<ExtArgs> | null;
    omit?: Prisma.IndicacaoOmit<ExtArgs> | null;
    include?: Prisma.IndicacaoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IndicacaoUpdateInput, Prisma.IndicacaoUncheckedUpdateInput>;
    where: Prisma.IndicacaoWhereUniqueInput;
};
export type IndicacaoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.IndicacaoUpdateManyMutationInput, Prisma.IndicacaoUncheckedUpdateManyInput>;
    where?: Prisma.IndicacaoWhereInput;
    limit?: number;
};
export type IndicacaoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IndicacaoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.IndicacaoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.IndicacaoUpdateManyMutationInput, Prisma.IndicacaoUncheckedUpdateManyInput>;
    where?: Prisma.IndicacaoWhereInput;
    limit?: number;
    include?: Prisma.IndicacaoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type IndicacaoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IndicacaoSelect<ExtArgs> | null;
    omit?: Prisma.IndicacaoOmit<ExtArgs> | null;
    include?: Prisma.IndicacaoInclude<ExtArgs> | null;
    where: Prisma.IndicacaoWhereUniqueInput;
    create: Prisma.XOR<Prisma.IndicacaoCreateInput, Prisma.IndicacaoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.IndicacaoUpdateInput, Prisma.IndicacaoUncheckedUpdateInput>;
};
export type IndicacaoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IndicacaoSelect<ExtArgs> | null;
    omit?: Prisma.IndicacaoOmit<ExtArgs> | null;
    include?: Prisma.IndicacaoInclude<ExtArgs> | null;
    where: Prisma.IndicacaoWhereUniqueInput;
};
export type IndicacaoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.IndicacaoWhereInput;
    limit?: number;
};
export type Indicacao$indicanteLiderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LiderSelect<ExtArgs> | null;
    omit?: Prisma.LiderOmit<ExtArgs> | null;
    include?: Prisma.LiderInclude<ExtArgs> | null;
    where?: Prisma.LiderWhereInput;
};
export type Indicacao$indicanteInscricaoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InscricaoStartupSelect<ExtArgs> | null;
    omit?: Prisma.InscricaoStartupOmit<ExtArgs> | null;
    include?: Prisma.InscricaoStartupInclude<ExtArgs> | null;
    where?: Prisma.InscricaoStartupWhereInput;
};
export type IndicacaoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.IndicacaoSelect<ExtArgs> | null;
    omit?: Prisma.IndicacaoOmit<ExtArgs> | null;
    include?: Prisma.IndicacaoInclude<ExtArgs> | null;
};
