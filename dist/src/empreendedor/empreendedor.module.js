"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpreendedorModule = void 0;
const common_1 = require("@nestjs/common");
const auditoria_module_1 = require("../auditoria/auditoria.module");
const auth_module_1 = require("../auth/auth.module");
const empreendedor_controller_1 = require("./empreendedor.controller");
const empreendedor_service_1 = require("./empreendedor.service");
let EmpreendedorModule = class EmpreendedorModule {
};
exports.EmpreendedorModule = EmpreendedorModule;
exports.EmpreendedorModule = EmpreendedorModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, auditoria_module_1.AuditoriaModule],
        controllers: [empreendedor_controller_1.EmpreendedorController],
        providers: [empreendedor_service_1.EmpreendedorService],
    })
], EmpreendedorModule);
//# sourceMappingURL=empreendedor.module.js.map