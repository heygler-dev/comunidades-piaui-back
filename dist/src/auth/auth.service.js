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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const client_1 = require("../../generated/prisma/client");
const auditoria_service_1 = require("../auditoria/auditoria.service");
const edicoes_service_1 = require("../edicoes/edicoes.service");
const pessoas_service_1 = require("../pessoas/pessoas.service");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = class AuthService {
    constructor(prisma, jwtService, edicoesService, auditoria, pessoasService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.edicoesService = edicoesService;
        this.auditoria = auditoria;
        this.pessoasService = pessoasService;
    }
    async login(dto) {
        const papel = dto.papel || 'admin';
        if (papel === 'admin')
            return this.loginAdmin(dto);
        if (papel === 'lider')
            return this.loginParticipante(dto, 'lider');
        return this.loginParticipante(dto, 'empreendedor');
    }
    async loginAdmin(dto) {
        const admin = await this.prisma.usuarioAdmin.findUnique({
            where: { email: dto.email },
        });
        if (!admin || !admin.ativo) {
            throw new common_1.UnauthorizedException('Credenciais inválidas.');
        }
        const senhaOk = await bcrypt.compare(dto.senha, admin.senhaHash);
        if (!senhaOk)
            throw new common_1.UnauthorizedException('Credenciais inválidas.');
        const edicaoId = await this.edicoesService.getEdicaoAtivaId().catch(() => null);
        const access_token = await this.signToken({
            sub: admin.id,
            email: admin.email,
            role: 'admin',
            edicaoId: edicaoId || undefined,
        });
        await this.auditoria.registrar({
            edicaoId: edicaoId || undefined,
            tipo: client_1.TipoAuditoria.LOGIN,
            atorPapel: client_1.PapelAuditoria.ADMIN,
            atorId: admin.id,
            payload: { email: admin.email },
        });
        return {
            access_token,
            role: 'admin',
            user: { id: admin.id, nome: admin.nome, email: admin.email },
            admin: { id: admin.id, nome: admin.nome, email: admin.email },
        };
    }
    async loginParticipante(dto, role) {
        const edicao = await this.edicoesService.getEdicaoAtiva();
        const pessoa = await this.prisma.pessoa.findFirst({
            where: { edicaoId: edicao.id, email: dto.email },
            include: {
                lideres: {
                    where: { status: client_1.StatusParticipante.ATIVO },
                    include: {
                        comunidade: { select: { id: true, nome: true, slug: true } },
                    },
                },
                inscricoesStartup: {
                    where: {
                        status: {
                            in: [client_1.StatusInscricaoStartup.ATIVO, client_1.StatusInscricaoStartup.PENDENTE],
                        },
                    },
                    select: {
                        id: true,
                        nomeStartup: true,
                        slugPublico: true,
                        status: true,
                        comunidade: { select: { id: true, nome: true, slug: true } },
                    },
                },
            },
        });
        if (!pessoa)
            throw new common_1.UnauthorizedException('Credenciais inválidas.');
        const senhaOk = await bcrypt.compare(dto.senha, pessoa.senhaHash);
        if (!senhaOk)
            throw new common_1.UnauthorizedException('Credenciais inválidas.');
        if (role === 'lider' && pessoa.lideres.length === 0) {
            throw new common_1.UnauthorizedException('Esta conta não possui vínculo de líder comunitário.');
        }
        if (role === 'empreendedor' && pessoa.inscricoesStartup.length === 0) {
            throw new common_1.UnauthorizedException('Esta conta não possui startup inscrita nesta edição.');
        }
        const access_token = await this.signToken({
            sub: pessoa.id,
            email: pessoa.email,
            role,
            edicaoId: edicao.id,
            pessoaId: pessoa.id,
        });
        await this.auditoria.registrar({
            edicaoId: edicao.id,
            tipo: client_1.TipoAuditoria.LOGIN,
            atorPapel: role === 'lider' ? client_1.PapelAuditoria.LIDER : client_1.PapelAuditoria.EMPREENDEDOR,
            atorId: pessoa.id,
            payload: { email: pessoa.email, role },
        });
        return {
            access_token,
            role: role,
            user: {
                id: pessoa.id,
                pessoaId: pessoa.id,
                nome: pessoa.nome,
                email: pessoa.email,
                papeis: {
                    lider: pessoa.lideres.length > 0,
                    empreendedor: pessoa.inscricoesStartup.length > 0,
                },
                vinculosLider: pessoa.lideres.map((l) => ({
                    liderId: l.id,
                    tipoLider: l.tipoLider,
                    comunidade: l.comunidade,
                })),
                startups: pessoa.inscricoesStartup,
            },
        };
    }
    async me(user) {
        if (user.role === 'admin') {
            const admin = await this.prisma.usuarioAdmin.findUnique({
                where: { id: user.id },
                select: { id: true, nome: true, email: true, ativo: true },
            });
            if (!admin)
                throw new common_1.UnauthorizedException();
            return { role: user.role, ...admin };
        }
        const pessoaId = user.pessoaId || user.id;
        const perfil = await this.pessoasService.perfilCompleto(pessoaId);
        if (!perfil)
            throw new common_1.UnauthorizedException();
        return { role: user.role, ...perfil };
    }
    signToken(payload) {
        return this.jwtService.signAsync(payload);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        edicoes_service_1.EdicoesService,
        auditoria_service_1.AuditoriaService,
        pessoas_service_1.PessoasService])
], AuthService);
//# sourceMappingURL=auth.service.js.map