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
exports.InscricoesService = void 0;
const common_1 = require("@nestjs/common");
const XLSX = require("xlsx");
const client_1 = require("../../generated/prisma/client");
const cpf_util_1 = require("../common/utils/cpf.util");
const normalize_key_util_1 = require("../common/utils/normalize-key.util");
const slug_util_1 = require("../common/utils/slug.util");
const startup_import_util_1 = require("./startup-import.util");
const edicoes_service_1 = require("../edicoes/edicoes.service");
const pessoas_service_1 = require("../pessoas/pessoas.service");
const prisma_service_1 = require("../prisma/prisma.service");
let InscricoesService = class InscricoesService {
    constructor(prisma, edicoesService, pessoasService) {
        this.prisma = prisma;
        this.edicoesService = edicoesService;
        this.pessoasService = pessoasService;
    }
    mapStatusParticipante(status) {
        return status === client_1.StatusParticipante.ATIVO ? 'Ativo' : 'Pendente';
    }
    mapStatusStartup(status) {
        if (status === client_1.StatusInscricaoStartup.ATIVO)
            return 'Ativo';
        if (status === client_1.StatusInscricaoStartup.PENDENTE)
            return 'Pendente';
        return status;
    }
    async listAdmin(params) {
        const edicaoId = await this.edicoesService.getEdicaoAtivaId();
        const page = params.page ?? 1;
        const limit = params.limit ?? 50;
        const items = await this.fetchAdminItems(edicaoId, params.tipo, params.q);
        const total = items.length;
        const start = (page - 1) * limit;
        const data = items.slice(start, start + limit).map((item) => ({
            ...item,
            data: this.formatDate(item.inscritoEm),
            status: this.capitalizeStatus(item.status),
        }));
        return { data, meta: { page, limit, total } };
    }
    async stats() {
        const edicao = await this.edicoesService.getEdicaoAtiva();
        const items = await this.fetchAdminItems(edicao.id);
        const total = items.length;
        const lideres = items.filter((i) => i.tipo === 'lider').length;
        const startups = items.filter((i) => i.tipo === 'startup').length;
        const comunidades = new Set(items.map((i) => i.comunidade)).size;
        return {
            total,
            lideres,
            startups,
            percentualLideres: total ? Math.round((lideres / total) * 100) : 0,
            percentualStartups: total ? Math.round((startups / total) * 100) : 0,
            comunidadesAtivas: comunidades,
            fase: edicao.faseAtual,
            periodoLabel: 'Semana 1 · Fase 1',
        };
    }
    async createManual(dto) {
        const edicaoId = await this.edicoesService.getEdicaoAtivaId();
        const comunidade = await this.findOrCreateComunidade(edicaoId, dto.comunidade, dto.cidade);
        const statusAtivo = dto.status !== 'Pendente';
        if (dto.tipo === 'lider') {
            const cpf = this.generatePlaceholderCpf();
            const email = dto.email || `manual-lider-${Date.now()}@premio.local`;
            const pessoa = await this.pessoasService.upsertByCpf({
                edicaoId,
                cpf,
                nome: dto.nome,
                email,
                telefone: dto.telefone || '—',
                senhaPlain: 'changeme123',
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
                    telefone: dto.telefone || '—',
                    senhaHash: pessoa.senhaHash,
                    status: statusAtivo
                        ? client_1.StatusParticipante.ATIVO
                        : client_1.StatusParticipante.PENDENTE,
                    lgpdAceitoEm: new Date(),
                },
                include: { comunidade: true },
            });
            return this.toAdminItemFromLider(lider);
        }
        const startup = await this.prisma.inscricaoStartup.create({
            data: {
                edicaoId,
                comunidadeId: comunidade.id,
                nomeStartup: dto.nome,
                responsavelNome: dto.nome,
                responsavelEmail: dto.email || '—',
                responsavelTelefone: dto.telefone || '—',
                cidadeOperacao: dto.cidade || comunidade.cidade,
                status: statusAtivo
                    ? client_1.StatusInscricaoStartup.ATIVO
                    : client_1.StatusInscricaoStartup.PENDENTE,
                etapaAtual: 3,
                confirmadoEm: new Date(),
                origem: client_1.OrigemCadastro.MANUAL,
                slugPublico: await this.uniqueStartupSlug(dto.nome),
            },
            include: { comunidade: true },
        });
        return this.toAdminItemFromStartup(startup);
    }
    async updateAdmin(id, tipo, dto) {
        const edicaoId = await this.edicoesService.getEdicaoAtivaId();
        if (tipo === 'lider') {
            const existing = await this.prisma.lider.findFirst({
                where: { id, edicaoId },
            });
            if (!existing)
                throw new common_1.NotFoundException('Inscrição não encontrada.');
            let comunidadeId = existing.comunidadeId;
            if (dto.comunidade) {
                const comunidade = await this.findOrCreateComunidade(edicaoId, dto.comunidade, dto.cidade);
                comunidadeId = comunidade.id;
            }
            const lider = await this.prisma.lider.update({
                where: { id },
                data: {
                    nome: dto.nome ?? existing.nome,
                    email: dto.email ?? existing.email,
                    telefone: dto.telefone ?? existing.telefone,
                    comunidadeId,
                    status: dto.status === 'Ativo'
                        ? client_1.StatusParticipante.ATIVO
                        : dto.status === 'Pendente'
                            ? client_1.StatusParticipante.PENDENTE
                            : existing.status,
                },
                include: { comunidade: true },
            });
            return this.toAdminItemFromLider(lider);
        }
        const existing = await this.prisma.inscricaoStartup.findFirst({
            where: {
                id,
                edicaoId,
                status: { in: [client_1.StatusInscricaoStartup.ATIVO, client_1.StatusInscricaoStartup.PENDENTE] },
            },
            include: { comunidade: true },
        });
        if (!existing)
            throw new common_1.NotFoundException('Inscrição não encontrada.');
        let comunidadeId = existing.comunidadeId;
        if (dto.comunidade) {
            const comunidade = await this.findOrCreateComunidade(edicaoId, dto.comunidade, dto.cidade);
            comunidadeId = comunidade.id;
        }
        const startup = await this.prisma.inscricaoStartup.update({
            where: { id },
            data: {
                nomeStartup: dto.nome ?? existing.nomeStartup,
                responsavelEmail: dto.email ?? existing.responsavelEmail,
                responsavelTelefone: dto.telefone ?? existing.responsavelTelefone,
                cidadeOperacao: dto.cidade ?? existing.cidadeOperacao,
                comunidadeId,
                status: dto.status === 'Ativo'
                    ? client_1.StatusInscricaoStartup.ATIVO
                    : dto.status === 'Pendente'
                        ? client_1.StatusInscricaoStartup.PENDENTE
                        : existing.status,
            },
            include: { comunidade: true },
        });
        return this.toAdminItemFromStartup(startup);
    }
    async deleteAdmin(id, tipo) {
        const edicaoId = await this.edicoesService.getEdicaoAtivaId();
        if (tipo === 'lider') {
            const existing = await this.prisma.lider.findFirst({
                where: { id, edicaoId },
            });
            if (!existing)
                throw new common_1.NotFoundException('Inscrição não encontrada.');
            await this.prisma.$transaction(async (tx) => {
                await tx.convite.updateMany({
                    where: { liderCriadorId: id },
                    data: { liderCriadorId: null },
                });
                const links = await tx.linkComunidade.findMany({
                    where: { liderId: id },
                    select: { id: true },
                });
                const linkIds = links.map((l) => l.id);
                if (linkIds.length) {
                    await tx.inscricaoStartup.updateMany({
                        where: { linkComunidadeId: { in: linkIds } },
                        data: { linkComunidadeId: null },
                    });
                    await tx.linkComunidade.deleteMany({ where: { liderId: id } });
                }
                await tx.inscricaoStartup.updateMany({
                    where: { liderId: id },
                    data: { liderId: null },
                });
                await tx.lider.delete({ where: { id } });
            });
            return { deleted: true };
        }
        const existing = await this.prisma.inscricaoStartup.findFirst({
            where: { id, edicaoId },
        });
        if (!existing)
            throw new common_1.NotFoundException('Inscrição não encontrada.');
        await this.prisma.$transaction(async (tx) => {
            const finalistas = await tx.finalista.findMany({
                where: { inscricaoStartupId: id },
                select: { id: true },
            });
            const finalistaIds = finalistas.map((f) => f.id);
            if (finalistaIds.length) {
                await tx.voto.deleteMany({ where: { finalistaId: { in: finalistaIds } } });
                await tx.finalista.deleteMany({ where: { inscricaoStartupId: id } });
            }
            await tx.inscricaoStartup.delete({ where: { id } });
        });
        return { deleted: true };
    }
    async importSpreadsheet(file, adminId) {
        if (!file?.buffer?.length) {
            throw new common_1.BadRequestException('Arquivo não enviado ou vazio.');
        }
        const rows = this.readSpreadsheetRows(file);
        return this.runImportBatch(file, rows, adminId, async (row) => {
            const norm = {};
            Object.keys(row).forEach((k) => {
                norm[(0, normalize_key_util_1.normalizeKey)(k)] = row[k];
            });
            const nome = String(norm['nome'] || '').trim();
            if (!nome) {
                return { ok: false, erro: 'Nome vazio' };
            }
            const tipoRaw = String(norm['tipo'] || 'startup').trim().toLowerCase();
            const tipo = tipoRaw.startsWith('lider') || tipoRaw.startsWith('líder')
                ? 'lider'
                : 'startup';
            const statusRaw = String(norm['status'] || 'Pendente').trim();
            const status = statusRaw === 'Ativo' || statusRaw === 'Pendente' ? statusRaw : 'Pendente';
            await this.createManual({
                nome,
                tipo,
                status: status,
                comunidade: String(norm['comunidade'] || 'Não informada').trim() || 'Não informada',
                cidade: String(norm['cidade'] || '—').trim() || '—',
                email: String(norm['email'] || '—').trim() || '—',
                telefone: String(norm['telefone'] || '—').trim() || '—',
            });
            return { ok: true };
        });
    }
    getStartupImportColumns() {
        return startup_import_util_1.STARTUP_IMPORT_COLUMNS;
    }
    async importStartupsSpreadsheet(file, adminId) {
        if (!file?.buffer?.length) {
            throw new common_1.BadRequestException('Arquivo não enviado ou vazio.');
        }
        const rows = this.readSpreadsheetRows(file);
        return this.runImportBatch(file, rows, adminId, async (row) => {
            const parsed = (0, startup_import_util_1.parseStartupImportRow)(row);
            if (parsed.erro || !parsed.data) {
                return { ok: false, erro: parsed.erro || 'Linha inválida' };
            }
            const equipe = row.__equipe;
            if (Array.isArray(equipe) && equipe.length) {
                parsed.data.metricas = {
                    ...(parsed.data.metricas ?? {}),
                    equipe: equipe,
                };
            }
            await this.createStartupFromImport(parsed.data);
            return { ok: true };
        });
    }
    async createStartupFromImport(dto) {
        const edicaoId = await this.edicoesService.getEdicaoAtivaId();
        const comunidade = await this.findOrCreateComunidade(edicaoId, dto.comunidade, dto.cidadeOperacao, dto.metricas?.estado);
        let responsavelCpf;
        const cpfRaw = dto.responsavelCpf?.trim();
        if (cpfRaw) {
            const digits = (0, cpf_util_1.normalizeCpf)(cpfRaw);
            if (digits) {
                const jaUsado = await this.prisma.inscricaoStartup.findFirst({
                    where: { edicaoId, responsavelCpf: digits },
                    select: { id: true },
                });
                if (!jaUsado) {
                    responsavelCpf = digits;
                }
            }
        }
        const statusAtivo = dto.status === 'Ativo';
        const now = new Date();
        const metricas = {
            ...(dto.metricas ?? {}),
            ...(cpfRaw && !responsavelCpf ? { cpfResponsavel: cpfRaw } : {}),
        };
        const startup = await this.prisma.inscricaoStartup.create({
            data: {
                edicaoId,
                comunidadeId: comunidade.id,
                nomeStartup: dto.nomeStartup,
                responsavelNome: dto.responsavelNome || dto.nomeStartup,
                responsavelCpf,
                responsavelEmail: dto.responsavelEmail,
                responsavelTelefone: dto.responsavelTelefone,
                categoria: dto.categoria,
                cidadeOperacao: dto.cidadeOperacao || comunidade.cidade,
                site: dto.site,
                descricao: dto.descricao,
                pitchCurto: dto.pitchCurto,
                metricasJson: Object.keys(metricas).length ? metricas : undefined,
                etapaAtual: 3,
                status: statusAtivo
                    ? client_1.StatusInscricaoStartup.ATIVO
                    : client_1.StatusInscricaoStartup.PENDENTE,
                slugPublico: await this.uniqueStartupSlug(dto.nomeStartup),
                lgpdAceitoEm: now,
                cpfUnicoConfirmado: false,
                confirmadoEm: now,
                origem: client_1.OrigemCadastro.IMPORTACAO,
            },
            include: { comunidade: true },
        });
        return this.toAdminItemFromStartup(startup);
    }
    readSpreadsheetRows(file) {
        const workbook = XLSX.read(file.buffer, { type: 'buffer' });
        const sheetName = this.pickImportSheetName(workbook.SheetNames);
        const sheet = workbook.Sheets[sheetName];
        if (!sheet) {
            throw new common_1.BadRequestException('Planilha vazia ou sem abas legíveis.');
        }
        const rows = XLSX.utils.sheet_to_json(sheet, {
            defval: '',
        });
        return this.enrichDadosGeraisRows(workbook, rows);
    }
    pickImportSheetName(sheetNames) {
        const preferred = sheetNames.find((name) => name.trim().toLowerCase() === 'bd');
        return preferred || sheetNames[0];
    }
    enrichDadosGeraisRows(workbook, rows) {
        const cnpjById = this.readCnpjLookup(workbook);
        const equipeById = this.readEquipeLookup(workbook);
        if (!cnpjById.size && !equipeById.size)
            return rows;
        return rows.map((row) => {
            const id = String(row['id.supi'] ?? row.idsupi ?? '')
                .trim()
                .toLowerCase();
            const next = { ...row };
            const currentCnpj = String(row.CNPJ ?? row.cnpj ?? '').trim();
            if (!currentCnpj && id && cnpjById.has(id)) {
                next.CNPJ = cnpjById.get(id);
            }
            if (id && equipeById.has(id)) {
                next.__equipe = equipeById.get(id);
            }
            return next;
        });
    }
    readCnpjLookup(workbook) {
        const cnpjSheetName = workbook.SheetNames.find((name) => name.trim().toLowerCase() === 'cnpj');
        const map = new Map();
        if (!cnpjSheetName)
            return map;
        const cnpjRows = XLSX.utils.sheet_to_json(workbook.Sheets[cnpjSheetName], { defval: '' });
        for (const row of cnpjRows) {
            const id = String(row['id.supi'] ?? row.idsupi ?? '')
                .trim()
                .toLowerCase();
            const cnpj = String(row.CNPJ ?? row.cnpj ?? '').trim();
            if (id && cnpj)
                map.set(id, cnpj);
        }
        return map;
    }
    readEquipeLookup(workbook) {
        const sheetName = workbook.SheetNames.find((name) => name.trim().toLowerCase().startsWith('nomes e cpfs'));
        const map = new Map();
        if (!sheetName)
            return map;
        const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: '' });
        for (const row of rows) {
            const id = String(row.idsupi ?? row['id.supi'] ?? '')
                .trim()
                .toLowerCase();
            const nome = String(row['Nome Completo'] ?? row.nome ?? '').trim();
            if (!id || !nome)
                continue;
            const cpf = String(row.CPF ?? row.cpf ?? '').trim() || undefined;
            const turma = String(row.Turma ?? row.turma ?? '').trim() || undefined;
            const list = map.get(id) || [];
            list.push({ nome, cpf, turma });
            map.set(id, list);
        }
        return map;
    }
    async runImportBatch(file, rows, adminId, processRow) {
        const edicaoId = await this.edicoesService.getEdicaoAtivaId();
        let importadas = 0;
        const erros = [];
        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            const norm = {};
            Object.keys(row).forEach((k) => {
                norm[(0, normalize_key_util_1.normalizeKey)(k)] = row[k];
            });
            const isEmpty = Object.values(norm).every((v) => v === '' || v === null || v === undefined);
            if (isEmpty)
                continue;
            try {
                const result = await processRow(row, i);
                if (result.ok) {
                    importadas++;
                }
                else {
                    erros.push({ linha: i + 2, motivo: result.erro || 'Erro ao importar' });
                }
            }
            catch (error) {
                erros.push({
                    linha: i + 2,
                    motivo: error instanceof Error ? error.message : 'Erro ao importar',
                });
            }
        }
        await this.prisma.importacaoLote.create({
            data: {
                edicaoId,
                arquivoNome: file.originalname,
                totalLinhas: rows.length,
                importadas,
                ignoradas: erros.length,
                errosJson: erros,
                adminId,
            },
        });
        return {
            totalLinhas: rows.length,
            importadas,
            ignoradas: erros.length,
            erros,
        };
    }
    async fetchAdminItems(edicaoId, tipo = 'todos', q) {
        const items = [];
        if (tipo === 'todos' || tipo === 'lider') {
            const lideres = await this.prisma.lider.findMany({
                where: { edicaoId },
                include: { comunidade: true },
                orderBy: { ativadoEm: 'desc' },
            });
            items.push(...lideres.map((l) => this.toAdminItemFromLider(l)));
        }
        if (tipo === 'todos' || tipo === 'startup') {
            const startups = await this.prisma.inscricaoStartup.findMany({
                where: {
                    edicaoId,
                    status: {
                        in: [client_1.StatusInscricaoStartup.ATIVO, client_1.StatusInscricaoStartup.PENDENTE],
                    },
                },
                include: { comunidade: true },
                orderBy: { createdAt: 'desc' },
            });
            items.push(...startups.map((s) => this.toAdminItemFromStartup(s)));
        }
        items.sort((a, b) => b.inscritoEm.getTime() - a.inscritoEm.getTime());
        if (q?.trim()) {
            const term = q.trim().toLowerCase();
            return items.filter((item) => item.nome.toLowerCase().includes(term) ||
                item.comunidade.toLowerCase().includes(term));
        }
        return items;
    }
    toAdminItemFromLider(lider) {
        return {
            id: lider.id,
            nome: lider.nome,
            tipo: 'lider',
            comunidade: lider.comunidade.nome,
            cidade: lider.comunidade.cidade,
            email: lider.email,
            telefone: lider.telefone,
            inscritoEm: lider.ativadoEm,
            status: this.mapStatusParticipante(lider.status),
        };
    }
    toAdminItemFromStartup(startup) {
        return {
            id: startup.id,
            nome: startup.nomeStartup || startup.responsavelNome || '—',
            tipo: 'startup',
            comunidade: startup.comunidade.nome,
            cidade: startup.cidadeOperacao || startup.comunidade.cidade,
            email: startup.responsavelEmail || '—',
            telefone: startup.responsavelTelefone || '—',
            inscritoEm: startup.confirmadoEm || startup.createdAt,
            status: this.mapStatusStartup(startup.status),
            origem: startup.origem,
        };
    }
    async findOrCreateComunidade(edicaoId, nome, cidade, estado) {
        const slugBase = (0, slug_util_1.slugify)(nome) || 'comunidade';
        const existing = await this.prisma.comunidade.findFirst({
            where: { edicaoId, nome },
        });
        if (existing)
            return existing;
        let slug = slugBase;
        let attempt = 0;
        while (await this.prisma.comunidade.findFirst({ where: { edicaoId, slug } })) {
            attempt++;
            slug = `${slugBase}-${attempt}`;
        }
        const uf = (estado || 'PI').trim().toUpperCase().slice(0, 2) || 'PI';
        return this.prisma.comunidade.create({
            data: {
                edicaoId,
                nome,
                cidade: cidade || '—',
                estado: uf.length === 2 ? uf : 'PI',
                slug,
            },
        });
    }
    async uniqueStartupSlug(nome) {
        const base = (0, slug_util_1.slugify)(nome) || 'startup';
        let slug = base;
        let exists = await this.prisma.inscricaoStartup.findUnique({
            where: { slugPublico: slug },
        });
        while (exists) {
            slug = `${base}-${(0, slug_util_1.randomSuffix)()}`;
            exists = await this.prisma.inscricaoStartup.findUnique({
                where: { slugPublico: slug },
            });
        }
        return slug;
    }
    generatePlaceholderCpf() {
        const base = Date.now().toString().slice(-9).padStart(9, '0');
        return `${base}00`;
    }
    formatDate(date) {
        const d = String(date.getDate()).padStart(2, '0');
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const y = date.getFullYear();
        return `${d}/${m}/${y}`;
    }
    capitalizeStatus(status) {
        if (status.toLowerCase() === 'ativo')
            return 'Ativo';
        if (status.toLowerCase() === 'pendente')
            return 'Pendente';
        return status;
    }
    assertCpf(cpf) {
        if (!(0, cpf_util_1.isValidCpf)(cpf)) {
            throw new common_1.BadRequestException('CPF inválido.');
        }
        return (0, cpf_util_1.normalizeCpf)(cpf);
    }
    async assertCpfUnicoStartup(edicaoId, cpf, ignoreId) {
        const existing = await this.prisma.inscricaoStartup.findFirst({
            where: {
                edicaoId,
                responsavelCpf: cpf,
                ...(ignoreId ? { NOT: { id: ignoreId } } : {}),
            },
        });
        if (existing) {
            throw new common_1.ConflictException('Este CPF já foi usado para inscrever outra startup nesta edição.');
        }
    }
};
exports.InscricoesService = InscricoesService;
exports.InscricoesService = InscricoesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        edicoes_service_1.EdicoesService,
        pessoas_service_1.PessoasService])
], InscricoesService);
//# sourceMappingURL=inscricoes.service.js.map