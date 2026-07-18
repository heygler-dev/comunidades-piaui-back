"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndicacoesModule = void 0;
const common_1 = require("@nestjs/common");
const auditoria_module_1 = require("../auditoria/auditoria.module");
const auth_module_1 = require("../auth/auth.module");
const indicacoes_controller_1 = require("./indicacoes.controller");
const indicacoes_service_1 = require("./indicacoes.service");
let IndicacoesModule = class IndicacoesModule {
};
exports.IndicacoesModule = IndicacoesModule;
exports.IndicacoesModule = IndicacoesModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, auditoria_module_1.AuditoriaModule],
        controllers: [indicacoes_controller_1.IndicacoesController],
        providers: [indicacoes_service_1.IndicacoesService],
    })
], IndicacoesModule);
//# sourceMappingURL=indicacoes.module.js.map