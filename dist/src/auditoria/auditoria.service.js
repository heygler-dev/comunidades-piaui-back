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
exports.AuditoriaService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("../../generated/prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
const TIPO_LABEL = {
    VOTO: 'Voto',
    INDICACAO: 'Indicação',
    SELECAO_COLEGIO: 'Seleção do colégio',
    FASE_ALTERADA: 'Fase alterada',
    RESULTADO_PUBLICADO: 'Resultado publicado',
    LOGIN: 'Login',
    DADOS_ALTERADOS: 'Dados alterados',
};
let AuditoriaService = class AuditoriaService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    registrar(input) {
        return this.prisma.auditoriaEvento.create({
            data: {
                edicaoId: input.edicaoId,
                tipo: input.tipo,
                atorPapel: input.atorPapel,
                atorId: input.atorId,
                cpfHash: input.cpfHash,
                payload: input.payload,
            },
        });
    }
    async listAdmin(params) {
        const edicao = await this.prisma.edicao.findFirst({ where: { ativa: true } });
        if (!edicao) {
            throw new common_1.NotFoundException('Nenhuma edição ativa encontrada.');
        }
        const page = Math.max(1, Number(params.page) || 1);
        const limit = Math.min(100, Math.max(1, Number(params.limit) || 10));
        const tipo = params.tipo && params.tipo !== 'TODOS'
            ? params.tipo
            : undefined;
        const where = {
            OR: [{ edicaoId: edicao.id }, { edicaoId: null }],
            ...(tipo ? { tipo } : {}),
        };
        const [total, items, porTipo] = await Promise.all([
            this.prisma.auditoriaEvento.count({ where }),
            this.prisma.auditoriaEvento.findMany({
                where,
                orderBy: { createdAt: 'desc' },
                skip: (page - 1) * limit,
                take: limit,
            }),
            this.prisma.auditoriaEvento.groupBy({
                by: ['tipo'],
                where: {
                    OR: [{ edicaoId: edicao.id }, { edicaoId: null }],
                },
                _count: { _all: true },
            }),
        ]);
        return {
            edicao: { id: edicao.id, nome: edicao.nome, ano: edicao.ano },
            page,
            limit,
            total,
            totalPages: Math.max(1, Math.ceil(total / limit) || 1),
            filtros: Object.values(client_1.TipoAuditoria).map((t) => ({
                tipo: t,
                label: TIPO_LABEL[t],
                total: porTipo.find((row) => row.tipo === t)?._count._all || 0,
            })),
            data: items.map((ev) => this.toAdminRow(ev)),
        };
    }
    toAdminRow(ev) {
        return {
            id: ev.id,
            tipo: ev.tipo,
            tipoLabel: TIPO_LABEL[ev.tipo],
            atorPapel: ev.atorPapel,
            atorId: ev.atorId ? `${ev.atorId.slice(0, 8)}…` : null,
            cpfHashPrefix: ev.cpfHash ? `${ev.cpfHash.slice(0, 12)}…` : null,
            resumo: this.resumoPayload(ev.tipo, ev.payload),
            payload: this.sanitizePayload(ev.tipo, ev.payload),
            createdAt: ev.createdAt,
        };
    }
    sanitizePayload(tipo, payload) {
        if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
            return payload;
        }
        const clone = { ...payload };
        if (tipo === client_1.TipoAuditoria.VOTO) {
            delete clone.finalistaId;
            delete clone.startup;
            delete clone.nomeStartup;
        }
        delete clone.cpf;
        delete clone.senha;
        delete clone.senhaHash;
        return clone;
    }
    resumoPayload(tipo, payload) {
        if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
            return '—';
        }
        const p = payload;
        if (tipo === client_1.TipoAuditoria.VOTO) {
            return p.categoriaId
                ? 'Voto registrado (escolha omitida no log)'
                : 'Voto registrado';
        }
        if (tipo === client_1.TipoAuditoria.RESULTADO_PUBLICADO) {
            const n = Number(p.categorias) || 0;
            return n ? `${n} categoria(s) publicada(s)` : 'Resultados publicados';
        }
        if (tipo === client_1.TipoAuditoria.FASE_ALTERADA) {
            return [p.campo, p.de, p.para].filter((v) => v !== undefined && v !== null)
                .length
                ? `${String(p.campo || 'config')}: ${String(p.de ?? '—')} → ${String(p.para ?? '—')}`
                : 'Configuração/fase alterada';
        }
        if (tipo === client_1.TipoAuditoria.INDICACAO) {
            return 'Indicação registrada';
        }
        if (tipo === client_1.TipoAuditoria.SELECAO_COLEGIO) {
            return p.status ? `Seleção: ${String(p.status)}` : 'Seleção do colégio';
        }
        if (tipo === client_1.TipoAuditoria.LOGIN) {
            return p.email ? `Login · ${String(p.email)}` : 'Login';
        }
        if (tipo === client_1.TipoAuditoria.DADOS_ALTERADOS) {
            return 'Dados da startup alterados';
        }
        return '—';
    }
};
exports.AuditoriaService = AuditoriaService;
exports.AuditoriaService = AuditoriaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuditoriaService);
//# sourceMappingURL=auditoria.service.js.map