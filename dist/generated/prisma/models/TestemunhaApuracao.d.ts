import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type TestemunhaApuracaoModel = runtime.Types.Result.DefaultSelection<Prisma.$TestemunhaApuracaoPayload>;
export type AggregateTestemunhaApuracao = {
    _count: TestemunhaApuracaoCountAggregateOutputType | null;
    _min: TestemunhaApuracaoMinAggregateOutputType | null;
    _max: TestemunhaApuracaoMaxAggregateOutputType | null;
};
export type TestemunhaApuracaoMinAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    nome: string | null;
    email: string | null;
    organizacao: string | null;
    token: string | null;
    status: $Enums.StatusTestemunhaApuracao | null;
    convidadaEm: Date | null;
    confirmadaEm: Date | null;
    observacao: string | null;
    createdAt: Date | null;
};
export type TestemunhaApuracaoMaxAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    nome: string | null;
    email: string | null;
    organizacao: string | null;
    token: string | null;
    status: $Enums.StatusTestemunhaApuracao | null;
    convidadaEm: Date | null;
    confirmadaEm: Date | null;
    observacao: string | null;
    createdAt: Date | null;
};
export type TestemunhaApuracaoCountAggregateOutputType = {
    id: number;
    edicaoId: number;
    nome: number;
    email: number;
    organizacao: number;
    token: number;
    status: number;
    convidadaEm: number;
    confirmadaEm: number;
    observacao: number;
    createdAt: number;
    _all: number;
};
export type TestemunhaApuracaoMinAggregateInputType = {
    id?: true;
    edicaoId?: true;
    nome?: true;
    email?: true;
    organizacao?: true;
    token?: true;
    status?: true;
    convidadaEm?: true;
    confirmadaEm?: true;
    observacao?: true;
    createdAt?: true;
};
export type TestemunhaApuracaoMaxAggregateInputType = {
    id?: true;
    edicaoId?: true;
    nome?: true;
    email?: true;
    organizacao?: true;
    token?: true;
    status?: true;
    convidadaEm?: true;
    confirmadaEm?: true;
    observacao?: true;
    createdAt?: true;
};
export type TestemunhaApuracaoCountAggregateInputType = {
    id?: true;
    edicaoId?: true;
    nome?: true;
    email?: true;
    organizacao?: true;
    token?: true;
    status?: true;
    convidadaEm?: true;
    confirmadaEm?: true;
    observacao?: true;
    createdAt?: true;
    _all?: true;
};
export type TestemunhaApuracaoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestemunhaApuracaoWhereInput;
    orderBy?: Prisma.TestemunhaApuracaoOrderByWithRelationInput | Prisma.TestemunhaApuracaoOrderByWithRelationInput[];
    cursor?: Prisma.TestemunhaApuracaoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TestemunhaApuracaoCountAggregateInputType;
    _min?: TestemunhaApuracaoMinAggregateInputType;
    _max?: TestemunhaApuracaoMaxAggregateInputType;
};
export type GetTestemunhaApuracaoAggregateType<T extends TestemunhaApuracaoAggregateArgs> = {
    [P in keyof T & keyof AggregateTestemunhaApuracao]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTestemunhaApuracao[P]> : Prisma.GetScalarType<T[P], AggregateTestemunhaApuracao[P]>;
};
export type TestemunhaApuracaoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestemunhaApuracaoWhereInput;
    orderBy?: Prisma.TestemunhaApuracaoOrderByWithAggregationInput | Prisma.TestemunhaApuracaoOrderByWithAggregationInput[];
    by: Prisma.TestemunhaApuracaoScalarFieldEnum[] | Prisma.TestemunhaApuracaoScalarFieldEnum;
    having?: Prisma.TestemunhaApuracaoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TestemunhaApuracaoCountAggregateInputType | true;
    _min?: TestemunhaApuracaoMinAggregateInputType;
    _max?: TestemunhaApuracaoMaxAggregateInputType;
};
export type TestemunhaApuracaoGroupByOutputType = {
    id: string;
    edicaoId: string;
    nome: string;
    email: string;
    organizacao: string | null;
    token: string;
    status: $Enums.StatusTestemunhaApuracao;
    convidadaEm: Date;
    confirmadaEm: Date | null;
    observacao: string | null;
    createdAt: Date;
    _count: TestemunhaApuracaoCountAggregateOutputType | null;
    _min: TestemunhaApuracaoMinAggregateOutputType | null;
    _max: TestemunhaApuracaoMaxAggregateOutputType | null;
};
export type GetTestemunhaApuracaoGroupByPayload<T extends TestemunhaApuracaoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TestemunhaApuracaoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TestemunhaApuracaoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TestemunhaApuracaoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TestemunhaApuracaoGroupByOutputType[P]>;
}>>;
export type TestemunhaApuracaoWhereInput = {
    AND?: Prisma.TestemunhaApuracaoWhereInput | Prisma.TestemunhaApuracaoWhereInput[];
    OR?: Prisma.TestemunhaApuracaoWhereInput[];
    NOT?: Prisma.TestemunhaApuracaoWhereInput | Prisma.TestemunhaApuracaoWhereInput[];
    id?: Prisma.StringFilter<"TestemunhaApuracao"> | string;
    edicaoId?: Prisma.StringFilter<"TestemunhaApuracao"> | string;
    nome?: Prisma.StringFilter<"TestemunhaApuracao"> | string;
    email?: Prisma.StringFilter<"TestemunhaApuracao"> | string;
    organizacao?: Prisma.StringNullableFilter<"TestemunhaApuracao"> | string | null;
    token?: Prisma.StringFilter<"TestemunhaApuracao"> | string;
    status?: Prisma.EnumStatusTestemunhaApuracaoFilter<"TestemunhaApuracao"> | $Enums.StatusTestemunhaApuracao;
    convidadaEm?: Prisma.DateTimeFilter<"TestemunhaApuracao"> | Date | string;
    confirmadaEm?: Prisma.DateTimeNullableFilter<"TestemunhaApuracao"> | Date | string | null;
    observacao?: Prisma.StringNullableFilter<"TestemunhaApuracao"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"TestemunhaApuracao"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
};
export type TestemunhaApuracaoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    organizacao?: Prisma.SortOrderInput | Prisma.SortOrder;
    token?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    convidadaEm?: Prisma.SortOrder;
    confirmadaEm?: Prisma.SortOrderInput | Prisma.SortOrder;
    observacao?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    edicao?: Prisma.EdicaoOrderByWithRelationInput;
};
export type TestemunhaApuracaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    token?: string;
    AND?: Prisma.TestemunhaApuracaoWhereInput | Prisma.TestemunhaApuracaoWhereInput[];
    OR?: Prisma.TestemunhaApuracaoWhereInput[];
    NOT?: Prisma.TestemunhaApuracaoWhereInput | Prisma.TestemunhaApuracaoWhereInput[];
    edicaoId?: Prisma.StringFilter<"TestemunhaApuracao"> | string;
    nome?: Prisma.StringFilter<"TestemunhaApuracao"> | string;
    email?: Prisma.StringFilter<"TestemunhaApuracao"> | string;
    organizacao?: Prisma.StringNullableFilter<"TestemunhaApuracao"> | string | null;
    status?: Prisma.EnumStatusTestemunhaApuracaoFilter<"TestemunhaApuracao"> | $Enums.StatusTestemunhaApuracao;
    convidadaEm?: Prisma.DateTimeFilter<"TestemunhaApuracao"> | Date | string;
    confirmadaEm?: Prisma.DateTimeNullableFilter<"TestemunhaApuracao"> | Date | string | null;
    observacao?: Prisma.StringNullableFilter<"TestemunhaApuracao"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"TestemunhaApuracao"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
}, "id" | "token">;
export type TestemunhaApuracaoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    organizacao?: Prisma.SortOrderInput | Prisma.SortOrder;
    token?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    convidadaEm?: Prisma.SortOrder;
    confirmadaEm?: Prisma.SortOrderInput | Prisma.SortOrder;
    observacao?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.TestemunhaApuracaoCountOrderByAggregateInput;
    _max?: Prisma.TestemunhaApuracaoMaxOrderByAggregateInput;
    _min?: Prisma.TestemunhaApuracaoMinOrderByAggregateInput;
};
export type TestemunhaApuracaoScalarWhereWithAggregatesInput = {
    AND?: Prisma.TestemunhaApuracaoScalarWhereWithAggregatesInput | Prisma.TestemunhaApuracaoScalarWhereWithAggregatesInput[];
    OR?: Prisma.TestemunhaApuracaoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TestemunhaApuracaoScalarWhereWithAggregatesInput | Prisma.TestemunhaApuracaoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TestemunhaApuracao"> | string;
    edicaoId?: Prisma.StringWithAggregatesFilter<"TestemunhaApuracao"> | string;
    nome?: Prisma.StringWithAggregatesFilter<"TestemunhaApuracao"> | string;
    email?: Prisma.StringWithAggregatesFilter<"TestemunhaApuracao"> | string;
    organizacao?: Prisma.StringNullableWithAggregatesFilter<"TestemunhaApuracao"> | string | null;
    token?: Prisma.StringWithAggregatesFilter<"TestemunhaApuracao"> | string;
    status?: Prisma.EnumStatusTestemunhaApuracaoWithAggregatesFilter<"TestemunhaApuracao"> | $Enums.StatusTestemunhaApuracao;
    convidadaEm?: Prisma.DateTimeWithAggregatesFilter<"TestemunhaApuracao"> | Date | string;
    confirmadaEm?: Prisma.DateTimeNullableWithAggregatesFilter<"TestemunhaApuracao"> | Date | string | null;
    observacao?: Prisma.StringNullableWithAggregatesFilter<"TestemunhaApuracao"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TestemunhaApuracao"> | Date | string;
};
export type TestemunhaApuracaoCreateInput = {
    id?: string;
    nome: string;
    email: string;
    organizacao?: string | null;
    token: string;
    status?: $Enums.StatusTestemunhaApuracao;
    convidadaEm?: Date | string;
    confirmadaEm?: Date | string | null;
    observacao?: string | null;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutTestemunhasInput;
};
export type TestemunhaApuracaoUncheckedCreateInput = {
    id?: string;
    edicaoId: string;
    nome: string;
    email: string;
    organizacao?: string | null;
    token: string;
    status?: $Enums.StatusTestemunhaApuracao;
    convidadaEm?: Date | string;
    confirmadaEm?: Date | string | null;
    observacao?: string | null;
    createdAt?: Date | string;
};
export type TestemunhaApuracaoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    organizacao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusTestemunhaApuracaoFieldUpdateOperationsInput | $Enums.StatusTestemunhaApuracao;
    convidadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observacao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutTestemunhasNestedInput;
};
export type TestemunhaApuracaoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    organizacao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusTestemunhaApuracaoFieldUpdateOperationsInput | $Enums.StatusTestemunhaApuracao;
    convidadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observacao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestemunhaApuracaoCreateManyInput = {
    id?: string;
    edicaoId: string;
    nome: string;
    email: string;
    organizacao?: string | null;
    token: string;
    status?: $Enums.StatusTestemunhaApuracao;
    convidadaEm?: Date | string;
    confirmadaEm?: Date | string | null;
    observacao?: string | null;
    createdAt?: Date | string;
};
export type TestemunhaApuracaoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    organizacao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusTestemunhaApuracaoFieldUpdateOperationsInput | $Enums.StatusTestemunhaApuracao;
    convidadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observacao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestemunhaApuracaoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    organizacao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusTestemunhaApuracaoFieldUpdateOperationsInput | $Enums.StatusTestemunhaApuracao;
    convidadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observacao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestemunhaApuracaoListRelationFilter = {
    every?: Prisma.TestemunhaApuracaoWhereInput;
    some?: Prisma.TestemunhaApuracaoWhereInput;
    none?: Prisma.TestemunhaApuracaoWhereInput;
};
export type TestemunhaApuracaoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TestemunhaApuracaoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    organizacao?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    convidadaEm?: Prisma.SortOrder;
    confirmadaEm?: Prisma.SortOrder;
    observacao?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TestemunhaApuracaoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    organizacao?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    convidadaEm?: Prisma.SortOrder;
    confirmadaEm?: Prisma.SortOrder;
    observacao?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TestemunhaApuracaoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    organizacao?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    convidadaEm?: Prisma.SortOrder;
    confirmadaEm?: Prisma.SortOrder;
    observacao?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TestemunhaApuracaoCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.TestemunhaApuracaoCreateWithoutEdicaoInput, Prisma.TestemunhaApuracaoUncheckedCreateWithoutEdicaoInput> | Prisma.TestemunhaApuracaoCreateWithoutEdicaoInput[] | Prisma.TestemunhaApuracaoUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.TestemunhaApuracaoCreateOrConnectWithoutEdicaoInput | Prisma.TestemunhaApuracaoCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.TestemunhaApuracaoCreateManyEdicaoInputEnvelope;
    connect?: Prisma.TestemunhaApuracaoWhereUniqueInput | Prisma.TestemunhaApuracaoWhereUniqueInput[];
};
export type TestemunhaApuracaoUncheckedCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.TestemunhaApuracaoCreateWithoutEdicaoInput, Prisma.TestemunhaApuracaoUncheckedCreateWithoutEdicaoInput> | Prisma.TestemunhaApuracaoCreateWithoutEdicaoInput[] | Prisma.TestemunhaApuracaoUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.TestemunhaApuracaoCreateOrConnectWithoutEdicaoInput | Prisma.TestemunhaApuracaoCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.TestemunhaApuracaoCreateManyEdicaoInputEnvelope;
    connect?: Prisma.TestemunhaApuracaoWhereUniqueInput | Prisma.TestemunhaApuracaoWhereUniqueInput[];
};
export type TestemunhaApuracaoUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.TestemunhaApuracaoCreateWithoutEdicaoInput, Prisma.TestemunhaApuracaoUncheckedCreateWithoutEdicaoInput> | Prisma.TestemunhaApuracaoCreateWithoutEdicaoInput[] | Prisma.TestemunhaApuracaoUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.TestemunhaApuracaoCreateOrConnectWithoutEdicaoInput | Prisma.TestemunhaApuracaoCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.TestemunhaApuracaoUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.TestemunhaApuracaoUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.TestemunhaApuracaoCreateManyEdicaoInputEnvelope;
    set?: Prisma.TestemunhaApuracaoWhereUniqueInput | Prisma.TestemunhaApuracaoWhereUniqueInput[];
    disconnect?: Prisma.TestemunhaApuracaoWhereUniqueInput | Prisma.TestemunhaApuracaoWhereUniqueInput[];
    delete?: Prisma.TestemunhaApuracaoWhereUniqueInput | Prisma.TestemunhaApuracaoWhereUniqueInput[];
    connect?: Prisma.TestemunhaApuracaoWhereUniqueInput | Prisma.TestemunhaApuracaoWhereUniqueInput[];
    update?: Prisma.TestemunhaApuracaoUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.TestemunhaApuracaoUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.TestemunhaApuracaoUpdateManyWithWhereWithoutEdicaoInput | Prisma.TestemunhaApuracaoUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.TestemunhaApuracaoScalarWhereInput | Prisma.TestemunhaApuracaoScalarWhereInput[];
};
export type TestemunhaApuracaoUncheckedUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.TestemunhaApuracaoCreateWithoutEdicaoInput, Prisma.TestemunhaApuracaoUncheckedCreateWithoutEdicaoInput> | Prisma.TestemunhaApuracaoCreateWithoutEdicaoInput[] | Prisma.TestemunhaApuracaoUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.TestemunhaApuracaoCreateOrConnectWithoutEdicaoInput | Prisma.TestemunhaApuracaoCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.TestemunhaApuracaoUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.TestemunhaApuracaoUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.TestemunhaApuracaoCreateManyEdicaoInputEnvelope;
    set?: Prisma.TestemunhaApuracaoWhereUniqueInput | Prisma.TestemunhaApuracaoWhereUniqueInput[];
    disconnect?: Prisma.TestemunhaApuracaoWhereUniqueInput | Prisma.TestemunhaApuracaoWhereUniqueInput[];
    delete?: Prisma.TestemunhaApuracaoWhereUniqueInput | Prisma.TestemunhaApuracaoWhereUniqueInput[];
    connect?: Prisma.TestemunhaApuracaoWhereUniqueInput | Prisma.TestemunhaApuracaoWhereUniqueInput[];
    update?: Prisma.TestemunhaApuracaoUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.TestemunhaApuracaoUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.TestemunhaApuracaoUpdateManyWithWhereWithoutEdicaoInput | Prisma.TestemunhaApuracaoUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.TestemunhaApuracaoScalarWhereInput | Prisma.TestemunhaApuracaoScalarWhereInput[];
};
export type EnumStatusTestemunhaApuracaoFieldUpdateOperationsInput = {
    set?: $Enums.StatusTestemunhaApuracao;
};
export type TestemunhaApuracaoCreateWithoutEdicaoInput = {
    id?: string;
    nome: string;
    email: string;
    organizacao?: string | null;
    token: string;
    status?: $Enums.StatusTestemunhaApuracao;
    convidadaEm?: Date | string;
    confirmadaEm?: Date | string | null;
    observacao?: string | null;
    createdAt?: Date | string;
};
export type TestemunhaApuracaoUncheckedCreateWithoutEdicaoInput = {
    id?: string;
    nome: string;
    email: string;
    organizacao?: string | null;
    token: string;
    status?: $Enums.StatusTestemunhaApuracao;
    convidadaEm?: Date | string;
    confirmadaEm?: Date | string | null;
    observacao?: string | null;
    createdAt?: Date | string;
};
export type TestemunhaApuracaoCreateOrConnectWithoutEdicaoInput = {
    where: Prisma.TestemunhaApuracaoWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestemunhaApuracaoCreateWithoutEdicaoInput, Prisma.TestemunhaApuracaoUncheckedCreateWithoutEdicaoInput>;
};
export type TestemunhaApuracaoCreateManyEdicaoInputEnvelope = {
    data: Prisma.TestemunhaApuracaoCreateManyEdicaoInput | Prisma.TestemunhaApuracaoCreateManyEdicaoInput[];
    skipDuplicates?: boolean;
};
export type TestemunhaApuracaoUpsertWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.TestemunhaApuracaoWhereUniqueInput;
    update: Prisma.XOR<Prisma.TestemunhaApuracaoUpdateWithoutEdicaoInput, Prisma.TestemunhaApuracaoUncheckedUpdateWithoutEdicaoInput>;
    create: Prisma.XOR<Prisma.TestemunhaApuracaoCreateWithoutEdicaoInput, Prisma.TestemunhaApuracaoUncheckedCreateWithoutEdicaoInput>;
};
export type TestemunhaApuracaoUpdateWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.TestemunhaApuracaoWhereUniqueInput;
    data: Prisma.XOR<Prisma.TestemunhaApuracaoUpdateWithoutEdicaoInput, Prisma.TestemunhaApuracaoUncheckedUpdateWithoutEdicaoInput>;
};
export type TestemunhaApuracaoUpdateManyWithWhereWithoutEdicaoInput = {
    where: Prisma.TestemunhaApuracaoScalarWhereInput;
    data: Prisma.XOR<Prisma.TestemunhaApuracaoUpdateManyMutationInput, Prisma.TestemunhaApuracaoUncheckedUpdateManyWithoutEdicaoInput>;
};
export type TestemunhaApuracaoScalarWhereInput = {
    AND?: Prisma.TestemunhaApuracaoScalarWhereInput | Prisma.TestemunhaApuracaoScalarWhereInput[];
    OR?: Prisma.TestemunhaApuracaoScalarWhereInput[];
    NOT?: Prisma.TestemunhaApuracaoScalarWhereInput | Prisma.TestemunhaApuracaoScalarWhereInput[];
    id?: Prisma.StringFilter<"TestemunhaApuracao"> | string;
    edicaoId?: Prisma.StringFilter<"TestemunhaApuracao"> | string;
    nome?: Prisma.StringFilter<"TestemunhaApuracao"> | string;
    email?: Prisma.StringFilter<"TestemunhaApuracao"> | string;
    organizacao?: Prisma.StringNullableFilter<"TestemunhaApuracao"> | string | null;
    token?: Prisma.StringFilter<"TestemunhaApuracao"> | string;
    status?: Prisma.EnumStatusTestemunhaApuracaoFilter<"TestemunhaApuracao"> | $Enums.StatusTestemunhaApuracao;
    convidadaEm?: Prisma.DateTimeFilter<"TestemunhaApuracao"> | Date | string;
    confirmadaEm?: Prisma.DateTimeNullableFilter<"TestemunhaApuracao"> | Date | string | null;
    observacao?: Prisma.StringNullableFilter<"TestemunhaApuracao"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"TestemunhaApuracao"> | Date | string;
};
export type TestemunhaApuracaoCreateManyEdicaoInput = {
    id?: string;
    nome: string;
    email: string;
    organizacao?: string | null;
    token: string;
    status?: $Enums.StatusTestemunhaApuracao;
    convidadaEm?: Date | string;
    confirmadaEm?: Date | string | null;
    observacao?: string | null;
    createdAt?: Date | string;
};
export type TestemunhaApuracaoUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    organizacao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusTestemunhaApuracaoFieldUpdateOperationsInput | $Enums.StatusTestemunhaApuracao;
    convidadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observacao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestemunhaApuracaoUncheckedUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    organizacao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusTestemunhaApuracaoFieldUpdateOperationsInput | $Enums.StatusTestemunhaApuracao;
    convidadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observacao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestemunhaApuracaoUncheckedUpdateManyWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    organizacao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusTestemunhaApuracaoFieldUpdateOperationsInput | $Enums.StatusTestemunhaApuracao;
    convidadaEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observacao?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TestemunhaApuracaoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    nome?: boolean;
    email?: boolean;
    organizacao?: boolean;
    token?: boolean;
    status?: boolean;
    convidadaEm?: boolean;
    confirmadaEm?: boolean;
    observacao?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["testemunhaApuracao"]>;
export type TestemunhaApuracaoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    nome?: boolean;
    email?: boolean;
    organizacao?: boolean;
    token?: boolean;
    status?: boolean;
    convidadaEm?: boolean;
    confirmadaEm?: boolean;
    observacao?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["testemunhaApuracao"]>;
export type TestemunhaApuracaoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    nome?: boolean;
    email?: boolean;
    organizacao?: boolean;
    token?: boolean;
    status?: boolean;
    convidadaEm?: boolean;
    confirmadaEm?: boolean;
    observacao?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["testemunhaApuracao"]>;
export type TestemunhaApuracaoSelectScalar = {
    id?: boolean;
    edicaoId?: boolean;
    nome?: boolean;
    email?: boolean;
    organizacao?: boolean;
    token?: boolean;
    status?: boolean;
    convidadaEm?: boolean;
    confirmadaEm?: boolean;
    observacao?: boolean;
    createdAt?: boolean;
};
export type TestemunhaApuracaoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "edicaoId" | "nome" | "email" | "organizacao" | "token" | "status" | "convidadaEm" | "confirmadaEm" | "observacao" | "createdAt", ExtArgs["result"]["testemunhaApuracao"]>;
export type TestemunhaApuracaoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
};
export type TestemunhaApuracaoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
};
export type TestemunhaApuracaoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
};
export type $TestemunhaApuracaoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TestemunhaApuracao";
    objects: {
        edicao: Prisma.$EdicaoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        edicaoId: string;
        nome: string;
        email: string;
        organizacao: string | null;
        token: string;
        status: $Enums.StatusTestemunhaApuracao;
        convidadaEm: Date;
        confirmadaEm: Date | null;
        observacao: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["testemunhaApuracao"]>;
    composites: {};
};
export type TestemunhaApuracaoGetPayload<S extends boolean | null | undefined | TestemunhaApuracaoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TestemunhaApuracaoPayload, S>;
export type TestemunhaApuracaoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TestemunhaApuracaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TestemunhaApuracaoCountAggregateInputType | true;
};
export interface TestemunhaApuracaoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TestemunhaApuracao'];
        meta: {
            name: 'TestemunhaApuracao';
        };
    };
    findUnique<T extends TestemunhaApuracaoFindUniqueArgs>(args: Prisma.SelectSubset<T, TestemunhaApuracaoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TestemunhaApuracaoClient<runtime.Types.Result.GetResult<Prisma.$TestemunhaApuracaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TestemunhaApuracaoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TestemunhaApuracaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TestemunhaApuracaoClient<runtime.Types.Result.GetResult<Prisma.$TestemunhaApuracaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TestemunhaApuracaoFindFirstArgs>(args?: Prisma.SelectSubset<T, TestemunhaApuracaoFindFirstArgs<ExtArgs>>): Prisma.Prisma__TestemunhaApuracaoClient<runtime.Types.Result.GetResult<Prisma.$TestemunhaApuracaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TestemunhaApuracaoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TestemunhaApuracaoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TestemunhaApuracaoClient<runtime.Types.Result.GetResult<Prisma.$TestemunhaApuracaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TestemunhaApuracaoFindManyArgs>(args?: Prisma.SelectSubset<T, TestemunhaApuracaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestemunhaApuracaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TestemunhaApuracaoCreateArgs>(args: Prisma.SelectSubset<T, TestemunhaApuracaoCreateArgs<ExtArgs>>): Prisma.Prisma__TestemunhaApuracaoClient<runtime.Types.Result.GetResult<Prisma.$TestemunhaApuracaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TestemunhaApuracaoCreateManyArgs>(args?: Prisma.SelectSubset<T, TestemunhaApuracaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TestemunhaApuracaoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TestemunhaApuracaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestemunhaApuracaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TestemunhaApuracaoDeleteArgs>(args: Prisma.SelectSubset<T, TestemunhaApuracaoDeleteArgs<ExtArgs>>): Prisma.Prisma__TestemunhaApuracaoClient<runtime.Types.Result.GetResult<Prisma.$TestemunhaApuracaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TestemunhaApuracaoUpdateArgs>(args: Prisma.SelectSubset<T, TestemunhaApuracaoUpdateArgs<ExtArgs>>): Prisma.Prisma__TestemunhaApuracaoClient<runtime.Types.Result.GetResult<Prisma.$TestemunhaApuracaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TestemunhaApuracaoDeleteManyArgs>(args?: Prisma.SelectSubset<T, TestemunhaApuracaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TestemunhaApuracaoUpdateManyArgs>(args: Prisma.SelectSubset<T, TestemunhaApuracaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TestemunhaApuracaoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TestemunhaApuracaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TestemunhaApuracaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TestemunhaApuracaoUpsertArgs>(args: Prisma.SelectSubset<T, TestemunhaApuracaoUpsertArgs<ExtArgs>>): Prisma.Prisma__TestemunhaApuracaoClient<runtime.Types.Result.GetResult<Prisma.$TestemunhaApuracaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TestemunhaApuracaoCountArgs>(args?: Prisma.Subset<T, TestemunhaApuracaoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TestemunhaApuracaoCountAggregateOutputType> : number>;
    aggregate<T extends TestemunhaApuracaoAggregateArgs>(args: Prisma.Subset<T, TestemunhaApuracaoAggregateArgs>): Prisma.PrismaPromise<GetTestemunhaApuracaoAggregateType<T>>;
    groupBy<T extends TestemunhaApuracaoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TestemunhaApuracaoGroupByArgs['orderBy'];
    } : {
        orderBy?: TestemunhaApuracaoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TestemunhaApuracaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestemunhaApuracaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TestemunhaApuracaoFieldRefs;
}
export interface Prisma__TestemunhaApuracaoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    edicao<T extends Prisma.EdicaoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EdicaoDefaultArgs<ExtArgs>>): Prisma.Prisma__EdicaoClient<runtime.Types.Result.GetResult<Prisma.$EdicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TestemunhaApuracaoFieldRefs {
    readonly id: Prisma.FieldRef<"TestemunhaApuracao", 'String'>;
    readonly edicaoId: Prisma.FieldRef<"TestemunhaApuracao", 'String'>;
    readonly nome: Prisma.FieldRef<"TestemunhaApuracao", 'String'>;
    readonly email: Prisma.FieldRef<"TestemunhaApuracao", 'String'>;
    readonly organizacao: Prisma.FieldRef<"TestemunhaApuracao", 'String'>;
    readonly token: Prisma.FieldRef<"TestemunhaApuracao", 'String'>;
    readonly status: Prisma.FieldRef<"TestemunhaApuracao", 'StatusTestemunhaApuracao'>;
    readonly convidadaEm: Prisma.FieldRef<"TestemunhaApuracao", 'DateTime'>;
    readonly confirmadaEm: Prisma.FieldRef<"TestemunhaApuracao", 'DateTime'>;
    readonly observacao: Prisma.FieldRef<"TestemunhaApuracao", 'String'>;
    readonly createdAt: Prisma.FieldRef<"TestemunhaApuracao", 'DateTime'>;
}
export type TestemunhaApuracaoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestemunhaApuracaoSelect<ExtArgs> | null;
    omit?: Prisma.TestemunhaApuracaoOmit<ExtArgs> | null;
    include?: Prisma.TestemunhaApuracaoInclude<ExtArgs> | null;
    where: Prisma.TestemunhaApuracaoWhereUniqueInput;
};
export type TestemunhaApuracaoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestemunhaApuracaoSelect<ExtArgs> | null;
    omit?: Prisma.TestemunhaApuracaoOmit<ExtArgs> | null;
    include?: Prisma.TestemunhaApuracaoInclude<ExtArgs> | null;
    where: Prisma.TestemunhaApuracaoWhereUniqueInput;
};
export type TestemunhaApuracaoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestemunhaApuracaoSelect<ExtArgs> | null;
    omit?: Prisma.TestemunhaApuracaoOmit<ExtArgs> | null;
    include?: Prisma.TestemunhaApuracaoInclude<ExtArgs> | null;
    where?: Prisma.TestemunhaApuracaoWhereInput;
    orderBy?: Prisma.TestemunhaApuracaoOrderByWithRelationInput | Prisma.TestemunhaApuracaoOrderByWithRelationInput[];
    cursor?: Prisma.TestemunhaApuracaoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TestemunhaApuracaoScalarFieldEnum | Prisma.TestemunhaApuracaoScalarFieldEnum[];
};
export type TestemunhaApuracaoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestemunhaApuracaoSelect<ExtArgs> | null;
    omit?: Prisma.TestemunhaApuracaoOmit<ExtArgs> | null;
    include?: Prisma.TestemunhaApuracaoInclude<ExtArgs> | null;
    where?: Prisma.TestemunhaApuracaoWhereInput;
    orderBy?: Prisma.TestemunhaApuracaoOrderByWithRelationInput | Prisma.TestemunhaApuracaoOrderByWithRelationInput[];
    cursor?: Prisma.TestemunhaApuracaoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TestemunhaApuracaoScalarFieldEnum | Prisma.TestemunhaApuracaoScalarFieldEnum[];
};
export type TestemunhaApuracaoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestemunhaApuracaoSelect<ExtArgs> | null;
    omit?: Prisma.TestemunhaApuracaoOmit<ExtArgs> | null;
    include?: Prisma.TestemunhaApuracaoInclude<ExtArgs> | null;
    where?: Prisma.TestemunhaApuracaoWhereInput;
    orderBy?: Prisma.TestemunhaApuracaoOrderByWithRelationInput | Prisma.TestemunhaApuracaoOrderByWithRelationInput[];
    cursor?: Prisma.TestemunhaApuracaoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TestemunhaApuracaoScalarFieldEnum | Prisma.TestemunhaApuracaoScalarFieldEnum[];
};
export type TestemunhaApuracaoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestemunhaApuracaoSelect<ExtArgs> | null;
    omit?: Prisma.TestemunhaApuracaoOmit<ExtArgs> | null;
    include?: Prisma.TestemunhaApuracaoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestemunhaApuracaoCreateInput, Prisma.TestemunhaApuracaoUncheckedCreateInput>;
};
export type TestemunhaApuracaoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TestemunhaApuracaoCreateManyInput | Prisma.TestemunhaApuracaoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TestemunhaApuracaoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestemunhaApuracaoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TestemunhaApuracaoOmit<ExtArgs> | null;
    data: Prisma.TestemunhaApuracaoCreateManyInput | Prisma.TestemunhaApuracaoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TestemunhaApuracaoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TestemunhaApuracaoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestemunhaApuracaoSelect<ExtArgs> | null;
    omit?: Prisma.TestemunhaApuracaoOmit<ExtArgs> | null;
    include?: Prisma.TestemunhaApuracaoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestemunhaApuracaoUpdateInput, Prisma.TestemunhaApuracaoUncheckedUpdateInput>;
    where: Prisma.TestemunhaApuracaoWhereUniqueInput;
};
export type TestemunhaApuracaoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TestemunhaApuracaoUpdateManyMutationInput, Prisma.TestemunhaApuracaoUncheckedUpdateManyInput>;
    where?: Prisma.TestemunhaApuracaoWhereInput;
    limit?: number;
};
export type TestemunhaApuracaoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestemunhaApuracaoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TestemunhaApuracaoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TestemunhaApuracaoUpdateManyMutationInput, Prisma.TestemunhaApuracaoUncheckedUpdateManyInput>;
    where?: Prisma.TestemunhaApuracaoWhereInput;
    limit?: number;
    include?: Prisma.TestemunhaApuracaoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TestemunhaApuracaoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestemunhaApuracaoSelect<ExtArgs> | null;
    omit?: Prisma.TestemunhaApuracaoOmit<ExtArgs> | null;
    include?: Prisma.TestemunhaApuracaoInclude<ExtArgs> | null;
    where: Prisma.TestemunhaApuracaoWhereUniqueInput;
    create: Prisma.XOR<Prisma.TestemunhaApuracaoCreateInput, Prisma.TestemunhaApuracaoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TestemunhaApuracaoUpdateInput, Prisma.TestemunhaApuracaoUncheckedUpdateInput>;
};
export type TestemunhaApuracaoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestemunhaApuracaoSelect<ExtArgs> | null;
    omit?: Prisma.TestemunhaApuracaoOmit<ExtArgs> | null;
    include?: Prisma.TestemunhaApuracaoInclude<ExtArgs> | null;
    where: Prisma.TestemunhaApuracaoWhereUniqueInput;
};
export type TestemunhaApuracaoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TestemunhaApuracaoWhereInput;
    limit?: number;
};
export type TestemunhaApuracaoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TestemunhaApuracaoSelect<ExtArgs> | null;
    omit?: Prisma.TestemunhaApuracaoOmit<ExtArgs> | null;
    include?: Prisma.TestemunhaApuracaoInclude<ExtArgs> | null;
};
