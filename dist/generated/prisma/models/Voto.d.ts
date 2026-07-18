import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type VotoModel = runtime.Types.Result.DefaultSelection<Prisma.$VotoPayload>;
export type AggregateVoto = {
    _count: VotoCountAggregateOutputType | null;
    _min: VotoMinAggregateOutputType | null;
    _max: VotoMaxAggregateOutputType | null;
};
export type VotoMinAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    finalistaId: string | null;
    votanteNome: string | null;
    cpf: string | null;
    pessoaId: string | null;
    votanteLiderId: string | null;
    votanteInscricaoId: string | null;
    lgpdAceitoEm: Date | null;
    createdAt: Date | null;
};
export type VotoMaxAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    finalistaId: string | null;
    votanteNome: string | null;
    cpf: string | null;
    pessoaId: string | null;
    votanteLiderId: string | null;
    votanteInscricaoId: string | null;
    lgpdAceitoEm: Date | null;
    createdAt: Date | null;
};
export type VotoCountAggregateOutputType = {
    id: number;
    edicaoId: number;
    finalistaId: number;
    votanteNome: number;
    cpf: number;
    pessoaId: number;
    votanteLiderId: number;
    votanteInscricaoId: number;
    lgpdAceitoEm: number;
    createdAt: number;
    _all: number;
};
export type VotoMinAggregateInputType = {
    id?: true;
    edicaoId?: true;
    finalistaId?: true;
    votanteNome?: true;
    cpf?: true;
    pessoaId?: true;
    votanteLiderId?: true;
    votanteInscricaoId?: true;
    lgpdAceitoEm?: true;
    createdAt?: true;
};
export type VotoMaxAggregateInputType = {
    id?: true;
    edicaoId?: true;
    finalistaId?: true;
    votanteNome?: true;
    cpf?: true;
    pessoaId?: true;
    votanteLiderId?: true;
    votanteInscricaoId?: true;
    lgpdAceitoEm?: true;
    createdAt?: true;
};
export type VotoCountAggregateInputType = {
    id?: true;
    edicaoId?: true;
    finalistaId?: true;
    votanteNome?: true;
    cpf?: true;
    pessoaId?: true;
    votanteLiderId?: true;
    votanteInscricaoId?: true;
    lgpdAceitoEm?: true;
    createdAt?: true;
    _all?: true;
};
export type VotoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VotoWhereInput;
    orderBy?: Prisma.VotoOrderByWithRelationInput | Prisma.VotoOrderByWithRelationInput[];
    cursor?: Prisma.VotoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VotoCountAggregateInputType;
    _min?: VotoMinAggregateInputType;
    _max?: VotoMaxAggregateInputType;
};
export type GetVotoAggregateType<T extends VotoAggregateArgs> = {
    [P in keyof T & keyof AggregateVoto]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVoto[P]> : Prisma.GetScalarType<T[P], AggregateVoto[P]>;
};
export type VotoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VotoWhereInput;
    orderBy?: Prisma.VotoOrderByWithAggregationInput | Prisma.VotoOrderByWithAggregationInput[];
    by: Prisma.VotoScalarFieldEnum[] | Prisma.VotoScalarFieldEnum;
    having?: Prisma.VotoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VotoCountAggregateInputType | true;
    _min?: VotoMinAggregateInputType;
    _max?: VotoMaxAggregateInputType;
};
export type VotoGroupByOutputType = {
    id: string;
    edicaoId: string;
    finalistaId: string;
    votanteNome: string;
    cpf: string;
    pessoaId: string | null;
    votanteLiderId: string | null;
    votanteInscricaoId: string | null;
    lgpdAceitoEm: Date;
    createdAt: Date;
    _count: VotoCountAggregateOutputType | null;
    _min: VotoMinAggregateOutputType | null;
    _max: VotoMaxAggregateOutputType | null;
};
export type GetVotoGroupByPayload<T extends VotoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VotoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VotoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VotoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VotoGroupByOutputType[P]>;
}>>;
export type VotoWhereInput = {
    AND?: Prisma.VotoWhereInput | Prisma.VotoWhereInput[];
    OR?: Prisma.VotoWhereInput[];
    NOT?: Prisma.VotoWhereInput | Prisma.VotoWhereInput[];
    id?: Prisma.StringFilter<"Voto"> | string;
    edicaoId?: Prisma.StringFilter<"Voto"> | string;
    finalistaId?: Prisma.StringFilter<"Voto"> | string;
    votanteNome?: Prisma.StringFilter<"Voto"> | string;
    cpf?: Prisma.StringFilter<"Voto"> | string;
    pessoaId?: Prisma.StringNullableFilter<"Voto"> | string | null;
    votanteLiderId?: Prisma.StringNullableFilter<"Voto"> | string | null;
    votanteInscricaoId?: Prisma.StringNullableFilter<"Voto"> | string | null;
    lgpdAceitoEm?: Prisma.DateTimeFilter<"Voto"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Voto"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
    finalista?: Prisma.XOR<Prisma.FinalistaScalarRelationFilter, Prisma.FinalistaWhereInput>;
    pessoa?: Prisma.XOR<Prisma.PessoaNullableScalarRelationFilter, Prisma.PessoaWhereInput> | null;
    votanteLider?: Prisma.XOR<Prisma.LiderNullableScalarRelationFilter, Prisma.LiderWhereInput> | null;
    votanteInscricao?: Prisma.XOR<Prisma.InscricaoStartupNullableScalarRelationFilter, Prisma.InscricaoStartupWhereInput> | null;
};
export type VotoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    finalistaId?: Prisma.SortOrder;
    votanteNome?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
    pessoaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    votanteLiderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    votanteInscricaoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    lgpdAceitoEm?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    edicao?: Prisma.EdicaoOrderByWithRelationInput;
    finalista?: Prisma.FinalistaOrderByWithRelationInput;
    pessoa?: Prisma.PessoaOrderByWithRelationInput;
    votanteLider?: Prisma.LiderOrderByWithRelationInput;
    votanteInscricao?: Prisma.InscricaoStartupOrderByWithRelationInput;
};
export type VotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    edicaoId_cpf?: Prisma.VotoEdicaoIdCpfCompoundUniqueInput;
    AND?: Prisma.VotoWhereInput | Prisma.VotoWhereInput[];
    OR?: Prisma.VotoWhereInput[];
    NOT?: Prisma.VotoWhereInput | Prisma.VotoWhereInput[];
    edicaoId?: Prisma.StringFilter<"Voto"> | string;
    finalistaId?: Prisma.StringFilter<"Voto"> | string;
    votanteNome?: Prisma.StringFilter<"Voto"> | string;
    cpf?: Prisma.StringFilter<"Voto"> | string;
    pessoaId?: Prisma.StringNullableFilter<"Voto"> | string | null;
    votanteLiderId?: Prisma.StringNullableFilter<"Voto"> | string | null;
    votanteInscricaoId?: Prisma.StringNullableFilter<"Voto"> | string | null;
    lgpdAceitoEm?: Prisma.DateTimeFilter<"Voto"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Voto"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
    finalista?: Prisma.XOR<Prisma.FinalistaScalarRelationFilter, Prisma.FinalistaWhereInput>;
    pessoa?: Prisma.XOR<Prisma.PessoaNullableScalarRelationFilter, Prisma.PessoaWhereInput> | null;
    votanteLider?: Prisma.XOR<Prisma.LiderNullableScalarRelationFilter, Prisma.LiderWhereInput> | null;
    votanteInscricao?: Prisma.XOR<Prisma.InscricaoStartupNullableScalarRelationFilter, Prisma.InscricaoStartupWhereInput> | null;
}, "id" | "edicaoId_cpf">;
export type VotoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    finalistaId?: Prisma.SortOrder;
    votanteNome?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
    pessoaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    votanteLiderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    votanteInscricaoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    lgpdAceitoEm?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.VotoCountOrderByAggregateInput;
    _max?: Prisma.VotoMaxOrderByAggregateInput;
    _min?: Prisma.VotoMinOrderByAggregateInput;
};
export type VotoScalarWhereWithAggregatesInput = {
    AND?: Prisma.VotoScalarWhereWithAggregatesInput | Prisma.VotoScalarWhereWithAggregatesInput[];
    OR?: Prisma.VotoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VotoScalarWhereWithAggregatesInput | Prisma.VotoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Voto"> | string;
    edicaoId?: Prisma.StringWithAggregatesFilter<"Voto"> | string;
    finalistaId?: Prisma.StringWithAggregatesFilter<"Voto"> | string;
    votanteNome?: Prisma.StringWithAggregatesFilter<"Voto"> | string;
    cpf?: Prisma.StringWithAggregatesFilter<"Voto"> | string;
    pessoaId?: Prisma.StringNullableWithAggregatesFilter<"Voto"> | string | null;
    votanteLiderId?: Prisma.StringNullableWithAggregatesFilter<"Voto"> | string | null;
    votanteInscricaoId?: Prisma.StringNullableWithAggregatesFilter<"Voto"> | string | null;
    lgpdAceitoEm?: Prisma.DateTimeWithAggregatesFilter<"Voto"> | Date | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Voto"> | Date | string;
};
export type VotoCreateInput = {
    id?: string;
    votanteNome: string;
    cpf: string;
    lgpdAceitoEm: Date | string;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutVotosInput;
    finalista: Prisma.FinalistaCreateNestedOneWithoutVotosInput;
    pessoa?: Prisma.PessoaCreateNestedOneWithoutVotosInput;
    votanteLider?: Prisma.LiderCreateNestedOneWithoutVotosInput;
    votanteInscricao?: Prisma.InscricaoStartupCreateNestedOneWithoutVotosInput;
};
export type VotoUncheckedCreateInput = {
    id?: string;
    edicaoId: string;
    finalistaId: string;
    votanteNome: string;
    cpf: string;
    pessoaId?: string | null;
    votanteLiderId?: string | null;
    votanteInscricaoId?: string | null;
    lgpdAceitoEm: Date | string;
    createdAt?: Date | string;
};
export type VotoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    votanteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    lgpdAceitoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutVotosNestedInput;
    finalista?: Prisma.FinalistaUpdateOneRequiredWithoutVotosNestedInput;
    pessoa?: Prisma.PessoaUpdateOneWithoutVotosNestedInput;
    votanteLider?: Prisma.LiderUpdateOneWithoutVotosNestedInput;
    votanteInscricao?: Prisma.InscricaoStartupUpdateOneWithoutVotosNestedInput;
};
export type VotoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    finalistaId?: Prisma.StringFieldUpdateOperationsInput | string;
    votanteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    pessoaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    votanteLiderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    votanteInscricaoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lgpdAceitoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VotoCreateManyInput = {
    id?: string;
    edicaoId: string;
    finalistaId: string;
    votanteNome: string;
    cpf: string;
    pessoaId?: string | null;
    votanteLiderId?: string | null;
    votanteInscricaoId?: string | null;
    lgpdAceitoEm: Date | string;
    createdAt?: Date | string;
};
export type VotoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    votanteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    lgpdAceitoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VotoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    finalistaId?: Prisma.StringFieldUpdateOperationsInput | string;
    votanteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    pessoaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    votanteLiderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    votanteInscricaoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lgpdAceitoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VotoListRelationFilter = {
    every?: Prisma.VotoWhereInput;
    some?: Prisma.VotoWhereInput;
    none?: Prisma.VotoWhereInput;
};
export type VotoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type VotoEdicaoIdCpfCompoundUniqueInput = {
    edicaoId: string;
    cpf: string;
};
export type VotoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    finalistaId?: Prisma.SortOrder;
    votanteNome?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
    pessoaId?: Prisma.SortOrder;
    votanteLiderId?: Prisma.SortOrder;
    votanteInscricaoId?: Prisma.SortOrder;
    lgpdAceitoEm?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type VotoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    finalistaId?: Prisma.SortOrder;
    votanteNome?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
    pessoaId?: Prisma.SortOrder;
    votanteLiderId?: Prisma.SortOrder;
    votanteInscricaoId?: Prisma.SortOrder;
    lgpdAceitoEm?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type VotoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    finalistaId?: Prisma.SortOrder;
    votanteNome?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
    pessoaId?: Prisma.SortOrder;
    votanteLiderId?: Prisma.SortOrder;
    votanteInscricaoId?: Prisma.SortOrder;
    lgpdAceitoEm?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type VotoCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.VotoCreateWithoutEdicaoInput, Prisma.VotoUncheckedCreateWithoutEdicaoInput> | Prisma.VotoCreateWithoutEdicaoInput[] | Prisma.VotoUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.VotoCreateOrConnectWithoutEdicaoInput | Prisma.VotoCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.VotoCreateManyEdicaoInputEnvelope;
    connect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
};
export type VotoUncheckedCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.VotoCreateWithoutEdicaoInput, Prisma.VotoUncheckedCreateWithoutEdicaoInput> | Prisma.VotoCreateWithoutEdicaoInput[] | Prisma.VotoUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.VotoCreateOrConnectWithoutEdicaoInput | Prisma.VotoCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.VotoCreateManyEdicaoInputEnvelope;
    connect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
};
export type VotoUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.VotoCreateWithoutEdicaoInput, Prisma.VotoUncheckedCreateWithoutEdicaoInput> | Prisma.VotoCreateWithoutEdicaoInput[] | Prisma.VotoUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.VotoCreateOrConnectWithoutEdicaoInput | Prisma.VotoCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.VotoUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.VotoUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.VotoCreateManyEdicaoInputEnvelope;
    set?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    disconnect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    delete?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    connect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    update?: Prisma.VotoUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.VotoUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.VotoUpdateManyWithWhereWithoutEdicaoInput | Prisma.VotoUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.VotoScalarWhereInput | Prisma.VotoScalarWhereInput[];
};
export type VotoUncheckedUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.VotoCreateWithoutEdicaoInput, Prisma.VotoUncheckedCreateWithoutEdicaoInput> | Prisma.VotoCreateWithoutEdicaoInput[] | Prisma.VotoUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.VotoCreateOrConnectWithoutEdicaoInput | Prisma.VotoCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.VotoUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.VotoUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.VotoCreateManyEdicaoInputEnvelope;
    set?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    disconnect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    delete?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    connect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    update?: Prisma.VotoUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.VotoUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.VotoUpdateManyWithWhereWithoutEdicaoInput | Prisma.VotoUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.VotoScalarWhereInput | Prisma.VotoScalarWhereInput[];
};
export type VotoCreateNestedManyWithoutPessoaInput = {
    create?: Prisma.XOR<Prisma.VotoCreateWithoutPessoaInput, Prisma.VotoUncheckedCreateWithoutPessoaInput> | Prisma.VotoCreateWithoutPessoaInput[] | Prisma.VotoUncheckedCreateWithoutPessoaInput[];
    connectOrCreate?: Prisma.VotoCreateOrConnectWithoutPessoaInput | Prisma.VotoCreateOrConnectWithoutPessoaInput[];
    createMany?: Prisma.VotoCreateManyPessoaInputEnvelope;
    connect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
};
export type VotoUncheckedCreateNestedManyWithoutPessoaInput = {
    create?: Prisma.XOR<Prisma.VotoCreateWithoutPessoaInput, Prisma.VotoUncheckedCreateWithoutPessoaInput> | Prisma.VotoCreateWithoutPessoaInput[] | Prisma.VotoUncheckedCreateWithoutPessoaInput[];
    connectOrCreate?: Prisma.VotoCreateOrConnectWithoutPessoaInput | Prisma.VotoCreateOrConnectWithoutPessoaInput[];
    createMany?: Prisma.VotoCreateManyPessoaInputEnvelope;
    connect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
};
export type VotoUpdateManyWithoutPessoaNestedInput = {
    create?: Prisma.XOR<Prisma.VotoCreateWithoutPessoaInput, Prisma.VotoUncheckedCreateWithoutPessoaInput> | Prisma.VotoCreateWithoutPessoaInput[] | Prisma.VotoUncheckedCreateWithoutPessoaInput[];
    connectOrCreate?: Prisma.VotoCreateOrConnectWithoutPessoaInput | Prisma.VotoCreateOrConnectWithoutPessoaInput[];
    upsert?: Prisma.VotoUpsertWithWhereUniqueWithoutPessoaInput | Prisma.VotoUpsertWithWhereUniqueWithoutPessoaInput[];
    createMany?: Prisma.VotoCreateManyPessoaInputEnvelope;
    set?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    disconnect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    delete?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    connect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    update?: Prisma.VotoUpdateWithWhereUniqueWithoutPessoaInput | Prisma.VotoUpdateWithWhereUniqueWithoutPessoaInput[];
    updateMany?: Prisma.VotoUpdateManyWithWhereWithoutPessoaInput | Prisma.VotoUpdateManyWithWhereWithoutPessoaInput[];
    deleteMany?: Prisma.VotoScalarWhereInput | Prisma.VotoScalarWhereInput[];
};
export type VotoUncheckedUpdateManyWithoutPessoaNestedInput = {
    create?: Prisma.XOR<Prisma.VotoCreateWithoutPessoaInput, Prisma.VotoUncheckedCreateWithoutPessoaInput> | Prisma.VotoCreateWithoutPessoaInput[] | Prisma.VotoUncheckedCreateWithoutPessoaInput[];
    connectOrCreate?: Prisma.VotoCreateOrConnectWithoutPessoaInput | Prisma.VotoCreateOrConnectWithoutPessoaInput[];
    upsert?: Prisma.VotoUpsertWithWhereUniqueWithoutPessoaInput | Prisma.VotoUpsertWithWhereUniqueWithoutPessoaInput[];
    createMany?: Prisma.VotoCreateManyPessoaInputEnvelope;
    set?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    disconnect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    delete?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    connect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    update?: Prisma.VotoUpdateWithWhereUniqueWithoutPessoaInput | Prisma.VotoUpdateWithWhereUniqueWithoutPessoaInput[];
    updateMany?: Prisma.VotoUpdateManyWithWhereWithoutPessoaInput | Prisma.VotoUpdateManyWithWhereWithoutPessoaInput[];
    deleteMany?: Prisma.VotoScalarWhereInput | Prisma.VotoScalarWhereInput[];
};
export type VotoCreateNestedManyWithoutVotanteLiderInput = {
    create?: Prisma.XOR<Prisma.VotoCreateWithoutVotanteLiderInput, Prisma.VotoUncheckedCreateWithoutVotanteLiderInput> | Prisma.VotoCreateWithoutVotanteLiderInput[] | Prisma.VotoUncheckedCreateWithoutVotanteLiderInput[];
    connectOrCreate?: Prisma.VotoCreateOrConnectWithoutVotanteLiderInput | Prisma.VotoCreateOrConnectWithoutVotanteLiderInput[];
    createMany?: Prisma.VotoCreateManyVotanteLiderInputEnvelope;
    connect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
};
export type VotoUncheckedCreateNestedManyWithoutVotanteLiderInput = {
    create?: Prisma.XOR<Prisma.VotoCreateWithoutVotanteLiderInput, Prisma.VotoUncheckedCreateWithoutVotanteLiderInput> | Prisma.VotoCreateWithoutVotanteLiderInput[] | Prisma.VotoUncheckedCreateWithoutVotanteLiderInput[];
    connectOrCreate?: Prisma.VotoCreateOrConnectWithoutVotanteLiderInput | Prisma.VotoCreateOrConnectWithoutVotanteLiderInput[];
    createMany?: Prisma.VotoCreateManyVotanteLiderInputEnvelope;
    connect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
};
export type VotoUpdateManyWithoutVotanteLiderNestedInput = {
    create?: Prisma.XOR<Prisma.VotoCreateWithoutVotanteLiderInput, Prisma.VotoUncheckedCreateWithoutVotanteLiderInput> | Prisma.VotoCreateWithoutVotanteLiderInput[] | Prisma.VotoUncheckedCreateWithoutVotanteLiderInput[];
    connectOrCreate?: Prisma.VotoCreateOrConnectWithoutVotanteLiderInput | Prisma.VotoCreateOrConnectWithoutVotanteLiderInput[];
    upsert?: Prisma.VotoUpsertWithWhereUniqueWithoutVotanteLiderInput | Prisma.VotoUpsertWithWhereUniqueWithoutVotanteLiderInput[];
    createMany?: Prisma.VotoCreateManyVotanteLiderInputEnvelope;
    set?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    disconnect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    delete?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    connect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    update?: Prisma.VotoUpdateWithWhereUniqueWithoutVotanteLiderInput | Prisma.VotoUpdateWithWhereUniqueWithoutVotanteLiderInput[];
    updateMany?: Prisma.VotoUpdateManyWithWhereWithoutVotanteLiderInput | Prisma.VotoUpdateManyWithWhereWithoutVotanteLiderInput[];
    deleteMany?: Prisma.VotoScalarWhereInput | Prisma.VotoScalarWhereInput[];
};
export type VotoUncheckedUpdateManyWithoutVotanteLiderNestedInput = {
    create?: Prisma.XOR<Prisma.VotoCreateWithoutVotanteLiderInput, Prisma.VotoUncheckedCreateWithoutVotanteLiderInput> | Prisma.VotoCreateWithoutVotanteLiderInput[] | Prisma.VotoUncheckedCreateWithoutVotanteLiderInput[];
    connectOrCreate?: Prisma.VotoCreateOrConnectWithoutVotanteLiderInput | Prisma.VotoCreateOrConnectWithoutVotanteLiderInput[];
    upsert?: Prisma.VotoUpsertWithWhereUniqueWithoutVotanteLiderInput | Prisma.VotoUpsertWithWhereUniqueWithoutVotanteLiderInput[];
    createMany?: Prisma.VotoCreateManyVotanteLiderInputEnvelope;
    set?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    disconnect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    delete?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    connect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    update?: Prisma.VotoUpdateWithWhereUniqueWithoutVotanteLiderInput | Prisma.VotoUpdateWithWhereUniqueWithoutVotanteLiderInput[];
    updateMany?: Prisma.VotoUpdateManyWithWhereWithoutVotanteLiderInput | Prisma.VotoUpdateManyWithWhereWithoutVotanteLiderInput[];
    deleteMany?: Prisma.VotoScalarWhereInput | Prisma.VotoScalarWhereInput[];
};
export type VotoCreateNestedManyWithoutVotanteInscricaoInput = {
    create?: Prisma.XOR<Prisma.VotoCreateWithoutVotanteInscricaoInput, Prisma.VotoUncheckedCreateWithoutVotanteInscricaoInput> | Prisma.VotoCreateWithoutVotanteInscricaoInput[] | Prisma.VotoUncheckedCreateWithoutVotanteInscricaoInput[];
    connectOrCreate?: Prisma.VotoCreateOrConnectWithoutVotanteInscricaoInput | Prisma.VotoCreateOrConnectWithoutVotanteInscricaoInput[];
    createMany?: Prisma.VotoCreateManyVotanteInscricaoInputEnvelope;
    connect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
};
export type VotoUncheckedCreateNestedManyWithoutVotanteInscricaoInput = {
    create?: Prisma.XOR<Prisma.VotoCreateWithoutVotanteInscricaoInput, Prisma.VotoUncheckedCreateWithoutVotanteInscricaoInput> | Prisma.VotoCreateWithoutVotanteInscricaoInput[] | Prisma.VotoUncheckedCreateWithoutVotanteInscricaoInput[];
    connectOrCreate?: Prisma.VotoCreateOrConnectWithoutVotanteInscricaoInput | Prisma.VotoCreateOrConnectWithoutVotanteInscricaoInput[];
    createMany?: Prisma.VotoCreateManyVotanteInscricaoInputEnvelope;
    connect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
};
export type VotoUpdateManyWithoutVotanteInscricaoNestedInput = {
    create?: Prisma.XOR<Prisma.VotoCreateWithoutVotanteInscricaoInput, Prisma.VotoUncheckedCreateWithoutVotanteInscricaoInput> | Prisma.VotoCreateWithoutVotanteInscricaoInput[] | Prisma.VotoUncheckedCreateWithoutVotanteInscricaoInput[];
    connectOrCreate?: Prisma.VotoCreateOrConnectWithoutVotanteInscricaoInput | Prisma.VotoCreateOrConnectWithoutVotanteInscricaoInput[];
    upsert?: Prisma.VotoUpsertWithWhereUniqueWithoutVotanteInscricaoInput | Prisma.VotoUpsertWithWhereUniqueWithoutVotanteInscricaoInput[];
    createMany?: Prisma.VotoCreateManyVotanteInscricaoInputEnvelope;
    set?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    disconnect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    delete?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    connect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    update?: Prisma.VotoUpdateWithWhereUniqueWithoutVotanteInscricaoInput | Prisma.VotoUpdateWithWhereUniqueWithoutVotanteInscricaoInput[];
    updateMany?: Prisma.VotoUpdateManyWithWhereWithoutVotanteInscricaoInput | Prisma.VotoUpdateManyWithWhereWithoutVotanteInscricaoInput[];
    deleteMany?: Prisma.VotoScalarWhereInput | Prisma.VotoScalarWhereInput[];
};
export type VotoUncheckedUpdateManyWithoutVotanteInscricaoNestedInput = {
    create?: Prisma.XOR<Prisma.VotoCreateWithoutVotanteInscricaoInput, Prisma.VotoUncheckedCreateWithoutVotanteInscricaoInput> | Prisma.VotoCreateWithoutVotanteInscricaoInput[] | Prisma.VotoUncheckedCreateWithoutVotanteInscricaoInput[];
    connectOrCreate?: Prisma.VotoCreateOrConnectWithoutVotanteInscricaoInput | Prisma.VotoCreateOrConnectWithoutVotanteInscricaoInput[];
    upsert?: Prisma.VotoUpsertWithWhereUniqueWithoutVotanteInscricaoInput | Prisma.VotoUpsertWithWhereUniqueWithoutVotanteInscricaoInput[];
    createMany?: Prisma.VotoCreateManyVotanteInscricaoInputEnvelope;
    set?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    disconnect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    delete?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    connect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    update?: Prisma.VotoUpdateWithWhereUniqueWithoutVotanteInscricaoInput | Prisma.VotoUpdateWithWhereUniqueWithoutVotanteInscricaoInput[];
    updateMany?: Prisma.VotoUpdateManyWithWhereWithoutVotanteInscricaoInput | Prisma.VotoUpdateManyWithWhereWithoutVotanteInscricaoInput[];
    deleteMany?: Prisma.VotoScalarWhereInput | Prisma.VotoScalarWhereInput[];
};
export type VotoCreateNestedManyWithoutFinalistaInput = {
    create?: Prisma.XOR<Prisma.VotoCreateWithoutFinalistaInput, Prisma.VotoUncheckedCreateWithoutFinalistaInput> | Prisma.VotoCreateWithoutFinalistaInput[] | Prisma.VotoUncheckedCreateWithoutFinalistaInput[];
    connectOrCreate?: Prisma.VotoCreateOrConnectWithoutFinalistaInput | Prisma.VotoCreateOrConnectWithoutFinalistaInput[];
    createMany?: Prisma.VotoCreateManyFinalistaInputEnvelope;
    connect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
};
export type VotoUncheckedCreateNestedManyWithoutFinalistaInput = {
    create?: Prisma.XOR<Prisma.VotoCreateWithoutFinalistaInput, Prisma.VotoUncheckedCreateWithoutFinalistaInput> | Prisma.VotoCreateWithoutFinalistaInput[] | Prisma.VotoUncheckedCreateWithoutFinalistaInput[];
    connectOrCreate?: Prisma.VotoCreateOrConnectWithoutFinalistaInput | Prisma.VotoCreateOrConnectWithoutFinalistaInput[];
    createMany?: Prisma.VotoCreateManyFinalistaInputEnvelope;
    connect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
};
export type VotoUpdateManyWithoutFinalistaNestedInput = {
    create?: Prisma.XOR<Prisma.VotoCreateWithoutFinalistaInput, Prisma.VotoUncheckedCreateWithoutFinalistaInput> | Prisma.VotoCreateWithoutFinalistaInput[] | Prisma.VotoUncheckedCreateWithoutFinalistaInput[];
    connectOrCreate?: Prisma.VotoCreateOrConnectWithoutFinalistaInput | Prisma.VotoCreateOrConnectWithoutFinalistaInput[];
    upsert?: Prisma.VotoUpsertWithWhereUniqueWithoutFinalistaInput | Prisma.VotoUpsertWithWhereUniqueWithoutFinalistaInput[];
    createMany?: Prisma.VotoCreateManyFinalistaInputEnvelope;
    set?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    disconnect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    delete?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    connect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    update?: Prisma.VotoUpdateWithWhereUniqueWithoutFinalistaInput | Prisma.VotoUpdateWithWhereUniqueWithoutFinalistaInput[];
    updateMany?: Prisma.VotoUpdateManyWithWhereWithoutFinalistaInput | Prisma.VotoUpdateManyWithWhereWithoutFinalistaInput[];
    deleteMany?: Prisma.VotoScalarWhereInput | Prisma.VotoScalarWhereInput[];
};
export type VotoUncheckedUpdateManyWithoutFinalistaNestedInput = {
    create?: Prisma.XOR<Prisma.VotoCreateWithoutFinalistaInput, Prisma.VotoUncheckedCreateWithoutFinalistaInput> | Prisma.VotoCreateWithoutFinalistaInput[] | Prisma.VotoUncheckedCreateWithoutFinalistaInput[];
    connectOrCreate?: Prisma.VotoCreateOrConnectWithoutFinalistaInput | Prisma.VotoCreateOrConnectWithoutFinalistaInput[];
    upsert?: Prisma.VotoUpsertWithWhereUniqueWithoutFinalistaInput | Prisma.VotoUpsertWithWhereUniqueWithoutFinalistaInput[];
    createMany?: Prisma.VotoCreateManyFinalistaInputEnvelope;
    set?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    disconnect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    delete?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    connect?: Prisma.VotoWhereUniqueInput | Prisma.VotoWhereUniqueInput[];
    update?: Prisma.VotoUpdateWithWhereUniqueWithoutFinalistaInput | Prisma.VotoUpdateWithWhereUniqueWithoutFinalistaInput[];
    updateMany?: Prisma.VotoUpdateManyWithWhereWithoutFinalistaInput | Prisma.VotoUpdateManyWithWhereWithoutFinalistaInput[];
    deleteMany?: Prisma.VotoScalarWhereInput | Prisma.VotoScalarWhereInput[];
};
export type VotoCreateWithoutEdicaoInput = {
    id?: string;
    votanteNome: string;
    cpf: string;
    lgpdAceitoEm: Date | string;
    createdAt?: Date | string;
    finalista: Prisma.FinalistaCreateNestedOneWithoutVotosInput;
    pessoa?: Prisma.PessoaCreateNestedOneWithoutVotosInput;
    votanteLider?: Prisma.LiderCreateNestedOneWithoutVotosInput;
    votanteInscricao?: Prisma.InscricaoStartupCreateNestedOneWithoutVotosInput;
};
export type VotoUncheckedCreateWithoutEdicaoInput = {
    id?: string;
    finalistaId: string;
    votanteNome: string;
    cpf: string;
    pessoaId?: string | null;
    votanteLiderId?: string | null;
    votanteInscricaoId?: string | null;
    lgpdAceitoEm: Date | string;
    createdAt?: Date | string;
};
export type VotoCreateOrConnectWithoutEdicaoInput = {
    where: Prisma.VotoWhereUniqueInput;
    create: Prisma.XOR<Prisma.VotoCreateWithoutEdicaoInput, Prisma.VotoUncheckedCreateWithoutEdicaoInput>;
};
export type VotoCreateManyEdicaoInputEnvelope = {
    data: Prisma.VotoCreateManyEdicaoInput | Prisma.VotoCreateManyEdicaoInput[];
    skipDuplicates?: boolean;
};
export type VotoUpsertWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.VotoWhereUniqueInput;
    update: Prisma.XOR<Prisma.VotoUpdateWithoutEdicaoInput, Prisma.VotoUncheckedUpdateWithoutEdicaoInput>;
    create: Prisma.XOR<Prisma.VotoCreateWithoutEdicaoInput, Prisma.VotoUncheckedCreateWithoutEdicaoInput>;
};
export type VotoUpdateWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.VotoWhereUniqueInput;
    data: Prisma.XOR<Prisma.VotoUpdateWithoutEdicaoInput, Prisma.VotoUncheckedUpdateWithoutEdicaoInput>;
};
export type VotoUpdateManyWithWhereWithoutEdicaoInput = {
    where: Prisma.VotoScalarWhereInput;
    data: Prisma.XOR<Prisma.VotoUpdateManyMutationInput, Prisma.VotoUncheckedUpdateManyWithoutEdicaoInput>;
};
export type VotoScalarWhereInput = {
    AND?: Prisma.VotoScalarWhereInput | Prisma.VotoScalarWhereInput[];
    OR?: Prisma.VotoScalarWhereInput[];
    NOT?: Prisma.VotoScalarWhereInput | Prisma.VotoScalarWhereInput[];
    id?: Prisma.StringFilter<"Voto"> | string;
    edicaoId?: Prisma.StringFilter<"Voto"> | string;
    finalistaId?: Prisma.StringFilter<"Voto"> | string;
    votanteNome?: Prisma.StringFilter<"Voto"> | string;
    cpf?: Prisma.StringFilter<"Voto"> | string;
    pessoaId?: Prisma.StringNullableFilter<"Voto"> | string | null;
    votanteLiderId?: Prisma.StringNullableFilter<"Voto"> | string | null;
    votanteInscricaoId?: Prisma.StringNullableFilter<"Voto"> | string | null;
    lgpdAceitoEm?: Prisma.DateTimeFilter<"Voto"> | Date | string;
    createdAt?: Prisma.DateTimeFilter<"Voto"> | Date | string;
};
export type VotoCreateWithoutPessoaInput = {
    id?: string;
    votanteNome: string;
    cpf: string;
    lgpdAceitoEm: Date | string;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutVotosInput;
    finalista: Prisma.FinalistaCreateNestedOneWithoutVotosInput;
    votanteLider?: Prisma.LiderCreateNestedOneWithoutVotosInput;
    votanteInscricao?: Prisma.InscricaoStartupCreateNestedOneWithoutVotosInput;
};
export type VotoUncheckedCreateWithoutPessoaInput = {
    id?: string;
    edicaoId: string;
    finalistaId: string;
    votanteNome: string;
    cpf: string;
    votanteLiderId?: string | null;
    votanteInscricaoId?: string | null;
    lgpdAceitoEm: Date | string;
    createdAt?: Date | string;
};
export type VotoCreateOrConnectWithoutPessoaInput = {
    where: Prisma.VotoWhereUniqueInput;
    create: Prisma.XOR<Prisma.VotoCreateWithoutPessoaInput, Prisma.VotoUncheckedCreateWithoutPessoaInput>;
};
export type VotoCreateManyPessoaInputEnvelope = {
    data: Prisma.VotoCreateManyPessoaInput | Prisma.VotoCreateManyPessoaInput[];
    skipDuplicates?: boolean;
};
export type VotoUpsertWithWhereUniqueWithoutPessoaInput = {
    where: Prisma.VotoWhereUniqueInput;
    update: Prisma.XOR<Prisma.VotoUpdateWithoutPessoaInput, Prisma.VotoUncheckedUpdateWithoutPessoaInput>;
    create: Prisma.XOR<Prisma.VotoCreateWithoutPessoaInput, Prisma.VotoUncheckedCreateWithoutPessoaInput>;
};
export type VotoUpdateWithWhereUniqueWithoutPessoaInput = {
    where: Prisma.VotoWhereUniqueInput;
    data: Prisma.XOR<Prisma.VotoUpdateWithoutPessoaInput, Prisma.VotoUncheckedUpdateWithoutPessoaInput>;
};
export type VotoUpdateManyWithWhereWithoutPessoaInput = {
    where: Prisma.VotoScalarWhereInput;
    data: Prisma.XOR<Prisma.VotoUpdateManyMutationInput, Prisma.VotoUncheckedUpdateManyWithoutPessoaInput>;
};
export type VotoCreateWithoutVotanteLiderInput = {
    id?: string;
    votanteNome: string;
    cpf: string;
    lgpdAceitoEm: Date | string;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutVotosInput;
    finalista: Prisma.FinalistaCreateNestedOneWithoutVotosInput;
    pessoa?: Prisma.PessoaCreateNestedOneWithoutVotosInput;
    votanteInscricao?: Prisma.InscricaoStartupCreateNestedOneWithoutVotosInput;
};
export type VotoUncheckedCreateWithoutVotanteLiderInput = {
    id?: string;
    edicaoId: string;
    finalistaId: string;
    votanteNome: string;
    cpf: string;
    pessoaId?: string | null;
    votanteInscricaoId?: string | null;
    lgpdAceitoEm: Date | string;
    createdAt?: Date | string;
};
export type VotoCreateOrConnectWithoutVotanteLiderInput = {
    where: Prisma.VotoWhereUniqueInput;
    create: Prisma.XOR<Prisma.VotoCreateWithoutVotanteLiderInput, Prisma.VotoUncheckedCreateWithoutVotanteLiderInput>;
};
export type VotoCreateManyVotanteLiderInputEnvelope = {
    data: Prisma.VotoCreateManyVotanteLiderInput | Prisma.VotoCreateManyVotanteLiderInput[];
    skipDuplicates?: boolean;
};
export type VotoUpsertWithWhereUniqueWithoutVotanteLiderInput = {
    where: Prisma.VotoWhereUniqueInput;
    update: Prisma.XOR<Prisma.VotoUpdateWithoutVotanteLiderInput, Prisma.VotoUncheckedUpdateWithoutVotanteLiderInput>;
    create: Prisma.XOR<Prisma.VotoCreateWithoutVotanteLiderInput, Prisma.VotoUncheckedCreateWithoutVotanteLiderInput>;
};
export type VotoUpdateWithWhereUniqueWithoutVotanteLiderInput = {
    where: Prisma.VotoWhereUniqueInput;
    data: Prisma.XOR<Prisma.VotoUpdateWithoutVotanteLiderInput, Prisma.VotoUncheckedUpdateWithoutVotanteLiderInput>;
};
export type VotoUpdateManyWithWhereWithoutVotanteLiderInput = {
    where: Prisma.VotoScalarWhereInput;
    data: Prisma.XOR<Prisma.VotoUpdateManyMutationInput, Prisma.VotoUncheckedUpdateManyWithoutVotanteLiderInput>;
};
export type VotoCreateWithoutVotanteInscricaoInput = {
    id?: string;
    votanteNome: string;
    cpf: string;
    lgpdAceitoEm: Date | string;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutVotosInput;
    finalista: Prisma.FinalistaCreateNestedOneWithoutVotosInput;
    pessoa?: Prisma.PessoaCreateNestedOneWithoutVotosInput;
    votanteLider?: Prisma.LiderCreateNestedOneWithoutVotosInput;
};
export type VotoUncheckedCreateWithoutVotanteInscricaoInput = {
    id?: string;
    edicaoId: string;
    finalistaId: string;
    votanteNome: string;
    cpf: string;
    pessoaId?: string | null;
    votanteLiderId?: string | null;
    lgpdAceitoEm: Date | string;
    createdAt?: Date | string;
};
export type VotoCreateOrConnectWithoutVotanteInscricaoInput = {
    where: Prisma.VotoWhereUniqueInput;
    create: Prisma.XOR<Prisma.VotoCreateWithoutVotanteInscricaoInput, Prisma.VotoUncheckedCreateWithoutVotanteInscricaoInput>;
};
export type VotoCreateManyVotanteInscricaoInputEnvelope = {
    data: Prisma.VotoCreateManyVotanteInscricaoInput | Prisma.VotoCreateManyVotanteInscricaoInput[];
    skipDuplicates?: boolean;
};
export type VotoUpsertWithWhereUniqueWithoutVotanteInscricaoInput = {
    where: Prisma.VotoWhereUniqueInput;
    update: Prisma.XOR<Prisma.VotoUpdateWithoutVotanteInscricaoInput, Prisma.VotoUncheckedUpdateWithoutVotanteInscricaoInput>;
    create: Prisma.XOR<Prisma.VotoCreateWithoutVotanteInscricaoInput, Prisma.VotoUncheckedCreateWithoutVotanteInscricaoInput>;
};
export type VotoUpdateWithWhereUniqueWithoutVotanteInscricaoInput = {
    where: Prisma.VotoWhereUniqueInput;
    data: Prisma.XOR<Prisma.VotoUpdateWithoutVotanteInscricaoInput, Prisma.VotoUncheckedUpdateWithoutVotanteInscricaoInput>;
};
export type VotoUpdateManyWithWhereWithoutVotanteInscricaoInput = {
    where: Prisma.VotoScalarWhereInput;
    data: Prisma.XOR<Prisma.VotoUpdateManyMutationInput, Prisma.VotoUncheckedUpdateManyWithoutVotanteInscricaoInput>;
};
export type VotoCreateWithoutFinalistaInput = {
    id?: string;
    votanteNome: string;
    cpf: string;
    lgpdAceitoEm: Date | string;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutVotosInput;
    pessoa?: Prisma.PessoaCreateNestedOneWithoutVotosInput;
    votanteLider?: Prisma.LiderCreateNestedOneWithoutVotosInput;
    votanteInscricao?: Prisma.InscricaoStartupCreateNestedOneWithoutVotosInput;
};
export type VotoUncheckedCreateWithoutFinalistaInput = {
    id?: string;
    edicaoId: string;
    votanteNome: string;
    cpf: string;
    pessoaId?: string | null;
    votanteLiderId?: string | null;
    votanteInscricaoId?: string | null;
    lgpdAceitoEm: Date | string;
    createdAt?: Date | string;
};
export type VotoCreateOrConnectWithoutFinalistaInput = {
    where: Prisma.VotoWhereUniqueInput;
    create: Prisma.XOR<Prisma.VotoCreateWithoutFinalistaInput, Prisma.VotoUncheckedCreateWithoutFinalistaInput>;
};
export type VotoCreateManyFinalistaInputEnvelope = {
    data: Prisma.VotoCreateManyFinalistaInput | Prisma.VotoCreateManyFinalistaInput[];
    skipDuplicates?: boolean;
};
export type VotoUpsertWithWhereUniqueWithoutFinalistaInput = {
    where: Prisma.VotoWhereUniqueInput;
    update: Prisma.XOR<Prisma.VotoUpdateWithoutFinalistaInput, Prisma.VotoUncheckedUpdateWithoutFinalistaInput>;
    create: Prisma.XOR<Prisma.VotoCreateWithoutFinalistaInput, Prisma.VotoUncheckedCreateWithoutFinalistaInput>;
};
export type VotoUpdateWithWhereUniqueWithoutFinalistaInput = {
    where: Prisma.VotoWhereUniqueInput;
    data: Prisma.XOR<Prisma.VotoUpdateWithoutFinalistaInput, Prisma.VotoUncheckedUpdateWithoutFinalistaInput>;
};
export type VotoUpdateManyWithWhereWithoutFinalistaInput = {
    where: Prisma.VotoScalarWhereInput;
    data: Prisma.XOR<Prisma.VotoUpdateManyMutationInput, Prisma.VotoUncheckedUpdateManyWithoutFinalistaInput>;
};
export type VotoCreateManyEdicaoInput = {
    id?: string;
    finalistaId: string;
    votanteNome: string;
    cpf: string;
    pessoaId?: string | null;
    votanteLiderId?: string | null;
    votanteInscricaoId?: string | null;
    lgpdAceitoEm: Date | string;
    createdAt?: Date | string;
};
export type VotoUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    votanteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    lgpdAceitoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    finalista?: Prisma.FinalistaUpdateOneRequiredWithoutVotosNestedInput;
    pessoa?: Prisma.PessoaUpdateOneWithoutVotosNestedInput;
    votanteLider?: Prisma.LiderUpdateOneWithoutVotosNestedInput;
    votanteInscricao?: Prisma.InscricaoStartupUpdateOneWithoutVotosNestedInput;
};
export type VotoUncheckedUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    finalistaId?: Prisma.StringFieldUpdateOperationsInput | string;
    votanteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    pessoaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    votanteLiderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    votanteInscricaoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lgpdAceitoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VotoUncheckedUpdateManyWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    finalistaId?: Prisma.StringFieldUpdateOperationsInput | string;
    votanteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    pessoaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    votanteLiderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    votanteInscricaoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lgpdAceitoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VotoCreateManyPessoaInput = {
    id?: string;
    edicaoId: string;
    finalistaId: string;
    votanteNome: string;
    cpf: string;
    votanteLiderId?: string | null;
    votanteInscricaoId?: string | null;
    lgpdAceitoEm: Date | string;
    createdAt?: Date | string;
};
export type VotoUpdateWithoutPessoaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    votanteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    lgpdAceitoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutVotosNestedInput;
    finalista?: Prisma.FinalistaUpdateOneRequiredWithoutVotosNestedInput;
    votanteLider?: Prisma.LiderUpdateOneWithoutVotosNestedInput;
    votanteInscricao?: Prisma.InscricaoStartupUpdateOneWithoutVotosNestedInput;
};
export type VotoUncheckedUpdateWithoutPessoaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    finalistaId?: Prisma.StringFieldUpdateOperationsInput | string;
    votanteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    votanteLiderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    votanteInscricaoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lgpdAceitoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VotoUncheckedUpdateManyWithoutPessoaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    finalistaId?: Prisma.StringFieldUpdateOperationsInput | string;
    votanteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    votanteLiderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    votanteInscricaoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lgpdAceitoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VotoCreateManyVotanteLiderInput = {
    id?: string;
    edicaoId: string;
    finalistaId: string;
    votanteNome: string;
    cpf: string;
    pessoaId?: string | null;
    votanteInscricaoId?: string | null;
    lgpdAceitoEm: Date | string;
    createdAt?: Date | string;
};
export type VotoUpdateWithoutVotanteLiderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    votanteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    lgpdAceitoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutVotosNestedInput;
    finalista?: Prisma.FinalistaUpdateOneRequiredWithoutVotosNestedInput;
    pessoa?: Prisma.PessoaUpdateOneWithoutVotosNestedInput;
    votanteInscricao?: Prisma.InscricaoStartupUpdateOneWithoutVotosNestedInput;
};
export type VotoUncheckedUpdateWithoutVotanteLiderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    finalistaId?: Prisma.StringFieldUpdateOperationsInput | string;
    votanteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    pessoaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    votanteInscricaoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lgpdAceitoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VotoUncheckedUpdateManyWithoutVotanteLiderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    finalistaId?: Prisma.StringFieldUpdateOperationsInput | string;
    votanteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    pessoaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    votanteInscricaoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lgpdAceitoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VotoCreateManyVotanteInscricaoInput = {
    id?: string;
    edicaoId: string;
    finalistaId: string;
    votanteNome: string;
    cpf: string;
    pessoaId?: string | null;
    votanteLiderId?: string | null;
    lgpdAceitoEm: Date | string;
    createdAt?: Date | string;
};
export type VotoUpdateWithoutVotanteInscricaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    votanteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    lgpdAceitoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutVotosNestedInput;
    finalista?: Prisma.FinalistaUpdateOneRequiredWithoutVotosNestedInput;
    pessoa?: Prisma.PessoaUpdateOneWithoutVotosNestedInput;
    votanteLider?: Prisma.LiderUpdateOneWithoutVotosNestedInput;
};
export type VotoUncheckedUpdateWithoutVotanteInscricaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    finalistaId?: Prisma.StringFieldUpdateOperationsInput | string;
    votanteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    pessoaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    votanteLiderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lgpdAceitoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VotoUncheckedUpdateManyWithoutVotanteInscricaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    finalistaId?: Prisma.StringFieldUpdateOperationsInput | string;
    votanteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    pessoaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    votanteLiderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lgpdAceitoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VotoCreateManyFinalistaInput = {
    id?: string;
    edicaoId: string;
    votanteNome: string;
    cpf: string;
    pessoaId?: string | null;
    votanteLiderId?: string | null;
    votanteInscricaoId?: string | null;
    lgpdAceitoEm: Date | string;
    createdAt?: Date | string;
};
export type VotoUpdateWithoutFinalistaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    votanteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    lgpdAceitoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutVotosNestedInput;
    pessoa?: Prisma.PessoaUpdateOneWithoutVotosNestedInput;
    votanteLider?: Prisma.LiderUpdateOneWithoutVotosNestedInput;
    votanteInscricao?: Prisma.InscricaoStartupUpdateOneWithoutVotosNestedInput;
};
export type VotoUncheckedUpdateWithoutFinalistaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    votanteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    pessoaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    votanteLiderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    votanteInscricaoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lgpdAceitoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VotoUncheckedUpdateManyWithoutFinalistaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    votanteNome?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    pessoaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    votanteLiderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    votanteInscricaoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lgpdAceitoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VotoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    finalistaId?: boolean;
    votanteNome?: boolean;
    cpf?: boolean;
    pessoaId?: boolean;
    votanteLiderId?: boolean;
    votanteInscricaoId?: boolean;
    lgpdAceitoEm?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    finalista?: boolean | Prisma.FinalistaDefaultArgs<ExtArgs>;
    pessoa?: boolean | Prisma.Voto$pessoaArgs<ExtArgs>;
    votanteLider?: boolean | Prisma.Voto$votanteLiderArgs<ExtArgs>;
    votanteInscricao?: boolean | Prisma.Voto$votanteInscricaoArgs<ExtArgs>;
}, ExtArgs["result"]["voto"]>;
export type VotoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    finalistaId?: boolean;
    votanteNome?: boolean;
    cpf?: boolean;
    pessoaId?: boolean;
    votanteLiderId?: boolean;
    votanteInscricaoId?: boolean;
    lgpdAceitoEm?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    finalista?: boolean | Prisma.FinalistaDefaultArgs<ExtArgs>;
    pessoa?: boolean | Prisma.Voto$pessoaArgs<ExtArgs>;
    votanteLider?: boolean | Prisma.Voto$votanteLiderArgs<ExtArgs>;
    votanteInscricao?: boolean | Prisma.Voto$votanteInscricaoArgs<ExtArgs>;
}, ExtArgs["result"]["voto"]>;
export type VotoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    finalistaId?: boolean;
    votanteNome?: boolean;
    cpf?: boolean;
    pessoaId?: boolean;
    votanteLiderId?: boolean;
    votanteInscricaoId?: boolean;
    lgpdAceitoEm?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    finalista?: boolean | Prisma.FinalistaDefaultArgs<ExtArgs>;
    pessoa?: boolean | Prisma.Voto$pessoaArgs<ExtArgs>;
    votanteLider?: boolean | Prisma.Voto$votanteLiderArgs<ExtArgs>;
    votanteInscricao?: boolean | Prisma.Voto$votanteInscricaoArgs<ExtArgs>;
}, ExtArgs["result"]["voto"]>;
export type VotoSelectScalar = {
    id?: boolean;
    edicaoId?: boolean;
    finalistaId?: boolean;
    votanteNome?: boolean;
    cpf?: boolean;
    pessoaId?: boolean;
    votanteLiderId?: boolean;
    votanteInscricaoId?: boolean;
    lgpdAceitoEm?: boolean;
    createdAt?: boolean;
};
export type VotoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "edicaoId" | "finalistaId" | "votanteNome" | "cpf" | "pessoaId" | "votanteLiderId" | "votanteInscricaoId" | "lgpdAceitoEm" | "createdAt", ExtArgs["result"]["voto"]>;
export type VotoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    finalista?: boolean | Prisma.FinalistaDefaultArgs<ExtArgs>;
    pessoa?: boolean | Prisma.Voto$pessoaArgs<ExtArgs>;
    votanteLider?: boolean | Prisma.Voto$votanteLiderArgs<ExtArgs>;
    votanteInscricao?: boolean | Prisma.Voto$votanteInscricaoArgs<ExtArgs>;
};
export type VotoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    finalista?: boolean | Prisma.FinalistaDefaultArgs<ExtArgs>;
    pessoa?: boolean | Prisma.Voto$pessoaArgs<ExtArgs>;
    votanteLider?: boolean | Prisma.Voto$votanteLiderArgs<ExtArgs>;
    votanteInscricao?: boolean | Prisma.Voto$votanteInscricaoArgs<ExtArgs>;
};
export type VotoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    finalista?: boolean | Prisma.FinalistaDefaultArgs<ExtArgs>;
    pessoa?: boolean | Prisma.Voto$pessoaArgs<ExtArgs>;
    votanteLider?: boolean | Prisma.Voto$votanteLiderArgs<ExtArgs>;
    votanteInscricao?: boolean | Prisma.Voto$votanteInscricaoArgs<ExtArgs>;
};
export type $VotoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Voto";
    objects: {
        edicao: Prisma.$EdicaoPayload<ExtArgs>;
        finalista: Prisma.$FinalistaPayload<ExtArgs>;
        pessoa: Prisma.$PessoaPayload<ExtArgs> | null;
        votanteLider: Prisma.$LiderPayload<ExtArgs> | null;
        votanteInscricao: Prisma.$InscricaoStartupPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        edicaoId: string;
        finalistaId: string;
        votanteNome: string;
        cpf: string;
        pessoaId: string | null;
        votanteLiderId: string | null;
        votanteInscricaoId: string | null;
        lgpdAceitoEm: Date;
        createdAt: Date;
    }, ExtArgs["result"]["voto"]>;
    composites: {};
};
export type VotoGetPayload<S extends boolean | null | undefined | VotoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VotoPayload, S>;
export type VotoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VotoCountAggregateInputType | true;
};
export interface VotoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Voto'];
        meta: {
            name: 'Voto';
        };
    };
    findUnique<T extends VotoFindUniqueArgs>(args: Prisma.SelectSubset<T, VotoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VotoClient<runtime.Types.Result.GetResult<Prisma.$VotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VotoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VotoClient<runtime.Types.Result.GetResult<Prisma.$VotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VotoFindFirstArgs>(args?: Prisma.SelectSubset<T, VotoFindFirstArgs<ExtArgs>>): Prisma.Prisma__VotoClient<runtime.Types.Result.GetResult<Prisma.$VotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VotoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VotoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VotoClient<runtime.Types.Result.GetResult<Prisma.$VotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VotoFindManyArgs>(args?: Prisma.SelectSubset<T, VotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VotoCreateArgs>(args: Prisma.SelectSubset<T, VotoCreateArgs<ExtArgs>>): Prisma.Prisma__VotoClient<runtime.Types.Result.GetResult<Prisma.$VotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VotoCreateManyArgs>(args?: Prisma.SelectSubset<T, VotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VotoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VotoDeleteArgs>(args: Prisma.SelectSubset<T, VotoDeleteArgs<ExtArgs>>): Prisma.Prisma__VotoClient<runtime.Types.Result.GetResult<Prisma.$VotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VotoUpdateArgs>(args: Prisma.SelectSubset<T, VotoUpdateArgs<ExtArgs>>): Prisma.Prisma__VotoClient<runtime.Types.Result.GetResult<Prisma.$VotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VotoDeleteManyArgs>(args?: Prisma.SelectSubset<T, VotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VotoUpdateManyArgs>(args: Prisma.SelectSubset<T, VotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VotoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VotoUpsertArgs>(args: Prisma.SelectSubset<T, VotoUpsertArgs<ExtArgs>>): Prisma.Prisma__VotoClient<runtime.Types.Result.GetResult<Prisma.$VotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VotoCountArgs>(args?: Prisma.Subset<T, VotoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VotoCountAggregateOutputType> : number>;
    aggregate<T extends VotoAggregateArgs>(args: Prisma.Subset<T, VotoAggregateArgs>): Prisma.PrismaPromise<GetVotoAggregateType<T>>;
    groupBy<T extends VotoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VotoGroupByArgs['orderBy'];
    } : {
        orderBy?: VotoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VotoFieldRefs;
}
export interface Prisma__VotoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    edicao<T extends Prisma.EdicaoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EdicaoDefaultArgs<ExtArgs>>): Prisma.Prisma__EdicaoClient<runtime.Types.Result.GetResult<Prisma.$EdicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    finalista<T extends Prisma.FinalistaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FinalistaDefaultArgs<ExtArgs>>): Prisma.Prisma__FinalistaClient<runtime.Types.Result.GetResult<Prisma.$FinalistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    pessoa<T extends Prisma.Voto$pessoaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Voto$pessoaArgs<ExtArgs>>): Prisma.Prisma__PessoaClient<runtime.Types.Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    votanteLider<T extends Prisma.Voto$votanteLiderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Voto$votanteLiderArgs<ExtArgs>>): Prisma.Prisma__LiderClient<runtime.Types.Result.GetResult<Prisma.$LiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    votanteInscricao<T extends Prisma.Voto$votanteInscricaoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Voto$votanteInscricaoArgs<ExtArgs>>): Prisma.Prisma__InscricaoStartupClient<runtime.Types.Result.GetResult<Prisma.$InscricaoStartupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VotoFieldRefs {
    readonly id: Prisma.FieldRef<"Voto", 'String'>;
    readonly edicaoId: Prisma.FieldRef<"Voto", 'String'>;
    readonly finalistaId: Prisma.FieldRef<"Voto", 'String'>;
    readonly votanteNome: Prisma.FieldRef<"Voto", 'String'>;
    readonly cpf: Prisma.FieldRef<"Voto", 'String'>;
    readonly pessoaId: Prisma.FieldRef<"Voto", 'String'>;
    readonly votanteLiderId: Prisma.FieldRef<"Voto", 'String'>;
    readonly votanteInscricaoId: Prisma.FieldRef<"Voto", 'String'>;
    readonly lgpdAceitoEm: Prisma.FieldRef<"Voto", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Voto", 'DateTime'>;
}
export type VotoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VotoSelect<ExtArgs> | null;
    omit?: Prisma.VotoOmit<ExtArgs> | null;
    include?: Prisma.VotoInclude<ExtArgs> | null;
    where: Prisma.VotoWhereUniqueInput;
};
export type VotoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VotoSelect<ExtArgs> | null;
    omit?: Prisma.VotoOmit<ExtArgs> | null;
    include?: Prisma.VotoInclude<ExtArgs> | null;
    where: Prisma.VotoWhereUniqueInput;
};
export type VotoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VotoSelect<ExtArgs> | null;
    omit?: Prisma.VotoOmit<ExtArgs> | null;
    include?: Prisma.VotoInclude<ExtArgs> | null;
    where?: Prisma.VotoWhereInput;
    orderBy?: Prisma.VotoOrderByWithRelationInput | Prisma.VotoOrderByWithRelationInput[];
    cursor?: Prisma.VotoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VotoScalarFieldEnum | Prisma.VotoScalarFieldEnum[];
};
export type VotoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VotoSelect<ExtArgs> | null;
    omit?: Prisma.VotoOmit<ExtArgs> | null;
    include?: Prisma.VotoInclude<ExtArgs> | null;
    where?: Prisma.VotoWhereInput;
    orderBy?: Prisma.VotoOrderByWithRelationInput | Prisma.VotoOrderByWithRelationInput[];
    cursor?: Prisma.VotoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VotoScalarFieldEnum | Prisma.VotoScalarFieldEnum[];
};
export type VotoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VotoSelect<ExtArgs> | null;
    omit?: Prisma.VotoOmit<ExtArgs> | null;
    include?: Prisma.VotoInclude<ExtArgs> | null;
    where?: Prisma.VotoWhereInput;
    orderBy?: Prisma.VotoOrderByWithRelationInput | Prisma.VotoOrderByWithRelationInput[];
    cursor?: Prisma.VotoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VotoScalarFieldEnum | Prisma.VotoScalarFieldEnum[];
};
export type VotoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VotoSelect<ExtArgs> | null;
    omit?: Prisma.VotoOmit<ExtArgs> | null;
    include?: Prisma.VotoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VotoCreateInput, Prisma.VotoUncheckedCreateInput>;
};
export type VotoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VotoCreateManyInput | Prisma.VotoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VotoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VotoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VotoOmit<ExtArgs> | null;
    data: Prisma.VotoCreateManyInput | Prisma.VotoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.VotoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type VotoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VotoSelect<ExtArgs> | null;
    omit?: Prisma.VotoOmit<ExtArgs> | null;
    include?: Prisma.VotoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VotoUpdateInput, Prisma.VotoUncheckedUpdateInput>;
    where: Prisma.VotoWhereUniqueInput;
};
export type VotoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VotoUpdateManyMutationInput, Prisma.VotoUncheckedUpdateManyInput>;
    where?: Prisma.VotoWhereInput;
    limit?: number;
};
export type VotoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VotoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VotoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VotoUpdateManyMutationInput, Prisma.VotoUncheckedUpdateManyInput>;
    where?: Prisma.VotoWhereInput;
    limit?: number;
    include?: Prisma.VotoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type VotoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VotoSelect<ExtArgs> | null;
    omit?: Prisma.VotoOmit<ExtArgs> | null;
    include?: Prisma.VotoInclude<ExtArgs> | null;
    where: Prisma.VotoWhereUniqueInput;
    create: Prisma.XOR<Prisma.VotoCreateInput, Prisma.VotoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VotoUpdateInput, Prisma.VotoUncheckedUpdateInput>;
};
export type VotoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VotoSelect<ExtArgs> | null;
    omit?: Prisma.VotoOmit<ExtArgs> | null;
    include?: Prisma.VotoInclude<ExtArgs> | null;
    where: Prisma.VotoWhereUniqueInput;
};
export type VotoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VotoWhereInput;
    limit?: number;
};
export type Voto$pessoaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PessoaSelect<ExtArgs> | null;
    omit?: Prisma.PessoaOmit<ExtArgs> | null;
    include?: Prisma.PessoaInclude<ExtArgs> | null;
    where?: Prisma.PessoaWhereInput;
};
export type Voto$votanteLiderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LiderSelect<ExtArgs> | null;
    omit?: Prisma.LiderOmit<ExtArgs> | null;
    include?: Prisma.LiderInclude<ExtArgs> | null;
    where?: Prisma.LiderWhereInput;
};
export type Voto$votanteInscricaoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InscricaoStartupSelect<ExtArgs> | null;
    omit?: Prisma.InscricaoStartupOmit<ExtArgs> | null;
    include?: Prisma.InscricaoStartupInclude<ExtArgs> | null;
    where?: Prisma.InscricaoStartupWhereInput;
};
export type VotoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VotoSelect<ExtArgs> | null;
    omit?: Prisma.VotoOmit<ExtArgs> | null;
    include?: Prisma.VotoInclude<ExtArgs> | null;
};
