import { Injectable } from '@nestjs/common';
import { userDto } from '../Dto/userDto';
import { UserEntity } from '../Entities/userEntity';
import { CredentialDto } from 'src/credential/Dto/credentialDto';
import { STATUS_CODES } from 'http';

@Injectable()
export class UserRepository {
  //* con esto hariamos despues la coneccion a la base de datos
  private users: UserEntity[] = [
    {
      id: 1,
      email: 'XlN9T@example.com',
      // credentials: {
      // id: 1,
      name: 'Mauricio Arce',
      password: '123456',
      // },
      adress: 'Calle 123',
      phone: '123456789',
      country: 'Colombia',
      city: 'Bogota',
    },
    {
      id: 2,
      email: 'example@gmail.com',
      // credentials: {
      // id: 2,
      name: 'Example User',
      password: 'examplepass',
      // },
      adress: 'Example Street',
      phone: '987654321',
      country: 'Example Country',
      city: 'Example City',
    },
    {
      id: 3,
      email: 'jane.doe@example.com',
      name: 'Jane Doe',
      password: 'password123',
      adress: '123 Main St',
      phone: '987654321',
      country: 'USA',
      city: 'New York',
    },
    {
      id: 4,
      email: 'john.smith@example.com',
      name: 'John Smith',
      password: 'securepass456',
      adress: '456 Oak St',
      phone: '555555555',
      country: 'Canada',
      city: 'Toronto',
    },
    {
      id: 5,
      email: 'alice.jones@example.com',
      name: 'Alice Jones',
      password: 'mypassword789',
      adress: '789 Pine St',
      phone: '123123123',
      country: 'UK',
      city: 'London',
    },
    {
      id: 6,
      email: 'bob.martin@example.com',
      name: 'Bob Martin',
      password: 'passkey321',
      adress: '321 Elm St',
      phone: '456456456',
      country: 'Australia',
      city: 'Sydney',
    },
  ];

  //* con esto retornamos los datos
  async getUser(page, limit) {
    return await this.users
      .map(({ password, ...user }) => user)
      .slice((page - 1) * limit, page * limit);
  }

  async getUserById(id: number) {
    const user = await this.users.find((user) => user.id === id);
    if (user) {
      const { password, ...rest } = user;
      return rest;
    }
  }
  async postUser(user: userDto) {
    const id = this.users.length + 1;
    await this.users.push({ id, ...user });
    console.log(user);
    const userCreado = await this.users.find((user) => user.id === id);
    return userCreado.id;
  }
  login(credentialDto: CredentialDto) {
    const { email, password } = credentialDto;
    const user = this.users.find((user) => user.email === email);
    if (user && user.password === password) {
      const { password, ...rest } = user;
      const userCodificado = Buffer.from(
        user.email && user.password,
        'utf8',
      ).toString('base64');
      return rest;
    } else return { message: 'Email o Password incorrectos' };
  }

  async updateUser(id: number, toUpdate: userDto) {
    const user = await this.users.find((user) => user.id === id);
    if (user) {
      const updatedUser = { id, ...toUpdate };
      this.users = this.users.map((user) =>
        user.id === id ? (user = updatedUser) : user,
      );
      // console.log(user);
      // Object.assign(user, toUpdate);
    } else return { message: 'user no encontrado' };
    return user.id;
  }

  async deleteUser(id: number) {
    this.users = await this.users.filter((user) => user.id !== id);
    return id;
  }
}
