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
exports.VotoController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const roles_guard_1 = require("../common/guards/roles.guard");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const voto_auth_dto_1 = require("./dto/voto-auth.dto");
const public_service_1 = require("./public.service");
let VotoController = class VotoController {
    constructor(votoService) {
        this.votoService = votoService;
    }
    votar(req, dto) {
        return this.votoService.registrarVotoAutenticado({
            id: req.user.id,
            role: req.user.role,
            pessoaId: req.user.pessoaId,
        }, dto);
    }
};
exports.VotoController = VotoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, voto_auth_dto_1.RegistrarVotoAutenticadoDto]),
    __metadata("design:returntype", void 0)
], VotoController.prototype, "votar", null);
exports.VotoController = VotoController = __decorate([
    (0, common_1.Controller)('api/v1/voto'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('lider', 'empreendedor'),
    __metadata("design:paramtypes", [public_service_1.PublicVotoService])
], VotoController);
//# sourceMappingURL=voto.controller.js.map