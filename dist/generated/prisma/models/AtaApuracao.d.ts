import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type AtaApuracaoModel = runtime.Types.Result.DefaultSelection<Prisma.$AtaApuracaoPayload>;
export type AggregateAtaApuracao = {
    _count: AtaApuracaoCountAggregateOutputType | null;
    _min: AtaApuracaoMinAggregateOutputType | null;
    _max: AtaApuracaoMaxAggregateOutputType | null;
};
export type AtaApuracaoMinAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    conteudoMd: string | null;
    publicadaEm: Date | null;
    createdAt: Date | null;
};
export type AtaApuracaoMaxAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    conteudoMd: string | null;
    publicadaEm: Date | null;
    createdAt: Date | null;
};
export type AtaApuracaoCountAggregateOutputType = {
    id: number;
    edicaoId: number;
    conteudoMd: number;
    publicadaEm: number;
    createdAt: number;
    _all: number;
};
export type AtaApuracaoMinAggregateInputType = {
    id?: true;
    edicaoId?: true;
    conteudoMd?: true;
    publicadaEm?: true;
    createdAt?: true;
};
export type AtaApuracaoMaxAggregateInputType = {
    id?: true;
    edicaoId?: true;
    conteudoMd?: true;
    publicadaEm?: true;
    createdAt?: true;
};
export type AtaApuracaoCountAggregateInputType = {
    id?: true;
    edicaoId?: true;
    conteudoMd?: true;
    publicadaEm?: true;
    createdAt?: true;
    _all?: true;
};
export type AtaApuracaoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AtaApuracaoWhereInput;
    orderBy?: Prisma.AtaApuracaoOrderByWithRelationInput | Prisma.AtaApuracaoOrderByWithRelationInput[];
    cursor?: Prisma.AtaApuracaoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AtaApuracaoCountAggregateInputType;
    _min?: AtaApuracaoMinAggregateInputType;
    _max?: AtaApuracaoMaxAggregateInputType;
};
export type GetAtaApuracaoAggregateType<T extends AtaApuracaoAggregateArgs> = {
    [P in keyof T & keyof AggregateAtaApuracao]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAtaApuracao[P]> : Prisma.GetScalarType<T[P], AggregateAtaApuracao[P]>;
};
export type AtaApuracaoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AtaApuracaoWhereInput;
    orderBy?: Prisma.AtaApuracaoOrderByWithAggregationInput | Prisma.AtaApuracaoOrderByWithAggregationInput[];
    by: Prisma.AtaApuracaoScalarFieldEnum[] | Prisma.AtaApuracaoScalarFieldEnum;
    having?: Prisma.AtaApuracaoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AtaApuracaoCountAggregateInputType | true;
    _min?: AtaApuracaoMinAggregateInputType;
    _max?: AtaApuracaoMaxAggregateInputType;
};
export type AtaApuracaoGroupByOutputType = {
    id: string;
    edicaoId: string;
    conteudoMd: string;
    publicadaEm: Date | null;
    createdAt: Date;
    _count: AtaApuracaoCountAggregateOutputType | null;
    _min: AtaApuracaoMinAggregateOutputType | null;
    _max: AtaApuracaoMaxAggregateOutputType | null;
};
export type GetAtaApuracaoGroupByPayload<T extends AtaApuracaoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AtaApuracaoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AtaApuracaoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AtaApuracaoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AtaApuracaoGroupByOutputType[P]>;
}>>;
export type AtaApuracaoWhereInput = {
    AND?: Prisma.AtaApuracaoWhereInput | Prisma.AtaApuracaoWhereInput[];
    OR?: Prisma.AtaApuracaoWhereInput[];
    NOT?: Prisma.AtaApuracaoWhereInput | Prisma.AtaApuracaoWhereInput[];
    id?: Prisma.StringFilter<"AtaApuracao"> | string;
    edicaoId?: Prisma.StringFilter<"AtaApuracao"> | string;
    conteudoMd?: Prisma.StringFilter<"AtaApuracao"> | string;
    publicadaEm?: Prisma.DateTimeNullableFilter<"AtaApuracao"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AtaApuracao"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
};
export type AtaApuracaoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    conteudoMd?: Prisma.SortOrder;
    publicadaEm?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    edicao?: Prisma.EdicaoOrderByWithRelationInput;
};
export type AtaApuracaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AtaApuracaoWhereInput | Prisma.AtaApuracaoWhereInput[];
    OR?: Prisma.AtaApuracaoWhereInput[];
    NOT?: Prisma.AtaApuracaoWhereInput | Prisma.AtaApuracaoWhereInput[];
    edicaoId?: Prisma.StringFilter<"AtaApuracao"> | string;
    conteudoMd?: Prisma.StringFilter<"AtaApuracao"> | string;
    publicadaEm?: Prisma.DateTimeNullableFilter<"AtaApuracao"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AtaApuracao"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
}, "id">;
export type AtaApuracaoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    conteudoMd?: Prisma.SortOrder;
    publicadaEm?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AtaApuracaoCountOrderByAggregateInput;
    _max?: Prisma.AtaApuracaoMaxOrderByAggregateInput;
    _min?: Prisma.AtaApuracaoMinOrderByAggregateInput;
};
export type AtaApuracaoScalarWhereWithAggregatesInput = {
    AND?: Prisma.AtaApuracaoScalarWhereWithAggregatesInput | Prisma.AtaApuracaoScalarWhereWithAggregatesInput[];
    OR?: Prisma.AtaApuracaoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AtaApuracaoScalarWhereWithAggregatesInput | Prisma.AtaApuracaoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AtaApuracao"> | string;
    edicaoId?: Prisma.StringWithAggregatesFilter<"AtaApuracao"> | string;
    conteudoMd?: Prisma.StringWithAggregatesFilter<"AtaApuracao"> | string;
    publicadaEm?: Prisma.DateTimeNullableWithAggregatesFilter<"AtaApuracao"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AtaApuracao"> | Date | string;
};
export type AtaApuracaoCreateInput = {
    id?: string;
    conteudoMd: string;
    publicadaEm?: Date | string | null;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutAtasInput;
};
export type AtaApuracaoUncheckedCreateInput = {
    id?: string;
    edicaoId: string;
    conteudoMd: string;
    publicadaEm?: Date | string | null;
    createdAt?: Date | string;
};
export type AtaApuracaoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    conteudoMd?: Prisma.StringFieldUpdateOperationsInput | string;
    publicadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutAtasNestedInput;
};
export type AtaApuracaoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    conteudoMd?: Prisma.StringFieldUpdateOperationsInput | string;
    publicadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AtaApuracaoCreateManyInput = {
    id?: string;
    edicaoId: string;
    conteudoMd: string;
    publicadaEm?: Date | string | null;
    createdAt?: Date | string;
};
export type AtaApuracaoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    conteudoMd?: Prisma.StringFieldUpdateOperationsInput | string;
    publicadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AtaApuracaoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    conteudoMd?: Prisma.StringFieldUpdateOperationsInput | string;
    publicadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AtaApuracaoListRelationFilter = {
    every?: Prisma.AtaApuracaoWhereInput;
    some?: Prisma.AtaApuracaoWhereInput;
    none?: Prisma.AtaApuracaoWhereInput;
};
export type AtaApuracaoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AtaApuracaoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    conteudoMd?: Prisma.SortOrder;
    publicadaEm?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AtaApuracaoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    conteudoMd?: Prisma.SortOrder;
    publicadaEm?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AtaApuracaoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    conteudoMd?: Prisma.SortOrder;
    publicadaEm?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AtaApuracaoCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.AtaApuracaoCreateWithoutEdicaoInput, Prisma.AtaApuracaoUncheckedCreateWithoutEdicaoInput> | Prisma.AtaApuracaoCreateWithoutEdicaoInput[] | Prisma.AtaApuracaoUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.AtaApuracaoCreateOrConnectWithoutEdicaoInput | Prisma.AtaApuracaoCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.AtaApuracaoCreateManyEdicaoInputEnvelope;
    connect?: Prisma.AtaApuracaoWhereUniqueInput | Prisma.AtaApuracaoWhereUniqueInput[];
};
export type AtaApuracaoUncheckedCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.AtaApuracaoCreateWithoutEdicaoInput, Prisma.AtaApuracaoUncheckedCreateWithoutEdicaoInput> | Prisma.AtaApuracaoCreateWithoutEdicaoInput[] | Prisma.AtaApuracaoUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.AtaApuracaoCreateOrConnectWithoutEdicaoInput | Prisma.AtaApuracaoCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.AtaApuracaoCreateManyEdicaoInputEnvelope;
    connect?: Prisma.AtaApuracaoWhereUniqueInput | Prisma.AtaApuracaoWhereUniqueInput[];
};
export type AtaApuracaoUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.AtaApuracaoCreateWithoutEdicaoInput, Prisma.AtaApuracaoUncheckedCreateWithoutEdicaoInput> | Prisma.AtaApuracaoCreateWithoutEdicaoInput[] | Prisma.AtaApuracaoUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.AtaApuracaoCreateOrConnectWithoutEdicaoInput | Prisma.AtaApuracaoCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.AtaApuracaoUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.AtaApuracaoUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.AtaApuracaoCreateManyEdicaoInputEnvelope;
    set?: Prisma.AtaApuracaoWhereUniqueInput | Prisma.AtaApuracaoWhereUniqueInput[];
    disconnect?: Prisma.AtaApuracaoWhereUniqueInput | Prisma.AtaApuracaoWhereUniqueInput[];
    delete?: Prisma.AtaApuracaoWhereUniqueInput | Prisma.AtaApuracaoWhereUniqueInput[];
    connect?: Prisma.AtaApuracaoWhereUniqueInput | Prisma.AtaApuracaoWhereUniqueInput[];
    update?: Prisma.AtaApuracaoUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.AtaApuracaoUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.AtaApuracaoUpdateManyWithWhereWithoutEdicaoInput | Prisma.AtaApuracaoUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.AtaApuracaoScalarWhereInput | Prisma.AtaApuracaoScalarWhereInput[];
};
export type AtaApuracaoUncheckedUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.AtaApuracaoCreateWithoutEdicaoInput, Prisma.AtaApuracaoUncheckedCreateWithoutEdicaoInput> | Prisma.AtaApuracaoCreateWithoutEdicaoInput[] | Prisma.AtaApuracaoUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.AtaApuracaoCreateOrConnectWithoutEdicaoInput | Prisma.AtaApuracaoCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.AtaApuracaoUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.AtaApuracaoUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.AtaApuracaoCreateManyEdicaoInputEnvelope;
    set?: Prisma.AtaApuracaoWhereUniqueInput | Prisma.AtaApuracaoWhereUniqueInput[];
    disconnect?: Prisma.AtaApuracaoWhereUniqueInput | Prisma.AtaApuracaoWhereUniqueInput[];
    delete?: Prisma.AtaApuracaoWhereUniqueInput | Prisma.AtaApuracaoWhereUniqueInput[];
    connect?: Prisma.AtaApuracaoWhereUniqueInput | Prisma.AtaApuracaoWhereUniqueInput[];
    update?: Prisma.AtaApuracaoUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.AtaApuracaoUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.AtaApuracaoUpdateManyWithWhereWithoutEdicaoInput | Prisma.AtaApuracaoUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.AtaApuracaoScalarWhereInput | Prisma.AtaApuracaoScalarWhereInput[];
};
export type AtaApuracaoCreateWithoutEdicaoInput = {
    id?: string;
    conteudoMd: string;
    publicadaEm?: Date | string | null;
    createdAt?: Date | string;
};
export type AtaApuracaoUncheckedCreateWithoutEdicaoInput = {
    id?: string;
    conteudoMd: string;
    publicadaEm?: Date | string | null;
    createdAt?: Date | string;
};
export type AtaApuracaoCreateOrConnectWithoutEdicaoInput = {
    where: Prisma.AtaApuracaoWhereUniqueInput;
    create: Prisma.XOR<Prisma.AtaApuracaoCreateWithoutEdicaoInput, Prisma.AtaApuracaoUncheckedCreateWithoutEdicaoInput>;
};
export type AtaApuracaoCreateManyEdicaoInputEnvelope = {
    data: Prisma.AtaApuracaoCreateManyEdicaoInput | Prisma.AtaApuracaoCreateManyEdicaoInput[];
    skipDuplicates?: boolean;
};
export type AtaApuracaoUpsertWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.AtaApuracaoWhereUniqueInput;
    update: Prisma.XOR<Prisma.AtaApuracaoUpdateWithoutEdicaoInput, Prisma.AtaApuracaoUncheckedUpdateWithoutEdicaoInput>;
    create: Prisma.XOR<Prisma.AtaApuracaoCreateWithoutEdicaoInput, Prisma.AtaApuracaoUncheckedCreateWithoutEdicaoInput>;
};
export type AtaApuracaoUpdateWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.AtaApuracaoWhereUniqueInput;
    data: Prisma.XOR<Prisma.AtaApuracaoUpdateWithoutEdicaoInput, Prisma.AtaApuracaoUncheckedUpdateWithoutEdicaoInput>;
};
export type AtaApuracaoUpdateManyWithWhereWithoutEdicaoInput = {
    where: Prisma.AtaApuracaoScalarWhereInput;
    data: Prisma.XOR<Prisma.AtaApuracaoUpdateManyMutationInput, Prisma.AtaApuracaoUncheckedUpdateManyWithoutEdicaoInput>;
};
export type AtaApuracaoScalarWhereInput = {
    AND?: Prisma.AtaApuracaoScalarWhereInput | Prisma.AtaApuracaoScalarWhereInput[];
    OR?: Prisma.AtaApuracaoScalarWhereInput[];
    NOT?: Prisma.AtaApuracaoScalarWhereInput | Prisma.AtaApuracaoScalarWhereInput[];
    id?: Prisma.StringFilter<"AtaApuracao"> | string;
    edicaoId?: Prisma.StringFilter<"AtaApuracao"> | string;
    conteudoMd?: Prisma.StringFilter<"AtaApuracao"> | string;
    publicadaEm?: Prisma.DateTimeNullableFilter<"AtaApuracao"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"AtaApuracao"> | Date | string;
};
export type AtaApuracaoCreateManyEdicaoInput = {
    id?: string;
    conteudoMd: string;
    publicadaEm?: Date | string | null;
    createdAt?: Date | string;
};
export type AtaApuracaoUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    conteudoMd?: Prisma.StringFieldUpdateOperationsInput | string;
    publicadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AtaApuracaoUncheckedUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    conteudoMd?: Prisma.StringFieldUpdateOperationsInput | string;
    publicadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AtaApuracaoUncheckedUpdateManyWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    conteudoMd?: Prisma.StringFieldUpdateOperationsInput | string;
    publicadaEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AtaApuracaoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    conteudoMd?: boolean;
    publicadaEm?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ataApuracao"]>;
export type AtaApuracaoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    conteudoMd?: boolean;
    publicadaEm?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ataApuracao"]>;
export type AtaApuracaoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    conteudoMd?: boolean;
    publicadaEm?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ataApuracao"]>;
export type AtaApuracaoSelectScalar = {
    id?: boolean;
    edicaoId?: boolean;
    conteudoMd?: boolean;
    publicadaEm?: boolean;
    createdAt?: boolean;
};
export type AtaApuracaoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "edicaoId" | "conteudoMd" | "publicadaEm" | "createdAt", ExtArgs["result"]["ataApuracao"]>;
export type AtaApuracaoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
};
export type AtaApuracaoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
};
export type AtaApuracaoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
};
export type $AtaApuracaoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AtaApuracao";
    objects: {
        edicao: Prisma.$EdicaoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        edicaoId: string;
        conteudoMd: string;
        publicadaEm: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["ataApuracao"]>;
    composites: {};
};
export type AtaApuracaoGetPayload<S extends boolean | null | undefined | AtaApuracaoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AtaApuracaoPayload, S>;
export type AtaApuracaoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AtaApuracaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AtaApuracaoCountAggregateInputType | true;
};
export interface AtaApuracaoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AtaApuracao'];
        meta: {
            name: 'AtaApuracao';
        };
    };
    findUnique<T extends AtaApuracaoFindUniqueArgs>(args: Prisma.SelectSubset<T, AtaApuracaoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AtaApuracaoClient<runtime.Types.Result.GetResult<Prisma.$AtaApuracaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AtaApuracaoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AtaApuracaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AtaApuracaoClient<runtime.Types.Result.GetResult<Prisma.$AtaApuracaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AtaApuracaoFindFirstArgs>(args?: Prisma.SelectSubset<T, AtaApuracaoFindFirstArgs<ExtArgs>>): Prisma.Prisma__AtaApuracaoClient<runtime.Types.Result.GetResult<Prisma.$AtaApuracaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AtaApuracaoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AtaApuracaoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AtaApuracaoClient<runtime.Types.Result.GetResult<Prisma.$AtaApuracaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AtaApuracaoFindManyArgs>(args?: Prisma.SelectSubset<T, AtaApuracaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AtaApuracaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AtaApuracaoCreateArgs>(args: Prisma.SelectSubset<T, AtaApuracaoCreateArgs<ExtArgs>>): Prisma.Prisma__AtaApuracaoClient<runtime.Types.Result.GetResult<Prisma.$AtaApuracaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AtaApuracaoCreateManyArgs>(args?: Prisma.SelectSubset<T, AtaApuracaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AtaApuracaoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AtaApuracaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AtaApuracaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AtaApuracaoDeleteArgs>(args: Prisma.SelectSubset<T, AtaApuracaoDeleteArgs<ExtArgs>>): Prisma.Prisma__AtaApuracaoClient<runtime.Types.Result.GetResult<Prisma.$AtaApuracaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AtaApuracaoUpdateArgs>(args: Prisma.SelectSubset<T, AtaApuracaoUpdateArgs<ExtArgs>>): Prisma.Prisma__AtaApuracaoClient<runtime.Types.Result.GetResult<Prisma.$AtaApuracaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AtaApuracaoDeleteManyArgs>(args?: Prisma.SelectSubset<T, AtaApuracaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AtaApuracaoUpdateManyArgs>(args: Prisma.SelectSubset<T, AtaApuracaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AtaApuracaoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AtaApuracaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AtaApuracaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AtaApuracaoUpsertArgs>(args: Prisma.SelectSubset<T, AtaApuracaoUpsertArgs<ExtArgs>>): Prisma.Prisma__AtaApuracaoClient<runtime.Types.Result.GetResult<Prisma.$AtaApuracaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AtaApuracaoCountArgs>(args?: Prisma.Subset<T, AtaApuracaoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AtaApuracaoCountAggregateOutputType> : number>;
    aggregate<T extends AtaApuracaoAggregateArgs>(args: Prisma.Subset<T, AtaApuracaoAggregateArgs>): Prisma.PrismaPromise<GetAtaApuracaoAggregateType<T>>;
    groupBy<T extends AtaApuracaoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AtaApuracaoGroupByArgs['orderBy'];
    } : {
        orderBy?: AtaApuracaoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AtaApuracaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtaApuracaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AtaApuracaoFieldRefs;
}
export interface Prisma__AtaApuracaoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    edicao<T extends Prisma.EdicaoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EdicaoDefaultArgs<ExtArgs>>): Prisma.Prisma__EdicaoClient<runtime.Types.Result.GetResult<Prisma.$EdicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AtaApuracaoFieldRefs {
    readonly id: Prisma.FieldRef<"AtaApuracao", 'String'>;
    readonly edicaoId: Prisma.FieldRef<"AtaApuracao", 'String'>;
    readonly conteudoMd: Prisma.FieldRef<"AtaApuracao", 'String'>;
    readonly publicadaEm: Prisma.FieldRef<"AtaApuracao", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"AtaApuracao", 'DateTime'>;
}
export type AtaApuracaoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AtaApuracaoSelect<ExtArgs> | null;
    omit?: Prisma.AtaApuracaoOmit<ExtArgs> | null;
    include?: Prisma.AtaApuracaoInclude<ExtArgs> | null;
    where: Prisma.AtaApuracaoWhereUniqueInput;
};
export type AtaApuracaoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AtaApuracaoSelect<ExtArgs> | null;
    omit?: Prisma.AtaApuracaoOmit<ExtArgs> | null;
    include?: Prisma.AtaApuracaoInclude<ExtArgs> | null;
    where: Prisma.AtaApuracaoWhereUniqueInput;
};
export type AtaApuracaoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AtaApuracaoSelect<ExtArgs> | null;
    omit?: Prisma.AtaApuracaoOmit<ExtArgs> | null;
    include?: Prisma.AtaApuracaoInclude<ExtArgs> | null;
    where?: Prisma.AtaApuracaoWhereInput;
    orderBy?: Prisma.AtaApuracaoOrderByWithRelationInput | Prisma.AtaApuracaoOrderByWithRelationInput[];
    cursor?: Prisma.AtaApuracaoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AtaApuracaoScalarFieldEnum | Prisma.AtaApuracaoScalarFieldEnum[];
};
export type AtaApuracaoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AtaApuracaoSelect<ExtArgs> | null;
    omit?: Prisma.AtaApuracaoOmit<ExtArgs> | null;
    include?: Prisma.AtaApuracaoInclude<ExtArgs> | null;
    where?: Prisma.AtaApuracaoWhereInput;
    orderBy?: Prisma.AtaApuracaoOrderByWithRelationInput | Prisma.AtaApuracaoOrderByWithRelationInput[];
    cursor?: Prisma.AtaApuracaoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AtaApuracaoScalarFieldEnum | Prisma.AtaApuracaoScalarFieldEnum[];
};
export type AtaApuracaoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AtaApuracaoSelect<ExtArgs> | null;
    omit?: Prisma.AtaApuracaoOmit<ExtArgs> | null;
    include?: Prisma.AtaApuracaoInclude<ExtArgs> | null;
    where?: Prisma.AtaApuracaoWhereInput;
    orderBy?: Prisma.AtaApuracaoOrderByWithRelationInput | Prisma.AtaApuracaoOrderByWithRelationInput[];
    cursor?: Prisma.AtaApuracaoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AtaApuracaoScalarFieldEnum | Prisma.AtaApuracaoScalarFieldEnum[];
};
export type AtaApuracaoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AtaApuracaoSelect<ExtArgs> | null;
    omit?: Prisma.AtaApuracaoOmit<ExtArgs> | null;
    include?: Prisma.AtaApuracaoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AtaApuracaoCreateInput, Prisma.AtaApuracaoUncheckedCreateInput>;
};
export type AtaApuracaoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AtaApuracaoCreateManyInput | Prisma.AtaApuracaoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AtaApuracaoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AtaApuracaoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AtaApuracaoOmit<ExtArgs> | null;
    data: Prisma.AtaApuracaoCreateManyInput | Prisma.AtaApuracaoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AtaApuracaoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AtaApuracaoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AtaApuracaoSelect<ExtArgs> | null;
    omit?: Prisma.AtaApuracaoOmit<ExtArgs> | null;
    include?: Prisma.AtaApuracaoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AtaApuracaoUpdateInput, Prisma.AtaApuracaoUncheckedUpdateInput>;
    where: Prisma.AtaApuracaoWhereUniqueInput;
};
export type AtaApuracaoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AtaApuracaoUpdateManyMutationInput, Prisma.AtaApuracaoUncheckedUpdateManyInput>;
    where?: Prisma.AtaApuracaoWhereInput;
    limit?: number;
};
export type AtaApuracaoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AtaApuracaoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AtaApuracaoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AtaApuracaoUpdateManyMutationInput, Prisma.AtaApuracaoUncheckedUpdateManyInput>;
    where?: Prisma.AtaApuracaoWhereInput;
    limit?: number;
    include?: Prisma.AtaApuracaoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AtaApuracaoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AtaApuracaoSelect<ExtArgs> | null;
    omit?: Prisma.AtaApuracaoOmit<ExtArgs> | null;
    include?: Prisma.AtaApuracaoInclude<ExtArgs> | null;
    where: Prisma.AtaApuracaoWhereUniqueInput;
    create: Prisma.XOR<Prisma.AtaApuracaoCreateInput, Prisma.AtaApuracaoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AtaApuracaoUpdateInput, Prisma.AtaApuracaoUncheckedUpdateInput>;
};
export type AtaApuracaoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AtaApuracaoSelect<ExtArgs> | null;
    omit?: Prisma.AtaApuracaoOmit<ExtArgs> | null;
    include?: Prisma.AtaApuracaoInclude<ExtArgs> | null;
    where: Prisma.AtaApuracaoWhereUniqueInput;
};
export type AtaApuracaoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AtaApuracaoWhereInput;
    limit?: number;
};
export type AtaApuracaoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AtaApuracaoSelect<ExtArgs> | null;
    omit?: Prisma.AtaApuracaoOmit<ExtArgs> | null;
    include?: Prisma.AtaApuracaoInclude<ExtArgs> | null;
};
