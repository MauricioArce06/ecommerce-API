import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../Dto/userDto';
import { CredentialDto } from 'src/credential/Dto/credentialDto';
import { User } from '../Entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { take } from 'rxjs';

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
          password: true,
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
  async postUser(user: CreateUserDto) {
    console.log('aca llega');

    const newUser = await this.usersRepository.create(user);
    const userCreado = await this.usersRepository.save(newUser);
    return userCreado.id;
  }
  login(credentialDto: CredentialDto) {
    const { email, password } = credentialDto;
    try {
      const user = this.usersRepository.find({
        where: { email: email, password: password },
        select: {
          id: true,
          email: true,
          name: true,
          address: true,
          phone: true,
          country: true,
          city: true,
        },
      });
    } catch (error) {
      throw new BadRequestException();
    }
  }

  async updateUser(id: string, toUpdate: CreateUserDto) {
    const user = await this.usersRepository.find({ where: { id } });
    if (user) {
      await this.usersRepository.update(user[0], toUpdate);
      return user[0].id;
      // console.log(user);
      // Object.assign(user, toUpdate);
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
