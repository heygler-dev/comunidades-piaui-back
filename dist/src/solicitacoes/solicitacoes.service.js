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
exports.SolicitacoesService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const client_1 = require("../../generated/prisma/client");
const cpf_util_1 = require("../common/utils/cpf.util");
const startup_url_util_1 = require("../common/utils/startup-url.util");
const slug_util_1 = require("../common/utils/slug.util");
const edicoes_service_1 = require("../edicoes/edicoes.service");
const pessoas_service_1 = require("../pessoas/pessoas.service");
const prisma_service_1 = require("../prisma/prisma.service");
let SolicitacoesService = class SolicitacoesService {
    constructor(prisma, edicoesService, pessoasService) {
        this.prisma = prisma;
        this.edicoesService = edicoesService;
        this.pessoasService = pessoasService;
    }
    async assertComunidadeAtiva(comunidadeId) {
        const edicaoId = await this.edicoesService.getEdicaoAtivaId();
        const comunidade = await this.prisma.comunidade.findFirst({
            where: { id: comunidadeId, edicaoId, status: 'ativa' },
        });
        if (!comunidade) {
            throw new common_1.NotFoundException('Comunidade não encontrada ou indisponível.');
        }
        return comunidade;
    }
    async assertSemSolicitacaoPendente(edicaoId, comunidadeId, cpf, tipo) {
        const pendente = await this.prisma.solicitacaoCadastro.findFirst({
            where: {
                edicaoId,
                comunidadeId,
                cpf,
                tipo,
                status: client_1.StatusSolicitacao.PENDENTE,
            },
        });
        if (pendente) {
            throw new common_1.ConflictException('Já existe uma solicitação pendente para esta comunidade.');
        }
    }
    async solicitarLider(dto) {
        if (!dto.lgpdAceito) {
            throw new common_1.BadRequestException('É necessário aceitar o tratamento de dados.');
        }
        if (!(0, cpf_util_1.isValidCpf)(dto.cpf)) {
            throw new common_1.BadRequestException('CPF inválido.');
        }
        const cpf = (0, cpf_util_1.normalizeCpf)(dto.cpf);
        const comunidade = await this.assertComunidadeAtiva(dto.comunidadeId);
        const edicaoId = comunidade.edicaoId;
        const jaLider = await this.prisma.lider.findFirst({
            where: { edicaoId, comunidadeId: comunidade.id, cpf },
        });
        if (jaLider) {
            throw new common_1.ConflictException('Este CPF já é líder nesta comunidade.');
        }
        await this.assertSemSolicitacaoPendente(edicaoId, comunidade.id, cpf, client_1.TipoSolicitacaoCadastro.LIDER);
        const senhaHash = await bcrypt.hash(dto.senha, 10);
        const solicitacao = await this.prisma.solicitacaoCadastro.create({
            data: {
                edicaoId,
                comunidadeId: comunidade.id,
                tipo: client_1.TipoSolicitacaoCadastro.LIDER,
                nome: dto.nome.trim(),
                cpf,
                email: dto.email.trim().toLowerCase(),
                telefone: dto.telefone.trim(),
                senhaHash,
                lgpdAceitoEm: new Date(),
            },
            include: {
                comunidade: { select: { nome: true, cidade: true, estado: true } },
            },
        });
        return {
            id: solicitacao.id,
            status: solicitacao.status,
            comunidade: solicitacao.comunidade,
            mensagem: 'Solicitação enviada. O líder-semente da comunidade irá analisar seu pedido.',
        };
    }
    async solicitarStartup(dto) {
        if (!dto.lgpdAceito || !dto.cpfUnicoConfirmado) {
            throw new common_1.BadRequestException('Confirme as declarações obrigatórias.');
        }
        if (!(0, cpf_util_1.isValidCpf)(dto.cpf)) {
            throw new common_1.BadRequestException('CPF inválido.');
        }
        const cpf = (0, cpf_util_1.normalizeCpf)(dto.cpf);
        const comunidade = await this.assertComunidadeAtiva(dto.comunidadeId);
        const edicaoId = comunidade.edicaoId;
        const jaStartup = await this.prisma.inscricaoStartup.findFirst({
            where: { edicaoId, responsavelCpf: cpf },
        });
        if (jaStartup) {
            throw new common_1.ConflictException('Este CPF já foi usado para inscrever outra startup nesta edição.');
        }
        await this.assertSemSolicitacaoPendente(edicaoId, comunidade.id, cpf, client_1.TipoSolicitacaoCadastro.STARTUP);
        const senhaHash = await bcrypt.hash(dto.senha, 10);
        const solicitacao = await this.prisma.solicitacaoCadastro.create({
            data: {
                edicaoId,
                comunidadeId: comunidade.id,
                tipo: client_1.TipoSolicitacaoCadastro.STARTUP,
                nome: dto.responsavelNome.trim(),
                cpf,
                email: dto.email.trim().toLowerCase(),
                telefone: dto.telefone.trim(),
                senhaHash,
                lgpdAceitoEm: new Date(),
                nomeStartup: dto.nomeStartup.trim(),
                categoria: dto.categoria,
                cidadeOperacao: dto.cidadeOperacao.trim(),
                site: dto.site?.trim() || null,
                descricao: dto.descricao.trim(),
                cpfUnicoConfirmado: true,
            },
            include: {
                comunidade: { select: { nome: true, cidade: true, estado: true } },
            },
        });
        return {
            id: solicitacao.id,
            status: solicitacao.status,
            comunidade: solicitacao.comunidade,
            mensagem: 'Solicitação enviada. Um líder da comunidade irá analisar a inscrição da sua startup.',
        };
    }
    async resolveLiderRevisor(pessoaId, comunidadeId) {
        const lideres = await this.prisma.lider.findMany({
            where: {
                pessoaId,
                status: client_1.StatusParticipante.ATIVO,
                ...(comunidadeId ? { comunidadeId } : {}),
            },
            include: { comunidade: true },
        });
        if (!lideres.length) {
            throw new common_1.NotFoundException('Vínculo de líder não encontrado.');
        }
        if (comunidadeId) {
            const match = lideres.find((l) => l.comunidadeId === comunidadeId);
            if (!match)
                throw new common_1.ForbiddenException('Sem acesso a esta comunidade.');
            return match;
        }
        return lideres[0];
    }
    async listarParaLider(pessoaId, comunidadeId, tipo) {
        const lider = await this.resolveLiderRevisor(pessoaId, comunidadeId);
        const where = {
            comunidadeId: lider.comunidadeId,
            status: client_1.StatusSolicitacao.PENDENTE,
            ...(tipo ? { tipo } : {}),
        };
        const [items, totalStartup, totalLider] = await Promise.all([
            this.prisma.solicitacaoCadastro.findMany({
                where,
                orderBy: { createdAt: 'asc' },
                select: {
                    id: true,
                    tipo: true,
                    status: true,
                    nome: true,
                    cpf: true,
                    email: true,
                    telefone: true,
                    nomeStartup: true,
                    categoria: true,
                    cidadeOperacao: true,
                    site: true,
                    descricao: true,
                    createdAt: true,
                },
            }),
            this.prisma.solicitacaoCadastro.count({
                where: {
                    comunidadeId: lider.comunidadeId,
                    status: client_1.StatusSolicitacao.PENDENTE,
                    tipo: client_1.TipoSolicitacaoCadastro.STARTUP,
                },
            }),
            this.prisma.solicitacaoCadastro.count({
                where: {
                    comunidadeId: lider.comunidadeId,
                    status: client_1.StatusSolicitacao.PENDENTE,
                    tipo: client_1.TipoSolicitacaoCadastro.LIDER,
                },
            }),
        ]);
        return {
            items,
            pendentes: { startup: totalStartup, lider: totalLider },
            podeRevisarLider: lider.tipoLider === client_1.TipoLider.SEMENTE,
        };
    }
    async aprovar(pessoaId, solicitacaoId, comunidadeId) {
        const lider = await this.resolveLiderRevisor(pessoaId, comunidadeId);
        const solicitacao = await this.prisma.solicitacaoCadastro.findFirst({
            where: {
                id: solicitacaoId,
                comunidadeId: lider.comunidadeId,
                status: client_1.StatusSolicitacao.PENDENTE,
            },
            include: { comunidade: true },
        });
        if (!solicitacao) {
            throw new common_1.NotFoundException('Solicitação pendente não encontrada.');
        }
        if (solicitacao.tipo === client_1.TipoSolicitacaoCadastro.LIDER) {
            if (lider.tipoLider !== client_1.TipoLider.SEMENTE) {
                throw new common_1.ForbiddenException('Apenas o líder-semente pode aprovar solicitações de novos líderes.');
            }
            return this.aprovarLider(solicitacao, lider.id);
        }
        return this.aprovarStartup(solicitacao, lider.id);
    }
    async aprovarLider(solicitacao, revisadoPorLiderId) {
        const jaLider = await this.prisma.lider.findFirst({
            where: {
                edicaoId: solicitacao.edicaoId,
                comunidadeId: solicitacao.comunidadeId,
                cpf: solicitacao.cpf,
            },
        });
        if (jaLider) {
            throw new common_1.ConflictException('Este CPF já é líder nesta comunidade.');
        }
        const pessoa = await this.pessoasService.upsertByCpf({
            edicaoId: solicitacao.edicaoId,
            cpf: solicitacao.cpf,
            nome: solicitacao.nome,
            email: solicitacao.email,
            telefone: solicitacao.telefone,
            senhaPlain: undefined,
            senhaHash: solicitacao.senhaHash,
            lgpdAceitoEm: solicitacao.lgpdAceitoEm,
        });
        const novoLider = await this.prisma.lider.create({
            data: {
                edicaoId: solicitacao.edicaoId,
                pessoaId: pessoa.id,
                comunidadeId: solicitacao.comunidadeId,
                nome: pessoa.nome,
                cpf: pessoa.cpf,
                email: pessoa.email,
                telefone: solicitacao.telefone,
                senhaHash: solicitacao.senhaHash,
                tipoLider: client_1.TipoLider.COMUNITARIO,
                nomeadoPorId: revisadoPorLiderId,
                lgpdAceitoEm: solicitacao.lgpdAceitoEm,
            },
        });
        await this.prisma.solicitacaoCadastro.update({
            where: { id: solicitacao.id },
            data: {
                status: client_1.StatusSolicitacao.APROVADA,
                revisadoPorLiderId,
                revisadoEm: new Date(),
                liderCriadoId: novoLider.id,
            },
        });
        return {
            id: solicitacao.id,
            status: client_1.StatusSolicitacao.APROVADA,
            liderId: novoLider.id,
            mensagem: `${solicitacao.nome} foi aceito(a) como líder da comunidade.`,
        };
    }
    async aprovarStartup(solicitacao, revisadoPorLiderId) {
        if (!solicitacao.nomeStartup || !solicitacao.categoria) {
            throw new common_1.BadRequestException('Dados da startup incompletos na solicitação.');
        }
        const duplicate = await this.prisma.inscricaoStartup.findFirst({
            where: { edicaoId: solicitacao.edicaoId, responsavelCpf: solicitacao.cpf },
        });
        if (duplicate) {
            throw new common_1.ConflictException('Este CPF já possui startup inscrita nesta edição.');
        }
        const liderRevisor = await this.prisma.lider.findUnique({
            where: { id: revisadoPorLiderId },
        });
        const pessoa = await this.pessoasService.upsertByCpf({
            edicaoId: solicitacao.edicaoId,
            cpf: solicitacao.cpf,
            nome: solicitacao.nome,
            email: solicitacao.email,
            telefone: solicitacao.telefone,
            senhaPlain: undefined,
            senhaHash: solicitacao.senhaHash,
            lgpdAceitoEm: solicitacao.lgpdAceitoEm,
        });
        const slugPublico = await this.uniqueSlug(solicitacao.nomeStartup);
        const inscricao = await this.prisma.inscricaoStartup.create({
            data: {
                edicaoId: solicitacao.edicaoId,
                comunidadeId: solicitacao.comunidadeId,
                liderId: liderRevisor?.id,
                pessoaId: pessoa.id,
                responsavelNome: solicitacao.nome,
                responsavelCpf: solicitacao.cpf,
                responsavelTelefone: solicitacao.telefone,
                responsavelEmail: solicitacao.email,
                senhaHash: solicitacao.senhaHash,
                nomeStartup: solicitacao.nomeStartup,
                categoria: solicitacao.categoria,
                cidadeOperacao: solicitacao.cidadeOperacao,
                site: solicitacao.site,
                descricao: solicitacao.descricao,
                slugPublico,
                lgpdAceitoEm: solicitacao.lgpdAceitoEm,
                cpfUnicoConfirmado: solicitacao.cpfUnicoConfirmado,
                confirmadoEm: new Date(),
                etapaAtual: 3,
                status: client_1.StatusInscricaoStartup.ATIVO,
                origem: client_1.OrigemCadastro.PORTAL,
            },
        });
        await this.prisma.solicitacaoCadastro.update({
            where: { id: solicitacao.id },
            data: {
                status: client_1.StatusSolicitacao.APROVADA,
                revisadoPorLiderId,
                revisadoEm: new Date(),
                inscricaoStartupId: inscricao.id,
            },
        });
        return {
            id: solicitacao.id,
            status: client_1.StatusSolicitacao.APROVADA,
            inscricaoId: inscricao.id,
            slugPublico: inscricao.slugPublico,
            paginaUrl: (0, startup_url_util_1.publicPathForStartup)(inscricao.site, inscricao.slugPublico),
            mensagem: `${solicitacao.nomeStartup} foi aceita na comunidade.`,
        };
    }
    async rejeitar(pessoaId, solicitacaoId, dto, comunidadeId) {
        const lider = await this.resolveLiderRevisor(pessoaId, comunidadeId);
        const solicitacao = await this.prisma.solicitacaoCadastro.findFirst({
            where: {
                id: solicitacaoId,
                comunidadeId: lider.comunidadeId,
                status: client_1.StatusSolicitacao.PENDENTE,
            },
        });
        if (!solicitacao) {
            throw new common_1.NotFoundException('Solicitação pendente não encontrada.');
        }
        if (solicitacao.tipo === client_1.TipoSolicitacaoCadastro.LIDER &&
            lider.tipoLider !== client_1.TipoLider.SEMENTE) {
            throw new common_1.ForbiddenException('Apenas o líder-semente pode recusar solicitações de novos líderes.');
        }
        await this.prisma.solicitacaoCadastro.update({
            where: { id: solicitacaoId },
            data: {
                status: client_1.StatusSolicitacao.REJEITADA,
                revisadoPorLiderId: lider.id,
                revisadoEm: new Date(),
                motivoRejeicao: dto.motivo?.trim() || null,
            },
        });
        return {
            id: solicitacaoId,
            status: client_1.StatusSolicitacao.REJEITADA,
            mensagem: 'Solicitação recusada.',
        };
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
exports.SolicitacoesService = SolicitacoesService;
exports.SolicitacoesService = SolicitacoesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        edicoes_service_1.EdicoesService,
        pessoas_service_1.PessoasService])
], SolicitacoesService);
//# sourceMappingURL=solicitacoes.service.js.map