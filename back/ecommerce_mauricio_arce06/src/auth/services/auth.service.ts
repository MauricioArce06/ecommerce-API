import { BadRequestException, Injectable } from '@nestjs/common';
import { CredentialDto } from 'src/credential/Dto/credentialDto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Role } from '../rolEnum';
import { CreateUserDto } from 'src/user/Dto/userDto';
import { UserRepository } from 'src/user/repository/userRepository';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly UserRepository: UserRepository,
  ) {}
  getAuth() {
    return 'auth';
  }

  async sing_up(user: CreateUserDto) {
    const { password, confirmPassword } = user;
    user;

    if (password) {
      if (password === confirmPassword) {
        const hashedPassword = await bcrypt.hash(password, 10);
        if (!hashedPassword) {
          throw new BadRequestException('Password could not be hashed');
        } else user.password = hashedPassword;
      } else {
        throw new BadRequestException('Passwords do not match');
      }
    } else throw new BadRequestException('Password is required');

    try {
      const userExists = await this.UserRepository.login({
        email: user.email,
        password: user.password,
      });
      if (userExists) {
        throw new BadRequestException('User already exists');
      }
    } catch (error) {
      return this.UserRepository.postUser(user);
    }
  }

  async login(credentialDto: CredentialDto) {
    try {
      const user = await this.UserRepository.login(credentialDto);

      if (!user) {
        throw new BadRequestException('Email o password are incorrect');
      }

      const passwordMatch = await bcrypt.compare(
        credentialDto.password,
        user.password,
      );

      if (!passwordMatch) {
        throw new BadRequestException('Email o password are incorrect');
      }

      const userPayload = {
        sub: user.id,
        id: user.id,
        email: user.email,
        roles: [user.isAdmin ? Role.Admin : Role.User],
      };

      const token = await this.jwtService.signAsync(userPayload);
      return { message: 'user logged in successfully', token };
    } catch (error) {
      throw new BadRequestException('Email o password are incorrect');
    }
  }
}
