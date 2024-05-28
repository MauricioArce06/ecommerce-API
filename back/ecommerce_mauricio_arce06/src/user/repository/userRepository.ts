import { Injectable } from '@nestjs/common';
import { userDto } from '../Dto/userDto';
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
  // private users: User[] = [
  //   {
  //     id: 1,
  //     email: 'XlN9T@example.com',
  //     // credentials: {
  //     // id: 1,
  //     phone: 123456789,
  //     name: 'Mauricio Arce',
  //     password: '123456',
  //     // },
  //     adress: 'Calle 123',
  //     country: 'Colombia',
  //     city: 'Bogota',
  //     orders_id: [],
  //   },
  //   {
  //     id: 2,
  //     email: 'example@gmail.com',
  //     // credentials: {
  //     // id: 2,
  //     name: 'Example User',
  //     password: 'examplepass',
  //     // },
  //     adress: 'Example Street',
  //     phone: 987654321,
  //     country: 'Example Country',
  //     city: 'Example City',
  //     orders_id: [],
  //   },
  //   {
  //     id: 3,
  //     email: 'jane.doe@example.com',
  //     name: 'Jane Doe',
  //     password: 'password123',
  //     adress: '123 Main St',
  //     phone: 987654321,
  //     country: 'USA',
  //     city: 'New York',
  //     orders_id: [],
  //   },
  //   {
  //     id: 4,
  //     email: 'john.smith@example.com',
  //     name: 'John Smith',
  //     password: 'securepass456',
  //     adress: '456 Oak St',
  //     phone: 555555555,
  //     country: 'Canada',
  //     city: 'Toronto',
  //     orders_id: [],
  //   },
  //   {
  //     id: 5,
  //     email: 'alice.jones@example.com',
  //     name: 'Alice Jones',
  //     password: 'mypassword789',
  //     adress: '789 Pine St',
  //     phone: 123123123,
  //     country: 'UK',
  //     city: 'London',
  //     orders_id: [],
  //   },
  //   {
  //     id: 6,
  //     email: 'bob.martin@example.com',
  //     name: 'Bob Martin',
  //     password: 'passkey321',
  //     adress: '321 Elm St',
  //     phone: 456456456,
  //     country: 'Australia',
  //     city: 'Sydney',
  //     orders_id: [],
  //   },
  // ];

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
          adress: true,
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
  async postUser(user: userDto) {
    const newUser = await this.usersRepository.create(user);
    const userCreado = await this.usersRepository.save(newUser);
    return userCreado.id;
  }
  login(credentialDto: CredentialDto) {
    const { email, password } = credentialDto;
    const user = this.usersRepository.find({
      where: { email: email, password: password },
    });
    if (user) {
      const { password, ...rest } = user[0];
      return rest;
    }
    return { message: 'Email o Password incorrectos' };
  }

  async updateUser(id: string, toUpdate: userDto) {
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
