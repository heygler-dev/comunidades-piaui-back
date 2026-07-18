import { Injectable } from '@nestjs/common';
import { EdicoesService } from '../edicoes/edicoes.service';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AdminBackupService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly edicoesService: EdicoesService,
  ) {}

  private csvEscape(value: unknown): string {
    const s = value == null ? '' : String(value);
    if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
    return s;
  }

  private toCsv(headers: string[], rows: unknown[][]): string {
    const lines = [
      headers.join(','),
      ...rows.map((r) => r.map((c) => this.csvEscape(c)).join(',')),
    ];
    return `\uFEFF${lines.join('\n')}\n`;
  }

  async exportInscricoesCsv() {
    const edicao = await this.edicoesService.getEdicaoAtiva();
    const items = await this.prisma.inscricaoStartup.findMany({
      where: { edicaoId: edicao.id },
      include: {
        comunidade: { select: { nome: true } },
      },
      orderBy: { createdAt: 'asc' },
    });

    const headers = [
      'id',
      'nome_startup',
      'status',
      'categoria',
      'cidade_operacao',
      'comunidade',
      'responsavel_nome',
      'responsavel_cpf',
      'responsavel_email',
      'responsavel_telefone',
      'slug_publico',
      'origem',
      'confirmado_em',
      'created_at',
    ];
    const rows = items.map((i) => [
      i.id,
      i.nomeStartup,
      i.status,
      i.categoria,
      i.cidadeOperacao,
      i.comunidade?.nome,
      i.responsavelNome,
      i.responsavelCpf,
      i.responsavelEmail,
      i.responsavelTelefone,
      i.slugPublico,
      i.origem,
      i.confirmadoEm?.toISOString() || '',
      i.createdAt.toISOString(),
    ]);

    return {
      filename: `backup-inscricoes-${edicao.ano}.csv`,
      content: this.toCsv(headers, rows),
      total: items.length,
    };
  }

  async exportVotosCsv() {
    const edicao = await this.edicoesService.getEdicaoAtiva();
    const items = await this.prisma.voto.findMany({
      where: { edicaoId: edicao.id },
      include: {
        finalista: {
          include: {
            categoria: { select: { nome: true } },
            inscricaoStartup: { select: { nomeStartup: true, slugPublico: true } },
          },
        },
      },
      orderBy: { createdAt: 'asc' },
    });

    const headers = [
      'id',
      'votante_nome',
      'cpf',
      'categoria',
      'startup_votada',
      'slug_startup',
      'votante_lider_id',
      'votante_inscricao_id',
      'lgpd_aceito_em',
      'created_at',
    ];
    const rows = items.map((v) => [
      v.id,
      v.votanteNome,
      v.cpf,
      v.finalista.categoria.nome,
      v.finalista.inscricaoStartup.nomeStartup,
      v.finalista.inscricaoStartup.slugPublico,
      v.votanteLiderId,
      v.votanteInscricaoId,
      v.lgpdAceitoEm.toISOString(),
      v.createdAt.toISOString(),
    ]);

    return {
      filename: `backup-votos-${edicao.ano}.csv`,
      content: this.toCsv(headers, rows),
      total: items.length,
    };
  }
}
