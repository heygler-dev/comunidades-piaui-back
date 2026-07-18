import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type AuditoriaEventoModel = runtime.Types.Result.DefaultSelection<Prisma.$AuditoriaEventoPayload>;
export type AggregateAuditoriaEvento = {
    _count: AuditoriaEventoCountAggregateOutputType | null;
    _min: AuditoriaEventoMinAggregateOutputType | null;
    _max: AuditoriaEventoMaxAggregateOutputType | null;
};
export type AuditoriaEventoMinAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    tipo: $Enums.TipoAuditoria | null;
    atorPapel: $Enums.PapelAuditoria | null;
    atorId: string | null;
    cpfHash: string | null;
    createdAt: Date | null;
};
export type AuditoriaEventoMaxAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    tipo: $Enums.TipoAuditoria | null;
    atorPapel: $Enums.PapelAuditoria | null;
    atorId: string | null;
    cpfHash: string | null;
    createdAt: Date | null;
};
export type AuditoriaEventoCountAggregateOutputType = {
    id: number;
    edicaoId: number;
    tipo: number;
    atorPapel: number;
    atorId: number;
    cpfHash: number;
    payload: number;
    createdAt: number;
    _all: number;
};
export type AuditoriaEventoMinAggregateInputType = {
    id?: true;
    edicaoId?: true;
    tipo?: true;
    atorPapel?: true;
    atorId?: true;
    cpfHash?: true;
    createdAt?: true;
};
export type AuditoriaEventoMaxAggregateInputType = {
    id?: true;
    edicaoId?: true;
    tipo?: true;
    atorPapel?: true;
    atorId?: true;
    cpfHash?: true;
    createdAt?: true;
};
export type AuditoriaEventoCountAggregateInputType = {
    id?: true;
    edicaoId?: true;
    tipo?: true;
    atorPapel?: true;
    atorId?: true;
    cpfHash?: true;
    payload?: true;
    createdAt?: true;
    _all?: true;
};
export type AuditoriaEventoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditoriaEventoWhereInput;
    orderBy?: Prisma.AuditoriaEventoOrderByWithRelationInput | Prisma.AuditoriaEventoOrderByWithRelationInput[];
    cursor?: Prisma.AuditoriaEventoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AuditoriaEventoCountAggregateInputType;
    _min?: AuditoriaEventoMinAggregateInputType;
    _max?: AuditoriaEventoMaxAggregateInputType;
};
export type GetAuditoriaEventoAggregateType<T extends AuditoriaEventoAggregateArgs> = {
    [P in keyof T & keyof AggregateAuditoriaEvento]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAuditoriaEvento[P]> : Prisma.GetScalarType<T[P], AggregateAuditoriaEvento[P]>;
};
export type AuditoriaEventoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditoriaEventoWhereInput;
    orderBy?: Prisma.AuditoriaEventoOrderByWithAggregationInput | Prisma.AuditoriaEventoOrderByWithAggregationInput[];
    by: Prisma.AuditoriaEventoScalarFieldEnum[] | Prisma.AuditoriaEventoScalarFieldEnum;
    having?: Prisma.AuditoriaEventoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuditoriaEventoCountAggregateInputType | true;
    _min?: AuditoriaEventoMinAggregateInputType;
    _max?: AuditoriaEventoMaxAggregateInputType;
};
export type AuditoriaEventoGroupByOutputType = {
    id: string;
    edicaoId: string | null;
    tipo: $Enums.TipoAuditoria;
    atorPapel: $Enums.PapelAuditoria | null;
    atorId: string | null;
    cpfHash: string | null;
    payload: runtime.JsonValue | null;
    createdAt: Date;
    _count: AuditoriaEventoCountAggregateOutputType | null;
    _min: AuditoriaEventoMinAggregateOutputType | null;
    _max: AuditoriaEventoMaxAggregateOutputType | null;
};
export type GetAuditoriaEventoGroupByPayload<T extends AuditoriaEventoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AuditoriaEventoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AuditoriaEventoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AuditoriaEventoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AuditoriaEventoGroupByOutputType[P]>;
}>>;
export type AuditoriaEventoWhereInput = {
    AND?: Prisma.AuditoriaEventoWhereInput | Prisma.AuditoriaEventoWhereInput[];
    OR?: Prisma.AuditoriaEventoWhereInput[];
    NOT?: Prisma.AuditoriaEventoWhereInput | Prisma.AuditoriaEventoWhereInput[];
    id?: Prisma.StringFilter<"AuditoriaEvento"> | string;
    edicaoId?: Prisma.StringNullableFilter<"AuditoriaEvento"> | string | null;
    tipo?: Prisma.EnumTipoAuditoriaFilter<"AuditoriaEvento"> | $Enums.TipoAuditoria;
    atorPapel?: Prisma.EnumPapelAuditoriaNullableFilter<"AuditoriaEvento"> | $Enums.PapelAuditoria | null;
    atorId?: Prisma.StringNullableFilter<"AuditoriaEvento"> | string | null;
    cpfHash?: Prisma.StringNullableFilter<"AuditoriaEvento"> | string | null;
    payload?: Prisma.JsonNullableFilter<"AuditoriaEvento">;
    createdAt?: Prisma.DateTimeFilter<"AuditoriaEvento"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoNullableScalarRelationFilter, Prisma.EdicaoWhereInput> | null;
};
export type AuditoriaEventoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    atorPapel?: Prisma.SortOrderInput | Prisma.SortOrder;
    atorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    cpfHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    payload?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    edicao?: Prisma.EdicaoOrderByWithRelationInput;
};
export type AuditoriaEventoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AuditoriaEventoWhereInput | Prisma.AuditoriaEventoWhereInput[];
    OR?: Prisma.AuditoriaEventoWhereInput[];
    NOT?: Prisma.AuditoriaEventoWhereInput | Prisma.AuditoriaEventoWhereInput[];
    edicaoId?: Prisma.StringNullableFilter<"AuditoriaEvento"> | string | null;
    tipo?: Prisma.EnumTipoAuditoriaFilter<"AuditoriaEvento"> | $Enums.TipoAuditoria;
    atorPapel?: Prisma.EnumPapelAuditoriaNullableFilter<"AuditoriaEvento"> | $Enums.PapelAuditoria | null;
    atorId?: Prisma.StringNullableFilter<"AuditoriaEvento"> | string | null;
    cpfHash?: Prisma.StringNullableFilter<"AuditoriaEvento"> | string | null;
    payload?: Prisma.JsonNullableFilter<"AuditoriaEvento">;
    createdAt?: Prisma.DateTimeFilter<"AuditoriaEvento"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoNullableScalarRelationFilter, Prisma.EdicaoWhereInput> | null;
}, "id">;
export type AuditoriaEventoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    atorPapel?: Prisma.SortOrderInput | Prisma.SortOrder;
    atorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    cpfHash?: Prisma.SortOrderInput | Prisma.SortOrder;
    payload?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AuditoriaEventoCountOrderByAggregateInput;
    _max?: Prisma.AuditoriaEventoMaxOrderByAggregateInput;
    _min?: Prisma.AuditoriaEventoMinOrderByAggregateInput;
};
export type AuditoriaEventoScalarWhereWithAggregatesInput = {
    AND?: Prisma.AuditoriaEventoScalarWhereWithAggregatesInput | Prisma.AuditoriaEventoScalarWhereWithAggregatesInput[];
    OR?: Prisma.AuditoriaEventoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AuditoriaEventoScalarWhereWithAggregatesInput | Prisma.AuditoriaEventoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AuditoriaEvento"> | string;
    edicaoId?: Prisma.StringNullableWithAggregatesFilter<"AuditoriaEvento"> | string | null;
    tipo?: Prisma.EnumTipoAuditoriaWithAggregatesFilter<"AuditoriaEvento"> | $Enums.TipoAuditoria;
    atorPapel?: Prisma.EnumPapelAuditoriaNullableWithAggregatesFilter<"AuditoriaEvento"> | $Enums.PapelAuditoria | null;
    atorId?: Prisma.StringNullableWithAggregatesFilter<"AuditoriaEvento"> | string | null;
    cpfHash?: Prisma.StringNullableWithAggregatesFilter<"AuditoriaEvento"> | string | null;
    payload?: Prisma.JsonNullableWithAggregatesFilter<"AuditoriaEvento">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AuditoriaEvento"> | Date | string;
};
export type AuditoriaEventoCreateInput = {
    id?: string;
    tipo: $Enums.TipoAuditoria;
    atorPapel?: $Enums.PapelAuditoria | null;
    atorId?: string | null;
    cpfHash?: string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    edicao?: Prisma.EdicaoCreateNestedOneWithoutAuditoriasInput;
};
export type AuditoriaEventoUncheckedCreateInput = {
    id?: string;
    edicaoId?: string | null;
    tipo: $Enums.TipoAuditoria;
    atorPapel?: $Enums.PapelAuditoria | null;
    atorId?: string | null;
    cpfHash?: string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type AuditoriaEventoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoAuditoriaFieldUpdateOperationsInput | $Enums.TipoAuditoria;
    atorPapel?: Prisma.NullableEnumPapelAuditoriaFieldUpdateOperationsInput | $Enums.PapelAuditoria | null;
    atorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cpfHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneWithoutAuditoriasNestedInput;
};
export type AuditoriaEventoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.EnumTipoAuditoriaFieldUpdateOperationsInput | $Enums.TipoAuditoria;
    atorPapel?: Prisma.NullableEnumPapelAuditoriaFieldUpdateOperationsInput | $Enums.PapelAuditoria | null;
    atorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cpfHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditoriaEventoCreateManyInput = {
    id?: string;
    edicaoId?: string | null;
    tipo: $Enums.TipoAuditoria;
    atorPapel?: $Enums.PapelAuditoria | null;
    atorId?: string | null;
    cpfHash?: string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type AuditoriaEventoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoAuditoriaFieldUpdateOperationsInput | $Enums.TipoAuditoria;
    atorPapel?: Prisma.NullableEnumPapelAuditoriaFieldUpdateOperationsInput | $Enums.PapelAuditoria | null;
    atorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cpfHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditoriaEventoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo?: Prisma.EnumTipoAuditoriaFieldUpdateOperationsInput | $Enums.TipoAuditoria;
    atorPapel?: Prisma.NullableEnumPapelAuditoriaFieldUpdateOperationsInput | $Enums.PapelAuditoria | null;
    atorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cpfHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditoriaEventoListRelationFilter = {
    every?: Prisma.AuditoriaEventoWhereInput;
    some?: Prisma.AuditoriaEventoWhereInput;
    none?: Prisma.AuditoriaEventoWhereInput;
};
export type AuditoriaEventoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AuditoriaEventoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    atorPapel?: Prisma.SortOrder;
    atorId?: Prisma.SortOrder;
    cpfHash?: Prisma.SortOrder;
    payload?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AuditoriaEventoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    atorPapel?: Prisma.SortOrder;
    atorId?: Prisma.SortOrder;
    cpfHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AuditoriaEventoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    atorPapel?: Prisma.SortOrder;
    atorId?: Prisma.SortOrder;
    cpfHash?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AuditoriaEventoCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.AuditoriaEventoCreateWithoutEdicaoInput, Prisma.AuditoriaEventoUncheckedCreateWithoutEdicaoInput> | Prisma.AuditoriaEventoCreateWithoutEdicaoInput[] | Prisma.AuditoriaEventoUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.AuditoriaEventoCreateOrConnectWithoutEdicaoInput | Prisma.AuditoriaEventoCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.AuditoriaEventoCreateManyEdicaoInputEnvelope;
    connect?: Prisma.AuditoriaEventoWhereUniqueInput | Prisma.AuditoriaEventoWhereUniqueInput[];
};
export type AuditoriaEventoUncheckedCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.AuditoriaEventoCreateWithoutEdicaoInput, Prisma.AuditoriaEventoUncheckedCreateWithoutEdicaoInput> | Prisma.AuditoriaEventoCreateWithoutEdicaoInput[] | Prisma.AuditoriaEventoUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.AuditoriaEventoCreateOrConnectWithoutEdicaoInput | Prisma.AuditoriaEventoCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.AuditoriaEventoCreateManyEdicaoInputEnvelope;
    connect?: Prisma.AuditoriaEventoWhereUniqueInput | Prisma.AuditoriaEventoWhereUniqueInput[];
};
export type AuditoriaEventoUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.AuditoriaEventoCreateWithoutEdicaoInput, Prisma.AuditoriaEventoUncheckedCreateWithoutEdicaoInput> | Prisma.AuditoriaEventoCreateWithoutEdicaoInput[] | Prisma.AuditoriaEventoUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.AuditoriaEventoCreateOrConnectWithoutEdicaoInput | Prisma.AuditoriaEventoCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.AuditoriaEventoUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.AuditoriaEventoUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.AuditoriaEventoCreateManyEdicaoInputEnvelope;
    set?: Prisma.AuditoriaEventoWhereUniqueInput | Prisma.AuditoriaEventoWhereUniqueInput[];
    disconnect?: Prisma.AuditoriaEventoWhereUniqueInput | Prisma.AuditoriaEventoWhereUniqueInput[];
    delete?: Prisma.AuditoriaEventoWhereUniqueInput | Prisma.AuditoriaEventoWhereUniqueInput[];
    connect?: Prisma.AuditoriaEventoWhereUniqueInput | Prisma.AuditoriaEventoWhereUniqueInput[];
    update?: Prisma.AuditoriaEventoUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.AuditoriaEventoUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.AuditoriaEventoUpdateManyWithWhereWithoutEdicaoInput | Prisma.AuditoriaEventoUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.AuditoriaEventoScalarWhereInput | Prisma.AuditoriaEventoScalarWhereInput[];
};
export type AuditoriaEventoUncheckedUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.AuditoriaEventoCreateWithoutEdicaoInput, Prisma.AuditoriaEventoUncheckedCreateWithoutEdicaoInput> | Prisma.AuditoriaEventoCreateWithoutEdicaoInput[] | Prisma.AuditoriaEventoUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.AuditoriaEventoCreateOrConnectWithoutEdicaoInput | Prisma.AuditoriaEventoCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.AuditoriaEventoUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.AuditoriaEventoUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.AuditoriaEventoCreateManyEdicaoInputEnvelope;
    set?: Prisma.AuditoriaEventoWhereUniqueInput | Prisma.AuditoriaEventoWhereUniqueInput[];
    disconnect?: Prisma.AuditoriaEventoWhereUniqueInput | Prisma.AuditoriaEventoWhereUniqueInput[];
    delete?: Prisma.AuditoriaEventoWhereUniqueInput | Prisma.AuditoriaEventoWhereUniqueInput[];
    connect?: Prisma.AuditoriaEventoWhereUniqueInput | Prisma.AuditoriaEventoWhereUniqueInput[];
    update?: Prisma.AuditoriaEventoUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.AuditoriaEventoUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.AuditoriaEventoUpdateManyWithWhereWithoutEdicaoInput | Prisma.AuditoriaEventoUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.AuditoriaEventoScalarWhereInput | Prisma.AuditoriaEventoScalarWhereInput[];
};
export type EnumTipoAuditoriaFieldUpdateOperationsInput = {
    set?: $Enums.TipoAuditoria;
};
export type NullableEnumPapelAuditoriaFieldUpdateOperationsInput = {
    set?: $Enums.PapelAuditoria | null;
};
export type AuditoriaEventoCreateWithoutEdicaoInput = {
    id?: string;
    tipo: $Enums.TipoAuditoria;
    atorPapel?: $Enums.PapelAuditoria | null;
    atorId?: string | null;
    cpfHash?: string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type AuditoriaEventoUncheckedCreateWithoutEdicaoInput = {
    id?: string;
    tipo: $Enums.TipoAuditoria;
    atorPapel?: $Enums.PapelAuditoria | null;
    atorId?: string | null;
    cpfHash?: string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type AuditoriaEventoCreateOrConnectWithoutEdicaoInput = {
    where: Prisma.AuditoriaEventoWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuditoriaEventoCreateWithoutEdicaoInput, Prisma.AuditoriaEventoUncheckedCreateWithoutEdicaoInput>;
};
export type AuditoriaEventoCreateManyEdicaoInputEnvelope = {
    data: Prisma.AuditoriaEventoCreateManyEdicaoInput | Prisma.AuditoriaEventoCreateManyEdicaoInput[];
    skipDuplicates?: boolean;
};
export type AuditoriaEventoUpsertWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.AuditoriaEventoWhereUniqueInput;
    update: Prisma.XOR<Prisma.AuditoriaEventoUpdateWithoutEdicaoInput, Prisma.AuditoriaEventoUncheckedUpdateWithoutEdicaoInput>;
    create: Prisma.XOR<Prisma.AuditoriaEventoCreateWithoutEdicaoInput, Prisma.AuditoriaEventoUncheckedCreateWithoutEdicaoInput>;
};
export type AuditoriaEventoUpdateWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.AuditoriaEventoWhereUniqueInput;
    data: Prisma.XOR<Prisma.AuditoriaEventoUpdateWithoutEdicaoInput, Prisma.AuditoriaEventoUncheckedUpdateWithoutEdicaoInput>;
};
export type AuditoriaEventoUpdateManyWithWhereWithoutEdicaoInput = {
    where: Prisma.AuditoriaEventoScalarWhereInput;
    data: Prisma.XOR<Prisma.AuditoriaEventoUpdateManyMutationInput, Prisma.AuditoriaEventoUncheckedUpdateManyWithoutEdicaoInput>;
};
export type AuditoriaEventoScalarWhereInput = {
    AND?: Prisma.AuditoriaEventoScalarWhereInput | Prisma.AuditoriaEventoScalarWhereInput[];
    OR?: Prisma.AuditoriaEventoScalarWhereInput[];
    NOT?: Prisma.AuditoriaEventoScalarWhereInput | Prisma.AuditoriaEventoScalarWhereInput[];
    id?: Prisma.StringFilter<"AuditoriaEvento"> | string;
    edicaoId?: Prisma.StringNullableFilter<"AuditoriaEvento"> | string | null;
    tipo?: Prisma.EnumTipoAuditoriaFilter<"AuditoriaEvento"> | $Enums.TipoAuditoria;
    atorPapel?: Prisma.EnumPapelAuditoriaNullableFilter<"AuditoriaEvento"> | $Enums.PapelAuditoria | null;
    atorId?: Prisma.StringNullableFilter<"AuditoriaEvento"> | string | null;
    cpfHash?: Prisma.StringNullableFilter<"AuditoriaEvento"> | string | null;
    payload?: Prisma.JsonNullableFilter<"AuditoriaEvento">;
    createdAt?: Prisma.DateTimeFilter<"AuditoriaEvento"> | Date | string;
};
export type AuditoriaEventoCreateManyEdicaoInput = {
    id?: string;
    tipo: $Enums.TipoAuditoria;
    atorPapel?: $Enums.PapelAuditoria | null;
    atorId?: string | null;
    cpfHash?: string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type AuditoriaEventoUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoAuditoriaFieldUpdateOperationsInput | $Enums.TipoAuditoria;
    atorPapel?: Prisma.NullableEnumPapelAuditoriaFieldUpdateOperationsInput | $Enums.PapelAuditoria | null;
    atorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cpfHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditoriaEventoUncheckedUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoAuditoriaFieldUpdateOperationsInput | $Enums.TipoAuditoria;
    atorPapel?: Prisma.NullableEnumPapelAuditoriaFieldUpdateOperationsInput | $Enums.PapelAuditoria | null;
    atorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cpfHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditoriaEventoUncheckedUpdateManyWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoAuditoriaFieldUpdateOperationsInput | $Enums.TipoAuditoria;
    atorPapel?: Prisma.NullableEnumPapelAuditoriaFieldUpdateOperationsInput | $Enums.PapelAuditoria | null;
    atorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cpfHash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payload?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuditoriaEventoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    tipo?: boolean;
    atorPapel?: boolean;
    atorId?: boolean;
    cpfHash?: boolean;
    payload?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.AuditoriaEvento$edicaoArgs<ExtArgs>;
}, ExtArgs["result"]["auditoriaEvento"]>;
export type AuditoriaEventoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    tipo?: boolean;
    atorPapel?: boolean;
    atorId?: boolean;
    cpfHash?: boolean;
    payload?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.AuditoriaEvento$edicaoArgs<ExtArgs>;
}, ExtArgs["result"]["auditoriaEvento"]>;
export type AuditoriaEventoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    tipo?: boolean;
    atorPapel?: boolean;
    atorId?: boolean;
    cpfHash?: boolean;
    payload?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.AuditoriaEvento$edicaoArgs<ExtArgs>;
}, ExtArgs["result"]["auditoriaEvento"]>;
export type AuditoriaEventoSelectScalar = {
    id?: boolean;
    edicaoId?: boolean;
    tipo?: boolean;
    atorPapel?: boolean;
    atorId?: boolean;
    cpfHash?: boolean;
    payload?: boolean;
    createdAt?: boolean;
};
export type AuditoriaEventoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "edicaoId" | "tipo" | "atorPapel" | "atorId" | "cpfHash" | "payload" | "createdAt", ExtArgs["result"]["auditoriaEvento"]>;
export type AuditoriaEventoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.AuditoriaEvento$edicaoArgs<ExtArgs>;
};
export type AuditoriaEventoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.AuditoriaEvento$edicaoArgs<ExtArgs>;
};
export type AuditoriaEventoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.AuditoriaEvento$edicaoArgs<ExtArgs>;
};
export type $AuditoriaEventoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AuditoriaEvento";
    objects: {
        edicao: Prisma.$EdicaoPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        edicaoId: string | null;
        tipo: $Enums.TipoAuditoria;
        atorPapel: $Enums.PapelAuditoria | null;
        atorId: string | null;
        cpfHash: string | null;
        payload: runtime.JsonValue | null;
        createdAt: Date;
    }, ExtArgs["result"]["auditoriaEvento"]>;
    composites: {};
};
export type AuditoriaEventoGetPayload<S extends boolean | null | undefined | AuditoriaEventoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AuditoriaEventoPayload, S>;
export type AuditoriaEventoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AuditoriaEventoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AuditoriaEventoCountAggregateInputType | true;
};
export interface AuditoriaEventoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AuditoriaEvento'];
        meta: {
            name: 'AuditoriaEvento';
        };
    };
    findUnique<T extends AuditoriaEventoFindUniqueArgs>(args: Prisma.SelectSubset<T, AuditoriaEventoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AuditoriaEventoClient<runtime.Types.Result.GetResult<Prisma.$AuditoriaEventoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AuditoriaEventoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AuditoriaEventoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuditoriaEventoClient<runtime.Types.Result.GetResult<Prisma.$AuditoriaEventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AuditoriaEventoFindFirstArgs>(args?: Prisma.SelectSubset<T, AuditoriaEventoFindFirstArgs<ExtArgs>>): Prisma.Prisma__AuditoriaEventoClient<runtime.Types.Result.GetResult<Prisma.$AuditoriaEventoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AuditoriaEventoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AuditoriaEventoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuditoriaEventoClient<runtime.Types.Result.GetResult<Prisma.$AuditoriaEventoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AuditoriaEventoFindManyArgs>(args?: Prisma.SelectSubset<T, AuditoriaEventoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditoriaEventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AuditoriaEventoCreateArgs>(args: Prisma.SelectSubset<T, AuditoriaEventoCreateArgs<ExtArgs>>): Prisma.Prisma__AuditoriaEventoClient<runtime.Types.Result.GetResult<Prisma.$AuditoriaEventoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AuditoriaEventoCreateManyArgs>(args?: Prisma.SelectSubset<T, AuditoriaEventoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AuditoriaEventoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AuditoriaEventoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditoriaEventoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AuditoriaEventoDeleteArgs>(args: Prisma.SelectSubset<T, AuditoriaEventoDeleteArgs<ExtArgs>>): Prisma.Prisma__AuditoriaEventoClient<runtime.Types.Result.GetResult<Prisma.$AuditoriaEventoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AuditoriaEventoUpdateArgs>(args: Prisma.SelectSubset<T, AuditoriaEventoUpdateArgs<ExtArgs>>): Prisma.Prisma__AuditoriaEventoClient<runtime.Types.Result.GetResult<Prisma.$AuditoriaEventoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AuditoriaEventoDeleteManyArgs>(args?: Prisma.SelectSubset<T, AuditoriaEventoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AuditoriaEventoUpdateManyArgs>(args: Prisma.SelectSubset<T, AuditoriaEventoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AuditoriaEventoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AuditoriaEventoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditoriaEventoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AuditoriaEventoUpsertArgs>(args: Prisma.SelectSubset<T, AuditoriaEventoUpsertArgs<ExtArgs>>): Prisma.Prisma__AuditoriaEventoClient<runtime.Types.Result.GetResult<Prisma.$AuditoriaEventoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AuditoriaEventoCountArgs>(args?: Prisma.Subset<T, AuditoriaEventoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AuditoriaEventoCountAggregateOutputType> : number>;
    aggregate<T extends AuditoriaEventoAggregateArgs>(args: Prisma.Subset<T, AuditoriaEventoAggregateArgs>): Prisma.PrismaPromise<GetAuditoriaEventoAggregateType<T>>;
    groupBy<T extends AuditoriaEventoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AuditoriaEventoGroupByArgs['orderBy'];
    } : {
        orderBy?: AuditoriaEventoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AuditoriaEventoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditoriaEventoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AuditoriaEventoFieldRefs;
}
export interface Prisma__AuditoriaEventoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    edicao<T extends Prisma.AuditoriaEvento$edicaoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuditoriaEvento$edicaoArgs<ExtArgs>>): Prisma.Prisma__EdicaoClient<runtime.Types.Result.GetResult<Prisma.$EdicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AuditoriaEventoFieldRefs {
    readonly id: Prisma.FieldRef<"AuditoriaEvento", 'String'>;
    readonly edicaoId: Prisma.FieldRef<"AuditoriaEvento", 'String'>;
    readonly tipo: Prisma.FieldRef<"AuditoriaEvento", 'TipoAuditoria'>;
    readonly atorPapel: Prisma.FieldRef<"AuditoriaEvento", 'PapelAuditoria'>;
    readonly atorId: Prisma.FieldRef<"AuditoriaEvento", 'String'>;
    readonly cpfHash: Prisma.FieldRef<"AuditoriaEvento", 'String'>;
    readonly payload: Prisma.FieldRef<"AuditoriaEvento", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"AuditoriaEvento", 'DateTime'>;
}
export type AuditoriaEventoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditoriaEventoSelect<ExtArgs> | null;
    omit?: Prisma.AuditoriaEventoOmit<ExtArgs> | null;
    include?: Prisma.AuditoriaEventoInclude<ExtArgs> | null;
    where: Prisma.AuditoriaEventoWhereUniqueInput;
};
export type AuditoriaEventoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditoriaEventoSelect<ExtArgs> | null;
    omit?: Prisma.AuditoriaEventoOmit<ExtArgs> | null;
    include?: Prisma.AuditoriaEventoInclude<ExtArgs> | null;
    where: Prisma.AuditoriaEventoWhereUniqueInput;
};
export type AuditoriaEventoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditoriaEventoSelect<ExtArgs> | null;
    omit?: Prisma.AuditoriaEventoOmit<ExtArgs> | null;
    include?: Prisma.AuditoriaEventoInclude<ExtArgs> | null;
    where?: Prisma.AuditoriaEventoWhereInput;
    orderBy?: Prisma.AuditoriaEventoOrderByWithRelationInput | Prisma.AuditoriaEventoOrderByWithRelationInput[];
    cursor?: Prisma.AuditoriaEventoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditoriaEventoScalarFieldEnum | Prisma.AuditoriaEventoScalarFieldEnum[];
};
export type AuditoriaEventoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditoriaEventoSelect<ExtArgs> | null;
    omit?: Prisma.AuditoriaEventoOmit<ExtArgs> | null;
    include?: Prisma.AuditoriaEventoInclude<ExtArgs> | null;
    where?: Prisma.AuditoriaEventoWhereInput;
    orderBy?: Prisma.AuditoriaEventoOrderByWithRelationInput | Prisma.AuditoriaEventoOrderByWithRelationInput[];
    cursor?: Prisma.AuditoriaEventoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditoriaEventoScalarFieldEnum | Prisma.AuditoriaEventoScalarFieldEnum[];
};
export type AuditoriaEventoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditoriaEventoSelect<ExtArgs> | null;
    omit?: Prisma.AuditoriaEventoOmit<ExtArgs> | null;
    include?: Prisma.AuditoriaEventoInclude<ExtArgs> | null;
    where?: Prisma.AuditoriaEventoWhereInput;
    orderBy?: Prisma.AuditoriaEventoOrderByWithRelationInput | Prisma.AuditoriaEventoOrderByWithRelationInput[];
    cursor?: Prisma.AuditoriaEventoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditoriaEventoScalarFieldEnum | Prisma.AuditoriaEventoScalarFieldEnum[];
};
export type AuditoriaEventoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditoriaEventoSelect<ExtArgs> | null;
    omit?: Prisma.AuditoriaEventoOmit<ExtArgs> | null;
    include?: Prisma.AuditoriaEventoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditoriaEventoCreateInput, Prisma.AuditoriaEventoUncheckedCreateInput>;
};
export type AuditoriaEventoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AuditoriaEventoCreateManyInput | Prisma.AuditoriaEventoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AuditoriaEventoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditoriaEventoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuditoriaEventoOmit<ExtArgs> | null;
    data: Prisma.AuditoriaEventoCreateManyInput | Prisma.AuditoriaEventoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AuditoriaEventoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AuditoriaEventoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditoriaEventoSelect<ExtArgs> | null;
    omit?: Prisma.AuditoriaEventoOmit<ExtArgs> | null;
    include?: Prisma.AuditoriaEventoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditoriaEventoUpdateInput, Prisma.AuditoriaEventoUncheckedUpdateInput>;
    where: Prisma.AuditoriaEventoWhereUniqueInput;
};
export type AuditoriaEventoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AuditoriaEventoUpdateManyMutationInput, Prisma.AuditoriaEventoUncheckedUpdateManyInput>;
    where?: Prisma.AuditoriaEventoWhereInput;
    limit?: number;
};
export type AuditoriaEventoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditoriaEventoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AuditoriaEventoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AuditoriaEventoUpdateManyMutationInput, Prisma.AuditoriaEventoUncheckedUpdateManyInput>;
    where?: Prisma.AuditoriaEventoWhereInput;
    limit?: number;
    include?: Prisma.AuditoriaEventoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AuditoriaEventoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditoriaEventoSelect<ExtArgs> | null;
    omit?: Prisma.AuditoriaEventoOmit<ExtArgs> | null;
    include?: Prisma.AuditoriaEventoInclude<ExtArgs> | null;
    where: Prisma.AuditoriaEventoWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuditoriaEventoCreateInput, Prisma.AuditoriaEventoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AuditoriaEventoUpdateInput, Prisma.AuditoriaEventoUncheckedUpdateInput>;
};
export type AuditoriaEventoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditoriaEventoSelect<ExtArgs> | null;
    omit?: Prisma.AuditoriaEventoOmit<ExtArgs> | null;
    include?: Prisma.AuditoriaEventoInclude<ExtArgs> | null;
    where: Prisma.AuditoriaEventoWhereUniqueInput;
};
export type AuditoriaEventoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditoriaEventoWhereInput;
    limit?: number;
};
export type AuditoriaEvento$edicaoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EdicaoSelect<ExtArgs> | null;
    omit?: Prisma.EdicaoOmit<ExtArgs> | null;
    include?: Prisma.EdicaoInclude<ExtArgs> | null;
    where?: Prisma.EdicaoWhereInput;
};
export type AuditoriaEventoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AuditoriaEventoSelect<ExtArgs> | null;
    omit?: Prisma.AuditoriaEventoOmit<ExtArgs> | null;
    include?: Prisma.AuditoriaEventoInclude<ExtArgs> | null;
};
