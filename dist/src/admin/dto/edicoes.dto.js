"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFinalistaDto = exports.CreateCategoriaDto = exports.ClonarEdicaoDto = exports.UpdateEdicaoConfigDto = exports.ToggleColegioDto = exports.ToggleIndicacoesDto = exports.ToggleVotacaoDto = void 0;
const class_validator_1 = require("class-validator");
const client_1 = require("../../../generated/prisma/client");
class ToggleVotacaoDto {
}
exports.ToggleVotacaoDto = ToggleVotacaoDto;
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ToggleVotacaoDto.prototype, "aberta", void 0);
class ToggleIndicacoesDto {
}
exports.ToggleIndicacoesDto = ToggleIndicacoesDto;
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ToggleIndicacoesDto.prototype, "abertas", void 0);
class ToggleColegioDto {
}
exports.ToggleColegioDto = ToggleColegioDto;
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ToggleColegioDto.prototype, "habilitado", void 0);
class UpdateEdicaoConfigDto {
}
exports.UpdateEdicaoConfigDto = UpdateEdicaoConfigDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdateEdicaoConfigDto.prototype, "xLideresColegio", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdateEdicaoConfigDto.prototype, "nFinalistasPorCategoria", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateEdicaoConfigDto.prototype, "cotasRegionaisAtivas", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateEdicaoConfigDto.prototype, "cotaMinCapital", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], UpdateEdicaoConfigDto.prototype, "cotaMinInterior", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateEdicaoConfigDto.prototype, "cidadesCapital", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Object)
], UpdateEdicaoConfigDto.prototype, "criteriosMd", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.FasePremio),
    __metadata("design:type", String)
], UpdateEdicaoConfigDto.prototype, "faseAtual", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateIf)((_, v) => v !== null),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], UpdateEdicaoConfigDto.prototype, "indicacoesInicio", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateIf)((_, v) => v !== null),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", Object)
], UpdateEdicaoConfigDto.prototype, "indicacoesFim", void 0);
class ClonarEdicaoDto {
}
exports.ClonarEdicaoDto = ClonarEdicaoDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ClonarEdicaoDto.prototype, "fonteEdicaoId", void 0);
class CreateCategoriaDto {
}
exports.CreateCategoriaDto = CreateCategoriaDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], CreateCategoriaDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateCategoriaDto.prototype, "ordem", void 0);
class CreateFinalistaDto {
}
exports.CreateFinalistaDto = CreateFinalistaDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateFinalistaDto.prototype, "inscricaoStartupId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], CreateFinalistaDto.prototype, "categoria", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFinalistaDto.prototype, "metaResumo", void 0);
//# sourceMappingURL=edicoes.dto.js.map