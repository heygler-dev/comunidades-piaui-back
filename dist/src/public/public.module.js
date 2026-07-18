"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicModule = void 0;
const common_1 = require("@nestjs/common");
const apuracao_module_1 = require("../apuracao/apuracao.module");
const auditoria_module_1 = require("../auditoria/auditoria.module");
const auth_module_1 = require("../auth/auth.module");
const pessoas_module_1 = require("../pessoas/pessoas.module");
const solicitacoes_module_1 = require("../solicitacoes/solicitacoes.module");
const public_controller_1 = require("./public.controller");
const public_service_1 = require("./public.service");
const voto_controller_1 = require("./voto.controller");
let PublicModule = class PublicModule {
};
exports.PublicModule = PublicModule;
exports.PublicModule = PublicModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            auditoria_module_1.AuditoriaModule,
            apuracao_module_1.ApuracaoModule,
            pessoas_module_1.PessoasModule,
            solicitacoes_module_1.SolicitacoesModule,
        ],
        controllers: [public_controller_1.PublicController, voto_controller_1.VotoController],
        providers: [public_service_1.PublicConvitesService, public_service_1.PublicStartupService, public_service_1.PublicVotoService],
    })
], PublicModule);
//# sourceMappingURL=public.module.js.map