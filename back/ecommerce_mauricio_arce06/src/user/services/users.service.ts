import { Injectable } from '@nestjs/common';
import { UserEntity } from '../repository/userRepository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UserEntity) {}
  async getUsers() {
    return this.userRepository.getUser();
  }
}
