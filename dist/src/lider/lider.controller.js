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
exports.LiderController = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const roles_guard_1 = require("../common/guards/roles.guard");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const lider_dto_1 = require("./dto/lider.dto");
const lider_service_1 = require("./lider.service");
const solicitacoes_dto_1 = require("../solicitacoes/dto/solicitacoes.dto");
const solicitacoes_service_1 = require("../solicitacoes/solicitacoes.service");
class ComunidadeQuery {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ComunidadeQuery.prototype, "comunidadeId", void 0);
let LiderController = class LiderController {
    constructor(liderService, solicitacoesService) {
        this.liderService = liderService;
        this.solicitacoesService = solicitacoesService;
    }
    me(req) {
        return this.liderService.me(req.user.pessoaId || req.user.id);
    }
    link(req, query) {
        return this.liderService.getLink(req.user.pessoaId || req.user.id, query.comunidadeId);
    }
    stats(req, query) {
        return this.liderService.stats(req.user.pessoaId || req.user.id, query.comunidadeId);
    }
    inscricoes(req, query) {
        return this.liderService.listInscricoes(req.user.pessoaId || req.user.id, query.comunidadeId);
    }
    aprovarInscricao(req, id, query) {
        return this.liderService.aprovarInscricao(req.user.pessoaId || req.user.id, id, query.comunidadeId);
    }
    rejeitarInscricao(req, id, query) {
        return this.liderService.rejeitarInscricao(req.user.pessoaId || req.user.id, id, query.comunidadeId);
    }
    listLideres(req, query) {
        return this.liderService.listLideresComunidade(req.user.pessoaId || req.user.id, query.comunidadeId);
    }
    nomear(req, dto, query) {
        return this.liderService.nomearLider(req.user.pessoaId || req.user.id, dto, query.comunidadeId);
    }
    apontarColegio(req, dto, query) {
        return this.liderService.apontarColegio(req.user.pessoaId || req.user.id, dto.liderIds, query.comunidadeId);
    }
    listSolicitacoes(req, query) {
        return this.solicitacoesService.listarParaLider(req.user.pessoaId || req.user.id, query.comunidadeId, query.tipo);
    }
    aprovarSolicitacao(req, id, query) {
        return this.solicitacoesService.aprovar(req.user.pessoaId || req.user.id, id, query.comunidadeId);
    }
    rejeitarSolicitacao(req, id, dto, query) {
        return this.solicitacoesService.rejeitar(req.user.pessoaId || req.user.id, id, dto, query.comunidadeId);
    }
};
exports.LiderController = LiderController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LiderController.prototype, "me", null);
__decorate([
    (0, common_1.Get)('link'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ComunidadeQuery]),
    __metadata("design:returntype", void 0)
], LiderController.prototype, "link", null);
__decorate([
    (0, common_1.Get)('stats'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ComunidadeQuery]),
    __metadata("design:returntype", void 0)
], LiderController.prototype, "stats", null);
__decorate([
    (0, common_1.Get)('inscricoes'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ComunidadeQuery]),
    __metadata("design:returntype", void 0)
], LiderController.prototype, "inscricoes", null);
__decorate([
    (0, common_1.Post)('inscricoes/:id/aprovar'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, ComunidadeQuery]),
    __metadata("design:returntype", void 0)
], LiderController.prototype, "aprovarInscricao", null);
__decorate([
    (0, common_1.Post)('inscricoes/:id/rejeitar'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, ComunidadeQuery]),
    __metadata("design:returntype", void 0)
], LiderController.prototype, "rejeitarInscricao", null);
__decorate([
    (0, common_1.Get)('lideres'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ComunidadeQuery]),
    __metadata("design:returntype", void 0)
], LiderController.prototype, "listLideres", null);
__decorate([
    (0, common_1.Post)('lideres'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, lider_dto_1.NomearLiderDto,
        ComunidadeQuery]),
    __metadata("design:returntype", void 0)
], LiderController.prototype, "nomear", null);
__decorate([
    (0, common_1.Put)('colegio'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, lider_dto_1.ApontarColegioDto,
        ComunidadeQuery]),
    __metadata("design:returntype", void 0)
], LiderController.prototype, "apontarColegio", null);
__decorate([
    (0, common_1.Get)('solicitacoes'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LiderController.prototype, "listSolicitacoes", null);
__decorate([
    (0, common_1.Post)('solicitacoes/:id/aprovar'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, ComunidadeQuery]),
    __metadata("design:returntype", void 0)
], LiderController.prototype, "aprovarSolicitacao", null);
__decorate([
    (0, common_1.Post)('solicitacoes/:id/rejeitar'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, solicitacoes_dto_1.RejeitarSolicitacaoDto,
        ComunidadeQuery]),
    __metadata("design:returntype", void 0)
], LiderController.prototype, "rejeitarSolicitacao", null);
exports.LiderController = LiderController = __decorate([
    (0, common_1.Controller)('api/v1/lider'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('lider'),
    __metadata("design:paramtypes", [lider_service_1.LiderService,
        solicitacoes_service_1.SolicitacoesService])
], LiderController);
//# sourceMappingURL=lider.controller.js.map