import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { AppRole } from '../common/decorators/roles.decorator';
import { PrismaService } from '../prisma/prisma.service';
export type JwtPayload = {
    sub: string;
    email: string;
    role: AppRole;
    edicaoId?: string;
    comunidadeId?: string;
    pessoaId?: string;
};
export type AuthUser = {
    id: string;
    email: string;
    role: AppRole;
    edicaoId?: string;
    comunidadeId?: string;
    pessoaId?: string;
};
declare const JwtStrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly prisma;
    constructor(prisma: PrismaService, config: ConfigService);
    validate(payload: JwtPayload): Promise<AuthUser>;
}
export {};
