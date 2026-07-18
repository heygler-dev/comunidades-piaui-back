import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthUser } from './jwt.strategy';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SwitchPapelDto } from './dto/switch-papel.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  me(@Req() req: { user: AuthUser }) {
    return this.authService.me(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('switch-papel')
  switchPapel(
    @Req() req: { user: AuthUser },
    @Body() dto: SwitchPapelDto,
  ) {
    return this.authService.switchPapel(req.user, dto);
  }
}
