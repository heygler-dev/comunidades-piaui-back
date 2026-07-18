import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {
  PapelAuditoria,
  StatusInscricaoStartup,
  TipoAuditoria,
} from '../../generated/prisma/client';
import { AuditoriaService } from '../auditoria/auditoria.service';
import {
  publicPathForStartup,
} from '../common/utils/startup-url.util';
import { indicacoesPermitidas } from '../common/utils/edicoes-periodo.util';
import { PessoasService } from '../pessoas/pessoas.service';
import { PrismaService } from '../prisma/prisma.service';
import {
  DefinirSenhaDto,
  SetBadgesDto,
  UpdateInscricaoEmpreendedorDto,
} from './dto/empreendedor.dto';

@Injectable()
export class EmpreendedorService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly auditoria: AuditoriaService,
    private readonly pessoasService: PessoasService,
  ) {}

  async me(pessoaId: string, inscricaoId?: string) {
    const inscricao = await this.resolveInscricao(pessoaId, inscricaoId);
    const [detail, perfil] = await Promise.all([
      this.getInscricao(inscricao.id),
      this.pessoasService.perfilCompleto(pessoaId),
    ]);
    return {
      ...detail,
      papeis: perfil?.papeis ?? { lider: false, empreendedor: true },
      startups: perfil?.startups ?? [],
      vinculosLider: perfil?.vinculosLider ?? [],
    };
  }

  async update(
    pessoaId: string,
    dto: UpdateInscricaoEmpreendedorDto,
    inscricaoId?: string,
  ) {
    const inscricao = await this.resolveInscricao(pessoaId, inscricaoId);
    const updated = await this.prisma.inscricaoStartup.update({
      where: { id: inscricao.id },
      data: {
        nomeStartup: dto.nomeStartup ?? undefined,
        categoria: dto.categoria ?? undefined,
        cidadeOperacao: dto.cidadeOperacao ?? undefined,
        site: dto.site ?? undefined,
        descricao: dto.descricao ?? undefined,
        logoUrl: dto.logoUrl ?? undefined,
        pitchCurto: dto.pitchCurto ?? undefined,
        videoUrl: dto.videoUrl ?? undefined,
      },
      include: {
        comunidade: { select: { id: true, nome: true, slug: true } },
        badges: {
          include: {
            comunidade: { select: { id: true, nome: true, slug: true } },
          },
        },
      },
    });

    await this.auditoria.registrar({
      edicaoId: inscricao.edicaoId,
      tipo: TipoAuditoria.DADOS_ALTERADOS,
      atorPapel: PapelAuditoria.EMPREENDEDOR,
      atorId: pessoaId,
      payload: { campos: Object.keys(dto) },
    });

    return this.getInscricao(updated.id);
  }

  async updateLogo(pessoaId: string, logoUrl: string, inscricaoId?: string) {
    const inscricao = await this.resolveInscricao(pessoaId, inscricaoId);
    await this.prisma.inscricaoStartup.update({
      where: { id: inscricao.id },
      data: { logoUrl },
    });

    await this.auditoria.registrar({
      edicaoId: inscricao.edicaoId,
      tipo: TipoAuditoria.DADOS_ALTERADOS,
      atorPapel: PapelAuditoria.EMPREENDEDOR,
      atorId: pessoaId,
      payload: { campos: ['logoUrl'] },
    });

    return this.getInscricao(inscricao.id);
  }

  async setBadges(
    pessoaId: string,
    dto: SetBadgesDto,
    inscricaoId?: string,
  ) {
    const inscricao = await this.resolveInscricao(pessoaId, inscricaoId);
    const uniqueIds = [...new Set(dto.comunidadeIds)].filter(
      (id) => id !== inscricao.comunidadeId,
    );

    const comunidades = await this.prisma.comunidade.findMany({
      where: {
        id: { in: uniqueIds },
        edicaoId: inscricao.edicaoId,
      },
    });
    if (comunidades.length !== uniqueIds.length) {
      throw new BadRequestException(
        'Uma ou mais comunidades informadas são inválidas nesta edição.',
      );
    }

    await this.prisma.$transaction(async (tx) => {
      await tx.startupComunidadeBadge.deleteMany({
        where: { inscricaoStartupId: inscricao.id },
      });
      if (uniqueIds.length) {
        await tx.startupComunidadeBadge.createMany({
          data: uniqueIds.map((comunidadeId) => ({
            edicaoId: inscricao.edicaoId,
            inscricaoStartupId: inscricao.id,
            comunidadeId,
          })),
        });
      }
    });

    return this.getInscricao(inscricao.id);
  }

  async definirSenha(
    pessoaId: string,
    dto: DefinirSenhaDto,
    inscricaoId?: string,
  ) {
    const inscricao = await this.resolveInscricao(pessoaId, inscricaoId);
    const hash = await bcrypt.hash(dto.senha, 10);
    await this.prisma.$transaction([
      this.prisma.inscricaoStartup.update({
        where: { id: inscricao.id },
        data: { senhaHash: hash },
      }),
      this.prisma.pessoa.update({
        where: { id: pessoaId },
        data: { senhaHash: hash },
      }),
    ]);
    return { ok: true };
  }

  private async resolveInscricao(pessoaId: string, inscricaoId?: string) {
    if (inscricaoId) {
      const byId = await this.prisma.inscricaoStartup.findFirst({
        where: {
          id: inscricaoId,
          pessoaId,
          status: {
            in: [StatusInscricaoStartup.ATIVO, StatusInscricaoStartup.PENDENTE],
          },
        },
      });
      if (!byId) {
        throw new NotFoundException('Inscrição não encontrada ou inativa.');
      }
      return byId;
    }

    const inscricao = await this.prisma.inscricaoStartup.findFirst({
      where: {
        pessoaId,
        status: {
          in: [StatusInscricaoStartup.ATIVO, StatusInscricaoStartup.PENDENTE],
        },
      },
      orderBy: { createdAt: 'asc' },
    });
    if (!inscricao) {
      throw new NotFoundException('Inscrição não encontrada ou inativa.');
    }
    return inscricao;
  }

  private async getInscricao(inscricaoId: string) {
    const inscricao = await this.prisma.inscricaoStartup.findUnique({
      where: { id: inscricaoId },
      include: {
        comunidade: { select: { id: true, nome: true, slug: true } },
        badges: {
          include: {
            comunidade: { select: { id: true, nome: true, slug: true } },
          },
        },
        finalistas: {
          where: { ativo: true },
          include: {
            categoria: { select: { id: true, nome: true } },
            resultados: {
              select: { publicadoEm: true, totalVotos: true },
            },
          },
        },
        edicao: {
          select: {
            nome: true,
            ano: true,
            votacaoAberta: true,
            faseAtual: true,
            indicacoesAbertas: true,
            indicacoesInicio: true,
            indicacoesFim: true,
            colegioHabilitado: true,
          },
        },
      },
    });
    if (!inscricao) throw new NotFoundException('Inscrição não encontrada.');
    return this.toPublic(inscricao);
  }

  private toPublic(inscricao: {
    id: string;
    edicaoId: string;
    nomeStartup: string | null;
    categoria: string | null;
    cidadeOperacao: string | null;
    site: string | null;
    descricao: string | null;
    logoUrl: string | null;
    pitchCurto: string | null;
    videoUrl: string | null;
    slugPublico: string | null;
    status: StatusInscricaoStartup;
    comunidade: { id: string; nome: string; slug: string };
    badges: Array<{
      comunidade: { id: string; nome: string; slug: string };
    }>;
    finalistas?: Array<{
      id: string;
      metaResumo: string | null;
      categoria: { id: string; nome: string };
      resultados: Array<{ publicadoEm: Date | null; totalVotos: number }>;
    }>;
    edicao?: {
      nome: string;
      ano: number;
      votacaoAberta: boolean;
      faseAtual: string;
      indicacoesAbertas: boolean;
      indicacoesInicio: Date | null;
      indicacoesFim: Date | null;
      colegioHabilitado: boolean;
    };
  }) {
    const finalistas = (inscricao.finalistas || []).map((f) => {
      const resultado = f.resultados.find((r) => r.publicadoEm);
      return {
        id: f.id,
        categoriaId: f.categoria.id,
        categoria: f.categoria.nome,
        metaResumo: f.metaResumo,
        vencedor: Boolean(resultado),
        totalVotos: resultado?.totalVotos ?? null,
      };
    });
    const ehFinalista = finalistas.length > 0;
    const ehVencedor = finalistas.some((f) => f.vencedor);
    const edicao = inscricao.edicao;

    return {
      id: inscricao.id,
      nomeStartup: inscricao.nomeStartup,
      categoria: inscricao.categoria,
      cidadeOperacao: inscricao.cidadeOperacao,
      site: inscricao.site,
      descricao: inscricao.descricao,
      logoUrl: inscricao.logoUrl,
      pitchCurto: inscricao.pitchCurto,
      videoUrl: inscricao.videoUrl,
      slugPublico: inscricao.slugPublico,
      paginaUrl: publicPathForStartup(inscricao.site, inscricao.slugPublico),
      status: inscricao.status,
      comunidade: inscricao.comunidade,
      badges: inscricao.badges.map((b) => b.comunidade),
      ehFinalista,
      ehVencedor,
      finalistas,
      votacaoAberta: edicao?.votacaoAberta ?? false,
      indicacoesAbertas: edicao?.indicacoesAbertas ?? false,
      indicacoesEfetivas: edicao ? indicacoesPermitidas(edicao) : false,
      colegioHabilitado: edicao?.colegioHabilitado ?? false,
      faseAtual: edicao?.faseAtual ?? null,
      edicaoNome: edicao?.nome ?? null,
      edicaoAno: edicao?.ano ?? null,
    };
  }
}
