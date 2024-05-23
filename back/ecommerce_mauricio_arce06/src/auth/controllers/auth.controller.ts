import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth.service';
import { CredentialDto } from 'src/credential/Dto/credentialDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getAuth() {
    return this.authService.getAuth();
  }

  @Post('login')
  login(@Body() credentialDto: CredentialDto) {
    const { email, password } = credentialDto;

    if (!email || !password) {
      return { message: 'Hay campos vacios' };
    }
    return this.authService.login(credentialDto);
  }
}
