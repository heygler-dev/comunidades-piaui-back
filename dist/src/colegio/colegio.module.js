"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColegioModule = void 0;
const common_1 = require("@nestjs/common");
const auditoria_module_1 = require("../auditoria/auditoria.module");
const auth_module_1 = require("../auth/auth.module");
const colegio_controller_1 = require("./colegio.controller");
const colegio_service_1 = require("./colegio.service");
let ColegioModule = class ColegioModule {
};
exports.ColegioModule = ColegioModule;
exports.ColegioModule = ColegioModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, auditoria_module_1.AuditoriaModule],
        controllers: [colegio_controller_1.ColegioController],
        providers: [colegio_service_1.ColegioService],
    })
], ColegioModule);
//# sourceMappingURL=colegio.module.js.map