import { Controller, Get } from '@nestjs/common';
import { UsersService } from 'src/user/services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async getUsers() {
    return await this.usersService.getUsers();
  }
}
