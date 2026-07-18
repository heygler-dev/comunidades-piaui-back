import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  PapelAuditoria,
  StatusIndicacao,
  StatusInscricaoStartup,
  TipoAuditoria,
} from '../../generated/prisma/client';
import { AppRole } from '../common/decorators/roles.decorator';
import {
  indicacoesPermitidas,
  mensagemIndicacoesFechadas,
} from '../common/utils/edicoes-periodo.util';
import { AuditoriaService } from '../auditoria/auditoria.service';
import { EdicoesService } from '../edicoes/edicoes.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateIndicacaoDto } from './dto/indicacoes.dto';

@Injectable()
export class IndicacoesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly edicoesService: EdicoesService,
    private readonly auditoria: AuditoriaService,
  ) {}

  async buscar(params: {
    q?: string;
    categoriaId?: string;
    comunidadeId?: string;
  }) {
    const edicaoId = await this.edicoesService.getEdicaoAtivaId();
    let categoriaNome: string | undefined;
    if (params.categoriaId) {
      const nomes = await this.categoriaNomes(edicaoId, params.categoriaId);
      categoriaNome = nomes[0];
    }

    return this.prisma.inscricaoStartup.findMany({
      where: {
        edicaoId,
        status: {
          in: [StatusInscricaoStartup.ATIVO, StatusInscricaoStartup.PENDENTE],
        },
        ...(params.comunidadeId ? { comunidadeId: params.comunidadeId } : {}),
        ...(categoriaNome ? { categoria: categoriaNome } : {}),
        ...(params.q
          ? {
              nomeStartup: {
                contains: params.q,
                mode: 'insensitive',
              },
            }
          : {}),
      },
      select: {
        id: true,
        nomeStartup: true,
        categoria: true,
        cidadeOperacao: true,
        slugPublico: true,
        comunidade: { select: { id: true, nome: true, slug: true } },
      },
      orderBy: { nomeStartup: 'asc' },
      take: 50,
    });
  }

  async criar(
    user: { id: string; role: AppRole },
    dto: CreateIndicacaoDto,
  ) {
    const edicao = await this.edicoesService.getEdicaoAtiva();
    if (!indicacoesPermitidas(edicao)) {
      throw new ForbiddenException(mensagemIndicacoesFechadas(edicao));
    }

    const categoria = await this.prisma.categoria.findFirst({
      where: { id: dto.categoriaId, edicaoId: edicao.id },
    });
    if (!categoria) {
      throw new NotFoundException('Categoria não encontrada.');
    }

    const startup = await this.prisma.inscricaoStartup.findFirst({
      where: {
        id: dto.inscricaoStartupId,
        edicaoId: edicao.id,
        status: {
          in: [StatusInscricaoStartup.ATIVO, StatusInscricaoStartup.PENDENTE],
        },
      },
    });
    if (!startup) {
      throw new NotFoundException('Startup indicada não encontrada.');
    }

    let indicanteLiderId: string | undefined;
    let indicanteInscricaoId: string | undefined;
    let atorPapel: PapelAuditoria;

    if (user.role === 'lider') {
      const lider = await this.prisma.lider.findFirst({
        where: { pessoaId: user.id, edicaoId: edicao.id, status: 'ATIVO' },
      });
      if (!lider) {
        throw new ForbiddenException('Vínculo de líder não encontrado.');
      }
      indicanteLiderId = lider.id;
      atorPapel = PapelAuditoria.LIDER;
    } else if (user.role === 'empreendedor') {
      const minha = await this.prisma.inscricaoStartup.findFirst({
        where: {
          ...(dto.indicanteInscricaoId
            ? { id: dto.indicanteInscricaoId }
            : {}),
          pessoaId: user.id,
          edicaoId: edicao.id,
          status: {
            in: [StatusInscricaoStartup.ATIVO, StatusInscricaoStartup.PENDENTE],
          },
        },
        orderBy: { createdAt: 'asc' },
      });
      if (!minha) {
        throw new ForbiddenException('Startup do empreendedor não encontrada.');
      }
      indicanteInscricaoId = minha.id;
      atorPapel = PapelAuditoria.EMPREENDEDOR;
      if (minha.id === startup.id) {
        throw new BadRequestException('Uma startup não pode indicar a si mesma.');
      }
    } else {
      throw new ForbiddenException('Apenas líderes e empresas cadastradas podem indicar.');
    }

    const duplicate = await this.prisma.indicacao.findFirst({
      where: {
        edicaoId: edicao.id,
        categoriaId: categoria.id,
        inscricaoStartupId: startup.id,
        status: StatusIndicacao.ATIVA,
        ...(indicanteLiderId
          ? { indicanteLiderId }
          : { indicanteInscricaoId }),
      },
    });
    if (duplicate) {
      throw new ConflictException(
        'Você já indicou esta startup nesta categoria.',
      );
    }

    const indicacao = await this.prisma.indicacao.create({
      data: {
        edicaoId: edicao.id,
        categoriaId: categoria.id,
        inscricaoStartupId: startup.id,
        indicanteLiderId,
        indicanteInscricaoId,
        justificativa: dto.justificativa,
      },
      include: {
        categoria: true,
        inscricaoStartup: {
          select: { id: true, nomeStartup: true, slugPublico: true },
        },
      },
    });

    await this.auditoria.registrar({
      edicaoId: edicao.id,
      tipo: TipoAuditoria.INDICACAO,
      atorPapel,
      atorId: user.id,
      payload: {
        indicacaoId: indicacao.id,
        categoriaId: categoria.id,
        startupId: startup.id,
      },
    });

    return indicacao;
  }

  async minhas(user: { id: string; role: AppRole }) {
    const edicaoId = await this.edicoesService.getEdicaoAtivaId();
    if (user.role === 'lider') {
      const lideres = await this.prisma.lider.findMany({
        where: { pessoaId: user.id, edicaoId },
        select: { id: true },
      });
      return this.prisma.indicacao.findMany({
        where: {
          edicaoId,
          status: StatusIndicacao.ATIVA,
          indicanteLiderId: { in: lideres.map((l) => l.id) },
        },
        include: {
          categoria: true,
          inscricaoStartup: {
            select: {
              id: true,
              nomeStartup: true,
              slugPublico: true,
              comunidade: { select: { nome: true } },
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      });
    }

    const inscricoes = await this.prisma.inscricaoStartup.findMany({
      where: { pessoaId: user.id, edicaoId },
      select: { id: true },
    });
    return this.prisma.indicacao.findMany({
      where: {
        edicaoId,
        status: StatusIndicacao.ATIVA,
        indicanteInscricaoId: { in: inscricoes.map((i) => i.id) },
      },
      include: {
        categoria: true,
        inscricaoStartup: {
          select: {
            id: true,
            nomeStartup: true,
            slugPublico: true,
            comunidade: { select: { nome: true } },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  private async categoriaNomes(edicaoId: string, categoriaId: string) {
    const cat = await this.prisma.categoria.findFirst({
      where: { id: categoriaId, edicaoId },
    });
    return cat ? [cat.nome] : [];
  }
}
