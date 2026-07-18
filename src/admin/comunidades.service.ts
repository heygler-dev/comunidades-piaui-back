import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  StatusParticipante,
  TipoConvite,
  TipoLider,
} from '../../generated/prisma/client';
import { isValidCpf, normalizeCpf } from '../common/utils/cpf.util';
import { randomSuffix, slugify } from '../common/utils/slug.util';
import { EdicoesService } from '../edicoes/edicoes.service';
import { PessoasService } from '../pessoas/pessoas.service';
import { PrismaService } from '../prisma/prisma.service';
import {
  CreateComunidadeDto,
  CreateLiderSementeDto,
} from './dto/comunidades.dto';

@Injectable()
export class ComunidadesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly edicoesService: EdicoesService,
    private readonly pessoasService: PessoasService,
  ) {}

  async create(dto: CreateComunidadeDto, adminId: string) {
    const edicaoId = await this.edicoesService.getEdicaoAtivaId();
    const slugBase = slugify(dto.nome);
    const slug = `${slugBase}-${randomSuffix()}`;

    return this.prisma.comunidade.create({
      data: {
        edicaoId,
        nome: dto.nome.trim(),
        descricao: dto.descricao?.trim() || null,
        institucional: Boolean(dto.institucional),
        cidade: dto.cidade.trim(),
        estado: dto.estado?.trim() || 'PI',
        cidadesAtuacao: dto.cidadesAtuacao?.trim() || null,
        logoUrl: dto.logoUrl?.trim() || null,
        slug,
        createdBy: adminId,
      },
    });
  }

  async list() {
    const edicaoId = await this.edicoesService.getEdicaoAtivaId();
    return this.prisma.comunidade.findMany({
      where: { edicaoId },
      include: {
        lideres: {
          where: { tipoLider: TipoLider.SEMENTE },
          select: {
            id: true,
            nome: true,
            email: true,
            status: true,
            tipoLider: true,
          },
          take: 5,
        },
        _count: { select: { lideres: true, inscricoesStartup: true } },
      },
      orderBy: { nome: 'asc' },
    });
  }

  async createConviteLider(comunidadeId: string, adminId: string) {
    const edicaoId = await this.edicoesService.getEdicaoAtivaId();
    const comunidade = await this.prisma.comunidade.findFirst({
      where: { id: comunidadeId, edicaoId },
    });
    if (!comunidade) throw new NotFoundException('Comunidade não encontrada.');

    const token = randomSuffix(8);
    return this.prisma.convite.create({
      data: {
        edicaoId,
        comunidadeId,
        tipo: TipoConvite.LIDER,
        token,
        criadoPorId: adminId,
      },
      include: { comunidade: true },
    });
  }

  /**
   * Cadastra o líder-semente (admin da comunidade) após a comunidade existir.
   * Também cria o link de inscrição da comunidade.
   */
  async createLiderSemente(dto: CreateLiderSementeDto) {
    const edicaoId = await this.edicoesService.getEdicaoAtivaId();
    const comunidade = await this.prisma.comunidade.findFirst({
      where: { id: dto.comunidadeId, edicaoId },
    });
    if (!comunidade) throw new NotFoundException('Comunidade não encontrada.');

    if (!isValidCpf(dto.cpf)) {
      throw new BadRequestException('CPF inválido.');
    }
    const cpf = normalizeCpf(dto.cpf);

    const jaTemSemente = await this.prisma.lider.findFirst({
      where: {
        edicaoId,
        comunidadeId: comunidade.id,
        tipoLider: TipoLider.SEMENTE,
        status: StatusParticipante.ATIVO,
      },
    });
    if (jaTemSemente) {
      throw new ConflictException(
        'Esta comunidade já possui um líder-semente ativo.',
      );
    }

    const jaEhLiderNaComunidade = await this.prisma.lider.findFirst({
      where: {
        edicaoId,
        comunidadeId: comunidade.id,
        cpf,
        status: StatusParticipante.ATIVO,
      },
    });
    if (jaEhLiderNaComunidade) {
      throw new ConflictException(
        'Este CPF já é líder nesta comunidade.',
      );
    }

    const pessoa = await this.pessoasService.upsertByCpf({
      edicaoId,
      cpf,
      nome: dto.nome.trim(),
      email: dto.email.trim().toLowerCase(),
      telefone: dto.telefone.trim(),
      senhaPlain: dto.senha,
      lgpdAceitoEm: new Date(),
    });

    let lider;
    try {
      lider = await this.prisma.lider.create({
        data: {
          edicaoId,
          pessoaId: pessoa.id,
          comunidadeId: comunidade.id,
          nome: pessoa.nome,
          cpf: pessoa.cpf,
          email: pessoa.email,
          telefone: dto.telefone.trim(),
          senhaHash: pessoa.senhaHash,
          tipoLider: TipoLider.SEMENTE,
          status: StatusParticipante.ATIVO,
          lgpdAceitoEm: new Date(),
        },
        include: { comunidade: true },
      });
    } catch (err: unknown) {
      const code =
        err && typeof err === 'object' && 'code' in err
          ? String((err as { code: string }).code)
          : '';
      if (code === 'P2002') {
        throw new ConflictException(
          'Este CPF já está cadastrado como líder nesta comunidade (ou o banco ainda bloqueia multi-comunidade — rode as migrations).',
        );
      }
      throw err;
    }

    const linkExistente = await this.prisma.linkComunidade.findFirst({
      where: { edicaoId, comunidadeId: comunidade.id, ativo: true },
    });
    if (!linkExistente) {
      await this.prisma.linkComunidade.create({
        data: {
          edicaoId,
          comunidadeId: comunidade.id,
          liderId: lider.id,
          slug: `${comunidade.slug}-${randomSuffix()}`,
        },
      });
    }

    return {
      lider: {
        id: lider.id,
        nome: lider.nome,
        email: lider.email,
        tipoLider: lider.tipoLider,
        status: lider.status,
      },
      comunidade: {
        id: comunidade.id,
        nome: comunidade.nome,
        slug: comunidade.slug,
      },
    };
  }
}
