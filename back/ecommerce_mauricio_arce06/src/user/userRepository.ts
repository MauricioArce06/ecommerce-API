import { BadRequestException, Injectable } from '@nestjs/common';
import { CredentialDto } from 'src/credential/Dto/credentialDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { take } from 'rxjs';
import { User } from './user.entity';
import { CreateHashedUserDto, CreateUserDto } from './userDto';

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
    }
  }
  async postUser(user: Omit<CreateHashedUserDto, 'confirmPassword'>) {
    console.log('aca llega');
    console.log(user);
    const { name, email, password, address, phone, country, city } = user;
    const newUser = await this.usersRepository.create({
      name,
      email,
      password,
      address,
      phone,
      country,
      city,
    });
    const userCreado = await this.usersRepository.save(newUser);
    return await this.getUserById(userCreado.id);
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
        console.log('encontro al user');
        return user;
      }
    } catch (error) {
      throw new BadRequestException('Email or password are incorrect');
    }
  }

  async updateUser(id: string, toUpdate: CreateUserDto) {
    const user = await this.usersRepository.find({ where: { id } });
    if (user) {
      await this.usersRepository.update(user[0], toUpdate);
      return user[0].id;
    } else return { message: 'user no encontrado' };
  }

  async deleteUser(id: string) {
    const user = await this.usersRepository.find({ where: { id } });
    if (user.length > 0) {
      await this.usersRepository.delete(user[0]);
      return id;
    } else return { message: 'user no encontrado' };
  }
}
