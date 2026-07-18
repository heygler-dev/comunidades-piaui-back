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
exports.LiderService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../generated/prisma/client");
const cpf_util_1 = require("../common/utils/cpf.util");
const slug_util_1 = require("../common/utils/slug.util");
const edicoes_service_1 = require("../edicoes/edicoes.service");
const pessoas_service_1 = require("../pessoas/pessoas.service");
const prisma_service_1 = require("../prisma/prisma.service");
let LiderService = class LiderService {
    constructor(prisma, edicoesService, pessoasService) {
        this.prisma = prisma;
        this.edicoesService = edicoesService;
        this.pessoasService = pessoasService;
    }
    async me(pessoaId) {
        const perfil = await this.pessoasService.perfilCompleto(pessoaId);
        if (!perfil?.papeis.lider) {
            throw new common_1.NotFoundException('Perfil de líder não encontrado.');
        }
        return perfil;
    }
    async getLink(pessoaId, comunidadeId) {
        const lider = await this.resolveLider(pessoaId, comunidadeId);
        let link = await this.prisma.linkComunidade.findFirst({
            where: { liderId: lider.id, ativo: true },
            orderBy: { createdAt: 'desc' },
        });
        if (!link) {
            link = await this.prisma.linkComunidade.create({
                data: {
                    edicaoId: lider.edicaoId,
                    comunidadeId: lider.comunidadeId,
                    liderId: lider.id,
                    slug: `${lider.comunidade.slug}-${(0, slug_util_1.randomSuffix)()}`,
                },
            });
        }
        return {
            slug: link.slug,
            linkInscricao: `/inscrever/${link.slug}`,
            ativo: link.ativo,
            comunidade: lider.comunidade,
            liderId: lider.id,
        };
    }
    async stats(pessoaId, comunidadeId) {
        const lider = await this.resolveLider(pessoaId, comunidadeId);
        const links = await this.prisma.linkComunidade.findMany({
            where: { liderId: lider.id },
            select: { id: true },
        });
        const linkIds = links.map((l) => l.id);
        const [total, porStatus] = await Promise.all([
            this.prisma.inscricaoStartup.count({
                where: {
                    edicaoId: lider.edicaoId,
                    OR: [
                        { liderId: lider.id },
                        ...(linkIds.length ? [{ linkComunidadeId: { in: linkIds } }] : []),
                    ],
                },
            }),
            this.prisma.inscricaoStartup.groupBy({
                by: ['status'],
                where: {
                    edicaoId: lider.edicaoId,
                    OR: [
                        { liderId: lider.id },
                        ...(linkIds.length ? [{ linkComunidadeId: { in: linkIds } }] : []),
                    ],
                },
                _count: { _all: true },
            }),
        ]);
        return {
            comunidade: lider.comunidade,
            total,
            porStatus: Object.fromEntries(porStatus.map((row) => [row.status, row._count._all])),
        };
    }
    async listLideresComunidade(pessoaId, comunidadeId) {
        const lider = await this.resolveLider(pessoaId, comunidadeId);
        return this.prisma.lider.findMany({
            where: {
                edicaoId: lider.edicaoId,
                comunidadeId: lider.comunidadeId,
            },
            select: {
                id: true,
                nome: true,
                email: true,
                telefone: true,
                tipoLider: true,
                status: true,
                ativadoEm: true,
            },
            orderBy: { ativadoEm: 'asc' },
        });
    }
    async nomearLider(pessoaId, dto, comunidadeId) {
        const lider = await this.resolveLider(pessoaId, comunidadeId);
        if (lider.tipoLider !== client_1.TipoLider.SEMENTE) {
            throw new common_1.ForbiddenException('Apenas o líder-semente pode nomear outros líderes da comunidade.');
        }
        if (!(0, cpf_util_1.isValidCpf)(dto.cpf)) {
            throw new common_1.BadRequestException('CPF inválido.');
        }
        const cpf = (0, cpf_util_1.normalizeCpf)(dto.cpf);
        const jaNaComunidade = await this.prisma.lider.findFirst({
            where: {
                edicaoId: lider.edicaoId,
                comunidadeId: lider.comunidadeId,
                cpf,
            },
        });
        if (jaNaComunidade) {
            throw new common_1.ConflictException('Este CPF já é líder nesta comunidade.');
        }
        const pessoa = await this.pessoasService.upsertByCpf({
            edicaoId: lider.edicaoId,
            cpf,
            nome: dto.nome,
            email: dto.email,
            telefone: dto.telefone,
            senhaPlain: dto.senha,
            lgpdAceitoEm: new Date(),
        });
        const token = (0, slug_util_1.randomSuffix)(8);
        const convite = await this.prisma.convite.create({
            data: {
                edicaoId: lider.edicaoId,
                comunidadeId: lider.comunidadeId,
                tipo: client_1.TipoConvite.LIDER,
                token,
                liderCriadorId: lider.id,
                usadoEm: new Date(),
                ativo: false,
            },
        });
        const novo = await this.prisma.lider.create({
            data: {
                edicaoId: lider.edicaoId,
                pessoaId: pessoa.id,
                comunidadeId: lider.comunidadeId,
                conviteId: convite.id,
                nome: pessoa.nome,
                cpf: pessoa.cpf,
                email: pessoa.email,
                telefone: dto.telefone,
                senhaHash: pessoa.senhaHash,
                tipoLider: client_1.TipoLider.COMUNITARIO,
                nomeadoPorId: lider.id,
                status: client_1.StatusParticipante.ATIVO,
                lgpdAceitoEm: new Date(),
            },
            select: {
                id: true,
                nome: true,
                email: true,
                tipoLider: true,
                status: true,
                pessoaId: true,
            },
        });
        await this.prisma.linkComunidade.create({
            data: {
                edicaoId: lider.edicaoId,
                comunidadeId: lider.comunidadeId,
                liderId: novo.id,
                slug: `${lider.comunidade.slug}-${(0, slug_util_1.randomSuffix)()}`,
            },
        });
        return novo;
    }
    async apontarColegio(pessoaId, liderIds, comunidadeId) {
        const lider = await this.resolveLider(pessoaId, comunidadeId);
        const edicao = await this.edicoesService.getEdicaoAtiva();
        if (!edicao.colegioHabilitado) {
            throw new common_1.ForbiddenException('O colégio seletor ainda não foi habilitado.');
        }
        const uniqueIds = [...new Set(liderIds)];
        if (uniqueIds.length > edicao.xLideresColegio) {
            throw new common_1.BadRequestException(`Cada comunidade pode apontar no máximo ${edicao.xLideresColegio} líder(es).`);
        }
        const lideres = await this.prisma.lider.findMany({
            where: {
                id: { in: uniqueIds },
                edicaoId: lider.edicaoId,
                comunidadeId: lider.comunidadeId,
                status: client_1.StatusParticipante.ATIVO,
            },
        });
        if (lideres.length !== uniqueIds.length) {
            throw new common_1.BadRequestException('Todos os líderes apontados devem pertencer à sua comunidade e estar ativos.');
        }
        await this.prisma.$transaction(async (tx) => {
            await tx.membroColegio.updateMany({
                where: {
                    edicaoId: lider.edicaoId,
                    comunidadeId: lider.comunidadeId,
                },
                data: { ativo: false },
            });
            for (const id of uniqueIds) {
                await tx.membroColegio.upsert({
                    where: {
                        edicaoId_liderId: {
                            edicaoId: lider.edicaoId,
                            liderId: id,
                        },
                    },
                    create: {
                        edicaoId: lider.edicaoId,
                        comunidadeId: lider.comunidadeId,
                        liderId: id,
                        ativo: true,
                    },
                    update: {
                        comunidadeId: lider.comunidadeId,
                        ativo: true,
                        apontadoEm: new Date(),
                    },
                });
            }
        });
        return this.prisma.membroColegio.findMany({
            where: {
                edicaoId: lider.edicaoId,
                comunidadeId: lider.comunidadeId,
                ativo: true,
            },
            include: {
                lider: { select: { id: true, nome: true, email: true } },
            },
        });
    }
    async listInscricoes(pessoaId, comunidadeId) {
        const lider = await this.resolveLider(pessoaId, comunidadeId);
        return this.prisma.inscricaoStartup.findMany({
            where: {
                edicaoId: lider.edicaoId,
                comunidadeId: lider.comunidadeId,
                status: { not: client_1.StatusInscricaoStartup.CANCELADO },
            },
            select: {
                id: true,
                nomeStartup: true,
                status: true,
                cidadeOperacao: true,
                categoria: true,
                slugPublico: true,
                site: true,
                confirmadoEm: true,
                createdAt: true,
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async aprovarInscricao(pessoaId, inscricaoId, comunidadeId) {
        const lider = await this.resolveLider(pessoaId, comunidadeId);
        const inscricao = await this.prisma.inscricaoStartup.findFirst({
            where: {
                id: inscricaoId,
                edicaoId: lider.edicaoId,
                comunidadeId: lider.comunidadeId,
                status: client_1.StatusInscricaoStartup.PENDENTE,
            },
        });
        if (!inscricao) {
            throw new common_1.NotFoundException('Inscrição pendente não encontrada nesta comunidade.');
        }
        const updated = await this.prisma.inscricaoStartup.update({
            where: { id: inscricao.id },
            data: {
                status: client_1.StatusInscricaoStartup.ATIVO,
                liderId: inscricao.liderId ?? lider.id,
            },
            select: {
                id: true,
                nomeStartup: true,
                status: true,
                slugPublico: true,
            },
        });
        return {
            ...updated,
            mensagem: `${updated.nomeStartup} foi aceita na comunidade.`,
        };
    }
    async rejeitarInscricao(pessoaId, inscricaoId, comunidadeId) {
        const lider = await this.resolveLider(pessoaId, comunidadeId);
        const inscricao = await this.prisma.inscricaoStartup.findFirst({
            where: {
                id: inscricaoId,
                edicaoId: lider.edicaoId,
                comunidadeId: lider.comunidadeId,
                status: client_1.StatusInscricaoStartup.PENDENTE,
            },
        });
        if (!inscricao) {
            throw new common_1.NotFoundException('Inscrição pendente não encontrada nesta comunidade.');
        }
        const updated = await this.prisma.inscricaoStartup.update({
            where: { id: inscricao.id },
            data: { status: client_1.StatusInscricaoStartup.CANCELADO },
            select: {
                id: true,
                nomeStartup: true,
                status: true,
            },
        });
        return {
            ...updated,
            mensagem: `${updated.nomeStartup} foi recusada.`,
        };
    }
    async resolveLider(pessoaId, comunidadeId) {
        const where = {
            pessoaId,
            status: client_1.StatusParticipante.ATIVO,
            ...(comunidadeId ? { comunidadeId } : {}),
        };
        const lider = await this.prisma.lider.findFirst({
            where,
            include: {
                comunidade: {
                    select: { id: true, nome: true, slug: true, cidade: true },
                },
            },
            orderBy: { ativadoEm: 'asc' },
        });
        if (!lider) {
            throw new common_1.NotFoundException(comunidadeId
                ? 'Você não é líder desta comunidade.'
                : 'Vínculo de líder não encontrado.');
        }
        return lider;
    }
};
exports.LiderService = LiderService;
exports.LiderService = LiderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        edicoes_service_1.EdicoesService,
        pessoas_service_1.PessoasService])
], LiderService);
//# sourceMappingURL=lider.service.js.map