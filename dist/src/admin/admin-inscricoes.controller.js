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
exports.AdminInscricoesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const roles_guard_1 = require("../common/guards/roles.guard");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const inscricoes_service_1 = require("../inscricoes/inscricoes.service");
const inscricoes_dto_1 = require("./dto/inscricoes.dto");
let AdminInscricoesController = class AdminInscricoesController {
    constructor(inscricoesService) {
        this.inscricoesService = inscricoesService;
    }
    stats() {
        return this.inscricoesService.stats();
    }
    list(query) {
        return this.inscricoesService.listAdmin({
            tipo: query.tipo,
            q: query.q,
            page: query.page ? Number(query.page) : 1,
            limit: query.limit ? Number(query.limit) : 50,
        });
    }
    create(dto) {
        return this.inscricoesService.createManual(dto);
    }
    update(id, dto) {
        return this.inscricoesService.updateAdmin(id, dto.tipo, dto);
    }
    remove(id, query) {
        return this.inscricoesService.deleteAdmin(id, query.tipo);
    }
    importStartups(file, req) {
        return this.inscricoesService.importStartupsSpreadsheet(file, req.user.id);
    }
    importStartupsColumns() {
        return this.inscricoesService.getStartupImportColumns();
    }
    import(file, req) {
        return this.inscricoesService.importSpreadsheet(file, req.user.id);
    }
};
exports.AdminInscricoesController = AdminInscricoesController;
__decorate([
    (0, common_1.Get)('stats'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminInscricoesController.prototype, "stats", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inscricoes_dto_1.ListInscricoesQueryDto]),
    __metadata("design:returntype", void 0)
], AdminInscricoesController.prototype, "list", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inscricoes_dto_1.CreateManualInscricaoDto]),
    __metadata("design:returntype", void 0)
], AdminInscricoesController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, inscricoes_dto_1.UpdateInscricaoDto]),
    __metadata("design:returntype", void 0)
], AdminInscricoesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, inscricoes_dto_1.DeleteInscricaoQueryDto]),
    __metadata("design:returntype", void 0)
], AdminInscricoesController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('import/startups'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('arquivo')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AdminInscricoesController.prototype, "importStartups", null);
__decorate([
    (0, common_1.Get)('import/startups/colunas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminInscricoesController.prototype, "importStartupsColumns", null);
__decorate([
    (0, common_1.Post)('import'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('arquivo')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AdminInscricoesController.prototype, "import", null);
exports.AdminInscricoesController = AdminInscricoesController = __decorate([
    (0, common_1.Controller)('api/v1/admin/inscricoes'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    __metadata("design:paramtypes", [inscricoes_service_1.InscricoesService])
], AdminInscricoesController);
//# sourceMappingURL=admin-inscricoes.controller.js.map