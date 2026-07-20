import {
  ConflictException,
  Injectable,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';

type UpsertPessoaInput = {
  edicaoId: string;
  cpf: string;
  nome: string;
  email: string;
  telefone?: string | null;
  senhaPlain?: string;
  senhaHash?: string;
  lgpdAceitoEm?: Date | null;
  mustChangePassword?: boolean;
  /** Se true, só aplica senhaPlain quando a pessoa ainda precisa trocar a senha (ou é nova). */
  onlyIfMustChangePassword?: boolean;
};

@Injectable()
export class PessoasService {
  constructor(private readonly prisma: PrismaService) {}

  findByCpf(edicaoId: string, cpf: string) {
    return this.prisma.pessoa.findUnique({
      where: { edicaoId_cpf: { edicaoId, cpf } },
    });
  }

  findByEmail(edicaoId: string, email: string) {
    return this.prisma.pessoa.findUnique({
      where: { edicaoId_email: { edicaoId, email } },
    });
  }

  /**
   * Cria ou reutiliza a Pessoa pelo CPF.
   * - Se já existe com outro e-mail → conflito (e-mail da pessoa é único na edição).
   * - Se senhaPlain informado e pessoa já tem senha, valida ou atualiza só se for o mesmo dono.
   */
  async upsertByCpf(input: UpsertPessoaInput) {
    const existing = await this.findByCpf(input.edicaoId, input.cpf);

    if (existing) {
      if (existing.email.toLowerCase() !== input.email.toLowerCase()) {
        const emailOwner = await this.findByEmail(input.edicaoId, input.email);
        if (emailOwner && emailOwner.id !== existing.id) {
          throw new ConflictException(
            'Este e-mail já está vinculado a outra pessoa nesta edição.',
          );
        }
      }

      const data: {
        nome?: string;
        email?: string;
        telefone?: string | null;
        senhaHash?: string;
        lgpdAceitoEm?: Date | null;
        mustChangePassword?: boolean;
      } = {
        nome: input.nome || existing.nome,
        telefone: input.telefone ?? existing.telefone,
      };

      if (input.email && input.email.toLowerCase() !== existing.email.toLowerCase()) {
        data.email = input.email;
      }
      if (input.lgpdAceitoEm && !existing.lgpdAceitoEm) {
        data.lgpdAceitoEm = input.lgpdAceitoEm;
      }

      const canSetPassword =
        !input.onlyIfMustChangePassword || existing.mustChangePassword;
      if (canSetPassword && input.senhaPlain) {
        data.senhaHash = await bcrypt.hash(input.senhaPlain, 10);
      } else if (canSetPassword && input.senhaHash) {
        data.senhaHash = input.senhaHash;
      }
      if (input.mustChangePassword !== undefined && canSetPassword) {
        data.mustChangePassword = input.mustChangePassword;
      }

      return this.prisma.pessoa.update({
        where: { id: existing.id },
        data,
      });
    }

    const emailOwner = await this.findByEmail(input.edicaoId, input.email);
    if (emailOwner) {
      throw new ConflictException(
        'Este e-mail já está vinculado a outra pessoa nesta edição.',
      );
    }

    const senhaHash =
      input.senhaHash ||
      (input.senhaPlain
        ? await bcrypt.hash(input.senhaPlain, 10)
        : await bcrypt.hash(`tmp-${input.cpf}-${Date.now()}`, 10));

    return this.prisma.pessoa.create({
      data: {
        edicaoId: input.edicaoId,
        cpf: input.cpf,
        nome: input.nome,
        email: input.email,
        telefone: input.telefone,
        senhaHash,
        mustChangePassword: input.mustChangePassword ?? false,
        lgpdAceitoEm: input.lgpdAceitoEm,
      },
    });
  }

  async perfilCompleto(pessoaId: string) {
    const pessoa = await this.prisma.pessoa.findUnique({
      where: { id: pessoaId },
      include: {
        lideres: {
          where: { status: 'ATIVO' },
          include: {
            comunidade: { select: { id: true, nome: true, slug: true, cidade: true } },
          },
          orderBy: { ativadoEm: 'asc' },
        },
        inscricoesStartup: {
          where: { status: { in: ['ATIVO', 'PENDENTE'] } },
          select: {
            id: true,
            nomeStartup: true,
            slugPublico: true,
            status: true,
            comunidade: { select: { id: true, nome: true, slug: true } },
          },
        },
      },
    });
    if (!pessoa) return null;

    return {
      id: pessoa.id,
      nome: pessoa.nome,
      email: pessoa.email,
      cpfMascarado: this.maskCpf(pessoa.cpf),
      mustChangePassword: pessoa.mustChangePassword,
      papeis: {
        lider: pessoa.lideres.length > 0,
        empreendedor: pessoa.inscricoesStartup.length > 0,
      },
      vinculosLider: pessoa.lideres.map((l) => ({
        liderId: l.id,
        tipoLider: l.tipoLider,
        comunidade: l.comunidade,
      })),
      startups: pessoa.inscricoesStartup,
    };
  }

  private maskCpf(cpf: string) {
    if (cpf.length !== 11) return '***.***.***-**';
    return `***${cpf.slice(3, 6)}.${cpf.slice(6, 9)}-**`;
  }
}
