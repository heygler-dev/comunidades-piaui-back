import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import {
  StatusInscricaoStartup,
  StatusParticipante,
} from '../../generated/prisma/client';
import { AppRole } from '../common/decorators/roles.decorator';
import { PrismaService } from '../prisma/prisma.service';

export type JwtPayload = {
  sub: string;
  email: string;
  role: AppRole;
  edicaoId?: string;
  comunidadeId?: string;
  pessoaId?: string;
};

export type AuthUser = {
  id: string;
  email: string;
  role: AppRole;
  edicaoId?: string;
  comunidadeId?: string;
  pessoaId?: string;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly prisma: PrismaService,
    config: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get<string>('JWT_SECRET') || 'dev-secret',
    });
  }

  async validate(payload: JwtPayload): Promise<AuthUser> {
    if (payload.role === 'admin') {
      const admin = await this.prisma.usuarioAdmin.findUnique({
        where: { id: payload.sub },
        select: { id: true, email: true, ativo: true },
      });
      if (!admin || !admin.ativo) {
        throw new UnauthorizedException('Sessão inválida ou expirada.');
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
          where: { status: StatusParticipante.ATIVO },
          select: { id: true, comunidadeId: true },
        },
        inscricoesStartup: {
          where: {
            status: {
              in: [StatusInscricaoStartup.ATIVO, StatusInscricaoStartup.PENDENTE],
            },
          },
          select: { id: true },
        },
      },
    });

    if (!pessoa) {
      throw new UnauthorizedException('Sessão inválida ou expirada.');
    }

    if (payload.role === 'lider' && pessoa.lideres.length === 0) {
      throw new UnauthorizedException('Sessão inválida ou expirada.');
    }
    if (payload.role === 'empreendedor' && pessoa.inscricoesStartup.length === 0) {
      throw new UnauthorizedException('Sessão inválida ou expirada.');
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
}
