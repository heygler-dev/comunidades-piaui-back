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
exports.PublicVotoService = exports.PublicStartupService = exports.PublicConvitesService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const client_1 = require("../../generated/prisma/client");
const auditoria_service_1 = require("../auditoria/auditoria.service");
const cpf_util_1 = require("../common/utils/cpf.util");
const hash_util_1 = require("../common/utils/hash.util");
const slug_util_1 = require("../common/utils/slug.util");
const startup_url_util_1 = require("../common/utils/startup-url.util");
const edicoes_service_1 = require("../edicoes/edicoes.service");
const pessoas_service_1 = require("../pessoas/pessoas.service");
const prisma_service_1 = require("../prisma/prisma.service");
let PublicConvitesService = class PublicConvitesService {
    constructor(prisma, edicoesService, pessoasService) {
        this.prisma = prisma;
        this.edicoesService = edicoesService;
        this.pessoasService = pessoasService;
    }
    assertConviteLiderValido(convite) {
        if (!convite) {
            throw new common_1.NotFoundException('Convite inválido ou expirado.');
        }
        if (convite.usadoEm) {
            throw new common_1.ConflictException('Este convite já foi utilizado.');
        }
        if (!convite.ativo) {
            throw new common_1.NotFoundException('Convite inválido ou expirado.');
        }
        if (convite.expiraEm && convite.expiraEm < new Date()) {
            throw new common_1.NotFoundException('Convite inválido ou expirado.');
        }
    }
    async getConviteLider(token) {
        const convite = await this.prisma.convite.findFirst({
            where: {
                token,
                tipo: client_1.TipoConvite.LIDER,
            },
            include: { comunidade: true },
        });
        this.assertConviteLiderValido(convite);
        return {
            token: convite.token,
            tipo: 'lider',
            comunidade: {
                nome: convite.comunidade.nome,
                cidade: convite.comunidade.cidade,
                estado: convite.comunidade.estado,
            },
            linkValido: true,
        };
    }
    async getLinkInscricao(slug) {
        const link = await this.prisma.linkComunidade.findFirst({
            where: { slug, ativo: true },
            include: { comunidade: true, lider: true },
        });
        if (!link) {
            throw new common_1.NotFoundException('Link de inscrição inválido.');
        }
        return {
            slug: link.slug,
            comunidade: {
                nome: link.comunidade.nome,
                cidade: link.comunidade.cidade,
                estado: link.comunidade.estado,
            },
            lider: { nome: link.lider.nome },
            linkValido: true,
        };
    }
    async ativarLider(dto) {
        if (!dto.lgpdAceito) {
            throw new common_1.BadRequestException('É necessário aceitar o tratamento de dados.');
        }
        if (!(0, cpf_util_1.isValidCpf)(dto.cpf)) {
            throw new common_1.BadRequestException('CPF inválido.');
        }
        const cpf = (0, cpf_util_1.normalizeCpf)(dto.cpf);
        const convite = await this.prisma.convite.findFirst({
            where: {
                token: dto.token,
                tipo: client_1.TipoConvite.LIDER,
            },
            include: { comunidade: true },
        });
        this.assertConviteLiderValido(convite);
        const jaLiderNaComunidade = await this.prisma.lider.findFirst({
            where: {
                edicaoId: convite.edicaoId,
                comunidadeId: convite.comunidadeId,
                cpf,
            },
        });
        if (jaLiderNaComunidade) {
            throw new common_1.ConflictException('Este CPF já é líder nesta comunidade.');
        }
        const pessoa = await this.pessoasService.upsertByCpf({
            edicaoId: convite.edicaoId,
            cpf,
            nome: dto.nome,
            email: dto.email,
            telefone: dto.telefone,
            senhaPlain: dto.senha,
            lgpdAceitoEm: new Date(),
        });
        const tipoLider = convite.liderCriadorId
            ? client_1.TipoLider.COMUNITARIO
            : client_1.TipoLider.SEMENTE;
        const lider = await this.prisma.lider.create({
            data: {
                edicaoId: convite.edicaoId,
                pessoaId: pessoa.id,
                comunidadeId: convite.comunidadeId,
                conviteId: convite.id,
                nome: pessoa.nome,
                cpf: pessoa.cpf,
                email: pessoa.email,
                telefone: dto.telefone,
                senhaHash: pessoa.senhaHash,
                tipoLider,
                nomeadoPorId: convite.liderCriadorId || undefined,
                lgpdAceitoEm: new Date(),
            },
        });
        const linkSlug = `${convite.comunidade.slug}-${(0, slug_util_1.randomSuffix)()}`;
        const link = await this.prisma.linkComunidade.create({
            data: {
                edicaoId: convite.edicaoId,
                comunidadeId: convite.comunidadeId,
                liderId: lider.id,
                slug: linkSlug,
            },
        });
        await this.prisma.convite.update({
            where: { id: convite.id },
            data: { usadoEm: new Date(), ativo: false },
        });
        return {
            liderId: lider.id,
            nome: lider.nome,
            linkInscricao: `premiopiaui.org/inscrever/${link.slug}`,
            slug: link.slug,
        };
    }
};
exports.PublicConvitesService = PublicConvitesService;
exports.PublicConvitesService = PublicConvitesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        edicoes_service_1.EdicoesService,
        pessoas_service_1.PessoasService])
], PublicConvitesService);
let PublicStartupService = class PublicStartupService {
    constructor(prisma, edicoesService, pessoasService) {
        this.prisma = prisma;
        this.edicoesService = edicoesService;
        this.pessoasService = pessoasService;
    }
    async createDraft(slug) {
        const link = await this.getLink(slug);
        const draft = await this.prisma.inscricaoStartup.create({
            data: {
                edicaoId: link.edicaoId,
                comunidadeId: link.comunidadeId,
                liderId: link.liderId,
                linkComunidadeId: link.id,
                etapaAtual: 1,
            },
            include: {
                comunidade: {
                    select: { nome: true, cidade: true, estado: true },
                },
            },
        });
        return {
            id: draft.id,
            etapaAtual: draft.etapaAtual,
            status: draft.status,
            comunidade: draft.comunidade,
        };
    }
    async saveEtapa1(id, dto) {
        if (!(0, cpf_util_1.isValidCpf)(dto.cpf)) {
            throw new common_1.BadRequestException('CPF inválido.');
        }
        if (!dto.senha || dto.senha.length < 8) {
            throw new common_1.BadRequestException('A senha deve ter no mínimo 8 caracteres.');
        }
        const cpf = (0, cpf_util_1.normalizeCpf)(dto.cpf);
        const inscricao = await this.getInscricaoRascunho(id);
        const duplicate = await this.prisma.inscricaoStartup.findFirst({
            where: {
                edicaoId: inscricao.edicaoId,
                responsavelCpf: cpf,
                NOT: { id },
            },
        });
        if (duplicate) {
            throw new common_1.ConflictException('Este CPF já foi usado para inscrever outra startup nesta edição.');
        }
        const senhaHash = await bcrypt.hash(dto.senha, 10);
        return this.prisma.inscricaoStartup.update({
            where: { id },
            data: {
                responsavelNome: dto.responsavelNome,
                responsavelCpf: cpf,
                responsavelTelefone: dto.telefone,
                responsavelEmail: dto.email,
                senhaHash,
                etapaAtual: 2,
            },
        });
    }
    async saveEtapa2(id, dto) {
        await this.getInscricaoRascunho(id);
        return this.prisma.inscricaoStartup.update({
            where: { id },
            data: {
                nomeStartup: dto.nomeStartup,
                categoria: dto.categoria,
                cidadeOperacao: dto.cidadeOperacao,
                site: dto.site,
                descricao: dto.descricao,
                etapaAtual: 3,
            },
        });
    }
    async confirmar(id, dto) {
        if (!dto.lgpdAceito || !dto.cpfUnicoConfirmado) {
            throw new common_1.BadRequestException('Confirme as declarações obrigatórias.');
        }
        const inscricao = await this.getInscricaoRascunho(id);
        if (!inscricao.responsavelCpf || !inscricao.nomeStartup) {
            throw new common_1.BadRequestException('Preencha todas as etapas antes de confirmar.');
        }
        await this.assertCpfUnico(inscricao.edicaoId, inscricao.responsavelCpf, id);
        if (!dto.senha && !inscricao.senhaHash) {
            throw new common_1.BadRequestException('Defina uma senha de acesso na etapa 1 antes de confirmar.');
        }
        const pessoa = await this.pessoasService.upsertByCpf({
            edicaoId: inscricao.edicaoId,
            cpf: inscricao.responsavelCpf,
            nome: inscricao.responsavelNome || 'Responsável',
            email: inscricao.responsavelEmail || `${inscricao.responsavelCpf}@premio.local`,
            telefone: inscricao.responsavelTelefone,
            senhaPlain: dto.senha,
            senhaHash: dto.senha ? undefined : inscricao.senhaHash || undefined,
            lgpdAceitoEm: new Date(),
        });
        const slugPublico = await this.uniqueSlug(inscricao.nomeStartup);
        const updated = await this.prisma.inscricaoStartup.update({
            where: { id },
            data: {
                slugPublico,
                pessoaId: pessoa.id,
                senhaHash: pessoa.senhaHash,
                lgpdAceitoEm: new Date(),
                cpfUnicoConfirmado: true,
                confirmadoEm: new Date(),
                status: client_1.StatusInscricaoStartup.PENDENTE,
                etapaAtual: 3,
            },
            include: { comunidade: true },
        });
        return {
            inscricaoId: updated.id,
            slugPublico: updated.slugPublico,
            paginaUrl: (0, startup_url_util_1.publicPathForStartup)(updated.site, updated.slugPublico),
            preview: {
                nome: updated.nomeStartup,
                categoria: updated.categoria,
                cidade: updated.cidadeOperacao,
                descricao: updated.descricao,
                inicial: updated.nomeStartup?.charAt(0).toUpperCase(),
            },
            comunidade: updated.comunidade.nome,
        };
    }
    async getInscricao(id) {
        const inscricao = await this.prisma.inscricaoStartup.findUnique({
            where: { id },
            include: {
                comunidade: {
                    select: { nome: true, cidade: true, estado: true },
                },
            },
        });
        if (!inscricao)
            throw new common_1.NotFoundException('Inscrição não encontrada.');
        return {
            id: inscricao.id,
            etapaAtual: inscricao.etapaAtual,
            status: inscricao.status,
            responsavelNome: inscricao.responsavelNome,
            responsavelTelefone: inscricao.responsavelTelefone,
            responsavelEmail: inscricao.responsavelEmail,
            nomeStartup: inscricao.nomeStartup,
            categoria: inscricao.categoria,
            cidadeOperacao: inscricao.cidadeOperacao,
            site: inscricao.site,
            descricao: inscricao.descricao,
            slugPublico: inscricao.slugPublico,
            comunidade: inscricao.comunidade,
        };
    }
    async getLandingPage(identifier) {
        const inscricao = await this.findInscricaoPublica(identifier);
        if (!inscricao) {
            throw new common_1.NotFoundException('Página da startup não encontrada.');
        }
        const finalistas = (inscricao.finalistas || []).map((f) => ({
            categoria: f.categoria.nome,
            vencedor: f.resultados.some((r) => r.publicadoEm),
        }));
        return {
            nomeStartup: inscricao.nomeStartup,
            categoria: inscricao.categoria,
            cidadeOperacao: inscricao.cidadeOperacao,
            site: inscricao.site,
            descricao: inscricao.descricao,
            logoUrl: inscricao.logoUrl,
            pitchCurto: inscricao.pitchCurto,
            videoUrl: inscricao.videoUrl,
            metricas: inscricao.metricasJson,
            slugPublico: inscricao.slugPublico,
            paginaUrl: (0, startup_url_util_1.publicPathForStartup)(inscricao.site, inscricao.slugPublico),
            comunidade: inscricao.comunidade,
            badges: inscricao.badges.map((b) => b.comunidade),
            ehFinalista: finalistas.length > 0,
            ehVencedor: finalistas.some((f) => f.vencedor),
            categoriasFinalista: finalistas.map((f) => f.categoria),
        };
    }
    async listComunidadesPublicas() {
        const edicaoId = await this.edicoesService.getEdicaoAtivaId();
        return this.prisma.comunidade.findMany({
            where: { edicaoId, status: 'ativa' },
            select: {
                id: true,
                nome: true,
                slug: true,
                cidade: true,
                descricao: true,
                institucional: true,
                cidadesAtuacao: true,
                logoUrl: true,
                isPadraoStartupPiaui: true,
            },
            orderBy: { nome: 'asc' },
        });
    }
    async getInscricaoRascunho(id) {
        const inscricao = await this.prisma.inscricaoStartup.findUnique({
            where: { id },
        });
        if (!inscricao) {
            throw new common_1.NotFoundException('Inscrição não encontrada.');
        }
        if (inscricao.status !== client_1.StatusInscricaoStartup.RASCUNHO) {
            throw new common_1.ConflictException('Esta inscrição já foi enviada e não pode ser alterada.');
        }
        return inscricao;
    }
    async assertCpfUnico(edicaoId, cpf, ignoreId) {
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
    async getLink(slug) {
        const link = await this.prisma.linkComunidade.findFirst({
            where: { slug, ativo: true },
        });
        if (!link)
            throw new common_1.NotFoundException('Link de inscrição inválido.');
        return link;
    }
    async findInscricaoPublica(identifier) {
        const key = decodeURIComponent(identifier).trim();
        const keyLower = key.toLowerCase();
        const include = {
            comunidade: { select: { id: true, nome: true, slug: true } },
            badges: {
                include: {
                    comunidade: { select: { id: true, nome: true, slug: true } },
                },
            },
            finalistas: {
                where: { ativo: true },
                include: {
                    categoria: { select: { nome: true } },
                    resultados: {
                        select: { publicadoEm: true },
                    },
                },
            },
        };
        const statusFilter = {
            in: [client_1.StatusInscricaoStartup.ATIVO, client_1.StatusInscricaoStartup.PENDENTE],
        };
        const bySlug = await this.prisma.inscricaoStartup.findFirst({
            where: { slugPublico: key, status: statusFilter },
            include,
        });
        if (bySlug)
            return bySlug;
        const withSite = await this.prisma.inscricaoStartup.findMany({
            where: { site: { not: null }, status: statusFilter },
            include,
        });
        return (withSite.find((row) => (0, startup_url_util_1.normalizeSiteKey)(row.site) === keyLower) ?? null);
    }
    async uniqueSlug(nome) {
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
};
exports.PublicStartupService = PublicStartupService;
exports.PublicStartupService = PublicStartupService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        edicoes_service_1.EdicoesService,
        pessoas_service_1.PessoasService])
], PublicStartupService);
let PublicVotoService = class PublicVotoService {
    constructor(prisma, edicoesService, auditoria, pessoasService) {
        this.prisma = prisma;
        this.edicoesService = edicoesService;
        this.auditoria = auditoria;
        this.pessoasService = pessoasService;
    }
    async statusVotacao() {
        const edicao = await this.edicoesService.getEdicaoAtiva();
        return { votacaoAberta: edicao.votacaoAberta };
    }
    async listCategorias() {
        const edicaoId = await this.edicoesService.getEdicaoAtivaId();
        return this.prisma.categoria.findMany({
            where: { edicaoId },
            orderBy: { ordem: 'asc' },
        });
    }
    async listFinalistas(categoria) {
        const edicaoId = await this.edicoesService.getEdicaoAtivaId();
        const finalistas = await this.prisma.finalista.findMany({
            where: {
                edicaoId,
                ativo: true,
                categoria: { nome: categoria },
            },
            include: {
                inscricaoStartup: true,
                categoria: true,
            },
        });
        return finalistas.map((f) => ({
            id: f.id,
            nome: f.inscricaoStartup.nomeStartup,
            categoria: f.categoria.nome,
            metaResumo: f.metaResumo ||
                `${f.inscricaoStartup.cidadeOperacao || '—'} · ${f.inscricaoStartup.categoria || '—'}`,
            inicial: f.inscricaoStartup.nomeStartup?.charAt(0).toUpperCase(),
        }));
    }
    async totalVotos() {
        const edicaoId = await this.edicoesService.getEdicaoAtivaId();
        const total = await this.prisma.voto.count({ where: { edicaoId } });
        return { total };
    }
    async registrarVoto(dto) {
        if (!dto.lgpdAceito) {
            throw new common_1.BadRequestException('É necessário aceitar o tratamento de dados.');
        }
        if (!(0, cpf_util_1.isValidCpf)(dto.cpf)) {
            throw new common_1.BadRequestException('CPF inválido.');
        }
        const edicao = await this.edicoesService.getEdicaoAtiva();
        if (!edicao.votacaoAberta) {
            throw new common_1.ForbiddenException('A votação não está aberta.');
        }
        const cpf = (0, cpf_util_1.normalizeCpf)(dto.cpf);
        const existing = await this.prisma.voto.findUnique({
            where: { edicaoId_cpf: { edicaoId: edicao.id, cpf } },
        });
        if (existing) {
            throw new common_1.ConflictException('Este CPF já votou nesta edição.');
        }
        const pessoa = await this.pessoasService.findByCpf(edicao.id, cpf);
        const lider = await this.prisma.lider.findFirst({
            where: {
                edicaoId: edicao.id,
                cpf,
                status: client_1.StatusParticipante.ATIVO,
            },
        });
        const inscricao = await this.prisma.inscricaoStartup.findFirst({
            where: {
                edicaoId: edicao.id,
                responsavelCpf: cpf,
                status: {
                    in: [
                        client_1.StatusInscricaoStartup.ATIVO,
                        client_1.StatusInscricaoStartup.PENDENTE,
                    ],
                },
            },
        });
        if (!pessoa && !lider && !inscricao) {
            throw new common_1.ForbiddenException('Apenas líderes comunitários e empresas cadastradas podem votar.');
        }
        const finalista = await this.prisma.finalista.findFirst({
            where: {
                id: dto.finalistaId,
                edicaoId: edicao.id,
                ativo: true,
                categoria: { nome: dto.categoria },
            },
            include: { inscricaoStartup: true, categoria: true },
        });
        if (!finalista) {
            throw new common_1.NotFoundException('Finalista não encontrado para esta categoria.');
        }
        await this.prisma.voto.create({
            data: {
                edicaoId: edicao.id,
                finalistaId: finalista.id,
                votanteNome: dto.nome,
                cpf,
                pessoaId: pessoa?.id,
                votanteLiderId: lider?.id,
                votanteInscricaoId: inscricao?.id,
                lgpdAceitoEm: new Date(),
            },
        });
        await this.auditoria.registrar({
            edicaoId: edicao.id,
            tipo: client_1.TipoAuditoria.VOTO,
            atorPapel: lider ? client_1.PapelAuditoria.LIDER : client_1.PapelAuditoria.EMPREENDEDOR,
            atorId: lider?.id || inscricao?.id,
            cpfHash: (0, hash_util_1.hashCpf)(cpf),
            payload: {
                categoriaId: finalista.categoriaId,
            },
        });
        const total = await this.prisma.voto.count({ where: { edicaoId: edicao.id } });
        return {
            startup: finalista.inscricaoStartup.nomeStartup,
            categoria: finalista.categoria.nome,
            totalVotos: total,
        };
    }
    async registrarVotoAutenticado(user, dto) {
        if (!dto.lgpdAceito) {
            throw new common_1.BadRequestException('É necessário aceitar o tratamento de dados.');
        }
        const edicao = await this.edicoesService.getEdicaoAtiva();
        if (!edicao.votacaoAberta) {
            throw new common_1.ForbiddenException('A votação não está aberta.');
        }
        const pessoaId = user.pessoaId || user.id;
        const pessoa = await this.prisma.pessoa.findUnique({
            where: { id: pessoaId },
            include: {
                lideres: {
                    where: {
                        edicaoId: edicao.id,
                        status: client_1.StatusParticipante.ATIVO,
                    },
                },
                inscricoesStartup: {
                    where: {
                        edicaoId: edicao.id,
                        status: {
                            in: [
                                client_1.StatusInscricaoStartup.ATIVO,
                                client_1.StatusInscricaoStartup.PENDENTE,
                            ],
                        },
                    },
                },
            },
        });
        if (!pessoa || pessoa.edicaoId !== edicao.id) {
            throw new common_1.ForbiddenException('Sessão inválida para votar nesta edição.');
        }
        const lider = pessoa.lideres[0] || null;
        const inscricao = pessoa.inscricoesStartup[0] || null;
        if (!lider && !inscricao) {
            throw new common_1.ForbiddenException('Apenas líderes comunitários e empresas cadastradas podem votar.');
        }
        return this.registrarVoto({
            nome: pessoa.nome,
            cpf: pessoa.cpf,
            categoria: dto.categoria,
            finalistaId: dto.finalistaId,
            lgpdAceito: true,
        });
    }
};
exports.PublicVotoService = PublicVotoService;
exports.PublicVotoService = PublicVotoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        edicoes_service_1.EdicoesService,
        auditoria_service_1.AuditoriaService,
        pessoas_service_1.PessoasService])
], PublicVotoService);
//# sourceMappingURL=public.service.js.map