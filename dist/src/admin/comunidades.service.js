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
exports.ComunidadesService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../generated/prisma/client");
const cpf_util_1 = require("../common/utils/cpf.util");
const slug_util_1 = require("../common/utils/slug.util");
const edicoes_service_1 = require("../edicoes/edicoes.service");
const pessoas_service_1 = require("../pessoas/pessoas.service");
const prisma_service_1 = require("../prisma/prisma.service");
let ComunidadesService = class ComunidadesService {
    constructor(prisma, edicoesService, pessoasService) {
        this.prisma = prisma;
        this.edicoesService = edicoesService;
        this.pessoasService = pessoasService;
    }
    async create(dto, adminId) {
        const edicaoId = await this.edicoesService.getEdicaoAtivaId();
        const slugBase = (0, slug_util_1.slugify)(dto.nome);
        const slug = `${slugBase}-${(0, slug_util_1.randomSuffix)()}`;
        return this.prisma.comunidade.create({
            data: {
                edicaoId,
                nome: dto.nome.trim(),
                descricao: dto.descricao?.trim() || null,
                institucional: Boolean(dto.institucional),
                cidade: dto.cidade.trim(),
                estado: dto.estado?.trim() || 'PI',
                cidadesAtuacao: dto.cidadesAtuacao?.trim() || null,
                logoUrl: dto.logoUrl?.trim() || null,
                slug,
                createdBy: adminId,
            },
        });
    }
    async list() {
        const edicaoId = await this.edicoesService.getEdicaoAtivaId();
        return this.prisma.comunidade.findMany({
            where: { edicaoId },
            include: {
                lideres: {
                    where: { tipoLider: client_1.TipoLider.SEMENTE },
                    select: {
                        id: true,
                        nome: true,
                        email: true,
                        status: true,
                        tipoLider: true,
                    },
                    take: 5,
                },
                _count: { select: { lideres: true, inscricoesStartup: true } },
            },
            orderBy: { nome: 'asc' },
        });
    }
    async createConviteLider(comunidadeId, adminId) {
        const edicaoId = await this.edicoesService.getEdicaoAtivaId();
        const comunidade = await this.prisma.comunidade.findFirst({
            where: { id: comunidadeId, edicaoId },
        });
        if (!comunidade)
            throw new common_1.NotFoundException('Comunidade não encontrada.');
        const token = (0, slug_util_1.randomSuffix)(8);
        return this.prisma.convite.create({
            data: {
                edicaoId,
                comunidadeId,
                tipo: client_1.TipoConvite.LIDER,
                token,
                criadoPorId: adminId,
            },
            include: { comunidade: true },
        });
    }
    async createLiderSemente(dto) {
        const edicaoId = await this.edicoesService.getEdicaoAtivaId();
        const comunidade = await this.prisma.comunidade.findFirst({
            where: { id: dto.comunidadeId, edicaoId },
        });
        if (!comunidade)
            throw new common_1.NotFoundException('Comunidade não encontrada.');
        if (!(0, cpf_util_1.isValidCpf)(dto.cpf)) {
            throw new common_1.BadRequestException('CPF inválido.');
        }
        const cpf = (0, cpf_util_1.normalizeCpf)(dto.cpf);
        const jaTemSemente = await this.prisma.lider.findFirst({
            where: {
                edicaoId,
                comunidadeId: comunidade.id,
                tipoLider: client_1.TipoLider.SEMENTE,
                status: client_1.StatusParticipante.ATIVO,
            },
        });
        if (jaTemSemente) {
            throw new common_1.ConflictException('Esta comunidade já possui um líder-semente ativo.');
        }
        const pessoa = await this.pessoasService.upsertByCpf({
            edicaoId,
            cpf,
            nome: dto.nome.trim(),
            email: dto.email.trim().toLowerCase(),
            telefone: dto.telefone.trim(),
            senhaPlain: dto.senha,
            lgpdAceitoEm: new Date(),
        });
        const lider = await this.prisma.lider.create({
            data: {
                edicaoId,
                pessoaId: pessoa.id,
                comunidadeId: comunidade.id,
                nome: pessoa.nome,
                cpf: pessoa.cpf,
                email: pessoa.email,
                telefone: dto.telefone.trim(),
                senhaHash: pessoa.senhaHash,
                tipoLider: client_1.TipoLider.SEMENTE,
                status: client_1.StatusParticipante.ATIVO,
                lgpdAceitoEm: new Date(),
            },
            include: { comunidade: true },
        });
        const linkExistente = await this.prisma.linkComunidade.findFirst({
            where: { edicaoId, comunidadeId: comunidade.id, ativo: true },
        });
        if (!linkExistente) {
            await this.prisma.linkComunidade.create({
                data: {
                    edicaoId,
                    comunidadeId: comunidade.id,
                    liderId: lider.id,
                    slug: `${comunidade.slug}-${(0, slug_util_1.randomSuffix)()}`,
                },
            });
        }
        return {
            lider: {
                id: lider.id,
                nome: lider.nome,
                email: lider.email,
                tipoLider: lider.tipoLider,
                status: lider.status,
            },
            comunidade: {
                id: comunidade.id,
                nome: comunidade.nome,
                slug: comunidade.slug,
            },
        };
    }
};
exports.ComunidadesService = ComunidadesService;
exports.ComunidadesService = ComunidadesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        edicoes_service_1.EdicoesService,
        pessoas_service_1.PessoasService])
], ComunidadesService);
//# sourceMappingURL=comunidades.service.js.map