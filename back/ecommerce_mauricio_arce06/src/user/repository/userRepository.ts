import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { CredentialDto } from 'src/credential/Dto/credentialDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { take } from 'rxjs';
import { User } from '../entity/user.entity';
import { CreateHashedUserDto, CreateUserDto } from '../Dto/userDto';
import { log } from 'console';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  //* con esto hariamos despues la coneccion a la base de datos

  //* con esto retornamos los datos
  async getUser(page, limit) {
    const pagina = (page - 1) * limit;
    const limite = page * limit;
    return await this.usersRepository.find({
      skip: pagina,
      take: limite,
      select: {
        id: true,
        email: true,
        name: true,
        address: true,
        phone: true,
        country: true,
        city: true,
        isAdmin: true,
      },
    });
  }

  async getUserById(id: string) {
    const user = await this.usersRepository.find({ where: { id } });
    if (user) {
      const updatedUser = await this.usersRepository.findOne({
        where: { id },
        relations: { orders_id: true },
        select: {
          id: true,
          email: true,
          name: true,
          address: true,
          phone: true,
          country: true,
          city: true,
          orders_id: {
            id: true,
            date: true,
          },
        },
      });
      return updatedUser;
    } else throw new BadRequestException('User not found');
  }
  async postUser(user: Omit<CreateHashedUserDto, 'confirmPassword'>) {
    const { name, email, password, address, phone, country, city, isAdmin } =
      user;
    try {
      const newUser = await this.usersRepository.create({
        name,
        email,
        password,
        address,
        phone,
        country,
        city,
        isAdmin,
      });
      const userCreado = await this.usersRepository.save(newUser);
      return await this.getUserById(userCreado.id);
    } catch (error) {
      throw new ConflictException("User couldn't be created");
    }
  }
  async login(credentialDto: CredentialDto) {
    const { email, password } = credentialDto;
    console.log('llega al login Service');
    try {
      const user = await this.usersRepository.findOne({
        where: { email: email },
        select: {
          id: true,
          email: true,
          name: true,
          address: true,
          password: true,
          phone: true,
          country: true,
          city: true,
          isAdmin: true,
        },
      });
      console.log(user);
      if (!user) {
        throw new BadRequestException('Email or password are incorrect');
      } else {
        return user;
      }
    } catch (error) {
      throw new BadRequestException('Email or password are incorrect');
    }
  }

  async updateUser(id: string, toUpdate: CreateUserDto) {
    const { name, email, password, address, phone, country, city, isAdmin } =
      toUpdate;

    try {
      const user = await this.usersRepository.findOne({
        where: { id },
        select: {
          id: true,
          email: true,
          name: true,
          address: true,
          password: true,
          phone: true,
          country: true,
          city: true,
          isAdmin: true,
        },
      });
      if (user) {
        await this.usersRepository.update(id, {
          name,
          email,
          password,
          address,
          phone,
          country,
          city,
          isAdmin,
        });
        return user.id;
      } else throw new BadRequestException('User not found');
    } catch (error) {
      return error.message;
    }
  }

  async deleteUser(id: string) {
    const user = await this.usersRepository.find({ where: { id } });
    if (user.length > 0) {
      await this.usersRepository.delete(user[0]);
      return id;
    } else return { message: 'user no encontrado' };
  }
}
