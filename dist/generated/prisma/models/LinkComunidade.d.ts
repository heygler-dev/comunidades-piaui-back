import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type LinkComunidadeModel = runtime.Types.Result.DefaultSelection<Prisma.$LinkComunidadePayload>;
export type AggregateLinkComunidade = {
    _count: LinkComunidadeCountAggregateOutputType | null;
    _min: LinkComunidadeMinAggregateOutputType | null;
    _max: LinkComunidadeMaxAggregateOutputType | null;
};
export type LinkComunidadeMinAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    comunidadeId: string | null;
    liderId: string | null;
    slug: string | null;
    ativo: boolean | null;
    createdAt: Date | null;
};
export type LinkComunidadeMaxAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    comunidadeId: string | null;
    liderId: string | null;
    slug: string | null;
    ativo: boolean | null;
    createdAt: Date | null;
};
export type LinkComunidadeCountAggregateOutputType = {
    id: number;
    edicaoId: number;
    comunidadeId: number;
    liderId: number;
    slug: number;
    ativo: number;
    createdAt: number;
    _all: number;
};
export type LinkComunidadeMinAggregateInputType = {
    id?: true;
    edicaoId?: true;
    comunidadeId?: true;
    liderId?: true;
    slug?: true;
    ativo?: true;
    createdAt?: true;
};
export type LinkComunidadeMaxAggregateInputType = {
    id?: true;
    edicaoId?: true;
    comunidadeId?: true;
    liderId?: true;
    slug?: true;
    ativo?: true;
    createdAt?: true;
};
export type LinkComunidadeCountAggregateInputType = {
    id?: true;
    edicaoId?: true;
    comunidadeId?: true;
    liderId?: true;
    slug?: true;
    ativo?: true;
    createdAt?: true;
    _all?: true;
};
export type LinkComunidadeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LinkComunidadeWhereInput;
    orderBy?: Prisma.LinkComunidadeOrderByWithRelationInput | Prisma.LinkComunidadeOrderByWithRelationInput[];
    cursor?: Prisma.LinkComunidadeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LinkComunidadeCountAggregateInputType;
    _min?: LinkComunidadeMinAggregateInputType;
    _max?: LinkComunidadeMaxAggregateInputType;
};
export type GetLinkComunidadeAggregateType<T extends LinkComunidadeAggregateArgs> = {
    [P in keyof T & keyof AggregateLinkComunidade]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLinkComunidade[P]> : Prisma.GetScalarType<T[P], AggregateLinkComunidade[P]>;
};
export type LinkComunidadeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LinkComunidadeWhereInput;
    orderBy?: Prisma.LinkComunidadeOrderByWithAggregationInput | Prisma.LinkComunidadeOrderByWithAggregationInput[];
    by: Prisma.LinkComunidadeScalarFieldEnum[] | Prisma.LinkComunidadeScalarFieldEnum;
    having?: Prisma.LinkComunidadeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LinkComunidadeCountAggregateInputType | true;
    _min?: LinkComunidadeMinAggregateInputType;
    _max?: LinkComunidadeMaxAggregateInputType;
};
export type LinkComunidadeGroupByOutputType = {
    id: string;
    edicaoId: string;
    comunidadeId: string;
    liderId: string;
    slug: string;
    ativo: boolean;
    createdAt: Date;
    _count: LinkComunidadeCountAggregateOutputType | null;
    _min: LinkComunidadeMinAggregateOutputType | null;
    _max: LinkComunidadeMaxAggregateOutputType | null;
};
export type GetLinkComunidadeGroupByPayload<T extends LinkComunidadeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LinkComunidadeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LinkComunidadeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LinkComunidadeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LinkComunidadeGroupByOutputType[P]>;
}>>;
export type LinkComunidadeWhereInput = {
    AND?: Prisma.LinkComunidadeWhereInput | Prisma.LinkComunidadeWhereInput[];
    OR?: Prisma.LinkComunidadeWhereInput[];
    NOT?: Prisma.LinkComunidadeWhereInput | Prisma.LinkComunidadeWhereInput[];
    id?: Prisma.StringFilter<"LinkComunidade"> | string;
    edicaoId?: Prisma.StringFilter<"LinkComunidade"> | string;
    comunidadeId?: Prisma.StringFilter<"LinkComunidade"> | string;
    liderId?: Prisma.StringFilter<"LinkComunidade"> | string;
    slug?: Prisma.StringFilter<"LinkComunidade"> | string;
    ativo?: Prisma.BoolFilter<"LinkComunidade"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"LinkComunidade"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
    comunidade?: Prisma.XOR<Prisma.ComunidadeScalarRelationFilter, Prisma.ComunidadeWhereInput>;
    lider?: Prisma.XOR<Prisma.LiderScalarRelationFilter, Prisma.LiderWhereInput>;
    inscricoesStartup?: Prisma.InscricaoStartupListRelationFilter;
};
export type LinkComunidadeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    comunidadeId?: Prisma.SortOrder;
    liderId?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    edicao?: Prisma.EdicaoOrderByWithRelationInput;
    comunidade?: Prisma.ComunidadeOrderByWithRelationInput;
    lider?: Prisma.LiderOrderByWithRelationInput;
    inscricoesStartup?: Prisma.InscricaoStartupOrderByRelationAggregateInput;
};
export type LinkComunidadeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.LinkComunidadeWhereInput | Prisma.LinkComunidadeWhereInput[];
    OR?: Prisma.LinkComunidadeWhereInput[];
    NOT?: Prisma.LinkComunidadeWhereInput | Prisma.LinkComunidadeWhereInput[];
    edicaoId?: Prisma.StringFilter<"LinkComunidade"> | string;
    comunidadeId?: Prisma.StringFilter<"LinkComunidade"> | string;
    liderId?: Prisma.StringFilter<"LinkComunidade"> | string;
    ativo?: Prisma.BoolFilter<"LinkComunidade"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"LinkComunidade"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
    comunidade?: Prisma.XOR<Prisma.ComunidadeScalarRelationFilter, Prisma.ComunidadeWhereInput>;
    lider?: Prisma.XOR<Prisma.LiderScalarRelationFilter, Prisma.LiderWhereInput>;
    inscricoesStartup?: Prisma.InscricaoStartupListRelationFilter;
}, "id" | "slug">;
export type LinkComunidadeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    comunidadeId?: Prisma.SortOrder;
    liderId?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.LinkComunidadeCountOrderByAggregateInput;
    _max?: Prisma.LinkComunidadeMaxOrderByAggregateInput;
    _min?: Prisma.LinkComunidadeMinOrderByAggregateInput;
};
export type LinkComunidadeScalarWhereWithAggregatesInput = {
    AND?: Prisma.LinkComunidadeScalarWhereWithAggregatesInput | Prisma.LinkComunidadeScalarWhereWithAggregatesInput[];
    OR?: Prisma.LinkComunidadeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LinkComunidadeScalarWhereWithAggregatesInput | Prisma.LinkComunidadeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LinkComunidade"> | string;
    edicaoId?: Prisma.StringWithAggregatesFilter<"LinkComunidade"> | string;
    comunidadeId?: Prisma.StringWithAggregatesFilter<"LinkComunidade"> | string;
    liderId?: Prisma.StringWithAggregatesFilter<"LinkComunidade"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"LinkComunidade"> | string;
    ativo?: Prisma.BoolWithAggregatesFilter<"LinkComunidade"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LinkComunidade"> | Date | string;
};
export type LinkComunidadeCreateInput = {
    id?: string;
    slug: string;
    ativo?: boolean;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutLinksComunidadeInput;
    comunidade: Prisma.ComunidadeCreateNestedOneWithoutLinksComunidadeInput;
    lider: Prisma.LiderCreateNestedOneWithoutLinksComunidadeInput;
    inscricoesStartup?: Prisma.InscricaoStartupCreateNestedManyWithoutLinkComunidadeInput;
};
export type LinkComunidadeUncheckedCreateInput = {
    id?: string;
    edicaoId: string;
    comunidadeId: string;
    liderId: string;
    slug: string;
    ativo?: boolean;
    createdAt?: Date | string;
    inscricoesStartup?: Prisma.InscricaoStartupUncheckedCreateNestedManyWithoutLinkComunidadeInput;
};
export type LinkComunidadeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutLinksComunidadeNestedInput;
    comunidade?: Prisma.ComunidadeUpdateOneRequiredWithoutLinksComunidadeNestedInput;
    lider?: Prisma.LiderUpdateOneRequiredWithoutLinksComunidadeNestedInput;
    inscricoesStartup?: Prisma.InscricaoStartupUpdateManyWithoutLinkComunidadeNestedInput;
};
export type LinkComunidadeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    liderId?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inscricoesStartup?: Prisma.InscricaoStartupUncheckedUpdateManyWithoutLinkComunidadeNestedInput;
};
export type LinkComunidadeCreateManyInput = {
    id?: string;
    edicaoId: string;
    comunidadeId: string;
    liderId: string;
    slug: string;
    ativo?: boolean;
    createdAt?: Date | string;
};
export type LinkComunidadeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LinkComunidadeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    liderId?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LinkComunidadeListRelationFilter = {
    every?: Prisma.LinkComunidadeWhereInput;
    some?: Prisma.LinkComunidadeWhereInput;
    none?: Prisma.LinkComunidadeWhereInput;
};
export type LinkComunidadeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LinkComunidadeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    comunidadeId?: Prisma.SortOrder;
    liderId?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LinkComunidadeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    comunidadeId?: Prisma.SortOrder;
    liderId?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LinkComunidadeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    comunidadeId?: Prisma.SortOrder;
    liderId?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type LinkComunidadeNullableScalarRelationFilter = {
    is?: Prisma.LinkComunidadeWhereInput | null;
    isNot?: Prisma.LinkComunidadeWhereInput | null;
};
export type LinkComunidadeCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.LinkComunidadeCreateWithoutEdicaoInput, Prisma.LinkComunidadeUncheckedCreateWithoutEdicaoInput> | Prisma.LinkComunidadeCreateWithoutEdicaoInput[] | Prisma.LinkComunidadeUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.LinkComunidadeCreateOrConnectWithoutEdicaoInput | Prisma.LinkComunidadeCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.LinkComunidadeCreateManyEdicaoInputEnvelope;
    connect?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
};
export type LinkComunidadeUncheckedCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.LinkComunidadeCreateWithoutEdicaoInput, Prisma.LinkComunidadeUncheckedCreateWithoutEdicaoInput> | Prisma.LinkComunidadeCreateWithoutEdicaoInput[] | Prisma.LinkComunidadeUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.LinkComunidadeCreateOrConnectWithoutEdicaoInput | Prisma.LinkComunidadeCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.LinkComunidadeCreateManyEdicaoInputEnvelope;
    connect?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
};
export type LinkComunidadeUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.LinkComunidadeCreateWithoutEdicaoInput, Prisma.LinkComunidadeUncheckedCreateWithoutEdicaoInput> | Prisma.LinkComunidadeCreateWithoutEdicaoInput[] | Prisma.LinkComunidadeUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.LinkComunidadeCreateOrConnectWithoutEdicaoInput | Prisma.LinkComunidadeCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.LinkComunidadeUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.LinkComunidadeUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.LinkComunidadeCreateManyEdicaoInputEnvelope;
    set?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
    disconnect?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
    delete?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
    connect?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
    update?: Prisma.LinkComunidadeUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.LinkComunidadeUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.LinkComunidadeUpdateManyWithWhereWithoutEdicaoInput | Prisma.LinkComunidadeUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.LinkComunidadeScalarWhereInput | Prisma.LinkComunidadeScalarWhereInput[];
};
export type LinkComunidadeUncheckedUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.LinkComunidadeCreateWithoutEdicaoInput, Prisma.LinkComunidadeUncheckedCreateWithoutEdicaoInput> | Prisma.LinkComunidadeCreateWithoutEdicaoInput[] | Prisma.LinkComunidadeUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.LinkComunidadeCreateOrConnectWithoutEdicaoInput | Prisma.LinkComunidadeCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.LinkComunidadeUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.LinkComunidadeUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.LinkComunidadeCreateManyEdicaoInputEnvelope;
    set?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
    disconnect?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
    delete?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
    connect?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
    update?: Prisma.LinkComunidadeUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.LinkComunidadeUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.LinkComunidadeUpdateManyWithWhereWithoutEdicaoInput | Prisma.LinkComunidadeUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.LinkComunidadeScalarWhereInput | Prisma.LinkComunidadeScalarWhereInput[];
};
export type LinkComunidadeCreateNestedManyWithoutComunidadeInput = {
    create?: Prisma.XOR<Prisma.LinkComunidadeCreateWithoutComunidadeInput, Prisma.LinkComunidadeUncheckedCreateWithoutComunidadeInput> | Prisma.LinkComunidadeCreateWithoutComunidadeInput[] | Prisma.LinkComunidadeUncheckedCreateWithoutComunidadeInput[];
    connectOrCreate?: Prisma.LinkComunidadeCreateOrConnectWithoutComunidadeInput | Prisma.LinkComunidadeCreateOrConnectWithoutComunidadeInput[];
    createMany?: Prisma.LinkComunidadeCreateManyComunidadeInputEnvelope;
    connect?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
};
export type LinkComunidadeUncheckedCreateNestedManyWithoutComunidadeInput = {
    create?: Prisma.XOR<Prisma.LinkComunidadeCreateWithoutComunidadeInput, Prisma.LinkComunidadeUncheckedCreateWithoutComunidadeInput> | Prisma.LinkComunidadeCreateWithoutComunidadeInput[] | Prisma.LinkComunidadeUncheckedCreateWithoutComunidadeInput[];
    connectOrCreate?: Prisma.LinkComunidadeCreateOrConnectWithoutComunidadeInput | Prisma.LinkComunidadeCreateOrConnectWithoutComunidadeInput[];
    createMany?: Prisma.LinkComunidadeCreateManyComunidadeInputEnvelope;
    connect?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
};
export type LinkComunidadeUpdateManyWithoutComunidadeNestedInput = {
    create?: Prisma.XOR<Prisma.LinkComunidadeCreateWithoutComunidadeInput, Prisma.LinkComunidadeUncheckedCreateWithoutComunidadeInput> | Prisma.LinkComunidadeCreateWithoutComunidadeInput[] | Prisma.LinkComunidadeUncheckedCreateWithoutComunidadeInput[];
    connectOrCreate?: Prisma.LinkComunidadeCreateOrConnectWithoutComunidadeInput | Prisma.LinkComunidadeCreateOrConnectWithoutComunidadeInput[];
    upsert?: Prisma.LinkComunidadeUpsertWithWhereUniqueWithoutComunidadeInput | Prisma.LinkComunidadeUpsertWithWhereUniqueWithoutComunidadeInput[];
    createMany?: Prisma.LinkComunidadeCreateManyComunidadeInputEnvelope;
    set?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
    disconnect?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
    delete?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
    connect?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
    update?: Prisma.LinkComunidadeUpdateWithWhereUniqueWithoutComunidadeInput | Prisma.LinkComunidadeUpdateWithWhereUniqueWithoutComunidadeInput[];
    updateMany?: Prisma.LinkComunidadeUpdateManyWithWhereWithoutComunidadeInput | Prisma.LinkComunidadeUpdateManyWithWhereWithoutComunidadeInput[];
    deleteMany?: Prisma.LinkComunidadeScalarWhereInput | Prisma.LinkComunidadeScalarWhereInput[];
};
export type LinkComunidadeUncheckedUpdateManyWithoutComunidadeNestedInput = {
    create?: Prisma.XOR<Prisma.LinkComunidadeCreateWithoutComunidadeInput, Prisma.LinkComunidadeUncheckedCreateWithoutComunidadeInput> | Prisma.LinkComunidadeCreateWithoutComunidadeInput[] | Prisma.LinkComunidadeUncheckedCreateWithoutComunidadeInput[];
    connectOrCreate?: Prisma.LinkComunidadeCreateOrConnectWithoutComunidadeInput | Prisma.LinkComunidadeCreateOrConnectWithoutComunidadeInput[];
    upsert?: Prisma.LinkComunidadeUpsertWithWhereUniqueWithoutComunidadeInput | Prisma.LinkComunidadeUpsertWithWhereUniqueWithoutComunidadeInput[];
    createMany?: Prisma.LinkComunidadeCreateManyComunidadeInputEnvelope;
    set?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
    disconnect?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
    delete?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
    connect?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
    update?: Prisma.LinkComunidadeUpdateWithWhereUniqueWithoutComunidadeInput | Prisma.LinkComunidadeUpdateWithWhereUniqueWithoutComunidadeInput[];
    updateMany?: Prisma.LinkComunidadeUpdateManyWithWhereWithoutComunidadeInput | Prisma.LinkComunidadeUpdateManyWithWhereWithoutComunidadeInput[];
    deleteMany?: Prisma.LinkComunidadeScalarWhereInput | Prisma.LinkComunidadeScalarWhereInput[];
};
export type LinkComunidadeCreateNestedManyWithoutLiderInput = {
    create?: Prisma.XOR<Prisma.LinkComunidadeCreateWithoutLiderInput, Prisma.LinkComunidadeUncheckedCreateWithoutLiderInput> | Prisma.LinkComunidadeCreateWithoutLiderInput[] | Prisma.LinkComunidadeUncheckedCreateWithoutLiderInput[];
    connectOrCreate?: Prisma.LinkComunidadeCreateOrConnectWithoutLiderInput | Prisma.LinkComunidadeCreateOrConnectWithoutLiderInput[];
    createMany?: Prisma.LinkComunidadeCreateManyLiderInputEnvelope;
    connect?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
};
export type LinkComunidadeUncheckedCreateNestedManyWithoutLiderInput = {
    create?: Prisma.XOR<Prisma.LinkComunidadeCreateWithoutLiderInput, Prisma.LinkComunidadeUncheckedCreateWithoutLiderInput> | Prisma.LinkComunidadeCreateWithoutLiderInput[] | Prisma.LinkComunidadeUncheckedCreateWithoutLiderInput[];
    connectOrCreate?: Prisma.LinkComunidadeCreateOrConnectWithoutLiderInput | Prisma.LinkComunidadeCreateOrConnectWithoutLiderInput[];
    createMany?: Prisma.LinkComunidadeCreateManyLiderInputEnvelope;
    connect?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
};
export type LinkComunidadeUpdateManyWithoutLiderNestedInput = {
    create?: Prisma.XOR<Prisma.LinkComunidadeCreateWithoutLiderInput, Prisma.LinkComunidadeUncheckedCreateWithoutLiderInput> | Prisma.LinkComunidadeCreateWithoutLiderInput[] | Prisma.LinkComunidadeUncheckedCreateWithoutLiderInput[];
    connectOrCreate?: Prisma.LinkComunidadeCreateOrConnectWithoutLiderInput | Prisma.LinkComunidadeCreateOrConnectWithoutLiderInput[];
    upsert?: Prisma.LinkComunidadeUpsertWithWhereUniqueWithoutLiderInput | Prisma.LinkComunidadeUpsertWithWhereUniqueWithoutLiderInput[];
    createMany?: Prisma.LinkComunidadeCreateManyLiderInputEnvelope;
    set?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
    disconnect?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
    delete?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
    connect?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
    update?: Prisma.LinkComunidadeUpdateWithWhereUniqueWithoutLiderInput | Prisma.LinkComunidadeUpdateWithWhereUniqueWithoutLiderInput[];
    updateMany?: Prisma.LinkComunidadeUpdateManyWithWhereWithoutLiderInput | Prisma.LinkComunidadeUpdateManyWithWhereWithoutLiderInput[];
    deleteMany?: Prisma.LinkComunidadeScalarWhereInput | Prisma.LinkComunidadeScalarWhereInput[];
};
export type LinkComunidadeUncheckedUpdateManyWithoutLiderNestedInput = {
    create?: Prisma.XOR<Prisma.LinkComunidadeCreateWithoutLiderInput, Prisma.LinkComunidadeUncheckedCreateWithoutLiderInput> | Prisma.LinkComunidadeCreateWithoutLiderInput[] | Prisma.LinkComunidadeUncheckedCreateWithoutLiderInput[];
    connectOrCreate?: Prisma.LinkComunidadeCreateOrConnectWithoutLiderInput | Prisma.LinkComunidadeCreateOrConnectWithoutLiderInput[];
    upsert?: Prisma.LinkComunidadeUpsertWithWhereUniqueWithoutLiderInput | Prisma.LinkComunidadeUpsertWithWhereUniqueWithoutLiderInput[];
    createMany?: Prisma.LinkComunidadeCreateManyLiderInputEnvelope;
    set?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
    disconnect?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
    delete?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
    connect?: Prisma.LinkComunidadeWhereUniqueInput | Prisma.LinkComunidadeWhereUniqueInput[];
    update?: Prisma.LinkComunidadeUpdateWithWhereUniqueWithoutLiderInput | Prisma.LinkComunidadeUpdateWithWhereUniqueWithoutLiderInput[];
    updateMany?: Prisma.LinkComunidadeUpdateManyWithWhereWithoutLiderInput | Prisma.LinkComunidadeUpdateManyWithWhereWithoutLiderInput[];
    deleteMany?: Prisma.LinkComunidadeScalarWhereInput | Prisma.LinkComunidadeScalarWhereInput[];
};
export type LinkComunidadeCreateNestedOneWithoutInscricoesStartupInput = {
    create?: Prisma.XOR<Prisma.LinkComunidadeCreateWithoutInscricoesStartupInput, Prisma.LinkComunidadeUncheckedCreateWithoutInscricoesStartupInput>;
    connectOrCreate?: Prisma.LinkComunidadeCreateOrConnectWithoutInscricoesStartupInput;
    connect?: Prisma.LinkComunidadeWhereUniqueInput;
};
export type LinkComunidadeUpdateOneWithoutInscricoesStartupNestedInput = {
    create?: Prisma.XOR<Prisma.LinkComunidadeCreateWithoutInscricoesStartupInput, Prisma.LinkComunidadeUncheckedCreateWithoutInscricoesStartupInput>;
    connectOrCreate?: Prisma.LinkComunidadeCreateOrConnectWithoutInscricoesStartupInput;
    upsert?: Prisma.LinkComunidadeUpsertWithoutInscricoesStartupInput;
    disconnect?: Prisma.LinkComunidadeWhereInput | boolean;
    delete?: Prisma.LinkComunidadeWhereInput | boolean;
    connect?: Prisma.LinkComunidadeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LinkComunidadeUpdateToOneWithWhereWithoutInscricoesStartupInput, Prisma.LinkComunidadeUpdateWithoutInscricoesStartupInput>, Prisma.LinkComunidadeUncheckedUpdateWithoutInscricoesStartupInput>;
};
export type LinkComunidadeCreateWithoutEdicaoInput = {
    id?: string;
    slug: string;
    ativo?: boolean;
    createdAt?: Date | string;
    comunidade: Prisma.ComunidadeCreateNestedOneWithoutLinksComunidadeInput;
    lider: Prisma.LiderCreateNestedOneWithoutLinksComunidadeInput;
    inscricoesStartup?: Prisma.InscricaoStartupCreateNestedManyWithoutLinkComunidadeInput;
};
export type LinkComunidadeUncheckedCreateWithoutEdicaoInput = {
    id?: string;
    comunidadeId: string;
    liderId: string;
    slug: string;
    ativo?: boolean;
    createdAt?: Date | string;
    inscricoesStartup?: Prisma.InscricaoStartupUncheckedCreateNestedManyWithoutLinkComunidadeInput;
};
export type LinkComunidadeCreateOrConnectWithoutEdicaoInput = {
    where: Prisma.LinkComunidadeWhereUniqueInput;
    create: Prisma.XOR<Prisma.LinkComunidadeCreateWithoutEdicaoInput, Prisma.LinkComunidadeUncheckedCreateWithoutEdicaoInput>;
};
export type LinkComunidadeCreateManyEdicaoInputEnvelope = {
    data: Prisma.LinkComunidadeCreateManyEdicaoInput | Prisma.LinkComunidadeCreateManyEdicaoInput[];
    skipDuplicates?: boolean;
};
export type LinkComunidadeUpsertWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.LinkComunidadeWhereUniqueInput;
    update: Prisma.XOR<Prisma.LinkComunidadeUpdateWithoutEdicaoInput, Prisma.LinkComunidadeUncheckedUpdateWithoutEdicaoInput>;
    create: Prisma.XOR<Prisma.LinkComunidadeCreateWithoutEdicaoInput, Prisma.LinkComunidadeUncheckedCreateWithoutEdicaoInput>;
};
export type LinkComunidadeUpdateWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.LinkComunidadeWhereUniqueInput;
    data: Prisma.XOR<Prisma.LinkComunidadeUpdateWithoutEdicaoInput, Prisma.LinkComunidadeUncheckedUpdateWithoutEdicaoInput>;
};
export type LinkComunidadeUpdateManyWithWhereWithoutEdicaoInput = {
    where: Prisma.LinkComunidadeScalarWhereInput;
    data: Prisma.XOR<Prisma.LinkComunidadeUpdateManyMutationInput, Prisma.LinkComunidadeUncheckedUpdateManyWithoutEdicaoInput>;
};
export type LinkComunidadeScalarWhereInput = {
    AND?: Prisma.LinkComunidadeScalarWhereInput | Prisma.LinkComunidadeScalarWhereInput[];
    OR?: Prisma.LinkComunidadeScalarWhereInput[];
    NOT?: Prisma.LinkComunidadeScalarWhereInput | Prisma.LinkComunidadeScalarWhereInput[];
    id?: Prisma.StringFilter<"LinkComunidade"> | string;
    edicaoId?: Prisma.StringFilter<"LinkComunidade"> | string;
    comunidadeId?: Prisma.StringFilter<"LinkComunidade"> | string;
    liderId?: Prisma.StringFilter<"LinkComunidade"> | string;
    slug?: Prisma.StringFilter<"LinkComunidade"> | string;
    ativo?: Prisma.BoolFilter<"LinkComunidade"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"LinkComunidade"> | Date | string;
};
export type LinkComunidadeCreateWithoutComunidadeInput = {
    id?: string;
    slug: string;
    ativo?: boolean;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutLinksComunidadeInput;
    lider: Prisma.LiderCreateNestedOneWithoutLinksComunidadeInput;
    inscricoesStartup?: Prisma.InscricaoStartupCreateNestedManyWithoutLinkComunidadeInput;
};
export type LinkComunidadeUncheckedCreateWithoutComunidadeInput = {
    id?: string;
    edicaoId: string;
    liderId: string;
    slug: string;
    ativo?: boolean;
    createdAt?: Date | string;
    inscricoesStartup?: Prisma.InscricaoStartupUncheckedCreateNestedManyWithoutLinkComunidadeInput;
};
export type LinkComunidadeCreateOrConnectWithoutComunidadeInput = {
    where: Prisma.LinkComunidadeWhereUniqueInput;
    create: Prisma.XOR<Prisma.LinkComunidadeCreateWithoutComunidadeInput, Prisma.LinkComunidadeUncheckedCreateWithoutComunidadeInput>;
};
export type LinkComunidadeCreateManyComunidadeInputEnvelope = {
    data: Prisma.LinkComunidadeCreateManyComunidadeInput | Prisma.LinkComunidadeCreateManyComunidadeInput[];
    skipDuplicates?: boolean;
};
export type LinkComunidadeUpsertWithWhereUniqueWithoutComunidadeInput = {
    where: Prisma.LinkComunidadeWhereUniqueInput;
    update: Prisma.XOR<Prisma.LinkComunidadeUpdateWithoutComunidadeInput, Prisma.LinkComunidadeUncheckedUpdateWithoutComunidadeInput>;
    create: Prisma.XOR<Prisma.LinkComunidadeCreateWithoutComunidadeInput, Prisma.LinkComunidadeUncheckedCreateWithoutComunidadeInput>;
};
export type LinkComunidadeUpdateWithWhereUniqueWithoutComunidadeInput = {
    where: Prisma.LinkComunidadeWhereUniqueInput;
    data: Prisma.XOR<Prisma.LinkComunidadeUpdateWithoutComunidadeInput, Prisma.LinkComunidadeUncheckedUpdateWithoutComunidadeInput>;
};
export type LinkComunidadeUpdateManyWithWhereWithoutComunidadeInput = {
    where: Prisma.LinkComunidadeScalarWhereInput;
    data: Prisma.XOR<Prisma.LinkComunidadeUpdateManyMutationInput, Prisma.LinkComunidadeUncheckedUpdateManyWithoutComunidadeInput>;
};
export type LinkComunidadeCreateWithoutLiderInput = {
    id?: string;
    slug: string;
    ativo?: boolean;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutLinksComunidadeInput;
    comunidade: Prisma.ComunidadeCreateNestedOneWithoutLinksComunidadeInput;
    inscricoesStartup?: Prisma.InscricaoStartupCreateNestedManyWithoutLinkComunidadeInput;
};
export type LinkComunidadeUncheckedCreateWithoutLiderInput = {
    id?: string;
    edicaoId: string;
    comunidadeId: string;
    slug: string;
    ativo?: boolean;
    createdAt?: Date | string;
    inscricoesStartup?: Prisma.InscricaoStartupUncheckedCreateNestedManyWithoutLinkComunidadeInput;
};
export type LinkComunidadeCreateOrConnectWithoutLiderInput = {
    where: Prisma.LinkComunidadeWhereUniqueInput;
    create: Prisma.XOR<Prisma.LinkComunidadeCreateWithoutLiderInput, Prisma.LinkComunidadeUncheckedCreateWithoutLiderInput>;
};
export type LinkComunidadeCreateManyLiderInputEnvelope = {
    data: Prisma.LinkComunidadeCreateManyLiderInput | Prisma.LinkComunidadeCreateManyLiderInput[];
    skipDuplicates?: boolean;
};
export type LinkComunidadeUpsertWithWhereUniqueWithoutLiderInput = {
    where: Prisma.LinkComunidadeWhereUniqueInput;
    update: Prisma.XOR<Prisma.LinkComunidadeUpdateWithoutLiderInput, Prisma.LinkComunidadeUncheckedUpdateWithoutLiderInput>;
    create: Prisma.XOR<Prisma.LinkComunidadeCreateWithoutLiderInput, Prisma.LinkComunidadeUncheckedCreateWithoutLiderInput>;
};
export type LinkComunidadeUpdateWithWhereUniqueWithoutLiderInput = {
    where: Prisma.LinkComunidadeWhereUniqueInput;
    data: Prisma.XOR<Prisma.LinkComunidadeUpdateWithoutLiderInput, Prisma.LinkComunidadeUncheckedUpdateWithoutLiderInput>;
};
export type LinkComunidadeUpdateManyWithWhereWithoutLiderInput = {
    where: Prisma.LinkComunidadeScalarWhereInput;
    data: Prisma.XOR<Prisma.LinkComunidadeUpdateManyMutationInput, Prisma.LinkComunidadeUncheckedUpdateManyWithoutLiderInput>;
};
export type LinkComunidadeCreateWithoutInscricoesStartupInput = {
    id?: string;
    slug: string;
    ativo?: boolean;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutLinksComunidadeInput;
    comunidade: Prisma.ComunidadeCreateNestedOneWithoutLinksComunidadeInput;
    lider: Prisma.LiderCreateNestedOneWithoutLinksComunidadeInput;
};
export type LinkComunidadeUncheckedCreateWithoutInscricoesStartupInput = {
    id?: string;
    edicaoId: string;
    comunidadeId: string;
    liderId: string;
    slug: string;
    ativo?: boolean;
    createdAt?: Date | string;
};
export type LinkComunidadeCreateOrConnectWithoutInscricoesStartupInput = {
    where: Prisma.LinkComunidadeWhereUniqueInput;
    create: Prisma.XOR<Prisma.LinkComunidadeCreateWithoutInscricoesStartupInput, Prisma.LinkComunidadeUncheckedCreateWithoutInscricoesStartupInput>;
};
export type LinkComunidadeUpsertWithoutInscricoesStartupInput = {
    update: Prisma.XOR<Prisma.LinkComunidadeUpdateWithoutInscricoesStartupInput, Prisma.LinkComunidadeUncheckedUpdateWithoutInscricoesStartupInput>;
    create: Prisma.XOR<Prisma.LinkComunidadeCreateWithoutInscricoesStartupInput, Prisma.LinkComunidadeUncheckedCreateWithoutInscricoesStartupInput>;
    where?: Prisma.LinkComunidadeWhereInput;
};
export type LinkComunidadeUpdateToOneWithWhereWithoutInscricoesStartupInput = {
    where?: Prisma.LinkComunidadeWhereInput;
    data: Prisma.XOR<Prisma.LinkComunidadeUpdateWithoutInscricoesStartupInput, Prisma.LinkComunidadeUncheckedUpdateWithoutInscricoesStartupInput>;
};
export type LinkComunidadeUpdateWithoutInscricoesStartupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutLinksComunidadeNestedInput;
    comunidade?: Prisma.ComunidadeUpdateOneRequiredWithoutLinksComunidadeNestedInput;
    lider?: Prisma.LiderUpdateOneRequiredWithoutLinksComunidadeNestedInput;
};
export type LinkComunidadeUncheckedUpdateWithoutInscricoesStartupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    liderId?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LinkComunidadeCreateManyEdicaoInput = {
    id?: string;
    comunidadeId: string;
    liderId: string;
    slug: string;
    ativo?: boolean;
    createdAt?: Date | string;
};
export type LinkComunidadeUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comunidade?: Prisma.ComunidadeUpdateOneRequiredWithoutLinksComunidadeNestedInput;
    lider?: Prisma.LiderUpdateOneRequiredWithoutLinksComunidadeNestedInput;
    inscricoesStartup?: Prisma.InscricaoStartupUpdateManyWithoutLinkComunidadeNestedInput;
};
export type LinkComunidadeUncheckedUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    liderId?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inscricoesStartup?: Prisma.InscricaoStartupUncheckedUpdateManyWithoutLinkComunidadeNestedInput;
};
export type LinkComunidadeUncheckedUpdateManyWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    liderId?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LinkComunidadeCreateManyComunidadeInput = {
    id?: string;
    edicaoId: string;
    liderId: string;
    slug: string;
    ativo?: boolean;
    createdAt?: Date | string;
};
export type LinkComunidadeUpdateWithoutComunidadeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutLinksComunidadeNestedInput;
    lider?: Prisma.LiderUpdateOneRequiredWithoutLinksComunidadeNestedInput;
    inscricoesStartup?: Prisma.InscricaoStartupUpdateManyWithoutLinkComunidadeNestedInput;
};
export type LinkComunidadeUncheckedUpdateWithoutComunidadeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    liderId?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inscricoesStartup?: Prisma.InscricaoStartupUncheckedUpdateManyWithoutLinkComunidadeNestedInput;
};
export type LinkComunidadeUncheckedUpdateManyWithoutComunidadeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    liderId?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LinkComunidadeCreateManyLiderInput = {
    id?: string;
    edicaoId: string;
    comunidadeId: string;
    slug: string;
    ativo?: boolean;
    createdAt?: Date | string;
};
export type LinkComunidadeUpdateWithoutLiderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutLinksComunidadeNestedInput;
    comunidade?: Prisma.ComunidadeUpdateOneRequiredWithoutLinksComunidadeNestedInput;
    inscricoesStartup?: Prisma.InscricaoStartupUpdateManyWithoutLinkComunidadeNestedInput;
};
export type LinkComunidadeUncheckedUpdateWithoutLiderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inscricoesStartup?: Prisma.InscricaoStartupUncheckedUpdateManyWithoutLinkComunidadeNestedInput;
};
export type LinkComunidadeUncheckedUpdateManyWithoutLiderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LinkComunidadeCountOutputType = {
    inscricoesStartup: number;
};
export type LinkComunidadeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    inscricoesStartup?: boolean | LinkComunidadeCountOutputTypeCountInscricoesStartupArgs;
};
export type LinkComunidadeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LinkComunidadeCountOutputTypeSelect<ExtArgs> | null;
};
export type LinkComunidadeCountOutputTypeCountInscricoesStartupArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InscricaoStartupWhereInput;
};
export type LinkComunidadeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    comunidadeId?: boolean;
    liderId?: boolean;
    slug?: boolean;
    ativo?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    comunidade?: boolean | Prisma.ComunidadeDefaultArgs<ExtArgs>;
    lider?: boolean | Prisma.LiderDefaultArgs<ExtArgs>;
    inscricoesStartup?: boolean | Prisma.LinkComunidade$inscricoesStartupArgs<ExtArgs>;
    _count?: boolean | Prisma.LinkComunidadeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["linkComunidade"]>;
export type LinkComunidadeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    comunidadeId?: boolean;
    liderId?: boolean;
    slug?: boolean;
    ativo?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    comunidade?: boolean | Prisma.ComunidadeDefaultArgs<ExtArgs>;
    lider?: boolean | Prisma.LiderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["linkComunidade"]>;
export type LinkComunidadeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    comunidadeId?: boolean;
    liderId?: boolean;
    slug?: boolean;
    ativo?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    comunidade?: boolean | Prisma.ComunidadeDefaultArgs<ExtArgs>;
    lider?: boolean | Prisma.LiderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["linkComunidade"]>;
export type LinkComunidadeSelectScalar = {
    id?: boolean;
    edicaoId?: boolean;
    comunidadeId?: boolean;
    liderId?: boolean;
    slug?: boolean;
    ativo?: boolean;
    createdAt?: boolean;
};
export type LinkComunidadeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "edicaoId" | "comunidadeId" | "liderId" | "slug" | "ativo" | "createdAt", ExtArgs["result"]["linkComunidade"]>;
export type LinkComunidadeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    comunidade?: boolean | Prisma.ComunidadeDefaultArgs<ExtArgs>;
    lider?: boolean | Prisma.LiderDefaultArgs<ExtArgs>;
    inscricoesStartup?: boolean | Prisma.LinkComunidade$inscricoesStartupArgs<ExtArgs>;
    _count?: boolean | Prisma.LinkComunidadeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type LinkComunidadeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    comunidade?: boolean | Prisma.ComunidadeDefaultArgs<ExtArgs>;
    lider?: boolean | Prisma.LiderDefaultArgs<ExtArgs>;
};
export type LinkComunidadeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    comunidade?: boolean | Prisma.ComunidadeDefaultArgs<ExtArgs>;
    lider?: boolean | Prisma.LiderDefaultArgs<ExtArgs>;
};
export type $LinkComunidadePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LinkComunidade";
    objects: {
        edicao: Prisma.$EdicaoPayload<ExtArgs>;
        comunidade: Prisma.$ComunidadePayload<ExtArgs>;
        lider: Prisma.$LiderPayload<ExtArgs>;
        inscricoesStartup: Prisma.$InscricaoStartupPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        edicaoId: string;
        comunidadeId: string;
        liderId: string;
        slug: string;
        ativo: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["linkComunidade"]>;
    composites: {};
};
export type LinkComunidadeGetPayload<S extends boolean | null | undefined | LinkComunidadeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LinkComunidadePayload, S>;
export type LinkComunidadeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LinkComunidadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LinkComunidadeCountAggregateInputType | true;
};
export interface LinkComunidadeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LinkComunidade'];
        meta: {
            name: 'LinkComunidade';
        };
    };
    findUnique<T extends LinkComunidadeFindUniqueArgs>(args: Prisma.SelectSubset<T, LinkComunidadeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LinkComunidadeClient<runtime.Types.Result.GetResult<Prisma.$LinkComunidadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LinkComunidadeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LinkComunidadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LinkComunidadeClient<runtime.Types.Result.GetResult<Prisma.$LinkComunidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LinkComunidadeFindFirstArgs>(args?: Prisma.SelectSubset<T, LinkComunidadeFindFirstArgs<ExtArgs>>): Prisma.Prisma__LinkComunidadeClient<runtime.Types.Result.GetResult<Prisma.$LinkComunidadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LinkComunidadeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LinkComunidadeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LinkComunidadeClient<runtime.Types.Result.GetResult<Prisma.$LinkComunidadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LinkComunidadeFindManyArgs>(args?: Prisma.SelectSubset<T, LinkComunidadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LinkComunidadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LinkComunidadeCreateArgs>(args: Prisma.SelectSubset<T, LinkComunidadeCreateArgs<ExtArgs>>): Prisma.Prisma__LinkComunidadeClient<runtime.Types.Result.GetResult<Prisma.$LinkComunidadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LinkComunidadeCreateManyArgs>(args?: Prisma.SelectSubset<T, LinkComunidadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LinkComunidadeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LinkComunidadeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LinkComunidadePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LinkComunidadeDeleteArgs>(args: Prisma.SelectSubset<T, LinkComunidadeDeleteArgs<ExtArgs>>): Prisma.Prisma__LinkComunidadeClient<runtime.Types.Result.GetResult<Prisma.$LinkComunidadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LinkComunidadeUpdateArgs>(args: Prisma.SelectSubset<T, LinkComunidadeUpdateArgs<ExtArgs>>): Prisma.Prisma__LinkComunidadeClient<runtime.Types.Result.GetResult<Prisma.$LinkComunidadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LinkComunidadeDeleteManyArgs>(args?: Prisma.SelectSubset<T, LinkComunidadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LinkComunidadeUpdateManyArgs>(args: Prisma.SelectSubset<T, LinkComunidadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LinkComunidadeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LinkComunidadeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LinkComunidadePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LinkComunidadeUpsertArgs>(args: Prisma.SelectSubset<T, LinkComunidadeUpsertArgs<ExtArgs>>): Prisma.Prisma__LinkComunidadeClient<runtime.Types.Result.GetResult<Prisma.$LinkComunidadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LinkComunidadeCountArgs>(args?: Prisma.Subset<T, LinkComunidadeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LinkComunidadeCountAggregateOutputType> : number>;
    aggregate<T extends LinkComunidadeAggregateArgs>(args: Prisma.Subset<T, LinkComunidadeAggregateArgs>): Prisma.PrismaPromise<GetLinkComunidadeAggregateType<T>>;
    groupBy<T extends LinkComunidadeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LinkComunidadeGroupByArgs['orderBy'];
    } : {
        orderBy?: LinkComunidadeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LinkComunidadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkComunidadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LinkComunidadeFieldRefs;
}
export interface Prisma__LinkComunidadeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    edicao<T extends Prisma.EdicaoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EdicaoDefaultArgs<ExtArgs>>): Prisma.Prisma__EdicaoClient<runtime.Types.Result.GetResult<Prisma.$EdicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    comunidade<T extends Prisma.ComunidadeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ComunidadeDefaultArgs<ExtArgs>>): Prisma.Prisma__ComunidadeClient<runtime.Types.Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    lider<T extends Prisma.LiderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LiderDefaultArgs<ExtArgs>>): Prisma.Prisma__LiderClient<runtime.Types.Result.GetResult<Prisma.$LiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    inscricoesStartup<T extends Prisma.LinkComunidade$inscricoesStartupArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LinkComunidade$inscricoesStartupArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InscricaoStartupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LinkComunidadeFieldRefs {
    readonly id: Prisma.FieldRef<"LinkComunidade", 'String'>;
    readonly edicaoId: Prisma.FieldRef<"LinkComunidade", 'String'>;
    readonly comunidadeId: Prisma.FieldRef<"LinkComunidade", 'String'>;
    readonly liderId: Prisma.FieldRef<"LinkComunidade", 'String'>;
    readonly slug: Prisma.FieldRef<"LinkComunidade", 'String'>;
    readonly ativo: Prisma.FieldRef<"LinkComunidade", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"LinkComunidade", 'DateTime'>;
}
export type LinkComunidadeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LinkComunidadeSelect<ExtArgs> | null;
    omit?: Prisma.LinkComunidadeOmit<ExtArgs> | null;
    include?: Prisma.LinkComunidadeInclude<ExtArgs> | null;
    where: Prisma.LinkComunidadeWhereUniqueInput;
};
export type LinkComunidadeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LinkComunidadeSelect<ExtArgs> | null;
    omit?: Prisma.LinkComunidadeOmit<ExtArgs> | null;
    include?: Prisma.LinkComunidadeInclude<ExtArgs> | null;
    where: Prisma.LinkComunidadeWhereUniqueInput;
};
export type LinkComunidadeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LinkComunidadeSelect<ExtArgs> | null;
    omit?: Prisma.LinkComunidadeOmit<ExtArgs> | null;
    include?: Prisma.LinkComunidadeInclude<ExtArgs> | null;
    where?: Prisma.LinkComunidadeWhereInput;
    orderBy?: Prisma.LinkComunidadeOrderByWithRelationInput | Prisma.LinkComunidadeOrderByWithRelationInput[];
    cursor?: Prisma.LinkComunidadeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LinkComunidadeScalarFieldEnum | Prisma.LinkComunidadeScalarFieldEnum[];
};
export type LinkComunidadeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LinkComunidadeSelect<ExtArgs> | null;
    omit?: Prisma.LinkComunidadeOmit<ExtArgs> | null;
    include?: Prisma.LinkComunidadeInclude<ExtArgs> | null;
    where?: Prisma.LinkComunidadeWhereInput;
    orderBy?: Prisma.LinkComunidadeOrderByWithRelationInput | Prisma.LinkComunidadeOrderByWithRelationInput[];
    cursor?: Prisma.LinkComunidadeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LinkComunidadeScalarFieldEnum | Prisma.LinkComunidadeScalarFieldEnum[];
};
export type LinkComunidadeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LinkComunidadeSelect<ExtArgs> | null;
    omit?: Prisma.LinkComunidadeOmit<ExtArgs> | null;
    include?: Prisma.LinkComunidadeInclude<ExtArgs> | null;
    where?: Prisma.LinkComunidadeWhereInput;
    orderBy?: Prisma.LinkComunidadeOrderByWithRelationInput | Prisma.LinkComunidadeOrderByWithRelationInput[];
    cursor?: Prisma.LinkComunidadeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LinkComunidadeScalarFieldEnum | Prisma.LinkComunidadeScalarFieldEnum[];
};
export type LinkComunidadeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LinkComunidadeSelect<ExtArgs> | null;
    omit?: Prisma.LinkComunidadeOmit<ExtArgs> | null;
    include?: Prisma.LinkComunidadeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LinkComunidadeCreateInput, Prisma.LinkComunidadeUncheckedCreateInput>;
};
export type LinkComunidadeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LinkComunidadeCreateManyInput | Prisma.LinkComunidadeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LinkComunidadeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LinkComunidadeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LinkComunidadeOmit<ExtArgs> | null;
    data: Prisma.LinkComunidadeCreateManyInput | Prisma.LinkComunidadeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LinkComunidadeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LinkComunidadeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LinkComunidadeSelect<ExtArgs> | null;
    omit?: Prisma.LinkComunidadeOmit<ExtArgs> | null;
    include?: Prisma.LinkComunidadeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LinkComunidadeUpdateInput, Prisma.LinkComunidadeUncheckedUpdateInput>;
    where: Prisma.LinkComunidadeWhereUniqueInput;
};
export type LinkComunidadeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LinkComunidadeUpdateManyMutationInput, Prisma.LinkComunidadeUncheckedUpdateManyInput>;
    where?: Prisma.LinkComunidadeWhereInput;
    limit?: number;
};
export type LinkComunidadeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LinkComunidadeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LinkComunidadeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LinkComunidadeUpdateManyMutationInput, Prisma.LinkComunidadeUncheckedUpdateManyInput>;
    where?: Prisma.LinkComunidadeWhereInput;
    limit?: number;
    include?: Prisma.LinkComunidadeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LinkComunidadeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LinkComunidadeSelect<ExtArgs> | null;
    omit?: Prisma.LinkComunidadeOmit<ExtArgs> | null;
    include?: Prisma.LinkComunidadeInclude<ExtArgs> | null;
    where: Prisma.LinkComunidadeWhereUniqueInput;
    create: Prisma.XOR<Prisma.LinkComunidadeCreateInput, Prisma.LinkComunidadeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LinkComunidadeUpdateInput, Prisma.LinkComunidadeUncheckedUpdateInput>;
};
export type LinkComunidadeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LinkComunidadeSelect<ExtArgs> | null;
    omit?: Prisma.LinkComunidadeOmit<ExtArgs> | null;
    include?: Prisma.LinkComunidadeInclude<ExtArgs> | null;
    where: Prisma.LinkComunidadeWhereUniqueInput;
};
export type LinkComunidadeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LinkComunidadeWhereInput;
    limit?: number;
};
export type LinkComunidade$inscricoesStartupArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InscricaoStartupSelect<ExtArgs> | null;
    omit?: Prisma.InscricaoStartupOmit<ExtArgs> | null;
    include?: Prisma.InscricaoStartupInclude<ExtArgs> | null;
    where?: Prisma.InscricaoStartupWhereInput;
    orderBy?: Prisma.InscricaoStartupOrderByWithRelationInput | Prisma.InscricaoStartupOrderByWithRelationInput[];
    cursor?: Prisma.InscricaoStartupWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InscricaoStartupScalarFieldEnum | Prisma.InscricaoStartupScalarFieldEnum[];
};
export type LinkComunidadeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LinkComunidadeSelect<ExtArgs> | null;
    omit?: Prisma.LinkComunidadeOmit<ExtArgs> | null;
    include?: Prisma.LinkComunidadeInclude<ExtArgs> | null;
};
