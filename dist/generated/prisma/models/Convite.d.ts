import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type ConviteModel = runtime.Types.Result.DefaultSelection<Prisma.$ConvitePayload>;
export type AggregateConvite = {
    _count: ConviteCountAggregateOutputType | null;
    _min: ConviteMinAggregateOutputType | null;
    _max: ConviteMaxAggregateOutputType | null;
};
export type ConviteMinAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    comunidadeId: string | null;
    tipo: $Enums.TipoConvite | null;
    token: string | null;
    criadoPorId: string | null;
    liderCriadorId: string | null;
    expiraEm: Date | null;
    usadoEm: Date | null;
    ativo: boolean | null;
    createdAt: Date | null;
};
export type ConviteMaxAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    comunidadeId: string | null;
    tipo: $Enums.TipoConvite | null;
    token: string | null;
    criadoPorId: string | null;
    liderCriadorId: string | null;
    expiraEm: Date | null;
    usadoEm: Date | null;
    ativo: boolean | null;
    createdAt: Date | null;
};
export type ConviteCountAggregateOutputType = {
    id: number;
    edicaoId: number;
    comunidadeId: number;
    tipo: number;
    token: number;
    criadoPorId: number;
    liderCriadorId: number;
    expiraEm: number;
    usadoEm: number;
    ativo: number;
    createdAt: number;
    _all: number;
};
export type ConviteMinAggregateInputType = {
    id?: true;
    edicaoId?: true;
    comunidadeId?: true;
    tipo?: true;
    token?: true;
    criadoPorId?: true;
    liderCriadorId?: true;
    expiraEm?: true;
    usadoEm?: true;
    ativo?: true;
    createdAt?: true;
};
export type ConviteMaxAggregateInputType = {
    id?: true;
    edicaoId?: true;
    comunidadeId?: true;
    tipo?: true;
    token?: true;
    criadoPorId?: true;
    liderCriadorId?: true;
    expiraEm?: true;
    usadoEm?: true;
    ativo?: true;
    createdAt?: true;
};
export type ConviteCountAggregateInputType = {
    id?: true;
    edicaoId?: true;
    comunidadeId?: true;
    tipo?: true;
    token?: true;
    criadoPorId?: true;
    liderCriadorId?: true;
    expiraEm?: true;
    usadoEm?: true;
    ativo?: true;
    createdAt?: true;
    _all?: true;
};
export type ConviteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConviteWhereInput;
    orderBy?: Prisma.ConviteOrderByWithRelationInput | Prisma.ConviteOrderByWithRelationInput[];
    cursor?: Prisma.ConviteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ConviteCountAggregateInputType;
    _min?: ConviteMinAggregateInputType;
    _max?: ConviteMaxAggregateInputType;
};
export type GetConviteAggregateType<T extends ConviteAggregateArgs> = {
    [P in keyof T & keyof AggregateConvite]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConvite[P]> : Prisma.GetScalarType<T[P], AggregateConvite[P]>;
};
export type ConviteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConviteWhereInput;
    orderBy?: Prisma.ConviteOrderByWithAggregationInput | Prisma.ConviteOrderByWithAggregationInput[];
    by: Prisma.ConviteScalarFieldEnum[] | Prisma.ConviteScalarFieldEnum;
    having?: Prisma.ConviteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConviteCountAggregateInputType | true;
    _min?: ConviteMinAggregateInputType;
    _max?: ConviteMaxAggregateInputType;
};
export type ConviteGroupByOutputType = {
    id: string;
    edicaoId: string;
    comunidadeId: string;
    tipo: $Enums.TipoConvite;
    token: string;
    criadoPorId: string | null;
    liderCriadorId: string | null;
    expiraEm: Date | null;
    usadoEm: Date | null;
    ativo: boolean;
    createdAt: Date;
    _count: ConviteCountAggregateOutputType | null;
    _min: ConviteMinAggregateOutputType | null;
    _max: ConviteMaxAggregateOutputType | null;
};
export type GetConviteGroupByPayload<T extends ConviteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ConviteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ConviteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ConviteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ConviteGroupByOutputType[P]>;
}>>;
export type ConviteWhereInput = {
    AND?: Prisma.ConviteWhereInput | Prisma.ConviteWhereInput[];
    OR?: Prisma.ConviteWhereInput[];
    NOT?: Prisma.ConviteWhereInput | Prisma.ConviteWhereInput[];
    id?: Prisma.StringFilter<"Convite"> | string;
    edicaoId?: Prisma.StringFilter<"Convite"> | string;
    comunidadeId?: Prisma.StringFilter<"Convite"> | string;
    tipo?: Prisma.EnumTipoConviteFilter<"Convite"> | $Enums.TipoConvite;
    token?: Prisma.StringFilter<"Convite"> | string;
    criadoPorId?: Prisma.StringNullableFilter<"Convite"> | string | null;
    liderCriadorId?: Prisma.StringNullableFilter<"Convite"> | string | null;
    expiraEm?: Prisma.DateTimeNullableFilter<"Convite"> | Date | string | null;
    usadoEm?: Prisma.DateTimeNullableFilter<"Convite"> | Date | string | null;
    ativo?: Prisma.BoolFilter<"Convite"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Convite"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
    comunidade?: Prisma.XOR<Prisma.ComunidadeScalarRelationFilter, Prisma.ComunidadeWhereInput>;
    criadoPor?: Prisma.XOR<Prisma.UsuarioAdminNullableScalarRelationFilter, Prisma.UsuarioAdminWhereInput> | null;
    liderCriador?: Prisma.XOR<Prisma.LiderNullableScalarRelationFilter, Prisma.LiderWhereInput> | null;
    lideres?: Prisma.LiderListRelationFilter;
};
export type ConviteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    comunidadeId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    criadoPorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    liderCriadorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    expiraEm?: Prisma.SortOrderInput | Prisma.SortOrder;
    usadoEm?: Prisma.SortOrderInput | Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    edicao?: Prisma.EdicaoOrderByWithRelationInput;
    comunidade?: Prisma.ComunidadeOrderByWithRelationInput;
    criadoPor?: Prisma.UsuarioAdminOrderByWithRelationInput;
    liderCriador?: Prisma.LiderOrderByWithRelationInput;
    lideres?: Prisma.LiderOrderByRelationAggregateInput;
};
export type ConviteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    token?: string;
    AND?: Prisma.ConviteWhereInput | Prisma.ConviteWhereInput[];
    OR?: Prisma.ConviteWhereInput[];
    NOT?: Prisma.ConviteWhereInput | Prisma.ConviteWhereInput[];
    edicaoId?: Prisma.StringFilter<"Convite"> | string;
    comunidadeId?: Prisma.StringFilter<"Convite"> | string;
    tipo?: Prisma.EnumTipoConviteFilter<"Convite"> | $Enums.TipoConvite;
    criadoPorId?: Prisma.StringNullableFilter<"Convite"> | string | null;
    liderCriadorId?: Prisma.StringNullableFilter<"Convite"> | string | null;
    expiraEm?: Prisma.DateTimeNullableFilter<"Convite"> | Date | string | null;
    usadoEm?: Prisma.DateTimeNullableFilter<"Convite"> | Date | string | null;
    ativo?: Prisma.BoolFilter<"Convite"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Convite"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
    comunidade?: Prisma.XOR<Prisma.ComunidadeScalarRelationFilter, Prisma.ComunidadeWhereInput>;
    criadoPor?: Prisma.XOR<Prisma.UsuarioAdminNullableScalarRelationFilter, Prisma.UsuarioAdminWhereInput> | null;
    liderCriador?: Prisma.XOR<Prisma.LiderNullableScalarRelationFilter, Prisma.LiderWhereInput> | null;
    lideres?: Prisma.LiderListRelationFilter;
}, "id" | "token">;
export type ConviteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    comunidadeId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    criadoPorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    liderCriadorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    expiraEm?: Prisma.SortOrderInput | Prisma.SortOrder;
    usadoEm?: Prisma.SortOrderInput | Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ConviteCountOrderByAggregateInput;
    _max?: Prisma.ConviteMaxOrderByAggregateInput;
    _min?: Prisma.ConviteMinOrderByAggregateInput;
};
export type ConviteScalarWhereWithAggregatesInput = {
    AND?: Prisma.ConviteScalarWhereWithAggregatesInput | Prisma.ConviteScalarWhereWithAggregatesInput[];
    OR?: Prisma.ConviteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ConviteScalarWhereWithAggregatesInput | Prisma.ConviteScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Convite"> | string;
    edicaoId?: Prisma.StringWithAggregatesFilter<"Convite"> | string;
    comunidadeId?: Prisma.StringWithAggregatesFilter<"Convite"> | string;
    tipo?: Prisma.EnumTipoConviteWithAggregatesFilter<"Convite"> | $Enums.TipoConvite;
    token?: Prisma.StringWithAggregatesFilter<"Convite"> | string;
    criadoPorId?: Prisma.StringNullableWithAggregatesFilter<"Convite"> | string | null;
    liderCriadorId?: Prisma.StringNullableWithAggregatesFilter<"Convite"> | string | null;
    expiraEm?: Prisma.DateTimeNullableWithAggregatesFilter<"Convite"> | Date | string | null;
    usadoEm?: Prisma.DateTimeNullableWithAggregatesFilter<"Convite"> | Date | string | null;
    ativo?: Prisma.BoolWithAggregatesFilter<"Convite"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Convite"> | Date | string;
};
export type ConviteCreateInput = {
    id?: string;
    tipo: $Enums.TipoConvite;
    token: string;
    expiraEm?: Date | string | null;
    usadoEm?: Date | string | null;
    ativo?: boolean;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutConvitesInput;
    comunidade: Prisma.ComunidadeCreateNestedOneWithoutConvitesInput;
    criadoPor?: Prisma.UsuarioAdminCreateNestedOneWithoutConvitesCriadosInput;
    liderCriador?: Prisma.LiderCreateNestedOneWithoutConvitesCriadosInput;
    lideres?: Prisma.LiderCreateNestedManyWithoutConviteInput;
};
export type ConviteUncheckedCreateInput = {
    id?: string;
    edicaoId: string;
    comunidadeId: string;
    tipo: $Enums.TipoConvite;
    token: string;
    criadoPorId?: string | null;
    liderCriadorId?: string | null;
    expiraEm?: Date | string | null;
    usadoEm?: Date | string | null;
    ativo?: boolean;
    createdAt?: Date | string;
    lideres?: Prisma.LiderUncheckedCreateNestedManyWithoutConviteInput;
};
export type ConviteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiraEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    usadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutConvitesNestedInput;
    comunidade?: Prisma.ComunidadeUpdateOneRequiredWithoutConvitesNestedInput;
    criadoPor?: Prisma.UsuarioAdminUpdateOneWithoutConvitesCriadosNestedInput;
    liderCriador?: Prisma.LiderUpdateOneWithoutConvitesCriadosNestedInput;
    lideres?: Prisma.LiderUpdateManyWithoutConviteNestedInput;
};
export type ConviteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    criadoPorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    liderCriadorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiraEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    usadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lideres?: Prisma.LiderUncheckedUpdateManyWithoutConviteNestedInput;
};
export type ConviteCreateManyInput = {
    id?: string;
    edicaoId: string;
    comunidadeId: string;
    tipo: $Enums.TipoConvite;
    token: string;
    criadoPorId?: string | null;
    liderCriadorId?: string | null;
    expiraEm?: Date | string | null;
    usadoEm?: Date | string | null;
    ativo?: boolean;
    createdAt?: Date | string;
};
export type ConviteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiraEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    usadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConviteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    criadoPorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    liderCriadorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiraEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    usadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConviteListRelationFilter = {
    every?: Prisma.ConviteWhereInput;
    some?: Prisma.ConviteWhereInput;
    none?: Prisma.ConviteWhereInput;
};
export type ConviteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ConviteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    comunidadeId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    criadoPorId?: Prisma.SortOrder;
    liderCriadorId?: Prisma.SortOrder;
    expiraEm?: Prisma.SortOrder;
    usadoEm?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ConviteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    comunidadeId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    criadoPorId?: Prisma.SortOrder;
    liderCriadorId?: Prisma.SortOrder;
    expiraEm?: Prisma.SortOrder;
    usadoEm?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ConviteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    comunidadeId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    criadoPorId?: Prisma.SortOrder;
    liderCriadorId?: Prisma.SortOrder;
    expiraEm?: Prisma.SortOrder;
    usadoEm?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ConviteNullableScalarRelationFilter = {
    is?: Prisma.ConviteWhereInput | null;
    isNot?: Prisma.ConviteWhereInput | null;
};
export type ConviteCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.ConviteCreateWithoutEdicaoInput, Prisma.ConviteUncheckedCreateWithoutEdicaoInput> | Prisma.ConviteCreateWithoutEdicaoInput[] | Prisma.ConviteUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.ConviteCreateOrConnectWithoutEdicaoInput | Prisma.ConviteCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.ConviteCreateManyEdicaoInputEnvelope;
    connect?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
};
export type ConviteUncheckedCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.ConviteCreateWithoutEdicaoInput, Prisma.ConviteUncheckedCreateWithoutEdicaoInput> | Prisma.ConviteCreateWithoutEdicaoInput[] | Prisma.ConviteUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.ConviteCreateOrConnectWithoutEdicaoInput | Prisma.ConviteCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.ConviteCreateManyEdicaoInputEnvelope;
    connect?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
};
export type ConviteUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.ConviteCreateWithoutEdicaoInput, Prisma.ConviteUncheckedCreateWithoutEdicaoInput> | Prisma.ConviteCreateWithoutEdicaoInput[] | Prisma.ConviteUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.ConviteCreateOrConnectWithoutEdicaoInput | Prisma.ConviteCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.ConviteUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.ConviteUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.ConviteCreateManyEdicaoInputEnvelope;
    set?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    disconnect?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    delete?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    connect?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    update?: Prisma.ConviteUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.ConviteUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.ConviteUpdateManyWithWhereWithoutEdicaoInput | Prisma.ConviteUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.ConviteScalarWhereInput | Prisma.ConviteScalarWhereInput[];
};
export type ConviteUncheckedUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.ConviteCreateWithoutEdicaoInput, Prisma.ConviteUncheckedCreateWithoutEdicaoInput> | Prisma.ConviteCreateWithoutEdicaoInput[] | Prisma.ConviteUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.ConviteCreateOrConnectWithoutEdicaoInput | Prisma.ConviteCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.ConviteUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.ConviteUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.ConviteCreateManyEdicaoInputEnvelope;
    set?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    disconnect?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    delete?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    connect?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    update?: Prisma.ConviteUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.ConviteUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.ConviteUpdateManyWithWhereWithoutEdicaoInput | Prisma.ConviteUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.ConviteScalarWhereInput | Prisma.ConviteScalarWhereInput[];
};
export type ConviteCreateNestedManyWithoutCriadoPorInput = {
    create?: Prisma.XOR<Prisma.ConviteCreateWithoutCriadoPorInput, Prisma.ConviteUncheckedCreateWithoutCriadoPorInput> | Prisma.ConviteCreateWithoutCriadoPorInput[] | Prisma.ConviteUncheckedCreateWithoutCriadoPorInput[];
    connectOrCreate?: Prisma.ConviteCreateOrConnectWithoutCriadoPorInput | Prisma.ConviteCreateOrConnectWithoutCriadoPorInput[];
    createMany?: Prisma.ConviteCreateManyCriadoPorInputEnvelope;
    connect?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
};
export type ConviteUncheckedCreateNestedManyWithoutCriadoPorInput = {
    create?: Prisma.XOR<Prisma.ConviteCreateWithoutCriadoPorInput, Prisma.ConviteUncheckedCreateWithoutCriadoPorInput> | Prisma.ConviteCreateWithoutCriadoPorInput[] | Prisma.ConviteUncheckedCreateWithoutCriadoPorInput[];
    connectOrCreate?: Prisma.ConviteCreateOrConnectWithoutCriadoPorInput | Prisma.ConviteCreateOrConnectWithoutCriadoPorInput[];
    createMany?: Prisma.ConviteCreateManyCriadoPorInputEnvelope;
    connect?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
};
export type ConviteUpdateManyWithoutCriadoPorNestedInput = {
    create?: Prisma.XOR<Prisma.ConviteCreateWithoutCriadoPorInput, Prisma.ConviteUncheckedCreateWithoutCriadoPorInput> | Prisma.ConviteCreateWithoutCriadoPorInput[] | Prisma.ConviteUncheckedCreateWithoutCriadoPorInput[];
    connectOrCreate?: Prisma.ConviteCreateOrConnectWithoutCriadoPorInput | Prisma.ConviteCreateOrConnectWithoutCriadoPorInput[];
    upsert?: Prisma.ConviteUpsertWithWhereUniqueWithoutCriadoPorInput | Prisma.ConviteUpsertWithWhereUniqueWithoutCriadoPorInput[];
    createMany?: Prisma.ConviteCreateManyCriadoPorInputEnvelope;
    set?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    disconnect?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    delete?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    connect?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    update?: Prisma.ConviteUpdateWithWhereUniqueWithoutCriadoPorInput | Prisma.ConviteUpdateWithWhereUniqueWithoutCriadoPorInput[];
    updateMany?: Prisma.ConviteUpdateManyWithWhereWithoutCriadoPorInput | Prisma.ConviteUpdateManyWithWhereWithoutCriadoPorInput[];
    deleteMany?: Prisma.ConviteScalarWhereInput | Prisma.ConviteScalarWhereInput[];
};
export type ConviteUncheckedUpdateManyWithoutCriadoPorNestedInput = {
    create?: Prisma.XOR<Prisma.ConviteCreateWithoutCriadoPorInput, Prisma.ConviteUncheckedCreateWithoutCriadoPorInput> | Prisma.ConviteCreateWithoutCriadoPorInput[] | Prisma.ConviteUncheckedCreateWithoutCriadoPorInput[];
    connectOrCreate?: Prisma.ConviteCreateOrConnectWithoutCriadoPorInput | Prisma.ConviteCreateOrConnectWithoutCriadoPorInput[];
    upsert?: Prisma.ConviteUpsertWithWhereUniqueWithoutCriadoPorInput | Prisma.ConviteUpsertWithWhereUniqueWithoutCriadoPorInput[];
    createMany?: Prisma.ConviteCreateManyCriadoPorInputEnvelope;
    set?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    disconnect?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    delete?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    connect?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    update?: Prisma.ConviteUpdateWithWhereUniqueWithoutCriadoPorInput | Prisma.ConviteUpdateWithWhereUniqueWithoutCriadoPorInput[];
    updateMany?: Prisma.ConviteUpdateManyWithWhereWithoutCriadoPorInput | Prisma.ConviteUpdateManyWithWhereWithoutCriadoPorInput[];
    deleteMany?: Prisma.ConviteScalarWhereInput | Prisma.ConviteScalarWhereInput[];
};
export type ConviteCreateNestedManyWithoutComunidadeInput = {
    create?: Prisma.XOR<Prisma.ConviteCreateWithoutComunidadeInput, Prisma.ConviteUncheckedCreateWithoutComunidadeInput> | Prisma.ConviteCreateWithoutComunidadeInput[] | Prisma.ConviteUncheckedCreateWithoutComunidadeInput[];
    connectOrCreate?: Prisma.ConviteCreateOrConnectWithoutComunidadeInput | Prisma.ConviteCreateOrConnectWithoutComunidadeInput[];
    createMany?: Prisma.ConviteCreateManyComunidadeInputEnvelope;
    connect?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
};
export type ConviteUncheckedCreateNestedManyWithoutComunidadeInput = {
    create?: Prisma.XOR<Prisma.ConviteCreateWithoutComunidadeInput, Prisma.ConviteUncheckedCreateWithoutComunidadeInput> | Prisma.ConviteCreateWithoutComunidadeInput[] | Prisma.ConviteUncheckedCreateWithoutComunidadeInput[];
    connectOrCreate?: Prisma.ConviteCreateOrConnectWithoutComunidadeInput | Prisma.ConviteCreateOrConnectWithoutComunidadeInput[];
    createMany?: Prisma.ConviteCreateManyComunidadeInputEnvelope;
    connect?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
};
export type ConviteUpdateManyWithoutComunidadeNestedInput = {
    create?: Prisma.XOR<Prisma.ConviteCreateWithoutComunidadeInput, Prisma.ConviteUncheckedCreateWithoutComunidadeInput> | Prisma.ConviteCreateWithoutComunidadeInput[] | Prisma.ConviteUncheckedCreateWithoutComunidadeInput[];
    connectOrCreate?: Prisma.ConviteCreateOrConnectWithoutComunidadeInput | Prisma.ConviteCreateOrConnectWithoutComunidadeInput[];
    upsert?: Prisma.ConviteUpsertWithWhereUniqueWithoutComunidadeInput | Prisma.ConviteUpsertWithWhereUniqueWithoutComunidadeInput[];
    createMany?: Prisma.ConviteCreateManyComunidadeInputEnvelope;
    set?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    disconnect?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    delete?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    connect?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    update?: Prisma.ConviteUpdateWithWhereUniqueWithoutComunidadeInput | Prisma.ConviteUpdateWithWhereUniqueWithoutComunidadeInput[];
    updateMany?: Prisma.ConviteUpdateManyWithWhereWithoutComunidadeInput | Prisma.ConviteUpdateManyWithWhereWithoutComunidadeInput[];
    deleteMany?: Prisma.ConviteScalarWhereInput | Prisma.ConviteScalarWhereInput[];
};
export type ConviteUncheckedUpdateManyWithoutComunidadeNestedInput = {
    create?: Prisma.XOR<Prisma.ConviteCreateWithoutComunidadeInput, Prisma.ConviteUncheckedCreateWithoutComunidadeInput> | Prisma.ConviteCreateWithoutComunidadeInput[] | Prisma.ConviteUncheckedCreateWithoutComunidadeInput[];
    connectOrCreate?: Prisma.ConviteCreateOrConnectWithoutComunidadeInput | Prisma.ConviteCreateOrConnectWithoutComunidadeInput[];
    upsert?: Prisma.ConviteUpsertWithWhereUniqueWithoutComunidadeInput | Prisma.ConviteUpsertWithWhereUniqueWithoutComunidadeInput[];
    createMany?: Prisma.ConviteCreateManyComunidadeInputEnvelope;
    set?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    disconnect?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    delete?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    connect?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    update?: Prisma.ConviteUpdateWithWhereUniqueWithoutComunidadeInput | Prisma.ConviteUpdateWithWhereUniqueWithoutComunidadeInput[];
    updateMany?: Prisma.ConviteUpdateManyWithWhereWithoutComunidadeInput | Prisma.ConviteUpdateManyWithWhereWithoutComunidadeInput[];
    deleteMany?: Prisma.ConviteScalarWhereInput | Prisma.ConviteScalarWhereInput[];
};
export type EnumTipoConviteFieldUpdateOperationsInput = {
    set?: $Enums.TipoConvite;
};
export type ConviteCreateNestedOneWithoutLideresInput = {
    create?: Prisma.XOR<Prisma.ConviteCreateWithoutLideresInput, Prisma.ConviteUncheckedCreateWithoutLideresInput>;
    connectOrCreate?: Prisma.ConviteCreateOrConnectWithoutLideresInput;
    connect?: Prisma.ConviteWhereUniqueInput;
};
export type ConviteCreateNestedManyWithoutLiderCriadorInput = {
    create?: Prisma.XOR<Prisma.ConviteCreateWithoutLiderCriadorInput, Prisma.ConviteUncheckedCreateWithoutLiderCriadorInput> | Prisma.ConviteCreateWithoutLiderCriadorInput[] | Prisma.ConviteUncheckedCreateWithoutLiderCriadorInput[];
    connectOrCreate?: Prisma.ConviteCreateOrConnectWithoutLiderCriadorInput | Prisma.ConviteCreateOrConnectWithoutLiderCriadorInput[];
    createMany?: Prisma.ConviteCreateManyLiderCriadorInputEnvelope;
    connect?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
};
export type ConviteUncheckedCreateNestedManyWithoutLiderCriadorInput = {
    create?: Prisma.XOR<Prisma.ConviteCreateWithoutLiderCriadorInput, Prisma.ConviteUncheckedCreateWithoutLiderCriadorInput> | Prisma.ConviteCreateWithoutLiderCriadorInput[] | Prisma.ConviteUncheckedCreateWithoutLiderCriadorInput[];
    connectOrCreate?: Prisma.ConviteCreateOrConnectWithoutLiderCriadorInput | Prisma.ConviteCreateOrConnectWithoutLiderCriadorInput[];
    createMany?: Prisma.ConviteCreateManyLiderCriadorInputEnvelope;
    connect?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
};
export type ConviteUpdateOneWithoutLideresNestedInput = {
    create?: Prisma.XOR<Prisma.ConviteCreateWithoutLideresInput, Prisma.ConviteUncheckedCreateWithoutLideresInput>;
    connectOrCreate?: Prisma.ConviteCreateOrConnectWithoutLideresInput;
    upsert?: Prisma.ConviteUpsertWithoutLideresInput;
    disconnect?: Prisma.ConviteWhereInput | boolean;
    delete?: Prisma.ConviteWhereInput | boolean;
    connect?: Prisma.ConviteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ConviteUpdateToOneWithWhereWithoutLideresInput, Prisma.ConviteUpdateWithoutLideresInput>, Prisma.ConviteUncheckedUpdateWithoutLideresInput>;
};
export type ConviteUpdateManyWithoutLiderCriadorNestedInput = {
    create?: Prisma.XOR<Prisma.ConviteCreateWithoutLiderCriadorInput, Prisma.ConviteUncheckedCreateWithoutLiderCriadorInput> | Prisma.ConviteCreateWithoutLiderCriadorInput[] | Prisma.ConviteUncheckedCreateWithoutLiderCriadorInput[];
    connectOrCreate?: Prisma.ConviteCreateOrConnectWithoutLiderCriadorInput | Prisma.ConviteCreateOrConnectWithoutLiderCriadorInput[];
    upsert?: Prisma.ConviteUpsertWithWhereUniqueWithoutLiderCriadorInput | Prisma.ConviteUpsertWithWhereUniqueWithoutLiderCriadorInput[];
    createMany?: Prisma.ConviteCreateManyLiderCriadorInputEnvelope;
    set?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    disconnect?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    delete?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    connect?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    update?: Prisma.ConviteUpdateWithWhereUniqueWithoutLiderCriadorInput | Prisma.ConviteUpdateWithWhereUniqueWithoutLiderCriadorInput[];
    updateMany?: Prisma.ConviteUpdateManyWithWhereWithoutLiderCriadorInput | Prisma.ConviteUpdateManyWithWhereWithoutLiderCriadorInput[];
    deleteMany?: Prisma.ConviteScalarWhereInput | Prisma.ConviteScalarWhereInput[];
};
export type ConviteUncheckedUpdateManyWithoutLiderCriadorNestedInput = {
    create?: Prisma.XOR<Prisma.ConviteCreateWithoutLiderCriadorInput, Prisma.ConviteUncheckedCreateWithoutLiderCriadorInput> | Prisma.ConviteCreateWithoutLiderCriadorInput[] | Prisma.ConviteUncheckedCreateWithoutLiderCriadorInput[];
    connectOrCreate?: Prisma.ConviteCreateOrConnectWithoutLiderCriadorInput | Prisma.ConviteCreateOrConnectWithoutLiderCriadorInput[];
    upsert?: Prisma.ConviteUpsertWithWhereUniqueWithoutLiderCriadorInput | Prisma.ConviteUpsertWithWhereUniqueWithoutLiderCriadorInput[];
    createMany?: Prisma.ConviteCreateManyLiderCriadorInputEnvelope;
    set?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    disconnect?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    delete?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    connect?: Prisma.ConviteWhereUniqueInput | Prisma.ConviteWhereUniqueInput[];
    update?: Prisma.ConviteUpdateWithWhereUniqueWithoutLiderCriadorInput | Prisma.ConviteUpdateWithWhereUniqueWithoutLiderCriadorInput[];
    updateMany?: Prisma.ConviteUpdateManyWithWhereWithoutLiderCriadorInput | Prisma.ConviteUpdateManyWithWhereWithoutLiderCriadorInput[];
    deleteMany?: Prisma.ConviteScalarWhereInput | Prisma.ConviteScalarWhereInput[];
};
export type ConviteCreateWithoutEdicaoInput = {
    id?: string;
    tipo: $Enums.TipoConvite;
    token: string;
    expiraEm?: Date | string | null;
    usadoEm?: Date | string | null;
    ativo?: boolean;
    createdAt?: Date | string;
    comunidade: Prisma.ComunidadeCreateNestedOneWithoutConvitesInput;
    criadoPor?: Prisma.UsuarioAdminCreateNestedOneWithoutConvitesCriadosInput;
    liderCriador?: Prisma.LiderCreateNestedOneWithoutConvitesCriadosInput;
    lideres?: Prisma.LiderCreateNestedManyWithoutConviteInput;
};
export type ConviteUncheckedCreateWithoutEdicaoInput = {
    id?: string;
    comunidadeId: string;
    tipo: $Enums.TipoConvite;
    token: string;
    criadoPorId?: string | null;
    liderCriadorId?: string | null;
    expiraEm?: Date | string | null;
    usadoEm?: Date | string | null;
    ativo?: boolean;
    createdAt?: Date | string;
    lideres?: Prisma.LiderUncheckedCreateNestedManyWithoutConviteInput;
};
export type ConviteCreateOrConnectWithoutEdicaoInput = {
    where: Prisma.ConviteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConviteCreateWithoutEdicaoInput, Prisma.ConviteUncheckedCreateWithoutEdicaoInput>;
};
export type ConviteCreateManyEdicaoInputEnvelope = {
    data: Prisma.ConviteCreateManyEdicaoInput | Prisma.ConviteCreateManyEdicaoInput[];
    skipDuplicates?: boolean;
};
export type ConviteUpsertWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.ConviteWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConviteUpdateWithoutEdicaoInput, Prisma.ConviteUncheckedUpdateWithoutEdicaoInput>;
    create: Prisma.XOR<Prisma.ConviteCreateWithoutEdicaoInput, Prisma.ConviteUncheckedCreateWithoutEdicaoInput>;
};
export type ConviteUpdateWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.ConviteWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConviteUpdateWithoutEdicaoInput, Prisma.ConviteUncheckedUpdateWithoutEdicaoInput>;
};
export type ConviteUpdateManyWithWhereWithoutEdicaoInput = {
    where: Prisma.ConviteScalarWhereInput;
    data: Prisma.XOR<Prisma.ConviteUpdateManyMutationInput, Prisma.ConviteUncheckedUpdateManyWithoutEdicaoInput>;
};
export type ConviteScalarWhereInput = {
    AND?: Prisma.ConviteScalarWhereInput | Prisma.ConviteScalarWhereInput[];
    OR?: Prisma.ConviteScalarWhereInput[];
    NOT?: Prisma.ConviteScalarWhereInput | Prisma.ConviteScalarWhereInput[];
    id?: Prisma.StringFilter<"Convite"> | string;
    edicaoId?: Prisma.StringFilter<"Convite"> | string;
    comunidadeId?: Prisma.StringFilter<"Convite"> | string;
    tipo?: Prisma.EnumTipoConviteFilter<"Convite"> | $Enums.TipoConvite;
    token?: Prisma.StringFilter<"Convite"> | string;
    criadoPorId?: Prisma.StringNullableFilter<"Convite"> | string | null;
    liderCriadorId?: Prisma.StringNullableFilter<"Convite"> | string | null;
    expiraEm?: Prisma.DateTimeNullableFilter<"Convite"> | Date | string | null;
    usadoEm?: Prisma.DateTimeNullableFilter<"Convite"> | Date | string | null;
    ativo?: Prisma.BoolFilter<"Convite"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Convite"> | Date | string;
};
export type ConviteCreateWithoutCriadoPorInput = {
    id?: string;
    tipo: $Enums.TipoConvite;
    token: string;
    expiraEm?: Date | string | null;
    usadoEm?: Date | string | null;
    ativo?: boolean;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutConvitesInput;
    comunidade: Prisma.ComunidadeCreateNestedOneWithoutConvitesInput;
    liderCriador?: Prisma.LiderCreateNestedOneWithoutConvitesCriadosInput;
    lideres?: Prisma.LiderCreateNestedManyWithoutConviteInput;
};
export type ConviteUncheckedCreateWithoutCriadoPorInput = {
    id?: string;
    edicaoId: string;
    comunidadeId: string;
    tipo: $Enums.TipoConvite;
    token: string;
    liderCriadorId?: string | null;
    expiraEm?: Date | string | null;
    usadoEm?: Date | string | null;
    ativo?: boolean;
    createdAt?: Date | string;
    lideres?: Prisma.LiderUncheckedCreateNestedManyWithoutConviteInput;
};
export type ConviteCreateOrConnectWithoutCriadoPorInput = {
    where: Prisma.ConviteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConviteCreateWithoutCriadoPorInput, Prisma.ConviteUncheckedCreateWithoutCriadoPorInput>;
};
export type ConviteCreateManyCriadoPorInputEnvelope = {
    data: Prisma.ConviteCreateManyCriadoPorInput | Prisma.ConviteCreateManyCriadoPorInput[];
    skipDuplicates?: boolean;
};
export type ConviteUpsertWithWhereUniqueWithoutCriadoPorInput = {
    where: Prisma.ConviteWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConviteUpdateWithoutCriadoPorInput, Prisma.ConviteUncheckedUpdateWithoutCriadoPorInput>;
    create: Prisma.XOR<Prisma.ConviteCreateWithoutCriadoPorInput, Prisma.ConviteUncheckedCreateWithoutCriadoPorInput>;
};
export type ConviteUpdateWithWhereUniqueWithoutCriadoPorInput = {
    where: Prisma.ConviteWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConviteUpdateWithoutCriadoPorInput, Prisma.ConviteUncheckedUpdateWithoutCriadoPorInput>;
};
export type ConviteUpdateManyWithWhereWithoutCriadoPorInput = {
    where: Prisma.ConviteScalarWhereInput;
    data: Prisma.XOR<Prisma.ConviteUpdateManyMutationInput, Prisma.ConviteUncheckedUpdateManyWithoutCriadoPorInput>;
};
export type ConviteCreateWithoutComunidadeInput = {
    id?: string;
    tipo: $Enums.TipoConvite;
    token: string;
    expiraEm?: Date | string | null;
    usadoEm?: Date | string | null;
    ativo?: boolean;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutConvitesInput;
    criadoPor?: Prisma.UsuarioAdminCreateNestedOneWithoutConvitesCriadosInput;
    liderCriador?: Prisma.LiderCreateNestedOneWithoutConvitesCriadosInput;
    lideres?: Prisma.LiderCreateNestedManyWithoutConviteInput;
};
export type ConviteUncheckedCreateWithoutComunidadeInput = {
    id?: string;
    edicaoId: string;
    tipo: $Enums.TipoConvite;
    token: string;
    criadoPorId?: string | null;
    liderCriadorId?: string | null;
    expiraEm?: Date | string | null;
    usadoEm?: Date | string | null;
    ativo?: boolean;
    createdAt?: Date | string;
    lideres?: Prisma.LiderUncheckedCreateNestedManyWithoutConviteInput;
};
export type ConviteCreateOrConnectWithoutComunidadeInput = {
    where: Prisma.ConviteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConviteCreateWithoutComunidadeInput, Prisma.ConviteUncheckedCreateWithoutComunidadeInput>;
};
export type ConviteCreateManyComunidadeInputEnvelope = {
    data: Prisma.ConviteCreateManyComunidadeInput | Prisma.ConviteCreateManyComunidadeInput[];
    skipDuplicates?: boolean;
};
export type ConviteUpsertWithWhereUniqueWithoutComunidadeInput = {
    where: Prisma.ConviteWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConviteUpdateWithoutComunidadeInput, Prisma.ConviteUncheckedUpdateWithoutComunidadeInput>;
    create: Prisma.XOR<Prisma.ConviteCreateWithoutComunidadeInput, Prisma.ConviteUncheckedCreateWithoutComunidadeInput>;
};
export type ConviteUpdateWithWhereUniqueWithoutComunidadeInput = {
    where: Prisma.ConviteWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConviteUpdateWithoutComunidadeInput, Prisma.ConviteUncheckedUpdateWithoutComunidadeInput>;
};
export type ConviteUpdateManyWithWhereWithoutComunidadeInput = {
    where: Prisma.ConviteScalarWhereInput;
    data: Prisma.XOR<Prisma.ConviteUpdateManyMutationInput, Prisma.ConviteUncheckedUpdateManyWithoutComunidadeInput>;
};
export type ConviteCreateWithoutLideresInput = {
    id?: string;
    tipo: $Enums.TipoConvite;
    token: string;
    expiraEm?: Date | string | null;
    usadoEm?: Date | string | null;
    ativo?: boolean;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutConvitesInput;
    comunidade: Prisma.ComunidadeCreateNestedOneWithoutConvitesInput;
    criadoPor?: Prisma.UsuarioAdminCreateNestedOneWithoutConvitesCriadosInput;
    liderCriador?: Prisma.LiderCreateNestedOneWithoutConvitesCriadosInput;
};
export type ConviteUncheckedCreateWithoutLideresInput = {
    id?: string;
    edicaoId: string;
    comunidadeId: string;
    tipo: $Enums.TipoConvite;
    token: string;
    criadoPorId?: string | null;
    liderCriadorId?: string | null;
    expiraEm?: Date | string | null;
    usadoEm?: Date | string | null;
    ativo?: boolean;
    createdAt?: Date | string;
};
export type ConviteCreateOrConnectWithoutLideresInput = {
    where: Prisma.ConviteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConviteCreateWithoutLideresInput, Prisma.ConviteUncheckedCreateWithoutLideresInput>;
};
export type ConviteCreateWithoutLiderCriadorInput = {
    id?: string;
    tipo: $Enums.TipoConvite;
    token: string;
    expiraEm?: Date | string | null;
    usadoEm?: Date | string | null;
    ativo?: boolean;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutConvitesInput;
    comunidade: Prisma.ComunidadeCreateNestedOneWithoutConvitesInput;
    criadoPor?: Prisma.UsuarioAdminCreateNestedOneWithoutConvitesCriadosInput;
    lideres?: Prisma.LiderCreateNestedManyWithoutConviteInput;
};
export type ConviteUncheckedCreateWithoutLiderCriadorInput = {
    id?: string;
    edicaoId: string;
    comunidadeId: string;
    tipo: $Enums.TipoConvite;
    token: string;
    criadoPorId?: string | null;
    expiraEm?: Date | string | null;
    usadoEm?: Date | string | null;
    ativo?: boolean;
    createdAt?: Date | string;
    lideres?: Prisma.LiderUncheckedCreateNestedManyWithoutConviteInput;
};
export type ConviteCreateOrConnectWithoutLiderCriadorInput = {
    where: Prisma.ConviteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConviteCreateWithoutLiderCriadorInput, Prisma.ConviteUncheckedCreateWithoutLiderCriadorInput>;
};
export type ConviteCreateManyLiderCriadorInputEnvelope = {
    data: Prisma.ConviteCreateManyLiderCriadorInput | Prisma.ConviteCreateManyLiderCriadorInput[];
    skipDuplicates?: boolean;
};
export type ConviteUpsertWithoutLideresInput = {
    update: Prisma.XOR<Prisma.ConviteUpdateWithoutLideresInput, Prisma.ConviteUncheckedUpdateWithoutLideresInput>;
    create: Prisma.XOR<Prisma.ConviteCreateWithoutLideresInput, Prisma.ConviteUncheckedCreateWithoutLideresInput>;
    where?: Prisma.ConviteWhereInput;
};
export type ConviteUpdateToOneWithWhereWithoutLideresInput = {
    where?: Prisma.ConviteWhereInput;
    data: Prisma.XOR<Prisma.ConviteUpdateWithoutLideresInput, Prisma.ConviteUncheckedUpdateWithoutLideresInput>;
};
export type ConviteUpdateWithoutLideresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiraEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    usadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutConvitesNestedInput;
    comunidade?: Prisma.ComunidadeUpdateOneRequiredWithoutConvitesNestedInput;
    criadoPor?: Prisma.UsuarioAdminUpdateOneWithoutConvitesCriadosNestedInput;
    liderCriador?: Prisma.LiderUpdateOneWithoutConvitesCriadosNestedInput;
};
export type ConviteUncheckedUpdateWithoutLideresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    criadoPorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    liderCriadorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiraEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    usadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConviteUpsertWithWhereUniqueWithoutLiderCriadorInput = {
    where: Prisma.ConviteWhereUniqueInput;
    update: Prisma.XOR<Prisma.ConviteUpdateWithoutLiderCriadorInput, Prisma.ConviteUncheckedUpdateWithoutLiderCriadorInput>;
    create: Prisma.XOR<Prisma.ConviteCreateWithoutLiderCriadorInput, Prisma.ConviteUncheckedCreateWithoutLiderCriadorInput>;
};
export type ConviteUpdateWithWhereUniqueWithoutLiderCriadorInput = {
    where: Prisma.ConviteWhereUniqueInput;
    data: Prisma.XOR<Prisma.ConviteUpdateWithoutLiderCriadorInput, Prisma.ConviteUncheckedUpdateWithoutLiderCriadorInput>;
};
export type ConviteUpdateManyWithWhereWithoutLiderCriadorInput = {
    where: Prisma.ConviteScalarWhereInput;
    data: Prisma.XOR<Prisma.ConviteUpdateManyMutationInput, Prisma.ConviteUncheckedUpdateManyWithoutLiderCriadorInput>;
};
export type ConviteCreateManyEdicaoInput = {
    id?: string;
    comunidadeId: string;
    tipo: $Enums.TipoConvite;
    token: string;
    criadoPorId?: string | null;
    liderCriadorId?: string | null;
    expiraEm?: Date | string | null;
    usadoEm?: Date | string | null;
    ativo?: boolean;
    createdAt?: Date | string;
};
export type ConviteUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiraEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    usadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    comunidade?: Prisma.ComunidadeUpdateOneRequiredWithoutConvitesNestedInput;
    criadoPor?: Prisma.UsuarioAdminUpdateOneWithoutConvitesCriadosNestedInput;
    liderCriador?: Prisma.LiderUpdateOneWithoutConvitesCriadosNestedInput;
    lideres?: Prisma.LiderUpdateManyWithoutConviteNestedInput;
};
export type ConviteUncheckedUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    criadoPorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    liderCriadorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiraEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    usadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lideres?: Prisma.LiderUncheckedUpdateManyWithoutConviteNestedInput;
};
export type ConviteUncheckedUpdateManyWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    criadoPorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    liderCriadorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiraEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    usadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConviteCreateManyCriadoPorInput = {
    id?: string;
    edicaoId: string;
    comunidadeId: string;
    tipo: $Enums.TipoConvite;
    token: string;
    liderCriadorId?: string | null;
    expiraEm?: Date | string | null;
    usadoEm?: Date | string | null;
    ativo?: boolean;
    createdAt?: Date | string;
};
export type ConviteUpdateWithoutCriadoPorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiraEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    usadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutConvitesNestedInput;
    comunidade?: Prisma.ComunidadeUpdateOneRequiredWithoutConvitesNestedInput;
    liderCriador?: Prisma.LiderUpdateOneWithoutConvitesCriadosNestedInput;
    lideres?: Prisma.LiderUpdateManyWithoutConviteNestedInput;
};
export type ConviteUncheckedUpdateWithoutCriadoPorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    liderCriadorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiraEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    usadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lideres?: Prisma.LiderUncheckedUpdateManyWithoutConviteNestedInput;
};
export type ConviteUncheckedUpdateManyWithoutCriadoPorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    liderCriadorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiraEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    usadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConviteCreateManyComunidadeInput = {
    id?: string;
    edicaoId: string;
    tipo: $Enums.TipoConvite;
    token: string;
    criadoPorId?: string | null;
    liderCriadorId?: string | null;
    expiraEm?: Date | string | null;
    usadoEm?: Date | string | null;
    ativo?: boolean;
    createdAt?: Date | string;
};
export type ConviteUpdateWithoutComunidadeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiraEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    usadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutConvitesNestedInput;
    criadoPor?: Prisma.UsuarioAdminUpdateOneWithoutConvitesCriadosNestedInput;
    liderCriador?: Prisma.LiderUpdateOneWithoutConvitesCriadosNestedInput;
    lideres?: Prisma.LiderUpdateManyWithoutConviteNestedInput;
};
export type ConviteUncheckedUpdateWithoutComunidadeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    criadoPorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    liderCriadorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiraEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    usadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lideres?: Prisma.LiderUncheckedUpdateManyWithoutConviteNestedInput;
};
export type ConviteUncheckedUpdateManyWithoutComunidadeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    criadoPorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    liderCriadorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiraEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    usadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConviteCreateManyLiderCriadorInput = {
    id?: string;
    edicaoId: string;
    comunidadeId: string;
    tipo: $Enums.TipoConvite;
    token: string;
    criadoPorId?: string | null;
    expiraEm?: Date | string | null;
    usadoEm?: Date | string | null;
    ativo?: boolean;
    createdAt?: Date | string;
};
export type ConviteUpdateWithoutLiderCriadorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expiraEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    usadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutConvitesNestedInput;
    comunidade?: Prisma.ComunidadeUpdateOneRequiredWithoutConvitesNestedInput;
    criadoPor?: Prisma.UsuarioAdminUpdateOneWithoutConvitesCriadosNestedInput;
    lideres?: Prisma.LiderUpdateManyWithoutConviteNestedInput;
};
export type ConviteUncheckedUpdateWithoutLiderCriadorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    criadoPorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiraEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    usadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lideres?: Prisma.LiderUncheckedUpdateManyWithoutConviteNestedInput;
};
export type ConviteUncheckedUpdateManyWithoutLiderCriadorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.EnumTipoConviteFieldUpdateOperationsInput | $Enums.TipoConvite;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    criadoPorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expiraEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    usadoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ConviteCountOutputType = {
    lideres: number;
};
export type ConviteCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lideres?: boolean | ConviteCountOutputTypeCountLideresArgs;
};
export type ConviteCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConviteCountOutputTypeSelect<ExtArgs> | null;
};
export type ConviteCountOutputTypeCountLideresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LiderWhereInput;
};
export type ConviteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    comunidadeId?: boolean;
    tipo?: boolean;
    token?: boolean;
    criadoPorId?: boolean;
    liderCriadorId?: boolean;
    expiraEm?: boolean;
    usadoEm?: boolean;
    ativo?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    comunidade?: boolean | Prisma.ComunidadeDefaultArgs<ExtArgs>;
    criadoPor?: boolean | Prisma.Convite$criadoPorArgs<ExtArgs>;
    liderCriador?: boolean | Prisma.Convite$liderCriadorArgs<ExtArgs>;
    lideres?: boolean | Prisma.Convite$lideresArgs<ExtArgs>;
    _count?: boolean | Prisma.ConviteCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["convite"]>;
export type ConviteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    comunidadeId?: boolean;
    tipo?: boolean;
    token?: boolean;
    criadoPorId?: boolean;
    liderCriadorId?: boolean;
    expiraEm?: boolean;
    usadoEm?: boolean;
    ativo?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    comunidade?: boolean | Prisma.ComunidadeDefaultArgs<ExtArgs>;
    criadoPor?: boolean | Prisma.Convite$criadoPorArgs<ExtArgs>;
    liderCriador?: boolean | Prisma.Convite$liderCriadorArgs<ExtArgs>;
}, ExtArgs["result"]["convite"]>;
export type ConviteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    comunidadeId?: boolean;
    tipo?: boolean;
    token?: boolean;
    criadoPorId?: boolean;
    liderCriadorId?: boolean;
    expiraEm?: boolean;
    usadoEm?: boolean;
    ativo?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    comunidade?: boolean | Prisma.ComunidadeDefaultArgs<ExtArgs>;
    criadoPor?: boolean | Prisma.Convite$criadoPorArgs<ExtArgs>;
    liderCriador?: boolean | Prisma.Convite$liderCriadorArgs<ExtArgs>;
}, ExtArgs["result"]["convite"]>;
export type ConviteSelectScalar = {
    id?: boolean;
    edicaoId?: boolean;
    comunidadeId?: boolean;
    tipo?: boolean;
    token?: boolean;
    criadoPorId?: boolean;
    liderCriadorId?: boolean;
    expiraEm?: boolean;
    usadoEm?: boolean;
    ativo?: boolean;
    createdAt?: boolean;
};
export type ConviteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "edicaoId" | "comunidadeId" | "tipo" | "token" | "criadoPorId" | "liderCriadorId" | "expiraEm" | "usadoEm" | "ativo" | "createdAt", ExtArgs["result"]["convite"]>;
export type ConviteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    comunidade?: boolean | Prisma.ComunidadeDefaultArgs<ExtArgs>;
    criadoPor?: boolean | Prisma.Convite$criadoPorArgs<ExtArgs>;
    liderCriador?: boolean | Prisma.Convite$liderCriadorArgs<ExtArgs>;
    lideres?: boolean | Prisma.Convite$lideresArgs<ExtArgs>;
    _count?: boolean | Prisma.ConviteCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ConviteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    comunidade?: boolean | Prisma.ComunidadeDefaultArgs<ExtArgs>;
    criadoPor?: boolean | Prisma.Convite$criadoPorArgs<ExtArgs>;
    liderCriador?: boolean | Prisma.Convite$liderCriadorArgs<ExtArgs>;
};
export type ConviteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    comunidade?: boolean | Prisma.ComunidadeDefaultArgs<ExtArgs>;
    criadoPor?: boolean | Prisma.Convite$criadoPorArgs<ExtArgs>;
    liderCriador?: boolean | Prisma.Convite$liderCriadorArgs<ExtArgs>;
};
export type $ConvitePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Convite";
    objects: {
        edicao: Prisma.$EdicaoPayload<ExtArgs>;
        comunidade: Prisma.$ComunidadePayload<ExtArgs>;
        criadoPor: Prisma.$UsuarioAdminPayload<ExtArgs> | null;
        liderCriador: Prisma.$LiderPayload<ExtArgs> | null;
        lideres: Prisma.$LiderPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        edicaoId: string;
        comunidadeId: string;
        tipo: $Enums.TipoConvite;
        token: string;
        criadoPorId: string | null;
        liderCriadorId: string | null;
        expiraEm: Date | null;
        usadoEm: Date | null;
        ativo: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["convite"]>;
    composites: {};
};
export type ConviteGetPayload<S extends boolean | null | undefined | ConviteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ConvitePayload, S>;
export type ConviteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ConviteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ConviteCountAggregateInputType | true;
};
export interface ConviteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Convite'];
        meta: {
            name: 'Convite';
        };
    };
    findUnique<T extends ConviteFindUniqueArgs>(args: Prisma.SelectSubset<T, ConviteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ConviteClient<runtime.Types.Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ConviteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ConviteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConviteClient<runtime.Types.Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ConviteFindFirstArgs>(args?: Prisma.SelectSubset<T, ConviteFindFirstArgs<ExtArgs>>): Prisma.Prisma__ConviteClient<runtime.Types.Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ConviteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ConviteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ConviteClient<runtime.Types.Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ConviteFindManyArgs>(args?: Prisma.SelectSubset<T, ConviteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ConviteCreateArgs>(args: Prisma.SelectSubset<T, ConviteCreateArgs<ExtArgs>>): Prisma.Prisma__ConviteClient<runtime.Types.Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ConviteCreateManyArgs>(args?: Prisma.SelectSubset<T, ConviteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ConviteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ConviteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ConviteDeleteArgs>(args: Prisma.SelectSubset<T, ConviteDeleteArgs<ExtArgs>>): Prisma.Prisma__ConviteClient<runtime.Types.Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ConviteUpdateArgs>(args: Prisma.SelectSubset<T, ConviteUpdateArgs<ExtArgs>>): Prisma.Prisma__ConviteClient<runtime.Types.Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ConviteDeleteManyArgs>(args?: Prisma.SelectSubset<T, ConviteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ConviteUpdateManyArgs>(args: Prisma.SelectSubset<T, ConviteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ConviteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ConviteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ConviteUpsertArgs>(args: Prisma.SelectSubset<T, ConviteUpsertArgs<ExtArgs>>): Prisma.Prisma__ConviteClient<runtime.Types.Result.GetResult<Prisma.$ConvitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ConviteCountArgs>(args?: Prisma.Subset<T, ConviteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ConviteCountAggregateOutputType> : number>;
    aggregate<T extends ConviteAggregateArgs>(args: Prisma.Subset<T, ConviteAggregateArgs>): Prisma.PrismaPromise<GetConviteAggregateType<T>>;
    groupBy<T extends ConviteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ConviteGroupByArgs['orderBy'];
    } : {
        orderBy?: ConviteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ConviteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConviteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ConviteFieldRefs;
}
export interface Prisma__ConviteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    edicao<T extends Prisma.EdicaoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EdicaoDefaultArgs<ExtArgs>>): Prisma.Prisma__EdicaoClient<runtime.Types.Result.GetResult<Prisma.$EdicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    comunidade<T extends Prisma.ComunidadeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ComunidadeDefaultArgs<ExtArgs>>): Prisma.Prisma__ComunidadeClient<runtime.Types.Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    criadoPor<T extends Prisma.Convite$criadoPorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Convite$criadoPorArgs<ExtArgs>>): Prisma.Prisma__UsuarioAdminClient<runtime.Types.Result.GetResult<Prisma.$UsuarioAdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    liderCriador<T extends Prisma.Convite$liderCriadorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Convite$liderCriadorArgs<ExtArgs>>): Prisma.Prisma__LiderClient<runtime.Types.Result.GetResult<Prisma.$LiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    lideres<T extends Prisma.Convite$lideresArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Convite$lideresArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LiderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ConviteFieldRefs {
    readonly id: Prisma.FieldRef<"Convite", 'String'>;
    readonly edicaoId: Prisma.FieldRef<"Convite", 'String'>;
    readonly comunidadeId: Prisma.FieldRef<"Convite", 'String'>;
    readonly tipo: Prisma.FieldRef<"Convite", 'TipoConvite'>;
    readonly token: Prisma.FieldRef<"Convite", 'String'>;
    readonly criadoPorId: Prisma.FieldRef<"Convite", 'String'>;
    readonly liderCriadorId: Prisma.FieldRef<"Convite", 'String'>;
    readonly expiraEm: Prisma.FieldRef<"Convite", 'DateTime'>;
    readonly usadoEm: Prisma.FieldRef<"Convite", 'DateTime'>;
    readonly ativo: Prisma.FieldRef<"Convite", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Convite", 'DateTime'>;
}
export type ConviteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConviteSelect<ExtArgs> | null;
    omit?: Prisma.ConviteOmit<ExtArgs> | null;
    include?: Prisma.ConviteInclude<ExtArgs> | null;
    where: Prisma.ConviteWhereUniqueInput;
};
export type ConviteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConviteSelect<ExtArgs> | null;
    omit?: Prisma.ConviteOmit<ExtArgs> | null;
    include?: Prisma.ConviteInclude<ExtArgs> | null;
    where: Prisma.ConviteWhereUniqueInput;
};
export type ConviteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConviteSelect<ExtArgs> | null;
    omit?: Prisma.ConviteOmit<ExtArgs> | null;
    include?: Prisma.ConviteInclude<ExtArgs> | null;
    where?: Prisma.ConviteWhereInput;
    orderBy?: Prisma.ConviteOrderByWithRelationInput | Prisma.ConviteOrderByWithRelationInput[];
    cursor?: Prisma.ConviteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConviteScalarFieldEnum | Prisma.ConviteScalarFieldEnum[];
};
export type ConviteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConviteSelect<ExtArgs> | null;
    omit?: Prisma.ConviteOmit<ExtArgs> | null;
    include?: Prisma.ConviteInclude<ExtArgs> | null;
    where?: Prisma.ConviteWhereInput;
    orderBy?: Prisma.ConviteOrderByWithRelationInput | Prisma.ConviteOrderByWithRelationInput[];
    cursor?: Prisma.ConviteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConviteScalarFieldEnum | Prisma.ConviteScalarFieldEnum[];
};
export type ConviteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConviteSelect<ExtArgs> | null;
    omit?: Prisma.ConviteOmit<ExtArgs> | null;
    include?: Prisma.ConviteInclude<ExtArgs> | null;
    where?: Prisma.ConviteWhereInput;
    orderBy?: Prisma.ConviteOrderByWithRelationInput | Prisma.ConviteOrderByWithRelationInput[];
    cursor?: Prisma.ConviteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ConviteScalarFieldEnum | Prisma.ConviteScalarFieldEnum[];
};
export type ConviteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConviteSelect<ExtArgs> | null;
    omit?: Prisma.ConviteOmit<ExtArgs> | null;
    include?: Prisma.ConviteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConviteCreateInput, Prisma.ConviteUncheckedCreateInput>;
};
export type ConviteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ConviteCreateManyInput | Prisma.ConviteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ConviteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConviteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConviteOmit<ExtArgs> | null;
    data: Prisma.ConviteCreateManyInput | Prisma.ConviteCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ConviteIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ConviteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConviteSelect<ExtArgs> | null;
    omit?: Prisma.ConviteOmit<ExtArgs> | null;
    include?: Prisma.ConviteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConviteUpdateInput, Prisma.ConviteUncheckedUpdateInput>;
    where: Prisma.ConviteWhereUniqueInput;
};
export type ConviteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ConviteUpdateManyMutationInput, Prisma.ConviteUncheckedUpdateManyInput>;
    where?: Prisma.ConviteWhereInput;
    limit?: number;
};
export type ConviteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConviteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ConviteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ConviteUpdateManyMutationInput, Prisma.ConviteUncheckedUpdateManyInput>;
    where?: Prisma.ConviteWhereInput;
    limit?: number;
    include?: Prisma.ConviteIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ConviteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConviteSelect<ExtArgs> | null;
    omit?: Prisma.ConviteOmit<ExtArgs> | null;
    include?: Prisma.ConviteInclude<ExtArgs> | null;
    where: Prisma.ConviteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ConviteCreateInput, Prisma.ConviteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ConviteUpdateInput, Prisma.ConviteUncheckedUpdateInput>;
};
export type ConviteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConviteSelect<ExtArgs> | null;
    omit?: Prisma.ConviteOmit<ExtArgs> | null;
    include?: Prisma.ConviteInclude<ExtArgs> | null;
    where: Prisma.ConviteWhereUniqueInput;
};
export type ConviteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ConviteWhereInput;
    limit?: number;
};
export type Convite$criadoPorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioAdminSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioAdminOmit<ExtArgs> | null;
    include?: Prisma.UsuarioAdminInclude<ExtArgs> | null;
    where?: Prisma.UsuarioAdminWhereInput;
};
export type Convite$liderCriadorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LiderSelect<ExtArgs> | null;
    omit?: Prisma.LiderOmit<ExtArgs> | null;
    include?: Prisma.LiderInclude<ExtArgs> | null;
    where?: Prisma.LiderWhereInput;
};
export type Convite$lideresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LiderSelect<ExtArgs> | null;
    omit?: Prisma.LiderOmit<ExtArgs> | null;
    include?: Prisma.LiderInclude<ExtArgs> | null;
    where?: Prisma.LiderWhereInput;
    orderBy?: Prisma.LiderOrderByWithRelationInput | Prisma.LiderOrderByWithRelationInput[];
    cursor?: Prisma.LiderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LiderScalarFieldEnum | Prisma.LiderScalarFieldEnum[];
};
export type ConviteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ConviteSelect<ExtArgs> | null;
    omit?: Prisma.ConviteOmit<ExtArgs> | null;
    include?: Prisma.ConviteInclude<ExtArgs> | null;
};
