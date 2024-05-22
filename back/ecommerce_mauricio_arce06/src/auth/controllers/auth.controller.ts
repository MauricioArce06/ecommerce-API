import { Controller, Get } from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getAuth() {
    return this.authService.getAuth();
  }
}
