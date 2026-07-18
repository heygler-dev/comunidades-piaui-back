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
};
export declare class PessoasService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByCpf(edicaoId: string, cpf: string): import("../../generated/prisma/models").Prisma__PessoaClient<{
        id: string;
        nome: string;
        createdAt: Date;
        edicaoId: string;
        cpf: string;
        email: string;
        telefone: string | null;
        senhaHash: string;
        lgpdAceitoEm: Date | null;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findByEmail(edicaoId: string, email: string): import("../../generated/prisma/models").Prisma__PessoaClient<{
        id: string;
        nome: string;
        createdAt: Date;
        edicaoId: string;
        cpf: string;
        email: string;
        telefone: string | null;
        senhaHash: string;
        lgpdAceitoEm: Date | null;
        updatedAt: Date;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    upsertByCpf(input: UpsertPessoaInput): Promise<{
        id: string;
        nome: string;
        createdAt: Date;
        edicaoId: string;
        cpf: string;
        email: string;
        telefone: string | null;
        senhaHash: string;
        lgpdAceitoEm: Date | null;
        updatedAt: Date;
    }>;
    perfilCompleto(pessoaId: string): Promise<{
        id: string;
        nome: string;
        email: string;
        cpfMascarado: string;
        papeis: {
            lider: boolean;
            empreendedor: boolean;
        };
        vinculosLider: {
            liderId: string;
            tipoLider: import("../../generated/prisma/enums").TipoLider;
            comunidade: {
                id: string;
                nome: string;
                cidade: string;
                slug: string;
            };
        }[];
        startups: {
            id: string;
            status: import("../inscricoes/inscricoes.types").StatusInscricaoStartup;
            nomeStartup: string | null;
            slugPublico: string | null;
            comunidade: {
                id: string;
                nome: string;
                slug: string;
            };
        }[];
    } | null>;
    private maskCpf;
}
export {};
