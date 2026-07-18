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
exports.ApuracaoAdminController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const roles_guard_1 = require("../common/guards/roles.guard");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const apuracao_service_1 = require("./apuracao.service");
const testemunha_dto_1 = require("./dto/testemunha.dto");
let ApuracaoAdminController = class ApuracaoAdminController {
    constructor(apuracaoService) {
        this.apuracaoService = apuracaoService;
    }
    anomalias() {
        return this.apuracaoService.anomalias();
    }
    quorum() {
        return this.apuracaoService.quorumColegio();
    }
    promover() {
        return this.apuracaoService.promoverFinalistasDoColegio();
    }
    publicar(req) {
        return this.apuracaoService.publicarResultados(req.user.id);
    }
    ranking() {
        return this.apuracaoService.rankingMaisVotadas(10);
    }
    testemunhas() {
        return this.apuracaoService.listTestemunhasAdmin();
    }
    convidarTestemunha(dto) {
        return this.apuracaoService.convidarTestemunha(dto);
    }
};
exports.ApuracaoAdminController = ApuracaoAdminController;
__decorate([
    (0, common_1.Get)('anomalias'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApuracaoAdminController.prototype, "anomalias", null);
__decorate([
    (0, common_1.Get)('colegio/quorum'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApuracaoAdminController.prototype, "quorum", null);
__decorate([
    (0, common_1.Post)('colegio/promover-finalistas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApuracaoAdminController.prototype, "promover", null);
__decorate([
    (0, common_1.Post)('publicar'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ApuracaoAdminController.prototype, "publicar", null);
__decorate([
    (0, common_1.Get)('ranking'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApuracaoAdminController.prototype, "ranking", null);
__decorate([
    (0, common_1.Get)('testemunhas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApuracaoAdminController.prototype, "testemunhas", null);
__decorate([
    (0, common_1.Post)('testemunhas'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [testemunha_dto_1.ConvidarTestemunhaDto]),
    __metadata("design:returntype", void 0)
], ApuracaoAdminController.prototype, "convidarTestemunha", null);
exports.ApuracaoAdminController = ApuracaoAdminController = __decorate([
    (0, common_1.Controller)('api/v1/admin/apuracao'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    __metadata("design:paramtypes", [apuracao_service_1.ApuracaoService])
], ApuracaoAdminController);
//# sourceMappingURL=apuracao-admin.controller.js.map