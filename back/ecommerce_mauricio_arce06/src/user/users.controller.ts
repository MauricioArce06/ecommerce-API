import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from 'src/user/services/users.service';
import { CreateUserDto } from './userDto';
import { headerAuthorization } from 'src/auth/guard/AuthGuard';
import { Roles } from 'src/auth/Decorators/roles.decoratos';
import { Role } from 'src/auth/rolEnum';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';
// import { CredentialDto } from 'src/credential/Dto/credentialDto';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  @Roles(Role.Admin)
  @UseGuards(headerAuthorization, RolesGuard)
  async getUsers(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number,
  ) {
    console.log(page, limit);
    if (!page) {
      page = 1;
    }
    if (!limit) {
      limit = 5;
    }
    console.log(page, limit);
    return await this.usersService.getUsers(page, limit);
  }

  @Get(':id')
  @UseGuards(headerAuthorization)
  async getUserById(@Param('id', ParseUUIDPipe) id: string) {
    return await this.usersService.getUserById(id);
  }

  @Put(':id')
  @UseGuards(headerAuthorization)
  async updateUser(
    @Param('id', ParseUUIDPipe) id: string,
    @Body()
    toUpdate: CreateUserDto,
  ) {
    return await this.usersService.updateUser(id, toUpdate);
  }

  @Delete(':id')
  @UseGuards(headerAuthorization)
  async deleteUser(@Param('id', ParseUUIDPipe) id: string) {
    return await this.usersService.deleteUser(id);
  }
}
