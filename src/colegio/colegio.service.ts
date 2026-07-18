import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  PapelAuditoria,
  StatusIndicacao,
  StatusSelecaoColegio,
  TipoAuditoria,
} from '../../generated/prisma/client';
import { AuditoriaService } from '../auditoria/auditoria.service';
import { EdicoesService } from '../edicoes/edicoes.service';
import { PrismaService } from '../prisma/prisma.service';
import { RegistrarSelecaoDto } from './dto/colegio.dto';

@Injectable()
export class ColegioService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly edicoesService: EdicoesService,
    private readonly auditoria: AuditoriaService,
  ) {}

  async listIndicadas(pessoaId: string, categoriaId?: string) {
    const membro = await this.assertMembroAtivo(pessoaId);
    const edicaoId = await this.edicoesService.getEdicaoAtivaId();

    const indicacoes = await this.prisma.indicacao.findMany({
      where: {
        edicaoId,
        status: StatusIndicacao.ATIVA,
        ...(categoriaId ? { categoriaId } : {}),
      },
      include: {
        categoria: true,
        inscricaoStartup: {
          select: {
            id: true,
            nomeStartup: true,
            cidadeOperacao: true,
            slugPublico: true,
            comunidadeId: true,
            comunidade: { select: { id: true, nome: true } },
          },
        },
      },
      orderBy: [{ categoria: { ordem: 'asc' } }, { createdAt: 'asc' }],
    });

    const grouped = new Map<string, (typeof indicacoes)[number]>();
    for (const item of indicacoes) {
      const key = `${item.categoriaId}:${item.inscricaoStartupId}`;
      if (!grouped.has(key)) grouped.set(key, item);
    }
    const items = [...grouped.values()];

    const selecoes = await this.prisma.selecaoColegio.findMany({
      where: {
        edicaoId,
        membroColegioId: membro.id,
        ...(categoriaId ? { categoriaId } : {}),
        inscricaoStartupId: {
          in: items.map((i) => i.inscricaoStartupId),
        },
      },
      select: {
        categoriaId: true,
        inscricaoStartupId: true,
        status: true,
        conflitoInteresse: true,
      },
    });
    const selecaoByKey = new Map(
      selecoes.map((s) => [
        `${s.categoriaId}:${s.inscricaoStartupId}`,
        s,
      ]),
    );

    return items.map((item) => {
      const key = `${item.categoriaId}:${item.inscricaoStartupId}`;
      const minhaSelecao = selecaoByKey.get(key) || null;
      const mesmaComunidade =
        item.inscricaoStartup.comunidadeId === membro.comunidadeId;
      return {
        ...item,
        mesmaComunidade,
        minhaSelecao,
      };
    });
  }

  async registrarSelecao(pessoaId: string, dto: RegistrarSelecaoDto) {
    const membro = await this.assertMembroAtivo(pessoaId);
    const edicao = await this.edicoesService.getEdicaoAtiva();
    if (!edicao.colegioHabilitado) {
      throw new ForbiddenException('O colégio seletor não está habilitado.');
    }

    const categoria = await this.prisma.categoria.findFirst({
      where: { id: dto.categoriaId, edicaoId: edicao.id },
    });
    if (!categoria) throw new NotFoundException('Categoria não encontrada.');

    const startup = await this.prisma.inscricaoStartup.findFirst({
      where: { id: dto.inscricaoStartupId, edicaoId: edicao.id },
    });
    if (!startup) throw new NotFoundException('Startup não encontrada.');

    const conflito =
      dto.conflitoInteresse === true ||
      startup.comunidadeId === membro.comunidadeId;

    const status: StatusSelecaoColegio =
      conflito && dto.status !== StatusSelecaoColegio.ABSTENCAO
        ? StatusSelecaoColegio.ABSTENCAO
        : (dto.status as StatusSelecaoColegio);

    if (status === StatusSelecaoColegio.AVANCADA) {
      const avancadas = await this.prisma.selecaoColegio.groupBy({
        by: ['inscricaoStartupId'],
        where: {
          edicaoId: edicao.id,
          categoriaId: categoria.id,
          membroColegioId: membro.id,
          status: StatusSelecaoColegio.AVANCADA,
          NOT: { inscricaoStartupId: startup.id },
        },
      });
      if (avancadas.length >= edicao.nFinalistasPorCategoria) {
        throw new BadRequestException(
          `Limite de ${edicao.nFinalistasPorCategoria} finalistas por categoria atingido.`,
        );
      }
    }

    const selecao = await this.prisma.selecaoColegio.upsert({
      where: {
        edicaoId_categoriaId_inscricaoStartupId_membroColegioId: {
          edicaoId: edicao.id,
          categoriaId: categoria.id,
          inscricaoStartupId: startup.id,
          membroColegioId: membro.id,
        },
      },
      create: {
        edicaoId: edicao.id,
        categoriaId: categoria.id,
        inscricaoStartupId: startup.id,
        membroColegioId: membro.id,
        status,
        conflitoInteresse: conflito,
      },
      update: {
        status,
        conflitoInteresse: conflito,
      },
    });

    await this.auditoria.registrar({
      edicaoId: edicao.id,
      tipo: TipoAuditoria.SELECAO_COLEGIO,
      atorPapel: PapelAuditoria.LIDER,
      atorId: pessoaId,
      payload: {
        selecaoId: selecao.id,
        status,
        conflitoInteresse: conflito,
      },
    });

    return selecao;
  }

  async minhasSelecoes(pessoaId: string) {
    const membro = await this.assertMembroAtivo(pessoaId);
    return this.prisma.selecaoColegio.findMany({
      where: { membroColegioId: membro.id },
      include: {
        categoria: true,
        inscricaoStartup: {
          select: { id: true, nomeStartup: true, slugPublico: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  private async assertMembroAtivo(pessoaId: string) {
    const edicao = await this.edicoesService.getEdicaoAtiva();
    const lideres = await this.prisma.lider.findMany({
      where: {
        pessoaId,
        edicaoId: edicao.id,
        status: 'ATIVO',
      },
      select: { id: true },
    });
    if (!lideres.length) {
      throw new ForbiddenException(
        'Você não está apontado para o colégio seletor nesta edição.',
      );
    }
    const membro = await this.prisma.membroColegio.findFirst({
      where: {
        edicaoId: edicao.id,
        liderId: { in: lideres.map((l) => l.id) },
        ativo: true,
      },
    });
    if (!membro) {
      throw new ForbiddenException(
        'Você não está apontado para o colégio seletor nesta edição.',
      );
    }
    return membro;
  }
}
