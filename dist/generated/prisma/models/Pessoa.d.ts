import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type PessoaModel = runtime.Types.Result.DefaultSelection<Prisma.$PessoaPayload>;
export type AggregatePessoa = {
    _count: PessoaCountAggregateOutputType | null;
    _min: PessoaMinAggregateOutputType | null;
    _max: PessoaMaxAggregateOutputType | null;
};
export type PessoaMinAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    cpf: string | null;
    nome: string | null;
    email: string | null;
    telefone: string | null;
    senhaHash: string | null;
    lgpdAceitoEm: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PessoaMaxAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    cpf: string | null;
    nome: string | null;
    email: string | null;
    telefone: string | null;
    senhaHash: string | null;
    lgpdAceitoEm: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PessoaCountAggregateOutputType = {
    id: number;
    edicaoId: number;
    cpf: number;
    nome: number;
    email: number;
    telefone: number;
    senhaHash: number;
    lgpdAceitoEm: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PessoaMinAggregateInputType = {
    id?: true;
    edicaoId?: true;
    cpf?: true;
    nome?: true;
    email?: true;
    telefone?: true;
    senhaHash?: true;
    lgpdAceitoEm?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PessoaMaxAggregateInputType = {
    id?: true;
    edicaoId?: true;
    cpf?: true;
    nome?: true;
    email?: true;
    telefone?: true;
    senhaHash?: true;
    lgpdAceitoEm?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PessoaCountAggregateInputType = {
    id?: true;
    edicaoId?: true;
    cpf?: true;
    nome?: true;
    email?: true;
    telefone?: true;
    senhaHash?: true;
    lgpdAceitoEm?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PessoaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PessoaWhereInput;
    orderBy?: Prisma.PessoaOrderByWithRelationInput | Prisma.PessoaOrderByWithRelationInput[];
    cursor?: Prisma.PessoaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PessoaCountAggregateInputType;
    _min?: PessoaMinAggregateInputType;
    _max?: PessoaMaxAggregateInputType;
};
export type GetPessoaAggregateType<T extends PessoaAggregateArgs> = {
    [P in keyof T & keyof AggregatePessoa]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePessoa[P]> : Prisma.GetScalarType<T[P], AggregatePessoa[P]>;
};
export type PessoaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PessoaWhereInput;
    orderBy?: Prisma.PessoaOrderByWithAggregationInput | Prisma.PessoaOrderByWithAggregationInput[];
    by: Prisma.PessoaScalarFieldEnum[] | Prisma.PessoaScalarFieldEnum;
    having?: Prisma.PessoaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PessoaCountAggregateInputType | true;
    _min?: PessoaMinAggregateInputType;
    _max?: PessoaMaxAggregateInputType;
};
export type PessoaGroupByOutputType = {
    id: string;
    edicaoId: string;
    cpf: string;
    nome: string;
    email: string;
    telefone: string | null;
    senhaHash: string;
    lgpdAceitoEm: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PessoaCountAggregateOutputType | null;
    _min: PessoaMinAggregateOutputType | null;
    _max: PessoaMaxAggregateOutputType | null;
};
export type GetPessoaGroupByPayload<T extends PessoaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PessoaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PessoaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PessoaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PessoaGroupByOutputType[P]>;
}>>;
export type PessoaWhereInput = {
    AND?: Prisma.PessoaWhereInput | Prisma.PessoaWhereInput[];
    OR?: Prisma.PessoaWhereInput[];
    NOT?: Prisma.PessoaWhereInput | Prisma.PessoaWhereInput[];
    id?: Prisma.StringFilter<"Pessoa"> | string;
    edicaoId?: Prisma.StringFilter<"Pessoa"> | string;
    cpf?: Prisma.StringFilter<"Pessoa"> | string;
    nome?: Prisma.StringFilter<"Pessoa"> | string;
    email?: Prisma.StringFilter<"Pessoa"> | string;
    telefone?: Prisma.StringNullableFilter<"Pessoa"> | string | null;
    senhaHash?: Prisma.StringFilter<"Pessoa"> | string;
    lgpdAceitoEm?: Prisma.DateTimeNullableFilter<"Pessoa"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Pessoa"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Pessoa"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
    lideres?: Prisma.LiderListRelationFilter;
    inscricoesStartup?: Prisma.InscricaoStartupListRelationFilter;
    votos?: Prisma.VotoListRelationFilter;
};
export type PessoaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefone?: Prisma.SortOrderInput | Prisma.SortOrder;
    senhaHash?: Prisma.SortOrder;
    lgpdAceitoEm?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    edicao?: Prisma.EdicaoOrderByWithRelationInput;
    lideres?: Prisma.LiderOrderByRelationAggregateInput;
    inscricoesStartup?: Prisma.InscricaoStartupOrderByRelationAggregateInput;
    votos?: Prisma.VotoOrderByRelationAggregateInput;
};
export type PessoaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    edicaoId_cpf?: Prisma.PessoaEdicaoIdCpfCompoundUniqueInput;
    edicaoId_email?: Prisma.PessoaEdicaoIdEmailCompoundUniqueInput;
    AND?: Prisma.PessoaWhereInput | Prisma.PessoaWhereInput[];
    OR?: Prisma.PessoaWhereInput[];
    NOT?: Prisma.PessoaWhereInput | Prisma.PessoaWhereInput[];
    edicaoId?: Prisma.StringFilter<"Pessoa"> | string;
    cpf?: Prisma.StringFilter<"Pessoa"> | string;
    nome?: Prisma.StringFilter<"Pessoa"> | string;
    email?: Prisma.StringFilter<"Pessoa"> | string;
    telefone?: Prisma.StringNullableFilter<"Pessoa"> | string | null;
    senhaHash?: Prisma.StringFilter<"Pessoa"> | string;
    lgpdAceitoEm?: Prisma.DateTimeNullableFilter<"Pessoa"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Pessoa"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Pessoa"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
    lideres?: Prisma.LiderListRelationFilter;
    inscricoesStartup?: Prisma.InscricaoStartupListRelationFilter;
    votos?: Prisma.VotoListRelationFilter;
}, "id" | "edicaoId_cpf" | "edicaoId_email">;
export type PessoaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefone?: Prisma.SortOrderInput | Prisma.SortOrder;
    senhaHash?: Prisma.SortOrder;
    lgpdAceitoEm?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.PessoaCountOrderByAggregateInput;
    _max?: Prisma.PessoaMaxOrderByAggregateInput;
    _min?: Prisma.PessoaMinOrderByAggregateInput;
};
export type PessoaScalarWhereWithAggregatesInput = {
    AND?: Prisma.PessoaScalarWhereWithAggregatesInput | Prisma.PessoaScalarWhereWithAggregatesInput[];
    OR?: Prisma.PessoaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PessoaScalarWhereWithAggregatesInput | Prisma.PessoaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Pessoa"> | string;
    edicaoId?: Prisma.StringWithAggregatesFilter<"Pessoa"> | string;
    cpf?: Prisma.StringWithAggregatesFilter<"Pessoa"> | string;
    nome?: Prisma.StringWithAggregatesFilter<"Pessoa"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Pessoa"> | string;
    telefone?: Prisma.StringNullableWithAggregatesFilter<"Pessoa"> | string | null;
    senhaHash?: Prisma.StringWithAggregatesFilter<"Pessoa"> | string;
    lgpdAceitoEm?: Prisma.DateTimeNullableWithAggregatesFilter<"Pessoa"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Pessoa"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Pessoa"> | Date | string;
};
export type PessoaCreateInput = {
    id?: string;
    cpf: string;
    nome: string;
    email: string;
    telefone?: string | null;
    senhaHash: string;
    lgpdAceitoEm?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutPessoasInput;
    lideres?: Prisma.LiderCreateNestedManyWithoutPessoaInput;
    inscricoesStartup?: Prisma.InscricaoStartupCreateNestedManyWithoutPessoaInput;
    votos?: Prisma.VotoCreateNestedManyWithoutPessoaInput;
};
export type PessoaUncheckedCreateInput = {
    id?: string;
    edicaoId: string;
    cpf: string;
    nome: string;
    email: string;
    telefone?: string | null;
    senhaHash: string;
    lgpdAceitoEm?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lideres?: Prisma.LiderUncheckedCreateNestedManyWithoutPessoaInput;
    inscricoesStartup?: Prisma.InscricaoStartupUncheckedCreateNestedManyWithoutPessoaInput;
    votos?: Prisma.VotoUncheckedCreateNestedManyWithoutPessoaInput;
};
export type PessoaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    lgpdAceitoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutPessoasNestedInput;
    lideres?: Prisma.LiderUpdateManyWithoutPessoaNestedInput;
    inscricoesStartup?: Prisma.InscricaoStartupUpdateManyWithoutPessoaNestedInput;
    votos?: Prisma.VotoUpdateManyWithoutPessoaNestedInput;
};
export type PessoaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    lgpdAceitoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lideres?: Prisma.LiderUncheckedUpdateManyWithoutPessoaNestedInput;
    inscricoesStartup?: Prisma.InscricaoStartupUncheckedUpdateManyWithoutPessoaNestedInput;
    votos?: Prisma.VotoUncheckedUpdateManyWithoutPessoaNestedInput;
};
export type PessoaCreateManyInput = {
    id?: string;
    edicaoId: string;
    cpf: string;
    nome: string;
    email: string;
    telefone?: string | null;
    senhaHash: string;
    lgpdAceitoEm?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PessoaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    lgpdAceitoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PessoaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    lgpdAceitoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PessoaListRelationFilter = {
    every?: Prisma.PessoaWhereInput;
    some?: Prisma.PessoaWhereInput;
    none?: Prisma.PessoaWhereInput;
};
export type PessoaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PessoaEdicaoIdCpfCompoundUniqueInput = {
    edicaoId: string;
    cpf: string;
};
export type PessoaEdicaoIdEmailCompoundUniqueInput = {
    edicaoId: string;
    email: string;
};
export type PessoaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    senhaHash?: Prisma.SortOrder;
    lgpdAceitoEm?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PessoaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    senhaHash?: Prisma.SortOrder;
    lgpdAceitoEm?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PessoaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    cpf?: Prisma.SortOrder;
    nome?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefone?: Prisma.SortOrder;
    senhaHash?: Prisma.SortOrder;
    lgpdAceitoEm?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type PessoaScalarRelationFilter = {
    is?: Prisma.PessoaWhereInput;
    isNot?: Prisma.PessoaWhereInput;
};
export type PessoaNullableScalarRelationFilter = {
    is?: Prisma.PessoaWhereInput | null;
    isNot?: Prisma.PessoaWhereInput | null;
};
export type PessoaCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.PessoaCreateWithoutEdicaoInput, Prisma.PessoaUncheckedCreateWithoutEdicaoInput> | Prisma.PessoaCreateWithoutEdicaoInput[] | Prisma.PessoaUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.PessoaCreateOrConnectWithoutEdicaoInput | Prisma.PessoaCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.PessoaCreateManyEdicaoInputEnvelope;
    connect?: Prisma.PessoaWhereUniqueInput | Prisma.PessoaWhereUniqueInput[];
};
export type PessoaUncheckedCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.PessoaCreateWithoutEdicaoInput, Prisma.PessoaUncheckedCreateWithoutEdicaoInput> | Prisma.PessoaCreateWithoutEdicaoInput[] | Prisma.PessoaUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.PessoaCreateOrConnectWithoutEdicaoInput | Prisma.PessoaCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.PessoaCreateManyEdicaoInputEnvelope;
    connect?: Prisma.PessoaWhereUniqueInput | Prisma.PessoaWhereUniqueInput[];
};
export type PessoaUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.PessoaCreateWithoutEdicaoInput, Prisma.PessoaUncheckedCreateWithoutEdicaoInput> | Prisma.PessoaCreateWithoutEdicaoInput[] | Prisma.PessoaUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.PessoaCreateOrConnectWithoutEdicaoInput | Prisma.PessoaCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.PessoaUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.PessoaUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.PessoaCreateManyEdicaoInputEnvelope;
    set?: Prisma.PessoaWhereUniqueInput | Prisma.PessoaWhereUniqueInput[];
    disconnect?: Prisma.PessoaWhereUniqueInput | Prisma.PessoaWhereUniqueInput[];
    delete?: Prisma.PessoaWhereUniqueInput | Prisma.PessoaWhereUniqueInput[];
    connect?: Prisma.PessoaWhereUniqueInput | Prisma.PessoaWhereUniqueInput[];
    update?: Prisma.PessoaUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.PessoaUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.PessoaUpdateManyWithWhereWithoutEdicaoInput | Prisma.PessoaUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.PessoaScalarWhereInput | Prisma.PessoaScalarWhereInput[];
};
export type PessoaUncheckedUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.PessoaCreateWithoutEdicaoInput, Prisma.PessoaUncheckedCreateWithoutEdicaoInput> | Prisma.PessoaCreateWithoutEdicaoInput[] | Prisma.PessoaUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.PessoaCreateOrConnectWithoutEdicaoInput | Prisma.PessoaCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.PessoaUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.PessoaUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.PessoaCreateManyEdicaoInputEnvelope;
    set?: Prisma.PessoaWhereUniqueInput | Prisma.PessoaWhereUniqueInput[];
    disconnect?: Prisma.PessoaWhereUniqueInput | Prisma.PessoaWhereUniqueInput[];
    delete?: Prisma.PessoaWhereUniqueInput | Prisma.PessoaWhereUniqueInput[];
    connect?: Prisma.PessoaWhereUniqueInput | Prisma.PessoaWhereUniqueInput[];
    update?: Prisma.PessoaUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.PessoaUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.PessoaUpdateManyWithWhereWithoutEdicaoInput | Prisma.PessoaUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.PessoaScalarWhereInput | Prisma.PessoaScalarWhereInput[];
};
export type PessoaCreateNestedOneWithoutLideresInput = {
    create?: Prisma.XOR<Prisma.PessoaCreateWithoutLideresInput, Prisma.PessoaUncheckedCreateWithoutLideresInput>;
    connectOrCreate?: Prisma.PessoaCreateOrConnectWithoutLideresInput;
    connect?: Prisma.PessoaWhereUniqueInput;
};
export type PessoaUpdateOneRequiredWithoutLideresNestedInput = {
    create?: Prisma.XOR<Prisma.PessoaCreateWithoutLideresInput, Prisma.PessoaUncheckedCreateWithoutLideresInput>;
    connectOrCreate?: Prisma.PessoaCreateOrConnectWithoutLideresInput;
    upsert?: Prisma.PessoaUpsertWithoutLideresInput;
    connect?: Prisma.PessoaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PessoaUpdateToOneWithWhereWithoutLideresInput, Prisma.PessoaUpdateWithoutLideresInput>, Prisma.PessoaUncheckedUpdateWithoutLideresInput>;
};
export type PessoaCreateNestedOneWithoutInscricoesStartupInput = {
    create?: Prisma.XOR<Prisma.PessoaCreateWithoutInscricoesStartupInput, Prisma.PessoaUncheckedCreateWithoutInscricoesStartupInput>;
    connectOrCreate?: Prisma.PessoaCreateOrConnectWithoutInscricoesStartupInput;
    connect?: Prisma.PessoaWhereUniqueInput;
};
export type PessoaUpdateOneWithoutInscricoesStartupNestedInput = {
    create?: Prisma.XOR<Prisma.PessoaCreateWithoutInscricoesStartupInput, Prisma.PessoaUncheckedCreateWithoutInscricoesStartupInput>;
    connectOrCreate?: Prisma.PessoaCreateOrConnectWithoutInscricoesStartupInput;
    upsert?: Prisma.PessoaUpsertWithoutInscricoesStartupInput;
    disconnect?: Prisma.PessoaWhereInput | boolean;
    delete?: Prisma.PessoaWhereInput | boolean;
    connect?: Prisma.PessoaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PessoaUpdateToOneWithWhereWithoutInscricoesStartupInput, Prisma.PessoaUpdateWithoutInscricoesStartupInput>, Prisma.PessoaUncheckedUpdateWithoutInscricoesStartupInput>;
};
export type PessoaCreateNestedOneWithoutVotosInput = {
    create?: Prisma.XOR<Prisma.PessoaCreateWithoutVotosInput, Prisma.PessoaUncheckedCreateWithoutVotosInput>;
    connectOrCreate?: Prisma.PessoaCreateOrConnectWithoutVotosInput;
    connect?: Prisma.PessoaWhereUniqueInput;
};
export type PessoaUpdateOneWithoutVotosNestedInput = {
    create?: Prisma.XOR<Prisma.PessoaCreateWithoutVotosInput, Prisma.PessoaUncheckedCreateWithoutVotosInput>;
    connectOrCreate?: Prisma.PessoaCreateOrConnectWithoutVotosInput;
    upsert?: Prisma.PessoaUpsertWithoutVotosInput;
    disconnect?: Prisma.PessoaWhereInput | boolean;
    delete?: Prisma.PessoaWhereInput | boolean;
    connect?: Prisma.PessoaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PessoaUpdateToOneWithWhereWithoutVotosInput, Prisma.PessoaUpdateWithoutVotosInput>, Prisma.PessoaUncheckedUpdateWithoutVotosInput>;
};
export type PessoaCreateWithoutEdicaoInput = {
    id?: string;
    cpf: string;
    nome: string;
    email: string;
    telefone?: string | null;
    senhaHash: string;
    lgpdAceitoEm?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lideres?: Prisma.LiderCreateNestedManyWithoutPessoaInput;
    inscricoesStartup?: Prisma.InscricaoStartupCreateNestedManyWithoutPessoaInput;
    votos?: Prisma.VotoCreateNestedManyWithoutPessoaInput;
};
export type PessoaUncheckedCreateWithoutEdicaoInput = {
    id?: string;
    cpf: string;
    nome: string;
    email: string;
    telefone?: string | null;
    senhaHash: string;
    lgpdAceitoEm?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lideres?: Prisma.LiderUncheckedCreateNestedManyWithoutPessoaInput;
    inscricoesStartup?: Prisma.InscricaoStartupUncheckedCreateNestedManyWithoutPessoaInput;
    votos?: Prisma.VotoUncheckedCreateNestedManyWithoutPessoaInput;
};
export type PessoaCreateOrConnectWithoutEdicaoInput = {
    where: Prisma.PessoaWhereUniqueInput;
    create: Prisma.XOR<Prisma.PessoaCreateWithoutEdicaoInput, Prisma.PessoaUncheckedCreateWithoutEdicaoInput>;
};
export type PessoaCreateManyEdicaoInputEnvelope = {
    data: Prisma.PessoaCreateManyEdicaoInput | Prisma.PessoaCreateManyEdicaoInput[];
    skipDuplicates?: boolean;
};
export type PessoaUpsertWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.PessoaWhereUniqueInput;
    update: Prisma.XOR<Prisma.PessoaUpdateWithoutEdicaoInput, Prisma.PessoaUncheckedUpdateWithoutEdicaoInput>;
    create: Prisma.XOR<Prisma.PessoaCreateWithoutEdicaoInput, Prisma.PessoaUncheckedCreateWithoutEdicaoInput>;
};
export type PessoaUpdateWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.PessoaWhereUniqueInput;
    data: Prisma.XOR<Prisma.PessoaUpdateWithoutEdicaoInput, Prisma.PessoaUncheckedUpdateWithoutEdicaoInput>;
};
export type PessoaUpdateManyWithWhereWithoutEdicaoInput = {
    where: Prisma.PessoaScalarWhereInput;
    data: Prisma.XOR<Prisma.PessoaUpdateManyMutationInput, Prisma.PessoaUncheckedUpdateManyWithoutEdicaoInput>;
};
export type PessoaScalarWhereInput = {
    AND?: Prisma.PessoaScalarWhereInput | Prisma.PessoaScalarWhereInput[];
    OR?: Prisma.PessoaScalarWhereInput[];
    NOT?: Prisma.PessoaScalarWhereInput | Prisma.PessoaScalarWhereInput[];
    id?: Prisma.StringFilter<"Pessoa"> | string;
    edicaoId?: Prisma.StringFilter<"Pessoa"> | string;
    cpf?: Prisma.StringFilter<"Pessoa"> | string;
    nome?: Prisma.StringFilter<"Pessoa"> | string;
    email?: Prisma.StringFilter<"Pessoa"> | string;
    telefone?: Prisma.StringNullableFilter<"Pessoa"> | string | null;
    senhaHash?: Prisma.StringFilter<"Pessoa"> | string;
    lgpdAceitoEm?: Prisma.DateTimeNullableFilter<"Pessoa"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Pessoa"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Pessoa"> | Date | string;
};
export type PessoaCreateWithoutLideresInput = {
    id?: string;
    cpf: string;
    nome: string;
    email: string;
    telefone?: string | null;
    senhaHash: string;
    lgpdAceitoEm?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutPessoasInput;
    inscricoesStartup?: Prisma.InscricaoStartupCreateNestedManyWithoutPessoaInput;
    votos?: Prisma.VotoCreateNestedManyWithoutPessoaInput;
};
export type PessoaUncheckedCreateWithoutLideresInput = {
    id?: string;
    edicaoId: string;
    cpf: string;
    nome: string;
    email: string;
    telefone?: string | null;
    senhaHash: string;
    lgpdAceitoEm?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    inscricoesStartup?: Prisma.InscricaoStartupUncheckedCreateNestedManyWithoutPessoaInput;
    votos?: Prisma.VotoUncheckedCreateNestedManyWithoutPessoaInput;
};
export type PessoaCreateOrConnectWithoutLideresInput = {
    where: Prisma.PessoaWhereUniqueInput;
    create: Prisma.XOR<Prisma.PessoaCreateWithoutLideresInput, Prisma.PessoaUncheckedCreateWithoutLideresInput>;
};
export type PessoaUpsertWithoutLideresInput = {
    update: Prisma.XOR<Prisma.PessoaUpdateWithoutLideresInput, Prisma.PessoaUncheckedUpdateWithoutLideresInput>;
    create: Prisma.XOR<Prisma.PessoaCreateWithoutLideresInput, Prisma.PessoaUncheckedCreateWithoutLideresInput>;
    where?: Prisma.PessoaWhereInput;
};
export type PessoaUpdateToOneWithWhereWithoutLideresInput = {
    where?: Prisma.PessoaWhereInput;
    data: Prisma.XOR<Prisma.PessoaUpdateWithoutLideresInput, Prisma.PessoaUncheckedUpdateWithoutLideresInput>;
};
export type PessoaUpdateWithoutLideresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    lgpdAceitoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutPessoasNestedInput;
    inscricoesStartup?: Prisma.InscricaoStartupUpdateManyWithoutPessoaNestedInput;
    votos?: Prisma.VotoUpdateManyWithoutPessoaNestedInput;
};
export type PessoaUncheckedUpdateWithoutLideresInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    lgpdAceitoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    inscricoesStartup?: Prisma.InscricaoStartupUncheckedUpdateManyWithoutPessoaNestedInput;
    votos?: Prisma.VotoUncheckedUpdateManyWithoutPessoaNestedInput;
};
export type PessoaCreateWithoutInscricoesStartupInput = {
    id?: string;
    cpf: string;
    nome: string;
    email: string;
    telefone?: string | null;
    senhaHash: string;
    lgpdAceitoEm?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutPessoasInput;
    lideres?: Prisma.LiderCreateNestedManyWithoutPessoaInput;
    votos?: Prisma.VotoCreateNestedManyWithoutPessoaInput;
};
export type PessoaUncheckedCreateWithoutInscricoesStartupInput = {
    id?: string;
    edicaoId: string;
    cpf: string;
    nome: string;
    email: string;
    telefone?: string | null;
    senhaHash: string;
    lgpdAceitoEm?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lideres?: Prisma.LiderUncheckedCreateNestedManyWithoutPessoaInput;
    votos?: Prisma.VotoUncheckedCreateNestedManyWithoutPessoaInput;
};
export type PessoaCreateOrConnectWithoutInscricoesStartupInput = {
    where: Prisma.PessoaWhereUniqueInput;
    create: Prisma.XOR<Prisma.PessoaCreateWithoutInscricoesStartupInput, Prisma.PessoaUncheckedCreateWithoutInscricoesStartupInput>;
};
export type PessoaUpsertWithoutInscricoesStartupInput = {
    update: Prisma.XOR<Prisma.PessoaUpdateWithoutInscricoesStartupInput, Prisma.PessoaUncheckedUpdateWithoutInscricoesStartupInput>;
    create: Prisma.XOR<Prisma.PessoaCreateWithoutInscricoesStartupInput, Prisma.PessoaUncheckedCreateWithoutInscricoesStartupInput>;
    where?: Prisma.PessoaWhereInput;
};
export type PessoaUpdateToOneWithWhereWithoutInscricoesStartupInput = {
    where?: Prisma.PessoaWhereInput;
    data: Prisma.XOR<Prisma.PessoaUpdateWithoutInscricoesStartupInput, Prisma.PessoaUncheckedUpdateWithoutInscricoesStartupInput>;
};
export type PessoaUpdateWithoutInscricoesStartupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    lgpdAceitoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutPessoasNestedInput;
    lideres?: Prisma.LiderUpdateManyWithoutPessoaNestedInput;
    votos?: Prisma.VotoUpdateManyWithoutPessoaNestedInput;
};
export type PessoaUncheckedUpdateWithoutInscricoesStartupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    lgpdAceitoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lideres?: Prisma.LiderUncheckedUpdateManyWithoutPessoaNestedInput;
    votos?: Prisma.VotoUncheckedUpdateManyWithoutPessoaNestedInput;
};
export type PessoaCreateWithoutVotosInput = {
    id?: string;
    cpf: string;
    nome: string;
    email: string;
    telefone?: string | null;
    senhaHash: string;
    lgpdAceitoEm?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutPessoasInput;
    lideres?: Prisma.LiderCreateNestedManyWithoutPessoaInput;
    inscricoesStartup?: Prisma.InscricaoStartupCreateNestedManyWithoutPessoaInput;
};
export type PessoaUncheckedCreateWithoutVotosInput = {
    id?: string;
    edicaoId: string;
    cpf: string;
    nome: string;
    email: string;
    telefone?: string | null;
    senhaHash: string;
    lgpdAceitoEm?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    lideres?: Prisma.LiderUncheckedCreateNestedManyWithoutPessoaInput;
    inscricoesStartup?: Prisma.InscricaoStartupUncheckedCreateNestedManyWithoutPessoaInput;
};
export type PessoaCreateOrConnectWithoutVotosInput = {
    where: Prisma.PessoaWhereUniqueInput;
    create: Prisma.XOR<Prisma.PessoaCreateWithoutVotosInput, Prisma.PessoaUncheckedCreateWithoutVotosInput>;
};
export type PessoaUpsertWithoutVotosInput = {
    update: Prisma.XOR<Prisma.PessoaUpdateWithoutVotosInput, Prisma.PessoaUncheckedUpdateWithoutVotosInput>;
    create: Prisma.XOR<Prisma.PessoaCreateWithoutVotosInput, Prisma.PessoaUncheckedCreateWithoutVotosInput>;
    where?: Prisma.PessoaWhereInput;
};
export type PessoaUpdateToOneWithWhereWithoutVotosInput = {
    where?: Prisma.PessoaWhereInput;
    data: Prisma.XOR<Prisma.PessoaUpdateWithoutVotosInput, Prisma.PessoaUncheckedUpdateWithoutVotosInput>;
};
export type PessoaUpdateWithoutVotosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    lgpdAceitoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutPessoasNestedInput;
    lideres?: Prisma.LiderUpdateManyWithoutPessoaNestedInput;
    inscricoesStartup?: Prisma.InscricaoStartupUpdateManyWithoutPessoaNestedInput;
};
export type PessoaUncheckedUpdateWithoutVotosInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    lgpdAceitoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lideres?: Prisma.LiderUncheckedUpdateManyWithoutPessoaNestedInput;
    inscricoesStartup?: Prisma.InscricaoStartupUncheckedUpdateManyWithoutPessoaNestedInput;
};
export type PessoaCreateManyEdicaoInput = {
    id?: string;
    cpf: string;
    nome: string;
    email: string;
    telefone?: string | null;
    senhaHash: string;
    lgpdAceitoEm?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type PessoaUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    lgpdAceitoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lideres?: Prisma.LiderUpdateManyWithoutPessoaNestedInput;
    inscricoesStartup?: Prisma.InscricaoStartupUpdateManyWithoutPessoaNestedInput;
    votos?: Prisma.VotoUpdateManyWithoutPessoaNestedInput;
};
export type PessoaUncheckedUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    lgpdAceitoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lideres?: Prisma.LiderUncheckedUpdateManyWithoutPessoaNestedInput;
    inscricoesStartup?: Prisma.InscricaoStartupUncheckedUpdateManyWithoutPessoaNestedInput;
    votos?: Prisma.VotoUncheckedUpdateManyWithoutPessoaNestedInput;
};
export type PessoaUncheckedUpdateManyWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cpf?: Prisma.StringFieldUpdateOperationsInput | string;
    nome?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    senhaHash?: Prisma.StringFieldUpdateOperationsInput | string;
    lgpdAceitoEm?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PessoaCountOutputType = {
    lideres: number;
    inscricoesStartup: number;
    votos: number;
};
export type PessoaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lideres?: boolean | PessoaCountOutputTypeCountLideresArgs;
    inscricoesStartup?: boolean | PessoaCountOutputTypeCountInscricoesStartupArgs;
    votos?: boolean | PessoaCountOutputTypeCountVotosArgs;
};
export type PessoaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PessoaCountOutputTypeSelect<ExtArgs> | null;
};
export type PessoaCountOutputTypeCountLideresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LiderWhereInput;
};
export type PessoaCountOutputTypeCountInscricoesStartupArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InscricaoStartupWhereInput;
};
export type PessoaCountOutputTypeCountVotosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VotoWhereInput;
};
export type PessoaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    cpf?: boolean;
    nome?: boolean;
    email?: boolean;
    telefone?: boolean;
    senhaHash?: boolean;
    lgpdAceitoEm?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    lideres?: boolean | Prisma.Pessoa$lideresArgs<ExtArgs>;
    inscricoesStartup?: boolean | Prisma.Pessoa$inscricoesStartupArgs<ExtArgs>;
    votos?: boolean | Prisma.Pessoa$votosArgs<ExtArgs>;
    _count?: boolean | Prisma.PessoaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pessoa"]>;
export type PessoaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    cpf?: boolean;
    nome?: boolean;
    email?: boolean;
    telefone?: boolean;
    senhaHash?: boolean;
    lgpdAceitoEm?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pessoa"]>;
export type PessoaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    cpf?: boolean;
    nome?: boolean;
    email?: boolean;
    telefone?: boolean;
    senhaHash?: boolean;
    lgpdAceitoEm?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pessoa"]>;
export type PessoaSelectScalar = {
    id?: boolean;
    edicaoId?: boolean;
    cpf?: boolean;
    nome?: boolean;
    email?: boolean;
    telefone?: boolean;
    senhaHash?: boolean;
    lgpdAceitoEm?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type PessoaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "edicaoId" | "cpf" | "nome" | "email" | "telefone" | "senhaHash" | "lgpdAceitoEm" | "createdAt" | "updatedAt", ExtArgs["result"]["pessoa"]>;
export type PessoaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    lideres?: boolean | Prisma.Pessoa$lideresArgs<ExtArgs>;
    inscricoesStartup?: boolean | Prisma.Pessoa$inscricoesStartupArgs<ExtArgs>;
    votos?: boolean | Prisma.Pessoa$votosArgs<ExtArgs>;
    _count?: boolean | Prisma.PessoaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PessoaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
};
export type PessoaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
};
export type $PessoaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Pessoa";
    objects: {
        edicao: Prisma.$EdicaoPayload<ExtArgs>;
        lideres: Prisma.$LiderPayload<ExtArgs>[];
        inscricoesStartup: Prisma.$InscricaoStartupPayload<ExtArgs>[];
        votos: Prisma.$VotoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        edicaoId: string;
        cpf: string;
        nome: string;
        email: string;
        telefone: string | null;
        senhaHash: string;
        lgpdAceitoEm: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["pessoa"]>;
    composites: {};
};
export type PessoaGetPayload<S extends boolean | null | undefined | PessoaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PessoaPayload, S>;
export type PessoaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PessoaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PessoaCountAggregateInputType | true;
};
export interface PessoaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Pessoa'];
        meta: {
            name: 'Pessoa';
        };
    };
    findUnique<T extends PessoaFindUniqueArgs>(args: Prisma.SelectSubset<T, PessoaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PessoaClient<runtime.Types.Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PessoaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PessoaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PessoaClient<runtime.Types.Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PessoaFindFirstArgs>(args?: Prisma.SelectSubset<T, PessoaFindFirstArgs<ExtArgs>>): Prisma.Prisma__PessoaClient<runtime.Types.Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PessoaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PessoaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PessoaClient<runtime.Types.Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PessoaFindManyArgs>(args?: Prisma.SelectSubset<T, PessoaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PessoaCreateArgs>(args: Prisma.SelectSubset<T, PessoaCreateArgs<ExtArgs>>): Prisma.Prisma__PessoaClient<runtime.Types.Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PessoaCreateManyArgs>(args?: Prisma.SelectSubset<T, PessoaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PessoaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PessoaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PessoaDeleteArgs>(args: Prisma.SelectSubset<T, PessoaDeleteArgs<ExtArgs>>): Prisma.Prisma__PessoaClient<runtime.Types.Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PessoaUpdateArgs>(args: Prisma.SelectSubset<T, PessoaUpdateArgs<ExtArgs>>): Prisma.Prisma__PessoaClient<runtime.Types.Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PessoaDeleteManyArgs>(args?: Prisma.SelectSubset<T, PessoaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PessoaUpdateManyArgs>(args: Prisma.SelectSubset<T, PessoaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PessoaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PessoaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PessoaUpsertArgs>(args: Prisma.SelectSubset<T, PessoaUpsertArgs<ExtArgs>>): Prisma.Prisma__PessoaClient<runtime.Types.Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PessoaCountArgs>(args?: Prisma.Subset<T, PessoaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PessoaCountAggregateOutputType> : number>;
    aggregate<T extends PessoaAggregateArgs>(args: Prisma.Subset<T, PessoaAggregateArgs>): Prisma.PrismaPromise<GetPessoaAggregateType<T>>;
    groupBy<T extends PessoaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PessoaGroupByArgs['orderBy'];
    } : {
        orderBy?: PessoaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PessoaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPessoaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PessoaFieldRefs;
}
export interface Prisma__PessoaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    edicao<T extends Prisma.EdicaoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EdicaoDefaultArgs<ExtArgs>>): Prisma.Prisma__EdicaoClient<runtime.Types.Result.GetResult<Prisma.$EdicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    lideres<T extends Prisma.Pessoa$lideresArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pessoa$lideresArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LiderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    inscricoesStartup<T extends Prisma.Pessoa$inscricoesStartupArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pessoa$inscricoesStartupArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InscricaoStartupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    votos<T extends Prisma.Pessoa$votosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pessoa$votosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PessoaFieldRefs {
    readonly id: Prisma.FieldRef<"Pessoa", 'String'>;
    readonly edicaoId: Prisma.FieldRef<"Pessoa", 'String'>;
    readonly cpf: Prisma.FieldRef<"Pessoa", 'String'>;
    readonly nome: Prisma.FieldRef<"Pessoa", 'String'>;
    readonly email: Prisma.FieldRef<"Pessoa", 'String'>;
    readonly telefone: Prisma.FieldRef<"Pessoa", 'String'>;
    readonly senhaHash: Prisma.FieldRef<"Pessoa", 'String'>;
    readonly lgpdAceitoEm: Prisma.FieldRef<"Pessoa", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Pessoa", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Pessoa", 'DateTime'>;
}
export type PessoaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PessoaSelect<ExtArgs> | null;
    omit?: Prisma.PessoaOmit<ExtArgs> | null;
    include?: Prisma.PessoaInclude<ExtArgs> | null;
    where: Prisma.PessoaWhereUniqueInput;
};
export type PessoaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PessoaSelect<ExtArgs> | null;
    omit?: Prisma.PessoaOmit<ExtArgs> | null;
    include?: Prisma.PessoaInclude<ExtArgs> | null;
    where: Prisma.PessoaWhereUniqueInput;
};
export type PessoaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PessoaSelect<ExtArgs> | null;
    omit?: Prisma.PessoaOmit<ExtArgs> | null;
    include?: Prisma.PessoaInclude<ExtArgs> | null;
    where?: Prisma.PessoaWhereInput;
    orderBy?: Prisma.PessoaOrderByWithRelationInput | Prisma.PessoaOrderByWithRelationInput[];
    cursor?: Prisma.PessoaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PessoaScalarFieldEnum | Prisma.PessoaScalarFieldEnum[];
};
export type PessoaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PessoaSelect<ExtArgs> | null;
    omit?: Prisma.PessoaOmit<ExtArgs> | null;
    include?: Prisma.PessoaInclude<ExtArgs> | null;
    where?: Prisma.PessoaWhereInput;
    orderBy?: Prisma.PessoaOrderByWithRelationInput | Prisma.PessoaOrderByWithRelationInput[];
    cursor?: Prisma.PessoaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PessoaScalarFieldEnum | Prisma.PessoaScalarFieldEnum[];
};
export type PessoaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PessoaSelect<ExtArgs> | null;
    omit?: Prisma.PessoaOmit<ExtArgs> | null;
    include?: Prisma.PessoaInclude<ExtArgs> | null;
    where?: Prisma.PessoaWhereInput;
    orderBy?: Prisma.PessoaOrderByWithRelationInput | Prisma.PessoaOrderByWithRelationInput[];
    cursor?: Prisma.PessoaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PessoaScalarFieldEnum | Prisma.PessoaScalarFieldEnum[];
};
export type PessoaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PessoaSelect<ExtArgs> | null;
    omit?: Prisma.PessoaOmit<ExtArgs> | null;
    include?: Prisma.PessoaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PessoaCreateInput, Prisma.PessoaUncheckedCreateInput>;
};
export type PessoaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PessoaCreateManyInput | Prisma.PessoaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PessoaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PessoaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PessoaOmit<ExtArgs> | null;
    data: Prisma.PessoaCreateManyInput | Prisma.PessoaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PessoaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PessoaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PessoaSelect<ExtArgs> | null;
    omit?: Prisma.PessoaOmit<ExtArgs> | null;
    include?: Prisma.PessoaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PessoaUpdateInput, Prisma.PessoaUncheckedUpdateInput>;
    where: Prisma.PessoaWhereUniqueInput;
};
export type PessoaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PessoaUpdateManyMutationInput, Prisma.PessoaUncheckedUpdateManyInput>;
    where?: Prisma.PessoaWhereInput;
    limit?: number;
};
export type PessoaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PessoaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PessoaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PessoaUpdateManyMutationInput, Prisma.PessoaUncheckedUpdateManyInput>;
    where?: Prisma.PessoaWhereInput;
    limit?: number;
    include?: Prisma.PessoaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PessoaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PessoaSelect<ExtArgs> | null;
    omit?: Prisma.PessoaOmit<ExtArgs> | null;
    include?: Prisma.PessoaInclude<ExtArgs> | null;
    where: Prisma.PessoaWhereUniqueInput;
    create: Prisma.XOR<Prisma.PessoaCreateInput, Prisma.PessoaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PessoaUpdateInput, Prisma.PessoaUncheckedUpdateInput>;
};
export type PessoaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PessoaSelect<ExtArgs> | null;
    omit?: Prisma.PessoaOmit<ExtArgs> | null;
    include?: Prisma.PessoaInclude<ExtArgs> | null;
    where: Prisma.PessoaWhereUniqueInput;
};
export type PessoaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PessoaWhereInput;
    limit?: number;
};
export type Pessoa$lideresArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Pessoa$inscricoesStartupArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Pessoa$votosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PessoaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PessoaSelect<ExtArgs> | null;
    omit?: Prisma.PessoaOmit<ExtArgs> | null;
    include?: Prisma.PessoaInclude<ExtArgs> | null;
};
