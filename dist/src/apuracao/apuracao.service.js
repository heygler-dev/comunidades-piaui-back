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
exports.ApuracaoService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const client_1 = require("../../generated/prisma/client");
const auditoria_service_1 = require("../auditoria/auditoria.service");
const edicoes_service_1 = require("../edicoes/edicoes.service");
const prisma_service_1 = require("../prisma/prisma.service");
let ApuracaoService = class ApuracaoService {
    constructor(prisma, edicoesService, auditoria) {
        this.prisma = prisma;
        this.edicoesService = edicoesService;
        this.auditoria = auditoria;
    }
    async anomalias() {
        const edicao = await this.edicoesService.getEdicaoAtiva();
        const votos = await this.prisma.voto.findMany({
            where: { edicaoId: edicao.id },
            select: { createdAt: true, cpf: true },
            orderBy: { createdAt: 'asc' },
        });
        const porHora = new Map();
        for (const voto of votos) {
            const key = voto.createdAt.toISOString().slice(0, 13);
            porHora.set(key, (porHora.get(key) || 0) + 1);
        }
        const picos = [...porHora.entries()]
            .map(([hora, total]) => ({ hora, total }))
            .filter((row) => row.total >= 20)
            .sort((a, b) => b.total - a.total);
        const semElegibilidade = await this.prisma.voto.count({
            where: {
                edicaoId: edicao.id,
                votanteLiderId: null,
                votanteInscricaoId: null,
            },
        });
        return {
            totalVotos: votos.length,
            picos,
            votosSemElegibilidade: semElegibilidade,
        };
    }
    async quorumColegio() {
        const edicao = await this.edicoesService.getEdicaoAtiva();
        const comunidades = await this.prisma.comunidade.count({
            where: { edicaoId: edicao.id },
        });
        const membros = await this.prisma.membroColegio.count({
            where: { edicaoId: edicao.id, ativo: true },
        });
        const comunidadesComMembro = await this.prisma.membroColegio.groupBy({
            by: ['comunidadeId'],
            where: { edicaoId: edicao.id, ativo: true },
        });
        const selecoes = await this.prisma.selecaoColegio.groupBy({
            by: ['membroColegioId'],
            where: { edicaoId: edicao.id },
        });
        return {
            comunidades,
            membrosAtivos: membros,
            comunidadesRepresentadas: comunidadesComMembro.length,
            membrosQueSelecionaram: selecoes.length,
            xLideresColegio: edicao.xLideresColegio,
            esperado: comunidades * edicao.xLideresColegio,
        };
    }
    async publicarResultados(adminId) {
        const edicao = await this.edicoesService.getEdicaoAtiva();
        const categorias = await this.prisma.categoria.findMany({
            where: { edicaoId: edicao.id },
            orderBy: { ordem: 'asc' },
        });
        const publicados = [];
        for (const categoria of categorias) {
            const finalistas = await this.prisma.finalista.findMany({
                where: { edicaoId: edicao.id, categoriaId: categoria.id, ativo: true },
                include: {
                    inscricaoStartup: { select: { nomeStartup: true } },
                    _count: { select: { votos: true } },
                },
            });
            if (!finalistas.length)
                continue;
            const ranking = [...finalistas].sort((a, b) => b._count.votos - a._count.votos);
            const vencedor = ranking[0];
            const resultado = await this.prisma.resultadoCategoria.upsert({
                where: {
                    edicaoId_categoriaId: {
                        edicaoId: edicao.id,
                        categoriaId: categoria.id,
                    },
                },
                create: {
                    edicaoId: edicao.id,
                    categoriaId: categoria.id,
                    finalistaId: vencedor.id,
                    totalVotos: vencedor._count.votos,
                    publicadoEm: new Date(),
                    validadoPorId: adminId,
                },
                update: {
                    finalistaId: vencedor.id,
                    totalVotos: vencedor._count.votos,
                    publicadoEm: new Date(),
                    validadoPorId: adminId,
                },
                include: {
                    categoria: true,
                    finalista: {
                        include: {
                            inscricaoStartup: { select: { nomeStartup: true, slugPublico: true } },
                        },
                    },
                },
            });
            publicados.push(resultado);
        }
        const linhas = publicados.map((r) => `- **${r.categoria.nome}**: ${r.finalista.inscricaoStartup.nomeStartup} (${r.totalVotos} votos)`);
        const testemunhasConfirmadas = await this.prisma.testemunhaApuracao.findMany({
            where: {
                edicaoId: edicao.id,
                status: client_1.StatusTestemunhaApuracao.CONFIRMADA,
            },
            orderBy: { confirmadaEm: 'asc' },
        });
        const linhasTestemunhas = testemunhasConfirmadas.length
            ? [
                '',
                '## Testemunhas externas',
                '',
                ...testemunhasConfirmadas.map((t) => `- **${t.nome}**${t.organizacao ? ` (${t.organizacao})` : ''} — ${t.email}`),
            ]
            : [];
        const conteudoMd = [
            `# Ata de apuração — ${edicao.nome}`,
            '',
            `Publicada em ${new Date().toISOString()}`,
            '',
            '## Vencedores por categoria',
            '',
            ...linhas,
            ...linhasTestemunhas,
        ].join('\n');
        const ata = await this.prisma.ataApuracao.create({
            data: {
                edicaoId: edicao.id,
                conteudoMd,
                publicadaEm: new Date(),
            },
        });
        await this.auditoria.registrar({
            edicaoId: edicao.id,
            tipo: client_1.TipoAuditoria.RESULTADO_PUBLICADO,
            atorPapel: client_1.PapelAuditoria.ADMIN,
            atorId: adminId,
            payload: { ataId: ata.id, categorias: publicados.length },
        });
        const ranking = await this.rankingMaisVotadas(10);
        return { resultados: publicados, ata, ranking };
    }
    async rankingMaisVotadas(limit = 10) {
        const edicao = await this.edicoesService.getEdicaoAtiva();
        const finalistas = await this.prisma.finalista.findMany({
            where: { edicaoId: edicao.id, ativo: true },
            include: {
                categoria: { select: { nome: true } },
                inscricaoStartup: {
                    select: {
                        nomeStartup: true,
                        cidadeOperacao: true,
                        slugPublico: true,
                    },
                },
                _count: { select: { votos: true } },
            },
        });
        return [...finalistas]
            .sort((a, b) => b._count.votos - a._count.votos)
            .slice(0, Math.max(1, Math.min(limit, 50)))
            .map((f, index) => ({
            posicao: index + 1,
            finalistaId: f.id,
            nomeStartup: f.inscricaoStartup.nomeStartup || '—',
            categoria: f.categoria.nome,
            cidade: f.inscricaoStartup.cidadeOperacao || null,
            slugPublico: f.inscricaoStartup.slugPublico || null,
            totalVotos: f._count.votos,
        }));
    }
    async promoverFinalistasDoColegio() {
        const edicao = await this.edicoesService.getEdicaoAtiva();
        const categorias = await this.prisma.categoria.findMany({
            where: { edicaoId: edicao.id },
        });
        const cidadesCapital = this.edicoesService.parseCidadesCapital(edicao.cidadesCapital);
        const criados = [];
        for (const categoria of categorias) {
            const avancadas = await this.prisma.selecaoColegio.groupBy({
                by: ['inscricaoStartupId'],
                where: {
                    edicaoId: edicao.id,
                    categoriaId: categoria.id,
                    status: client_1.StatusSelecaoColegio.AVANCADA,
                },
                _count: { _all: true },
            });
            const ranked = [...avancadas].sort((a, b) => b._count._all - a._count._all);
            const inscricoes = await this.prisma.inscricaoStartup.findMany({
                where: {
                    id: { in: ranked.map((r) => r.inscricaoStartupId) },
                },
                select: { id: true, cidadeOperacao: true },
            });
            const cidadeById = new Map(inscricoes.map((i) => [i.id, i.cidadeOperacao]));
            const candidatos = ranked.map((r) => ({
                inscricaoStartupId: r.inscricaoStartupId,
                apoios: r._count._all,
                capital: this.edicoesService.isCapital(cidadeById.get(r.inscricaoStartupId), cidadesCapital),
            }));
            const selecionados = this.selecionarComCotas(candidatos, edicao.nFinalistasPorCategoria, edicao.cotasRegionaisAtivas, edicao.cotaMinCapital, edicao.cotaMinInterior);
            for (const item of selecionados) {
                const finalista = await this.prisma.finalista.upsert({
                    where: {
                        edicaoId_categoriaId_inscricaoStartupId: {
                            edicaoId: edicao.id,
                            categoriaId: categoria.id,
                            inscricaoStartupId: item.inscricaoStartupId,
                        },
                    },
                    create: {
                        edicaoId: edicao.id,
                        categoriaId: categoria.id,
                        inscricaoStartupId: item.inscricaoStartupId,
                        metaResumo: `Selecionada pelo colégio (${item.apoios} apoios)${edicao.cotasRegionaisAtivas
                            ? item.capital
                                ? ' · cota capital'
                                : ' · cota interior'
                            : ''}`,
                    },
                    update: { ativo: true },
                });
                criados.push(finalista);
            }
        }
        return { finalistas: criados.length };
    }
    selecionarComCotas(candidatos, n, cotasAtivas, minCapital, minInterior) {
        if (!candidatos.length)
            return [];
        const limit = Math.max(1, n);
        if (!cotasAtivas || (minCapital <= 0 && minInterior <= 0)) {
            return candidatos.slice(0, limit);
        }
        const picked = [];
        const used = new Set();
        const take = (pred, need) => {
            for (const c of candidatos) {
                if (picked.length >= limit || need <= 0)
                    break;
                if (used.has(c.inscricaoStartupId) || !pred(c))
                    continue;
                picked.push(c);
                used.add(c.inscricaoStartupId);
                need -= 1;
            }
        };
        take((c) => c.capital, Math.max(0, minCapital));
        take((c) => !c.capital, Math.max(0, minInterior));
        take(() => true, limit - picked.length);
        return picked;
    }
    async getAtaPublica() {
        const edicao = await this.edicoesService.getEdicaoAtiva();
        const ata = await this.prisma.ataApuracao.findFirst({
            where: { edicaoId: edicao.id, publicadaEm: { not: null } },
            orderBy: { publicadaEm: 'desc' },
        });
        if (!ata)
            throw new common_1.NotFoundException('Ata de apuração ainda não publicada.');
        const testemunhas = await this.prisma.testemunhaApuracao.findMany({
            where: {
                edicaoId: edicao.id,
                status: client_1.StatusTestemunhaApuracao.CONFIRMADA,
            },
            orderBy: { confirmadaEm: 'asc' },
            select: {
                id: true,
                nome: true,
                email: true,
                organizacao: true,
                confirmadaEm: true,
                observacao: true,
            },
        });
        return {
            ...ata,
            edicao: { id: edicao.id, nome: edicao.nome, ano: edicao.ano },
            testemunhas,
        };
    }
    async listResultadosPublicos() {
        const edicao = await this.edicoesService.getEdicaoAtiva();
        return this.prisma.resultadoCategoria.findMany({
            where: { edicaoId: edicao.id, publicadoEm: { not: null } },
            include: {
                categoria: true,
                finalista: {
                    include: {
                        inscricaoStartup: {
                            select: {
                                nomeStartup: true,
                                slugPublico: true,
                                cidadeOperacao: true,
                            },
                        },
                    },
                },
            },
            orderBy: { categoria: { ordem: 'asc' } },
        });
    }
    async listTestemunhasAdmin() {
        const edicao = await this.edicoesService.getEdicaoAtiva();
        return this.prisma.testemunhaApuracao.findMany({
            where: { edicaoId: edicao.id },
            orderBy: { convidadaEm: 'desc' },
        });
    }
    async convidarTestemunha(dto) {
        const edicao = await this.edicoesService.getEdicaoAtiva();
        const token = (0, crypto_1.randomBytes)(16).toString('hex');
        const testemunha = await this.prisma.testemunhaApuracao.create({
            data: {
                edicaoId: edicao.id,
                nome: dto.nome.trim(),
                email: dto.email.trim().toLowerCase(),
                organizacao: dto.organizacao?.trim() || null,
                token,
            },
        });
        return {
            ...testemunha,
            confirmaUrl: `/testemunha.html?token=${token}`,
        };
    }
    async getConviteTestemunha(token) {
        const testemunha = await this.prisma.testemunhaApuracao.findUnique({
            where: { token },
            include: {
                edicao: { select: { id: true, nome: true, ano: true } },
            },
        });
        if (!testemunha)
            throw new common_1.NotFoundException('Convite de testemunha não encontrado.');
        return {
            id: testemunha.id,
            nome: testemunha.nome,
            email: testemunha.email,
            organizacao: testemunha.organizacao,
            status: testemunha.status,
            confirmadaEm: testemunha.confirmadaEm,
            edicao: testemunha.edicao,
        };
    }
    async confirmarTestemunha(token, dto) {
        const testemunha = await this.prisma.testemunhaApuracao.findUnique({
            where: { token },
        });
        if (!testemunha)
            throw new common_1.NotFoundException('Convite de testemunha não encontrado.');
        if (testemunha.status === client_1.StatusTestemunhaApuracao.CONFIRMADA) {
            return testemunha;
        }
        if (testemunha.status === client_1.StatusTestemunhaApuracao.RECUSADA) {
            throw new common_1.BadRequestException('Este convite foi marcado como recusado.');
        }
        return this.prisma.testemunhaApuracao.update({
            where: { id: testemunha.id },
            data: {
                status: client_1.StatusTestemunhaApuracao.CONFIRMADA,
                confirmadaEm: new Date(),
                observacao: dto?.observacao?.trim() || null,
            },
        });
    }
    async galeriaVencedores() {
        const edicoes = await this.prisma.edicao.findMany({
            orderBy: { ano: 'desc' },
            select: {
                id: true,
                nome: true,
                ano: true,
                ativa: true,
                resultados: {
                    where: { publicadoEm: { not: null } },
                    include: {
                        categoria: { select: { nome: true, ordem: true } },
                        finalista: {
                            include: {
                                inscricaoStartup: {
                                    select: {
                                        nomeStartup: true,
                                        slugPublico: true,
                                        cidadeOperacao: true,
                                        logoUrl: true,
                                    },
                                },
                            },
                        },
                    },
                    orderBy: { categoria: { ordem: 'asc' } },
                },
                testemunhas: {
                    where: { status: client_1.StatusTestemunhaApuracao.CONFIRMADA },
                    select: {
                        nome: true,
                        organizacao: true,
                        confirmadaEm: true,
                    },
                },
            },
        });
        return edicoes
            .filter((e) => e.resultados.length > 0)
            .map((e) => ({
            id: e.id,
            nome: e.nome,
            ano: e.ano,
            ativa: e.ativa,
            vencedores: e.resultados.map((r) => ({
                categoria: r.categoria.nome,
                totalVotos: r.totalVotos,
                publicadoEm: r.publicadoEm,
                startup: r.finalista.inscricaoStartup.nomeStartup,
                slugPublico: r.finalista.inscricaoStartup.slugPublico,
                cidade: r.finalista.inscricaoStartup.cidadeOperacao,
                logoUrl: r.finalista.inscricaoStartup.logoUrl,
            })),
            testemunhas: e.testemunhas,
        }));
    }
};
exports.ApuracaoService = ApuracaoService;
exports.ApuracaoService = ApuracaoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        edicoes_service_1.EdicoesService,
        auditoria_service_1.AuditoriaService])
], ApuracaoService);
//# sourceMappingURL=apuracao.service.js.map