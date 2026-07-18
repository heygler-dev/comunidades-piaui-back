import { JwtService } from '@nestjs/jwt';
import { StatusInscricaoStartup } from '../../generated/prisma/client';
import { AuditoriaService } from '../auditoria/auditoria.service';
import { AppRole } from '../common/decorators/roles.decorator';
import { EdicoesService } from '../edicoes/edicoes.service';
import { PessoasService } from '../pessoas/pessoas.service';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private readonly prisma;
    private readonly jwtService;
    private readonly edicoesService;
    private readonly auditoria;
    private readonly pessoasService;
    constructor(prisma: PrismaService, jwtService: JwtService, edicoesService: EdicoesService, auditoria: AuditoriaService, pessoasService: PessoasService);
    login(dto: LoginDto): Promise<{
        access_token: string;
        role: AppRole;
        user: {
            id: string;
            nome: string;
            email: string;
        };
        admin: {
            id: string;
            nome: string;
            email: string;
        };
    } | {
        access_token: string;
        role: AppRole;
        user: {
            id: string;
            pessoaId: string;
            nome: string;
            email: string;
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
                    slug: string;
                };
            }[];
            startups: {
                id: string;
                status: StatusInscricaoStartup;
                nomeStartup: string | null;
                slugPublico: string | null;
                comunidade: {
                    id: string;
                    nome: string;
                    slug: string;
                };
            }[];
        };
    }>;
    private loginAdmin;
    private loginParticipante;
    me(user: {
        id: string;
        role: AppRole;
        email: string;
        edicaoId?: string;
        pessoaId?: string;
    }): Promise<{
        id: string;
        nome: string;
        email: string;
        ativo: boolean;
        role: "admin";
    } | {
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
            status: StatusInscricaoStartup;
            nomeStartup: string | null;
            slugPublico: string | null;
            comunidade: {
                id: string;
                nome: string;
                slug: string;
            };
        }[];
        role: "lider" | "empreendedor";
    }>;
    private signToken;
}
