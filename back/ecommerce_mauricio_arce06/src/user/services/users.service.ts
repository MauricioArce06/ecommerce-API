import { Injectable } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from '../Dto/userDto';
import { UserRepository } from '../repository/userRepository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}
  async getUsers(page: number, limit: number) {
    return this.userRepository.getUser(page, limit);
  }
  async getUserById(id: string) {
    return this.userRepository.getUserById(id);
  }
  async postUser(user: CreateUserDto) {
    ('aca llega');

    return this.userRepository.postUser(user);
  }
  async updateUser(id: string, toUpdate: CreateUserDto) {
    return this.userRepository.updateUser(id, toUpdate);
  }
  async deleteUser(id: string) {
    return this.userRepository.deleteUser(id);
  }

  async login(credentialDto: LoginUserDto) {
    return await this.userRepository.login(credentialDto);
  }
}
