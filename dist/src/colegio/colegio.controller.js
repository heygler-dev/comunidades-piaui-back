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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColegioController = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const roles_guard_1 = require("../common/guards/roles.guard");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const colegio_dto_1 = require("./dto/colegio.dto");
const colegio_service_1 = require("./colegio.service");
class ListIndicadasQuery {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ListIndicadasQuery.prototype, "categoriaId", void 0);
let ColegioController = class ColegioController {
    constructor(colegioService) {
        this.colegioService = colegioService;
    }
    indicadas(req, query) {
        return this.colegioService.listIndicadas(req.user.id, query.categoriaId);
    }
    selecoes(req) {
        return this.colegioService.minhasSelecoes(req.user.id);
    }
    registrar(req, dto) {
        return this.colegioService.registrarSelecao(req.user.id, dto);
    }
};
exports.ColegioController = ColegioController;
__decorate([
    (0, common_1.Get)('indicadas'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ListIndicadasQuery]),
    __metadata("design:returntype", void 0)
], ColegioController.prototype, "indicadas", null);
__decorate([
    (0, common_1.Get)('selecoes'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ColegioController.prototype, "selecoes", null);
__decorate([
    (0, common_1.Post)('selecoes'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, colegio_dto_1.RegistrarSelecaoDto]),
    __metadata("design:returntype", void 0)
], ColegioController.prototype, "registrar", null);
exports.ColegioController = ColegioController = __decorate([
    (0, common_1.Controller)('api/v1/colegio'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('lider'),
    __metadata("design:paramtypes", [colegio_service_1.ColegioService])
], ColegioController);
//# sourceMappingURL=colegio.controller.js.map