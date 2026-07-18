import { AuthUser } from '../auth/jwt.strategy';
import { RegistrarVotoAutenticadoDto } from './dto/voto-auth.dto';
import { PublicVotoService } from './public.service';
export declare class VotoController {
    private readonly votoService;
    constructor(votoService: PublicVotoService);
    votar(req: {
        user: AuthUser;
    }, dto: RegistrarVotoAutenticadoDto): Promise<{
        startup: string | null;
        categoria: string;
        totalVotos: number;
    }>;
}
