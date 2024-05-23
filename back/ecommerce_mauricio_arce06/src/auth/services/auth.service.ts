import { Injectable } from '@nestjs/common';
import { CredentialDto } from 'src/credential/Dto/credentialDto';
import { UserRepository } from '../../user/repository/userRepository';

@Injectable()
export class AuthService {
  constructor(private readonly UserRepository: UserRepository) {}
  getAuth() {
    return 'auth';
  }

  login(credentialDto: CredentialDto) {
    return this.UserRepository.login(credentialDto);
  }
}
