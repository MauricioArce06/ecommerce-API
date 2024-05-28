import { Module } from '@nestjs/common';
import { AuthController } from 'src/auth/controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UserRepository } from 'src/user/repository/userRepository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/Entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService, UserRepository],
})
export class AuthModule {}
