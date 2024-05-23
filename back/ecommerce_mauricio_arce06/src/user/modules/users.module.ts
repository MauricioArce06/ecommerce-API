import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersController } from 'src/user/controllers/users.controller';
import { UsersService } from 'src/user/services/users.service';
import { UserRepository } from '../repository/userRepository';
import { AuthenticationMiddUser } from 'src/middlewares/authenticationMidd';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthenticationMiddUser).forRoutes('users/register');
  }
}
