import { Injectable } from '@nestjs/common';

@Injectable()
export class UserEntity {
  //* con esto hariamos despues la coneccion a la base de datos
  private readonly users = [
    {
      id: 1,
      email: 'XlN9T@example.com',
      name: 'Mauricio Arce',
      password: '123456',
      adress: 'Calle 123',
      phone: '123456789',
      country: 'Colombia',
      city: 'Bogota',
    },
    {
      id: 2,
      email: 'example@gmail.com',
      name: 'Example User',
      password: 'examplepass',
      adress: 'Example Street',
      phone: '987654321',
      country: 'Example Country',
      city: 'Example City',
    },
  ];

  //* con esto retornamos los datos
  getUser() {
    return this.users;
  }
}
