import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {
  OrigemCadastro,
  StatusInscricaoStartup,
  StatusParticipante,
  StatusSolicitacao,
  TipoLider,
  TipoSolicitacaoCadastro,
} from '../../generated/prisma/client';
import { isValidCpf, normalizeCpf } from '../common/utils/cpf.util';
import { publicPathForStartup } from '../common/utils/startup-url.util';
import { randomSuffix, slugify } from '../common/utils/slug.util';
import { EdicoesService } from '../edicoes/edicoes.service';
import { PessoasService } from '../pessoas/pessoas.service';
import { PrismaService } from '../prisma/prisma.service';
import {
  RejeitarSolicitacaoDto,
  SolicitarLiderDto,
  SolicitarStartupDto,
} from './dto/solicitacoes.dto';

@Injectable()
export class SolicitacoesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly edicoesService: EdicoesService,
    private readonly pessoasService: PessoasService,
  ) {}

  private async assertComunidadeAtiva(comunidadeId: string) {
    const edicaoId = await this.edicoesService.getEdicaoAtivaId();
    const comunidade = await this.prisma.comunidade.findFirst({
      where: { id: comunidadeId, edicaoId, status: 'ativa' },
    });
    if (!comunidade) {
      throw new NotFoundException('Comunidade não encontrada ou indisponível.');
    }
    return comunidade;
  }

  private async assertSemSolicitacaoPendente(
    edicaoId: string,
    comunidadeId: string,
    cpf: string,
    tipo: TipoSolicitacaoCadastro,
  ) {
    const pendente = await this.prisma.solicitacaoCadastro.findFirst({
      where: {
        edicaoId,
        comunidadeId,
        cpf,
        tipo,
        status: StatusSolicitacao.PENDENTE,
      },
    });
    if (pendente) {
      throw new ConflictException(
        'Já existe uma solicitação pendente para esta comunidade.',
      );
    }
  }

  async solicitarLider(dto: SolicitarLiderDto) {
    if (!dto.lgpdAceito) {
      throw new BadRequestException('É necessário aceitar o tratamento de dados.');
    }
    if (!isValidCpf(dto.cpf)) {
      throw new BadRequestException('CPF inválido.');
    }

    const cpf = normalizeCpf(dto.cpf);
    const comunidade = await this.assertComunidadeAtiva(dto.comunidadeId);
    const edicaoId = comunidade.edicaoId;

    const jaLider = await this.prisma.lider.findFirst({
      where: { edicaoId, comunidadeId: comunidade.id, cpf },
    });
    if (jaLider) {
      throw new ConflictException('Este CPF já é líder nesta comunidade.');
    }

    await this.assertSemSolicitacaoPendente(
      edicaoId,
      comunidade.id,
      cpf,
      TipoSolicitacaoCadastro.LIDER,
    );

    const senhaHash = await bcrypt.hash(dto.senha, 10);
    const solicitacao = await this.prisma.solicitacaoCadastro.create({
      data: {
        edicaoId,
        comunidadeId: comunidade.id,
        tipo: TipoSolicitacaoCadastro.LIDER,
        nome: dto.nome.trim(),
        cpf,
        email: dto.email.trim().toLowerCase(),
        telefone: dto.telefone.trim(),
        senhaHash,
        lgpdAceitoEm: new Date(),
      },
      include: {
        comunidade: { select: { nome: true, cidade: true, estado: true } },
      },
    });

    return {
      id: solicitacao.id,
      status: solicitacao.status,
      comunidade: solicitacao.comunidade,
      mensagem:
        'Solicitação enviada. O líder-semente da comunidade irá analisar seu pedido.',
    };
  }

  async solicitarStartup(dto: SolicitarStartupDto) {
    if (!dto.lgpdAceito || !dto.cpfUnicoConfirmado) {
      throw new BadRequestException('Confirme as declarações obrigatórias.');
    }
    if (!isValidCpf(dto.cpf)) {
      throw new BadRequestException('CPF inválido.');
    }

    const cpf = normalizeCpf(dto.cpf);
    const comunidade = await this.assertComunidadeAtiva(dto.comunidadeId);
    const edicaoId = comunidade.edicaoId;

    const jaStartup = await this.prisma.inscricaoStartup.findFirst({
      where: { edicaoId, responsavelCpf: cpf },
    });
    if (jaStartup) {
      throw new ConflictException(
        'Este CPF já foi usado para inscrever outra startup nesta edição.',
      );
    }

    await this.assertSemSolicitacaoPendente(
      edicaoId,
      comunidade.id,
      cpf,
      TipoSolicitacaoCadastro.STARTUP,
    );

    const senhaHash = await bcrypt.hash(dto.senha, 10);
    const solicitacao = await this.prisma.solicitacaoCadastro.create({
      data: {
        edicaoId,
        comunidadeId: comunidade.id,
        tipo: TipoSolicitacaoCadastro.STARTUP,
        nome: dto.responsavelNome.trim(),
        cpf,
        email: dto.email.trim().toLowerCase(),
        telefone: dto.telefone.trim(),
        senhaHash,
        lgpdAceitoEm: new Date(),
        nomeStartup: dto.nomeStartup.trim(),
        categoria: dto.categoria,
        cidadeOperacao: dto.cidadeOperacao.trim(),
        site: dto.site?.trim() || null,
        descricao: dto.descricao.trim(),
        cpfUnicoConfirmado: true,
      },
      include: {
        comunidade: { select: { nome: true, cidade: true, estado: true } },
      },
    });

    return {
      id: solicitacao.id,
      status: solicitacao.status,
      comunidade: solicitacao.comunidade,
      mensagem:
        'Solicitação enviada. Um líder da comunidade irá analisar a inscrição da sua startup.',
    };
  }

  private async resolveLiderRevisor(pessoaId: string, comunidadeId?: string) {
    const lideres = await this.prisma.lider.findMany({
      where: {
        pessoaId,
        status: StatusParticipante.ATIVO,
        ...(comunidadeId ? { comunidadeId } : {}),
      },
      include: { comunidade: true },
    });
    if (!lideres.length) {
      throw new NotFoundException('Vínculo de líder não encontrado.');
    }
    if (comunidadeId) {
      const match = lideres.find((l) => l.comunidadeId === comunidadeId);
      if (!match) throw new ForbiddenException('Sem acesso a esta comunidade.');
      return match;
    }
    return lideres[0];
  }

  async listarParaLider(
    pessoaId: string,
    comunidadeId: string | undefined,
    tipo?: TipoSolicitacaoCadastro,
  ) {
    const lider = await this.resolveLiderRevisor(pessoaId, comunidadeId);
    const where = {
      comunidadeId: lider.comunidadeId,
      status: StatusSolicitacao.PENDENTE,
      ...(tipo ? { tipo } : {}),
    };

    const [items, totalStartup, totalLider] = await Promise.all([
      this.prisma.solicitacaoCadastro.findMany({
        where,
        orderBy: { createdAt: 'asc' },
        select: {
          id: true,
          tipo: true,
          status: true,
          nome: true,
          cpf: true,
          email: true,
          telefone: true,
          nomeStartup: true,
          categoria: true,
          cidadeOperacao: true,
          site: true,
          descricao: true,
          createdAt: true,
        },
      }),
      this.prisma.solicitacaoCadastro.count({
        where: {
          comunidadeId: lider.comunidadeId,
          status: StatusSolicitacao.PENDENTE,
          tipo: TipoSolicitacaoCadastro.STARTUP,
        },
      }),
      this.prisma.solicitacaoCadastro.count({
        where: {
          comunidadeId: lider.comunidadeId,
          status: StatusSolicitacao.PENDENTE,
          tipo: TipoSolicitacaoCadastro.LIDER,
        },
      }),
    ]);

    return {
      items,
      pendentes: { startup: totalStartup, lider: totalLider },
      podeRevisarLider: lider.tipoLider === TipoLider.SEMENTE,
    };
  }

  async aprovar(pessoaId: string, solicitacaoId: string, comunidadeId?: string) {
    const lider = await this.resolveLiderRevisor(pessoaId, comunidadeId);
    const solicitacao = await this.prisma.solicitacaoCadastro.findFirst({
      where: {
        id: solicitacaoId,
        comunidadeId: lider.comunidadeId,
        status: StatusSolicitacao.PENDENTE,
      },
      include: { comunidade: true },
    });
    if (!solicitacao) {
      throw new NotFoundException('Solicitação pendente não encontrada.');
    }

    if (solicitacao.tipo === TipoSolicitacaoCadastro.LIDER) {
      if (lider.tipoLider !== TipoLider.SEMENTE) {
        throw new ForbiddenException(
          'Apenas o líder-semente pode aprovar solicitações de novos líderes.',
        );
      }
      return this.aprovarLider(solicitacao, lider.id);
    }

    return this.aprovarStartup(solicitacao, lider.id);
  }

  private async aprovarLider(
    solicitacao: {
      id: string;
      edicaoId: string;
      comunidadeId: string;
      nome: string;
      cpf: string;
      email: string;
      telefone: string;
      senhaHash: string;
      lgpdAceitoEm: Date;
      comunidade: { nome: string; slug: string };
    },
    revisadoPorLiderId: string,
  ) {
    const jaLider = await this.prisma.lider.findFirst({
      where: {
        edicaoId: solicitacao.edicaoId,
        comunidadeId: solicitacao.comunidadeId,
        cpf: solicitacao.cpf,
      },
    });
    if (jaLider) {
      throw new ConflictException('Este CPF já é líder nesta comunidade.');
    }

    const pessoa = await this.pessoasService.upsertByCpf({
      edicaoId: solicitacao.edicaoId,
      cpf: solicitacao.cpf,
      nome: solicitacao.nome,
      email: solicitacao.email,
      telefone: solicitacao.telefone,
      senhaPlain: undefined,
      senhaHash: solicitacao.senhaHash,
      lgpdAceitoEm: solicitacao.lgpdAceitoEm,
    });

    const novoLider = await this.prisma.lider.create({
      data: {
        edicaoId: solicitacao.edicaoId,
        pessoaId: pessoa.id,
        comunidadeId: solicitacao.comunidadeId,
        nome: pessoa.nome,
        cpf: pessoa.cpf,
        email: pessoa.email,
        telefone: solicitacao.telefone,
        senhaHash: solicitacao.senhaHash,
        tipoLider: TipoLider.COMUNITARIO,
        nomeadoPorId: revisadoPorLiderId,
        lgpdAceitoEm: solicitacao.lgpdAceitoEm,
      },
    });

    await this.prisma.solicitacaoCadastro.update({
      where: { id: solicitacao.id },
      data: {
        status: StatusSolicitacao.APROVADA,
        revisadoPorLiderId,
        revisadoEm: new Date(),
        liderCriadoId: novoLider.id,
      },
    });

    return {
      id: solicitacao.id,
      status: StatusSolicitacao.APROVADA,
      liderId: novoLider.id,
      mensagem: `${solicitacao.nome} foi aceito(a) como líder da comunidade.`,
    };
  }

  private async aprovarStartup(
    solicitacao: {
      id: string;
      edicaoId: string;
      comunidadeId: string;
      nome: string;
      cpf: string;
      email: string;
      telefone: string;
      senhaHash: string;
      lgpdAceitoEm: Date;
      nomeStartup: string | null;
      categoria: string | null;
      cidadeOperacao: string | null;
      site: string | null;
      descricao: string | null;
      cpfUnicoConfirmado: boolean;
      comunidade: { nome: string; slug: string };
    },
    revisadoPorLiderId: string,
  ) {
    if (!solicitacao.nomeStartup || !solicitacao.categoria) {
      throw new BadRequestException('Dados da startup incompletos na solicitação.');
    }

    const duplicate = await this.prisma.inscricaoStartup.findFirst({
      where: { edicaoId: solicitacao.edicaoId, responsavelCpf: solicitacao.cpf },
    });
    if (duplicate) {
      throw new ConflictException(
        'Este CPF já possui startup inscrita nesta edição.',
      );
    }

    const liderRevisor = await this.prisma.lider.findUnique({
      where: { id: revisadoPorLiderId },
    });

    const pessoa = await this.pessoasService.upsertByCpf({
      edicaoId: solicitacao.edicaoId,
      cpf: solicitacao.cpf,
      nome: solicitacao.nome,
      email: solicitacao.email,
      telefone: solicitacao.telefone,
      senhaPlain: undefined,
      senhaHash: solicitacao.senhaHash,
      lgpdAceitoEm: solicitacao.lgpdAceitoEm,
    });

    const slugPublico = await this.uniqueSlug(solicitacao.nomeStartup);
    const inscricao = await this.prisma.inscricaoStartup.create({
      data: {
        edicaoId: solicitacao.edicaoId,
        comunidadeId: solicitacao.comunidadeId,
        liderId: liderRevisor?.id,
        pessoaId: pessoa.id,
        responsavelNome: solicitacao.nome,
        responsavelCpf: solicitacao.cpf,
        responsavelTelefone: solicitacao.telefone,
        responsavelEmail: solicitacao.email,
        senhaHash: solicitacao.senhaHash,
        nomeStartup: solicitacao.nomeStartup,
        categoria: solicitacao.categoria,
        cidadeOperacao: solicitacao.cidadeOperacao,
        site: solicitacao.site,
        descricao: solicitacao.descricao,
        slugPublico,
        lgpdAceitoEm: solicitacao.lgpdAceitoEm,
        cpfUnicoConfirmado: solicitacao.cpfUnicoConfirmado,
        confirmadoEm: new Date(),
        etapaAtual: 3,
        status: StatusInscricaoStartup.ATIVO,
        origem: OrigemCadastro.PORTAL,
      },
    });

    await this.prisma.solicitacaoCadastro.update({
      where: { id: solicitacao.id },
      data: {
        status: StatusSolicitacao.APROVADA,
        revisadoPorLiderId,
        revisadoEm: new Date(),
        inscricaoStartupId: inscricao.id,
      },
    });

    return {
      id: solicitacao.id,
      status: StatusSolicitacao.APROVADA,
      inscricaoId: inscricao.id,
      slugPublico: inscricao.slugPublico,
      paginaUrl: publicPathForStartup(inscricao.site, inscricao.slugPublico),
      mensagem: `${solicitacao.nomeStartup} foi aceita na comunidade.`,
    };
  }

  async rejeitar(
    pessoaId: string,
    solicitacaoId: string,
    dto: RejeitarSolicitacaoDto,
    comunidadeId?: string,
  ) {
    const lider = await this.resolveLiderRevisor(pessoaId, comunidadeId);
    const solicitacao = await this.prisma.solicitacaoCadastro.findFirst({
      where: {
        id: solicitacaoId,
        comunidadeId: lider.comunidadeId,
        status: StatusSolicitacao.PENDENTE,
      },
    });
    if (!solicitacao) {
      throw new NotFoundException('Solicitação pendente não encontrada.');
    }

    if (
      solicitacao.tipo === TipoSolicitacaoCadastro.LIDER &&
      lider.tipoLider !== TipoLider.SEMENTE
    ) {
      throw new ForbiddenException(
        'Apenas o líder-semente pode recusar solicitações de novos líderes.',
      );
    }

    await this.prisma.solicitacaoCadastro.update({
      where: { id: solicitacaoId },
      data: {
        status: StatusSolicitacao.REJEITADA,
        revisadoPorLiderId: lider.id,
        revisadoEm: new Date(),
        motivoRejeicao: dto.motivo?.trim() || null,
      },
    });

    return {
      id: solicitacaoId,
      status: StatusSolicitacao.REJEITADA,
      mensagem: 'Solicitação recusada.',
    };
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
