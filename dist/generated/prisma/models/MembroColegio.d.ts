import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type MembroColegioModel = runtime.Types.Result.DefaultSelection<Prisma.$MembroColegioPayload>;
export type AggregateMembroColegio = {
    _count: MembroColegioCountAggregateOutputType | null;
    _min: MembroColegioMinAggregateOutputType | null;
    _max: MembroColegioMaxAggregateOutputType | null;
};
export type MembroColegioMinAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    comunidadeId: string | null;
    liderId: string | null;
    apontadoEm: Date | null;
    ativo: boolean | null;
};
export type MembroColegioMaxAggregateOutputType = {
    id: string | null;
    edicaoId: string | null;
    comunidadeId: string | null;
    liderId: string | null;
    apontadoEm: Date | null;
    ativo: boolean | null;
};
export type MembroColegioCountAggregateOutputType = {
    id: number;
    edicaoId: number;
    comunidadeId: number;
    liderId: number;
    apontadoEm: number;
    ativo: number;
    _all: number;
};
export type MembroColegioMinAggregateInputType = {
    id?: true;
    edicaoId?: true;
    comunidadeId?: true;
    liderId?: true;
    apontadoEm?: true;
    ativo?: true;
};
export type MembroColegioMaxAggregateInputType = {
    id?: true;
    edicaoId?: true;
    comunidadeId?: true;
    liderId?: true;
    apontadoEm?: true;
    ativo?: true;
};
export type MembroColegioCountAggregateInputType = {
    id?: true;
    edicaoId?: true;
    comunidadeId?: true;
    liderId?: true;
    apontadoEm?: true;
    ativo?: true;
    _all?: true;
};
export type MembroColegioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MembroColegioWhereInput;
    orderBy?: Prisma.MembroColegioOrderByWithRelationInput | Prisma.MembroColegioOrderByWithRelationInput[];
    cursor?: Prisma.MembroColegioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MembroColegioCountAggregateInputType;
    _min?: MembroColegioMinAggregateInputType;
    _max?: MembroColegioMaxAggregateInputType;
};
export type GetMembroColegioAggregateType<T extends MembroColegioAggregateArgs> = {
    [P in keyof T & keyof AggregateMembroColegio]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMembroColegio[P]> : Prisma.GetScalarType<T[P], AggregateMembroColegio[P]>;
};
export type MembroColegioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MembroColegioWhereInput;
    orderBy?: Prisma.MembroColegioOrderByWithAggregationInput | Prisma.MembroColegioOrderByWithAggregationInput[];
    by: Prisma.MembroColegioScalarFieldEnum[] | Prisma.MembroColegioScalarFieldEnum;
    having?: Prisma.MembroColegioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MembroColegioCountAggregateInputType | true;
    _min?: MembroColegioMinAggregateInputType;
    _max?: MembroColegioMaxAggregateInputType;
};
export type MembroColegioGroupByOutputType = {
    id: string;
    edicaoId: string;
    comunidadeId: string;
    liderId: string;
    apontadoEm: Date;
    ativo: boolean;
    _count: MembroColegioCountAggregateOutputType | null;
    _min: MembroColegioMinAggregateOutputType | null;
    _max: MembroColegioMaxAggregateOutputType | null;
};
export type GetMembroColegioGroupByPayload<T extends MembroColegioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MembroColegioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MembroColegioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MembroColegioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MembroColegioGroupByOutputType[P]>;
}>>;
export type MembroColegioWhereInput = {
    AND?: Prisma.MembroColegioWhereInput | Prisma.MembroColegioWhereInput[];
    OR?: Prisma.MembroColegioWhereInput[];
    NOT?: Prisma.MembroColegioWhereInput | Prisma.MembroColegioWhereInput[];
    id?: Prisma.StringFilter<"MembroColegio"> | string;
    edicaoId?: Prisma.StringFilter<"MembroColegio"> | string;
    comunidadeId?: Prisma.StringFilter<"MembroColegio"> | string;
    liderId?: Prisma.StringFilter<"MembroColegio"> | string;
    apontadoEm?: Prisma.DateTimeFilter<"MembroColegio"> | Date | string;
    ativo?: Prisma.BoolFilter<"MembroColegio"> | boolean;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
    comunidade?: Prisma.XOR<Prisma.ComunidadeScalarRelationFilter, Prisma.ComunidadeWhereInput>;
    lider?: Prisma.XOR<Prisma.LiderScalarRelationFilter, Prisma.LiderWhereInput>;
    selecoesColegio?: Prisma.SelecaoColegioListRelationFilter;
};
export type MembroColegioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    comunidadeId?: Prisma.SortOrder;
    liderId?: Prisma.SortOrder;
    apontadoEm?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    edicao?: Prisma.EdicaoOrderByWithRelationInput;
    comunidade?: Prisma.ComunidadeOrderByWithRelationInput;
    lider?: Prisma.LiderOrderByWithRelationInput;
    selecoesColegio?: Prisma.SelecaoColegioOrderByRelationAggregateInput;
};
export type MembroColegioWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    edicaoId_liderId?: Prisma.MembroColegioEdicaoIdLiderIdCompoundUniqueInput;
    edicaoId_comunidadeId_liderId?: Prisma.MembroColegioEdicaoIdComunidadeIdLiderIdCompoundUniqueInput;
    AND?: Prisma.MembroColegioWhereInput | Prisma.MembroColegioWhereInput[];
    OR?: Prisma.MembroColegioWhereInput[];
    NOT?: Prisma.MembroColegioWhereInput | Prisma.MembroColegioWhereInput[];
    edicaoId?: Prisma.StringFilter<"MembroColegio"> | string;
    comunidadeId?: Prisma.StringFilter<"MembroColegio"> | string;
    liderId?: Prisma.StringFilter<"MembroColegio"> | string;
    apontadoEm?: Prisma.DateTimeFilter<"MembroColegio"> | Date | string;
    ativo?: Prisma.BoolFilter<"MembroColegio"> | boolean;
    edicao?: Prisma.XOR<Prisma.EdicaoScalarRelationFilter, Prisma.EdicaoWhereInput>;
    comunidade?: Prisma.XOR<Prisma.ComunidadeScalarRelationFilter, Prisma.ComunidadeWhereInput>;
    lider?: Prisma.XOR<Prisma.LiderScalarRelationFilter, Prisma.LiderWhereInput>;
    selecoesColegio?: Prisma.SelecaoColegioListRelationFilter;
}, "id" | "edicaoId_liderId" | "edicaoId_comunidadeId_liderId">;
export type MembroColegioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    comunidadeId?: Prisma.SortOrder;
    liderId?: Prisma.SortOrder;
    apontadoEm?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
    _count?: Prisma.MembroColegioCountOrderByAggregateInput;
    _max?: Prisma.MembroColegioMaxOrderByAggregateInput;
    _min?: Prisma.MembroColegioMinOrderByAggregateInput;
};
export type MembroColegioScalarWhereWithAggregatesInput = {
    AND?: Prisma.MembroColegioScalarWhereWithAggregatesInput | Prisma.MembroColegioScalarWhereWithAggregatesInput[];
    OR?: Prisma.MembroColegioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MembroColegioScalarWhereWithAggregatesInput | Prisma.MembroColegioScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MembroColegio"> | string;
    edicaoId?: Prisma.StringWithAggregatesFilter<"MembroColegio"> | string;
    comunidadeId?: Prisma.StringWithAggregatesFilter<"MembroColegio"> | string;
    liderId?: Prisma.StringWithAggregatesFilter<"MembroColegio"> | string;
    apontadoEm?: Prisma.DateTimeWithAggregatesFilter<"MembroColegio"> | Date | string;
    ativo?: Prisma.BoolWithAggregatesFilter<"MembroColegio"> | boolean;
};
export type MembroColegioCreateInput = {
    id?: string;
    apontadoEm?: Date | string;
    ativo?: boolean;
    edicao: Prisma.EdicaoCreateNestedOneWithoutMembrosColegioInput;
    comunidade: Prisma.ComunidadeCreateNestedOneWithoutMembrosColegioInput;
    lider: Prisma.LiderCreateNestedOneWithoutMembrosColegioInput;
    selecoesColegio?: Prisma.SelecaoColegioCreateNestedManyWithoutMembroColegioInput;
};
export type MembroColegioUncheckedCreateInput = {
    id?: string;
    edicaoId: string;
    comunidadeId: string;
    liderId: string;
    apontadoEm?: Date | string;
    ativo?: boolean;
    selecoesColegio?: Prisma.SelecaoColegioUncheckedCreateNestedManyWithoutMembroColegioInput;
};
export type MembroColegioUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    apontadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutMembrosColegioNestedInput;
    comunidade?: Prisma.ComunidadeUpdateOneRequiredWithoutMembrosColegioNestedInput;
    lider?: Prisma.LiderUpdateOneRequiredWithoutMembrosColegioNestedInput;
    selecoesColegio?: Prisma.SelecaoColegioUpdateManyWithoutMembroColegioNestedInput;
};
export type MembroColegioUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    liderId?: Prisma.StringFieldUpdateOperationsInput | string;
    apontadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    selecoesColegio?: Prisma.SelecaoColegioUncheckedUpdateManyWithoutMembroColegioNestedInput;
};
export type MembroColegioCreateManyInput = {
    id?: string;
    edicaoId: string;
    comunidadeId: string;
    liderId: string;
    apontadoEm?: Date | string;
    ativo?: boolean;
};
export type MembroColegioUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    apontadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type MembroColegioUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    liderId?: Prisma.StringFieldUpdateOperationsInput | string;
    apontadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type MembroColegioListRelationFilter = {
    every?: Prisma.MembroColegioWhereInput;
    some?: Prisma.MembroColegioWhereInput;
    none?: Prisma.MembroColegioWhereInput;
};
export type MembroColegioOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MembroColegioEdicaoIdLiderIdCompoundUniqueInput = {
    edicaoId: string;
    liderId: string;
};
export type MembroColegioEdicaoIdComunidadeIdLiderIdCompoundUniqueInput = {
    edicaoId: string;
    comunidadeId: string;
    liderId: string;
};
export type MembroColegioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    comunidadeId?: Prisma.SortOrder;
    liderId?: Prisma.SortOrder;
    apontadoEm?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
};
export type MembroColegioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    comunidadeId?: Prisma.SortOrder;
    liderId?: Prisma.SortOrder;
    apontadoEm?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
};
export type MembroColegioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    edicaoId?: Prisma.SortOrder;
    comunidadeId?: Prisma.SortOrder;
    liderId?: Prisma.SortOrder;
    apontadoEm?: Prisma.SortOrder;
    ativo?: Prisma.SortOrder;
};
export type MembroColegioScalarRelationFilter = {
    is?: Prisma.MembroColegioWhereInput;
    isNot?: Prisma.MembroColegioWhereInput;
};
export type MembroColegioCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.MembroColegioCreateWithoutEdicaoInput, Prisma.MembroColegioUncheckedCreateWithoutEdicaoInput> | Prisma.MembroColegioCreateWithoutEdicaoInput[] | Prisma.MembroColegioUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.MembroColegioCreateOrConnectWithoutEdicaoInput | Prisma.MembroColegioCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.MembroColegioCreateManyEdicaoInputEnvelope;
    connect?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
};
export type MembroColegioUncheckedCreateNestedManyWithoutEdicaoInput = {
    create?: Prisma.XOR<Prisma.MembroColegioCreateWithoutEdicaoInput, Prisma.MembroColegioUncheckedCreateWithoutEdicaoInput> | Prisma.MembroColegioCreateWithoutEdicaoInput[] | Prisma.MembroColegioUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.MembroColegioCreateOrConnectWithoutEdicaoInput | Prisma.MembroColegioCreateOrConnectWithoutEdicaoInput[];
    createMany?: Prisma.MembroColegioCreateManyEdicaoInputEnvelope;
    connect?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
};
export type MembroColegioUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.MembroColegioCreateWithoutEdicaoInput, Prisma.MembroColegioUncheckedCreateWithoutEdicaoInput> | Prisma.MembroColegioCreateWithoutEdicaoInput[] | Prisma.MembroColegioUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.MembroColegioCreateOrConnectWithoutEdicaoInput | Prisma.MembroColegioCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.MembroColegioUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.MembroColegioUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.MembroColegioCreateManyEdicaoInputEnvelope;
    set?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
    disconnect?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
    delete?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
    connect?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
    update?: Prisma.MembroColegioUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.MembroColegioUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.MembroColegioUpdateManyWithWhereWithoutEdicaoInput | Prisma.MembroColegioUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.MembroColegioScalarWhereInput | Prisma.MembroColegioScalarWhereInput[];
};
export type MembroColegioUncheckedUpdateManyWithoutEdicaoNestedInput = {
    create?: Prisma.XOR<Prisma.MembroColegioCreateWithoutEdicaoInput, Prisma.MembroColegioUncheckedCreateWithoutEdicaoInput> | Prisma.MembroColegioCreateWithoutEdicaoInput[] | Prisma.MembroColegioUncheckedCreateWithoutEdicaoInput[];
    connectOrCreate?: Prisma.MembroColegioCreateOrConnectWithoutEdicaoInput | Prisma.MembroColegioCreateOrConnectWithoutEdicaoInput[];
    upsert?: Prisma.MembroColegioUpsertWithWhereUniqueWithoutEdicaoInput | Prisma.MembroColegioUpsertWithWhereUniqueWithoutEdicaoInput[];
    createMany?: Prisma.MembroColegioCreateManyEdicaoInputEnvelope;
    set?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
    disconnect?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
    delete?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
    connect?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
    update?: Prisma.MembroColegioUpdateWithWhereUniqueWithoutEdicaoInput | Prisma.MembroColegioUpdateWithWhereUniqueWithoutEdicaoInput[];
    updateMany?: Prisma.MembroColegioUpdateManyWithWhereWithoutEdicaoInput | Prisma.MembroColegioUpdateManyWithWhereWithoutEdicaoInput[];
    deleteMany?: Prisma.MembroColegioScalarWhereInput | Prisma.MembroColegioScalarWhereInput[];
};
export type MembroColegioCreateNestedManyWithoutComunidadeInput = {
    create?: Prisma.XOR<Prisma.MembroColegioCreateWithoutComunidadeInput, Prisma.MembroColegioUncheckedCreateWithoutComunidadeInput> | Prisma.MembroColegioCreateWithoutComunidadeInput[] | Prisma.MembroColegioUncheckedCreateWithoutComunidadeInput[];
    connectOrCreate?: Prisma.MembroColegioCreateOrConnectWithoutComunidadeInput | Prisma.MembroColegioCreateOrConnectWithoutComunidadeInput[];
    createMany?: Prisma.MembroColegioCreateManyComunidadeInputEnvelope;
    connect?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
};
export type MembroColegioUncheckedCreateNestedManyWithoutComunidadeInput = {
    create?: Prisma.XOR<Prisma.MembroColegioCreateWithoutComunidadeInput, Prisma.MembroColegioUncheckedCreateWithoutComunidadeInput> | Prisma.MembroColegioCreateWithoutComunidadeInput[] | Prisma.MembroColegioUncheckedCreateWithoutComunidadeInput[];
    connectOrCreate?: Prisma.MembroColegioCreateOrConnectWithoutComunidadeInput | Prisma.MembroColegioCreateOrConnectWithoutComunidadeInput[];
    createMany?: Prisma.MembroColegioCreateManyComunidadeInputEnvelope;
    connect?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
};
export type MembroColegioUpdateManyWithoutComunidadeNestedInput = {
    create?: Prisma.XOR<Prisma.MembroColegioCreateWithoutComunidadeInput, Prisma.MembroColegioUncheckedCreateWithoutComunidadeInput> | Prisma.MembroColegioCreateWithoutComunidadeInput[] | Prisma.MembroColegioUncheckedCreateWithoutComunidadeInput[];
    connectOrCreate?: Prisma.MembroColegioCreateOrConnectWithoutComunidadeInput | Prisma.MembroColegioCreateOrConnectWithoutComunidadeInput[];
    upsert?: Prisma.MembroColegioUpsertWithWhereUniqueWithoutComunidadeInput | Prisma.MembroColegioUpsertWithWhereUniqueWithoutComunidadeInput[];
    createMany?: Prisma.MembroColegioCreateManyComunidadeInputEnvelope;
    set?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
    disconnect?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
    delete?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
    connect?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
    update?: Prisma.MembroColegioUpdateWithWhereUniqueWithoutComunidadeInput | Prisma.MembroColegioUpdateWithWhereUniqueWithoutComunidadeInput[];
    updateMany?: Prisma.MembroColegioUpdateManyWithWhereWithoutComunidadeInput | Prisma.MembroColegioUpdateManyWithWhereWithoutComunidadeInput[];
    deleteMany?: Prisma.MembroColegioScalarWhereInput | Prisma.MembroColegioScalarWhereInput[];
};
export type MembroColegioUncheckedUpdateManyWithoutComunidadeNestedInput = {
    create?: Prisma.XOR<Prisma.MembroColegioCreateWithoutComunidadeInput, Prisma.MembroColegioUncheckedCreateWithoutComunidadeInput> | Prisma.MembroColegioCreateWithoutComunidadeInput[] | Prisma.MembroColegioUncheckedCreateWithoutComunidadeInput[];
    connectOrCreate?: Prisma.MembroColegioCreateOrConnectWithoutComunidadeInput | Prisma.MembroColegioCreateOrConnectWithoutComunidadeInput[];
    upsert?: Prisma.MembroColegioUpsertWithWhereUniqueWithoutComunidadeInput | Prisma.MembroColegioUpsertWithWhereUniqueWithoutComunidadeInput[];
    createMany?: Prisma.MembroColegioCreateManyComunidadeInputEnvelope;
    set?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
    disconnect?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
    delete?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
    connect?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
    update?: Prisma.MembroColegioUpdateWithWhereUniqueWithoutComunidadeInput | Prisma.MembroColegioUpdateWithWhereUniqueWithoutComunidadeInput[];
    updateMany?: Prisma.MembroColegioUpdateManyWithWhereWithoutComunidadeInput | Prisma.MembroColegioUpdateManyWithWhereWithoutComunidadeInput[];
    deleteMany?: Prisma.MembroColegioScalarWhereInput | Prisma.MembroColegioScalarWhereInput[];
};
export type MembroColegioCreateNestedManyWithoutLiderInput = {
    create?: Prisma.XOR<Prisma.MembroColegioCreateWithoutLiderInput, Prisma.MembroColegioUncheckedCreateWithoutLiderInput> | Prisma.MembroColegioCreateWithoutLiderInput[] | Prisma.MembroColegioUncheckedCreateWithoutLiderInput[];
    connectOrCreate?: Prisma.MembroColegioCreateOrConnectWithoutLiderInput | Prisma.MembroColegioCreateOrConnectWithoutLiderInput[];
    createMany?: Prisma.MembroColegioCreateManyLiderInputEnvelope;
    connect?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
};
export type MembroColegioUncheckedCreateNestedManyWithoutLiderInput = {
    create?: Prisma.XOR<Prisma.MembroColegioCreateWithoutLiderInput, Prisma.MembroColegioUncheckedCreateWithoutLiderInput> | Prisma.MembroColegioCreateWithoutLiderInput[] | Prisma.MembroColegioUncheckedCreateWithoutLiderInput[];
    connectOrCreate?: Prisma.MembroColegioCreateOrConnectWithoutLiderInput | Prisma.MembroColegioCreateOrConnectWithoutLiderInput[];
    createMany?: Prisma.MembroColegioCreateManyLiderInputEnvelope;
    connect?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
};
export type MembroColegioUpdateManyWithoutLiderNestedInput = {
    create?: Prisma.XOR<Prisma.MembroColegioCreateWithoutLiderInput, Prisma.MembroColegioUncheckedCreateWithoutLiderInput> | Prisma.MembroColegioCreateWithoutLiderInput[] | Prisma.MembroColegioUncheckedCreateWithoutLiderInput[];
    connectOrCreate?: Prisma.MembroColegioCreateOrConnectWithoutLiderInput | Prisma.MembroColegioCreateOrConnectWithoutLiderInput[];
    upsert?: Prisma.MembroColegioUpsertWithWhereUniqueWithoutLiderInput | Prisma.MembroColegioUpsertWithWhereUniqueWithoutLiderInput[];
    createMany?: Prisma.MembroColegioCreateManyLiderInputEnvelope;
    set?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
    disconnect?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
    delete?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
    connect?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
    update?: Prisma.MembroColegioUpdateWithWhereUniqueWithoutLiderInput | Prisma.MembroColegioUpdateWithWhereUniqueWithoutLiderInput[];
    updateMany?: Prisma.MembroColegioUpdateManyWithWhereWithoutLiderInput | Prisma.MembroColegioUpdateManyWithWhereWithoutLiderInput[];
    deleteMany?: Prisma.MembroColegioScalarWhereInput | Prisma.MembroColegioScalarWhereInput[];
};
export type MembroColegioUncheckedUpdateManyWithoutLiderNestedInput = {
    create?: Prisma.XOR<Prisma.MembroColegioCreateWithoutLiderInput, Prisma.MembroColegioUncheckedCreateWithoutLiderInput> | Prisma.MembroColegioCreateWithoutLiderInput[] | Prisma.MembroColegioUncheckedCreateWithoutLiderInput[];
    connectOrCreate?: Prisma.MembroColegioCreateOrConnectWithoutLiderInput | Prisma.MembroColegioCreateOrConnectWithoutLiderInput[];
    upsert?: Prisma.MembroColegioUpsertWithWhereUniqueWithoutLiderInput | Prisma.MembroColegioUpsertWithWhereUniqueWithoutLiderInput[];
    createMany?: Prisma.MembroColegioCreateManyLiderInputEnvelope;
    set?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
    disconnect?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
    delete?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
    connect?: Prisma.MembroColegioWhereUniqueInput | Prisma.MembroColegioWhereUniqueInput[];
    update?: Prisma.MembroColegioUpdateWithWhereUniqueWithoutLiderInput | Prisma.MembroColegioUpdateWithWhereUniqueWithoutLiderInput[];
    updateMany?: Prisma.MembroColegioUpdateManyWithWhereWithoutLiderInput | Prisma.MembroColegioUpdateManyWithWhereWithoutLiderInput[];
    deleteMany?: Prisma.MembroColegioScalarWhereInput | Prisma.MembroColegioScalarWhereInput[];
};
export type MembroColegioCreateNestedOneWithoutSelecoesColegioInput = {
    create?: Prisma.XOR<Prisma.MembroColegioCreateWithoutSelecoesColegioInput, Prisma.MembroColegioUncheckedCreateWithoutSelecoesColegioInput>;
    connectOrCreate?: Prisma.MembroColegioCreateOrConnectWithoutSelecoesColegioInput;
    connect?: Prisma.MembroColegioWhereUniqueInput;
};
export type MembroColegioUpdateOneRequiredWithoutSelecoesColegioNestedInput = {
    create?: Prisma.XOR<Prisma.MembroColegioCreateWithoutSelecoesColegioInput, Prisma.MembroColegioUncheckedCreateWithoutSelecoesColegioInput>;
    connectOrCreate?: Prisma.MembroColegioCreateOrConnectWithoutSelecoesColegioInput;
    upsert?: Prisma.MembroColegioUpsertWithoutSelecoesColegioInput;
    connect?: Prisma.MembroColegioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MembroColegioUpdateToOneWithWhereWithoutSelecoesColegioInput, Prisma.MembroColegioUpdateWithoutSelecoesColegioInput>, Prisma.MembroColegioUncheckedUpdateWithoutSelecoesColegioInput>;
};
export type MembroColegioCreateWithoutEdicaoInput = {
    id?: string;
    apontadoEm?: Date | string;
    ativo?: boolean;
    comunidade: Prisma.ComunidadeCreateNestedOneWithoutMembrosColegioInput;
    lider: Prisma.LiderCreateNestedOneWithoutMembrosColegioInput;
    selecoesColegio?: Prisma.SelecaoColegioCreateNestedManyWithoutMembroColegioInput;
};
export type MembroColegioUncheckedCreateWithoutEdicaoInput = {
    id?: string;
    comunidadeId: string;
    liderId: string;
    apontadoEm?: Date | string;
    ativo?: boolean;
    selecoesColegio?: Prisma.SelecaoColegioUncheckedCreateNestedManyWithoutMembroColegioInput;
};
export type MembroColegioCreateOrConnectWithoutEdicaoInput = {
    where: Prisma.MembroColegioWhereUniqueInput;
    create: Prisma.XOR<Prisma.MembroColegioCreateWithoutEdicaoInput, Prisma.MembroColegioUncheckedCreateWithoutEdicaoInput>;
};
export type MembroColegioCreateManyEdicaoInputEnvelope = {
    data: Prisma.MembroColegioCreateManyEdicaoInput | Prisma.MembroColegioCreateManyEdicaoInput[];
    skipDuplicates?: boolean;
};
export type MembroColegioUpsertWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.MembroColegioWhereUniqueInput;
    update: Prisma.XOR<Prisma.MembroColegioUpdateWithoutEdicaoInput, Prisma.MembroColegioUncheckedUpdateWithoutEdicaoInput>;
    create: Prisma.XOR<Prisma.MembroColegioCreateWithoutEdicaoInput, Prisma.MembroColegioUncheckedCreateWithoutEdicaoInput>;
};
export type MembroColegioUpdateWithWhereUniqueWithoutEdicaoInput = {
    where: Prisma.MembroColegioWhereUniqueInput;
    data: Prisma.XOR<Prisma.MembroColegioUpdateWithoutEdicaoInput, Prisma.MembroColegioUncheckedUpdateWithoutEdicaoInput>;
};
export type MembroColegioUpdateManyWithWhereWithoutEdicaoInput = {
    where: Prisma.MembroColegioScalarWhereInput;
    data: Prisma.XOR<Prisma.MembroColegioUpdateManyMutationInput, Prisma.MembroColegioUncheckedUpdateManyWithoutEdicaoInput>;
};
export type MembroColegioScalarWhereInput = {
    AND?: Prisma.MembroColegioScalarWhereInput | Prisma.MembroColegioScalarWhereInput[];
    OR?: Prisma.MembroColegioScalarWhereInput[];
    NOT?: Prisma.MembroColegioScalarWhereInput | Prisma.MembroColegioScalarWhereInput[];
    id?: Prisma.StringFilter<"MembroColegio"> | string;
    edicaoId?: Prisma.StringFilter<"MembroColegio"> | string;
    comunidadeId?: Prisma.StringFilter<"MembroColegio"> | string;
    liderId?: Prisma.StringFilter<"MembroColegio"> | string;
    apontadoEm?: Prisma.DateTimeFilter<"MembroColegio"> | Date | string;
    ativo?: Prisma.BoolFilter<"MembroColegio"> | boolean;
};
export type MembroColegioCreateWithoutComunidadeInput = {
    id?: string;
    apontadoEm?: Date | string;
    ativo?: boolean;
    edicao: Prisma.EdicaoCreateNestedOneWithoutMembrosColegioInput;
    lider: Prisma.LiderCreateNestedOneWithoutMembrosColegioInput;
    selecoesColegio?: Prisma.SelecaoColegioCreateNestedManyWithoutMembroColegioInput;
};
export type MembroColegioUncheckedCreateWithoutComunidadeInput = {
    id?: string;
    edicaoId: string;
    liderId: string;
    apontadoEm?: Date | string;
    ativo?: boolean;
    selecoesColegio?: Prisma.SelecaoColegioUncheckedCreateNestedManyWithoutMembroColegioInput;
};
export type MembroColegioCreateOrConnectWithoutComunidadeInput = {
    where: Prisma.MembroColegioWhereUniqueInput;
    create: Prisma.XOR<Prisma.MembroColegioCreateWithoutComunidadeInput, Prisma.MembroColegioUncheckedCreateWithoutComunidadeInput>;
};
export type MembroColegioCreateManyComunidadeInputEnvelope = {
    data: Prisma.MembroColegioCreateManyComunidadeInput | Prisma.MembroColegioCreateManyComunidadeInput[];
    skipDuplicates?: boolean;
};
export type MembroColegioUpsertWithWhereUniqueWithoutComunidadeInput = {
    where: Prisma.MembroColegioWhereUniqueInput;
    update: Prisma.XOR<Prisma.MembroColegioUpdateWithoutComunidadeInput, Prisma.MembroColegioUncheckedUpdateWithoutComunidadeInput>;
    create: Prisma.XOR<Prisma.MembroColegioCreateWithoutComunidadeInput, Prisma.MembroColegioUncheckedCreateWithoutComunidadeInput>;
};
export type MembroColegioUpdateWithWhereUniqueWithoutComunidadeInput = {
    where: Prisma.MembroColegioWhereUniqueInput;
    data: Prisma.XOR<Prisma.MembroColegioUpdateWithoutComunidadeInput, Prisma.MembroColegioUncheckedUpdateWithoutComunidadeInput>;
};
export type MembroColegioUpdateManyWithWhereWithoutComunidadeInput = {
    where: Prisma.MembroColegioScalarWhereInput;
    data: Prisma.XOR<Prisma.MembroColegioUpdateManyMutationInput, Prisma.MembroColegioUncheckedUpdateManyWithoutComunidadeInput>;
};
export type MembroColegioCreateWithoutLiderInput = {
    id?: string;
    apontadoEm?: Date | string;
    ativo?: boolean;
    edicao: Prisma.EdicaoCreateNestedOneWithoutMembrosColegioInput;
    comunidade: Prisma.ComunidadeCreateNestedOneWithoutMembrosColegioInput;
    selecoesColegio?: Prisma.SelecaoColegioCreateNestedManyWithoutMembroColegioInput;
};
export type MembroColegioUncheckedCreateWithoutLiderInput = {
    id?: string;
    edicaoId: string;
    comunidadeId: string;
    apontadoEm?: Date | string;
    ativo?: boolean;
    selecoesColegio?: Prisma.SelecaoColegioUncheckedCreateNestedManyWithoutMembroColegioInput;
};
export type MembroColegioCreateOrConnectWithoutLiderInput = {
    where: Prisma.MembroColegioWhereUniqueInput;
    create: Prisma.XOR<Prisma.MembroColegioCreateWithoutLiderInput, Prisma.MembroColegioUncheckedCreateWithoutLiderInput>;
};
export type MembroColegioCreateManyLiderInputEnvelope = {
    data: Prisma.MembroColegioCreateManyLiderInput | Prisma.MembroColegioCreateManyLiderInput[];
    skipDuplicates?: boolean;
};
export type MembroColegioUpsertWithWhereUniqueWithoutLiderInput = {
    where: Prisma.MembroColegioWhereUniqueInput;
    update: Prisma.XOR<Prisma.MembroColegioUpdateWithoutLiderInput, Prisma.MembroColegioUncheckedUpdateWithoutLiderInput>;
    create: Prisma.XOR<Prisma.MembroColegioCreateWithoutLiderInput, Prisma.MembroColegioUncheckedCreateWithoutLiderInput>;
};
export type MembroColegioUpdateWithWhereUniqueWithoutLiderInput = {
    where: Prisma.MembroColegioWhereUniqueInput;
    data: Prisma.XOR<Prisma.MembroColegioUpdateWithoutLiderInput, Prisma.MembroColegioUncheckedUpdateWithoutLiderInput>;
};
export type MembroColegioUpdateManyWithWhereWithoutLiderInput = {
    where: Prisma.MembroColegioScalarWhereInput;
    data: Prisma.XOR<Prisma.MembroColegioUpdateManyMutationInput, Prisma.MembroColegioUncheckedUpdateManyWithoutLiderInput>;
};
export type MembroColegioCreateWithoutSelecoesColegioInput = {
    id?: string;
    apontadoEm?: Date | string;
    ativo?: boolean;
    edicao: Prisma.EdicaoCreateNestedOneWithoutMembrosColegioInput;
    comunidade: Prisma.ComunidadeCreateNestedOneWithoutMembrosColegioInput;
    lider: Prisma.LiderCreateNestedOneWithoutMembrosColegioInput;
};
export type MembroColegioUncheckedCreateWithoutSelecoesColegioInput = {
    id?: string;
    edicaoId: string;
    comunidadeId: string;
    liderId: string;
    apontadoEm?: Date | string;
    ativo?: boolean;
};
export type MembroColegioCreateOrConnectWithoutSelecoesColegioInput = {
    where: Prisma.MembroColegioWhereUniqueInput;
    create: Prisma.XOR<Prisma.MembroColegioCreateWithoutSelecoesColegioInput, Prisma.MembroColegioUncheckedCreateWithoutSelecoesColegioInput>;
};
export type MembroColegioUpsertWithoutSelecoesColegioInput = {
    update: Prisma.XOR<Prisma.MembroColegioUpdateWithoutSelecoesColegioInput, Prisma.MembroColegioUncheckedUpdateWithoutSelecoesColegioInput>;
    create: Prisma.XOR<Prisma.MembroColegioCreateWithoutSelecoesColegioInput, Prisma.MembroColegioUncheckedCreateWithoutSelecoesColegioInput>;
    where?: Prisma.MembroColegioWhereInput;
};
export type MembroColegioUpdateToOneWithWhereWithoutSelecoesColegioInput = {
    where?: Prisma.MembroColegioWhereInput;
    data: Prisma.XOR<Prisma.MembroColegioUpdateWithoutSelecoesColegioInput, Prisma.MembroColegioUncheckedUpdateWithoutSelecoesColegioInput>;
};
export type MembroColegioUpdateWithoutSelecoesColegioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    apontadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutMembrosColegioNestedInput;
    comunidade?: Prisma.ComunidadeUpdateOneRequiredWithoutMembrosColegioNestedInput;
    lider?: Prisma.LiderUpdateOneRequiredWithoutMembrosColegioNestedInput;
};
export type MembroColegioUncheckedUpdateWithoutSelecoesColegioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    liderId?: Prisma.StringFieldUpdateOperationsInput | string;
    apontadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type MembroColegioCreateManyEdicaoInput = {
    id?: string;
    comunidadeId: string;
    liderId: string;
    apontadoEm?: Date | string;
    ativo?: boolean;
};
export type MembroColegioUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    apontadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    comunidade?: Prisma.ComunidadeUpdateOneRequiredWithoutMembrosColegioNestedInput;
    lider?: Prisma.LiderUpdateOneRequiredWithoutMembrosColegioNestedInput;
    selecoesColegio?: Prisma.SelecaoColegioUpdateManyWithoutMembroColegioNestedInput;
};
export type MembroColegioUncheckedUpdateWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    liderId?: Prisma.StringFieldUpdateOperationsInput | string;
    apontadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    selecoesColegio?: Prisma.SelecaoColegioUncheckedUpdateManyWithoutMembroColegioNestedInput;
};
export type MembroColegioUncheckedUpdateManyWithoutEdicaoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    liderId?: Prisma.StringFieldUpdateOperationsInput | string;
    apontadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type MembroColegioCreateManyComunidadeInput = {
    id?: string;
    edicaoId: string;
    liderId: string;
    apontadoEm?: Date | string;
    ativo?: boolean;
};
export type MembroColegioUpdateWithoutComunidadeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    apontadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutMembrosColegioNestedInput;
    lider?: Prisma.LiderUpdateOneRequiredWithoutMembrosColegioNestedInput;
    selecoesColegio?: Prisma.SelecaoColegioUpdateManyWithoutMembroColegioNestedInput;
};
export type MembroColegioUncheckedUpdateWithoutComunidadeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    liderId?: Prisma.StringFieldUpdateOperationsInput | string;
    apontadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    selecoesColegio?: Prisma.SelecaoColegioUncheckedUpdateManyWithoutMembroColegioNestedInput;
};
export type MembroColegioUncheckedUpdateManyWithoutComunidadeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    liderId?: Prisma.StringFieldUpdateOperationsInput | string;
    apontadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type MembroColegioCreateManyLiderInput = {
    id?: string;
    edicaoId: string;
    comunidadeId: string;
    apontadoEm?: Date | string;
    ativo?: boolean;
};
export type MembroColegioUpdateWithoutLiderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    apontadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    edicao?: Prisma.EdicaoUpdateOneRequiredWithoutMembrosColegioNestedInput;
    comunidade?: Prisma.ComunidadeUpdateOneRequiredWithoutMembrosColegioNestedInput;
    selecoesColegio?: Prisma.SelecaoColegioUpdateManyWithoutMembroColegioNestedInput;
};
export type MembroColegioUncheckedUpdateWithoutLiderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    apontadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    selecoesColegio?: Prisma.SelecaoColegioUncheckedUpdateManyWithoutMembroColegioNestedInput;
};
export type MembroColegioUncheckedUpdateManyWithoutLiderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    edicaoId?: Prisma.StringFieldUpdateOperationsInput | string;
    comunidadeId?: Prisma.StringFieldUpdateOperationsInput | string;
    apontadoEm?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ativo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type MembroColegioCountOutputType = {
    selecoesColegio: number;
};
export type MembroColegioCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    selecoesColegio?: boolean | MembroColegioCountOutputTypeCountSelecoesColegioArgs;
};
export type MembroColegioCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembroColegioCountOutputTypeSelect<ExtArgs> | null;
};
export type MembroColegioCountOutputTypeCountSelecoesColegioArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SelecaoColegioWhereInput;
};
export type MembroColegioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    comunidadeId?: boolean;
    liderId?: boolean;
    apontadoEm?: boolean;
    ativo?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    comunidade?: boolean | Prisma.ComunidadeDefaultArgs<ExtArgs>;
    lider?: boolean | Prisma.LiderDefaultArgs<ExtArgs>;
    selecoesColegio?: boolean | Prisma.MembroColegio$selecoesColegioArgs<ExtArgs>;
    _count?: boolean | Prisma.MembroColegioCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["membroColegio"]>;
export type MembroColegioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    comunidadeId?: boolean;
    liderId?: boolean;
    apontadoEm?: boolean;
    ativo?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    comunidade?: boolean | Prisma.ComunidadeDefaultArgs<ExtArgs>;
    lider?: boolean | Prisma.LiderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["membroColegio"]>;
export type MembroColegioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    edicaoId?: boolean;
    comunidadeId?: boolean;
    liderId?: boolean;
    apontadoEm?: boolean;
    ativo?: boolean;
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    comunidade?: boolean | Prisma.ComunidadeDefaultArgs<ExtArgs>;
    lider?: boolean | Prisma.LiderDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["membroColegio"]>;
export type MembroColegioSelectScalar = {
    id?: boolean;
    edicaoId?: boolean;
    comunidadeId?: boolean;
    liderId?: boolean;
    apontadoEm?: boolean;
    ativo?: boolean;
};
export type MembroColegioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "edicaoId" | "comunidadeId" | "liderId" | "apontadoEm" | "ativo", ExtArgs["result"]["membroColegio"]>;
export type MembroColegioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    comunidade?: boolean | Prisma.ComunidadeDefaultArgs<ExtArgs>;
    lider?: boolean | Prisma.LiderDefaultArgs<ExtArgs>;
    selecoesColegio?: boolean | Prisma.MembroColegio$selecoesColegioArgs<ExtArgs>;
    _count?: boolean | Prisma.MembroColegioCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MembroColegioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    comunidade?: boolean | Prisma.ComunidadeDefaultArgs<ExtArgs>;
    lider?: boolean | Prisma.LiderDefaultArgs<ExtArgs>;
};
export type MembroColegioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    edicao?: boolean | Prisma.EdicaoDefaultArgs<ExtArgs>;
    comunidade?: boolean | Prisma.ComunidadeDefaultArgs<ExtArgs>;
    lider?: boolean | Prisma.LiderDefaultArgs<ExtArgs>;
};
export type $MembroColegioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MembroColegio";
    objects: {
        edicao: Prisma.$EdicaoPayload<ExtArgs>;
        comunidade: Prisma.$ComunidadePayload<ExtArgs>;
        lider: Prisma.$LiderPayload<ExtArgs>;
        selecoesColegio: Prisma.$SelecaoColegioPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        edicaoId: string;
        comunidadeId: string;
        liderId: string;
        apontadoEm: Date;
        ativo: boolean;
    }, ExtArgs["result"]["membroColegio"]>;
    composites: {};
};
export type MembroColegioGetPayload<S extends boolean | null | undefined | MembroColegioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MembroColegioPayload, S>;
export type MembroColegioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MembroColegioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MembroColegioCountAggregateInputType | true;
};
export interface MembroColegioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MembroColegio'];
        meta: {
            name: 'MembroColegio';
        };
    };
    findUnique<T extends MembroColegioFindUniqueArgs>(args: Prisma.SelectSubset<T, MembroColegioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MembroColegioClient<runtime.Types.Result.GetResult<Prisma.$MembroColegioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MembroColegioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MembroColegioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MembroColegioClient<runtime.Types.Result.GetResult<Prisma.$MembroColegioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MembroColegioFindFirstArgs>(args?: Prisma.SelectSubset<T, MembroColegioFindFirstArgs<ExtArgs>>): Prisma.Prisma__MembroColegioClient<runtime.Types.Result.GetResult<Prisma.$MembroColegioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MembroColegioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MembroColegioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MembroColegioClient<runtime.Types.Result.GetResult<Prisma.$MembroColegioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MembroColegioFindManyArgs>(args?: Prisma.SelectSubset<T, MembroColegioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MembroColegioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MembroColegioCreateArgs>(args: Prisma.SelectSubset<T, MembroColegioCreateArgs<ExtArgs>>): Prisma.Prisma__MembroColegioClient<runtime.Types.Result.GetResult<Prisma.$MembroColegioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MembroColegioCreateManyArgs>(args?: Prisma.SelectSubset<T, MembroColegioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MembroColegioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MembroColegioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MembroColegioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MembroColegioDeleteArgs>(args: Prisma.SelectSubset<T, MembroColegioDeleteArgs<ExtArgs>>): Prisma.Prisma__MembroColegioClient<runtime.Types.Result.GetResult<Prisma.$MembroColegioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MembroColegioUpdateArgs>(args: Prisma.SelectSubset<T, MembroColegioUpdateArgs<ExtArgs>>): Prisma.Prisma__MembroColegioClient<runtime.Types.Result.GetResult<Prisma.$MembroColegioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MembroColegioDeleteManyArgs>(args?: Prisma.SelectSubset<T, MembroColegioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MembroColegioUpdateManyArgs>(args: Prisma.SelectSubset<T, MembroColegioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MembroColegioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MembroColegioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MembroColegioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MembroColegioUpsertArgs>(args: Prisma.SelectSubset<T, MembroColegioUpsertArgs<ExtArgs>>): Prisma.Prisma__MembroColegioClient<runtime.Types.Result.GetResult<Prisma.$MembroColegioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MembroColegioCountArgs>(args?: Prisma.Subset<T, MembroColegioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MembroColegioCountAggregateOutputType> : number>;
    aggregate<T extends MembroColegioAggregateArgs>(args: Prisma.Subset<T, MembroColegioAggregateArgs>): Prisma.PrismaPromise<GetMembroColegioAggregateType<T>>;
    groupBy<T extends MembroColegioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MembroColegioGroupByArgs['orderBy'];
    } : {
        orderBy?: MembroColegioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MembroColegioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembroColegioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MembroColegioFieldRefs;
}
export interface Prisma__MembroColegioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    edicao<T extends Prisma.EdicaoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EdicaoDefaultArgs<ExtArgs>>): Prisma.Prisma__EdicaoClient<runtime.Types.Result.GetResult<Prisma.$EdicaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    comunidade<T extends Prisma.ComunidadeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ComunidadeDefaultArgs<ExtArgs>>): Prisma.Prisma__ComunidadeClient<runtime.Types.Result.GetResult<Prisma.$ComunidadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    lider<T extends Prisma.LiderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.LiderDefaultArgs<ExtArgs>>): Prisma.Prisma__LiderClient<runtime.Types.Result.GetResult<Prisma.$LiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    selecoesColegio<T extends Prisma.MembroColegio$selecoesColegioArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MembroColegio$selecoesColegioArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SelecaoColegioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MembroColegioFieldRefs {
    readonly id: Prisma.FieldRef<"MembroColegio", 'String'>;
    readonly edicaoId: Prisma.FieldRef<"MembroColegio", 'String'>;
    readonly comunidadeId: Prisma.FieldRef<"MembroColegio", 'String'>;
    readonly liderId: Prisma.FieldRef<"MembroColegio", 'String'>;
    readonly apontadoEm: Prisma.FieldRef<"MembroColegio", 'DateTime'>;
    readonly ativo: Prisma.FieldRef<"MembroColegio", 'Boolean'>;
}
export type MembroColegioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembroColegioSelect<ExtArgs> | null;
    omit?: Prisma.MembroColegioOmit<ExtArgs> | null;
    include?: Prisma.MembroColegioInclude<ExtArgs> | null;
    where: Prisma.MembroColegioWhereUniqueInput;
};
export type MembroColegioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembroColegioSelect<ExtArgs> | null;
    omit?: Prisma.MembroColegioOmit<ExtArgs> | null;
    include?: Prisma.MembroColegioInclude<ExtArgs> | null;
    where: Prisma.MembroColegioWhereUniqueInput;
};
export type MembroColegioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembroColegioSelect<ExtArgs> | null;
    omit?: Prisma.MembroColegioOmit<ExtArgs> | null;
    include?: Prisma.MembroColegioInclude<ExtArgs> | null;
    where?: Prisma.MembroColegioWhereInput;
    orderBy?: Prisma.MembroColegioOrderByWithRelationInput | Prisma.MembroColegioOrderByWithRelationInput[];
    cursor?: Prisma.MembroColegioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MembroColegioScalarFieldEnum | Prisma.MembroColegioScalarFieldEnum[];
};
export type MembroColegioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembroColegioSelect<ExtArgs> | null;
    omit?: Prisma.MembroColegioOmit<ExtArgs> | null;
    include?: Prisma.MembroColegioInclude<ExtArgs> | null;
    where?: Prisma.MembroColegioWhereInput;
    orderBy?: Prisma.MembroColegioOrderByWithRelationInput | Prisma.MembroColegioOrderByWithRelationInput[];
    cursor?: Prisma.MembroColegioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MembroColegioScalarFieldEnum | Prisma.MembroColegioScalarFieldEnum[];
};
export type MembroColegioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembroColegioSelect<ExtArgs> | null;
    omit?: Prisma.MembroColegioOmit<ExtArgs> | null;
    include?: Prisma.MembroColegioInclude<ExtArgs> | null;
    where?: Prisma.MembroColegioWhereInput;
    orderBy?: Prisma.MembroColegioOrderByWithRelationInput | Prisma.MembroColegioOrderByWithRelationInput[];
    cursor?: Prisma.MembroColegioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MembroColegioScalarFieldEnum | Prisma.MembroColegioScalarFieldEnum[];
};
export type MembroColegioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembroColegioSelect<ExtArgs> | null;
    omit?: Prisma.MembroColegioOmit<ExtArgs> | null;
    include?: Prisma.MembroColegioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MembroColegioCreateInput, Prisma.MembroColegioUncheckedCreateInput>;
};
export type MembroColegioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MembroColegioCreateManyInput | Prisma.MembroColegioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MembroColegioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembroColegioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MembroColegioOmit<ExtArgs> | null;
    data: Prisma.MembroColegioCreateManyInput | Prisma.MembroColegioCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MembroColegioIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MembroColegioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembroColegioSelect<ExtArgs> | null;
    omit?: Prisma.MembroColegioOmit<ExtArgs> | null;
    include?: Prisma.MembroColegioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MembroColegioUpdateInput, Prisma.MembroColegioUncheckedUpdateInput>;
    where: Prisma.MembroColegioWhereUniqueInput;
};
export type MembroColegioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MembroColegioUpdateManyMutationInput, Prisma.MembroColegioUncheckedUpdateManyInput>;
    where?: Prisma.MembroColegioWhereInput;
    limit?: number;
};
export type MembroColegioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembroColegioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MembroColegioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MembroColegioUpdateManyMutationInput, Prisma.MembroColegioUncheckedUpdateManyInput>;
    where?: Prisma.MembroColegioWhereInput;
    limit?: number;
    include?: Prisma.MembroColegioIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MembroColegioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembroColegioSelect<ExtArgs> | null;
    omit?: Prisma.MembroColegioOmit<ExtArgs> | null;
    include?: Prisma.MembroColegioInclude<ExtArgs> | null;
    where: Prisma.MembroColegioWhereUniqueInput;
    create: Prisma.XOR<Prisma.MembroColegioCreateInput, Prisma.MembroColegioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MembroColegioUpdateInput, Prisma.MembroColegioUncheckedUpdateInput>;
};
export type MembroColegioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembroColegioSelect<ExtArgs> | null;
    omit?: Prisma.MembroColegioOmit<ExtArgs> | null;
    include?: Prisma.MembroColegioInclude<ExtArgs> | null;
    where: Prisma.MembroColegioWhereUniqueInput;
};
export type MembroColegioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MembroColegioWhereInput;
    limit?: number;
};
export type MembroColegio$selecoesColegioArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MembroColegioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembroColegioSelect<ExtArgs> | null;
    omit?: Prisma.MembroColegioOmit<ExtArgs> | null;
    include?: Prisma.MembroColegioInclude<ExtArgs> | null;
};
