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
exports.EdicoesService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../generated/prisma/client");
const auditoria_service_1 = require("../auditoria/auditoria.service");
const edicoes_periodo_util_1 = require("../common/utils/edicoes-periodo.util");
const prisma_service_1 = require("../prisma/prisma.service");
const FASE_LABEL = {
    FASE_1_CADASTRO: 'Cadastro',
    FASE_2_INDICACOES: 'Indicações',
    FASE_3_COLEGIO_SELETOR: 'Colégio seletor',
    FASE_3_VOTO_POPULAR: 'Voto popular (legado)',
    FASE_4_VOTO_POPULAR: 'Voto popular',
    FASE_5_APURACAO: 'Apuração',
};
let EdicoesService = class EdicoesService {
    constructor(prisma, auditoria) {
        this.prisma = prisma;
        this.auditoria = auditoria;
    }
    async getEdicaoAtiva() {
        const edicao = await this.prisma.edicao.findFirst({
            where: { ativa: true },
            orderBy: { createdAt: 'desc' },
        });
        if (!edicao) {
            throw new common_1.NotFoundException('Nenhuma edição ativa encontrada.');
        }
        return edicao;
    }
    async getEdicaoAtivaId() {
        const edicao = await this.getEdicaoAtiva();
        return edicao.id;
    }
    async getConfig() {
        return this.getEdicaoAtiva();
    }
    async listEdicoes() {
        return this.prisma.edicao.findMany({
            orderBy: { ano: 'desc' },
            select: {
                id: true,
                nome: true,
                ano: true,
                ativa: true,
                xLideresColegio: true,
                nFinalistasPorCategoria: true,
                cotasRegionaisAtivas: true,
                _count: { select: { categorias: true } },
            },
        });
    }
    parseCidadesCapital(raw) {
        return String(raw || 'Teresina')
            .split(',')
            .map((c) => c.trim().toLowerCase())
            .filter(Boolean);
    }
    isCapital(cidade, cidadesCapital) {
        if (!cidade?.trim())
            return false;
        return cidadesCapital.includes(cidade.trim().toLowerCase());
    }
    async updateConfig(edicaoId, dto, adminId) {
        const edicao = await this.prisma.edicao.findUnique({ where: { id: edicaoId } });
        if (!edicao)
            throw new common_1.NotFoundException('Edição não encontrada.');
        const indicacoesInicio = (0, edicoes_periodo_util_1.parseDateOnlyStart)(dto.indicacoesInicio);
        const indicacoesFim = (0, edicoes_periodo_util_1.parseDateOnlyEnd)(dto.indicacoesFim);
        const nextInicio = indicacoesInicio !== undefined ? indicacoesInicio : edicao.indicacoesInicio;
        const nextFim = indicacoesFim !== undefined ? indicacoesFim : edicao.indicacoesFim;
        if (nextInicio && nextFim && nextInicio > nextFim) {
            throw new common_1.BadRequestException('A data de fim das indicações deve ser igual ou posterior ao início.');
        }
        const n = dto.nFinalistasPorCategoria ?? edicao.nFinalistasPorCategoria;
        const minCap = dto.cotaMinCapital ?? edicao.cotaMinCapital;
        const minInt = dto.cotaMinInterior ?? edicao.cotaMinInterior;
        if (minCap + minInt > n) {
            throw new common_1.BadRequestException(`A soma das cotas capital (${minCap}) + interior (${minInt}) não pode superar N finalistas (${n}).`);
        }
        const updated = await this.prisma.edicao.update({
            where: { id: edicaoId },
            data: {
                xLideresColegio: dto.xLideresColegio,
                nFinalistasPorCategoria: dto.nFinalistasPorCategoria,
                cotasRegionaisAtivas: dto.cotasRegionaisAtivas,
                cotaMinCapital: dto.cotaMinCapital,
                cotaMinInterior: dto.cotaMinInterior,
                cidadesCapital: dto.cidadesCapital?.trim() || undefined,
                criteriosMd: dto.criteriosMd === undefined
                    ? undefined
                    : dto.criteriosMd?.trim() || null,
                faseAtual: dto.faseAtual,
                ...(indicacoesInicio !== undefined ? { indicacoesInicio } : {}),
                ...(indicacoesFim !== undefined ? { indicacoesFim } : {}),
            },
        });
        if (dto.faseAtual && dto.faseAtual !== edicao.faseAtual) {
            await this.auditoria.registrar({
                edicaoId,
                tipo: client_1.TipoAuditoria.FASE_ALTERADA,
                atorPapel: client_1.PapelAuditoria.ADMIN,
                atorId: adminId,
                payload: { de: edicao.faseAtual, para: dto.faseAtual },
            });
        }
        return updated;
    }
    async clonarConfigParaAtiva(fonteEdicaoId, adminId) {
        const ativa = await this.getEdicaoAtiva();
        if (fonteEdicaoId === ativa.id) {
            throw new common_1.BadRequestException('Selecione uma edição diferente da ativa.');
        }
        const fonte = await this.prisma.edicao.findUnique({
            where: { id: fonteEdicaoId },
            include: { categorias: { orderBy: { ordem: 'asc' } } },
        });
        if (!fonte)
            throw new common_1.NotFoundException('Edição de origem não encontrada.');
        const updated = await this.prisma.edicao.update({
            where: { id: ativa.id },
            data: {
                xLideresColegio: fonte.xLideresColegio,
                nFinalistasPorCategoria: fonte.nFinalistasPorCategoria,
                cotasRegionaisAtivas: fonte.cotasRegionaisAtivas,
                cotaMinCapital: fonte.cotaMinCapital,
                cotaMinInterior: fonte.cotaMinInterior,
                cidadesCapital: fonte.cidadesCapital,
                criteriosMd: fonte.criteriosMd,
            },
        });
        let categoriasCriadas = 0;
        for (const cat of fonte.categorias) {
            const exists = await this.prisma.categoria.findFirst({
                where: { edicaoId: ativa.id, nome: cat.nome },
            });
            if (!exists) {
                await this.prisma.categoria.create({
                    data: {
                        edicaoId: ativa.id,
                        nome: cat.nome,
                        ordem: cat.ordem,
                    },
                });
                categoriasCriadas += 1;
            }
        }
        await this.auditoria.registrar({
            edicaoId: ativa.id,
            tipo: client_1.TipoAuditoria.FASE_ALTERADA,
            atorPapel: client_1.PapelAuditoria.ADMIN,
            atorId: adminId,
            payload: {
                acao: 'CLONAR_CONFIG',
                fonteEdicaoId: fonte.id,
                fonteAno: fonte.ano,
                categoriasCriadas,
            },
        });
        return {
            edicao: updated,
            fonte: { id: fonte.id, nome: fonte.nome, ano: fonte.ano },
            categoriasCriadas,
            message: `Configuração de ${fonte.ano} aplicada à edição ativa. ${categoriasCriadas} categoria(s) nova(s).`,
        };
    }
    async publicarRegulamento(adminId) {
        const edicao = await this.getEdicaoAtiva();
        const categorias = await this.prisma.categoria.findMany({
            where: { edicaoId: edicao.id },
            orderBy: { ordem: 'asc' },
            select: { nome: true, ordem: true },
        });
        const last = await this.prisma.regulamentoVersao.findFirst({
            where: { edicaoId: edicao.id },
            orderBy: { versao: 'desc' },
        });
        const versao = (last?.versao || 0) + 1;
        const criteriosMd = edicao.criteriosMd?.trim() ||
            [
                '## Critérios gerais',
                '',
                '- Podem indicar e votar apenas líderes comunitários e startups cadastradas na edição.',
                '- O colégio seletor aponta finalistas por categoria, respeitando o limite N e cotas regionais (se ativas).',
                '- No voto popular, cada CPF tem um único voto na edição.',
                '- A apuração é publicada em ata pública, com possibilidade de testemunha externa.',
            ].join('\n');
        const snapshot = {
            nome: edicao.nome,
            ano: edicao.ano,
            faseAtual: edicao.faseAtual,
            faseLabel: FASE_LABEL[edicao.faseAtual] || edicao.faseAtual,
            xLideresColegio: edicao.xLideresColegio,
            nFinalistasPorCategoria: edicao.nFinalistasPorCategoria,
            cotasRegionaisAtivas: edicao.cotasRegionaisAtivas,
            cotaMinCapital: edicao.cotaMinCapital,
            cotaMinInterior: edicao.cotaMinInterior,
            cidadesCapital: edicao.cidadesCapital,
            categorias,
        };
        const reg = await this.prisma.regulamentoVersao.create({
            data: {
                edicaoId: edicao.id,
                versao,
                criteriosMd,
                snapshot,
            },
        });
        if (!edicao.criteriosMd?.trim()) {
            await this.prisma.edicao.update({
                where: { id: edicao.id },
                data: { criteriosMd },
            });
        }
        await this.auditoria.registrar({
            edicaoId: edicao.id,
            tipo: client_1.TipoAuditoria.FASE_ALTERADA,
            atorPapel: client_1.PapelAuditoria.ADMIN,
            atorId: adminId,
            payload: { acao: 'PUBLICAR_REGULAMENTO', versao },
        });
        return reg;
    }
    async getRegrasPublicas(versao) {
        const edicao = await this.getEdicaoAtiva();
        const categorias = await this.prisma.categoria.findMany({
            where: { edicaoId: edicao.id },
            orderBy: { ordem: 'asc' },
            select: { nome: true, ordem: true },
        });
        let regulamento = null;
        if (versao) {
            regulamento = await this.prisma.regulamentoVersao.findUnique({
                where: {
                    edicaoId_versao: { edicaoId: edicao.id, versao },
                },
            });
        }
        else {
            regulamento = await this.prisma.regulamentoVersao.findFirst({
                where: { edicaoId: edicao.id },
                orderBy: { versao: 'desc' },
            });
        }
        const historico = await this.prisma.regulamentoVersao.findMany({
            where: { edicaoId: edicao.id },
            orderBy: { versao: 'desc' },
            select: { versao: true, publicadaEm: true },
        });
        const live = {
            nome: edicao.nome,
            ano: edicao.ano,
            faseAtual: edicao.faseAtual,
            faseLabel: FASE_LABEL[edicao.faseAtual] || edicao.faseAtual,
            xLideresColegio: edicao.xLideresColegio,
            nFinalistasPorCategoria: edicao.nFinalistasPorCategoria,
            cotasRegionaisAtivas: edicao.cotasRegionaisAtivas,
            cotaMinCapital: edicao.cotaMinCapital,
            cotaMinInterior: edicao.cotaMinInterior,
            cidadesCapital: edicao.cidadesCapital,
            categorias,
            criteriosMd: edicao.criteriosMd,
        };
        return {
            edicao: {
                id: edicao.id,
                nome: edicao.nome,
                ano: edicao.ano,
                ativa: edicao.ativa,
            },
            vigente: live,
            regulamento: regulamento
                ? {
                    versao: regulamento.versao,
                    publicadaEm: regulamento.publicadaEm,
                    criteriosMd: regulamento.criteriosMd,
                    snapshot: regulamento.snapshot,
                }
                : null,
            historico,
        };
    }
    async setVotacaoAberta(edicaoId, aberta) {
        const edicao = await this.prisma.edicao.findUnique({ where: { id: edicaoId } });
        if (!edicao) {
            throw new common_1.NotFoundException('Edição não encontrada.');
        }
        return this.prisma.edicao.update({
            where: { id: edicaoId },
            data: {
                votacaoAberta: aberta,
                ...(aberta ? { faseAtual: client_1.FasePremio.FASE_4_VOTO_POPULAR } : {}),
            },
            select: {
                id: true,
                nome: true,
                votacaoAberta: true,
                faseAtual: true,
            },
        });
    }
    async setIndicacoesAbertas(edicaoId, abertas) {
        const edicao = await this.prisma.edicao.findUnique({ where: { id: edicaoId } });
        if (!edicao)
            throw new common_1.NotFoundException('Edição não encontrada.');
        return this.prisma.edicao.update({
            where: { id: edicaoId },
            data: {
                indicacoesAbertas: abertas,
                ...(abertas ? { faseAtual: client_1.FasePremio.FASE_2_INDICACOES } : {}),
            },
            select: {
                id: true,
                nome: true,
                indicacoesAbertas: true,
                indicacoesInicio: true,
                indicacoesFim: true,
                faseAtual: true,
            },
        });
    }
    async setColegioHabilitado(edicaoId, habilitado) {
        const edicao = await this.prisma.edicao.findUnique({ where: { id: edicaoId } });
        if (!edicao)
            throw new common_1.NotFoundException('Edição não encontrada.');
        return this.prisma.edicao.update({
            where: { id: edicaoId },
            data: {
                colegioHabilitado: habilitado,
                ...(habilitado ? { faseAtual: client_1.FasePremio.FASE_3_COLEGIO_SELETOR } : {}),
            },
            select: {
                id: true,
                nome: true,
                colegioHabilitado: true,
                faseAtual: true,
            },
        });
    }
    async listCategorias() {
        const edicaoId = await this.getEdicaoAtivaId();
        return this.prisma.categoria.findMany({
            where: { edicaoId },
            orderBy: { ordem: 'asc' },
        });
    }
    async createCategoria(dto) {
        const edicaoId = await this.getEdicaoAtivaId();
        try {
            return await this.prisma.categoria.create({
                data: {
                    edicaoId,
                    nome: dto.nome,
                    ordem: dto.ordem ?? 0,
                },
            });
        }
        catch {
            throw new common_1.ConflictException('Já existe uma categoria com este nome nesta edição.');
        }
    }
    async createFinalista(dto) {
        const edicaoId = await this.getEdicaoAtivaId();
        const inscricao = await this.prisma.inscricaoStartup.findFirst({
            where: {
                id: dto.inscricaoStartupId,
                edicaoId,
                status: {
                    in: [client_1.StatusInscricaoStartup.ATIVO, client_1.StatusInscricaoStartup.PENDENTE],
                },
            },
        });
        if (!inscricao) {
            throw new common_1.NotFoundException('Inscrição de startup não encontrada ou inativa.');
        }
        const categoria = await this.prisma.categoria.findFirst({
            where: { edicaoId, nome: dto.categoria },
        });
        if (!categoria) {
            throw new common_1.NotFoundException('Categoria não encontrada nesta edição.');
        }
        const existing = await this.prisma.finalista.findFirst({
            where: {
                edicaoId,
                categoriaId: categoria.id,
                inscricaoStartupId: dto.inscricaoStartupId,
            },
        });
        if (existing) {
            throw new common_1.ConflictException('Esta startup já é finalista nesta categoria.');
        }
        const count = await this.prisma.finalista.count({
            where: { edicaoId, categoriaId: categoria.id, ativo: true },
        });
        const edicao = await this.getEdicaoAtiva();
        if (count >= edicao.nFinalistasPorCategoria) {
            throw new common_1.BadRequestException(`Limite de ${edicao.nFinalistasPorCategoria} finalistas por categoria atingido.`);
        }
        return this.prisma.finalista.create({
            data: {
                edicaoId,
                categoriaId: categoria.id,
                inscricaoStartupId: dto.inscricaoStartupId,
                metaResumo: dto.metaResumo,
            },
            include: {
                categoria: true,
                inscricaoStartup: {
                    select: {
                        id: true,
                        nomeStartup: true,
                        cidadeOperacao: true,
                        categoria: true,
                    },
                },
            },
        });
    }
    async listFinalistasAdmin() {
        const edicaoId = await this.getEdicaoAtivaId();
        return this.prisma.finalista.findMany({
            where: { edicaoId },
            include: {
                categoria: true,
                inscricaoStartup: {
                    select: {
                        id: true,
                        nomeStartup: true,
                        cidadeOperacao: true,
                        status: true,
                    },
                },
            },
            orderBy: [{ categoria: { ordem: 'asc' } }, { createdAt: 'asc' }],
        });
    }
};
exports.EdicoesService = EdicoesService;
exports.EdicoesService = EdicoesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        auditoria_service_1.AuditoriaService])
], EdicoesService);
//# sourceMappingURL=edicoes.service.js.map