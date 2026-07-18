"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiderModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("../auth/auth.module");
const pessoas_module_1 = require("../pessoas/pessoas.module");
const solicitacoes_module_1 = require("../solicitacoes/solicitacoes.module");
const lider_controller_1 = require("./lider.controller");
const lider_service_1 = require("./lider.service");
let LiderModule = class LiderModule {
};
exports.LiderModule = LiderModule;
exports.LiderModule = LiderModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, pessoas_module_1.PessoasModule, solicitacoes_module_1.SolicitacoesModule],
        controllers: [lider_controller_1.LiderController],
        providers: [lider_service_1.LiderService],
        exports: [lider_service_1.LiderService],
    })
], LiderModule);
//# sourceMappingURL=lider.module.js.map