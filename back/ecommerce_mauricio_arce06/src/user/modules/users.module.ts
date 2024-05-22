import { Module } from '@nestjs/common';
import { UsersController } from 'src/user/controllers/users.controller';
import { UsersService } from 'src/user/services/users.service';
import { UserEntity } from '../repository/userRepository';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, UserEntity],
})
export class UsersModule {}
