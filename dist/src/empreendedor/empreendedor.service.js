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
exports.EmpreendedorService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const client_1 = require("../../generated/prisma/client");
const auditoria_service_1 = require("../auditoria/auditoria.service");
const startup_url_util_1 = require("../common/utils/startup-url.util");
const prisma_service_1 = require("../prisma/prisma.service");
let EmpreendedorService = class EmpreendedorService {
    constructor(prisma, auditoria) {
        this.prisma = prisma;
        this.auditoria = auditoria;
    }
    async me(pessoaId) {
        const inscricao = await this.resolveInscricao(pessoaId);
        return this.getInscricao(inscricao.id);
    }
    async update(pessoaId, dto) {
        const inscricao = await this.resolveInscricao(pessoaId);
        const updated = await this.prisma.inscricaoStartup.update({
            where: { id: inscricao.id },
            data: {
                nomeStartup: dto.nomeStartup ?? undefined,
                categoria: dto.categoria ?? undefined,
                cidadeOperacao: dto.cidadeOperacao ?? undefined,
                site: dto.site ?? undefined,
                descricao: dto.descricao ?? undefined,
                logoUrl: dto.logoUrl ?? undefined,
                pitchCurto: dto.pitchCurto ?? undefined,
                videoUrl: dto.videoUrl ?? undefined,
            },
            include: {
                comunidade: { select: { id: true, nome: true, slug: true } },
                badges: {
                    include: {
                        comunidade: { select: { id: true, nome: true, slug: true } },
                    },
                },
            },
        });
        await this.auditoria.registrar({
            edicaoId: inscricao.edicaoId,
            tipo: client_1.TipoAuditoria.DADOS_ALTERADOS,
            atorPapel: client_1.PapelAuditoria.EMPREENDEDOR,
            atorId: pessoaId,
            payload: { campos: Object.keys(dto) },
        });
        return this.getInscricao(updated.id);
    }
    async updateLogo(pessoaId, logoUrl) {
        const inscricao = await this.resolveInscricao(pessoaId);
        await this.prisma.inscricaoStartup.update({
            where: { id: inscricao.id },
            data: { logoUrl },
        });
        await this.auditoria.registrar({
            edicaoId: inscricao.edicaoId,
            tipo: client_1.TipoAuditoria.DADOS_ALTERADOS,
            atorPapel: client_1.PapelAuditoria.EMPREENDEDOR,
            atorId: pessoaId,
            payload: { campos: ['logoUrl'] },
        });
        return this.getInscricao(inscricao.id);
    }
    async setBadges(pessoaId, dto) {
        const inscricao = await this.resolveInscricao(pessoaId);
        const uniqueIds = [...new Set(dto.comunidadeIds)].filter((id) => id !== inscricao.comunidadeId);
        const comunidades = await this.prisma.comunidade.findMany({
            where: {
                id: { in: uniqueIds },
                edicaoId: inscricao.edicaoId,
            },
        });
        if (comunidades.length !== uniqueIds.length) {
            throw new common_1.BadRequestException('Uma ou mais comunidades informadas são inválidas nesta edição.');
        }
        await this.prisma.$transaction(async (tx) => {
            await tx.startupComunidadeBadge.deleteMany({
                where: { inscricaoStartupId: inscricao.id },
            });
            if (uniqueIds.length) {
                await tx.startupComunidadeBadge.createMany({
                    data: uniqueIds.map((comunidadeId) => ({
                        edicaoId: inscricao.edicaoId,
                        inscricaoStartupId: inscricao.id,
                        comunidadeId,
                    })),
                });
            }
        });
        return this.getInscricao(inscricao.id);
    }
    async definirSenha(pessoaId, dto) {
        const inscricao = await this.resolveInscricao(pessoaId);
        const hash = await bcrypt.hash(dto.senha, 10);
        await this.prisma.$transaction([
            this.prisma.inscricaoStartup.update({
                where: { id: inscricao.id },
                data: { senhaHash: hash },
            }),
            this.prisma.pessoa.update({
                where: { id: pessoaId },
                data: { senhaHash: hash },
            }),
        ]);
        return { ok: true };
    }
    async resolveInscricao(pessoaId) {
        const inscricao = await this.prisma.inscricaoStartup.findFirst({
            where: {
                pessoaId,
                status: {
                    in: [client_1.StatusInscricaoStartup.ATIVO, client_1.StatusInscricaoStartup.PENDENTE],
                },
            },
        });
        if (!inscricao) {
            throw new common_1.NotFoundException('Inscrição não encontrada ou inativa.');
        }
        return inscricao;
    }
    async getInscricao(inscricaoId) {
        const inscricao = await this.prisma.inscricaoStartup.findUnique({
            where: { id: inscricaoId },
            include: {
                comunidade: { select: { id: true, nome: true, slug: true } },
                badges: {
                    include: {
                        comunidade: { select: { id: true, nome: true, slug: true } },
                    },
                },
                finalistas: {
                    where: { ativo: true },
                    include: {
                        categoria: { select: { id: true, nome: true } },
                        resultados: {
                            select: { publicadoEm: true, totalVotos: true },
                        },
                    },
                },
                edicao: {
                    select: { nome: true, ano: true, votacaoAberta: true },
                },
            },
        });
        if (!inscricao)
            throw new common_1.NotFoundException('Inscrição não encontrada.');
        return this.toPublic(inscricao);
    }
    toPublic(inscricao) {
        const finalistas = (inscricao.finalistas || []).map((f) => {
            const resultado = f.resultados.find((r) => r.publicadoEm);
            return {
                id: f.id,
                categoriaId: f.categoria.id,
                categoria: f.categoria.nome,
                metaResumo: f.metaResumo,
                vencedor: Boolean(resultado),
                totalVotos: resultado?.totalVotos ?? null,
            };
        });
        const ehFinalista = finalistas.length > 0;
        const ehVencedor = finalistas.some((f) => f.vencedor);
        return {
            id: inscricao.id,
            nomeStartup: inscricao.nomeStartup,
            categoria: inscricao.categoria,
            cidadeOperacao: inscricao.cidadeOperacao,
            site: inscricao.site,
            descricao: inscricao.descricao,
            logoUrl: inscricao.logoUrl,
            pitchCurto: inscricao.pitchCurto,
            videoUrl: inscricao.videoUrl,
            slugPublico: inscricao.slugPublico,
            paginaUrl: (0, startup_url_util_1.publicPathForStartup)(inscricao.site, inscricao.slugPublico),
            status: inscricao.status,
            comunidade: inscricao.comunidade,
            badges: inscricao.badges.map((b) => b.comunidade),
            ehFinalista,
            ehVencedor,
            finalistas,
            votacaoAberta: inscricao.edicao?.votacaoAberta ?? false,
            edicaoNome: inscricao.edicao?.nome ?? null,
            edicaoAno: inscricao.edicao?.ano ?? null,
        };
    }
};
exports.EmpreendedorService = EmpreendedorService;
exports.EmpreendedorService = EmpreendedorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        auditoria_service_1.AuditoriaService])
], EmpreendedorService);
//# sourceMappingURL=empreendedor.service.js.map