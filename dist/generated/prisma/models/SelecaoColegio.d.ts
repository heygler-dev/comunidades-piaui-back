import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type SelecaoColegioModel = runtime.Types.Result.DefaultSelection<Prisma.$SelecaoColegioPayload>;
export type AggregateSelecaoColegio = {
    _count: SelecaoColegioCountAggregateOutputType | null;
    _min: SelecaoColegioMinAggregateOutputType | null;
    _max: SelecaoColegioMaxAggregateOutputType | null;
};
export type SelecaoColegioMinAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    categoriaId: string | null;
    inscricaoStartupId: string | null;
    membroColegioId: string | null;
    status: $Enums.StatusSelecaoColegio | null;
    conflitoInteresse: boolean | null;
    createdAt: Date | null;
};
export type SelecaoColegioMaxAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    categoriaId: string | null;
    inscricaoStartupId: string | null;
    membroColegioId: string | null;
    status: $Enums.StatusSelecaoColegio | null;
    conflitoInteresse: boolean | null;
    createdAt: Date | null;
};
export type SelecaoColegioCountAggregateOutputType = {
    id: number;
    edicaoId: number;
    categoriaId: number;
    inscricaoStartupId: number;
    membroColegioId: number;
    status: number;
    conflitoInteresse: number;
    createdAt: number;
    _all: number;
};
export type SelecaoColegioMinAggregateInputType = {
    id?: true;
    edicaoId?: true;
    categoriaId?: true;
    inscricaoStartupId?: true;
    membroColegioId?: true;
    status?: true;
    conflitoInteresse?: true;
    createdAt?: true;
};
export type SelecaoColegioMaxAggregateInputType = {
    id?: true;
    edicaoId?: true;
    categoriaId?: true;
    inscricaoStartupId?: true;
    membroColegioId?: true;
    status?: true;
    conflitoInteresse?: true;
    createdAt?: true;
};
export type SelecaoColegioCountAggregateInputType = {
    id?: true;
    edicaoId?: true;
    categoriaId?: true;
    inscricaoStartupId?: true;
    membroColegioId?: true;
    status?: true;
    conflitoInteresse?: true;
    createdAt?: true;
    _all?: true;
};
export type SelecaoColegioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SelecaoColegioWhereInput;
    orderBy?: Prisma.SelecaoColegioOrderByWithRelationInput | Prisma.SelecaoColegioOrderByWithRelationInput[];
    cursor?: Prisma.SelecaoColegioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SelecaoColegioCountAggregateInputType;
    _min?: SelecaoColegioMinAggregateInputType;
    _max?: SelecaoColegioMaxAggregateInputType;
};
export type GetSelecaoColegioAggregateType<T extends SelecaoColegioAggregateArgs> = {
    [P in keyof T & keyof AggregateSelecaoColegio]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSelecaoColegio[P]> : Prisma.GetScalarType<T[P], AggregateSelecaoColegio[P]>;
};
export type SelecaoColegioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SelecaoColegioWhereInput;
    orderBy?: Prisma.SelecaoColegioOrderByWithAggregationInput | Prisma.SelecaoColegioOrderByWithAggregationInput[];
    by: Prisma.SelecaoColegioScalarFieldEnum[] | Prisma.SelecaoColegioScalarFieldEnum;
    having?: Prisma.SelecaoColegioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SelecaoColegioCountAggregateInputType | true;
    _min?: SelecaoColegioMinAggregateInputType;
    _max?: SelecaoColegioMaxAggregateInputType;
};
export type SelecaoColegioGroupByOutputType = {
    id: string;
    edicaoId: string;
    categoriaId: string;
    inscricaoStartupId: string;
    membroColegioId: string;
    status: $Enums.StatusSelecaoColegio;
    conflitoInteresse: boolean;
    createdAt: Date;
    _count: SelecaoColegioCountAggregateOutputType | null;
    _min: SelecaoColegioMinAggregateOutputType | null;
    _max: SelecaoColegioMaxAggregateOutputType | null;
};
export type GetSelecaoColegioGroupByPayload<T extends SelecaoColegioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SelecaoColegioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SelecaoColegioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SelecaoColegioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SelecaoColegioGroupByOutputType[P]>;
}>>;
export type SelecaoColegioWhereInput = {
    AND?: Prisma.SelecaoColegioWhereInput | Prisma.SelecaoColegioWhereInput[];
    OR?: Prisma.SelecaoColegioWhereInput[];
    NOT?: Prisma.SelecaoColegioWhereInput | Prisma.SelecaoColegioWhereInput[];
    id?: Prisma.StringFilter<"SelecaoColegio"> | string;
    edicaoId?: Prisma.StringFilter<"SelecaoColegio"> | string;
    categoriaId?: Prisma.StringFilter<"SelecaoColegio"> | string;
    inscricaoStartupId?: Prisma.StringFilter<"SelecaoColegio"> | string;
    membroColegioId?: Prisma.StringFilter<"SelecaoColegio"> | string;
    status?: Prisma.EnumStatusSelecaoColegioFilter<"SelecaoColegio"> | $Enums.StatusSelecaoColegio;
    conflitoInteresse?: Prisma.BoolFilter<"SelecaoColegio"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"SelecaoColegio"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
    categoria?: Prisma.XOR<Prisma.CategoriaScalarRelationFilter, Prisma.CategoriaWhereInput>;
    inscricaoStartup?: Prisma.XOR<Prisma.InscricaoStartupScalarRelationFilter, Prisma.InscricaoStartupWhereInput>;
    membroColegio?: Prisma.XOR<Prisma.MembroColegioScalarRelationFilter, Prisma.MembroColegioWhereInput>;
};
export type SelecaoColegioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    inscricaoStartupId?: Prisma.SortOrder;
    membroColegioId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    conflitoInteresse?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    edicao?: Prisma.EdicaoOrderByWithRelationInput;
    categoria?: Prisma.CategoriaOrderByWithRelationInput;
    inscricaoStartup?: Prisma.InscricaoStartupOrderByWithRelationInput;
    membroColegio?: Prisma.MembroColegioOrderByWithRelationInput;
};
export type SelecaoColegioWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    edicaoId_categoriaId_inscricaoStartupId_membroColegioId?: Prisma.SelecaoColegioEdicaoIdCategoriaIdInscricaoStartupIdMembroColegioIdCompoundUniqueInput;
    AND?: Prisma.SelecaoColegioWhereInput | Prisma.SelecaoColegioWhereInput[];
    OR?: Prisma.SelecaoColegioWhereInput[];
    NOT?: Prisma.SelecaoColegioWhereInput | Prisma.SelecaoColegioWhereInput[];
    edicaoId?: Prisma.StringFilter<"SelecaoColegio"> | string;
    categoriaId?: Prisma.StringFilter<"SelecaoColegio"> | string;
    inscricaoStartupId?: Prisma.StringFilter<"SelecaoColegio"> | string;
    membroColegioId?: Prisma.StringFilter<"SelecaoColegio"> | string;
    status?: Prisma.EnumStatusSelecaoColegioFilter<"SelecaoColegio"> | $Enums.StatusSelecaoColegio;
    conflitoInteresse?: Prisma.BoolFilter<"SelecaoColegio"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"SelecaoColegio"> | Date | string;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
    categoria?: Prisma.XOR<Prisma.CategoriaScalarRelationFilter, Prisma.CategoriaWhereInput>;
    inscricaoStartup?: Prisma.XOR<Prisma.InscricaoStartupScalarRelationFilter, Prisma.InscricaoStartupWhereInput>;
    membroColegio?: Prisma.XOR<Prisma.MembroColegioScalarRelationFilter, Prisma.MembroColegioWhereInput>;
}, "id" | "edicaoId_categoriaId_inscricaoStartupId_membroColegioId">;
export type SelecaoColegioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    inscricaoStartupId?: Prisma.SortOrder;
    membroColegioId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    conflitoInteresse?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.SelecaoColegioCountOrderByAggregateInput;
    _max?: Prisma.SelecaoColegioMaxOrderByAggregateInput;
    _min?: Prisma.SelecaoColegioMinOrderByAggregateInput;
};
export type SelecaoColegioScalarWhereWithAggregatesInput = {
    AND?: Prisma.SelecaoColegioScalarWhereWithAggregatesInput | Prisma.SelecaoColegioScalarWhereWithAggregatesInput[];
    OR?: Prisma.SelecaoColegioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SelecaoColegioScalarWhereWithAggregatesInput | Prisma.SelecaoColegioScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"SelecaoColegio"> | string;
    edicaoId?: Prisma.StringWithAggregatesFilter<"SelecaoColegio"> | string;
    categoriaId?: Prisma.StringWithAggregatesFilter<"SelecaoColegio"> | string;
    inscricaoStartupId?: Prisma.StringWithAggregatesFilter<"SelecaoColegio"> | string;
    membroColegioId?: Prisma.StringWithAggregatesFilter<"SelecaoColegio"> | string;
    status?: Prisma.EnumStatusSelecaoColegioWithAggregatesFilter<"SelecaoColegio"> | $Enums.StatusSelecaoColegio;
    conflitoInteresse?: Prisma.BoolWithAggregatesFilter<"SelecaoColegio"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"SelecaoColegio"> | Date | string;
};
export type SelecaoColegioCreateInput = {
    id?: string;
    status: $Enums.StatusSelecaoColegio;
    conflitoInteresse?: boolean;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutSelecoesColegioInput;
    categoria: Prisma.CategoriaCreateNestedOneWithoutSelecoesColegioInput;
    inscricaoStartup: Prisma.InscricaoStartupCreateNestedOneWithoutSelecoesColegioInput;
    membroColegio: Prisma.MembroColegioCreateNestedOneWithoutSelecoesColegioInput;
};
export type SelecaoColegioUncheckedCreateInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    inscricaoStartupId: string;
    membroColegioId: string;
    status: $Enums.StatusSelecaoColegio;
    conflitoInteresse?: boolean;
    createdAt?: Date | string;
};
export type SelecaoColegioUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusSelecaoColegioFieldUpdateOperationsInput | $Enums.StatusSelecaoColegio;
    conflitoInteresse?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutSelecoesColegioNestedInput;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutSelecoesColegioNestedInput;
    inscricaoStartup?: Prisma.InscricaoStartupUpdateOneRequiredWithoutSelecoesColegioNestedInput;
    membroColegio?: Prisma.MembroColegioUpdateOneRequiredWithoutSelecoesColegioNestedInput;
};
export type SelecaoColegioUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    membroColegioId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusSelecaoColegioFieldUpdateOperationsInput | $Enums.StatusSelecaoColegio;
    conflitoInteresse?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SelecaoColegioCreateManyInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    inscricaoStartupId: string;
    membroColegioId: string;
    status: $Enums.StatusSelecaoColegio;
    conflitoInteresse?: boolean;
    createdAt?: Date | string;
};
export type SelecaoColegioUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusSelecaoColegioFieldUpdateOperationsInput | $Enums.StatusSelecaoColegio;
    conflitoInteresse?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SelecaoColegioUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    membroColegioId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusSelecaoColegioFieldUpdateOperationsInput | $Enums.StatusSelecaoColegio;
    conflitoInteresse?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SelecaoColegioListRelationFilter = {
    every?: Prisma.SelecaoColegioWhereInput;
    some?: Prisma.SelecaoColegioWhereInput;
    none?: Prisma.SelecaoColegioWhereInput;
};
export type SelecaoColegioOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SelecaoColegioEdicaoIdCategoriaIdInscricaoStartupIdMembroColegioIdCompoundUniqueInput = {
    edicaoId: string;
    categoriaId: string;
    inscricaoStartupId: string;
    membroColegioId: string;
};
export type SelecaoColegioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    inscricaoStartupId?: Prisma.SortOrder;
    membroColegioId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    conflitoInteresse?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SelecaoColegioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    inscricaoStartupId?: Prisma.SortOrder;
    membroColegioId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    conflitoInteresse?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SelecaoColegioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    categoriaId?: Prisma.SortOrder;
    inscricaoStartupId?: Prisma.SortOrder;
    membroColegioId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    conflitoInteresse?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type SelecaoColegioCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.SelecaoColegioCreateWithoutEdicaoInput, Prisma.SelecaoColegioUncheckedCreateWithoutEdicaoInput> | Prisma.SelecaoColegioCreateWithoutEdicaoInput[] | Prisma.SelecaoColegioUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.SelecaoColegioCreateOrConnectWithoutEdicaoInput | Prisma.SelecaoColegioCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.SelecaoColegioCreateManyEdicaoInputEnvelope;
    connect?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
};
export type SelecaoColegioUncheckedCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.SelecaoColegioCreateWithoutEdicaoInput, Prisma.SelecaoColegioUncheckedCreateWithoutEdicaoInput> | Prisma.SelecaoColegioCreateWithoutEdicaoInput[] | Prisma.SelecaoColegioUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.SelecaoColegioCreateOrConnectWithoutEdicaoInput | Prisma.SelecaoColegioCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.SelecaoColegioCreateManyEdicaoInputEnvelope;
    connect?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
};
export type SelecaoColegioUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.SelecaoColegioCreateWithoutEdicaoInput, Prisma.SelecaoColegioUncheckedCreateWithoutEdicaoInput> | Prisma.SelecaoColegioCreateWithoutEdicaoInput[] | Prisma.SelecaoColegioUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.SelecaoColegioCreateOrConnectWithoutEdicaoInput | Prisma.SelecaoColegioCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.SelecaoColegioUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.SelecaoColegioUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.SelecaoColegioCreateManyEdicaoInputEnvelope;
    set?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    disconnect?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    delete?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    connect?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    update?: Prisma.SelecaoColegioUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.SelecaoColegioUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.SelecaoColegioUpdateManyWithWhereWithoutEdicaoInput | Prisma.SelecaoColegioUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.SelecaoColegioScalarWhereInput | Prisma.SelecaoColegioScalarWhereInput[];
};
export type SelecaoColegioUncheckedUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.SelecaoColegioCreateWithoutEdicaoInput, Prisma.SelecaoColegioUncheckedCreateWithoutEdicaoInput> | Prisma.SelecaoColegioCreateWithoutEdicaoInput[] | Prisma.SelecaoColegioUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.SelecaoColegioCreateOrConnectWithoutEdicaoInput | Prisma.SelecaoColegioCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.SelecaoColegioUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.SelecaoColegioUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.SelecaoColegioCreateManyEdicaoInputEnvelope;
    set?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    disconnect?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    delete?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    connect?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    update?: Prisma.SelecaoColegioUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.SelecaoColegioUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.SelecaoColegioUpdateManyWithWhereWithoutEdicaoInput | Prisma.SelecaoColegioUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.SelecaoColegioScalarWhereInput | Prisma.SelecaoColegioScalarWhereInput[];
};
export type SelecaoColegioCreateNestedManyWithoutInscricaoStartupInput = {
    create?: Prisma.XOR<Prisma.SelecaoColegioCreateWithoutInscricaoStartupInput, Prisma.SelecaoColegioUncheckedCreateWithoutInscricaoStartupInput> | Prisma.SelecaoColegioCreateWithoutInscricaoStartupInput[] | Prisma.SelecaoColegioUncheckedCreateWithoutInscricaoStartupInput[];
    connectOrCreate?: Prisma.SelecaoColegioCreateOrConnectWithoutInscricaoStartupInput | Prisma.SelecaoColegioCreateOrConnectWithoutInscricaoStartupInput[];
    createMany?: Prisma.SelecaoColegioCreateManyInscricaoStartupInputEnvelope;
    connect?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
};
export type SelecaoColegioUncheckedCreateNestedManyWithoutInscricaoStartupInput = {
    create?: Prisma.XOR<Prisma.SelecaoColegioCreateWithoutInscricaoStartupInput, Prisma.SelecaoColegioUncheckedCreateWithoutInscricaoStartupInput> | Prisma.SelecaoColegioCreateWithoutInscricaoStartupInput[] | Prisma.SelecaoColegioUncheckedCreateWithoutInscricaoStartupInput[];
    connectOrCreate?: Prisma.SelecaoColegioCreateOrConnectWithoutInscricaoStartupInput | Prisma.SelecaoColegioCreateOrConnectWithoutInscricaoStartupInput[];
    createMany?: Prisma.SelecaoColegioCreateManyInscricaoStartupInputEnvelope;
    connect?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
};
export type SelecaoColegioUpdateManyWithoutInscricaoStartupNestedInput = {
    create?: Prisma.XOR<Prisma.SelecaoColegioCreateWithoutInscricaoStartupInput, Prisma.SelecaoColegioUncheckedCreateWithoutInscricaoStartupInput> | Prisma.SelecaoColegioCreateWithoutInscricaoStartupInput[] | Prisma.SelecaoColegioUncheckedCreateWithoutInscricaoStartupInput[];
    connectOrCreate?: Prisma.SelecaoColegioCreateOrConnectWithoutInscricaoStartupInput | Prisma.SelecaoColegioCreateOrConnectWithoutInscricaoStartupInput[];
    upsert?: Prisma.SelecaoColegioUpsertWithWhereUniqueWithoutInscricaoStartupInput | Prisma.SelecaoColegioUpsertWithWhereUniqueWithoutInscricaoStartupInput[];
    createMany?: Prisma.SelecaoColegioCreateManyInscricaoStartupInputEnvelope;
    set?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    disconnect?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    delete?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    connect?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    update?: Prisma.SelecaoColegioUpdateWithWhereUniqueWithoutInscricaoStartupInput | Prisma.SelecaoColegioUpdateWithWhereUniqueWithoutInscricaoStartupInput[];
    updateMany?: Prisma.SelecaoColegioUpdateManyWithWhereWithoutInscricaoStartupInput | Prisma.SelecaoColegioUpdateManyWithWhereWithoutInscricaoStartupInput[];
    deleteMany?: Prisma.SelecaoColegioScalarWhereInput | Prisma.SelecaoColegioScalarWhereInput[];
};
export type SelecaoColegioUncheckedUpdateManyWithoutInscricaoStartupNestedInput = {
    create?: Prisma.XOR<Prisma.SelecaoColegioCreateWithoutInscricaoStartupInput, Prisma.SelecaoColegioUncheckedCreateWithoutInscricaoStartupInput> | Prisma.SelecaoColegioCreateWithoutInscricaoStartupInput[] | Prisma.SelecaoColegioUncheckedCreateWithoutInscricaoStartupInput[];
    connectOrCreate?: Prisma.SelecaoColegioCreateOrConnectWithoutInscricaoStartupInput | Prisma.SelecaoColegioCreateOrConnectWithoutInscricaoStartupInput[];
    upsert?: Prisma.SelecaoColegioUpsertWithWhereUniqueWithoutInscricaoStartupInput | Prisma.SelecaoColegioUpsertWithWhereUniqueWithoutInscricaoStartupInput[];
    createMany?: Prisma.SelecaoColegioCreateManyInscricaoStartupInputEnvelope;
    set?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    disconnect?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    delete?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    connect?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    update?: Prisma.SelecaoColegioUpdateWithWhereUniqueWithoutInscricaoStartupInput | Prisma.SelecaoColegioUpdateWithWhereUniqueWithoutInscricaoStartupInput[];
    updateMany?: Prisma.SelecaoColegioUpdateManyWithWhereWithoutInscricaoStartupInput | Prisma.SelecaoColegioUpdateManyWithWhereWithoutInscricaoStartupInput[];
    deleteMany?: Prisma.SelecaoColegioScalarWhereInput | Prisma.SelecaoColegioScalarWhereInput[];
};
export type SelecaoColegioCreateNestedManyWithoutCategoriaInput = {
    create?: Prisma.XOR<Prisma.SelecaoColegioCreateWithoutCategoriaInput, Prisma.SelecaoColegioUncheckedCreateWithoutCategoriaInput> | Prisma.SelecaoColegioCreateWithoutCategoriaInput[] | Prisma.SelecaoColegioUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.SelecaoColegioCreateOrConnectWithoutCategoriaInput | Prisma.SelecaoColegioCreateOrConnectWithoutCategoriaInput[];
    createMany?: Prisma.SelecaoColegioCreateManyCategoriaInputEnvelope;
    connect?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
};
export type SelecaoColegioUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: Prisma.XOR<Prisma.SelecaoColegioCreateWithoutCategoriaInput, Prisma.SelecaoColegioUncheckedCreateWithoutCategoriaInput> | Prisma.SelecaoColegioCreateWithoutCategoriaInput[] | Prisma.SelecaoColegioUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.SelecaoColegioCreateOrConnectWithoutCategoriaInput | Prisma.SelecaoColegioCreateOrConnectWithoutCategoriaInput[];
    createMany?: Prisma.SelecaoColegioCreateManyCategoriaInputEnvelope;
    connect?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
};
export type SelecaoColegioUpdateManyWithoutCategoriaNestedInput = {
    create?: Prisma.XOR<Prisma.SelecaoColegioCreateWithoutCategoriaInput, Prisma.SelecaoColegioUncheckedCreateWithoutCategoriaInput> | Prisma.SelecaoColegioCreateWithoutCategoriaInput[] | Prisma.SelecaoColegioUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.SelecaoColegioCreateOrConnectWithoutCategoriaInput | Prisma.SelecaoColegioCreateOrConnectWithoutCategoriaInput[];
    upsert?: Prisma.SelecaoColegioUpsertWithWhereUniqueWithoutCategoriaInput | Prisma.SelecaoColegioUpsertWithWhereUniqueWithoutCategoriaInput[];
    createMany?: Prisma.SelecaoColegioCreateManyCategoriaInputEnvelope;
    set?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    disconnect?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    delete?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    connect?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    update?: Prisma.SelecaoColegioUpdateWithWhereUniqueWithoutCategoriaInput | Prisma.SelecaoColegioUpdateWithWhereUniqueWithoutCategoriaInput[];
    updateMany?: Prisma.SelecaoColegioUpdateManyWithWhereWithoutCategoriaInput | Prisma.SelecaoColegioUpdateManyWithWhereWithoutCategoriaInput[];
    deleteMany?: Prisma.SelecaoColegioScalarWhereInput | Prisma.SelecaoColegioScalarWhereInput[];
};
export type SelecaoColegioUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: Prisma.XOR<Prisma.SelecaoColegioCreateWithoutCategoriaInput, Prisma.SelecaoColegioUncheckedCreateWithoutCategoriaInput> | Prisma.SelecaoColegioCreateWithoutCategoriaInput[] | Prisma.SelecaoColegioUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.SelecaoColegioCreateOrConnectWithoutCategoriaInput | Prisma.SelecaoColegioCreateOrConnectWithoutCategoriaInput[];
    upsert?: Prisma.SelecaoColegioUpsertWithWhereUniqueWithoutCategoriaInput | Prisma.SelecaoColegioUpsertWithWhereUniqueWithoutCategoriaInput[];
    createMany?: Prisma.SelecaoColegioCreateManyCategoriaInputEnvelope;
    set?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    disconnect?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    delete?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    connect?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    update?: Prisma.SelecaoColegioUpdateWithWhereUniqueWithoutCategoriaInput | Prisma.SelecaoColegioUpdateWithWhereUniqueWithoutCategoriaInput[];
    updateMany?: Prisma.SelecaoColegioUpdateManyWithWhereWithoutCategoriaInput | Prisma.SelecaoColegioUpdateManyWithWhereWithoutCategoriaInput[];
    deleteMany?: Prisma.SelecaoColegioScalarWhereInput | Prisma.SelecaoColegioScalarWhereInput[];
};
export type SelecaoColegioCreateNestedManyWithoutMembroColegioInput = {
    create?: Prisma.XOR<Prisma.SelecaoColegioCreateWithoutMembroColegioInput, Prisma.SelecaoColegioUncheckedCreateWithoutMembroColegioInput> | Prisma.SelecaoColegioCreateWithoutMembroColegioInput[] | Prisma.SelecaoColegioUncheckedCreateWithoutMembroColegioInput[];
    connectOrCreate?: Prisma.SelecaoColegioCreateOrConnectWithoutMembroColegioInput | Prisma.SelecaoColegioCreateOrConnectWithoutMembroColegioInput[];
    createMany?: Prisma.SelecaoColegioCreateManyMembroColegioInputEnvelope;
    connect?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
};
export type SelecaoColegioUncheckedCreateNestedManyWithoutMembroColegioInput = {
    create?: Prisma.XOR<Prisma.SelecaoColegioCreateWithoutMembroColegioInput, Prisma.SelecaoColegioUncheckedCreateWithoutMembroColegioInput> | Prisma.SelecaoColegioCreateWithoutMembroColegioInput[] | Prisma.SelecaoColegioUncheckedCreateWithoutMembroColegioInput[];
    connectOrCreate?: Prisma.SelecaoColegioCreateOrConnectWithoutMembroColegioInput | Prisma.SelecaoColegioCreateOrConnectWithoutMembroColegioInput[];
    createMany?: Prisma.SelecaoColegioCreateManyMembroColegioInputEnvelope;
    connect?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
};
export type SelecaoColegioUpdateManyWithoutMembroColegioNestedInput = {
    create?: Prisma.XOR<Prisma.SelecaoColegioCreateWithoutMembroColegioInput, Prisma.SelecaoColegioUncheckedCreateWithoutMembroColegioInput> | Prisma.SelecaoColegioCreateWithoutMembroColegioInput[] | Prisma.SelecaoColegioUncheckedCreateWithoutMembroColegioInput[];
    connectOrCreate?: Prisma.SelecaoColegioCreateOrConnectWithoutMembroColegioInput | Prisma.SelecaoColegioCreateOrConnectWithoutMembroColegioInput[];
    upsert?: Prisma.SelecaoColegioUpsertWithWhereUniqueWithoutMembroColegioInput | Prisma.SelecaoColegioUpsertWithWhereUniqueWithoutMembroColegioInput[];
    createMany?: Prisma.SelecaoColegioCreateManyMembroColegioInputEnvelope;
    set?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    disconnect?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    delete?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    connect?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    update?: Prisma.SelecaoColegioUpdateWithWhereUniqueWithoutMembroColegioInput | Prisma.SelecaoColegioUpdateWithWhereUniqueWithoutMembroColegioInput[];
    updateMany?: Prisma.SelecaoColegioUpdateManyWithWhereWithoutMembroColegioInput | Prisma.SelecaoColegioUpdateManyWithWhereWithoutMembroColegioInput[];
    deleteMany?: Prisma.SelecaoColegioScalarWhereInput | Prisma.SelecaoColegioScalarWhereInput[];
};
export type SelecaoColegioUncheckedUpdateManyWithoutMembroColegioNestedInput = {
    create?: Prisma.XOR<Prisma.SelecaoColegioCreateWithoutMembroColegioInput, Prisma.SelecaoColegioUncheckedCreateWithoutMembroColegioInput> | Prisma.SelecaoColegioCreateWithoutMembroColegioInput[] | Prisma.SelecaoColegioUncheckedCreateWithoutMembroColegioInput[];
    connectOrCreate?: Prisma.SelecaoColegioCreateOrConnectWithoutMembroColegioInput | Prisma.SelecaoColegioCreateOrConnectWithoutMembroColegioInput[];
    upsert?: Prisma.SelecaoColegioUpsertWithWhereUniqueWithoutMembroColegioInput | Prisma.SelecaoColegioUpsertWithWhereUniqueWithoutMembroColegioInput[];
    createMany?: Prisma.SelecaoColegioCreateManyMembroColegioInputEnvelope;
    set?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    disconnect?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    delete?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    connect?: Prisma.SelecaoColegioWhereUniqueInput | Prisma.SelecaoColegioWhereUniqueInput[];
    update?: Prisma.SelecaoColegioUpdateWithWhereUniqueWithoutMembroColegioInput | Prisma.SelecaoColegioUpdateWithWhereUniqueWithoutMembroColegioInput[];
    updateMany?: Prisma.SelecaoColegioUpdateManyWithWhereWithoutMembroColegioInput | Prisma.SelecaoColegioUpdateManyWithWhereWithoutMembroColegioInput[];
    deleteMany?: Prisma.SelecaoColegioScalarWhereInput | Prisma.SelecaoColegioScalarWhereInput[];
};
export type EnumStatusSelecaoColegioFieldUpdateOperationsInput = {
    set?: $Enums.StatusSelecaoColegio;
};
export type SelecaoColegioCreateWithoutEdicaoInput = {
    id?: string;
    status: $Enums.StatusSelecaoColegio;
    conflitoInteresse?: boolean;
    createdAt?: Date | string;
    categoria: Prisma.CategoriaCreateNestedOneWithoutSelecoesColegioInput;
    inscricaoStartup: Prisma.InscricaoStartupCreateNestedOneWithoutSelecoesColegioInput;
    membroColegio: Prisma.MembroColegioCreateNestedOneWithoutSelecoesColegioInput;
};
export type SelecaoColegioUncheckedCreateWithoutEdicaoInput = {
    id?: string;
    categoriaId: string;
    inscricaoStartupId: string;
    membroColegioId: string;
    status: $Enums.StatusSelecaoColegio;
    conflitoInteresse?: boolean;
    createdAt?: Date | string;
};
export type SelecaoColegioCreateOrConnectWithoutEdicaoInput = {
    where: Prisma.SelecaoColegioWhereUniqueInput;
    create: Prisma.XOR<Prisma.SelecaoColegioCreateWithoutEdicaoInput, Prisma.SelecaoColegioUncheckedCreateWithoutEdicaoInput>;
};
export type SelecaoColegioCreateManyEdicaoInputEnvelope = {
    data: Prisma.SelecaoColegioCreateManyEdicaoInput | Prisma.SelecaoColegioCreateManyEdicaoInput[];
    skipDuplicates?: boolean;
};
export type SelecaoColegioUpsertWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.SelecaoColegioWhereUniqueInput;
    update: Prisma.XOR<Prisma.SelecaoColegioUpdateWithoutEdicaoInput, Prisma.SelecaoColegioUncheckedUpdateWithoutEdicaoInput>;
    create: Prisma.XOR<Prisma.SelecaoColegioCreateWithoutEdicaoInput, Prisma.SelecaoColegioUncheckedCreateWithoutEdicaoInput>;
};
export type SelecaoColegioUpdateWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.SelecaoColegioWhereUniqueInput;
    data: Prisma.XOR<Prisma.SelecaoColegioUpdateWithoutEdicaoInput, Prisma.SelecaoColegioUncheckedUpdateWithoutEdicaoInput>;
};
export type SelecaoColegioUpdateManyWithWhereWithoutEdicaoInput = {
    where: Prisma.SelecaoColegioScalarWhereInput;
    data: Prisma.XOR<Prisma.SelecaoColegioUpdateManyMutationInput, Prisma.SelecaoColegioUncheckedUpdateManyWithoutEdicaoInput>;
};
export type SelecaoColegioScalarWhereInput = {
    AND?: Prisma.SelecaoColegioScalarWhereInput | Prisma.SelecaoColegioScalarWhereInput[];
    OR?: Prisma.SelecaoColegioScalarWhereInput[];
    NOT?: Prisma.SelecaoColegioScalarWhereInput | Prisma.SelecaoColegioScalarWhereInput[];
    id?: Prisma.StringFilter<"SelecaoColegio"> | string;
    edicaoId?: Prisma.StringFilter<"SelecaoColegio"> | string;
    categoriaId?: Prisma.StringFilter<"SelecaoColegio"> | string;
    inscricaoStartupId?: Prisma.StringFilter<"SelecaoColegio"> | string;
    membroColegioId?: Prisma.StringFilter<"SelecaoColegio"> | string;
    status?: Prisma.EnumStatusSelecaoColegioFilter<"SelecaoColegio"> | $Enums.StatusSelecaoColegio;
    conflitoInteresse?: Prisma.BoolFilter<"SelecaoColegio"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"SelecaoColegio"> | Date | string;
};
export type SelecaoColegioCreateWithoutInscricaoStartupInput = {
    id?: string;
    status: $Enums.StatusSelecaoColegio;
    conflitoInteresse?: boolean;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutSelecoesColegioInput;
    categoria: Prisma.CategoriaCreateNestedOneWithoutSelecoesColegioInput;
    membroColegio: Prisma.MembroColegioCreateNestedOneWithoutSelecoesColegioInput;
};
export type SelecaoColegioUncheckedCreateWithoutInscricaoStartupInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    membroColegioId: string;
    status: $Enums.StatusSelecaoColegio;
    conflitoInteresse?: boolean;
    createdAt?: Date | string;
};
export type SelecaoColegioCreateOrConnectWithoutInscricaoStartupInput = {
    where: Prisma.SelecaoColegioWhereUniqueInput;
    create: Prisma.XOR<Prisma.SelecaoColegioCreateWithoutInscricaoStartupInput, Prisma.SelecaoColegioUncheckedCreateWithoutInscricaoStartupInput>;
};
export type SelecaoColegioCreateManyInscricaoStartupInputEnvelope = {
    data: Prisma.SelecaoColegioCreateManyInscricaoStartupInput | Prisma.SelecaoColegioCreateManyInscricaoStartupInput[];
    skipDuplicates?: boolean;
};
export type SelecaoColegioUpsertWithWhereUniqueWithoutInscricaoStartupInput = {
    where: Prisma.SelecaoColegioWhereUniqueInput;
    update: Prisma.XOR<Prisma.SelecaoColegioUpdateWithoutInscricaoStartupInput, Prisma.SelecaoColegioUncheckedUpdateWithoutInscricaoStartupInput>;
    create: Prisma.XOR<Prisma.SelecaoColegioCreateWithoutInscricaoStartupInput, Prisma.SelecaoColegioUncheckedCreateWithoutInscricaoStartupInput>;
};
export type SelecaoColegioUpdateWithWhereUniqueWithoutInscricaoStartupInput = {
    where: Prisma.SelecaoColegioWhereUniqueInput;
    data: Prisma.XOR<Prisma.SelecaoColegioUpdateWithoutInscricaoStartupInput, Prisma.SelecaoColegioUncheckedUpdateWithoutInscricaoStartupInput>;
};
export type SelecaoColegioUpdateManyWithWhereWithoutInscricaoStartupInput = {
    where: Prisma.SelecaoColegioScalarWhereInput;
    data: Prisma.XOR<Prisma.SelecaoColegioUpdateManyMutationInput, Prisma.SelecaoColegioUncheckedUpdateManyWithoutInscricaoStartupInput>;
};
export type SelecaoColegioCreateWithoutCategoriaInput = {
    id?: string;
    status: $Enums.StatusSelecaoColegio;
    conflitoInteresse?: boolean;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutSelecoesColegioInput;
    inscricaoStartup: Prisma.InscricaoStartupCreateNestedOneWithoutSelecoesColegioInput;
    membroColegio: Prisma.MembroColegioCreateNestedOneWithoutSelecoesColegioInput;
};
export type SelecaoColegioUncheckedCreateWithoutCategoriaInput = {
    id?: string;
    edicaoId: string;
    inscricaoStartupId: string;
    membroColegioId: string;
    status: $Enums.StatusSelecaoColegio;
    conflitoInteresse?: boolean;
    createdAt?: Date | string;
};
export type SelecaoColegioCreateOrConnectWithoutCategoriaInput = {
    where: Prisma.SelecaoColegioWhereUniqueInput;
    create: Prisma.XOR<Prisma.SelecaoColegioCreateWithoutCategoriaInput, Prisma.SelecaoColegioUncheckedCreateWithoutCategoriaInput>;
};
export type SelecaoColegioCreateManyCategoriaInputEnvelope = {
    data: Prisma.SelecaoColegioCreateManyCategoriaInput | Prisma.SelecaoColegioCreateManyCategoriaInput[];
    skipDuplicates?: boolean;
};
export type SelecaoColegioUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: Prisma.SelecaoColegioWhereUniqueInput;
    update: Prisma.XOR<Prisma.SelecaoColegioUpdateWithoutCategoriaInput, Prisma.SelecaoColegioUncheckedUpdateWithoutCategoriaInput>;
    create: Prisma.XOR<Prisma.SelecaoColegioCreateWithoutCategoriaInput, Prisma.SelecaoColegioUncheckedCreateWithoutCategoriaInput>;
};
export type SelecaoColegioUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: Prisma.SelecaoColegioWhereUniqueInput;
    data: Prisma.XOR<Prisma.SelecaoColegioUpdateWithoutCategoriaInput, Prisma.SelecaoColegioUncheckedUpdateWithoutCategoriaInput>;
};
export type SelecaoColegioUpdateManyWithWhereWithoutCategoriaInput = {
    where: Prisma.SelecaoColegioScalarWhereInput;
    data: Prisma.XOR<Prisma.SelecaoColegioUpdateManyMutationInput, Prisma.SelecaoColegioUncheckedUpdateManyWithoutCategoriaInput>;
};
export type SelecaoColegioCreateWithoutMembroColegioInput = {
    id?: string;
    status: $Enums.StatusSelecaoColegio;
    conflitoInteresse?: boolean;
    createdAt?: Date | string;
    edicao: Prisma.EdicaoCreateNestedOneWithoutSelecoesColegioInput;
    categoria: Prisma.CategoriaCreateNestedOneWithoutSelecoesColegioInput;
    inscricaoStartup: Prisma.InscricaoStartupCreateNestedOneWithoutSelecoesColegioInput;
};
export type SelecaoColegioUncheckedCreateWithoutMembroColegioInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    inscricaoStartupId: string;
    status: $Enums.StatusSelecaoColegio;
    conflitoInteresse?: boolean;
    createdAt?: Date | string;
};
export type SelecaoColegioCreateOrConnectWithoutMembroColegioInput = {
    where: Prisma.SelecaoColegioWhereUniqueInput;
    create: Prisma.XOR<Prisma.SelecaoColegioCreateWithoutMembroColegioInput, Prisma.SelecaoColegioUncheckedCreateWithoutMembroColegioInput>;
};
export type SelecaoColegioCreateManyMembroColegioInputEnvelope = {
    data: Prisma.SelecaoColegioCreateManyMembroColegioInput | Prisma.SelecaoColegioCreateManyMembroColegioInput[];
    skipDuplicates?: boolean;
};
export type SelecaoColegioUpsertWithWhereUniqueWithoutMembroColegioInput = {
    where: Prisma.SelecaoColegioWhereUniqueInput;
    update: Prisma.XOR<Prisma.SelecaoColegioUpdateWithoutMembroColegioInput, Prisma.SelecaoColegioUncheckedUpdateWithoutMembroColegioInput>;
    create: Prisma.XOR<Prisma.SelecaoColegioCreateWithoutMembroColegioInput, Prisma.SelecaoColegioUncheckedCreateWithoutMembroColegioInput>;
};
export type SelecaoColegioUpdateWithWhereUniqueWithoutMembroColegioInput = {
    where: Prisma.SelecaoColegioWhereUniqueInput;
    data: Prisma.XOR<Prisma.SelecaoColegioUpdateWithoutMembroColegioInput, Prisma.SelecaoColegioUncheckedUpdateWithoutMembroColegioInput>;
};
export type SelecaoColegioUpdateManyWithWhereWithoutMembroColegioInput = {
    where: Prisma.SelecaoColegioScalarWhereInput;
    data: Prisma.XOR<Prisma.SelecaoColegioUpdateManyMutationInput, Prisma.SelecaoColegioUncheckedUpdateManyWithoutMembroColegioInput>;
};
export type SelecaoColegioCreateManyEdicaoInput = {
    id?: string;
    categoriaId: string;
    inscricaoStartupId: string;
    membroColegioId: string;
    status: $Enums.StatusSelecaoColegio;
    conflitoInteresse?: boolean;
    createdAt?: Date | string;
};
export type SelecaoColegioUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusSelecaoColegioFieldUpdateOperationsInput | $Enums.StatusSelecaoColegio;
    conflitoInteresse?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutSelecoesColegioNestedInput;
    inscricaoStartup?: Prisma.InscricaoStartupUpdateOneRequiredWithoutSelecoesColegioNestedInput;
    membroColegio?: Prisma.MembroColegioUpdateOneRequiredWithoutSelecoesColegioNestedInput;
};
export type SelecaoColegioUncheckedUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    membroColegioId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusSelecaoColegioFieldUpdateOperationsInput | $Enums.StatusSelecaoColegio;
    conflitoInteresse?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SelecaoColegioUncheckedUpdateManyWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    membroColegioId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusSelecaoColegioFieldUpdateOperationsInput | $Enums.StatusSelecaoColegio;
    conflitoInteresse?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SelecaoColegioCreateManyInscricaoStartupInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    membroColegioId: string;
    status: $Enums.StatusSelecaoColegio;
    conflitoInteresse?: boolean;
    createdAt?: Date | string;
};
export type SelecaoColegioUpdateWithoutInscricaoStartupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusSelecaoColegioFieldUpdateOperationsInput | $Enums.StatusSelecaoColegio;
    conflitoInteresse?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutSelecoesColegioNestedInput;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutSelecoesColegioNestedInput;
    membroColegio?: Prisma.MembroColegioUpdateOneRequiredWithoutSelecoesColegioNestedInput;
};
export type SelecaoColegioUncheckedUpdateWithoutInscricaoStartupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    membroColegioId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusSelecaoColegioFieldUpdateOperationsInput | $Enums.StatusSelecaoColegio;
    conflitoInteresse?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SelecaoColegioUncheckedUpdateManyWithoutInscricaoStartupInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    membroColegioId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusSelecaoColegioFieldUpdateOperationsInput | $Enums.StatusSelecaoColegio;
    conflitoInteresse?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SelecaoColegioCreateManyCategoriaInput = {
    id?: string;
    edicaoId: string;
    inscricaoStartupId: string;
    membroColegioId: string;
    status: $Enums.StatusSelecaoColegio;
    conflitoInteresse?: boolean;
    createdAt?: Date | string;
};
export type SelecaoColegioUpdateWithoutCategoriaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusSelecaoColegioFieldUpdateOperationsInput | $Enums.StatusSelecaoColegio;
    conflitoInteresse?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutSelecoesColegioNestedInput;
    inscricaoStartup?: Prisma.InscricaoStartupUpdateOneRequiredWithoutSelecoesColegioNestedInput;
    membroColegio?: Prisma.MembroColegioUpdateOneRequiredWithoutSelecoesColegioNestedInput;
};
export type SelecaoColegioUncheckedUpdateWithoutCategoriaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    membroColegioId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusSelecaoColegioFieldUpdateOperationsInput | $Enums.StatusSelecaoColegio;
    conflitoInteresse?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SelecaoColegioUncheckedUpdateManyWithoutCategoriaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    membroColegioId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusSelecaoColegioFieldUpdateOperationsInput | $Enums.StatusSelecaoColegio;
    conflitoInteresse?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SelecaoColegioCreateManyMembroColegioInput = {
    id?: string;
    edicaoId: string;
    categoriaId: string;
    inscricaoStartupId: string;
    status: $Enums.StatusSelecaoColegio;
    conflitoInteresse?: boolean;
    createdAt?: Date | string;
};
export type SelecaoColegioUpdateWithoutMembroColegioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusSelecaoColegioFieldUpdateOperationsInput | $Enums.StatusSelecaoColegio;
    conflitoInteresse?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutSelecoesColegioNestedInput;
    categoria?: Prisma.CategoriaUpdateOneRequiredWithoutSelecoesColegioNestedInput;
    inscricaoStartup?: Prisma.InscricaoStartupUpdateOneRequiredWithoutSelecoesColegioNestedInput;
};
export type SelecaoColegioUncheckedUpdateWithoutMembroColegioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusSelecaoColegioFieldUpdateOperationsInput | $Enums.StatusSelecaoColegio;
    conflitoInteresse?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SelecaoColegioUncheckedUpdateManyWithoutMembroColegioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    categoriaId?: Prisma.StringFieldUpdateOperationsInput | string;
    inscricaoStartupId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumStatusSelecaoColegioFieldUpdateOperationsInput | $Enums.StatusSelecaoColegio;
    conflitoInteresse?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SelecaoColegioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    categoriaId?: boolean;
    inscricaoStartupId?: boolean;
    membroColegioId?: boolean;
    status?: boolean;
    conflitoInteresse?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    inscricaoStartup?: boolean | Prisma.InscricaoStartupDefaultArgs<ExtArgs>;
    membroColegio?: boolean | Prisma.MembroColegioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["selecaoColegio"]>;
export type SelecaoColegioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    categoriaId?: boolean;
    inscricaoStartupId?: boolean;
    membroColegioId?: boolean;
    status?: boolean;
    conflitoInteresse?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    inscricaoStartup?: boolean | Prisma.InscricaoStartupDefaultArgs<ExtArgs>;
    membroColegio?: boolean | Prisma.MembroColegioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["selecaoColegio"]>;
export type SelecaoColegioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    categoriaId?: boolean;
    inscricaoStartupId?: boolean;
    membroColegioId?: boolean;
    status?: boolean;
    conflitoInteresse?: boolean;
    createdAt?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    inscricaoStartup?: boolean | Prisma.InscricaoStartupDefaultArgs<ExtArgs>;
    membroColegio?: boolean | Prisma.MembroColegioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["selecaoColegio"]>;
export type SelecaoColegioSelectScalar = {
    id?: boolean;
    edicaoId?: boolean;
    categoriaId?: boolean;
    inscricaoStartupId?: boolean;
    membroColegioId?: boolean;
    status?: boolean;
    conflitoInteresse?: boolean;
    createdAt?: boolean;
};
export type SelecaoColegioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "edicaoId" | "categoriaId" | "inscricaoStartupId" | "membroColegioId" | "status" | "conflitoInteresse" | "createdAt", ExtArgs["result"]["selecaoColegio"]>;
export type SelecaoColegioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    inscricaoStartup?: boolean | Prisma.InscricaoStartupDefaultArgs<ExtArgs>;
    membroColegio?: boolean | Prisma.MembroColegioDefaultArgs<ExtArgs>;
};
export type SelecaoColegioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    inscricaoStartup?: boolean | Prisma.InscricaoStartupDefaultArgs<ExtArgs>;
    membroColegio?: boolean | Prisma.MembroColegioDefaultArgs<ExtArgs>;
};
export type SelecaoColegioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    categoria?: boolean | Prisma.CategoriaDefaultArgs<ExtArgs>;
    inscricaoStartup?: boolean | Prisma.InscricaoStartupDefaultArgs<ExtArgs>;
    membroColegio?: boolean | Prisma.MembroColegioDefaultArgs<ExtArgs>;
};
export type $SelecaoColegioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SelecaoColegio";
    objects: {
        edicao: Prisma.$EdicaoPayload<ExtArgs>;
        categoria: Prisma.$CategoriaPayload<ExtArgs>;
        inscricaoStartup: Prisma.$InscricaoStartupPayload<ExtArgs>;
        membroColegio: Prisma.$MembroColegioPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        edicaoId: string;
        categoriaId: string;
        inscricaoStartupId: string;
        membroColegioId: string;
        status: $Enums.StatusSelecaoColegio;
        conflitoInteresse: boolean;
        createdAt: Date;
    }, ExtArgs["result"]["selecaoColegio"]>;
    composites: {};
};
export type SelecaoColegioGetPayload<S extends boolean | null | undefined | SelecaoColegioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SelecaoColegioPayload, S>;
export type SelecaoColegioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SelecaoColegioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SelecaoColegioCountAggregateInputType | true;
};
export interface SelecaoColegioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SelecaoColegio'];
        meta: {
            name: 'SelecaoColegio';
        };
    };
    findUnique<T extends SelecaoColegioFindUniqueArgs>(args: Prisma.SelectSubset<T, SelecaoColegioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SelecaoColegioClient<runtime.Types.Result.GetResult<Prisma.$SelecaoColegioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SelecaoColegioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SelecaoColegioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SelecaoColegioClient<runtime.Types.Result.GetResult<Prisma.$SelecaoColegioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SelecaoColegioFindFirstArgs>(args?: Prisma.SelectSubset<T, SelecaoColegioFindFirstArgs<ExtArgs>>): Prisma.Prisma__SelecaoColegioClient<runtime.Types.Result.GetResult<Prisma.$SelecaoColegioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SelecaoColegioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SelecaoColegioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SelecaoColegioClient<runtime.Types.Result.GetResult<Prisma.$SelecaoColegioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SelecaoColegioFindManyArgs>(args?: Prisma.SelectSubset<T, SelecaoColegioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SelecaoColegioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SelecaoColegioCreateArgs>(args: Prisma.SelectSubset<T, SelecaoColegioCreateArgs<ExtArgs>>): Prisma.Prisma__SelecaoColegioClient<runtime.Types.Result.GetResult<Prisma.$SelecaoColegioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SelecaoColegioCreateManyArgs>(args?: Prisma.SelectSubset<T, SelecaoColegioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SelecaoColegioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SelecaoColegioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SelecaoColegioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SelecaoColegioDeleteArgs>(args: Prisma.SelectSubset<T, SelecaoColegioDeleteArgs<ExtArgs>>): Prisma.Prisma__SelecaoColegioClient<runtime.Types.Result.GetResult<Prisma.$SelecaoColegioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SelecaoColegioUpdateArgs>(args: Prisma.SelectSubset<T, SelecaoColegioUpdateArgs<ExtArgs>>): Prisma.Prisma__SelecaoColegioClient<runtime.Types.Result.GetResult<Prisma.$SelecaoColegioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SelecaoColegioDeleteManyArgs>(args?: Prisma.SelectSubset<T, SelecaoColegioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SelecaoColegioUpdateManyArgs>(args: Prisma.SelectSubset<T, SelecaoColegioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SelecaoColegioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SelecaoColegioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SelecaoColegioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SelecaoColegioUpsertArgs>(args: Prisma.SelectSubset<T, SelecaoColegioUpsertArgs<ExtArgs>>): Prisma.Prisma__SelecaoColegioClient<runtime.Types.Result.GetResult<Prisma.$SelecaoColegioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SelecaoColegioCountArgs>(args?: Prisma.Subset<T, SelecaoColegioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SelecaoColegioCountAggregateOutputType> : number>;
    aggregate<T extends SelecaoColegioAggregateArgs>(args: Prisma.Subset<T, SelecaoColegioAggregateArgs>): Prisma.PrismaPromise<GetSelecaoColegioAggregateType<T>>;
    groupBy<T extends SelecaoColegioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SelecaoColegioGroupByArgs['orderBy'];
    } : {
        orderBy?: SelecaoColegioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SelecaoColegioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSelecaoColegioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SelecaoColegioFieldRefs;
}
export interface Prisma__SelecaoColegioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    edicao<T extends Prisma.EdicaoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EdicaoDefaultArgs<ExtArgs>>): Prisma.Prisma__EdicaoClient<runtime.Types.Result.GetResult<Prisma.$EdicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    categoria<T extends Prisma.CategoriaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CategoriaDefaultArgs<ExtArgs>>): Prisma.Prisma__CategoriaClient<runtime.Types.Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    inscricaoStartup<T extends Prisma.InscricaoStartupDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InscricaoStartupDefaultArgs<ExtArgs>>): Prisma.Prisma__InscricaoStartupClient<runtime.Types.Result.GetResult<Prisma.$InscricaoStartupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    membroColegio<T extends Prisma.MembroColegioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MembroColegioDefaultArgs<ExtArgs>>): Prisma.Prisma__MembroColegioClient<runtime.Types.Result.GetResult<Prisma.$MembroColegioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SelecaoColegioFieldRefs {
    readonly id: Prisma.FieldRef<"SelecaoColegio", 'String'>;
    readonly edicaoId: Prisma.FieldRef<"SelecaoColegio", 'String'>;
    readonly categoriaId: Prisma.FieldRef<"SelecaoColegio", 'String'>;
    readonly inscricaoStartupId: Prisma.FieldRef<"SelecaoColegio", 'String'>;
    readonly membroColegioId: Prisma.FieldRef<"SelecaoColegio", 'String'>;
    readonly status: Prisma.FieldRef<"SelecaoColegio", 'StatusSelecaoColegio'>;
    readonly conflitoInteresse: Prisma.FieldRef<"SelecaoColegio", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"SelecaoColegio", 'DateTime'>;
}
export type SelecaoColegioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SelecaoColegioSelect<ExtArgs> | null;
    omit?: Prisma.SelecaoColegioOmit<ExtArgs> | null;
    include?: Prisma.SelecaoColegioInclude<ExtArgs> | null;
    where: Prisma.SelecaoColegioWhereUniqueInput;
};
export type SelecaoColegioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SelecaoColegioSelect<ExtArgs> | null;
    omit?: Prisma.SelecaoColegioOmit<ExtArgs> | null;
    include?: Prisma.SelecaoColegioInclude<ExtArgs> | null;
    where: Prisma.SelecaoColegioWhereUniqueInput;
};
export type SelecaoColegioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SelecaoColegioSelect<ExtArgs> | null;
    omit?: Prisma.SelecaoColegioOmit<ExtArgs> | null;
    include?: Prisma.SelecaoColegioInclude<ExtArgs> | null;
    where?: Prisma.SelecaoColegioWhereInput;
    orderBy?: Prisma.SelecaoColegioOrderByWithRelationInput | Prisma.SelecaoColegioOrderByWithRelationInput[];
    cursor?: Prisma.SelecaoColegioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SelecaoColegioScalarFieldEnum | Prisma.SelecaoColegioScalarFieldEnum[];
};
export type SelecaoColegioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SelecaoColegioSelect<ExtArgs> | null;
    omit?: Prisma.SelecaoColegioOmit<ExtArgs> | null;
    include?: Prisma.SelecaoColegioInclude<ExtArgs> | null;
    where?: Prisma.SelecaoColegioWhereInput;
    orderBy?: Prisma.SelecaoColegioOrderByWithRelationInput | Prisma.SelecaoColegioOrderByWithRelationInput[];
    cursor?: Prisma.SelecaoColegioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SelecaoColegioScalarFieldEnum | Prisma.SelecaoColegioScalarFieldEnum[];
};
export type SelecaoColegioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SelecaoColegioSelect<ExtArgs> | null;
    omit?: Prisma.SelecaoColegioOmit<ExtArgs> | null;
    include?: Prisma.SelecaoColegioInclude<ExtArgs> | null;
    where?: Prisma.SelecaoColegioWhereInput;
    orderBy?: Prisma.SelecaoColegioOrderByWithRelationInput | Prisma.SelecaoColegioOrderByWithRelationInput[];
    cursor?: Prisma.SelecaoColegioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SelecaoColegioScalarFieldEnum | Prisma.SelecaoColegioScalarFieldEnum[];
};
export type SelecaoColegioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SelecaoColegioSelect<ExtArgs> | null;
    omit?: Prisma.SelecaoColegioOmit<ExtArgs> | null;
    include?: Prisma.SelecaoColegioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SelecaoColegioCreateInput, Prisma.SelecaoColegioUncheckedCreateInput>;
};
export type SelecaoColegioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SelecaoColegioCreateManyInput | Prisma.SelecaoColegioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SelecaoColegioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SelecaoColegioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SelecaoColegioOmit<ExtArgs> | null;
    data: Prisma.SelecaoColegioCreateManyInput | Prisma.SelecaoColegioCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SelecaoColegioIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SelecaoColegioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SelecaoColegioSelect<ExtArgs> | null;
    omit?: Prisma.SelecaoColegioOmit<ExtArgs> | null;
    include?: Prisma.SelecaoColegioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SelecaoColegioUpdateInput, Prisma.SelecaoColegioUncheckedUpdateInput>;
    where: Prisma.SelecaoColegioWhereUniqueInput;
};
export type SelecaoColegioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SelecaoColegioUpdateManyMutationInput, Prisma.SelecaoColegioUncheckedUpdateManyInput>;
    where?: Prisma.SelecaoColegioWhereInput;
    limit?: number;
};
export type SelecaoColegioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SelecaoColegioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SelecaoColegioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SelecaoColegioUpdateManyMutationInput, Prisma.SelecaoColegioUncheckedUpdateManyInput>;
    where?: Prisma.SelecaoColegioWhereInput;
    limit?: number;
    include?: Prisma.SelecaoColegioIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SelecaoColegioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SelecaoColegioSelect<ExtArgs> | null;
    omit?: Prisma.SelecaoColegioOmit<ExtArgs> | null;
    include?: Prisma.SelecaoColegioInclude<ExtArgs> | null;
    where: Prisma.SelecaoColegioWhereUniqueInput;
    create: Prisma.XOR<Prisma.SelecaoColegioCreateInput, Prisma.SelecaoColegioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SelecaoColegioUpdateInput, Prisma.SelecaoColegioUncheckedUpdateInput>;
};
export type SelecaoColegioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SelecaoColegioSelect<ExtArgs> | null;
    omit?: Prisma.SelecaoColegioOmit<ExtArgs> | null;
    include?: Prisma.SelecaoColegioInclude<ExtArgs> | null;
    where: Prisma.SelecaoColegioWhereUniqueInput;
};
export type SelecaoColegioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SelecaoColegioWhereInput;
    limit?: number;
};
export type SelecaoColegioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SelecaoColegioSelect<ExtArgs> | null;
    omit?: Prisma.SelecaoColegioOmit<ExtArgs> | null;
    include?: Prisma.SelecaoColegioInclude<ExtArgs> | null;
};
