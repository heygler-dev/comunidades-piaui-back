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
exports.PessoasService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../prisma/prisma.service");
let PessoasService = class PessoasService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findByCpf(edicaoId, cpf) {
        return this.prisma.pessoa.findUnique({
            where: { edicaoId_cpf: { edicaoId, cpf } },
        });
    }
    findByEmail(edicaoId, email) {
        return this.prisma.pessoa.findUnique({
            where: { edicaoId_email: { edicaoId, email } },
        });
    }
    async upsertByCpf(input) {
        const existing = await this.findByCpf(input.edicaoId, input.cpf);
        if (existing) {
            if (existing.email.toLowerCase() !== input.email.toLowerCase()) {
                const emailOwner = await this.findByEmail(input.edicaoId, input.email);
                if (emailOwner && emailOwner.id !== existing.id) {
                    throw new common_1.ConflictException('Este e-mail já está vinculado a outra pessoa nesta edição.');
                }
            }
            const data = {
                nome: input.nome || existing.nome,
                telefone: input.telefone ?? existing.telefone,
            };
            if (input.email && input.email.toLowerCase() !== existing.email.toLowerCase()) {
                data.email = input.email;
            }
            if (input.lgpdAceitoEm && !existing.lgpdAceitoEm) {
                data.lgpdAceitoEm = input.lgpdAceitoEm;
            }
            if (input.senhaPlain) {
                data.senhaHash = await bcrypt.hash(input.senhaPlain, 10);
            }
            else if (input.senhaHash) {
                data.senhaHash = input.senhaHash;
            }
            return this.prisma.pessoa.update({
                where: { id: existing.id },
                data,
            });
        }
        const emailOwner = await this.findByEmail(input.edicaoId, input.email);
        if (emailOwner) {
            throw new common_1.ConflictException('Este e-mail já está vinculado a outra pessoa nesta edição.');
        }
        const senhaHash = input.senhaHash ||
            (input.senhaPlain
                ? await bcrypt.hash(input.senhaPlain, 10)
                : await bcrypt.hash(`tmp-${input.cpf}-${Date.now()}`, 10));
        return this.prisma.pessoa.create({
            data: {
                edicaoId: input.edicaoId,
                cpf: input.cpf,
                nome: input.nome,
                email: input.email,
                telefone: input.telefone,
                senhaHash,
                lgpdAceitoEm: input.lgpdAceitoEm,
            },
        });
    }
    async perfilCompleto(pessoaId) {
        const pessoa = await this.prisma.pessoa.findUnique({
            where: { id: pessoaId },
            include: {
                lideres: {
                    where: { status: 'ATIVO' },
                    include: {
                        comunidade: { select: { id: true, nome: true, slug: true, cidade: true } },
                    },
                    orderBy: { ativadoEm: 'asc' },
                },
                inscricoesStartup: {
                    where: { status: { in: ['ATIVO', 'PENDENTE'] } },
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
            return null;
        return {
            id: pessoa.id,
            nome: pessoa.nome,
            email: pessoa.email,
            cpfMascarado: this.maskCpf(pessoa.cpf),
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
        };
    }
    maskCpf(cpf) {
        if (cpf.length !== 11)
            return '***.***.***-**';
        return `***${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-**`;
    }
};
exports.PessoasService = PessoasService;
exports.PessoasService = PessoasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PessoasService);
//# sourceMappingURL=pessoas.service.js.map