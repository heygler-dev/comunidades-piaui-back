import { AuthUser } from './jwt.strategy';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: LoginDto): Promise<{
        access_token: string;
        role: import("../common/decorators/roles.decorator").AppRole;
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
        role: import("../common/decorators/roles.decorator").AppRole;
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
                status: import("../inscricoes/inscricoes.types").StatusInscricaoStartup;
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
    me(req: {
        user: AuthUser;
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
            status: import("../inscricoes/inscricoes.types").StatusInscricaoStartup;
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
}
