import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/userRepository';
// import { CredentialDto } from 'src/credential/Dto/credentialDto';
import { CreateUserDto, LoginUserDto } from '../Dto/userDto';
// import { CredentialRepository } from 'src/credential/repository/credentialRepository';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
    // credentialRepository: CredentialRepository,
  ) {}
  async getUsers(page: number, limit: number) {
    return this.userRepository.getUser(page, limit);
  }
  async getUserById(id: string) {
    return this.userRepository.getUserById(id);
  }
  async postUser(user: CreateUserDto) {
    console.log('aca llega');

    // this.credentialRepository.postCredential(credential);
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
