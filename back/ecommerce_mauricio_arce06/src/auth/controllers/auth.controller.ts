import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/services/auth.service';
import { CredentialDto } from 'src/credential/Dto/credentialDto';
import { CreateUserDto } from 'src/user/Dto/userDto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getAuth() {
    return this.authService.getAuth();
  }

  @Post('signup')
  sing_up(@Body() user: CreateUserDto) {
    return this.authService.sing_up(user);
  }

  @Post('signin')
  login(@Body() credentialDto: CredentialDto) {
    const { email, password } = credentialDto;
    console.log('idiota');

    if (!email || !password) {
      return { message: 'Hay campos vacios' };
    }
    return this.authService.login(credentialDto);
  }
}
