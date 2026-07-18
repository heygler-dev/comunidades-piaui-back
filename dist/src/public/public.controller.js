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
exports.PublicController = void 0;
const common_1 = require("@nestjs/common");
const apuracao_service_1 = require("../apuracao/apuracao.service");
const testemunha_dto_1 = require("../apuracao/dto/testemunha.dto");
const edicoes_service_1 = require("../edicoes/edicoes.service");
const solicitacoes_dto_1 = require("../solicitacoes/dto/solicitacoes.dto");
const solicitacoes_service_1 = require("../solicitacoes/solicitacoes.service");
const lider_dto_1 = require("./dto/lider.dto");
const startup_dto_1 = require("./dto/startup.dto");
const public_service_1 = require("./public.service");
let PublicController = class PublicController {
    constructor(convitesService, startupService, votoService, apuracaoService, solicitacoesService, edicoesService) {
        this.convitesService = convitesService;
        this.startupService = startupService;
        this.votoService = votoService;
        this.apuracaoService = apuracaoService;
        this.solicitacoesService = solicitacoesService;
        this.edicoesService = edicoesService;
    }
    getConvite(token) {
        return this.convitesService.getConviteLider(token);
    }
    getLinkInscricao(slug) {
        return this.convitesService.getLinkInscricao(slug);
    }
    ativarLider(dto) {
        return this.convitesService.ativarLider(dto);
    }
    solicitarLider(dto) {
        return this.solicitacoesService.solicitarLider(dto);
    }
    solicitarStartup(dto) {
        return this.solicitacoesService.solicitarStartup(dto);
    }
    createInscricao(dto) {
        return this.startupService.createDraft(dto.slug);
    }
    getInscricao(id) {
        return this.startupService.getInscricao(id);
    }
    etapa1(id, dto) {
        return this.startupService.saveEtapa1(id, dto);
    }
    etapa2(id, dto) {
        return this.startupService.saveEtapa2(id, dto);
    }
    confirmar(id, dto) {
        return this.startupService.confirmar(id, dto);
    }
    landingPage(slug) {
        return this.startupService.getLandingPage(slug);
    }
    listComunidades() {
        return this.startupService.listComunidadesPublicas();
    }
    statusVotacao() {
        return this.votoService.statusVotacao();
    }
    categorias() {
        return this.votoService.listCategorias();
    }
    finalistas(categoria) {
        return this.votoService.listFinalistas(categoria);
    }
    totalVotos() {
        return this.votoService.totalVotos();
    }
    votarAnonimo() {
        throw new common_1.UnauthorizedException('Para votar, entre com a conta de líder comunitário ou empreendedor cadastrado.');
    }
    resultados() {
        return this.apuracaoService.listResultadosPublicos();
    }
    ata() {
        return this.apuracaoService.getAtaPublica();
    }
    galeria() {
        return this.apuracaoService.galeriaVencedores();
    }
    regras(versao) {
        return this.edicoesService.getRegrasPublicas(versao ? Number(versao) : undefined);
    }
    getConviteTestemunha(token) {
        return this.apuracaoService.getConviteTestemunha(token);
    }
    confirmarTestemunha(token, dto = {}) {
        return this.apuracaoService.confirmarTestemunha(token, dto);
    }
};
exports.PublicController = PublicController;
__decorate([
    (0, common_1.Get)('convites/:token'),
    __param(0, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "getConvite", null);
__decorate([
    (0, common_1.Get)('inscrever/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "getLinkInscricao", null);
__decorate([
    (0, common_1.Post)('lideres/ativar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [lider_dto_1.AtivarLiderDto]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "ativarLider", null);
__decorate([
    (0, common_1.Post)('solicitacoes/lider'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [solicitacoes_dto_1.SolicitarLiderDto]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "solicitarLider", null);
__decorate([
    (0, common_1.Post)('solicitacoes/startup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [solicitacoes_dto_1.SolicitarStartupDto]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "solicitarStartup", null);
__decorate([
    (0, common_1.Post)('inscricoes'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [startup_dto_1.CreateInscricaoStartupDto]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "createInscricao", null);
__decorate([
    (0, common_1.Get)('inscricoes/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "getInscricao", null);
__decorate([
    (0, common_1.Patch)('inscricoes/:id/etapa/1'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, startup_dto_1.Etapa1StartupDto]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "etapa1", null);
__decorate([
    (0, common_1.Patch)('inscricoes/:id/etapa/2'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, startup_dto_1.Etapa2StartupDto]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "etapa2", null);
__decorate([
    (0, common_1.Post)('inscricoes/:id/confirmar'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, startup_dto_1.ConfirmarInscricaoDto]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "confirmar", null);
__decorate([
    (0, common_1.Get)('startups/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "landingPage", null);
__decorate([
    (0, common_1.Get)('comunidades'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "listComunidades", null);
__decorate([
    (0, common_1.Get)('voto/status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "statusVotacao", null);
__decorate([
    (0, common_1.Get)('voto/categorias'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "categorias", null);
__decorate([
    (0, common_1.Get)('voto/finalistas'),
    __param(0, (0, common_1.Query)('categoria')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "finalistas", null);
__decorate([
    (0, common_1.Get)('voto/total'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "totalVotos", null);
__decorate([
    (0, common_1.Post)('voto'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "votarAnonimo", null);
__decorate([
    (0, common_1.Get)('resultados'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "resultados", null);
__decorate([
    (0, common_1.Get)('ata'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "ata", null);
__decorate([
    (0, common_1.Get)('galeria'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "galeria", null);
__decorate([
    (0, common_1.Get)('regras'),
    __param(0, (0, common_1.Query)('versao')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "regras", null);
__decorate([
    (0, common_1.Get)('testemunhas/:token'),
    __param(0, (0, common_1.Param)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "getConviteTestemunha", null);
__decorate([
    (0, common_1.Post)('testemunhas/:token/confirmar'),
    __param(0, (0, common_1.Param)('token')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, testemunha_dto_1.ConfirmarTestemunhaDto]),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "confirmarTestemunha", null);
exports.PublicController = PublicController = __decorate([
    (0, common_1.Controller)('api/v1/public'),
    __metadata("design:paramtypes", [public_service_1.PublicConvitesService,
        public_service_1.PublicStartupService,
        public_service_1.PublicVotoService,
        apuracao_service_1.ApuracaoService,
        solicitacoes_service_1.SolicitacoesService,
        edicoes_service_1.EdicoesService])
], PublicController);
//# sourceMappingURL=public.controller.js.map