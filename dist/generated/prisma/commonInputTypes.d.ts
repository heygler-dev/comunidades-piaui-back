import type * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums";
import type * as Prisma from "./internal/prismaNamespace";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type EnumFasePremioFilter<$PrismaModel = never> = {
    equals?: $Enums.FasePremio | Prisma.EnumFasePremioFieldRefInput<$PrismaModel>;
    in?: $Enums.FasePremio[] | Prisma.ListEnumFasePremioFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FasePremio[] | Prisma.ListEnumFasePremioFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFasePremioFilter<$PrismaModel> | $Enums.FasePremio;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type EnumFasePremioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FasePremio | Prisma.EnumFasePremioFieldRefInput<$PrismaModel>;
    in?: $Enums.FasePremio[] | Prisma.ListEnumFasePremioFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FasePremio[] | Prisma.ListEnumFasePremioFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFasePremioWithAggregatesFilter<$PrismaModel> | $Enums.FasePremio;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFasePremioFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFasePremioFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type JsonFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>, Required<JsonFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>;
export type JsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type JsonWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonFilter<$PrismaModel>;
};
export type EnumTipoConviteFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoConvite | Prisma.EnumTipoConviteFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoConvite[] | Prisma.ListEnumTipoConviteFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TipoConvite[] | Prisma.ListEnumTipoConviteFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTipoConviteFilter<$PrismaModel> | $Enums.TipoConvite;
};
export type EnumTipoConviteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoConvite | Prisma.EnumTipoConviteFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoConvite[] | Prisma.ListEnumTipoConviteFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TipoConvite[] | Prisma.ListEnumTipoConviteFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTipoConviteWithAggregatesFilter<$PrismaModel> | $Enums.TipoConvite;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoConviteFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoConviteFilter<$PrismaModel>;
};
export type EnumTipoLiderFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoLider | Prisma.EnumTipoLiderFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoLider[] | Prisma.ListEnumTipoLiderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TipoLider[] | Prisma.ListEnumTipoLiderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTipoLiderFilter<$PrismaModel> | $Enums.TipoLider;
};
export type EnumStatusParticipanteFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusParticipante | Prisma.EnumStatusParticipanteFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusParticipante[] | Prisma.ListEnumStatusParticipanteFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatusParticipante[] | Prisma.ListEnumStatusParticipanteFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatusParticipanteFilter<$PrismaModel> | $Enums.StatusParticipante;
};
export type EnumTipoLiderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoLider | Prisma.EnumTipoLiderFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoLider[] | Prisma.ListEnumTipoLiderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TipoLider[] | Prisma.ListEnumTipoLiderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTipoLiderWithAggregatesFilter<$PrismaModel> | $Enums.TipoLider;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoLiderFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoLiderFilter<$PrismaModel>;
};
export type EnumStatusParticipanteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusParticipante | Prisma.EnumStatusParticipanteFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusParticipante[] | Prisma.ListEnumStatusParticipanteFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatusParticipante[] | Prisma.ListEnumStatusParticipanteFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatusParticipanteWithAggregatesFilter<$PrismaModel> | $Enums.StatusParticipante;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatusParticipanteFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatusParticipanteFilter<$PrismaModel>;
};
export type JsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type EnumStatusInscricaoStartupFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusInscricaoStartup | Prisma.EnumStatusInscricaoStartupFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusInscricaoStartup[] | Prisma.ListEnumStatusInscricaoStartupFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatusInscricaoStartup[] | Prisma.ListEnumStatusInscricaoStartupFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatusInscricaoStartupFilter<$PrismaModel> | $Enums.StatusInscricaoStartup;
};
export type EnumOrigemCadastroFilter<$PrismaModel = never> = {
    equals?: $Enums.OrigemCadastro | Prisma.EnumOrigemCadastroFieldRefInput<$PrismaModel>;
    in?: $Enums.OrigemCadastro[] | Prisma.ListEnumOrigemCadastroFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrigemCadastro[] | Prisma.ListEnumOrigemCadastroFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrigemCadastroFilter<$PrismaModel> | $Enums.OrigemCadastro;
};
export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
};
export type EnumStatusInscricaoStartupWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusInscricaoStartup | Prisma.EnumStatusInscricaoStartupFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusInscricaoStartup[] | Prisma.ListEnumStatusInscricaoStartupFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatusInscricaoStartup[] | Prisma.ListEnumStatusInscricaoStartupFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatusInscricaoStartupWithAggregatesFilter<$PrismaModel> | $Enums.StatusInscricaoStartup;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatusInscricaoStartupFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatusInscricaoStartupFilter<$PrismaModel>;
};
export type EnumOrigemCadastroWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrigemCadastro | Prisma.EnumOrigemCadastroFieldRefInput<$PrismaModel>;
    in?: $Enums.OrigemCadastro[] | Prisma.ListEnumOrigemCadastroFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrigemCadastro[] | Prisma.ListEnumOrigemCadastroFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrigemCadastroWithAggregatesFilter<$PrismaModel> | $Enums.OrigemCadastro;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOrigemCadastroFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOrigemCadastroFilter<$PrismaModel>;
};
export type EnumStatusIndicacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusIndicacao | Prisma.EnumStatusIndicacaoFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusIndicacao[] | Prisma.ListEnumStatusIndicacaoFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatusIndicacao[] | Prisma.ListEnumStatusIndicacaoFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatusIndicacaoFilter<$PrismaModel> | $Enums.StatusIndicacao;
};
export type EnumStatusIndicacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusIndicacao | Prisma.EnumStatusIndicacaoFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusIndicacao[] | Prisma.ListEnumStatusIndicacaoFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatusIndicacao[] | Prisma.ListEnumStatusIndicacaoFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatusIndicacaoWithAggregatesFilter<$PrismaModel> | $Enums.StatusIndicacao;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatusIndicacaoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatusIndicacaoFilter<$PrismaModel>;
};
export type EnumStatusSelecaoColegioFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSelecaoColegio | Prisma.EnumStatusSelecaoColegioFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusSelecaoColegio[] | Prisma.ListEnumStatusSelecaoColegioFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatusSelecaoColegio[] | Prisma.ListEnumStatusSelecaoColegioFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatusSelecaoColegioFilter<$PrismaModel> | $Enums.StatusSelecaoColegio;
};
export type EnumStatusSelecaoColegioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSelecaoColegio | Prisma.EnumStatusSelecaoColegioFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusSelecaoColegio[] | Prisma.ListEnumStatusSelecaoColegioFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatusSelecaoColegio[] | Prisma.ListEnumStatusSelecaoColegioFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatusSelecaoColegioWithAggregatesFilter<$PrismaModel> | $Enums.StatusSelecaoColegio;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatusSelecaoColegioFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatusSelecaoColegioFilter<$PrismaModel>;
};
export type EnumStatusTestemunhaApuracaoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTestemunhaApuracao | Prisma.EnumStatusTestemunhaApuracaoFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusTestemunhaApuracao[] | Prisma.ListEnumStatusTestemunhaApuracaoFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatusTestemunhaApuracao[] | Prisma.ListEnumStatusTestemunhaApuracaoFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatusTestemunhaApuracaoFilter<$PrismaModel> | $Enums.StatusTestemunhaApuracao;
};
export type EnumStatusTestemunhaApuracaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTestemunhaApuracao | Prisma.EnumStatusTestemunhaApuracaoFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusTestemunhaApuracao[] | Prisma.ListEnumStatusTestemunhaApuracaoFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatusTestemunhaApuracao[] | Prisma.ListEnumStatusTestemunhaApuracaoFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatusTestemunhaApuracaoWithAggregatesFilter<$PrismaModel> | $Enums.StatusTestemunhaApuracao;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatusTestemunhaApuracaoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatusTestemunhaApuracaoFilter<$PrismaModel>;
};
export type EnumTipoAuditoriaFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAuditoria | Prisma.EnumTipoAuditoriaFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoAuditoria[] | Prisma.ListEnumTipoAuditoriaFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TipoAuditoria[] | Prisma.ListEnumTipoAuditoriaFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTipoAuditoriaFilter<$PrismaModel> | $Enums.TipoAuditoria;
};
export type EnumPapelAuditoriaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PapelAuditoria | Prisma.EnumPapelAuditoriaFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PapelAuditoria[] | Prisma.ListEnumPapelAuditoriaFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PapelAuditoria[] | Prisma.ListEnumPapelAuditoriaFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPapelAuditoriaNullableFilter<$PrismaModel> | $Enums.PapelAuditoria | null;
};
export type EnumTipoAuditoriaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAuditoria | Prisma.EnumTipoAuditoriaFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoAuditoria[] | Prisma.ListEnumTipoAuditoriaFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TipoAuditoria[] | Prisma.ListEnumTipoAuditoriaFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTipoAuditoriaWithAggregatesFilter<$PrismaModel> | $Enums.TipoAuditoria;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoAuditoriaFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoAuditoriaFilter<$PrismaModel>;
};
export type EnumPapelAuditoriaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PapelAuditoria | Prisma.EnumPapelAuditoriaFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PapelAuditoria[] | Prisma.ListEnumPapelAuditoriaFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PapelAuditoria[] | Prisma.ListEnumPapelAuditoriaFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPapelAuditoriaNullableWithAggregatesFilter<$PrismaModel> | $Enums.PapelAuditoria | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPapelAuditoriaNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPapelAuditoriaNullableFilter<$PrismaModel>;
};
export type EnumTipoSolicitacaoCadastroFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoSolicitacaoCadastro | Prisma.EnumTipoSolicitacaoCadastroFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoSolicitacaoCadastro[] | Prisma.ListEnumTipoSolicitacaoCadastroFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TipoSolicitacaoCadastro[] | Prisma.ListEnumTipoSolicitacaoCadastroFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTipoSolicitacaoCadastroFilter<$PrismaModel> | $Enums.TipoSolicitacaoCadastro;
};
export type EnumStatusSolicitacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSolicitacao | Prisma.EnumStatusSolicitacaoFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusSolicitacao[] | Prisma.ListEnumStatusSolicitacaoFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatusSolicitacao[] | Prisma.ListEnumStatusSolicitacaoFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatusSolicitacaoFilter<$PrismaModel> | $Enums.StatusSolicitacao;
};
export type EnumTipoSolicitacaoCadastroWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoSolicitacaoCadastro | Prisma.EnumTipoSolicitacaoCadastroFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoSolicitacaoCadastro[] | Prisma.ListEnumTipoSolicitacaoCadastroFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TipoSolicitacaoCadastro[] | Prisma.ListEnumTipoSolicitacaoCadastroFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTipoSolicitacaoCadastroWithAggregatesFilter<$PrismaModel> | $Enums.TipoSolicitacaoCadastro;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoSolicitacaoCadastroFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoSolicitacaoCadastroFilter<$PrismaModel>;
};
export type EnumStatusSolicitacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSolicitacao | Prisma.EnumStatusSolicitacaoFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusSolicitacao[] | Prisma.ListEnumStatusSolicitacaoFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatusSolicitacao[] | Prisma.ListEnumStatusSolicitacaoFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatusSolicitacaoWithAggregatesFilter<$PrismaModel> | $Enums.StatusSolicitacao;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatusSolicitacaoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatusSolicitacaoFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedEnumFasePremioFilter<$PrismaModel = never> = {
    equals?: $Enums.FasePremio | Prisma.EnumFasePremioFieldRefInput<$PrismaModel>;
    in?: $Enums.FasePremio[] | Prisma.ListEnumFasePremioFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FasePremio[] | Prisma.ListEnumFasePremioFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFasePremioFilter<$PrismaModel> | $Enums.FasePremio;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedEnumFasePremioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FasePremio | Prisma.EnumFasePremioFieldRefInput<$PrismaModel>;
    in?: $Enums.FasePremio[] | Prisma.ListEnumFasePremioFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FasePremio[] | Prisma.ListEnumFasePremioFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFasePremioWithAggregatesFilter<$PrismaModel> | $Enums.FasePremio;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFasePremioFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFasePremioFilter<$PrismaModel>;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedJsonFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedEnumTipoConviteFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoConvite | Prisma.EnumTipoConviteFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoConvite[] | Prisma.ListEnumTipoConviteFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TipoConvite[] | Prisma.ListEnumTipoConviteFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTipoConviteFilter<$PrismaModel> | $Enums.TipoConvite;
};
export type NestedEnumTipoConviteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoConvite | Prisma.EnumTipoConviteFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoConvite[] | Prisma.ListEnumTipoConviteFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TipoConvite[] | Prisma.ListEnumTipoConviteFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTipoConviteWithAggregatesFilter<$PrismaModel> | $Enums.TipoConvite;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoConviteFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoConviteFilter<$PrismaModel>;
};
export type NestedEnumTipoLiderFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoLider | Prisma.EnumTipoLiderFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoLider[] | Prisma.ListEnumTipoLiderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TipoLider[] | Prisma.ListEnumTipoLiderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTipoLiderFilter<$PrismaModel> | $Enums.TipoLider;
};
export type NestedEnumStatusParticipanteFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusParticipante | Prisma.EnumStatusParticipanteFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusParticipante[] | Prisma.ListEnumStatusParticipanteFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatusParticipante[] | Prisma.ListEnumStatusParticipanteFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatusParticipanteFilter<$PrismaModel> | $Enums.StatusParticipante;
};
export type NestedEnumTipoLiderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoLider | Prisma.EnumTipoLiderFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoLider[] | Prisma.ListEnumTipoLiderFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TipoLider[] | Prisma.ListEnumTipoLiderFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTipoLiderWithAggregatesFilter<$PrismaModel> | $Enums.TipoLider;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoLiderFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoLiderFilter<$PrismaModel>;
};
export type NestedEnumStatusParticipanteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusParticipante | Prisma.EnumStatusParticipanteFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusParticipante[] | Prisma.ListEnumStatusParticipanteFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatusParticipante[] | Prisma.ListEnumStatusParticipanteFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatusParticipanteWithAggregatesFilter<$PrismaModel> | $Enums.StatusParticipante;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatusParticipanteFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatusParticipanteFilter<$PrismaModel>;
};
export type NestedEnumStatusInscricaoStartupFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusInscricaoStartup | Prisma.EnumStatusInscricaoStartupFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusInscricaoStartup[] | Prisma.ListEnumStatusInscricaoStartupFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatusInscricaoStartup[] | Prisma.ListEnumStatusInscricaoStartupFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatusInscricaoStartupFilter<$PrismaModel> | $Enums.StatusInscricaoStartup;
};
export type NestedEnumOrigemCadastroFilter<$PrismaModel = never> = {
    equals?: $Enums.OrigemCadastro | Prisma.EnumOrigemCadastroFieldRefInput<$PrismaModel>;
    in?: $Enums.OrigemCadastro[] | Prisma.ListEnumOrigemCadastroFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrigemCadastro[] | Prisma.ListEnumOrigemCadastroFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrigemCadastroFilter<$PrismaModel> | $Enums.OrigemCadastro;
};
export type NestedJsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedEnumStatusInscricaoStartupWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusInscricaoStartup | Prisma.EnumStatusInscricaoStartupFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusInscricaoStartup[] | Prisma.ListEnumStatusInscricaoStartupFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatusInscricaoStartup[] | Prisma.ListEnumStatusInscricaoStartupFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatusInscricaoStartupWithAggregatesFilter<$PrismaModel> | $Enums.StatusInscricaoStartup;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatusInscricaoStartupFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatusInscricaoStartupFilter<$PrismaModel>;
};
export type NestedEnumOrigemCadastroWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrigemCadastro | Prisma.EnumOrigemCadastroFieldRefInput<$PrismaModel>;
    in?: $Enums.OrigemCadastro[] | Prisma.ListEnumOrigemCadastroFieldRefInput<$PrismaModel>;
    notIn?: $Enums.OrigemCadastro[] | Prisma.ListEnumOrigemCadastroFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumOrigemCadastroWithAggregatesFilter<$PrismaModel> | $Enums.OrigemCadastro;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumOrigemCadastroFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumOrigemCadastroFilter<$PrismaModel>;
};
export type NestedEnumStatusIndicacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusIndicacao | Prisma.EnumStatusIndicacaoFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusIndicacao[] | Prisma.ListEnumStatusIndicacaoFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatusIndicacao[] | Prisma.ListEnumStatusIndicacaoFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatusIndicacaoFilter<$PrismaModel> | $Enums.StatusIndicacao;
};
export type NestedEnumStatusIndicacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusIndicacao | Prisma.EnumStatusIndicacaoFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusIndicacao[] | Prisma.ListEnumStatusIndicacaoFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatusIndicacao[] | Prisma.ListEnumStatusIndicacaoFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatusIndicacaoWithAggregatesFilter<$PrismaModel> | $Enums.StatusIndicacao;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatusIndicacaoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatusIndicacaoFilter<$PrismaModel>;
};
export type NestedEnumStatusSelecaoColegioFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSelecaoColegio | Prisma.EnumStatusSelecaoColegioFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusSelecaoColegio[] | Prisma.ListEnumStatusSelecaoColegioFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatusSelecaoColegio[] | Prisma.ListEnumStatusSelecaoColegioFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatusSelecaoColegioFilter<$PrismaModel> | $Enums.StatusSelecaoColegio;
};
export type NestedEnumStatusSelecaoColegioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSelecaoColegio | Prisma.EnumStatusSelecaoColegioFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusSelecaoColegio[] | Prisma.ListEnumStatusSelecaoColegioFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatusSelecaoColegio[] | Prisma.ListEnumStatusSelecaoColegioFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatusSelecaoColegioWithAggregatesFilter<$PrismaModel> | $Enums.StatusSelecaoColegio;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatusSelecaoColegioFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatusSelecaoColegioFilter<$PrismaModel>;
};
export type NestedEnumStatusTestemunhaApuracaoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTestemunhaApuracao | Prisma.EnumStatusTestemunhaApuracaoFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusTestemunhaApuracao[] | Prisma.ListEnumStatusTestemunhaApuracaoFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatusTestemunhaApuracao[] | Prisma.ListEnumStatusTestemunhaApuracaoFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatusTestemunhaApuracaoFilter<$PrismaModel> | $Enums.StatusTestemunhaApuracao;
};
export type NestedEnumStatusTestemunhaApuracaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTestemunhaApuracao | Prisma.EnumStatusTestemunhaApuracaoFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusTestemunhaApuracao[] | Prisma.ListEnumStatusTestemunhaApuracaoFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatusTestemunhaApuracao[] | Prisma.ListEnumStatusTestemunhaApuracaoFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatusTestemunhaApuracaoWithAggregatesFilter<$PrismaModel> | $Enums.StatusTestemunhaApuracao;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatusTestemunhaApuracaoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatusTestemunhaApuracaoFilter<$PrismaModel>;
};
export type NestedEnumTipoAuditoriaFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAuditoria | Prisma.EnumTipoAuditoriaFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoAuditoria[] | Prisma.ListEnumTipoAuditoriaFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TipoAuditoria[] | Prisma.ListEnumTipoAuditoriaFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTipoAuditoriaFilter<$PrismaModel> | $Enums.TipoAuditoria;
};
export type NestedEnumPapelAuditoriaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PapelAuditoria | Prisma.EnumPapelAuditoriaFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PapelAuditoria[] | Prisma.ListEnumPapelAuditoriaFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PapelAuditoria[] | Prisma.ListEnumPapelAuditoriaFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPapelAuditoriaNullableFilter<$PrismaModel> | $Enums.PapelAuditoria | null;
};
export type NestedEnumTipoAuditoriaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoAuditoria | Prisma.EnumTipoAuditoriaFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoAuditoria[] | Prisma.ListEnumTipoAuditoriaFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TipoAuditoria[] | Prisma.ListEnumTipoAuditoriaFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTipoAuditoriaWithAggregatesFilter<$PrismaModel> | $Enums.TipoAuditoria;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoAuditoriaFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoAuditoriaFilter<$PrismaModel>;
};
export type NestedEnumPapelAuditoriaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PapelAuditoria | Prisma.EnumPapelAuditoriaFieldRefInput<$PrismaModel> | null;
    in?: $Enums.PapelAuditoria[] | Prisma.ListEnumPapelAuditoriaFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.PapelAuditoria[] | Prisma.ListEnumPapelAuditoriaFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumPapelAuditoriaNullableWithAggregatesFilter<$PrismaModel> | $Enums.PapelAuditoria | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumPapelAuditoriaNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumPapelAuditoriaNullableFilter<$PrismaModel>;
};
export type NestedEnumTipoSolicitacaoCadastroFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoSolicitacaoCadastro | Prisma.EnumTipoSolicitacaoCadastroFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoSolicitacaoCadastro[] | Prisma.ListEnumTipoSolicitacaoCadastroFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TipoSolicitacaoCadastro[] | Prisma.ListEnumTipoSolicitacaoCadastroFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTipoSolicitacaoCadastroFilter<$PrismaModel> | $Enums.TipoSolicitacaoCadastro;
};
export type NestedEnumStatusSolicitacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSolicitacao | Prisma.EnumStatusSolicitacaoFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusSolicitacao[] | Prisma.ListEnumStatusSolicitacaoFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatusSolicitacao[] | Prisma.ListEnumStatusSolicitacaoFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatusSolicitacaoFilter<$PrismaModel> | $Enums.StatusSolicitacao;
};
export type NestedEnumTipoSolicitacaoCadastroWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoSolicitacaoCadastro | Prisma.EnumTipoSolicitacaoCadastroFieldRefInput<$PrismaModel>;
    in?: $Enums.TipoSolicitacaoCadastro[] | Prisma.ListEnumTipoSolicitacaoCadastroFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TipoSolicitacaoCadastro[] | Prisma.ListEnumTipoSolicitacaoCadastroFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTipoSolicitacaoCadastroWithAggregatesFilter<$PrismaModel> | $Enums.TipoSolicitacaoCadastro;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTipoSolicitacaoCadastroFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTipoSolicitacaoCadastroFilter<$PrismaModel>;
};
export type NestedEnumStatusSolicitacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusSolicitacao | Prisma.EnumStatusSolicitacaoFieldRefInput<$PrismaModel>;
    in?: $Enums.StatusSolicitacao[] | Prisma.ListEnumStatusSolicitacaoFieldRefInput<$PrismaModel>;
    notIn?: $Enums.StatusSolicitacao[] | Prisma.ListEnumStatusSolicitacaoFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumStatusSolicitacaoWithAggregatesFilter<$PrismaModel> | $Enums.StatusSolicitacao;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumStatusSolicitacaoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumStatusSolicitacaoFilter<$PrismaModel>;
};
