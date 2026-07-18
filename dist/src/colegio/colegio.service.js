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
exports.ColegioService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../generated/prisma/client");
const auditoria_service_1 = require("../auditoria/auditoria.service");
const edicoes_service_1 = require("../edicoes/edicoes.service");
const prisma_service_1 = require("../prisma/prisma.service");
let ColegioService = class ColegioService {
    constructor(prisma, edicoesService, auditoria) {
        this.prisma = prisma;
        this.edicoesService = edicoesService;
        this.auditoria = auditoria;
    }
    async listIndicadas(pessoaId, categoriaId) {
        const membro = await this.assertMembroAtivo(pessoaId);
        const edicaoId = await this.edicoesService.getEdicaoAtivaId();
        const indicacoes = await this.prisma.indicacao.findMany({
            where: {
                edicaoId,
                status: client_1.StatusIndicacao.ATIVA,
                ...(categoriaId ? { categoriaId } : {}),
            },
            include: {
                categoria: true,
                inscricaoStartup: {
                    select: {
                        id: true,
                        nomeStartup: true,
                        cidadeOperacao: true,
                        slugPublico: true,
                        comunidadeId: true,
                        comunidade: { select: { id: true, nome: true } },
                    },
                },
            },
            orderBy: [{ categoria: { ordem: 'asc' } }, { createdAt: 'asc' }],
        });
        const grouped = new Map();
        for (const item of indicacoes) {
            const key = `${item.categoriaId}:${item.inscricaoStartupId}`;
            if (!grouped.has(key))
                grouped.set(key, item);
        }
        const items = [...grouped.values()];
        const selecoes = await this.prisma.selecaoColegio.findMany({
            where: {
                edicaoId,
                membroColegioId: membro.id,
                ...(categoriaId ? { categoriaId } : {}),
                inscricaoStartupId: {
                    in: items.map((i) => i.inscricaoStartupId),
                },
            },
            select: {
                categoriaId: true,
                inscricaoStartupId: true,
                status: true,
                conflitoInteresse: true,
            },
        });
        const selecaoByKey = new Map(selecoes.map((s) => [
            `${s.categoriaId}:${s.inscricaoStartupId}`,
            s,
        ]));
        return items.map((item) => {
            const key = `${item.categoriaId}:${item.inscricaoStartupId}`;
            const minhaSelecao = selecaoByKey.get(key) || null;
            const mesmaComunidade = item.inscricaoStartup.comunidadeId === membro.comunidadeId;
            return {
                ...item,
                mesmaComunidade,
                minhaSelecao,
            };
        });
    }
    async registrarSelecao(pessoaId, dto) {
        const membro = await this.assertMembroAtivo(pessoaId);
        const edicao = await this.edicoesService.getEdicaoAtiva();
        if (!edicao.colegioHabilitado) {
            throw new common_1.ForbiddenException('O colégio seletor não está habilitado.');
        }
        const categoria = await this.prisma.categoria.findFirst({
            where: { id: dto.categoriaId, edicaoId: edicao.id },
        });
        if (!categoria)
            throw new common_1.NotFoundException('Categoria não encontrada.');
        const startup = await this.prisma.inscricaoStartup.findFirst({
            where: { id: dto.inscricaoStartupId, edicaoId: edicao.id },
        });
        if (!startup)
            throw new common_1.NotFoundException('Startup não encontrada.');
        const conflito = dto.conflitoInteresse === true ||
            startup.comunidadeId === membro.comunidadeId;
        const status = conflito && dto.status !== client_1.StatusSelecaoColegio.ABSTENCAO
            ? client_1.StatusSelecaoColegio.ABSTENCAO
            : dto.status;
        if (status === client_1.StatusSelecaoColegio.AVANCADA) {
            const avancadas = await this.prisma.selecaoColegio.groupBy({
                by: ['inscricaoStartupId'],
                where: {
                    edicaoId: edicao.id,
                    categoriaId: categoria.id,
                    membroColegioId: membro.id,
                    status: client_1.StatusSelecaoColegio.AVANCADA,
                    NOT: { inscricaoStartupId: startup.id },
                },
            });
            if (avancadas.length >= edicao.nFinalistasPorCategoria) {
                throw new common_1.BadRequestException(`Limite de ${edicao.nFinalistasPorCategoria} finalistas por categoria atingido.`);
            }
        }
        const selecao = await this.prisma.selecaoColegio.upsert({
            where: {
                edicaoId_categoriaId_inscricaoStartupId_membroColegioId: {
                    edicaoId: edicao.id,
                    categoriaId: categoria.id,
                    inscricaoStartupId: startup.id,
                    membroColegioId: membro.id,
                },
            },
            create: {
                edicaoId: edicao.id,
                categoriaId: categoria.id,
                inscricaoStartupId: startup.id,
                membroColegioId: membro.id,
                status,
                conflitoInteresse: conflito,
            },
            update: {
                status,
                conflitoInteresse: conflito,
            },
        });
        await this.auditoria.registrar({
            edicaoId: edicao.id,
            tipo: client_1.TipoAuditoria.SELECAO_COLEGIO,
            atorPapel: client_1.PapelAuditoria.LIDER,
            atorId: pessoaId,
            payload: {
                selecaoId: selecao.id,
                status,
                conflitoInteresse: conflito,
            },
        });
        return selecao;
    }
    async minhasSelecoes(pessoaId) {
        const membro = await this.assertMembroAtivo(pessoaId);
        return this.prisma.selecaoColegio.findMany({
            where: { membroColegioId: membro.id },
            include: {
                categoria: true,
                inscricaoStartup: {
                    select: { id: true, nomeStartup: true, slugPublico: true },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async assertMembroAtivo(pessoaId) {
        const edicao = await this.edicoesService.getEdicaoAtiva();
        const lideres = await this.prisma.lider.findMany({
            where: {
                pessoaId,
                edicaoId: edicao.id,
                status: 'ATIVO',
            },
            select: { id: true },
        });
        if (!lideres.length) {
            throw new common_1.ForbiddenException('Você não está apontado para o colégio seletor nesta edição.');
        }
        const membro = await this.prisma.membroColegio.findFirst({
            where: {
                edicaoId: edicao.id,
                liderId: { in: lideres.map((l) => l.id) },
                ativo: true,
            },
        });
        if (!membro) {
            throw new common_1.ForbiddenException('Você não está apontado para o colégio seletor nesta edição.');
        }
        return membro;
    }
};
exports.ColegioService = ColegioService;
exports.ColegioService = ColegioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        edicoes_service_1.EdicoesService,
        auditoria_service_1.AuditoriaService])
], ColegioService);
//# sourceMappingURL=colegio.service.js.map