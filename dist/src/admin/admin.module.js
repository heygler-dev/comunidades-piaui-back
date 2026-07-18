"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const auditoria_module_1 = require("../auditoria/auditoria.module");
const auth_module_1 = require("../auth/auth.module");
const inscricoes_module_1 = require("../inscricoes/inscricoes.module");
const pessoas_module_1 = require("../pessoas/pessoas.module");
const admin_auditoria_controller_1 = require("./admin-auditoria.controller");
const admin_backup_controller_1 = require("./admin-backup.controller");
const admin_backup_service_1 = require("./admin-backup.service");
const admin_comunidades_controller_1 = require("./admin-comunidades.controller");
const admin_edicoes_controller_1 = require("./admin-edicoes.controller");
const admin_inscricoes_controller_1 = require("./admin-inscricoes.controller");
const comunidades_service_1 = require("./comunidades.service");
let AdminModule = class AdminModule {
};
exports.AdminModule = AdminModule;
exports.AdminModule = AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, inscricoes_module_1.InscricoesModule, pessoas_module_1.PessoasModule, auditoria_module_1.AuditoriaModule],
        controllers: [
            admin_inscricoes_controller_1.AdminInscricoesController,
            admin_comunidades_controller_1.AdminComunidadesController,
            admin_edicoes_controller_1.AdminEdicoesController,
            admin_auditoria_controller_1.AdminAuditoriaController,
            admin_backup_controller_1.AdminBackupController,
        ],
        providers: [comunidades_service_1.ComunidadesService, admin_backup_service_1.AdminBackupService],
    })
], AdminModule);
//# sourceMappingURL=admin.module.js.map