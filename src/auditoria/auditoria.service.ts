import { Injectable, NotFoundException } from '@nestjs/common';
import {
  PapelAuditoria,
  TipoAuditoria,
  Prisma,
} from '../../generated/prisma/client';
import { PrismaService } from '../prisma/prisma.service';

const TIPO_LABEL: Record<TipoAuditoria, string> = {
  VOTO: 'Voto',
  INDICACAO: 'Indicação',
  SELECAO_COLEGIO: 'Seleção do colégio',
  FASE_ALTERADA: 'Fase alterada',
  RESULTADO_PUBLICADO: 'Resultado publicado',
  LOGIN: 'Login',
  DADOS_ALTERADOS: 'Dados alterados',
};

@Injectable()
export class AuditoriaService {
  constructor(private readonly prisma: PrismaService) {}

  registrar(input: {
    edicaoId?: string;
    tipo: TipoAuditoria;
    atorPapel?: PapelAuditoria;
    atorId?: string;
    cpfHash?: string;
    payload?: Prisma.InputJsonValue;
  }) {
    return this.prisma.auditoriaEvento.create({
      data: {
        edicaoId: input.edicaoId,
        tipo: input.tipo,
        atorPapel: input.atorPapel,
        atorId: input.atorId,
        cpfHash: input.cpfHash,
        payload: input.payload,
      },
    });
  }

  async listAdmin(params: {
    tipo?: TipoAuditoria | 'TODOS';
    page?: number;
    limit?: number;
  }) {
    const edicao = await this.prisma.edicao.findFirst({ where: { ativa: true } });
    if (!edicao) {
      throw new NotFoundException('Nenhuma edição ativa encontrada.');
    }

    const page = Math.max(1, Number(params.page) || 1);
    const limit = Math.min(100, Math.max(1, Number(params.limit) || 10));
    const tipo =
      params.tipo && params.tipo !== 'TODOS'
        ? (params.tipo as TipoAuditoria)
        : undefined;

    const where: Prisma.AuditoriaEventoWhereInput = {
      OR: [{ edicaoId: edicao.id }, { edicaoId: null }],
      ...(tipo ? { tipo } : {}),
    };

    const [total, items, porTipo] = await Promise.all([
      this.prisma.auditoriaEvento.count({ where }),
      this.prisma.auditoriaEvento.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.auditoriaEvento.groupBy({
        by: ['tipo'],
        where: {
          OR: [{ edicaoId: edicao.id }, { edicaoId: null }],
        },
        _count: { _all: true },
      }),
    ]);

    return {
      edicao: { id: edicao.id, nome: edicao.nome, ano: edicao.ano },
      page,
      limit,
      total,
      totalPages: Math.max(1, Math.ceil(total / limit) || 1),
      filtros: Object.values(TipoAuditoria).map((t) => ({
        tipo: t,
        label: TIPO_LABEL[t],
        total: porTipo.find((row) => row.tipo === t)?._count._all || 0,
      })),
      data: items.map((ev) => this.toAdminRow(ev)),
    };
  }

  private toAdminRow(ev: {
    id: string;
    edicaoId: string | null;
    tipo: TipoAuditoria;
    atorPapel: PapelAuditoria | null;
    atorId: string | null;
    cpfHash: string | null;
    payload: Prisma.JsonValue;
    createdAt: Date;
  }) {
    return {
      id: ev.id,
      tipo: ev.tipo,
      tipoLabel: TIPO_LABEL[ev.tipo],
      atorPapel: ev.atorPapel,
      atorId: ev.atorId ? `${ev.atorId.slice(0, 8)}…` : null,
      cpfHashPrefix: ev.cpfHash ? `${ev.cpfHash.slice(0, 12)}…` : null,
      resumo: this.resumoPayload(ev.tipo, ev.payload),
      payload: this.sanitizePayload(ev.tipo, ev.payload),
      createdAt: ev.createdAt,
    };
  }

  private sanitizePayload(
    tipo: TipoAuditoria,
    payload: Prisma.JsonValue,
  ): Prisma.JsonValue {
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
      return payload;
    }
    const clone = { ...(payload as Record<string, unknown>) };
    if (tipo === TipoAuditoria.VOTO) {
      delete clone.finalistaId;
      delete clone.startup;
      delete clone.nomeStartup;
    }
    delete clone.cpf;
    delete clone.senha;
    delete clone.senhaHash;
    return clone as Prisma.JsonValue;
  }

  private resumoPayload(tipo: TipoAuditoria, payload: Prisma.JsonValue): string {
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
      return '—';
    }
    const p = payload as Record<string, unknown>;
    if (tipo === TipoAuditoria.VOTO) {
      return p.categoriaId
        ? 'Voto registrado (escolha omitida no log)'
        : 'Voto registrado';
    }
    if (tipo === TipoAuditoria.RESULTADO_PUBLICADO) {
      const n = Number(p.categorias) || 0;
      return n ? `${n} categoria(s) publicada(s)` : 'Resultados publicados';
    }
    if (tipo === TipoAuditoria.FASE_ALTERADA) {
      return [p.campo, p.de, p.para].filter((v) => v !== undefined && v !== null)
        .length
        ? `${String(p.campo || 'config')}: ${String(p.de ?? '—')} → ${String(p.para ?? '—')}`
        : 'Configuração/fase alterada';
    }
    if (tipo === TipoAuditoria.INDICACAO) {
      return 'Indicação registrada';
    }
    if (tipo === TipoAuditoria.SELECAO_COLEGIO) {
      return p.status ? `Seleção: ${String(p.status)}` : 'Seleção do colégio';
    }
    if (tipo === TipoAuditoria.LOGIN) {
      return p.email ? `Login · ${String(p.email)}` : 'Login';
    }
    if (tipo === TipoAuditoria.DADOS_ALTERADOS) {
      return 'Dados da startup alterados';
    }
    return '—';
  }
}
