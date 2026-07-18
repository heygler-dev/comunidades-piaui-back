import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {
  PapelAuditoria,
  StatusInscricaoStartup,
  StatusParticipante,
  TipoAuditoria,
  TipoConvite,
  TipoLider,
} from '../../generated/prisma/client';
import { AuditoriaService } from '../auditoria/auditoria.service';
import { isValidCpf, normalizeCpf } from '../common/utils/cpf.util';
import { hashCpf } from '../common/utils/hash.util';
import { randomSuffix, slugify } from '../common/utils/slug.util';
import {
  normalizeSiteKey,
  publicPathForStartup,
} from '../common/utils/startup-url.util';
import { EdicoesService } from '../edicoes/edicoes.service';
import { PessoasService } from '../pessoas/pessoas.service';
import { PrismaService } from '../prisma/prisma.service';
import { AtivarLiderDto } from './dto/lider.dto';

type ConviteLider = {
  id: string;
  edicaoId: string;
  comunidadeId: string;
  token: string;
  ativo: boolean;
  usadoEm: Date | null;
  expiraEm: Date | null;
  comunidade: {
    nome: string;
    cidade: string;
    estado: string;
    slug: string;
  };
};

@Injectable()
export class PublicConvitesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly edicoesService: EdicoesService,
    private readonly pessoasService: PessoasService,
  ) {}

  private assertConviteLiderValido(convite: ConviteLider | null) {
    if (!convite) {
      throw new NotFoundException('Convite inválido ou expirado.');
    }
    if (convite.usadoEm) {
      throw new ConflictException('Este convite já foi utilizado.');
    }
    if (!convite.ativo) {
      throw new NotFoundException('Convite inválido ou expirado.');
    }
    if (convite.expiraEm && convite.expiraEm < new Date()) {
      throw new NotFoundException('Convite inválido ou expirado.');
    }
  }

  async getConviteLider(token: string) {
    const convite = await this.prisma.convite.findFirst({
      where: {
        token,
        tipo: TipoConvite.LIDER,
      },
      include: { comunidade: true },
    });

    this.assertConviteLiderValido(convite);

    return {
      token: convite!.token,
      tipo: 'lider',
      comunidade: {
        nome: convite!.comunidade.nome,
        cidade: convite!.comunidade.cidade,
        estado: convite!.comunidade.estado,
      },
      linkValido: true,
    };
  }

  async getLinkInscricao(slug: string) {
    const link = await this.prisma.linkComunidade.findFirst({
      where: { slug, ativo: true },
      include: { comunidade: true, lider: true },
    });

    if (!link) {
      throw new NotFoundException('Link de inscrição inválido.');
    }

    return {
      slug: link.slug,
      comunidade: {
        nome: link.comunidade.nome,
        cidade: link.comunidade.cidade,
        estado: link.comunidade.estado,
      },
      lider: { nome: link.lider.nome },
      linkValido: true,
    };
  }

  async ativarLider(dto: AtivarLiderDto) {
    if (!dto.lgpdAceito) {
      throw new BadRequestException('É necessário aceitar o tratamento de dados.');
    }
    if (!isValidCpf(dto.cpf)) {
      throw new BadRequestException('CPF inválido.');
    }

    const cpf = normalizeCpf(dto.cpf);
    const convite = await this.prisma.convite.findFirst({
      where: {
        token: dto.token,
        tipo: TipoConvite.LIDER,
      },
      include: { comunidade: true },
    });
    this.assertConviteLiderValido(convite);

    const jaLiderNaComunidade = await this.prisma.lider.findFirst({
      where: {
        edicaoId: convite!.edicaoId,
        comunidadeId: convite!.comunidadeId,
        cpf,
      },
    });
    if (jaLiderNaComunidade) {
      throw new ConflictException(
        'Este CPF já é líder nesta comunidade.',
      );
    }

    const pessoa = await this.pessoasService.upsertByCpf({
      edicaoId: convite!.edicaoId,
      cpf,
      nome: dto.nome,
      email: dto.email,
      telefone: dto.telefone,
      senhaPlain: dto.senha,
      lgpdAceitoEm: new Date(),
    });

    const tipoLider = convite!.liderCriadorId
      ? TipoLider.COMUNITARIO
      : TipoLider.SEMENTE;

    const lider = await this.prisma.lider.create({
      data: {
        edicaoId: convite!.edicaoId,
        pessoaId: pessoa.id,
        comunidadeId: convite!.comunidadeId,
        conviteId: convite!.id,
        nome: pessoa.nome,
        cpf: pessoa.cpf,
        email: pessoa.email,
        telefone: dto.telefone,
        senhaHash: pessoa.senhaHash,
        tipoLider,
        nomeadoPorId: convite!.liderCriadorId || undefined,
        lgpdAceitoEm: new Date(),
      },
    });

    const linkSlug = `${convite!.comunidade.slug}-${randomSuffix()}`;
    const link = await this.prisma.linkComunidade.create({
      data: {
        edicaoId: convite!.edicaoId,
        comunidadeId: convite!.comunidadeId,
        liderId: lider.id,
        slug: linkSlug,
      },
    });

    await this.prisma.convite.update({
      where: { id: convite!.id },
      data: { usadoEm: new Date(), ativo: false },
    });

    return {
      liderId: lider.id,
      nome: lider.nome,
      linkInscricao: `premiopiaui.org/inscrever/${link.slug}`,
      slug: link.slug,
    };
  }
}

@Injectable()
export class PublicStartupService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly edicoesService: EdicoesService,
    private readonly pessoasService: PessoasService,
  ) {}

  async createDraft(slug: string) {
    const link = await this.getLink(slug);
    const draft = await this.prisma.inscricaoStartup.create({
      data: {
        edicaoId: link.edicaoId,
        comunidadeId: link.comunidadeId,
        liderId: link.liderId,
        linkComunidadeId: link.id,
        etapaAtual: 1,
      },
      include: {
        comunidade: {
          select: { nome: true, cidade: true, estado: true },
        },
      },
    });

    return {
      id: draft.id,
      etapaAtual: draft.etapaAtual,
      status: draft.status,
      comunidade: draft.comunidade,
    };
  }

  async saveEtapa1(
    id: string,
    dto: {
      responsavelNome: string;
      cpf: string;
      telefone: string;
      email: string;
      senha: string;
    },
  ) {
    if (!isValidCpf(dto.cpf)) {
      throw new BadRequestException('CPF inválido.');
    }
    if (!dto.senha || dto.senha.length < 8) {
      throw new BadRequestException('A senha deve ter no mínimo 8 caracteres.');
    }
    const cpf = normalizeCpf(dto.cpf);
    const inscricao = await this.getInscricaoRascunho(id);

    const duplicate = await this.prisma.inscricaoStartup.findFirst({
      where: {
        edicaoId: inscricao.edicaoId,
        responsavelCpf: cpf,
        NOT: { id },
      },
    });
    if (duplicate) {
      throw new ConflictException(
        'Este CPF já foi usado para inscrever outra startup nesta edição.',
      );
    }

    const senhaHash = await bcrypt.hash(dto.senha, 10);

    return this.prisma.inscricaoStartup.update({
      where: { id },
      data: {
        responsavelNome: dto.responsavelNome,
        responsavelCpf: cpf,
        responsavelTelefone: dto.telefone,
        responsavelEmail: dto.email,
        senhaHash,
        etapaAtual: 2,
      },
    });
  }

  async saveEtapa2(
    id: string,
    dto: {
      nomeStartup: string;
      categoria: string;
      cidadeOperacao: string;
      site?: string;
      descricao: string;
    },
  ) {
    await this.getInscricaoRascunho(id);
    return this.prisma.inscricaoStartup.update({
      where: { id },
      data: {
        nomeStartup: dto.nomeStartup,
        categoria: dto.categoria,
        cidadeOperacao: dto.cidadeOperacao,
        site: dto.site,
        descricao: dto.descricao,
        etapaAtual: 3,
      },
    });
  }

  async confirmar(
    id: string,
    dto: { lgpdAceito: boolean; cpfUnicoConfirmado: boolean; senha?: string },
  ) {
    if (!dto.lgpdAceito || !dto.cpfUnicoConfirmado) {
      throw new BadRequestException('Confirme as declarações obrigatórias.');
    }

    const inscricao = await this.getInscricaoRascunho(id);
    if (!inscricao.responsavelCpf || !inscricao.nomeStartup) {
      throw new BadRequestException('Preencha todas as etapas antes de confirmar.');
    }

    await this.assertCpfUnico(inscricao.edicaoId, inscricao.responsavelCpf, id);

    if (!dto.senha && !inscricao.senhaHash) {
      throw new BadRequestException(
        'Defina uma senha de acesso na etapa 1 antes de confirmar.',
      );
    }

    const pessoa = await this.pessoasService.upsertByCpf({
      edicaoId: inscricao.edicaoId,
      cpf: inscricao.responsavelCpf,
      nome: inscricao.responsavelNome || 'Responsável',
      email: inscricao.responsavelEmail || `${inscricao.responsavelCpf}@premio.local`,
      telefone: inscricao.responsavelTelefone,
      senhaPlain: dto.senha,
      senhaHash: dto.senha ? undefined : inscricao.senhaHash || undefined,
      lgpdAceitoEm: new Date(),
    });

    const slugPublico = await this.uniqueSlug(inscricao.nomeStartup);
    const updated = await this.prisma.inscricaoStartup.update({
      where: { id },
      data: {
        slugPublico,
        pessoaId: pessoa.id,
        senhaHash: pessoa.senhaHash,
        lgpdAceitoEm: new Date(),
        cpfUnicoConfirmado: true,
        confirmadoEm: new Date(),
        status: StatusInscricaoStartup.PENDENTE,
        etapaAtual: 3,
      },
      include: { comunidade: true },
    });

    return {
      inscricaoId: updated.id,
      slugPublico: updated.slugPublico,
      paginaUrl: publicPathForStartup(updated.site, updated.slugPublico),
      preview: {
        nome: updated.nomeStartup,
        categoria: updated.categoria,
        cidade: updated.cidadeOperacao,
        descricao: updated.descricao,
        inicial: updated.nomeStartup?.charAt(0).toUpperCase(),
      },
      comunidade: updated.comunidade.nome,
    };
  }

  async getInscricao(id: string) {
    const inscricao = await this.prisma.inscricaoStartup.findUnique({
      where: { id },
      include: {
        comunidade: {
          select: { nome: true, cidade: true, estado: true },
        },
      },
    });
    if (!inscricao) throw new NotFoundException('Inscrição não encontrada.');

    return {
      id: inscricao.id,
      etapaAtual: inscricao.etapaAtual,
      status: inscricao.status,
      responsavelNome: inscricao.responsavelNome,
      responsavelTelefone: inscricao.responsavelTelefone,
      responsavelEmail: inscricao.responsavelEmail,
      nomeStartup: inscricao.nomeStartup,
      categoria: inscricao.categoria,
      cidadeOperacao: inscricao.cidadeOperacao,
      site: inscricao.site,
      descricao: inscricao.descricao,
      slugPublico: inscricao.slugPublico,
      comunidade: inscricao.comunidade,
    };
  }

  async getLandingPage(identifier: string) {
    const inscricao = await this.findInscricaoPublica(identifier);
    if (!inscricao) {
      throw new NotFoundException('Página da startup não encontrada.');
    }

    const finalistas = (inscricao.finalistas || []).map((f) => ({
      categoria: f.categoria.nome,
      vencedor: f.resultados.some((r) => r.publicadoEm),
    }));

    return {
      nomeStartup: inscricao.nomeStartup,
      categoria: inscricao.categoria,
      cidadeOperacao: inscricao.cidadeOperacao,
      site: inscricao.site,
      descricao: inscricao.descricao,
      logoUrl: inscricao.logoUrl,
      pitchCurto: inscricao.pitchCurto,
      videoUrl: inscricao.videoUrl,
      metricas: inscricao.metricasJson,
      slugPublico: inscricao.slugPublico,
      paginaUrl: publicPathForStartup(inscricao.site, inscricao.slugPublico),
      comunidade: inscricao.comunidade,
      badges: inscricao.badges.map((b) => b.comunidade),
      ehFinalista: finalistas.length > 0,
      ehVencedor: finalistas.some((f) => f.vencedor),
      categoriasFinalista: finalistas.map((f) => f.categoria),
    };
  }

  async listComunidadesPublicas() {
    const edicaoId = await this.edicoesService.getEdicaoAtivaId();
    return this.prisma.comunidade.findMany({
      where: { edicaoId, status: 'ativa' },
      select: {
        id: true,
        nome: true,
        slug: true,
        cidade: true,
        descricao: true,
        institucional: true,
        cidadesAtuacao: true,
        logoUrl: true,
        isPadraoStartupPiaui: true,
      },
      orderBy: { nome: 'asc' },
    });
  }

  private async getInscricaoRascunho(id: string) {
    const inscricao = await this.prisma.inscricaoStartup.findUnique({
      where: { id },
    });
    if (!inscricao) {
      throw new NotFoundException('Inscrição não encontrada.');
    }
    if (inscricao.status !== StatusInscricaoStartup.RASCUNHO) {
      throw new ConflictException(
        'Esta inscrição já foi enviada e não pode ser alterada.',
      );
    }
    return inscricao;
  }

  private async assertCpfUnico(edicaoId: string, cpf: string, ignoreId?: string) {
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

  private async getLink(slug: string) {
    const link = await this.prisma.linkComunidade.findFirst({
      where: { slug, ativo: true },
    });
    if (!link) throw new NotFoundException('Link de inscrição inválido.');
    return link;
  }

  private async findInscricaoPublica(identifier: string) {
    const key = decodeURIComponent(identifier).trim();
    const keyLower = key.toLowerCase();
    const include = {
      comunidade: { select: { id: true, nome: true, slug: true } },
      badges: {
        include: {
          comunidade: { select: { id: true, nome: true, slug: true } },
        },
      },
      finalistas: {
        where: { ativo: true },
        include: {
          categoria: { select: { nome: true } },
          resultados: {
            select: { publicadoEm: true },
          },
        },
      },
    } as const;
    const statusFilter = {
      in: [StatusInscricaoStartup.ATIVO, StatusInscricaoStartup.PENDENTE],
    };

    const bySlug = await this.prisma.inscricaoStartup.findFirst({
      where: { slugPublico: key, status: statusFilter },
      include,
    });
    if (bySlug) return bySlug;

    const withSite = await this.prisma.inscricaoStartup.findMany({
      where: { site: { not: null }, status: statusFilter },
      include,
    });
    return (
      withSite.find((row) => normalizeSiteKey(row.site!) === keyLower) ?? null
    );
  }

  private async uniqueSlug(nome: string) {
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
}

@Injectable()
export class PublicVotoService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly edicoesService: EdicoesService,
    private readonly auditoria: AuditoriaService,
    private readonly pessoasService: PessoasService,
  ) {}

  async statusVotacao() {
    const edicao = await this.edicoesService.getEdicaoAtiva();
    return { votacaoAberta: edicao.votacaoAberta };
  }

  async listCategorias() {
    const edicaoId = await this.edicoesService.getEdicaoAtivaId();
    return this.prisma.categoria.findMany({
      where: { edicaoId },
      orderBy: { ordem: 'asc' },
    });
  }

  async listFinalistas(categoria: string) {
    const edicaoId = await this.edicoesService.getEdicaoAtivaId();
    const finalistas = await this.prisma.finalista.findMany({
      where: {
        edicaoId,
        ativo: true,
        categoria: { nome: categoria },
      },
      include: {
        inscricaoStartup: true,
        categoria: true,
      },
    });

    return finalistas.map((f) => ({
      id: f.id,
      nome: f.inscricaoStartup.nomeStartup,
      categoria: f.categoria.nome,
      metaResumo:
        f.metaResumo ||
        `${f.inscricaoStartup.cidadeOperacao || '—'} · ${f.inscricaoStartup.categoria || '—'}`,
      inicial: f.inscricaoStartup.nomeStartup?.charAt(0).toUpperCase(),
    }));
  }

  async totalVotos() {
    const edicaoId = await this.edicoesService.getEdicaoAtivaId();
    const total = await this.prisma.voto.count({ where: { edicaoId } });
    return { total };
  }

  async registrarVoto(dto: {
    nome: string;
    cpf: string;
    categoria: string;
    finalistaId: string;
    lgpdAceito: boolean;
  }) {
    if (!dto.lgpdAceito) {
      throw new BadRequestException('É necessário aceitar o tratamento de dados.');
    }
    if (!isValidCpf(dto.cpf)) {
      throw new BadRequestException('CPF inválido.');
    }

    const edicao = await this.edicoesService.getEdicaoAtiva();
    if (!edicao.votacaoAberta) {
      throw new ForbiddenException('A votação não está aberta.');
    }

    const cpf = normalizeCpf(dto.cpf);
    const existing = await this.prisma.voto.findUnique({
      where: { edicaoId_cpf: { edicaoId: edicao.id, cpf } },
    });
    if (existing) {
      throw new ConflictException('Este CPF já votou nesta edição.');
    }

    const pessoa = await this.pessoasService.findByCpf(edicao.id, cpf);
    const lider = await this.prisma.lider.findFirst({
      where: {
        edicaoId: edicao.id,
        cpf,
        status: StatusParticipante.ATIVO,
      },
    });
    const inscricao = await this.prisma.inscricaoStartup.findFirst({
      where: {
        edicaoId: edicao.id,
        responsavelCpf: cpf,
        status: {
          in: [
            StatusInscricaoStartup.ATIVO,
            StatusInscricaoStartup.PENDENTE,
          ],
        },
      },
    });

    if (!pessoa && !lider && !inscricao) {
      throw new ForbiddenException(
        'Apenas líderes comunitários e empresas cadastradas podem votar.',
      );
    }

    const finalista = await this.prisma.finalista.findFirst({
      where: {
        id: dto.finalistaId,
        edicaoId: edicao.id,
        ativo: true,
        categoria: { nome: dto.categoria },
      },
      include: { inscricaoStartup: true, categoria: true },
    });
    if (!finalista) {
      throw new NotFoundException('Finalista não encontrado para esta categoria.');
    }

    await this.prisma.voto.create({
      data: {
        edicaoId: edicao.id,
        finalistaId: finalista.id,
        votanteNome: dto.nome,
        cpf,
        pessoaId: pessoa?.id,
        votanteLiderId: lider?.id,
        votanteInscricaoId: inscricao?.id,
        lgpdAceitoEm: new Date(),
      },
    });

    await this.auditoria.registrar({
      edicaoId: edicao.id,
      tipo: TipoAuditoria.VOTO,
      atorPapel: lider ? PapelAuditoria.LIDER : PapelAuditoria.EMPREENDEDOR,
      atorId: lider?.id || inscricao?.id,
      cpfHash: hashCpf(cpf),
      payload: {
        categoriaId: finalista.categoriaId,
      },
    });

    const total = await this.prisma.voto.count({ where: { edicaoId: edicao.id } });
    return {
      startup: finalista.inscricaoStartup.nomeStartup,
      categoria: finalista.categoria.nome,
      totalVotos: total,
    };
  }

  /**
   * Voto com sessão de líder ou empreendedor.
   * CPF e nome vêm do cadastro autenticado — não aceita CPF digitado (anti-bot).
   */
  async registrarVotoAutenticado(
    user: { id: string; role: 'lider' | 'empreendedor'; pessoaId?: string },
    dto: { categoria: string; finalistaId: string; lgpdAceito: boolean },
  ) {
    if (!dto.lgpdAceito) {
      throw new BadRequestException('É necessário aceitar o tratamento de dados.');
    }

    const edicao = await this.edicoesService.getEdicaoAtiva();
    if (!edicao.votacaoAberta) {
      throw new ForbiddenException('A votação não está aberta.');
    }

    const pessoaId = user.pessoaId || user.id;
    const pessoa = await this.prisma.pessoa.findUnique({
      where: { id: pessoaId },
      include: {
        lideres: {
          where: {
            edicaoId: edicao.id,
            status: StatusParticipante.ATIVO,
          },
        },
        inscricoesStartup: {
          where: {
            edicaoId: edicao.id,
            status: {
              in: [
                StatusInscricaoStartup.ATIVO,
                StatusInscricaoStartup.PENDENTE,
              ],
            },
          },
        },
      },
    });

    if (!pessoa || pessoa.edicaoId !== edicao.id) {
      throw new ForbiddenException('Sessão inválida para votar nesta edição.');
    }

    const lider = pessoa.lideres[0] || null;
    const inscricao = pessoa.inscricoesStartup[0] || null;
    if (!lider && !inscricao) {
      throw new ForbiddenException(
        'Apenas líderes comunitários e empresas cadastradas podem votar.',
      );
    }

    return this.registrarVoto({
      nome: pessoa.nome,
      cpf: pessoa.cpf,
      categoria: dto.categoria,
      finalistaId: dto.finalistaId,
      lgpdAceito: true,
    });
  }
}
