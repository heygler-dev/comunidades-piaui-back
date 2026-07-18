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
exports.ConfirmarInscricaoDto = exports.Etapa2StartupDto = exports.Etapa1StartupDto = exports.CreateInscricaoStartupDto = void 0;
const class_validator_1 = require("class-validator");
class CreateInscricaoStartupDto {
}
exports.CreateInscricaoStartupDto = CreateInscricaoStartupDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateInscricaoStartupDto.prototype, "slug", void 0);
class Etapa1StartupDto {
}
exports.Etapa1StartupDto = Etapa1StartupDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], Etapa1StartupDto.prototype, "responsavelNome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Etapa1StartupDto.prototype, "cpf", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Etapa1StartupDto.prototype, "telefone", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], Etapa1StartupDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(8),
    __metadata("design:type", String)
], Etapa1StartupDto.prototype, "senha", void 0);
class Etapa2StartupDto {
}
exports.Etapa2StartupDto = Etapa2StartupDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], Etapa2StartupDto.prototype, "nomeStartup", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Etapa2StartupDto.prototype, "categoria", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Etapa2StartupDto.prototype, "cidadeOperacao", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], Etapa2StartupDto.prototype, "site", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(10),
    __metadata("design:type", String)
], Etapa2StartupDto.prototype, "descricao", void 0);
class ConfirmarInscricaoDto {
}
exports.ConfirmarInscricaoDto = ConfirmarInscricaoDto;
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ConfirmarInscricaoDto.prototype, "lgpdAceito", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], ConfirmarInscricaoDto.prototype, "cpfUnicoConfirmado", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], ConfirmarInscricaoDto.prototype, "senha", void 0);
//# sourceMappingURL=startup.dto.js.map