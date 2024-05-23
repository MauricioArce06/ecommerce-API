import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repository/userRepository';
// import { CredentialDto } from 'src/credential/Dto/credentialDto';
import { userDto } from '../Dto/userDto';
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
  async getUserById(id: number) {
    return this.userRepository.getUserById(id);
  }
  async postUser(user: userDto) {
    // this.credentialRepository.postCredential(credential);
    return this.userRepository.postUser(user);
  }
  async updateUser(id: number, toUpdate: userDto) {
    return this.userRepository.updateUser(id, toUpdate);
  }
  async deleteUser(id: number) {
    return this.userRepository.deleteUser(id);
  }
}
