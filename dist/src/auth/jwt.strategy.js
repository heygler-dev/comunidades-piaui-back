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
exports.JwtStrategy = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const client_1 = require("../../generated/prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(prisma, config) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.get('JWT_SECRET') || 'dev-secret',
        });
        this.prisma = prisma;
    }
    async validate(payload) {
        if (payload.role === 'admin') {
            const admin = await this.prisma.usuarioAdmin.findUnique({
                where: { id: payload.sub },
                select: { id: true, email: true, ativo: true },
            });
            if (!admin || !admin.ativo) {
                throw new common_1.UnauthorizedException('Sessão inválida ou expirada.');
            }
            return {
                id: admin.id,
                email: admin.email,
                role: 'admin',
                edicaoId: payload.edicaoId,
            };
        }
        const pessoaId = payload.pessoaId || payload.sub;
        const pessoa = await this.prisma.pessoa.findUnique({
            where: { id: pessoaId },
            include: {
                lideres: {
                    where: { status: client_1.StatusParticipante.ATIVO },
                    select: { id: true, comunidadeId: true },
                },
                inscricoesStartup: {
                    where: {
                        status: {
                            in: [client_1.StatusInscricaoStartup.ATIVO, client_1.StatusInscricaoStartup.PENDENTE],
                        },
                    },
                    select: { id: true },
                },
            },
        });
        if (!pessoa) {
            throw new common_1.UnauthorizedException('Sessão inválida ou expirada.');
        }
        if (payload.role === 'lider' && pessoa.lideres.length === 0) {
            throw new common_1.UnauthorizedException('Sessão inválida ou expirada.');
        }
        if (payload.role === 'empreendedor' && pessoa.inscricoesStartup.length === 0) {
            throw new common_1.UnauthorizedException('Sessão inválida ou expirada.');
        }
        return {
            id: pessoa.id,
            email: pessoa.email,
            role: payload.role,
            edicaoId: pessoa.edicaoId,
            pessoaId: pessoa.id,
            comunidadeId: payload.comunidadeId || pessoa.lideres[0]?.comunidadeId,
        };
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], JwtStrategy);
//# sourceMappingURL=jwt.strategy.js.map