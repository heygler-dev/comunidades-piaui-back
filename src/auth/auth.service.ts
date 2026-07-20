import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import {
  PapelAuditoria,
  StatusInscricaoStartup,
  StatusParticipante,
  TipoAuditoria,
} from '../../generated/prisma/client';
import { AuditoriaService } from '../auditoria/auditoria.service';
import { AppRole } from '../common/decorators/roles.decorator';
import { EdicoesService } from '../edicoes/edicoes.service';
import { PessoasService } from '../pessoas/pessoas.service';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { SwitchPapelDto } from './dto/switch-papel.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly edicoesService: EdicoesService,
    private readonly auditoria: AuditoriaService,
    private readonly pessoasService: PessoasService,
  ) {}

  async login(dto: LoginDto) {
    const papel = dto.papel || 'admin';
    if (papel === 'admin') return this.loginAdmin(dto);
    if (papel === 'lider') return this.loginParticipante(dto, 'lider');
    return this.loginParticipante(dto, 'empreendedor');
  }

  private async loginAdmin(dto: LoginDto) {
    const admin = await this.prisma.usuarioAdmin.findUnique({
      where: { email: dto.email },
    });
    if (!admin || !admin.ativo) {
      throw new UnauthorizedException('Credenciais inválidas.');
    }
    const senhaOk = await bcrypt.compare(dto.senha, admin.senhaHash);
    if (!senhaOk) throw new UnauthorizedException('Credenciais inválidas.');

    const edicaoId = await this.edicoesService.getEdicaoAtivaId().catch(() => null);
    const access_token = await this.signToken({
      sub: admin.id,
      email: admin.email,
      role: 'admin',
      edicaoId: edicaoId || undefined,
    });

    await this.auditoria.registrar({
      edicaoId: edicaoId || undefined,
      tipo: TipoAuditoria.LOGIN,
      atorPapel: PapelAuditoria.ADMIN,
      atorId: admin.id,
      payload: { email: admin.email },
    });

    return {
      access_token,
      role: 'admin' as AppRole,
      user: { id: admin.id, nome: admin.nome, email: admin.email },
      admin: { id: admin.id, nome: admin.nome, email: admin.email },
    };
  }

  private async loginParticipante(
    dto: LoginDto,
    role: 'lider' | 'empreendedor',
  ) {
    const edicao = await this.edicoesService.getEdicaoAtiva();
    const pessoa = await this.prisma.pessoa.findFirst({
      where: { edicaoId: edicao.id, email: dto.email },
      include: {
        lideres: {
          where: { status: StatusParticipante.ATIVO },
          include: {
            comunidade: { select: { id: true, nome: true, slug: true } },
          },
        },
        inscricoesStartup: {
          where: {
            status: {
              in: [StatusInscricaoStartup.ATIVO, StatusInscricaoStartup.PENDENTE],
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

    if (!pessoa) throw new UnauthorizedException('Credenciais inválidas.');

    const senhaOk = await bcrypt.compare(dto.senha, pessoa.senhaHash);
    if (!senhaOk) throw new UnauthorizedException('Credenciais inválidas.');

    if (role === 'lider' && pessoa.lideres.length === 0) {
      throw new UnauthorizedException(
        'Esta conta não possui vínculo de líder comunitário.',
      );
    }
    if (role === 'empreendedor' && pessoa.inscricoesStartup.length === 0) {
      throw new UnauthorizedException(
        'Esta conta não possui startup inscrita nesta edição.',
      );
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
      tipo: TipoAuditoria.LOGIN,
      atorPapel:
        role === 'lider' ? PapelAuditoria.LIDER : PapelAuditoria.EMPREENDEDOR,
      atorId: pessoa.id,
      payload: { email: pessoa.email, role },
    });

    return {
      access_token,
      role: role as AppRole,
      user: {
        id: pessoa.id,
        pessoaId: pessoa.id,
        nome: pessoa.nome,
        email: pessoa.email,
        mustChangePassword: pessoa.mustChangePassword,
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

  async me(user: {
    id: string;
    role: AppRole;
    email: string;
    edicaoId?: string;
    pessoaId?: string;
  }) {
    if (user.role === 'admin') {
      const admin = await this.prisma.usuarioAdmin.findUnique({
        where: { id: user.id },
        select: { id: true, nome: true, email: true, ativo: true },
      });
      if (!admin) throw new UnauthorizedException();
      return { role: user.role, ...admin };
    }

    const pessoaId = user.pessoaId || user.id;
    const perfil = await this.pessoasService.perfilCompleto(pessoaId);
    if (!perfil) throw new UnauthorizedException();
    return { role: user.role, ...perfil };
  }

  async switchPapel(
    user: {
      id: string;
      role: AppRole;
      email: string;
      edicaoId?: string;
      pessoaId?: string;
    },
    dto: SwitchPapelDto,
  ) {
    if (user.role === 'admin') {
      throw new ForbiddenException('Admin não pode trocar para este papel.');
    }

    const pessoaId = user.pessoaId || user.id;
    const perfil = await this.pessoasService.perfilCompleto(pessoaId);
    if (!perfil) throw new UnauthorizedException('Sessão inválida.');

    if (dto.papel === 'lider' && !perfil.papeis.lider) {
      throw new ForbiddenException(
        'Esta conta não possui vínculo de líder comunitário.',
      );
    }
    if (dto.papel === 'empreendedor' && !perfil.papeis.empreendedor) {
      throw new ForbiddenException(
        'Esta conta não possui startup inscrita nesta edição.',
      );
    }

    const access_token = await this.signToken({
      sub: pessoaId,
      email: perfil.email,
      role: dto.papel,
      edicaoId: user.edicaoId,
      pessoaId,
    });

    await this.auditoria.registrar({
      edicaoId: user.edicaoId,
      tipo: TipoAuditoria.LOGIN,
      atorPapel:
        dto.papel === 'lider'
          ? PapelAuditoria.LIDER
          : PapelAuditoria.EMPREENDEDOR,
      atorId: pessoaId,
      payload: { email: perfil.email, role: dto.papel, switch: true },
    });

    return {
      access_token,
      role: dto.papel as AppRole,
      user: perfil,
    };
  }

  private signToken(payload: {
    sub: string;
    email: string;
    role: AppRole;
    edicaoId?: string;
    comunidadeId?: string;
    pessoaId?: string;
  }) {
    return this.jwtService.signAsync(payload);
  }
}
