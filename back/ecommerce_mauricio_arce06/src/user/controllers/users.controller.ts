import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from 'src/user/services/users.service';
import { userDto } from '../Dto/userDto';
import { headerAuthorization } from 'src/auth/guard/AuthGuard';
// import { CredentialDto } from 'src/credential/Dto/credentialDto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  @UseGuards(headerAuthorization)
  async getUsers(@Query('page') page: number, @Query('limit') limit: number) {
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
  async getUserById(@Param('id') id: string) {
    const idParseado = Number(id);
    return await this.usersService.getUserById(idParseado);
  }

  @Post('register')
  @UseGuards()
  async postUser(@Body() user: userDto) {
    return await this.usersService.postUser(user);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body()
    toUpdate: userDto,
  ) {
    const idParseado = Number(id);
    return await this.usersService.updateUser(idParseado, toUpdate);
  }

  @Delete(':id')
  @UseGuards(headerAuthorization)
  async deleteUser(@Param('id') id: string) {
    const idParseado = Number(id);
    return await this.usersService.deleteUser(idParseado);
  }
}
