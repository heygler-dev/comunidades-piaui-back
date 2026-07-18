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
exports.ListInscricoesQueryDto = exports.DeleteInscricaoQueryDto = exports.UpdateInscricaoDto = exports.CreateManualInscricaoDto = void 0;
const class_validator_1 = require("class-validator");
class CreateManualInscricaoDto {
}
exports.CreateManualInscricaoDto = CreateManualInscricaoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], CreateManualInscricaoDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['lider', 'startup']),
    __metadata("design:type", String)
], CreateManualInscricaoDto.prototype, "tipo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['Ativo', 'Pendente']),
    __metadata("design:type", String)
], CreateManualInscricaoDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateManualInscricaoDto.prototype, "comunidade", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateManualInscricaoDto.prototype, "cidade", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateManualInscricaoDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateManualInscricaoDto.prototype, "telefone", void 0);
class UpdateInscricaoDto {
}
exports.UpdateInscricaoDto = UpdateInscricaoDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateInscricaoDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsIn)(['lider', 'startup']),
    __metadata("design:type", String)
], UpdateInscricaoDto.prototype, "tipo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['Ativo', 'Pendente']),
    __metadata("design:type", String)
], UpdateInscricaoDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateInscricaoDto.prototype, "comunidade", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateInscricaoDto.prototype, "cidade", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], UpdateInscricaoDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateInscricaoDto.prototype, "telefone", void 0);
class DeleteInscricaoQueryDto {
}
exports.DeleteInscricaoQueryDto = DeleteInscricaoQueryDto;
__decorate([
    (0, class_validator_1.IsIn)(['lider', 'startup']),
    __metadata("design:type", String)
], DeleteInscricaoQueryDto.prototype, "tipo", void 0);
class ListInscricoesQueryDto {
}
exports.ListInscricoesQueryDto = ListInscricoesQueryDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['todos', 'lider', 'startup']),
    __metadata("design:type", String)
], ListInscricoesQueryDto.prototype, "tipo", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ListInscricoesQueryDto.prototype, "q", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ListInscricoesQueryDto.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ListInscricoesQueryDto.prototype, "limit", void 0);
//# sourceMappingURL=inscricoes.dto.js.map