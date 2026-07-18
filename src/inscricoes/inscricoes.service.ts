import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as XLSX from 'xlsx';
import {
  OrigemCadastro,
  StatusInscricaoStartup,
  StatusParticipante,
} from '../../generated/prisma/client';
import { isValidCpf, normalizeCpf } from '../common/utils/cpf.util';
import { normalizeKey } from '../common/utils/normalize-key.util';
import { randomSuffix, slugify } from '../common/utils/slug.util';
import {
  parseStartupImportRow,
  STARTUP_IMPORT_COLUMNS,
  StartupImportRow,
} from './startup-import.util';
import { EdicoesService } from '../edicoes/edicoes.service';
import { PessoasService } from '../pessoas/pessoas.service';
import { PrismaService } from '../prisma/prisma.service';
import {
  InscricaoAdminItem,
  InscricaoAdminStats,
  TipoInscricaoAdmin,
} from './inscricoes.types';

@Injectable()
export class InscricoesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly edicoesService: EdicoesService,
    private readonly pessoasService: PessoasService,
  ) {}

  private mapStatusParticipante(status: StatusParticipante): string {
    return status === StatusParticipante.ATIVO ? 'Ativo' : 'Pendente';
  }

  private mapStatusStartup(status: StatusInscricaoStartup): string {
    if (status === StatusInscricaoStartup.ATIVO) return 'Ativo';
    if (status === StatusInscricaoStartup.PENDENTE) return 'Pendente';
    return status;
  }

  async listAdmin(params: {
    tipo?: TipoInscricaoAdmin;
    q?: string;
    page?: number;
    limit?: number;
  }) {
    const edicaoId = await this.edicoesService.getEdicaoAtivaId();
    const page = Math.max(1, params.page ?? 1);
    // 0 ou valor alto: retorna todos (admin precisa listar a base completa)
    const requested = params.limit ?? 50;
    const items = await this.fetchAdminItems(edicaoId, params.tipo, params.q);
    const total = items.length;
    const limit =
      !requested || requested <= 0 ? total || 1 : Math.min(requested, 10000);
    const start = (page - 1) * limit;
    const data = items.slice(start, start + limit).map((item) => ({
      ...item,
      data: this.formatDate(item.inscritoEm),
      status: this.capitalizeStatus(item.status),
    }));

    return { data, meta: { page, limit, total } };
  }

  async stats(): Promise<InscricaoAdminStats> {
    const edicao = await this.edicoesService.getEdicaoAtiva();
    const items = await this.fetchAdminItems(edicao.id);
    const total = items.length;
    const lideres = items.filter((i) => i.tipo === 'lider').length;
    const startups = items.filter((i) => i.tipo === 'startup').length;
    const comunidades = new Set(items.map((i) => i.comunidade)).size;

    return {
      total,
      lideres,
      startups,
      percentualLideres: total ? Math.round((lideres / total) * 100) : 0,
      percentualStartups: total ? Math.round((startups / total) * 100) : 0,
      comunidadesAtivas: comunidades,
      fase: edicao.faseAtual,
      periodoLabel: 'Semana 1 · Fase 1',
    };
  }

  async createManual(dto: {
    nome: string;
    tipo: 'lider' | 'startup';
    status?: 'Ativo' | 'Pendente';
    comunidade: string;
    cidade?: string;
    email?: string;
    telefone?: string;
  }) {
    const edicaoId = await this.edicoesService.getEdicaoAtivaId();
    const comunidade = await this.findOrCreateComunidade(
      edicaoId,
      dto.comunidade,
      dto.cidade,
    );
    const statusAtivo = dto.status !== 'Pendente';

    if (dto.tipo === 'lider') {
      const cpf = this.generatePlaceholderCpf();
      const email = dto.email || `manual-lider-${Date.now()}@premio.local`;
      const pessoa = await this.pessoasService.upsertByCpf({
        edicaoId,
        cpf,
        nome: dto.nome,
        email,
        telefone: dto.telefone || '—',
        senhaPlain: 'changeme123',
        lgpdAceitoEm: new Date(),
      });
      const lider = await this.prisma.lider.create({
        data: {
          edicaoId,
          pessoaId: pessoa.id,
          comunidadeId: comunidade.id,
          nome: pessoa.nome,
          cpf: pessoa.cpf,
          email: pessoa.email,
          telefone: dto.telefone || '—',
          senhaHash: pessoa.senhaHash,
          status: statusAtivo
            ? StatusParticipante.ATIVO
            : StatusParticipante.PENDENTE,
          lgpdAceitoEm: new Date(),
        },
        include: { comunidade: true },
      });
      return this.toAdminItemFromLider(lider);
    }

    const startup = await this.prisma.inscricaoStartup.create({
      data: {
        edicaoId,
        comunidadeId: comunidade.id,
        nomeStartup: dto.nome,
        responsavelNome: dto.nome,
        responsavelEmail: dto.email || '—',
        responsavelTelefone: dto.telefone || '—',
        cidadeOperacao: dto.cidade || comunidade.cidade,
        status: statusAtivo
          ? StatusInscricaoStartup.ATIVO
          : StatusInscricaoStartup.PENDENTE,
        etapaAtual: 3,
        confirmadoEm: new Date(),
        origem: OrigemCadastro.MANUAL,
        slugPublico: await this.uniqueStartupSlug(dto.nome),
      },
      include: { comunidade: true },
    });
    return this.toAdminItemFromStartup(startup);
  }

  async updateAdmin(
    id: string,
    tipo: 'lider' | 'startup',
    dto: {
      nome?: string;
      status?: 'Ativo' | 'Pendente';
      comunidade?: string;
      cidade?: string;
      email?: string;
      telefone?: string;
    },
  ) {
    const edicaoId = await this.edicoesService.getEdicaoAtivaId();

    if (tipo === 'lider') {
      const existing = await this.prisma.lider.findFirst({
        where: { id, edicaoId },
      });
      if (!existing) throw new NotFoundException('Inscrição não encontrada.');

      let comunidadeId = existing.comunidadeId;
      if (dto.comunidade) {
        const comunidade = await this.findOrCreateComunidade(
          edicaoId,
          dto.comunidade,
          dto.cidade,
        );
        comunidadeId = comunidade.id;
      }

      const lider = await this.prisma.lider.update({
        where: { id },
        data: {
          nome: dto.nome ?? existing.nome,
          email: dto.email ?? existing.email,
          telefone: dto.telefone ?? existing.telefone,
          comunidadeId,
          status:
            dto.status === 'Ativo'
              ? StatusParticipante.ATIVO
              : dto.status === 'Pendente'
                ? StatusParticipante.PENDENTE
                : existing.status,
        },
        include: { comunidade: true },
      });
      return this.toAdminItemFromLider(lider);
    }

    const existing = await this.prisma.inscricaoStartup.findFirst({
      where: {
        id,
        edicaoId,
        status: { in: [StatusInscricaoStartup.ATIVO, StatusInscricaoStartup.PENDENTE] },
      },
      include: { comunidade: true },
    });
    if (!existing) throw new NotFoundException('Inscrição não encontrada.');

    let comunidadeId = existing.comunidadeId;
    if (dto.comunidade) {
      const comunidade = await this.findOrCreateComunidade(
        edicaoId,
        dto.comunidade,
        dto.cidade,
      );
      comunidadeId = comunidade.id;
    }

    const startup = await this.prisma.inscricaoStartup.update({
      where: { id },
      data: {
        nomeStartup: dto.nome ?? existing.nomeStartup,
        responsavelEmail: dto.email ?? existing.responsavelEmail,
        responsavelTelefone: dto.telefone ?? existing.responsavelTelefone,
        cidadeOperacao: dto.cidade ?? existing.cidadeOperacao,
        comunidadeId,
        status:
          dto.status === 'Ativo'
            ? StatusInscricaoStartup.ATIVO
            : dto.status === 'Pendente'
              ? StatusInscricaoStartup.PENDENTE
              : existing.status,
      },
      include: { comunidade: true },
    });
    return this.toAdminItemFromStartup(startup);
  }

  async deleteAdmin(id: string, tipo: 'lider' | 'startup') {
    const edicaoId = await this.edicoesService.getEdicaoAtivaId();

    if (tipo === 'lider') {
      const existing = await this.prisma.lider.findFirst({
        where: { id, edicaoId },
      });
      if (!existing) throw new NotFoundException('Inscrição não encontrada.');

      await this.prisma.$transaction(async (tx) => {
        await tx.convite.updateMany({
          where: { liderCriadorId: id },
          data: { liderCriadorId: null },
        });

        const links = await tx.linkComunidade.findMany({
          where: { liderId: id },
          select: { id: true },
        });
        const linkIds = links.map((l) => l.id);

        if (linkIds.length) {
          await tx.inscricaoStartup.updateMany({
            where: { linkComunidadeId: { in: linkIds } },
            data: { linkComunidadeId: null },
          });
          await tx.linkComunidade.deleteMany({ where: { liderId: id } });
        }

        await tx.inscricaoStartup.updateMany({
          where: { liderId: id },
          data: { liderId: null },
        });

        await tx.lider.delete({ where: { id } });
      });

      return { deleted: true };
    }

    const existing = await this.prisma.inscricaoStartup.findFirst({
      where: { id, edicaoId },
    });
    if (!existing) throw new NotFoundException('Inscrição não encontrada.');

    await this.prisma.$transaction(async (tx) => {
      const finalistas = await tx.finalista.findMany({
        where: { inscricaoStartupId: id },
        select: { id: true },
      });
      const finalistaIds = finalistas.map((f) => f.id);

      if (finalistaIds.length) {
        await tx.voto.deleteMany({ where: { finalistaId: { in: finalistaIds } } });
        await tx.finalista.deleteMany({ where: { inscricaoStartupId: id } });
      }

      await tx.inscricaoStartup.delete({ where: { id } });
    });

    return { deleted: true };
  }

  async importSpreadsheet(file: Express.Multer.File | undefined, adminId?: string) {
    if (!file?.buffer?.length) {
      throw new BadRequestException('Arquivo não enviado ou vazio.');
    }
    const rows = this.readSpreadsheetRows(file);
    return this.runImportBatch(file, rows, adminId, async (row) => {
      const norm: Record<string, unknown> = {};
      Object.keys(row).forEach((k) => {
        norm[normalizeKey(k)] = row[k];
      });

      const nome = String(norm['nome'] || '').trim();
      if (!nome) {
        return { ok: false, erro: 'Nome vazio' };
      }

      const tipoRaw = String(norm['tipo'] || 'startup').trim().toLowerCase();
      const tipo =
        tipoRaw.startsWith('lider') || tipoRaw.startsWith('líder')
          ? 'lider'
          : 'startup';
      const statusRaw = String(norm['status'] || 'Pendente').trim();
      const status =
        statusRaw === 'Ativo' || statusRaw === 'Pendente' ? statusRaw : 'Pendente';

      await this.createManual({
        nome,
        tipo,
        status: status as 'Ativo' | 'Pendente',
        comunidade:
          String(norm['comunidade'] || 'Não informada').trim() || 'Não informada',
        cidade: String(norm['cidade'] || '—').trim() || '—',
        email: String(norm['email'] || '—').trim() || '—',
        telefone: String(norm['telefone'] || '—').trim() || '—',
      });
      return { ok: true };
    });
  }

  getStartupImportColumns() {
    return STARTUP_IMPORT_COLUMNS;
  }

  async importStartupsSpreadsheet(
    file: Express.Multer.File | undefined,
    adminId?: string,
  ) {
    if (!file?.buffer?.length) {
      throw new BadRequestException('Arquivo não enviado ou vazio.');
    }

    const rows = this.readSpreadsheetRows(file);
    return this.runImportBatch(file, rows, adminId, async (row) => {
      const parsed = parseStartupImportRow(row);
      if (parsed.erro || !parsed.data) {
        return { ok: false, erro: parsed.erro || 'Linha inválida' };
      }

      const equipe = row.__equipe;
      if (Array.isArray(equipe) && equipe.length) {
        parsed.data.metricas = {
          ...(parsed.data.metricas ?? {}),
          equipe: equipe as Array<{ nome: string; cpf?: string; turma?: string }>,
        };
      }

      await this.createStartupFromImport(parsed.data);
      return { ok: true };
    });
  }

  async createStartupFromImport(dto: StartupImportRow) {
    const edicaoId = await this.edicoesService.getEdicaoAtivaId();
    const comunidade = await this.findOrCreateComunidade(
      edicaoId,
      dto.comunidade,
      dto.cidadeOperacao,
      dto.metricas?.estado,
    );

    // Importação em lote: não valida dígitos nem unicidade de CPF.
    // Se já existir o mesmo CPF nesta edição, grava só nas métricas.
    let responsavelCpf: string | undefined;
    const cpfRaw = dto.responsavelCpf?.trim();
    if (cpfRaw) {
      const digits = normalizeCpf(cpfRaw);
      if (digits) {
        const jaUsado = await this.prisma.inscricaoStartup.findFirst({
          where: { edicaoId, responsavelCpf: digits },
          select: { id: true },
        });
        if (!jaUsado) {
          responsavelCpf = digits;
        }
      }
    }

    const statusAtivo = dto.status === 'Ativo';
    const now = new Date();
    const metricas = {
      ...(dto.metricas ?? {}),
      ...(cpfRaw && !responsavelCpf ? { cpfResponsavel: cpfRaw } : {}),
    };

    const startup = await this.prisma.inscricaoStartup.create({
      data: {
        edicaoId,
        comunidadeId: comunidade.id,
        nomeStartup: dto.nomeStartup,
        responsavelNome: dto.responsavelNome || dto.nomeStartup,
        responsavelCpf,
        responsavelEmail: dto.responsavelEmail,
        responsavelTelefone: dto.responsavelTelefone,
        categoria: dto.categoria,
        cidadeOperacao: dto.cidadeOperacao || comunidade.cidade,
        site: dto.site,
        descricao: dto.descricao,
        pitchCurto: dto.pitchCurto,
        metricasJson: Object.keys(metricas).length ? metricas : undefined,
        etapaAtual: 3,
        status: statusAtivo
          ? StatusInscricaoStartup.ATIVO
          : StatusInscricaoStartup.PENDENTE,
        slugPublico: await this.uniqueStartupSlug(dto.nomeStartup),
        lgpdAceitoEm: now,
        cpfUnicoConfirmado: false,
        confirmadoEm: now,
        origem: OrigemCadastro.IMPORTACAO,
      },
      include: { comunidade: true },
    });

    return this.toAdminItemFromStartup(startup);
  }

  private readSpreadsheetRows(file: Express.Multer.File) {
    const workbook = XLSX.read(file.buffer, { type: 'buffer' });
    const sheetName = this.pickImportSheetName(workbook.SheetNames);
    const sheet = workbook.Sheets[sheetName];
    if (!sheet) {
      throw new BadRequestException('Planilha vazia ou sem abas legíveis.');
    }

    const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, {
      defval: '',
    });

    return this.enrichDadosGeraisRows(workbook, rows);
  }

  /** Prefere a aba "BD" do modelo Dados Gerais; senão usa a primeira aba. */
  private pickImportSheetName(sheetNames: string[]): string {
    const preferred = sheetNames.find(
      (name) => name.trim().toLowerCase() === 'bd',
    );
    return preferred || sheetNames[0];
  }

  /**
   * Enriquecimento do modelo Dados Gerais:
   * - CNPJs da aba "CNPJ" por id.supi
   * - Equipe da aba "NOMES E CPFS" por id.supi / idsupi
   */
  private enrichDadosGeraisRows(
    workbook: XLSX.WorkBook,
    rows: Record<string, unknown>[],
  ): Record<string, unknown>[] {
    const cnpjById = this.readCnpjLookup(workbook);
    const equipeById = this.readEquipeLookup(workbook);
    if (!cnpjById.size && !equipeById.size) return rows;

    return rows.map((row) => {
      const id = String(row['id.supi'] ?? row.idsupi ?? '')
        .trim()
        .toLowerCase();
      const next = { ...row };

      const currentCnpj = String(row.CNPJ ?? row.cnpj ?? '').trim();
      if (!currentCnpj && id && cnpjById.has(id)) {
        next.CNPJ = cnpjById.get(id);
      }

      if (id && equipeById.has(id)) {
        next.__equipe = equipeById.get(id);
      }

      return next;
    });
  }

  private readCnpjLookup(workbook: XLSX.WorkBook) {
    const cnpjSheetName = workbook.SheetNames.find(
      (name) => name.trim().toLowerCase() === 'cnpj',
    );
    const map = new Map<string, string>();
    if (!cnpjSheetName) return map;

    const cnpjRows = XLSX.utils.sheet_to_json<Record<string, unknown>>(
      workbook.Sheets[cnpjSheetName],
      { defval: '' },
    );
    for (const row of cnpjRows) {
      const id = String(row['id.supi'] ?? row.idsupi ?? '')
        .trim()
        .toLowerCase();
      const cnpj = String(row.CNPJ ?? row.cnpj ?? '').trim();
      if (id && cnpj) map.set(id, cnpj);
    }
    return map;
  }

  private readEquipeLookup(workbook: XLSX.WorkBook) {
    const sheetName = workbook.SheetNames.find((name) =>
      name.trim().toLowerCase().startsWith('nomes e cpfs'),
    );
    const map = new Map<
      string,
      Array<{ nome: string; cpf?: string; turma?: string }>
    >();
    if (!sheetName) return map;

    const rows = XLSX.utils.sheet_to_json<Record<string, unknown>>(
      workbook.Sheets[sheetName],
      { defval: '' },
    );
    for (const row of rows) {
      const id = String(row.idsupi ?? row['id.supi'] ?? '')
        .trim()
        .toLowerCase();
      const nome = String(row['Nome Completo'] ?? row.nome ?? '').trim();
      if (!id || !nome) continue;
      const cpf = String(row.CPF ?? row.cpf ?? '').trim() || undefined;
      const turma = String(row.Turma ?? row.turma ?? '').trim() || undefined;
      const list = map.get(id) || [];
      list.push({ nome, cpf, turma });
      map.set(id, list);
    }
    return map;
  }

  private async runImportBatch(
    file: Express.Multer.File,
    rows: Record<string, unknown>[],
    adminId: string | undefined,
    processRow: (
      row: Record<string, unknown>,
      index: number,
    ) => Promise<{ ok: boolean; erro?: string }>,
  ) {
    const edicaoId = await this.edicoesService.getEdicaoAtivaId();
    let importadas = 0;
    const erros: Array<{ linha: number; motivo: string }> = [];

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const norm: Record<string, unknown> = {};
      Object.keys(row).forEach((k) => {
        norm[normalizeKey(k)] = row[k];
      });

      const isEmpty = Object.values(norm).every(
        (v) => v === '' || v === null || v === undefined,
      );
      if (isEmpty) continue;

      try {
        const result = await processRow(row, i);
        if (result.ok) {
          importadas++;
        } else {
          erros.push({ linha: i + 2, motivo: result.erro || 'Erro ao importar' });
        }
      } catch (error) {
        erros.push({
          linha: i + 2,
          motivo: error instanceof Error ? error.message : 'Erro ao importar',
        });
      }
    }

    await this.prisma.importacaoLote.create({
      data: {
        edicaoId,
        arquivoNome: file.originalname,
        totalLinhas: rows.length,
        importadas,
        ignoradas: erros.length,
        errosJson: erros,
        adminId,
      },
    });

    return {
      totalLinhas: rows.length,
      importadas,
      ignoradas: erros.length,
      erros,
    };
  }

  private async fetchAdminItems(
    edicaoId: string,
    tipo: TipoInscricaoAdmin = 'todos',
    q?: string,
  ): Promise<InscricaoAdminItem[]> {
    const items: InscricaoAdminItem[] = [];

    if (tipo === 'todos' || tipo === 'lider') {
      const lideres = await this.prisma.lider.findMany({
        where: { edicaoId },
        include: { comunidade: true },
        orderBy: { ativadoEm: 'desc' },
      });
      items.push(...lideres.map((l) => this.toAdminItemFromLider(l)));
    }

    if (tipo === 'todos' || tipo === 'startup') {
      const startups = await this.prisma.inscricaoStartup.findMany({
        where: {
          edicaoId,
          status: {
            in: [StatusInscricaoStartup.ATIVO, StatusInscricaoStartup.PENDENTE],
          },
        },
        include: { comunidade: true },
        orderBy: { createdAt: 'desc' },
      });
      items.push(...startups.map((s) => this.toAdminItemFromStartup(s)));
    }

    items.sort((a, b) => b.inscritoEm.getTime() - a.inscritoEm.getTime());

    if (q?.trim()) {
      const term = q.trim().toLowerCase();
      return items.filter(
        (item) =>
          item.nome.toLowerCase().includes(term) ||
          item.comunidade.toLowerCase().includes(term),
      );
    }

    return items;
  }

  private toAdminItemFromLider(lider: {
    id: string;
    nome: string;
    email: string;
    telefone: string;
    status: StatusParticipante;
    ativadoEm: Date;
    comunidade: { nome: string; cidade: string };
  }): InscricaoAdminItem {
    return {
      id: lider.id,
      nome: lider.nome,
      tipo: 'lider',
      comunidade: lider.comunidade.nome,
      cidade: lider.comunidade.cidade,
      email: lider.email,
      telefone: lider.telefone,
      inscritoEm: lider.ativadoEm,
      status: this.mapStatusParticipante(lider.status),
    };
  }

  private toAdminItemFromStartup(startup: {
    id: string;
    nomeStartup: string | null;
    responsavelNome: string | null;
    responsavelEmail: string | null;
    responsavelTelefone: string | null;
    cidadeOperacao: string | null;
    status: StatusInscricaoStartup;
    confirmadoEm: Date | null;
    createdAt: Date;
    origem: OrigemCadastro;
    comunidade: { nome: string; cidade: string };
  }): InscricaoAdminItem {
    return {
      id: startup.id,
      nome: startup.nomeStartup || startup.responsavelNome || '—',
      tipo: 'startup',
      comunidade: startup.comunidade.nome,
      cidade: startup.cidadeOperacao || startup.comunidade.cidade,
      email: startup.responsavelEmail || '—',
      telefone: startup.responsavelTelefone || '—',
      inscritoEm: startup.confirmadoEm || startup.createdAt,
      status: this.mapStatusStartup(startup.status),
      origem: startup.origem,
    };
  }

  private async findOrCreateComunidade(
    edicaoId: string,
    nome: string,
    cidade?: string,
    estado?: string,
  ) {
    const slugBase = slugify(nome) || 'comunidade';
    const existing = await this.prisma.comunidade.findFirst({
      where: { edicaoId, nome },
    });
    if (existing) return existing;

    let slug = slugBase;
    let attempt = 0;
    while (
      await this.prisma.comunidade.findFirst({ where: { edicaoId, slug } })
    ) {
      attempt++;
      slug = `${slugBase}-${attempt}`;
    }

    const uf = (estado || 'PI').trim().toUpperCase().slice(0, 2) || 'PI';

    return this.prisma.comunidade.create({
      data: {
        edicaoId,
        nome,
        cidade: cidade || '—',
        estado: uf.length === 2 ? uf : 'PI',
        slug,
      },
    });
  }

  private async uniqueStartupSlug(nome: string) {
    const base = slugify(nome) || 'startup';
    let slug = base;
    let exists = await this.prisma.inscricaoStartup.findUnique({
      where: { slugPublico: slug },
    });
    while (exists) {
      slug = `${base}-${randomSuffix()}`;
      exists = await this.prisma.inscricaoStartup.findUnique({
        where: { slugPublico: slug },
      });
    }
    return slug;
  }

  private generatePlaceholderCpf() {
    const base = Date.now().toString().slice(-9).padStart(9, '0');
    return `${base}00`;
  }

  private formatDate(date: Date) {
    const d = String(date.getDate()).padStart(2, '0');
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const y = date.getFullYear();
    return `${d}/${m}/${y}`;
  }

  private capitalizeStatus(status: string) {
    if (status.toLowerCase() === 'ativo') return 'Ativo';
    if (status.toLowerCase() === 'pendente') return 'Pendente';
    return status;
  }

  assertCpf(cpf: string) {
    if (!isValidCpf(cpf)) {
      throw new BadRequestException('CPF inválido.');
    }
    return normalizeCpf(cpf);
  }

  async assertCpfUnicoStartup(edicaoId: string, cpf: string, ignoreId?: string) {
    const existing = await this.prisma.inscricaoStartup.findFirst({
      where: {
        edicaoId,
        responsavelCpf: cpf,
        ...(ignoreId ? { NOT: { id: ignoreId } } : {}),
      },
    });
    if (existing) {
      throw new ConflictException(
        'Este CPF já foi usado para inscrever outra startup nesta edição.',
      );
    }
  }
}
