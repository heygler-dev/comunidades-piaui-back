import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type RegulamentoVersaoModel = runtime.Types.Result.DefaultSelection<Prisma.$RegulamentoVersaoPayload>;
export type AggregateRegulamentoVersao = {
    _count: RegulamentoVersaoCountAggregateOutputType | null;
    _avg: RegulamentoVersaoAvgAggregateOutputType | null;
    _sum: RegulamentoVersaoSumAggregateOutputType | null;
    _min: RegulamentoVersaoMinAggregateOutputType | null;
    _max: RegulamentoVersaoMaxAggregateOutputType | null;
};
export type RegulamentoVersaoAvgAggregateOutputType = {
    versao: number | null;
};
export type RegulamentoVersaoSumAggregateOutputType = {
    versao: number | null;
};
export type RegulamentoVersaoMinAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    versao: number | null;
    criteriosMd: string | null;
    publicadaEm: Date | null;
    createdAt: Date | null;
};
export type RegulamentoVersaoMaxAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    versao: number | null;
    criteriosMd: string | null;
    publicadaEm: Date | null;
    createdAt: Date | null;
};
export type RegulamentoVersaoCountAggregateOutputType = {
    id: number;
    edicaoId: number;
    versao: number;
    criteriosMd: number;
    snapshot: number;
    publicadaEm: number;
    createdAt: number;
    _all: number;
};
export type RegulamentoVersaoAvgAggregateInputType = {
    versao?: true;
};
export type RegulamentoVersaoSumAggregateInputType = {
    versao?: true;
};
export type RegulamentoVersaoMinAggregateInputType = {
    id?: true;
    edicaoId?: true;
    versao?: true;
    criteriosMd?: true;
    publicadaEm?: true;
    createdAt?: true;
};
export type RegulamentoVersaoMaxAggregateInputType = {
    id?: true;
    edicaoId?: true;
    versao?: true;
    criteriosMd?: true;
    publicadaEm?: true;
    createdAt?: true;
};
export type RegulamentoVersaoCountAggregateInputType = {
    id?: true;
    edicaoId?: true;
    versao?: true;
    criteriosMd?: true;
    snapshot?: true;
    publicadaEm?: true;
    createdAt?: true;
    _all?: true;
};
export type RegulamentoVersaoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegulamentoVersaoWhereInput;
    orderBy?: Prisma.RegulamentoVersaoOrderByWithRelationInput | Prisma.RegulamentoVersaoOrderByWithRelationInput[];
    cursor?: Prisma.RegulamentoVersaoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RegulamentoVersaoCountAggregateInputType;
    _avg?: RegulamentoVersaoAvgAggregateInputType;
    _sum?: RegulamentoVersaoSumAggregateInputType;
    _min?: RegulamentoVersaoMinAggregateInputType;
    _max?: RegulamentoVersaoMaxAggregateInputType;
};
export type GetRegulamentoVersaoAggregateType<T extends RegulamentoVersaoAggregateArgs> = {
    [P in keyof T & keyof AggregateRegulamentoVersao]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRegulamentoVersao[P]> : Prisma.GetScalarType<T[P], AggregateRegulamentoVersao[P]>;
};
export type RegulamentoVersaoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegulamentoVersaoWhereInput;
    orderBy?: Prisma.RegulamentoVersaoOrderByWithAggregationInput | Prisma.RegulamentoVersaoOrderByWithAggregationInput[];
    by: Prisma.RegulamentoVersaoScalarFieldEnum[] | Prisma.RegulamentoVersaoScalarFieldEnum;
    having?: Prisma.RegulamentoVersaoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RegulamentoVersaoCountAggregateInputType | true;
    _avg?: RegulamentoVersaoAvgAggregateInputType;
    _sum?: RegulamentoVersaoSumAggregateInputType;
    _min?: RegulamentoVersaoMinAggregateInputType;
    _max?: RegulamentoVersaoMaxAggregateInputType;
};
export type RegulamentoVersaoGroupByOutputType = {
    id: string;
    edicaoId: string;
    versao: number;
    criteriosMd: string;
    snapshot: runtime.JsonValue;
    publicadaEm: Date;
    createdAt: Date;
    _count: RegulamentoVersaoCountAggregateOutputType | null;
    _avg: RegulamentoVersaoAvgAggregateOutputType | null;
    _sum: RegulamentoVersaoSumAggregateOutputType | null;
    _min: RegulamentoVersaoMinAggregateOutputType | null;
    _max: RegulamentoVersaoMaxAggregateOutputType | null;
};
export type GetRegulamentoVersaoGroupByPayload<T extends RegulamentoVersaoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RegulamentoVersaoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RegulamentoVersaoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RegulamentoVersaoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RegulamentoVersaoGroupByOutputType[P]>;
}>>;
export type RegulamentoVersaoWhereInput = {
    AND?: Prisma.RegulamentoVersaoWhereInput | Prisma.RegulamentoVersaoWhereInput[];
    OR?: Prisma.RegulamentoVersaoWhereInput[];
    NOT?: Prisma.RegulamentoVersaoWhereInput | Prisma.RegulamentoVersaoWhereInput[];
    id?: Prisma.StringFilter<"RegulamentoVersao"> | string;
    edicaoId?: Prisma.StringFilter<"RegulamentoVersao"> | string;
    versao?: Prisma.IntFilter<"RegulamentoVersao"> | number;
    criteriosMd?: Prisma.StringFilter<"RegulamentoVersao"> | string;
    snapshot?: Prisma.JsonFilter<"RegulamentoVersao">;
    publicadaEm?: Prisma.DateTimeFilter<"RegulamentoVersao"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"RegulamentoVersao"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
};
export type RegulamentoVersaoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    versao?: Prisma.SortOrder;
    criteriosMd?: Prisma.SortOrder;
    snapshot?: Prisma.SortOrder;
    publicadaEm?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    edicao?: Prisma.EdicaoOrderByWithRelationInput;
};
export type RegulamentoVersaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    edicaoId_versao?: Prisma.RegulamentoVersaoEdicaoIdVersaoCompoundUniqueInput;
    AND?: Prisma.RegulamentoVersaoWhereInput | Prisma.RegulamentoVersaoWhereInput[];
    OR?: Prisma.RegulamentoVersaoWhereInput[];
    NOT?: Prisma.RegulamentoVersaoWhereInput | Prisma.RegulamentoVersaoWhereInput[];
    edicaoId?: Prisma.StringFilter<"RegulamentoVersao"> | string;
    versao?: Prisma.IntFilter<"RegulamentoVersao"> | number;
    criteriosMd?: Prisma.StringFilter<"RegulamentoVersao"> | string;
    snapshot?: Prisma.JsonFilter<"RegulamentoVersao">;
    publicadaEm?: Prisma.DateTimeFilter<"RegulamentoVersao"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"RegulamentoVersao"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
}, "id" | "edicaoId_versao">;
export type RegulamentoVersaoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    versao?: Prisma.SortOrder;
    criteriosMd?: Prisma.SortOrder;
    snapshot?: Prisma.SortOrder;
    publicadaEm?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RegulamentoVersaoCountOrderByAggregateInput;
    _avg?: Prisma.RegulamentoVersaoAvgOrderByAggregateInput;
    _max?: Prisma.RegulamentoVersaoMaxOrderByAggregateInput;
    _min?: Prisma.RegulamentoVersaoMinOrderByAggregateInput;
    _sum?: Prisma.RegulamentoVersaoSumOrderByAggregateInput;
};
export type RegulamentoVersaoScalarWhereWithAggregatesInput = {
    AND?: Prisma.RegulamentoVersaoScalarWhereWithAggregatesInput | Prisma.RegulamentoVersaoScalarWhereWithAggregatesInput[];
    OR?: Prisma.RegulamentoVersaoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RegulamentoVersaoScalarWhereWithAggregatesInput | Prisma.RegulamentoVersaoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RegulamentoVersao"> | string;
    edicaoId?: Prisma.StringWithAggregatesFilter<"RegulamentoVersao"> | string;
    versao?: Prisma.IntWithAggregatesFilter<"RegulamentoVersao"> | number;
    criteriosMd?: Prisma.StringWithAggregatesFilter<"RegulamentoVersao"> | string;
    snapshot?: Prisma.JsonWithAggregatesFilter<"RegulamentoVersao">;
    publicadaEm?: Prisma.DateTimeWithAggregatesFilter<"RegulamentoVersao"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RegulamentoVersao"> | Date | string;
};
export type RegulamentoVersaoCreateInput = {
    id?: string;
    versao: number;
    criteriosMd: string;
    snapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publicadaEm?: Date | string;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutRegulamentoVersoesInput;
};
export type RegulamentoVersaoUncheckedCreateInput = {
    id?: string;
    edicaoId: string;
    versao: number;
    criteriosMd: string;
    snapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publicadaEm?: Date | string;
    createdAt?: Date | string;
};
export type RegulamentoVersaoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versao?: Prisma.IntFieldUpdateOperationsInput | number;
    criteriosMd?: Prisma.StringFieldUpdateOperationsInput | string;
    snapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publicadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutRegulamentoVersoesNestedInput;
};
export type RegulamentoVersaoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    versao?: Prisma.IntFieldUpdateOperationsInput | number;
    criteriosMd?: Prisma.StringFieldUpdateOperationsInput | string;
    snapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publicadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegulamentoVersaoCreateManyInput = {
    id?: string;
    edicaoId: string;
    versao: number;
    criteriosMd: string;
    snapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publicadaEm?: Date | string;
    createdAt?: Date | string;
};
export type RegulamentoVersaoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versao?: Prisma.IntFieldUpdateOperationsInput | number;
    criteriosMd?: Prisma.StringFieldUpdateOperationsInput | string;
    snapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publicadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegulamentoVersaoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    versao?: Prisma.IntFieldUpdateOperationsInput | number;
    criteriosMd?: Prisma.StringFieldUpdateOperationsInput | string;
    snapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publicadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegulamentoVersaoListRelationFilter = {
    every?: Prisma.RegulamentoVersaoWhereInput;
    some?: Prisma.RegulamentoVersaoWhereInput;
    none?: Prisma.RegulamentoVersaoWhereInput;
};
export type RegulamentoVersaoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RegulamentoVersaoEdicaoIdVersaoCompoundUniqueInput = {
    edicaoId: string;
    versao: number;
};
export type RegulamentoVersaoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    versao?: Prisma.SortOrder;
    criteriosMd?: Prisma.SortOrder;
    snapshot?: Prisma.SortOrder;
    publicadaEm?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RegulamentoVersaoAvgOrderByAggregateInput = {
    versao?: Prisma.SortOrder;
};
export type RegulamentoVersaoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    versao?: Prisma.SortOrder;
    criteriosMd?: Prisma.SortOrder;
    publicadaEm?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RegulamentoVersaoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    versao?: Prisma.SortOrder;
    criteriosMd?: Prisma.SortOrder;
    publicadaEm?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RegulamentoVersaoSumOrderByAggregateInput = {
    versao?: Prisma.SortOrder;
};
export type RegulamentoVersaoCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.RegulamentoVersaoCreateWithoutEdicaoInput, Prisma.RegulamentoVersaoUncheckedCreateWithoutEdicaoInput> | Prisma.RegulamentoVersaoCreateWithoutEdicaoInput[] | Prisma.RegulamentoVersaoUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.RegulamentoVersaoCreateOrConnectWithoutEdicaoInput | Prisma.RegulamentoVersaoCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.RegulamentoVersaoCreateManyEdicaoInputEnvelope;
    connect?: Prisma.RegulamentoVersaoWhereUniqueInput | Prisma.RegulamentoVersaoWhereUniqueInput[];
};
export type RegulamentoVersaoUncheckedCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.RegulamentoVersaoCreateWithoutEdicaoInput, Prisma.RegulamentoVersaoUncheckedCreateWithoutEdicaoInput> | Prisma.RegulamentoVersaoCreateWithoutEdicaoInput[] | Prisma.RegulamentoVersaoUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.RegulamentoVersaoCreateOrConnectWithoutEdicaoInput | Prisma.RegulamentoVersaoCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.RegulamentoVersaoCreateManyEdicaoInputEnvelope;
    connect?: Prisma.RegulamentoVersaoWhereUniqueInput | Prisma.RegulamentoVersaoWhereUniqueInput[];
};
export type RegulamentoVersaoUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.RegulamentoVersaoCreateWithoutEdicaoInput, Prisma.RegulamentoVersaoUncheckedCreateWithoutEdicaoInput> | Prisma.RegulamentoVersaoCreateWithoutEdicaoInput[] | Prisma.RegulamentoVersaoUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.RegulamentoVersaoCreateOrConnectWithoutEdicaoInput | Prisma.RegulamentoVersaoCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.RegulamentoVersaoUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.RegulamentoVersaoUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.RegulamentoVersaoCreateManyEdicaoInputEnvelope;
    set?: Prisma.RegulamentoVersaoWhereUniqueInput | Prisma.RegulamentoVersaoWhereUniqueInput[];
    disconnect?: Prisma.RegulamentoVersaoWhereUniqueInput | Prisma.RegulamentoVersaoWhereUniqueInput[];
    delete?: Prisma.RegulamentoVersaoWhereUniqueInput | Prisma.RegulamentoVersaoWhereUniqueInput[];
    connect?: Prisma.RegulamentoVersaoWhereUniqueInput | Prisma.RegulamentoVersaoWhereUniqueInput[];
    update?: Prisma.RegulamentoVersaoUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.RegulamentoVersaoUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.RegulamentoVersaoUpdateManyWithWhereWithoutEdicaoInput | Prisma.RegulamentoVersaoUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.RegulamentoVersaoScalarWhereInput | Prisma.RegulamentoVersaoScalarWhereInput[];
};
export type RegulamentoVersaoUncheckedUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.RegulamentoVersaoCreateWithoutEdicaoInput, Prisma.RegulamentoVersaoUncheckedCreateWithoutEdicaoInput> | Prisma.RegulamentoVersaoCreateWithoutEdicaoInput[] | Prisma.RegulamentoVersaoUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.RegulamentoVersaoCreateOrConnectWithoutEdicaoInput | Prisma.RegulamentoVersaoCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.RegulamentoVersaoUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.RegulamentoVersaoUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.RegulamentoVersaoCreateManyEdicaoInputEnvelope;
    set?: Prisma.RegulamentoVersaoWhereUniqueInput | Prisma.RegulamentoVersaoWhereUniqueInput[];
    disconnect?: Prisma.RegulamentoVersaoWhereUniqueInput | Prisma.RegulamentoVersaoWhereUniqueInput[];
    delete?: Prisma.RegulamentoVersaoWhereUniqueInput | Prisma.RegulamentoVersaoWhereUniqueInput[];
    connect?: Prisma.RegulamentoVersaoWhereUniqueInput | Prisma.RegulamentoVersaoWhereUniqueInput[];
    update?: Prisma.RegulamentoVersaoUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.RegulamentoVersaoUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.RegulamentoVersaoUpdateManyWithWhereWithoutEdicaoInput | Prisma.RegulamentoVersaoUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.RegulamentoVersaoScalarWhereInput | Prisma.RegulamentoVersaoScalarWhereInput[];
};
export type RegulamentoVersaoCreateWithoutEdicaoInput = {
    id?: string;
    versao: number;
    criteriosMd: string;
    snapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publicadaEm?: Date | string;
    createdAt?: Date | string;
};
export type RegulamentoVersaoUncheckedCreateWithoutEdicaoInput = {
    id?: string;
    versao: number;
    criteriosMd: string;
    snapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publicadaEm?: Date | string;
    createdAt?: Date | string;
};
export type RegulamentoVersaoCreateOrConnectWithoutEdicaoInput = {
    where: Prisma.RegulamentoVersaoWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegulamentoVersaoCreateWithoutEdicaoInput, Prisma.RegulamentoVersaoUncheckedCreateWithoutEdicaoInput>;
};
export type RegulamentoVersaoCreateManyEdicaoInputEnvelope = {
    data: Prisma.RegulamentoVersaoCreateManyEdicaoInput | Prisma.RegulamentoVersaoCreateManyEdicaoInput[];
    skipDuplicates?: boolean;
};
export type RegulamentoVersaoUpsertWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.RegulamentoVersaoWhereUniqueInput;
    update: Prisma.XOR<Prisma.RegulamentoVersaoUpdateWithoutEdicaoInput, Prisma.RegulamentoVersaoUncheckedUpdateWithoutEdicaoInput>;
    create: Prisma.XOR<Prisma.RegulamentoVersaoCreateWithoutEdicaoInput, Prisma.RegulamentoVersaoUncheckedCreateWithoutEdicaoInput>;
};
export type RegulamentoVersaoUpdateWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.RegulamentoVersaoWhereUniqueInput;
    data: Prisma.XOR<Prisma.RegulamentoVersaoUpdateWithoutEdicaoInput, Prisma.RegulamentoVersaoUncheckedUpdateWithoutEdicaoInput>;
};
export type RegulamentoVersaoUpdateManyWithWhereWithoutEdicaoInput = {
    where: Prisma.RegulamentoVersaoScalarWhereInput;
    data: Prisma.XOR<Prisma.RegulamentoVersaoUpdateManyMutationInput, Prisma.RegulamentoVersaoUncheckedUpdateManyWithoutEdicaoInput>;
};
export type RegulamentoVersaoScalarWhereInput = {
    AND?: Prisma.RegulamentoVersaoScalarWhereInput | Prisma.RegulamentoVersaoScalarWhereInput[];
    OR?: Prisma.RegulamentoVersaoScalarWhereInput[];
    NOT?: Prisma.RegulamentoVersaoScalarWhereInput | Prisma.RegulamentoVersaoScalarWhereInput[];
    id?: Prisma.StringFilter<"RegulamentoVersao"> | string;
    edicaoId?: Prisma.StringFilter<"RegulamentoVersao"> | string;
    versao?: Prisma.IntFilter<"RegulamentoVersao"> | number;
    criteriosMd?: Prisma.StringFilter<"RegulamentoVersao"> | string;
    snapshot?: Prisma.JsonFilter<"RegulamentoVersao">;
    publicadaEm?: Prisma.DateTimeFilter<"RegulamentoVersao"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"RegulamentoVersao"> | Date | string;
};
export type RegulamentoVersaoCreateManyEdicaoInput = {
    id?: string;
    versao: number;
    criteriosMd: string;
    snapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publicadaEm?: Date | string;
    createdAt?: Date | string;
};
export type RegulamentoVersaoUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versao?: Prisma.IntFieldUpdateOperationsInput | number;
    criteriosMd?: Prisma.StringFieldUpdateOperationsInput | string;
    snapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publicadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegulamentoVersaoUncheckedUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versao?: Prisma.IntFieldUpdateOperationsInput | number;
    criteriosMd?: Prisma.StringFieldUpdateOperationsInput | string;
    snapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publicadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegulamentoVersaoUncheckedUpdateManyWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    versao?: Prisma.IntFieldUpdateOperationsInput | number;
    criteriosMd?: Prisma.StringFieldUpdateOperationsInput | string;
    snapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    publicadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RegulamentoVersaoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    versao?: boolean;
    criteriosMd?: boolean;
    snapshot?: boolean;
    publicadaEm?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["regulamentoVersao"]>;
export type RegulamentoVersaoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    versao?: boolean;
    criteriosMd?: boolean;
    snapshot?: boolean;
    publicadaEm?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["regulamentoVersao"]>;
export type RegulamentoVersaoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    versao?: boolean;
    criteriosMd?: boolean;
    snapshot?: boolean;
    publicadaEm?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["regulamentoVersao"]>;
export type RegulamentoVersaoSelectScalar = {
    id?: boolean;
    edicaoId?: boolean;
    versao?: boolean;
    criteriosMd?: boolean;
    snapshot?: boolean;
    publicadaEm?: boolean;
    createdAt?: boolean;
};
export type RegulamentoVersaoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "edicaoId" | "versao" | "criteriosMd" | "snapshot" | "publicadaEm" | "createdAt", ExtArgs["result"]["regulamentoVersao"]>;
export type RegulamentoVersaoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
};
export type RegulamentoVersaoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
};
export type RegulamentoVersaoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
};
export type $RegulamentoVersaoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RegulamentoVersao";
    objects: {
        edicao: Prisma.$EdicaoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        edicaoId: string;
        versao: number;
        criteriosMd: string;
        snapshot: runtime.JsonValue;
        publicadaEm: Date;
        createdAt: Date;
    }, ExtArgs["result"]["regulamentoVersao"]>;
    composites: {};
};
export type RegulamentoVersaoGetPayload<S extends boolean | null | undefined | RegulamentoVersaoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RegulamentoVersaoPayload, S>;
export type RegulamentoVersaoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RegulamentoVersaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RegulamentoVersaoCountAggregateInputType | true;
};
export interface RegulamentoVersaoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RegulamentoVersao'];
        meta: {
            name: 'RegulamentoVersao';
        };
    };
    findUnique<T extends RegulamentoVersaoFindUniqueArgs>(args: Prisma.SelectSubset<T, RegulamentoVersaoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RegulamentoVersaoClient<runtime.Types.Result.GetResult<Prisma.$RegulamentoVersaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RegulamentoVersaoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RegulamentoVersaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RegulamentoVersaoClient<runtime.Types.Result.GetResult<Prisma.$RegulamentoVersaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RegulamentoVersaoFindFirstArgs>(args?: Prisma.SelectSubset<T, RegulamentoVersaoFindFirstArgs<ExtArgs>>): Prisma.Prisma__RegulamentoVersaoClient<runtime.Types.Result.GetResult<Prisma.$RegulamentoVersaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RegulamentoVersaoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RegulamentoVersaoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RegulamentoVersaoClient<runtime.Types.Result.GetResult<Prisma.$RegulamentoVersaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RegulamentoVersaoFindManyArgs>(args?: Prisma.SelectSubset<T, RegulamentoVersaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegulamentoVersaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RegulamentoVersaoCreateArgs>(args: Prisma.SelectSubset<T, RegulamentoVersaoCreateArgs<ExtArgs>>): Prisma.Prisma__RegulamentoVersaoClient<runtime.Types.Result.GetResult<Prisma.$RegulamentoVersaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RegulamentoVersaoCreateManyArgs>(args?: Prisma.SelectSubset<T, RegulamentoVersaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RegulamentoVersaoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RegulamentoVersaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegulamentoVersaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RegulamentoVersaoDeleteArgs>(args: Prisma.SelectSubset<T, RegulamentoVersaoDeleteArgs<ExtArgs>>): Prisma.Prisma__RegulamentoVersaoClient<runtime.Types.Result.GetResult<Prisma.$RegulamentoVersaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RegulamentoVersaoUpdateArgs>(args: Prisma.SelectSubset<T, RegulamentoVersaoUpdateArgs<ExtArgs>>): Prisma.Prisma__RegulamentoVersaoClient<runtime.Types.Result.GetResult<Prisma.$RegulamentoVersaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RegulamentoVersaoDeleteManyArgs>(args?: Prisma.SelectSubset<T, RegulamentoVersaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RegulamentoVersaoUpdateManyArgs>(args: Prisma.SelectSubset<T, RegulamentoVersaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RegulamentoVersaoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RegulamentoVersaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RegulamentoVersaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RegulamentoVersaoUpsertArgs>(args: Prisma.SelectSubset<T, RegulamentoVersaoUpsertArgs<ExtArgs>>): Prisma.Prisma__RegulamentoVersaoClient<runtime.Types.Result.GetResult<Prisma.$RegulamentoVersaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RegulamentoVersaoCountArgs>(args?: Prisma.Subset<T, RegulamentoVersaoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RegulamentoVersaoCountAggregateOutputType> : number>;
    aggregate<T extends RegulamentoVersaoAggregateArgs>(args: Prisma.Subset<T, RegulamentoVersaoAggregateArgs>): Prisma.PrismaPromise<GetRegulamentoVersaoAggregateType<T>>;
    groupBy<T extends RegulamentoVersaoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RegulamentoVersaoGroupByArgs['orderBy'];
    } : {
        orderBy?: RegulamentoVersaoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RegulamentoVersaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegulamentoVersaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RegulamentoVersaoFieldRefs;
}
export interface Prisma__RegulamentoVersaoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    edicao<T extends Prisma.EdicaoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EdicaoDefaultArgs<ExtArgs>>): Prisma.Prisma__EdicaoClient<runtime.Types.Result.GetResult<Prisma.$EdicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RegulamentoVersaoFieldRefs {
    readonly id: Prisma.FieldRef<"RegulamentoVersao", 'String'>;
    readonly edicaoId: Prisma.FieldRef<"RegulamentoVersao", 'String'>;
    readonly versao: Prisma.FieldRef<"RegulamentoVersao", 'Int'>;
    readonly criteriosMd: Prisma.FieldRef<"RegulamentoVersao", 'String'>;
    readonly snapshot: Prisma.FieldRef<"RegulamentoVersao", 'Json'>;
    readonly publicadaEm: Prisma.FieldRef<"RegulamentoVersao", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"RegulamentoVersao", 'DateTime'>;
}
export type RegulamentoVersaoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulamentoVersaoSelect<ExtArgs> | null;
    omit?: Prisma.RegulamentoVersaoOmit<ExtArgs> | null;
    include?: Prisma.RegulamentoVersaoInclude<ExtArgs> | null;
    where: Prisma.RegulamentoVersaoWhereUniqueInput;
};
export type RegulamentoVersaoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulamentoVersaoSelect<ExtArgs> | null;
    omit?: Prisma.RegulamentoVersaoOmit<ExtArgs> | null;
    include?: Prisma.RegulamentoVersaoInclude<ExtArgs> | null;
    where: Prisma.RegulamentoVersaoWhereUniqueInput;
};
export type RegulamentoVersaoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulamentoVersaoSelect<ExtArgs> | null;
    omit?: Prisma.RegulamentoVersaoOmit<ExtArgs> | null;
    include?: Prisma.RegulamentoVersaoInclude<ExtArgs> | null;
    where?: Prisma.RegulamentoVersaoWhereInput;
    orderBy?: Prisma.RegulamentoVersaoOrderByWithRelationInput | Prisma.RegulamentoVersaoOrderByWithRelationInput[];
    cursor?: Prisma.RegulamentoVersaoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegulamentoVersaoScalarFieldEnum | Prisma.RegulamentoVersaoScalarFieldEnum[];
};
export type RegulamentoVersaoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulamentoVersaoSelect<ExtArgs> | null;
    omit?: Prisma.RegulamentoVersaoOmit<ExtArgs> | null;
    include?: Prisma.RegulamentoVersaoInclude<ExtArgs> | null;
    where?: Prisma.RegulamentoVersaoWhereInput;
    orderBy?: Prisma.RegulamentoVersaoOrderByWithRelationInput | Prisma.RegulamentoVersaoOrderByWithRelationInput[];
    cursor?: Prisma.RegulamentoVersaoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegulamentoVersaoScalarFieldEnum | Prisma.RegulamentoVersaoScalarFieldEnum[];
};
export type RegulamentoVersaoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulamentoVersaoSelect<ExtArgs> | null;
    omit?: Prisma.RegulamentoVersaoOmit<ExtArgs> | null;
    include?: Prisma.RegulamentoVersaoInclude<ExtArgs> | null;
    where?: Prisma.RegulamentoVersaoWhereInput;
    orderBy?: Prisma.RegulamentoVersaoOrderByWithRelationInput | Prisma.RegulamentoVersaoOrderByWithRelationInput[];
    cursor?: Prisma.RegulamentoVersaoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RegulamentoVersaoScalarFieldEnum | Prisma.RegulamentoVersaoScalarFieldEnum[];
};
export type RegulamentoVersaoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulamentoVersaoSelect<ExtArgs> | null;
    omit?: Prisma.RegulamentoVersaoOmit<ExtArgs> | null;
    include?: Prisma.RegulamentoVersaoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegulamentoVersaoCreateInput, Prisma.RegulamentoVersaoUncheckedCreateInput>;
};
export type RegulamentoVersaoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RegulamentoVersaoCreateManyInput | Prisma.RegulamentoVersaoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RegulamentoVersaoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulamentoVersaoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RegulamentoVersaoOmit<ExtArgs> | null;
    data: Prisma.RegulamentoVersaoCreateManyInput | Prisma.RegulamentoVersaoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RegulamentoVersaoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RegulamentoVersaoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulamentoVersaoSelect<ExtArgs> | null;
    omit?: Prisma.RegulamentoVersaoOmit<ExtArgs> | null;
    include?: Prisma.RegulamentoVersaoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegulamentoVersaoUpdateInput, Prisma.RegulamentoVersaoUncheckedUpdateInput>;
    where: Prisma.RegulamentoVersaoWhereUniqueInput;
};
export type RegulamentoVersaoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RegulamentoVersaoUpdateManyMutationInput, Prisma.RegulamentoVersaoUncheckedUpdateManyInput>;
    where?: Prisma.RegulamentoVersaoWhereInput;
    limit?: number;
};
export type RegulamentoVersaoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulamentoVersaoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RegulamentoVersaoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RegulamentoVersaoUpdateManyMutationInput, Prisma.RegulamentoVersaoUncheckedUpdateManyInput>;
    where?: Prisma.RegulamentoVersaoWhereInput;
    limit?: number;
    include?: Prisma.RegulamentoVersaoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RegulamentoVersaoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulamentoVersaoSelect<ExtArgs> | null;
    omit?: Prisma.RegulamentoVersaoOmit<ExtArgs> | null;
    include?: Prisma.RegulamentoVersaoInclude<ExtArgs> | null;
    where: Prisma.RegulamentoVersaoWhereUniqueInput;
    create: Prisma.XOR<Prisma.RegulamentoVersaoCreateInput, Prisma.RegulamentoVersaoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RegulamentoVersaoUpdateInput, Prisma.RegulamentoVersaoUncheckedUpdateInput>;
};
export type RegulamentoVersaoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulamentoVersaoSelect<ExtArgs> | null;
    omit?: Prisma.RegulamentoVersaoOmit<ExtArgs> | null;
    include?: Prisma.RegulamentoVersaoInclude<ExtArgs> | null;
    where: Prisma.RegulamentoVersaoWhereUniqueInput;
};
export type RegulamentoVersaoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RegulamentoVersaoWhereInput;
    limit?: number;
};
export type RegulamentoVersaoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RegulamentoVersaoSelect<ExtArgs> | null;
    omit?: Prisma.RegulamentoVersaoOmit<ExtArgs> | null;
    include?: Prisma.RegulamentoVersaoInclude<ExtArgs> | null;
};
