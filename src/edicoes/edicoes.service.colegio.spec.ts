import { NotFoundException } from '@nestjs/common';
import { FasePremio } from '../../generated/prisma/client';
import { AuditoriaService } from '../auditoria/auditoria.service';
import { PrismaService } from '../prisma/prisma.service';
import { EdicoesService } from './edicoes.service';

describe('EdicoesService.setColegioHabilitado', () => {
  const edicaoId = 'edicao-1';

  let prisma: {
    edicao: {
      findUnique: jest.Mock;
      update: jest.Mock;
    };
  };
  let service: EdicoesService;

  beforeEach(() => {
    prisma = {
      edicao: {
        findUnique: jest.fn().mockResolvedValue({
          id: edicaoId,
          colegioHabilitado: false,
          faseAtual: FasePremio.FASE_2_INDICACOES,
        }),
        update: jest.fn().mockResolvedValue({
          id: edicaoId,
          nome: 'Prêmio Teste',
          colegioHabilitado: true,
          faseAtual: FasePremio.FASE_3_COLEGIO_SELETOR,
        }),
      },
    };

    service = new EdicoesService(
      prisma as unknown as PrismaService,
      {} as AuditoriaService,
    );
  });

  it('rejeita quando a edição não existe', async () => {
    prisma.edicao.findUnique.mockResolvedValue(null);

    await expect(
      service.setColegioHabilitado(edicaoId, true),
    ).rejects.toBeInstanceOf(NotFoundException);
  });

  it('habilita o colégio seletor e avança a fase', async () => {
    const result = await service.setColegioHabilitado(edicaoId, true);

    expect(prisma.edicao.update).toHaveBeenCalledWith({
      where: { id: edicaoId },
      data: {
        colegioHabilitado: true,
        faseAtual: FasePremio.FASE_3_COLEGIO_SELETOR,
      },
      select: {
        id: true,
        nome: true,
        colegioHabilitado: true,
        faseAtual: true,
      },
    });
    expect(result.colegioHabilitado).toBe(true);
    expect(result.faseAtual).toBe(FasePremio.FASE_3_COLEGIO_SELETOR);
  });

  it('desabilita o colégio sem alterar a fase atual', async () => {
    prisma.edicao.update.mockResolvedValue({
      id: edicaoId,
      nome: 'Prêmio Teste',
      colegioHabilitado: false,
      faseAtual: FasePremio.FASE_3_COLEGIO_SELETOR,
    });

    await service.setColegioHabilitado(edicaoId, false);

    expect(prisma.edicao.update).toHaveBeenCalledWith({
      where: { id: edicaoId },
      data: {
        colegioHabilitado: false,
      },
      select: {
        id: true,
        nome: true,
        colegioHabilitado: true,
        faseAtual: true,
      },
    });
  });
});
