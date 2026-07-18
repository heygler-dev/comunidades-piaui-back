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
exports.AdminBackupService = void 0;
const common_1 = require("@nestjs/common");
const edicoes_service_1 = require("../edicoes/edicoes.service");
const prisma_service_1 = require("../prisma/prisma.service");
let AdminBackupService = class AdminBackupService {
    constructor(prisma, edicoesService) {
        this.prisma = prisma;
        this.edicoesService = edicoesService;
    }
    csvEscape(value) {
        const s = value == null ? '' : String(value);
        if (/[",\n\r]/.test(s))
            return `"${s.replace(/"/g, '""')}"`;
        return s;
    }
    toCsv(headers, rows) {
        const lines = [
            headers.join(','),
            ...rows.map((r) => r.map((c) => this.csvEscape(c)).join(',')),
        ];
        return `\uFEFF${lines.join('\n')}\n`;
    }
    async exportInscricoesCsv() {
        const edicao = await this.edicoesService.getEdicaoAtiva();
        const items = await this.prisma.inscricaoStartup.findMany({
            where: { edicaoId: edicao.id },
            include: {
                comunidade: { select: { nome: true } },
            },
            orderBy: { createdAt: 'asc' },
        });
        const headers = [
            'id',
            'nome_startup',
            'status',
            'categoria',
            'cidade_operacao',
            'comunidade',
            'responsavel_nome',
            'responsavel_cpf',
            'responsavel_email',
            'responsavel_telefone',
            'slug_publico',
            'origem',
            'confirmado_em',
            'created_at',
        ];
        const rows = items.map((i) => [
            i.id,
            i.nomeStartup,
            i.status,
            i.categoria,
            i.cidadeOperacao,
            i.comunidade?.nome,
            i.responsavelNome,
            i.responsavelCpf,
            i.responsavelEmail,
            i.responsavelTelefone,
            i.slugPublico,
            i.origem,
            i.confirmadoEm?.toISOString() || '',
            i.createdAt.toISOString(),
        ]);
        return {
            filename: `backup-inscricoes-${edicao.ano}.csv`,
            content: this.toCsv(headers, rows),
            total: items.length,
        };
    }
    async exportVotosCsv() {
        const edicao = await this.edicoesService.getEdicaoAtiva();
        const items = await this.prisma.voto.findMany({
            where: { edicaoId: edicao.id },
            include: {
                finalista: {
                    include: {
                        categoria: { select: { nome: true } },
                        inscricaoStartup: { select: { nomeStartup: true, slugPublico: true } },
                    },
                },
            },
            orderBy: { createdAt: 'asc' },
        });
        const headers = [
            'id',
            'votante_nome',
            'cpf',
            'categoria',
            'startup_votada',
            'slug_startup',
            'votante_lider_id',
            'votante_inscricao_id',
            'lgpd_aceito_em',
            'created_at',
        ];
        const rows = items.map((v) => [
            v.id,
            v.votanteNome,
            v.cpf,
            v.finalista.categoria.nome,
            v.finalista.inscricaoStartup.nomeStartup,
            v.finalista.inscricaoStartup.slugPublico,
            v.votanteLiderId,
            v.votanteInscricaoId,
            v.lgpdAceitoEm.toISOString(),
            v.createdAt.toISOString(),
        ]);
        return {
            filename: `backup-votos-${edicao.ano}.csv`,
            content: this.toCsv(headers, rows),
            total: items.length,
        };
    }
};
exports.AdminBackupService = AdminBackupService;
exports.AdminBackupService = AdminBackupService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        edicoes_service_1.EdicoesService])
], AdminBackupService);
//# sourceMappingURL=admin-backup.service.js.map