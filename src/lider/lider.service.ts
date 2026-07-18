import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  StatusInscricaoStartup,
  StatusParticipante,
  TipoConvite,
  TipoLider,
} from '../../generated/prisma/client';
import { isValidCpf, normalizeCpf } from '../common/utils/cpf.util';
import { randomSuffix } from '../common/utils/slug.util';
import { EdicoesService } from '../edicoes/edicoes.service';
import { PessoasService } from '../pessoas/pessoas.service';
import { PrismaService } from '../prisma/prisma.service';
import { NomearLiderDto } from './dto/lider.dto';

@Injectable()
export class LiderService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly edicoesService: EdicoesService,
    private readonly pessoasService: PessoasService,
  ) {}

  async me(pessoaId: string) {
    const perfil = await this.pessoasService.perfilCompleto(pessoaId);
    if (!perfil?.papeis.lider) {
      throw new NotFoundException('Perfil de líder não encontrado.');
    }
    const edicao = await this.edicoesService.getStatusPublico();
    return { ...perfil, edicao };
  }

  async getLink(pessoaId: string, comunidadeId?: string) {
    const lider = await this.resolveLider(pessoaId, comunidadeId);
    let link = await this.prisma.linkComunidade.findFirst({
      where: { liderId: lider.id, ativo: true },
      orderBy: { createdAt: 'desc' },
    });

    if (!link) {
      link = await this.prisma.linkComunidade.create({
        data: {
          edicaoId: lider.edicaoId,
          comunidadeId: lider.comunidadeId,
          liderId: lider.id,
          slug: `${lider.comunidade.slug}-${randomSuffix()}`,
        },
      });
    }

    return {
      slug: link.slug,
      linkInscricao: `/inscrever/${link.slug}`,
      ativo: link.ativo,
      comunidade: lider.comunidade,
      liderId: lider.id,
    };
  }

  async stats(pessoaId: string, comunidadeId?: string) {
    const lider = await this.resolveLider(pessoaId, comunidadeId);
    const links = await this.prisma.linkComunidade.findMany({
      where: { liderId: lider.id },
      select: { id: true },
    });
    const linkIds = links.map((l) => l.id);

    const [total, porStatus] = await Promise.all([
      this.prisma.inscricaoStartup.count({
        where: {
          edicaoId: lider.edicaoId,
          OR: [
            { liderId: lider.id },
            ...(linkIds.length ? [{ linkComunidadeId: { in: linkIds } }] : []),
          ],
        },
      }),
      this.prisma.inscricaoStartup.groupBy({
        by: ['status'],
        where: {
          edicaoId: lider.edicaoId,
          OR: [
            { liderId: lider.id },
            ...(linkIds.length ? [{ linkComunidadeId: { in: linkIds } }] : []),
          ],
        },
        _count: { _all: true },
      }),
    ]);

    return {
      comunidade: lider.comunidade,
      total,
      porStatus: Object.fromEntries(
        porStatus.map((row) => [row.status, row._count._all]),
      ),
    };
  }

  async listLideresComunidade(pessoaId: string, comunidadeId?: string) {
    const lider = await this.resolveLider(pessoaId, comunidadeId);
    return this.prisma.lider.findMany({
      where: {
        edicaoId: lider.edicaoId,
        comunidadeId: lider.comunidadeId,
      },
      select: {
        id: true,
        nome: true,
        email: true,
        telefone: true,
        tipoLider: true,
        status: true,
        ativadoEm: true,
      },
      orderBy: { ativadoEm: 'asc' },
    });
  }

  async nomearLider(
    pessoaId: string,
    dto: NomearLiderDto,
    comunidadeId?: string,
  ) {
    const lider = await this.resolveLider(pessoaId, comunidadeId);
    if (lider.tipoLider !== TipoLider.SEMENTE) {
      throw new ForbiddenException(
        'Apenas o líder-semente pode nomear outros líderes da comunidade.',
      );
    }
    if (!isValidCpf(dto.cpf)) {
      throw new BadRequestException('CPF inválido.');
    }
    const cpf = normalizeCpf(dto.cpf);

    const jaNaComunidade = await this.prisma.lider.findFirst({
      where: {
        edicaoId: lider.edicaoId,
        comunidadeId: lider.comunidadeId,
        cpf,
      },
    });
    if (jaNaComunidade) {
      throw new ConflictException('Este CPF já é líder nesta comunidade.');
    }

    const pessoa = await this.pessoasService.upsertByCpf({
      edicaoId: lider.edicaoId,
      cpf,
      nome: dto.nome,
      email: dto.email,
      telefone: dto.telefone,
      senhaPlain: dto.senha,
      lgpdAceitoEm: new Date(),
    });

    const token = randomSuffix(8);
    const convite = await this.prisma.convite.create({
      data: {
        edicaoId: lider.edicaoId,
        comunidadeId: lider.comunidadeId,
        tipo: TipoConvite.LIDER,
        token,
        liderCriadorId: lider.id,
        usadoEm: new Date(),
        ativo: false,
      },
    });

    const novo = await this.prisma.lider.create({
      data: {
        edicaoId: lider.edicaoId,
        pessoaId: pessoa.id,
        comunidadeId: lider.comunidadeId,
        conviteId: convite.id,
        nome: pessoa.nome,
        cpf: pessoa.cpf,
        email: pessoa.email,
        telefone: dto.telefone,
        senhaHash: pessoa.senhaHash,
        tipoLider: TipoLider.COMUNITARIO,
        nomeadoPorId: lider.id,
        status: StatusParticipante.ATIVO,
        lgpdAceitoEm: new Date(),
      },
      select: {
        id: true,
        nome: true,
        email: true,
        tipoLider: true,
        status: true,
        pessoaId: true,
      },
    });

    await this.prisma.linkComunidade.create({
      data: {
        edicaoId: lider.edicaoId,
        comunidadeId: lider.comunidadeId,
        liderId: novo.id,
        slug: `${lider.comunidade.slug}-${randomSuffix()}`,
      },
    });

    return novo;
  }

  async apontarColegio(
    pessoaId: string,
    liderIds: string[],
    comunidadeId?: string,
  ) {
    const lider = await this.resolveLider(pessoaId, comunidadeId);
    const edicao = await this.edicoesService.getEdicaoAtiva();

    if (!edicao.colegioHabilitado) {
      throw new ForbiddenException('O colégio seletor ainda não foi habilitado.');
    }

    const uniqueIds = [...new Set(liderIds)];
    if (uniqueIds.length > edicao.xLideresColegio) {
      throw new BadRequestException(
        `Cada comunidade pode apontar no máximo ${edicao.xLideresColegio} líder(es).`,
      );
    }

    const lideres = await this.prisma.lider.findMany({
      where: {
        id: { in: uniqueIds },
        edicaoId: lider.edicaoId,
        comunidadeId: lider.comunidadeId,
        status: StatusParticipante.ATIVO,
      },
    });
    if (lideres.length !== uniqueIds.length) {
      throw new BadRequestException(
        'Todos os líderes apontados devem pertencer à sua comunidade e estar ativos.',
      );
    }

    await this.prisma.$transaction(async (tx) => {
      await tx.membroColegio.updateMany({
        where: {
          edicaoId: lider.edicaoId,
          comunidadeId: lider.comunidadeId,
        },
        data: { ativo: false },
      });

      for (const id of uniqueIds) {
        await tx.membroColegio.upsert({
          where: {
            edicaoId_liderId: {
              edicaoId: lider.edicaoId,
              liderId: id,
            },
          },
          create: {
            edicaoId: lider.edicaoId,
            comunidadeId: lider.comunidadeId,
            liderId: id,
            ativo: true,
          },
          update: {
            comunidadeId: lider.comunidadeId,
            ativo: true,
            apontadoEm: new Date(),
          },
        });
      }
    });

    return this.prisma.membroColegio.findMany({
      where: {
        edicaoId: lider.edicaoId,
        comunidadeId: lider.comunidadeId,
        ativo: true,
      },
      include: {
        lider: { select: { id: true, nome: true, email: true } },
      },
    });
  }

  async listInscricoes(pessoaId: string, comunidadeId?: string) {
    const lider = await this.resolveLider(pessoaId, comunidadeId);
    return this.prisma.inscricaoStartup.findMany({
      where: {
        edicaoId: lider.edicaoId,
        comunidadeId: lider.comunidadeId,
        status: { not: StatusInscricaoStartup.CANCELADO },
      },
      select: {
        id: true,
        nomeStartup: true,
        status: true,
        cidadeOperacao: true,
        categoria: true,
        slugPublico: true,
        site: true,
        confirmadoEm: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async aprovarInscricao(
    pessoaId: string,
    inscricaoId: string,
    comunidadeId?: string,
  ) {
    const lider = await this.resolveLider(pessoaId, comunidadeId);
    const inscricao = await this.prisma.inscricaoStartup.findFirst({
      where: {
        id: inscricaoId,
        edicaoId: lider.edicaoId,
        comunidadeId: lider.comunidadeId,
        status: StatusInscricaoStartup.PENDENTE,
      },
    });
    if (!inscricao) {
      throw new NotFoundException(
        'Inscrição pendente não encontrada nesta comunidade.',
      );
    }

    const updated = await this.prisma.inscricaoStartup.update({
      where: { id: inscricao.id },
      data: {
        status: StatusInscricaoStartup.ATIVO,
        liderId: inscricao.liderId ?? lider.id,
      },
      select: {
        id: true,
        nomeStartup: true,
        status: true,
        slugPublico: true,
      },
    });

    return {
      ...updated,
      mensagem: `${updated.nomeStartup} foi aceita na comunidade.`,
    };
  }

  async rejeitarInscricao(
    pessoaId: string,
    inscricaoId: string,
    comunidadeId?: string,
  ) {
    const lider = await this.resolveLider(pessoaId, comunidadeId);
    const inscricao = await this.prisma.inscricaoStartup.findFirst({
      where: {
        id: inscricaoId,
        edicaoId: lider.edicaoId,
        comunidadeId: lider.comunidadeId,
        status: StatusInscricaoStartup.PENDENTE,
      },
    });
    if (!inscricao) {
      throw new NotFoundException(
        'Inscrição pendente não encontrada nesta comunidade.',
      );
    }

    const updated = await this.prisma.inscricaoStartup.update({
      where: { id: inscricao.id },
      data: { status: StatusInscricaoStartup.CANCELADO },
      select: {
        id: true,
        nomeStartup: true,
        status: true,
      },
    });

    return {
      ...updated,
      mensagem: `${updated.nomeStartup} foi recusada.`,
    };
  }

  /** pessoaId do JWT → vínculo Lider (opcionalmente filtrado por comunidade) */
  private async resolveLider(pessoaId: string, comunidadeId?: string) {
    const where = {
      pessoaId,
      status: StatusParticipante.ATIVO,
      ...(comunidadeId ? { comunidadeId } : {}),
    };
    const lider = await this.prisma.lider.findFirst({
      where,
      include: {
        comunidade: {
          select: { id: true, nome: true, slug: true, cidade: true },
        },
      },
      orderBy: { ativadoEm: 'asc' },
    });
    if (!lider) {
      throw new NotFoundException(
        comunidadeId
          ? 'Você não é líder desta comunidade.'
          : 'Vínculo de líder não encontrado.',
      );
    }
    return lider;
  }
}
