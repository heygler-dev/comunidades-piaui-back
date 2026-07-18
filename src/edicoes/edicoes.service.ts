import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  FasePremio,
  PapelAuditoria,
  StatusInscricaoStartup,
  TipoAuditoria,
} from '../../generated/prisma/client';
import { AuditoriaService } from '../auditoria/auditoria.service';
import {
  parseDateOnlyEnd,
  parseDateOnlyStart,
  indicacoesPermitidas,
} from '../common/utils/edicoes-periodo.util';
import { PrismaService } from '../prisma/prisma.service';

const FASE_LABEL: Record<string, string> = {
  FASE_1_CADASTRO: 'Cadastro',
  FASE_2_INDICACOES: 'Indicações',
  FASE_3_COLEGIO_SELETOR: 'Colégio seletor',
  FASE_3_VOTO_POPULAR: 'Voto popular (legado)',
  FASE_4_VOTO_POPULAR: 'Voto popular',
  FASE_5_APURACAO: 'Apuração',
};

@Injectable()
export class EdicoesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly auditoria: AuditoriaService,
  ) {}

  async getEdicaoAtiva() {
    const edicao = await this.prisma.edicao.findFirst({
      where: { ativa: true },
      orderBy: { createdAt: 'desc' },
    });
    if (!edicao) {
      throw new NotFoundException('Nenhuma edição ativa encontrada.');
    }
    return edicao;
  }

  async getEdicaoAtivaId(): Promise<string> {
    const edicao = await this.getEdicaoAtiva();
    return edicao.id;
  }

  async getConfig() {
    return this.getEdicaoAtiva();
  }

  async listEdicoes() {
    return this.prisma.edicao.findMany({
      orderBy: { ano: 'desc' },
      select: {
        id: true,
        nome: true,
        ano: true,
        ativa: true,
        xLideresColegio: true,
        nFinalistasPorCategoria: true,
        cotasRegionaisAtivas: true,
        _count: { select: { categorias: true } },
      },
    });
  }

  parseCidadesCapital(raw?: string | null): string[] {
    return String(raw || 'Teresina')
      .split(',')
      .map((c) => c.trim().toLowerCase())
      .filter(Boolean);
  }

  isCapital(cidade: string | null | undefined, cidadesCapital: string[]): boolean {
    if (!cidade?.trim()) return false;
    return cidadesCapital.includes(cidade.trim().toLowerCase());
  }

  async updateConfig(
    edicaoId: string,
    dto: {
      xLideresColegio?: number;
      nFinalistasPorCategoria?: number;
      cotasRegionaisAtivas?: boolean;
      cotaMinCapital?: number;
      cotaMinInterior?: number;
      cidadesCapital?: string;
      criteriosMd?: string | null;
      faseAtual?: FasePremio;
      indicacoesInicio?: string | null;
      indicacoesFim?: string | null;
    },
    adminId?: string,
  ) {
    const edicao = await this.prisma.edicao.findUnique({ where: { id: edicaoId } });
    if (!edicao) throw new NotFoundException('Edição não encontrada.');

    const indicacoesInicio = parseDateOnlyStart(dto.indicacoesInicio);
    const indicacoesFim = parseDateOnlyEnd(dto.indicacoesFim);
    const nextInicio =
      indicacoesInicio !== undefined ? indicacoesInicio : edicao.indicacoesInicio;
    const nextFim = indicacoesFim !== undefined ? indicacoesFim : edicao.indicacoesFim;
    if (nextInicio && nextFim && nextInicio > nextFim) {
      throw new BadRequestException(
        'A data de fim das indicações deve ser igual ou posterior ao início.',
      );
    }

    const n = dto.nFinalistasPorCategoria ?? edicao.nFinalistasPorCategoria;
    const minCap = dto.cotaMinCapital ?? edicao.cotaMinCapital;
    const minInt = dto.cotaMinInterior ?? edicao.cotaMinInterior;
    if (minCap + minInt > n) {
      throw new BadRequestException(
        `A soma das cotas capital (${minCap}) + interior (${minInt}) não pode superar N finalistas (${n}).`,
      );
    }

    const updated = await this.prisma.edicao.update({
      where: { id: edicaoId },
      data: {
        xLideresColegio: dto.xLideresColegio,
        nFinalistasPorCategoria: dto.nFinalistasPorCategoria,
        cotasRegionaisAtivas: dto.cotasRegionaisAtivas,
        cotaMinCapital: dto.cotaMinCapital,
        cotaMinInterior: dto.cotaMinInterior,
        cidadesCapital: dto.cidadesCapital?.trim() || undefined,
        criteriosMd:
          dto.criteriosMd === undefined
            ? undefined
            : dto.criteriosMd?.trim() || null,
        faseAtual: dto.faseAtual,
        ...(indicacoesInicio !== undefined ? { indicacoesInicio } : {}),
        ...(indicacoesFim !== undefined ? { indicacoesFim } : {}),
      },
    });

    if (dto.faseAtual && dto.faseAtual !== edicao.faseAtual) {
      await this.auditoria.registrar({
        edicaoId,
        tipo: TipoAuditoria.FASE_ALTERADA,
        atorPapel: PapelAuditoria.ADMIN,
        atorId: adminId,
        payload: { de: edicao.faseAtual, para: dto.faseAtual },
      });
    }

    return updated;
  }

  /** Copia X, N, cotas, critérios e categorias de uma edição fonte para a edição ativa. */
  async clonarConfigParaAtiva(fonteEdicaoId: string, adminId?: string) {
    const ativa = await this.getEdicaoAtiva();
    if (fonteEdicaoId === ativa.id) {
      throw new BadRequestException('Selecione uma edição diferente da ativa.');
    }
    const fonte = await this.prisma.edicao.findUnique({
      where: { id: fonteEdicaoId },
      include: { categorias: { orderBy: { ordem: 'asc' } } },
    });
    if (!fonte) throw new NotFoundException('Edição de origem não encontrada.');

    const updated = await this.prisma.edicao.update({
      where: { id: ativa.id },
      data: {
        xLideresColegio: fonte.xLideresColegio,
        nFinalistasPorCategoria: fonte.nFinalistasPorCategoria,
        cotasRegionaisAtivas: fonte.cotasRegionaisAtivas,
        cotaMinCapital: fonte.cotaMinCapital,
        cotaMinInterior: fonte.cotaMinInterior,
        cidadesCapital: fonte.cidadesCapital,
        criteriosMd: fonte.criteriosMd,
      },
    });

    let categoriasCriadas = 0;
    for (const cat of fonte.categorias) {
      const exists = await this.prisma.categoria.findFirst({
        where: { edicaoId: ativa.id, nome: cat.nome },
      });
      if (!exists) {
        await this.prisma.categoria.create({
          data: {
            edicaoId: ativa.id,
            nome: cat.nome,
            ordem: cat.ordem,
          },
        });
        categoriasCriadas += 1;
      }
    }

    await this.auditoria.registrar({
      edicaoId: ativa.id,
      tipo: TipoAuditoria.FASE_ALTERADA,
      atorPapel: PapelAuditoria.ADMIN,
      atorId: adminId,
      payload: {
        acao: 'CLONAR_CONFIG',
        fonteEdicaoId: fonte.id,
        fonteAno: fonte.ano,
        categoriasCriadas,
      },
    });

    return {
      edicao: updated,
      fonte: { id: fonte.id, nome: fonte.nome, ano: fonte.ano },
      categoriasCriadas,
      message: `Configuração de ${fonte.ano} aplicada à edição ativa. ${categoriasCriadas} categoria(s) nova(s).`,
    };
  }

  async publicarRegulamento(adminId?: string) {
    const edicao = await this.getEdicaoAtiva();
    const categorias = await this.prisma.categoria.findMany({
      where: { edicaoId: edicao.id },
      orderBy: { ordem: 'asc' },
      select: { nome: true, ordem: true },
    });

    const last = await this.prisma.regulamentoVersao.findFirst({
      where: { edicaoId: edicao.id },
      orderBy: { versao: 'desc' },
    });
    const versao = (last?.versao || 0) + 1;

    const criteriosMd =
      edicao.criteriosMd?.trim() ||
      [
        '## Critérios gerais',
        '',
        '- Podem indicar e votar apenas líderes comunitários e startups cadastradas na edição.',
        '- O colégio seletor aponta finalistas por categoria, respeitando o limite N e cotas regionais (se ativas).',
        '- No voto popular, cada CPF tem um único voto na edição.',
        '- A apuração é publicada em ata pública, com possibilidade de testemunha externa.',
      ].join('\n');

    const snapshot = {
      nome: edicao.nome,
      ano: edicao.ano,
      faseAtual: edicao.faseAtual,
      faseLabel: FASE_LABEL[edicao.faseAtual] || edicao.faseAtual,
      xLideresColegio: edicao.xLideresColegio,
      nFinalistasPorCategoria: edicao.nFinalistasPorCategoria,
      cotasRegionaisAtivas: edicao.cotasRegionaisAtivas,
      cotaMinCapital: edicao.cotaMinCapital,
      cotaMinInterior: edicao.cotaMinInterior,
      cidadesCapital: edicao.cidadesCapital,
      categorias,
    };

    const reg = await this.prisma.regulamentoVersao.create({
      data: {
        edicaoId: edicao.id,
        versao,
        criteriosMd,
        snapshot,
      },
    });

    if (!edicao.criteriosMd?.trim()) {
      await this.prisma.edicao.update({
        where: { id: edicao.id },
        data: { criteriosMd },
      });
    }

    await this.auditoria.registrar({
      edicaoId: edicao.id,
      tipo: TipoAuditoria.FASE_ALTERADA,
      atorPapel: PapelAuditoria.ADMIN,
      atorId: adminId,
      payload: { acao: 'PUBLICAR_REGULAMENTO', versao },
    });

    return reg;
  }

  async getRegrasPublicas(versao?: number) {
    const edicao = await this.getEdicaoAtiva();
    const categorias = await this.prisma.categoria.findMany({
      where: { edicaoId: edicao.id },
      orderBy: { ordem: 'asc' },
      select: { nome: true, ordem: true },
    });

    let regulamento = null as Awaited<
      ReturnType<typeof this.prisma.regulamentoVersao.findFirst>
    >;
    if (versao) {
      regulamento = await this.prisma.regulamentoVersao.findUnique({
        where: {
          edicaoId_versao: { edicaoId: edicao.id, versao },
        },
      });
    } else {
      regulamento = await this.prisma.regulamentoVersao.findFirst({
        where: { edicaoId: edicao.id },
        orderBy: { versao: 'desc' },
      });
    }

    const historico = await this.prisma.regulamentoVersao.findMany({
      where: { edicaoId: edicao.id },
      orderBy: { versao: 'desc' },
      select: { versao: true, publicadaEm: true },
    });

    const live = {
      nome: edicao.nome,
      ano: edicao.ano,
      faseAtual: edicao.faseAtual,
      faseLabel: FASE_LABEL[edicao.faseAtual] || edicao.faseAtual,
      xLideresColegio: edicao.xLideresColegio,
      nFinalistasPorCategoria: edicao.nFinalistasPorCategoria,
      cotasRegionaisAtivas: edicao.cotasRegionaisAtivas,
      cotaMinCapital: edicao.cotaMinCapital,
      cotaMinInterior: edicao.cotaMinInterior,
      cidadesCapital: edicao.cidadesCapital,
      categorias,
      criteriosMd: edicao.criteriosMd,
    };

    return {
      edicao: {
        id: edicao.id,
        nome: edicao.nome,
        ano: edicao.ano,
        ativa: edicao.ativa,
      },
      /** Configuração vigente no admin (pode diferir do último regulamento publicado). */
      vigente: live,
      /** Última (ou solicitada) versão pública congelada. */
      regulamento: regulamento
        ? {
            versao: regulamento.versao,
            publicadaEm: regulamento.publicadaEm,
            criteriosMd: regulamento.criteriosMd,
            snapshot: regulamento.snapshot,
          }
        : null,
      historico,
    };
  }

  async setVotacaoAberta(edicaoId: string, aberta: boolean) {
    const edicao = await this.prisma.edicao.findUnique({ where: { id: edicaoId } });
    if (!edicao) {
      throw new NotFoundException('Edição não encontrada.');
    }

    return this.prisma.edicao.update({
      where: { id: edicaoId },
      data: {
        votacaoAberta: aberta,
        ...(aberta ? { faseAtual: FasePremio.FASE_4_VOTO_POPULAR } : {}),
      },
      select: {
        id: true,
        nome: true,
        votacaoAberta: true,
        faseAtual: true,
      },
    });
  }

  async setIndicacoesAbertas(edicaoId: string, abertas: boolean) {
    const edicao = await this.prisma.edicao.findUnique({ where: { id: edicaoId } });
    if (!edicao) throw new NotFoundException('Edição não encontrada.');

    return this.prisma.edicao.update({
      where: { id: edicaoId },
      data: {
        indicacoesAbertas: abertas,
        ...(abertas ? { faseAtual: FasePremio.FASE_2_INDICACOES } : {}),
      },
      select: {
        id: true,
        nome: true,
        indicacoesAbertas: true,
        indicacoesInicio: true,
        indicacoesFim: true,
        faseAtual: true,
      },
    });
  }

  async setColegioHabilitado(edicaoId: string, habilitado: boolean) {
    const edicao = await this.prisma.edicao.findUnique({ where: { id: edicaoId } });
    if (!edicao) throw new NotFoundException('Edição não encontrada.');

    return this.prisma.edicao.update({
      where: { id: edicaoId },
      data: {
        colegioHabilitado: habilitado,
        ...(habilitado ? { faseAtual: FasePremio.FASE_3_COLEGIO_SELETOR } : {}),
      },
      select: {
        id: true,
        nome: true,
        colegioHabilitado: true,
        faseAtual: true,
      },
    });
  }

  async listCategorias() {
    const edicaoId = await this.getEdicaoAtivaId();
    return this.prisma.categoria.findMany({
      where: { edicaoId },
      orderBy: { ordem: 'asc' },
    });
  }

  async createCategoria(dto: { nome: string; ordem?: number }) {
    const edicaoId = await this.getEdicaoAtivaId();
    try {
      return await this.prisma.categoria.create({
        data: {
          edicaoId,
          nome: dto.nome,
          ordem: dto.ordem ?? 0,
        },
      });
    } catch {
      throw new ConflictException('Já existe uma categoria com este nome nesta edição.');
    }
  }

  async createFinalista(dto: {
    inscricaoStartupId: string;
    categoria: string;
    metaResumo?: string;
  }) {
    const edicaoId = await this.getEdicaoAtivaId();

    const inscricao = await this.prisma.inscricaoStartup.findFirst({
      where: {
        id: dto.inscricaoStartupId,
        edicaoId,
        status: {
          in: [StatusInscricaoStartup.ATIVO, StatusInscricaoStartup.PENDENTE],
        },
      },
    });
    if (!inscricao) {
      throw new NotFoundException('Inscrição de startup não encontrada ou inativa.');
    }

    const categoria = await this.prisma.categoria.findFirst({
      where: { edicaoId, nome: dto.categoria },
    });
    if (!categoria) {
      throw new NotFoundException('Categoria não encontrada nesta edição.');
    }

    const existing = await this.prisma.finalista.findFirst({
      where: {
        edicaoId,
        categoriaId: categoria.id,
        inscricaoStartupId: dto.inscricaoStartupId,
      },
    });
    if (existing) {
      throw new ConflictException('Esta startup já é finalista nesta categoria.');
    }

    const count = await this.prisma.finalista.count({
      where: { edicaoId, categoriaId: categoria.id, ativo: true },
    });
    const edicao = await this.getEdicaoAtiva();
    if (count >= edicao.nFinalistasPorCategoria) {
      throw new BadRequestException(
        `Limite de ${edicao.nFinalistasPorCategoria} finalistas por categoria atingido.`,
      );
    }

    return this.prisma.finalista.create({
      data: {
        edicaoId,
        categoriaId: categoria.id,
        inscricaoStartupId: dto.inscricaoStartupId,
        metaResumo: dto.metaResumo,
      },
      include: {
        categoria: true,
        inscricaoStartup: {
          select: {
            id: true,
            nomeStartup: true,
            cidadeOperacao: true,
            categoria: true,
          },
        },
      },
    });
  }

  async listFinalistasAdmin() {
    const edicaoId = await this.getEdicaoAtivaId();
    return this.prisma.finalista.findMany({
      where: { edicaoId },
      include: {
        categoria: true,
        inscricaoStartup: {
          select: {
            id: true,
            nomeStartup: true,
            cidadeOperacao: true,
            status: true,
          },
        },
      },
      orderBy: [{ categoria: { ordem: 'asc' } }, { createdAt: 'asc' }],
    });
  }

  /** Status das janelas/fases para portal público e painéis. */
  async getStatusPublico() {
    const edicao = await this.getEdicaoAtiva();
    const [resultadosPublicados, ata] = await Promise.all([
      this.prisma.resultadoCategoria.count({
        where: { edicaoId: edicao.id, publicadoEm: { not: null } },
      }),
      this.prisma.ataApuracao.findFirst({
        where: { edicaoId: edicao.id, publicadaEm: { not: null } },
        select: { id: true },
      }),
    ]);

    return {
      faseAtual: edicao.faseAtual,
      faseLabel: FASE_LABEL[edicao.faseAtual] || edicao.faseAtual,
      indicacoesAbertas: edicao.indicacoesAbertas,
      indicacoesEfetivas: indicacoesPermitidas(edicao),
      colegioHabilitado: edicao.colegioHabilitado,
      votacaoAberta: edicao.votacaoAberta,
      resultadosPublicados: resultadosPublicados > 0 || Boolean(ata),
    };
  }
}
