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
import { CreateUserDto, LoginUserDto } from '../Dto/userDto';
import { headerAuthorization } from 'src/auth/guard/AuthGuard';
// import { CredentialDto } from 'src/credential/Dto/credentialDto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  @UseGuards(headerAuthorization)
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

  @Post('register')
  @UseGuards()
  async postUser(@Body() user: CreateUserDto) {
    console.log('aca llega');

    return await this.usersService.postUser(user);
  }

  @Post('login')
  async login(@Body() credentialDto: LoginUserDto) {
    return await this.usersService.login(credentialDto);
  }

  @Put(':id')
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
