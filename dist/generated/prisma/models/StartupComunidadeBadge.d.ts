import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type StartupComunidadeBadgeModel = runtime.Types.Result.DefaultSelection<Prisma.$StartupComunidadeBadgePayload>;
export type AggregateStartupComunidadeBadge = {
    _count: StartupComunidadeBadgeCountAggregateOutputType | null;
    _min: StartupComunidadeBadgeMinAggregateOutputType | null;
    _max: StartupComunidadeBadgeMaxAggregateOutputType | null;
};
export type StartupComunidadeBadgeMinAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    inscricaoStartupId: string | null;
    comunidadeId: string | null;
    createdAt: Date | null;
};
export type StartupComunidadeBadgeMaxAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    inscricaoStartupId: string | null;
    comunidadeId: string | null;
    createdAt: Date | null;
};
export type StartupComunidadeBadgeCountAggregateOutputType = {
    id: number;
    edicaoId: number;
    inscricaoStartupId: number;
    comunidadeId: number;
    createdAt: number;
    _all: number;
};
export type StartupComunidadeBadgeMinAggregateInputType = {
    id?: true;
    edicaoId?: true;
    inscricaoStartupId?: true;
    comunidadeId?: true;
    createdAt?: true;
};
export type StartupComunidadeBadgeMaxAggregateInputType = {
    id?: true;
    edicaoId?: true;
    inscricaoStartupId?: true;
    comunidadeId?: true;
    createdAt?: true;
};
export type StartupComunidadeBadgeCountAggregateInputType = {
    id?: true;
    edicaoId?: true;
    inscricaoStartupId?: true;
    comunidadeId?: true;
    createdAt?: true;
    _all?: true;
};
export type StartupComunidadeBadgeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StartupComunidadeBadgeWhereInput;
    orderBy?: Prisma.StartupComunidadeBadgeOrderByWithRelationInput | Prisma.StartupComunidadeBadgeOrderByWithRelationInput[];
    cursor?: Prisma.StartupComunidadeBadgeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StartupComunidadeBadgeCountAggregateInputType;
    _min?: StartupComunidadeBadgeMinAggregateInputType;
    _max?: StartupComunidadeBadgeMaxAggregateInputType;
};
export type GetStartupComunidadeBadgeAggregateType<T extends StartupComunidadeBadgeAggregateArgs> = {
    [P in keyof T & keyof AggregateStartupComunidadeBadge]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStartupComunidadeBadge[P]> : Prisma.GetScalarType<T[P], AggregateStartupComunidadeBadge[P]>;
};
export type StartupComunidadeBadgeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StartupComunidadeBadgeWhereInput;
    orderBy?: Prisma.StartupComunidadeBadgeOrderByWithAggregationInput | Prisma.StartupComunidadeBadgeOrderByWithAggregationInput[];
    by: Prisma.StartupComunidadeBadgeScalarFieldEnum[] | Prisma.StartupComunidadeBadgeScalarFieldEnum;
    having?: Prisma.StartupComunidadeBadgeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StartupComunidadeBadgeCountAggregateInputType | true;
    _min?: StartupComunidadeBadgeMinAggregateInputType;
    _max?: StartupComunidadeBadgeMaxAggregateInputType;
};
export type StartupComunidadeBadgeGroupByOutputType = {
    id: string;
    edicaoId: string;
    inscricaoStartupId: string;
    comunidadeId: string;
    createdAt: Date;
    _count: StartupComunidadeBadgeCountAggregateOutputType | null;
    _min: StartupComunidadeBadgeMinAggregateOutputType | null;
    _max: StartupComunidadeBadgeMaxAggregateOutputType | null;
};
export type GetStartupComunidadeBadgeGroupByPayload<T extends StartupComunidadeBadgeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StartupComunidadeBadgeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StartupComunidadeBadgeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StartupComunidadeBadgeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StartupComunidadeBadgeGroupByOutputType[P]>;
}>>;
export type StartupComunidadeBadgeWhereInput = {
    AND?: Prisma.StartupComunidadeBadgeWhereInput | Prisma.StartupComunidadeBadgeWhereInput[];
    OR?: Prisma.StartupComunidadeBadgeWhereInput[];
    NOT?: Prisma.StartupComunidadeBadgeWhereInput | Prisma.StartupComunidadeBadgeWhereInput[];
    id?: Prisma.StringFilter<"StartupComunidadeBadge"> | string;
    edicaoId?: Prisma.StringFilter<"StartupComunidadeBadge"> | string;
    inscricaoStartupId?: Prisma.StringFilter<"StartupComunidadeBadge"> | string;
    comunidadeId?: Prisma.StringFilter<"StartupComunidadeBadge"> | string;
    createdAt?: Prisma.DateTimeFilter<"StartupComunidadeBadge"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
    inscricao?: Prisma.XOR<Prisma.InscricaoStartupScalarRelationFilter, Prisma.InscricaoStartupWhereInput>;
    comunidade?: Prisma.XOR<Prisma.ComunidadeScalarRelationFilter, Prisma.ComunidadeWhereInput>;
};
export type StartupComunidadeBadgeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    inscricaoStartupId?: Prisma.SortOrder;
    comunidadeId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    edicao?: Prisma.EdicaoOrderByWithRelationInput;
    inscricao?: Prisma.InscricaoStartupOrderByWithRelationInput;
    comunidade?: Prisma.ComunidadeOrderByWithRelationInput;
};
export type StartupComunidadeBadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    inscricaoStartupId_comunidadeId?: Prisma.StartupComunidadeBadgeInscricaoStartupIdComunidadeIdCompoundUniqueInput;
    AND?: Prisma.StartupComunidadeBadgeWhereInput | Prisma.StartupComunidadeBadgeWhereInput[];
    OR?: Prisma.StartupComunidadeBadgeWhereInput[];
    NOT?: Prisma.StartupComunidadeBadgeWhereInput | Prisma.StartupComunidadeBadgeWhereInput[];
    edicaoId?: Prisma.StringFilter<"StartupComunidadeBadge"> | string;
    inscricaoStartupId?: Prisma.StringFilter<"StartupComunidadeBadge"> | string;
    comunidadeId?: Prisma.StringFilter<"StartupComunidadeBadge"> | string;
    createdAt?: Prisma.DateTimeFilter<"StartupComunidadeBadge"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
    inscricao?: Prisma.XOR<Prisma.InscricaoStartupScalarRelationFilter, Prisma.InscricaoStartupWhereInput>;
    comunidade?: Prisma.XOR<Prisma.ComunidadeScalarRelationFilter, Prisma.ComunidadeWhereInput>;
}, "id" | "inscricaoStartupId_comunidadeId">;
export type StartupComunidadeBadgeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    inscricaoStartupId?: Prisma.SortOrder;
    comunidadeId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.StartupComunidadeBadgeCountOrderByAggregateInput;
    _max?: Prisma.StartupComunidadeBadgeMaxOrderByAggregateInput;
    _min?: Prisma.StartupComunidadeBadgeMinOrderByAggregateInput;
};
export type StartupComunidadeBadgeScalarWhereWithAggregatesInput = {
    AND?: Prisma.StartupComunidadeBadgeScalarWhereWithAggregatesInput | Prisma.StartupComunidadeBadgeScalarWhereWithAggregatesInput[];
    OR?: Prisma.StartupComunidadeBadgeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StartupComunidadeBadgeScalarWhereWithAggregatesInput | Prisma.StartupComunidadeBadgeScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"StartupComunidadeBadge"> | string;
    edicaoId?: Prisma.StringWithAggregatesFilter<"StartupComunidadeBadge"> | string;
    inscricaoStartupId?: Prisma.StringWithAggregatesFilter<"StartupComunidadeBadge"> | string;
    comunidadeId?: Prisma.StringWithAggregatesFilter<"StartupComunidadeBadge"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"StartupComunidadeBadge"> | Date | string;
};
export type StartupComunidadeBadgeCreateInput = {
    id?: string;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutBadgesInput;
    inscricao: Prisma.InscricaoStartupCreateNestedOneWithoutBadgesInput;
    comunidade: Prisma.ComunidadeCreateNestedOneWithoutBadgesInput;
};
export type StartupComunidadeBadgeUncheckedCreateInput = {
    id?: string;
    edicaoId: string;
    inscricaoStartupId: string;
    comunidadeId: string;
    createdAt?: Date | string;
};
export type StartupComunidadeBadgeUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutBadgesNestedInput;
    inscricao?: Prisma.InscricaoStartupUpdateOneRequiredWithoutBadgesNestedInput;
    comunidade?: Prisma.ComunidadeUpdateOneRequiredWithoutBadgesNestedInput;
};
export type StartupComunidadeBadgeUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StartupComunidadeBadgeCreateManyInput = {
    id?: string;
    edicaoId: string;
    inscricaoStartupId: string;
    comunidadeId: string;
    createdAt?: Date | string;
};
export type StartupComunidadeBadgeUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StartupComunidadeBadgeUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StartupComunidadeBadgeListRelationFilter = {
    every?: Prisma.StartupComunidadeBadgeWhereInput;
    some?: Prisma.StartupComunidadeBadgeWhereInput;
    none?: Prisma.StartupComunidadeBadgeWhereInput;
};
export type StartupComunidadeBadgeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StartupComunidadeBadgeInscricaoStartupIdComunidadeIdCompoundUniqueInput = {
    inscricaoStartupId: string;
    comunidadeId: string;
};
export type StartupComunidadeBadgeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    inscricaoStartupId?: Prisma.SortOrder;
    comunidadeId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StartupComunidadeBadgeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    inscricaoStartupId?: Prisma.SortOrder;
    comunidadeId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StartupComunidadeBadgeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    inscricaoStartupId?: Prisma.SortOrder;
    comunidadeId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StartupComunidadeBadgeCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.StartupComunidadeBadgeCreateWithoutEdicaoInput, Prisma.StartupComunidadeBadgeUncheckedCreateWithoutEdicaoInput> | Prisma.StartupComunidadeBadgeCreateWithoutEdicaoInput[] | Prisma.StartupComunidadeBadgeUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.StartupComunidadeBadgeCreateOrConnectWithoutEdicaoInput | Prisma.StartupComunidadeBadgeCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.StartupComunidadeBadgeCreateManyEdicaoInputEnvelope;
    connect?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
};
export type StartupComunidadeBadgeUncheckedCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.StartupComunidadeBadgeCreateWithoutEdicaoInput, Prisma.StartupComunidadeBadgeUncheckedCreateWithoutEdicaoInput> | Prisma.StartupComunidadeBadgeCreateWithoutEdicaoInput[] | Prisma.StartupComunidadeBadgeUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.StartupComunidadeBadgeCreateOrConnectWithoutEdicaoInput | Prisma.StartupComunidadeBadgeCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.StartupComunidadeBadgeCreateManyEdicaoInputEnvelope;
    connect?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
};
export type StartupComunidadeBadgeUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.StartupComunidadeBadgeCreateWithoutEdicaoInput, Prisma.StartupComunidadeBadgeUncheckedCreateWithoutEdicaoInput> | Prisma.StartupComunidadeBadgeCreateWithoutEdicaoInput[] | Prisma.StartupComunidadeBadgeUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.StartupComunidadeBadgeCreateOrConnectWithoutEdicaoInput | Prisma.StartupComunidadeBadgeCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.StartupComunidadeBadgeUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.StartupComunidadeBadgeUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.StartupComunidadeBadgeCreateManyEdicaoInputEnvelope;
    set?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
    disconnect?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
    delete?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
    connect?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
    update?: Prisma.StartupComunidadeBadgeUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.StartupComunidadeBadgeUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.StartupComunidadeBadgeUpdateManyWithWhereWithoutEdicaoInput | Prisma.StartupComunidadeBadgeUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.StartupComunidadeBadgeScalarWhereInput | Prisma.StartupComunidadeBadgeScalarWhereInput[];
};
export type StartupComunidadeBadgeUncheckedUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.StartupComunidadeBadgeCreateWithoutEdicaoInput, Prisma.StartupComunidadeBadgeUncheckedCreateWithoutEdicaoInput> | Prisma.StartupComunidadeBadgeCreateWithoutEdicaoInput[] | Prisma.StartupComunidadeBadgeUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.StartupComunidadeBadgeCreateOrConnectWithoutEdicaoInput | Prisma.StartupComunidadeBadgeCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.StartupComunidadeBadgeUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.StartupComunidadeBadgeUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.StartupComunidadeBadgeCreateManyEdicaoInputEnvelope;
    set?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
    disconnect?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
    delete?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
    connect?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
    update?: Prisma.StartupComunidadeBadgeUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.StartupComunidadeBadgeUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.StartupComunidadeBadgeUpdateManyWithWhereWithoutEdicaoInput | Prisma.StartupComunidadeBadgeUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.StartupComunidadeBadgeScalarWhereInput | Prisma.StartupComunidadeBadgeScalarWhereInput[];
};
export type StartupComunidadeBadgeCreateNestedManyWithoutComunidadeInput = {
    create?: Prisma.XOR<Prisma.StartupComunidadeBadgeCreateWithoutComunidadeInput, Prisma.StartupComunidadeBadgeUncheckedCreateWithoutComunidadeInput> | Prisma.StartupComunidadeBadgeCreateWithoutComunidadeInput[] | Prisma.StartupComunidadeBadgeUncheckedCreateWithoutComunidadeInput[];
    connectOrCreate?: Prisma.StartupComunidadeBadgeCreateOrConnectWithoutComunidadeInput | Prisma.StartupComunidadeBadgeCreateOrConnectWithoutComunidadeInput[];
    createMany?: Prisma.StartupComunidadeBadgeCreateManyComunidadeInputEnvelope;
    connect?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
};
export type StartupComunidadeBadgeUncheckedCreateNestedManyWithoutComunidadeInput = {
    create?: Prisma.XOR<Prisma.StartupComunidadeBadgeCreateWithoutComunidadeInput, Prisma.StartupComunidadeBadgeUncheckedCreateWithoutComunidadeInput> | Prisma.StartupComunidadeBadgeCreateWithoutComunidadeInput[] | Prisma.StartupComunidadeBadgeUncheckedCreateWithoutComunidadeInput[];
    connectOrCreate?: Prisma.StartupComunidadeBadgeCreateOrConnectWithoutComunidadeInput | Prisma.StartupComunidadeBadgeCreateOrConnectWithoutComunidadeInput[];
    createMany?: Prisma.StartupComunidadeBadgeCreateManyComunidadeInputEnvelope;
    connect?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
};
export type StartupComunidadeBadgeUpdateManyWithoutComunidadeNestedInput = {
    create?: Prisma.XOR<Prisma.StartupComunidadeBadgeCreateWithoutComunidadeInput, Prisma.StartupComunidadeBadgeUncheckedCreateWithoutComunidadeInput> | Prisma.StartupComunidadeBadgeCreateWithoutComunidadeInput[] | Prisma.StartupComunidadeBadgeUncheckedCreateWithoutComunidadeInput[];
    connectOrCreate?: Prisma.StartupComunidadeBadgeCreateOrConnectWithoutComunidadeInput | Prisma.StartupComunidadeBadgeCreateOrConnectWithoutComunidadeInput[];
    upsert?: Prisma.StartupComunidadeBadgeUpsertWithWhereUniqueWithoutComunidadeInput | Prisma.StartupComunidadeBadgeUpsertWithWhereUniqueWithoutComunidadeInput[];
    createMany?: Prisma.StartupComunidadeBadgeCreateManyComunidadeInputEnvelope;
    set?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
    disconnect?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
    delete?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
    connect?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
    update?: Prisma.StartupComunidadeBadgeUpdateWithWhereUniqueWithoutComunidadeInput | Prisma.StartupComunidadeBadgeUpdateWithWhereUniqueWithoutComunidadeInput[];
    updateMany?: Prisma.StartupComunidadeBadgeUpdateManyWithWhereWithoutComunidadeInput | Prisma.StartupComunidadeBadgeUpdateManyWithWhereWithoutComunidadeInput[];
    deleteMany?: Prisma.StartupComunidadeBadgeScalarWhereInput | Prisma.StartupComunidadeBadgeScalarWhereInput[];
};
export type StartupComunidadeBadgeUncheckedUpdateManyWithoutComunidadeNestedInput = {
    create?: Prisma.XOR<Prisma.StartupComunidadeBadgeCreateWithoutComunidadeInput, Prisma.StartupComunidadeBadgeUncheckedCreateWithoutComunidadeInput> | Prisma.StartupComunidadeBadgeCreateWithoutComunidadeInput[] | Prisma.StartupComunidadeBadgeUncheckedCreateWithoutComunidadeInput[];
    connectOrCreate?: Prisma.StartupComunidadeBadgeCreateOrConnectWithoutComunidadeInput | Prisma.StartupComunidadeBadgeCreateOrConnectWithoutComunidadeInput[];
    upsert?: Prisma.StartupComunidadeBadgeUpsertWithWhereUniqueWithoutComunidadeInput | Prisma.StartupComunidadeBadgeUpsertWithWhereUniqueWithoutComunidadeInput[];
    createMany?: Prisma.StartupComunidadeBadgeCreateManyComunidadeInputEnvelope;
    set?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
    disconnect?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
    delete?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
    connect?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
    update?: Prisma.StartupComunidadeBadgeUpdateWithWhereUniqueWithoutComunidadeInput | Prisma.StartupComunidadeBadgeUpdateWithWhereUniqueWithoutComunidadeInput[];
    updateMany?: Prisma.StartupComunidadeBadgeUpdateManyWithWhereWithoutComunidadeInput | Prisma.StartupComunidadeBadgeUpdateManyWithWhereWithoutComunidadeInput[];
    deleteMany?: Prisma.StartupComunidadeBadgeScalarWhereInput | Prisma.StartupComunidadeBadgeScalarWhereInput[];
};
export type StartupComunidadeBadgeCreateNestedManyWithoutInscricaoInput = {
    create?: Prisma.XOR<Prisma.StartupComunidadeBadgeCreateWithoutInscricaoInput, Prisma.StartupComunidadeBadgeUncheckedCreateWithoutInscricaoInput> | Prisma.StartupComunidadeBadgeCreateWithoutInscricaoInput[] | Prisma.StartupComunidadeBadgeUncheckedCreateWithoutInscricaoInput[];
    connectOrCreate?: Prisma.StartupComunidadeBadgeCreateOrConnectWithoutInscricaoInput | Prisma.StartupComunidadeBadgeCreateOrConnectWithoutInscricaoInput[];
    createMany?: Prisma.StartupComunidadeBadgeCreateManyInscricaoInputEnvelope;
    connect?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
};
export type StartupComunidadeBadgeUncheckedCreateNestedManyWithoutInscricaoInput = {
    create?: Prisma.XOR<Prisma.StartupComunidadeBadgeCreateWithoutInscricaoInput, Prisma.StartupComunidadeBadgeUncheckedCreateWithoutInscricaoInput> | Prisma.StartupComunidadeBadgeCreateWithoutInscricaoInput[] | Prisma.StartupComunidadeBadgeUncheckedCreateWithoutInscricaoInput[];
    connectOrCreate?: Prisma.StartupComunidadeBadgeCreateOrConnectWithoutInscricaoInput | Prisma.StartupComunidadeBadgeCreateOrConnectWithoutInscricaoInput[];
    createMany?: Prisma.StartupComunidadeBadgeCreateManyInscricaoInputEnvelope;
    connect?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
};
export type StartupComunidadeBadgeUpdateManyWithoutInscricaoNestedInput = {
    create?: Prisma.XOR<Prisma.StartupComunidadeBadgeCreateWithoutInscricaoInput, Prisma.StartupComunidadeBadgeUncheckedCreateWithoutInscricaoInput> | Prisma.StartupComunidadeBadgeCreateWithoutInscricaoInput[] | Prisma.StartupComunidadeBadgeUncheckedCreateWithoutInscricaoInput[];
    connectOrCreate?: Prisma.StartupComunidadeBadgeCreateOrConnectWithoutInscricaoInput | Prisma.StartupComunidadeBadgeCreateOrConnectWithoutInscricaoInput[];
    upsert?: Prisma.StartupComunidadeBadgeUpsertWithWhereUniqueWithoutInscricaoInput | Prisma.StartupComunidadeBadgeUpsertWithWhereUniqueWithoutInscricaoInput[];
    createMany?: Prisma.StartupComunidadeBadgeCreateManyInscricaoInputEnvelope;
    set?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
    disconnect?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
    delete?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
    connect?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
    update?: Prisma.StartupComunidadeBadgeUpdateWithWhereUniqueWithoutInscricaoInput | Prisma.StartupComunidadeBadgeUpdateWithWhereUniqueWithoutInscricaoInput[];
    updateMany?: Prisma.StartupComunidadeBadgeUpdateManyWithWhereWithoutInscricaoInput | Prisma.StartupComunidadeBadgeUpdateManyWithWhereWithoutInscricaoInput[];
    deleteMany?: Prisma.StartupComunidadeBadgeScalarWhereInput | Prisma.StartupComunidadeBadgeScalarWhereInput[];
};
export type StartupComunidadeBadgeUncheckedUpdateManyWithoutInscricaoNestedInput = {
    create?: Prisma.XOR<Prisma.StartupComunidadeBadgeCreateWithoutInscricaoInput, Prisma.StartupComunidadeBadgeUncheckedCreateWithoutInscricaoInput> | Prisma.StartupComunidadeBadgeCreateWithoutInscricaoInput[] | Prisma.StartupComunidadeBadgeUncheckedCreateWithoutInscricaoInput[];
    connectOrCreate?: Prisma.StartupComunidadeBadgeCreateOrConnectWithoutInscricaoInput | Prisma.StartupComunidadeBadgeCreateOrConnectWithoutInscricaoInput[];
    upsert?: Prisma.StartupComunidadeBadgeUpsertWithWhereUniqueWithoutInscricaoInput | Prisma.StartupComunidadeBadgeUpsertWithWhereUniqueWithoutInscricaoInput[];
    createMany?: Prisma.StartupComunidadeBadgeCreateManyInscricaoInputEnvelope;
    set?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
    disconnect?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
    delete?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
    connect?: Prisma.StartupComunidadeBadgeWhereUniqueInput | Prisma.StartupComunidadeBadgeWhereUniqueInput[];
    update?: Prisma.StartupComunidadeBadgeUpdateWithWhereUniqueWithoutInscricaoInput | Prisma.StartupComunidadeBadgeUpdateWithWhereUniqueWithoutInscricaoInput[];
    updateMany?: Prisma.StartupComunidadeBadgeUpdateManyWithWhereWithoutInscricaoInput | Prisma.StartupComunidadeBadgeUpdateManyWithWhereWithoutInscricaoInput[];
    deleteMany?: Prisma.StartupComunidadeBadgeScalarWhereInput | Prisma.StartupComunidadeBadgeScalarWhereInput[];
};
export type StartupComunidadeBadgeCreateWithoutEdicaoInput = {
    id?: string;
    createdAt?: Date | string;
    inscricao: Prisma.InscricaoStartupCreateNestedOneWithoutBadgesInput;
    comunidade: Prisma.ComunidadeCreateNestedOneWithoutBadgesInput;
};
export type StartupComunidadeBadgeUncheckedCreateWithoutEdicaoInput = {
    id?: string;
    inscricaoStartupId: string;
    comunidadeId: string;
    createdAt?: Date | string;
};
export type StartupComunidadeBadgeCreateOrConnectWithoutEdicaoInput = {
    where: Prisma.StartupComunidadeBadgeWhereUniqueInput;
    create: Prisma.XOR<Prisma.StartupComunidadeBadgeCreateWithoutEdicaoInput, Prisma.StartupComunidadeBadgeUncheckedCreateWithoutEdicaoInput>;
};
export type StartupComunidadeBadgeCreateManyEdicaoInputEnvelope = {
    data: Prisma.StartupComunidadeBadgeCreateManyEdicaoInput | Prisma.StartupComunidadeBadgeCreateManyEdicaoInput[];
    skipDuplicates?: boolean;
};
export type StartupComunidadeBadgeUpsertWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.StartupComunidadeBadgeWhereUniqueInput;
    update: Prisma.XOR<Prisma.StartupComunidadeBadgeUpdateWithoutEdicaoInput, Prisma.StartupComunidadeBadgeUncheckedUpdateWithoutEdicaoInput>;
    create: Prisma.XOR<Prisma.StartupComunidadeBadgeCreateWithoutEdicaoInput, Prisma.StartupComunidadeBadgeUncheckedCreateWithoutEdicaoInput>;
};
export type StartupComunidadeBadgeUpdateWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.StartupComunidadeBadgeWhereUniqueInput;
    data: Prisma.XOR<Prisma.StartupComunidadeBadgeUpdateWithoutEdicaoInput, Prisma.StartupComunidadeBadgeUncheckedUpdateWithoutEdicaoInput>;
};
export type StartupComunidadeBadgeUpdateManyWithWhereWithoutEdicaoInput = {
    where: Prisma.StartupComunidadeBadgeScalarWhereInput;
    data: Prisma.XOR<Prisma.StartupComunidadeBadgeUpdateManyMutationInput, Prisma.StartupComunidadeBadgeUncheckedUpdateManyWithoutEdicaoInput>;
};
export type StartupComunidadeBadgeScalarWhereInput = {
    AND?: Prisma.StartupComunidadeBadgeScalarWhereInput | Prisma.StartupComunidadeBadgeScalarWhereInput[];
    OR?: Prisma.StartupComunidadeBadgeScalarWhereInput[];
    NOT?: Prisma.StartupComunidadeBadgeScalarWhereInput | Prisma.StartupComunidadeBadgeScalarWhereInput[];
    id?: Prisma.StringFilter<"StartupComunidadeBadge"> | string;
    edicaoId?: Prisma.StringFilter<"StartupComunidadeBadge"> | string;
    inscricaoStartupId?: Prisma.StringFilter<"StartupComunidadeBadge"> | string;
    comunidadeId?: Prisma.StringFilter<"StartupComunidadeBadge"> | string;
    createdAt?: Prisma.DateTimeFilter<"StartupComunidadeBadge"> | Date | string;
};
export type StartupComunidadeBadgeCreateWithoutComunidadeInput = {
    id?: string;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutBadgesInput;
    inscricao: Prisma.InscricaoStartupCreateNestedOneWithoutBadgesInput;
};
export type StartupComunidadeBadgeUncheckedCreateWithoutComunidadeInput = {
    id?: string;
    edicaoId: string;
    inscricaoStartupId: string;
    createdAt?: Date | string;
};
export type StartupComunidadeBadgeCreateOrConnectWithoutComunidadeInput = {
    where: Prisma.StartupComunidadeBadgeWhereUniqueInput;
    create: Prisma.XOR<Prisma.StartupComunidadeBadgeCreateWithoutComunidadeInput, Prisma.StartupComunidadeBadgeUncheckedCreateWithoutComunidadeInput>;
};
export type StartupComunidadeBadgeCreateManyComunidadeInputEnvelope = {
    data: Prisma.StartupComunidadeBadgeCreateManyComunidadeInput | Prisma.StartupComunidadeBadgeCreateManyComunidadeInput[];
    skipDuplicates?: boolean;
};
export type StartupComunidadeBadgeUpsertWithWhereUniqueWithoutComunidadeInput = {
    where: Prisma.StartupComunidadeBadgeWhereUniqueInput;
    update: Prisma.XOR<Prisma.StartupComunidadeBadgeUpdateWithoutComunidadeInput, Prisma.StartupComunidadeBadgeUncheckedUpdateWithoutComunidadeInput>;
    create: Prisma.XOR<Prisma.StartupComunidadeBadgeCreateWithoutComunidadeInput, Prisma.StartupComunidadeBadgeUncheckedCreateWithoutComunidadeInput>;
};
export type StartupComunidadeBadgeUpdateWithWhereUniqueWithoutComunidadeInput = {
    where: Prisma.StartupComunidadeBadgeWhereUniqueInput;
    data: Prisma.XOR<Prisma.StartupComunidadeBadgeUpdateWithoutComunidadeInput, Prisma.StartupComunidadeBadgeUncheckedUpdateWithoutComunidadeInput>;
};
export type StartupComunidadeBadgeUpdateManyWithWhereWithoutComunidadeInput = {
    where: Prisma.StartupComunidadeBadgeScalarWhereInput;
    data: Prisma.XOR<Prisma.StartupComunidadeBadgeUpdateManyMutationInput, Prisma.StartupComunidadeBadgeUncheckedUpdateManyWithoutComunidadeInput>;
};
export type StartupComunidadeBadgeCreateWithoutInscricaoInput = {
    id?: string;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutBadgesInput;
    comunidade: Prisma.ComunidadeCreateNestedOneWithoutBadgesInput;
};
export type StartupComunidadeBadgeUncheckedCreateWithoutInscricaoInput = {
    id?: string;
    edicaoId: string;
    comunidadeId: string;
    createdAt?: Date | string;
};
export type StartupComunidadeBadgeCreateOrConnectWithoutInscricaoInput = {
    where: Prisma.StartupComunidadeBadgeWhereUniqueInput;
    create: Prisma.XOR<Prisma.StartupComunidadeBadgeCreateWithoutInscricaoInput, Prisma.StartupComunidadeBadgeUncheckedCreateWithoutInscricaoInput>;
};
export type StartupComunidadeBadgeCreateManyInscricaoInputEnvelope = {
    data: Prisma.StartupComunidadeBadgeCreateManyInscricaoInput | Prisma.StartupComunidadeBadgeCreateManyInscricaoInput[];
    skipDuplicates?: boolean;
};
export type StartupComunidadeBadgeUpsertWithWhereUniqueWithoutInscricaoInput = {
    where: Prisma.StartupComunidadeBadgeWhereUniqueInput;
    update: Prisma.XOR<Prisma.StartupComunidadeBadgeUpdateWithoutInscricaoInput, Prisma.StartupComunidadeBadgeUncheckedUpdateWithoutInscricaoInput>;
    create: Prisma.XOR<Prisma.StartupComunidadeBadgeCreateWithoutInscricaoInput, Prisma.StartupComunidadeBadgeUncheckedCreateWithoutInscricaoInput>;
};
export type StartupComunidadeBadgeUpdateWithWhereUniqueWithoutInscricaoInput = {
    where: Prisma.StartupComunidadeBadgeWhereUniqueInput;
    data: Prisma.XOR<Prisma.StartupComunidadeBadgeUpdateWithoutInscricaoInput, Prisma.StartupComunidadeBadgeUncheckedUpdateWithoutInscricaoInput>;
};
export type StartupComunidadeBadgeUpdateManyWithWhereWithoutInscricaoInput = {
    where: Prisma.StartupComunidadeBadgeScalarWhereInput;
    data: Prisma.XOR<Prisma.StartupComunidadeBadgeUpdateManyMutationInput, Prisma.StartupComunidadeBadgeUncheckedUpdateManyWithoutInscricaoInput>;
};
export type StartupComunidadeBadgeCreateManyEdicaoInput = {
    id?: string;
    inscricaoStartupId: string;
    comunidadeId: string;
    createdAt?: Date | string;
};
export type StartupComunidadeBadgeUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inscricao?: Prisma.InscricaoStartupUpdateOneRequiredWithoutBadgesNestedInput;
    comunidade?: Prisma.ComunidadeUpdateOneRequiredWithoutBadgesNestedInput;
};
export type StartupComunidadeBadgeUncheckedUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StartupComunidadeBadgeUncheckedUpdateManyWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StartupComunidadeBadgeCreateManyComunidadeInput = {
    id?: string;
    edicaoId: string;
    inscricaoStartupId: string;
    createdAt?: Date | string;
};
export type StartupComunidadeBadgeUpdateWithoutComunidadeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutBadgesNestedInput;
    inscricao?: Prisma.InscricaoStartupUpdateOneRequiredWithoutBadgesNestedInput;
};
export type StartupComunidadeBadgeUncheckedUpdateWithoutComunidadeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StartupComunidadeBadgeUncheckedUpdateManyWithoutComunidadeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StartupComunidadeBadgeCreateManyInscricaoInput = {
    id?: string;
    edicaoId: string;
    comunidadeId: string;
    createdAt?: Date | string;
};
export type StartupComunidadeBadgeUpdateWithoutInscricaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutBadgesNestedInput;
    comunidade?: Prisma.ComunidadeUpdateOneRequiredWithoutBadgesNestedInput;
};
export type StartupComunidadeBadgeUncheckedUpdateWithoutInscricaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StartupComunidadeBadgeUncheckedUpdateManyWithoutInscricaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StartupComunidadeBadgeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    inscricaoStartupId?: boolean;
    comunidadeId?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    inscricao?: boolean | Prisma.InscricaoStartupDefaultArgs<ExtArgs>;
    comunidade?: boolean | Prisma.ComunidadeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["startupComunidadeBadge"]>;
export type StartupComunidadeBadgeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    inscricaoStartupId?: boolean;
    comunidadeId?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    inscricao?: boolean | Prisma.InscricaoStartupDefaultArgs<ExtArgs>;
    comunidade?: boolean | Prisma.ComunidadeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["startupComunidadeBadge"]>;
export type StartupComunidadeBadgeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    inscricaoStartupId?: boolean;
    comunidadeId?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    inscricao?: boolean | Prisma.InscricaoStartupDefaultArgs<ExtArgs>;
    comunidade?: boolean | Prisma.ComunidadeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["startupComunidadeBadge"]>;
export type StartupComunidadeBadgeSelectScalar = {
    id?: boolean;
    edicaoId?: boolean;
    inscricaoStartupId?: boolean;
    comunidadeId?: boolean;
    createdAt?: boolean;
};
export type StartupComunidadeBadgeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "edicaoId" | "inscricaoStartupId" | "comunidadeId" | "createdAt", ExtArgs["result"]["startupComunidadeBadge"]>;
export type StartupComunidadeBadgeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    inscricao?: boolean | Prisma.InscricaoStartupDefaultArgs<ExtArgs>;
    comunidade?: boolean | Prisma.ComunidadeDefaultArgs<ExtArgs>;
};
export type StartupComunidadeBadgeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    inscricao?: boolean | Prisma.InscricaoStartupDefaultArgs<ExtArgs>;
    comunidade?: boolean | Prisma.ComunidadeDefaultArgs<ExtArgs>;
};
export type StartupComunidadeBadgeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    inscricao?: boolean | Prisma.InscricaoStartupDefaultArgs<ExtArgs>;
    comunidade?: boolean | Prisma.ComunidadeDefaultArgs<ExtArgs>;
};
export type $StartupComunidadeBadgePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StartupComunidadeBadge";
    objects: {
        edicao: Prisma.$EdicaoPayload<ExtArgs>;
        inscricao: Prisma.$InscricaoStartupPayload<ExtArgs>;
        comunidade: Prisma.$ComunidadePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        edicaoId: string;
        inscricaoStartupId: string;
        comunidadeId: string;
        createdAt: Date;
    }, ExtArgs["result"]["startupComunidadeBadge"]>;
    composites: {};
};
export type StartupComunidadeBadgeGetPayload<S extends boolean | null | undefined | StartupComunidadeBadgeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StartupComunidadeBadgePayload, S>;
export type StartupComunidadeBadgeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StartupComunidadeBadgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StartupComunidadeBadgeCountAggregateInputType | true;
};
export interface StartupComunidadeBadgeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StartupComunidadeBadge'];
        meta: {
            name: 'StartupComunidadeBadge';
        };
    };
    findUnique<T extends StartupComunidadeBadgeFindUniqueArgs>(args: Prisma.SelectSubset<T, StartupComunidadeBadgeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StartupComunidadeBadgeClient<runtime.Types.Result.GetResult<Prisma.$StartupComunidadeBadgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StartupComunidadeBadgeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StartupComunidadeBadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StartupComunidadeBadgeClient<runtime.Types.Result.GetResult<Prisma.$StartupComunidadeBadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StartupComunidadeBadgeFindFirstArgs>(args?: Prisma.SelectSubset<T, StartupComunidadeBadgeFindFirstArgs<ExtArgs>>): Prisma.Prisma__StartupComunidadeBadgeClient<runtime.Types.Result.GetResult<Prisma.$StartupComunidadeBadgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StartupComunidadeBadgeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StartupComunidadeBadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StartupComunidadeBadgeClient<runtime.Types.Result.GetResult<Prisma.$StartupComunidadeBadgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StartupComunidadeBadgeFindManyArgs>(args?: Prisma.SelectSubset<T, StartupComunidadeBadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StartupComunidadeBadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StartupComunidadeBadgeCreateArgs>(args: Prisma.SelectSubset<T, StartupComunidadeBadgeCreateArgs<ExtArgs>>): Prisma.Prisma__StartupComunidadeBadgeClient<runtime.Types.Result.GetResult<Prisma.$StartupComunidadeBadgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StartupComunidadeBadgeCreateManyArgs>(args?: Prisma.SelectSubset<T, StartupComunidadeBadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StartupComunidadeBadgeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StartupComunidadeBadgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StartupComunidadeBadgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StartupComunidadeBadgeDeleteArgs>(args: Prisma.SelectSubset<T, StartupComunidadeBadgeDeleteArgs<ExtArgs>>): Prisma.Prisma__StartupComunidadeBadgeClient<runtime.Types.Result.GetResult<Prisma.$StartupComunidadeBadgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StartupComunidadeBadgeUpdateArgs>(args: Prisma.SelectSubset<T, StartupComunidadeBadgeUpdateArgs<ExtArgs>>): Prisma.Prisma__StartupComunidadeBadgeClient<runtime.Types.Result.GetResult<Prisma.$StartupComunidadeBadgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StartupComunidadeBadgeDeleteManyArgs>(args?: Prisma.SelectSubset<T, StartupComunidadeBadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StartupComunidadeBadgeUpdateManyArgs>(args: Prisma.SelectSubset<T, StartupComunidadeBadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StartupComunidadeBadgeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StartupComunidadeBadgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StartupComunidadeBadgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StartupComunidadeBadgeUpsertArgs>(args: Prisma.SelectSubset<T, StartupComunidadeBadgeUpsertArgs<ExtArgs>>): Prisma.Prisma__StartupComunidadeBadgeClient<runtime.Types.Result.GetResult<Prisma.$StartupComunidadeBadgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StartupComunidadeBadgeCountArgs>(args?: Prisma.Subset<T, StartupComunidadeBadgeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StartupComunidadeBadgeCountAggregateOutputType> : number>;
    aggregate<T extends StartupComunidadeBadgeAggregateArgs>(args: Prisma.Subset<T, StartupComunidadeBadgeAggregateArgs>): Prisma.PrismaPromise<GetStartupComunidadeBadgeAggregateType<T>>;
    groupBy<T extends StartupComunidadeBadgeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StartupComunidadeBadgeGroupByArgs['orderBy'];
    } : {
        orderBy?: StartupComunidadeBadgeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StartupComunidadeBadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStartupComunidadeBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StartupComunidadeBadgeFieldRefs;
}
export interface Prisma__StartupComunidadeBadgeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    edicao<T extends Prisma.EdicaoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EdicaoDefaultArgs<ExtArgs>>): Prisma.Prisma__EdicaoClient<runtime.Types.Result.GetResult<Prisma.$EdicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    inscricao<T extends Prisma.InscricaoStartupDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InscricaoStartupDefaultArgs<ExtArgs>>): Prisma.Prisma__InscricaoStartupClient<runtime.Types.Result.GetResult<Prisma.$InscricaoStartupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    comunidade<T extends Prisma.ComunidadeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ComunidadeDefaultArgs<ExtArgs>>): Prisma.Prisma__ComunidadeClient<runtime.Types.Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StartupComunidadeBadgeFieldRefs {
    readonly id: Prisma.FieldRef<"StartupComunidadeBadge", 'String'>;
    readonly edicaoId: Prisma.FieldRef<"StartupComunidadeBadge", 'String'>;
    readonly inscricaoStartupId: Prisma.FieldRef<"StartupComunidadeBadge", 'String'>;
    readonly comunidadeId: Prisma.FieldRef<"StartupComunidadeBadge", 'String'>;
    readonly createdAt: Prisma.FieldRef<"StartupComunidadeBadge", 'DateTime'>;
}
export type StartupComunidadeBadgeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StartupComunidadeBadgeSelect<ExtArgs> | null;
    omit?: Prisma.StartupComunidadeBadgeOmit<ExtArgs> | null;
    include?: Prisma.StartupComunidadeBadgeInclude<ExtArgs> | null;
    where: Prisma.StartupComunidadeBadgeWhereUniqueInput;
};
export type StartupComunidadeBadgeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StartupComunidadeBadgeSelect<ExtArgs> | null;
    omit?: Prisma.StartupComunidadeBadgeOmit<ExtArgs> | null;
    include?: Prisma.StartupComunidadeBadgeInclude<ExtArgs> | null;
    where: Prisma.StartupComunidadeBadgeWhereUniqueInput;
};
export type StartupComunidadeBadgeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StartupComunidadeBadgeSelect<ExtArgs> | null;
    omit?: Prisma.StartupComunidadeBadgeOmit<ExtArgs> | null;
    include?: Prisma.StartupComunidadeBadgeInclude<ExtArgs> | null;
    where?: Prisma.StartupComunidadeBadgeWhereInput;
    orderBy?: Prisma.StartupComunidadeBadgeOrderByWithRelationInput | Prisma.StartupComunidadeBadgeOrderByWithRelationInput[];
    cursor?: Prisma.StartupComunidadeBadgeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StartupComunidadeBadgeScalarFieldEnum | Prisma.StartupComunidadeBadgeScalarFieldEnum[];
};
export type StartupComunidadeBadgeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StartupComunidadeBadgeSelect<ExtArgs> | null;
    omit?: Prisma.StartupComunidadeBadgeOmit<ExtArgs> | null;
    include?: Prisma.StartupComunidadeBadgeInclude<ExtArgs> | null;
    where?: Prisma.StartupComunidadeBadgeWhereInput;
    orderBy?: Prisma.StartupComunidadeBadgeOrderByWithRelationInput | Prisma.StartupComunidadeBadgeOrderByWithRelationInput[];
    cursor?: Prisma.StartupComunidadeBadgeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StartupComunidadeBadgeScalarFieldEnum | Prisma.StartupComunidadeBadgeScalarFieldEnum[];
};
export type StartupComunidadeBadgeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StartupComunidadeBadgeSelect<ExtArgs> | null;
    omit?: Prisma.StartupComunidadeBadgeOmit<ExtArgs> | null;
    include?: Prisma.StartupComunidadeBadgeInclude<ExtArgs> | null;
    where?: Prisma.StartupComunidadeBadgeWhereInput;
    orderBy?: Prisma.StartupComunidadeBadgeOrderByWithRelationInput | Prisma.StartupComunidadeBadgeOrderByWithRelationInput[];
    cursor?: Prisma.StartupComunidadeBadgeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StartupComunidadeBadgeScalarFieldEnum | Prisma.StartupComunidadeBadgeScalarFieldEnum[];
};
export type StartupComunidadeBadgeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StartupComunidadeBadgeSelect<ExtArgs> | null;
    omit?: Prisma.StartupComunidadeBadgeOmit<ExtArgs> | null;
    include?: Prisma.StartupComunidadeBadgeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StartupComunidadeBadgeCreateInput, Prisma.StartupComunidadeBadgeUncheckedCreateInput>;
};
export type StartupComunidadeBadgeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StartupComunidadeBadgeCreateManyInput | Prisma.StartupComunidadeBadgeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StartupComunidadeBadgeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StartupComunidadeBadgeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StartupComunidadeBadgeOmit<ExtArgs> | null;
    data: Prisma.StartupComunidadeBadgeCreateManyInput | Prisma.StartupComunidadeBadgeCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StartupComunidadeBadgeIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StartupComunidadeBadgeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StartupComunidadeBadgeSelect<ExtArgs> | null;
    omit?: Prisma.StartupComunidadeBadgeOmit<ExtArgs> | null;
    include?: Prisma.StartupComunidadeBadgeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StartupComunidadeBadgeUpdateInput, Prisma.StartupComunidadeBadgeUncheckedUpdateInput>;
    where: Prisma.StartupComunidadeBadgeWhereUniqueInput;
};
export type StartupComunidadeBadgeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StartupComunidadeBadgeUpdateManyMutationInput, Prisma.StartupComunidadeBadgeUncheckedUpdateManyInput>;
    where?: Prisma.StartupComunidadeBadgeWhereInput;
    limit?: number;
};
export type StartupComunidadeBadgeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StartupComunidadeBadgeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StartupComunidadeBadgeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StartupComunidadeBadgeUpdateManyMutationInput, Prisma.StartupComunidadeBadgeUncheckedUpdateManyInput>;
    where?: Prisma.StartupComunidadeBadgeWhereInput;
    limit?: number;
    include?: Prisma.StartupComunidadeBadgeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StartupComunidadeBadgeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StartupComunidadeBadgeSelect<ExtArgs> | null;
    omit?: Prisma.StartupComunidadeBadgeOmit<ExtArgs> | null;
    include?: Prisma.StartupComunidadeBadgeInclude<ExtArgs> | null;
    where: Prisma.StartupComunidadeBadgeWhereUniqueInput;
    create: Prisma.XOR<Prisma.StartupComunidadeBadgeCreateInput, Prisma.StartupComunidadeBadgeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StartupComunidadeBadgeUpdateInput, Prisma.StartupComunidadeBadgeUncheckedUpdateInput>;
};
export type StartupComunidadeBadgeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StartupComunidadeBadgeSelect<ExtArgs> | null;
    omit?: Prisma.StartupComunidadeBadgeOmit<ExtArgs> | null;
    include?: Prisma.StartupComunidadeBadgeInclude<ExtArgs> | null;
    where: Prisma.StartupComunidadeBadgeWhereUniqueInput;
};
export type StartupComunidadeBadgeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StartupComunidadeBadgeWhereInput;
    limit?: number;
};
export type StartupComunidadeBadgeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StartupComunidadeBadgeSelect<ExtArgs> | null;
    omit?: Prisma.StartupComunidadeBadgeOmit<ExtArgs> | null;
    include?: Prisma.StartupComunidadeBadgeInclude<ExtArgs> | null;
};
