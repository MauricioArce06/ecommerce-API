import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from 'src/user/controllers/users.controller';
import { UsersService } from 'src/user/services/users.service';
import { UserRepository } from '../repository/userRepository';
import { AuthenticationMiddUser } from 'src/middlewares/authenticationMidd';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../Entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
  exports: [UserRepository],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddUser).forRoutes('users/register');
  }
  private readonly logger = new Logger(UsersModule.name);

  constructor() {
    this.logger.log('UsersModule initialized');
  }
}
