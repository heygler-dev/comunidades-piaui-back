import {
  BadRequestException,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { StatusParticipante } from '../../generated/prisma/client';
import { EdicoesService } from '../edicoes/edicoes.service';
import { PessoasService } from '../pessoas/pessoas.service';
import { PrismaService } from '../prisma/prisma.service';
import { LiderService } from './lider.service';

describe('LiderService.apontarColegio', () => {
  const pessoaId = 'pessoa-semente';
  const comunidadeId = 'comunidade-1';
  const edicaoId = 'edicao-1';

  const liderSemente = {
    id: 'lider-semente',
    pessoaId,
    edicaoId,
    comunidadeId,
    status: StatusParticipante.ATIVO,
    comunidade: {
      id: comunidadeId,
      nome: 'Comunidade Teste',
      slug: 'comunidade-teste',
      cidade: 'Teresina',
    },
  };

  const edicaoBase = {
    id: edicaoId,
    colegioHabilitado: true,
    xLideresColegio: 2,
  };

  let prisma: {
    lider: { findFirst: jest.Mock; findMany: jest.Mock };
    membroColegio: { findMany: jest.Mock };
    $transaction: jest.Mock;
  };
  let edicoesService: { getEdicaoAtiva: jest.Mock };
  let service: LiderService;
  let tx: {
    membroColegio: { updateMany: jest.Mock; upsert: jest.Mock };
  };

  beforeEach(() => {
    tx = {
      membroColegio: {
        updateMany: jest.fn().mockResolvedValue({ count: 0 }),
        upsert: jest.fn().mockResolvedValue({}),
      },
    };

    prisma = {
      lider: {
        findFirst: jest.fn().mockResolvedValue(liderSemente),
        findMany: jest.fn(),
      },
      membroColegio: {
        findMany: jest.fn().mockResolvedValue([]),
      },
      $transaction: jest.fn(async (fn: (client: typeof tx) => Promise<void>) =>
        fn(tx),
      ),
    };

    edicoesService = {
      getEdicaoAtiva: jest.fn().mockResolvedValue({ ...edicaoBase }),
    };

    service = new LiderService(
      prisma as unknown as PrismaService,
      edicoesService as unknown as EdicoesService,
      {} as PessoasService,
    );
  });

  it('rejeita quando o colégio seletor não está habilitado', async () => {
    edicoesService.getEdicaoAtiva.mockResolvedValue({
      ...edicaoBase,
      colegioHabilitado: false,
    });

    await expect(
      service.apontarColegio(pessoaId, ['lider-a']),
    ).rejects.toBeInstanceOf(ForbiddenException);
  });

  it('rejeita quando a quantidade de líderes ultrapassa X', async () => {
    await expect(
      service.apontarColegio(pessoaId, ['lider-a', 'lider-b', 'lider-c']),
    ).rejects.toThrow(BadRequestException);

    await expect(
      service.apontarColegio(pessoaId, ['lider-a', 'lider-b', 'lider-c']),
    ).rejects.toThrow(/no máximo 2 líder/);
  });

  it('deduplica IDs antes de validar o limite X', async () => {
    prisma.lider.findMany.mockResolvedValue([
      { id: 'lider-a' },
      { id: 'lider-b' },
    ]);
    const membrosAtivos = [
      {
        id: 'membro-a',
        liderId: 'lider-a',
        ativo: true,
        lider: { id: 'lider-a', nome: 'A', email: 'a@test.com' },
      },
      {
        id: 'membro-b',
        liderId: 'lider-b',
        ativo: true,
        lider: { id: 'lider-b', nome: 'B', email: 'b@test.com' },
      },
    ];
    prisma.membroColegio.findMany.mockResolvedValue(membrosAtivos);

    const result = await service.apontarColegio(pessoaId, [
      'lider-a',
      'lider-b',
      'lider-a',
    ]);

    expect(prisma.lider.findMany).toHaveBeenCalledWith({
      where: {
        id: { in: ['lider-a', 'lider-b'] },
        edicaoId,
        comunidadeId,
        status: StatusParticipante.ATIVO,
      },
    });
    expect(result).toEqual(membrosAtivos);
  });

  it('rejeita líderes de outra comunidade ou inativos', async () => {
    prisma.lider.findMany.mockResolvedValue([{ id: 'lider-a' }]);

    await expect(
      service.apontarColegio(pessoaId, ['lider-a', 'lider-estranho']),
    ).rejects.toThrow(BadRequestException);

    await expect(
      service.apontarColegio(pessoaId, ['lider-a', 'lider-estranho']),
    ).rejects.toThrow(/pertencer à sua comunidade e estar ativos/);
  });

  it('gera o colégio desativando anteriores e ativando os apontados', async () => {
    const liderIds = ['lider-a', 'lider-b'];
    prisma.lider.findMany.mockResolvedValue(
      liderIds.map((id) => ({ id })),
    );
    const membrosAtivos = liderIds.map((id) => ({
      id: `membro-${id}`,
      edicaoId,
      comunidadeId,
      liderId: id,
      ativo: true,
      lider: { id, nome: id, email: `${id}@test.com` },
    }));
    prisma.membroColegio.findMany.mockResolvedValue(membrosAtivos);

    const result = await service.apontarColegio(pessoaId, liderIds);

    expect(prisma.$transaction).toHaveBeenCalledTimes(1);
    expect(tx.membroColegio.updateMany).toHaveBeenCalledWith({
      where: { edicaoId, comunidadeId },
      data: { ativo: false },
    });
    expect(tx.membroColegio.upsert).toHaveBeenCalledTimes(2);
    expect(tx.membroColegio.upsert).toHaveBeenNthCalledWith(1, {
      where: {
        edicaoId_liderId: { edicaoId, liderId: 'lider-a' },
      },
      create: {
        edicaoId,
        comunidadeId,
        liderId: 'lider-a',
        ativo: true,
      },
      update: {
        comunidadeId,
        ativo: true,
        apontadoEm: expect.any(Date),
      },
    });
    expect(prisma.membroColegio.findMany).toHaveBeenCalledWith({
      where: { edicaoId, comunidadeId, ativo: true },
      include: {
        lider: { select: { id: true, nome: true, email: true } },
      },
    });
    expect(result).toEqual(membrosAtivos);
  });

  it('permite apontar lista vazia (zera o colégio da comunidade)', async () => {
    prisma.lider.findMany.mockResolvedValue([]);
    prisma.membroColegio.findMany.mockResolvedValue([]);

    const result = await service.apontarColegio(pessoaId, []);

    expect(tx.membroColegio.updateMany).toHaveBeenCalledWith({
      where: { edicaoId, comunidadeId },
      data: { ativo: false },
    });
    expect(tx.membroColegio.upsert).not.toHaveBeenCalled();
    expect(result).toEqual([]);
  });

  it('rejeita quando o solicitante não é líder ativo', async () => {
    prisma.lider.findFirst.mockResolvedValue(null);

    await expect(
      service.apontarColegio(pessoaId, ['lider-a']),
    ).rejects.toBeInstanceOf(NotFoundException);
  });

  it('respeita o filtro de comunidade ao resolver o líder', async () => {
    prisma.lider.findMany.mockResolvedValue([{ id: 'lider-a' }]);
    prisma.membroColegio.findMany.mockResolvedValue([]);

    await service.apontarColegio(pessoaId, ['lider-a'], comunidadeId);

    expect(prisma.lider.findFirst).toHaveBeenCalledWith({
      where: {
        pessoaId,
        status: StatusParticipante.ATIVO,
        comunidadeId,
      },
      include: {
        comunidade: {
          select: { id: true, nome: true, slug: true, cidade: true },
        },
      },
      orderBy: { ativadoEm: 'asc' },
    });
  });
});
