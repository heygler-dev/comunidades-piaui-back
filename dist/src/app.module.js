"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const admin_module_1 = require("./admin/admin.module");
const apuracao_module_1 = require("./apuracao/apuracao.module");
const auditoria_module_1 = require("./auditoria/auditoria.module");
const auth_module_1 = require("./auth/auth.module");
const colegio_module_1 = require("./colegio/colegio.module");
const edicoes_module_1 = require("./edicoes/edicoes.module");
const empreendedor_module_1 = require("./empreendedor/empreendedor.module");
const indicacoes_module_1 = require("./indicacoes/indicacoes.module");
const inscricoes_module_1 = require("./inscricoes/inscricoes.module");
const lider_module_1 = require("./lider/lider.module");
const pessoas_module_1 = require("./pessoas/pessoas.module");
const prisma_module_1 = require("./prisma/prisma.module");
const public_module_1 = require("./public/public.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            prisma_module_1.PrismaModule,
            pessoas_module_1.PessoasModule,
            auditoria_module_1.AuditoriaModule,
            edicoes_module_1.EdicoesModule,
            inscricoes_module_1.InscricoesModule,
            auth_module_1.AuthModule,
            admin_module_1.AdminModule,
            public_module_1.PublicModule,
            lider_module_1.LiderModule,
            empreendedor_module_1.EmpreendedorModule,
            indicacoes_module_1.IndicacoesModule,
            colegio_module_1.ColegioModule,
            apuracao_module_1.ApuracaoModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map