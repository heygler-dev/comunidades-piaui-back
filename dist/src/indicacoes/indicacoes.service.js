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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndicacoesService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../generated/prisma/client");
const edicoes_periodo_util_1 = require("../common/utils/edicoes-periodo.util");
const auditoria_service_1 = require("../auditoria/auditoria.service");
const edicoes_service_1 = require("../edicoes/edicoes.service");
const prisma_service_1 = require("../prisma/prisma.service");
let IndicacoesService = class IndicacoesService {
    constructor(prisma, edicoesService, auditoria) {
        this.prisma = prisma;
        this.edicoesService = edicoesService;
        this.auditoria = auditoria;
    }
    async buscar(params) {
        const edicaoId = await this.edicoesService.getEdicaoAtivaId();
        let categoriaNome;
        if (params.categoriaId) {
            const nomes = await this.categoriaNomes(edicaoId, params.categoriaId);
            categoriaNome = nomes[0];
        }
        return this.prisma.inscricaoStartup.findMany({
            where: {
                edicaoId,
                status: {
                    in: [client_1.StatusInscricaoStartup.ATIVO, client_1.StatusInscricaoStartup.PENDENTE],
                },
                ...(params.comunidadeId ? { comunidadeId: params.comunidadeId } : {}),
                ...(categoriaNome ? { categoria: categoriaNome } : {}),
                ...(params.q
                    ? {
                        nomeStartup: {
                            contains: params.q,
                            mode: 'insensitive',
                        },
                    }
                    : {}),
            },
            select: {
                id: true,
                nomeStartup: true,
                categoria: true,
                cidadeOperacao: true,
                slugPublico: true,
                comunidade: { select: { id: true, nome: true, slug: true } },
            },
            orderBy: { nomeStartup: 'asc' },
            take: 50,
        });
    }
    async criar(user, dto) {
        const edicao = await this.edicoesService.getEdicaoAtiva();
        if (!(0, edicoes_periodo_util_1.indicacoesPermitidas)(edicao)) {
            throw new common_1.ForbiddenException((0, edicoes_periodo_util_1.mensagemIndicacoesFechadas)(edicao));
        }
        const categoria = await this.prisma.categoria.findFirst({
            where: { id: dto.categoriaId, edicaoId: edicao.id },
        });
        if (!categoria) {
            throw new common_1.NotFoundException('Categoria não encontrada.');
        }
        const startup = await this.prisma.inscricaoStartup.findFirst({
            where: {
                id: dto.inscricaoStartupId,
                edicaoId: edicao.id,
                status: {
                    in: [client_1.StatusInscricaoStartup.ATIVO, client_1.StatusInscricaoStartup.PENDENTE],
                },
            },
        });
        if (!startup) {
            throw new common_1.NotFoundException('Startup indicada não encontrada.');
        }
        let indicanteLiderId;
        let indicanteInscricaoId;
        let atorPapel;
        if (user.role === 'lider') {
            const lider = await this.prisma.lider.findFirst({
                where: { pessoaId: user.id, edicaoId: edicao.id, status: 'ATIVO' },
            });
            if (!lider) {
                throw new common_1.ForbiddenException('Vínculo de líder não encontrado.');
            }
            indicanteLiderId = lider.id;
            atorPapel = client_1.PapelAuditoria.LIDER;
        }
        else if (user.role === 'empreendedor') {
            const minha = await this.prisma.inscricaoStartup.findFirst({
                where: {
                    pessoaId: user.id,
                    edicaoId: edicao.id,
                    status: {
                        in: [client_1.StatusInscricaoStartup.ATIVO, client_1.StatusInscricaoStartup.PENDENTE],
                    },
                },
            });
            if (!minha) {
                throw new common_1.ForbiddenException('Startup do empreendedor não encontrada.');
            }
            indicanteInscricaoId = minha.id;
            atorPapel = client_1.PapelAuditoria.EMPREENDEDOR;
            if (minha.id === startup.id) {
                throw new common_1.BadRequestException('Uma startup não pode indicar a si mesma.');
            }
        }
        else {
            throw new common_1.ForbiddenException('Apenas líderes e empresas cadastradas podem indicar.');
        }
        const duplicate = await this.prisma.indicacao.findFirst({
            where: {
                edicaoId: edicao.id,
                categoriaId: categoria.id,
                inscricaoStartupId: startup.id,
                status: client_1.StatusIndicacao.ATIVA,
                ...(indicanteLiderId
                    ? { indicanteLiderId }
                    : { indicanteInscricaoId }),
            },
        });
        if (duplicate) {
            throw new common_1.ConflictException('Você já indicou esta startup nesta categoria.');
        }
        const indicacao = await this.prisma.indicacao.create({
            data: {
                edicaoId: edicao.id,
                categoriaId: categoria.id,
                inscricaoStartupId: startup.id,
                indicanteLiderId,
                indicanteInscricaoId,
                justificativa: dto.justificativa,
            },
            include: {
                categoria: true,
                inscricaoStartup: {
                    select: { id: true, nomeStartup: true, slugPublico: true },
                },
            },
        });
        await this.auditoria.registrar({
            edicaoId: edicao.id,
            tipo: client_1.TipoAuditoria.INDICACAO,
            atorPapel,
            atorId: user.id,
            payload: {
                indicacaoId: indicacao.id,
                categoriaId: categoria.id,
                startupId: startup.id,
            },
        });
        return indicacao;
    }
    async minhas(user) {
        const edicaoId = await this.edicoesService.getEdicaoAtivaId();
        if (user.role === 'lider') {
            const lideres = await this.prisma.lider.findMany({
                where: { pessoaId: user.id, edicaoId },
                select: { id: true },
            });
            return this.prisma.indicacao.findMany({
                where: {
                    edicaoId,
                    status: client_1.StatusIndicacao.ATIVA,
                    indicanteLiderId: { in: lideres.map((l) => l.id) },
                },
                include: {
                    categoria: true,
                    inscricaoStartup: {
                        select: {
                            id: true,
                            nomeStartup: true,
                            slugPublico: true,
                            comunidade: { select: { nome: true } },
                        },
                    },
                },
                orderBy: { createdAt: 'desc' },
            });
        }
        const inscricoes = await this.prisma.inscricaoStartup.findMany({
            where: { pessoaId: user.id, edicaoId },
            select: { id: true },
        });
        return this.prisma.indicacao.findMany({
            where: {
                edicaoId,
                status: client_1.StatusIndicacao.ATIVA,
                indicanteInscricaoId: { in: inscricoes.map((i) => i.id) },
            },
            include: {
                categoria: true,
                inscricaoStartup: {
                    select: {
                        id: true,
                        nomeStartup: true,
                        slugPublico: true,
                        comunidade: { select: { nome: true } },
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async categoriaNomes(edicaoId, categoriaId) {
        const cat = await this.prisma.categoria.findFirst({
            where: { id: categoriaId, edicaoId },
        });
        return cat ? [cat.nome] : [];
    }
};
exports.IndicacoesService = IndicacoesService;
exports.IndicacoesService = IndicacoesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        edicoes_service_1.EdicoesService,
        auditoria_service_1.AuditoriaService])
], IndicacoesService);
//# sourceMappingURL=indicacoes.service.js.map