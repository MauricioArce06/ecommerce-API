import { Module } from '@nestjs/common';
import { AuthController } from 'src/auth/controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UserRepository } from 'src/user/repository/userRepository';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService, UserRepository],
})
export class AuthModule {}
