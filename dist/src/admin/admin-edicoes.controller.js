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
exports.AdminEdicoesController = void 0;
const common_1 = require("@nestjs/common");
const edicoes_service_1 = require("../edicoes/edicoes.service");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const roles_guard_1 = require("../common/guards/roles.guard");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const edicoes_dto_1 = require("./dto/edicoes.dto");
let AdminEdicoesController = class AdminEdicoesController {
    constructor(edicoesService) {
        this.edicoesService = edicoesService;
    }
    getEdicao() {
        return this.edicoesService.getConfig();
    }
    listEdicoes() {
        return this.edicoesService.listEdicoes();
    }
    clonar(dto, req) {
        return this.edicoesService.clonarConfigParaAtiva(dto.fonteEdicaoId, req.user.id);
    }
    publicarRegulamento(req) {
        return this.edicoesService.publicarRegulamento(req.user.id);
    }
    updateConfig(id, dto, req) {
        return this.edicoesService.updateConfig(id, dto, req.user.id);
    }
    listCategorias() {
        return this.edicoesService.listCategorias();
    }
    createCategoria(dto) {
        return this.edicoesService.createCategoria(dto);
    }
    listFinalistas() {
        return this.edicoesService.listFinalistasAdmin();
    }
    createFinalista(dto) {
        return this.edicoesService.createFinalista(dto);
    }
    toggleVotacao(id, dto) {
        return this.edicoesService.setVotacaoAberta(id, dto.aberta);
    }
    toggleIndicacoes(id, dto) {
        return this.edicoesService.setIndicacoesAbertas(id, dto.abertas);
    }
    toggleColegio(id, dto) {
        return this.edicoesService.setColegioHabilitado(id, dto.habilitado);
    }
};
exports.AdminEdicoesController = AdminEdicoesController;
__decorate([
    (0, common_1.Get)('edicao'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminEdicoesController.prototype, "getEdicao", null);
__decorate([
    (0, common_1.Get)('edicoes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminEdicoesController.prototype, "listEdicoes", null);
__decorate([
    (0, common_1.Post)('edicoes/clonar'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edicoes_dto_1.ClonarEdicaoDto, Object]),
    __metadata("design:returntype", void 0)
], AdminEdicoesController.prototype, "clonar", null);
__decorate([
    (0, common_1.Post)('edicao/regulamento/publicar'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdminEdicoesController.prototype, "publicarRegulamento", null);
__decorate([
    (0, common_1.Patch)('edicoes/:id/config'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, edicoes_dto_1.UpdateEdicaoConfigDto, Object]),
    __metadata("design:returntype", void 0)
], AdminEdicoesController.prototype, "updateConfig", null);
__decorate([
    (0, common_1.Get)('categorias'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminEdicoesController.prototype, "listCategorias", null);
__decorate([
    (0, common_1.Post)('categorias'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edicoes_dto_1.CreateCategoriaDto]),
    __metadata("design:returntype", void 0)
], AdminEdicoesController.prototype, "createCategoria", null);
__decorate([
    (0, common_1.Get)('finalistas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminEdicoesController.prototype, "listFinalistas", null);
__decorate([
    (0, common_1.Post)('finalistas'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [edicoes_dto_1.CreateFinalistaDto]),
    __metadata("design:returntype", void 0)
], AdminEdicoesController.prototype, "createFinalista", null);
__decorate([
    (0, common_1.Patch)('edicoes/:id/votacao'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, edicoes_dto_1.ToggleVotacaoDto]),
    __metadata("design:returntype", void 0)
], AdminEdicoesController.prototype, "toggleVotacao", null);
__decorate([
    (0, common_1.Patch)('edicoes/:id/indicacoes'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, edicoes_dto_1.ToggleIndicacoesDto]),
    __metadata("design:returntype", void 0)
], AdminEdicoesController.prototype, "toggleIndicacoes", null);
__decorate([
    (0, common_1.Patch)('edicoes/:id/colegio'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, edicoes_dto_1.ToggleColegioDto]),
    __metadata("design:returntype", void 0)
], AdminEdicoesController.prototype, "toggleColegio", null);
exports.AdminEdicoesController = AdminEdicoesController = __decorate([
    (0, common_1.Controller)('api/v1/admin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    __metadata("design:paramtypes", [edicoes_service_1.EdicoesService])
], AdminEdicoesController);
//# sourceMappingURL=admin-edicoes.controller.js.map