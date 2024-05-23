"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
let UserRepository = class UserRepository {
    constructor() {
        this.users = [
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
    }
    async getUser(page, limit) {
        return await this.users
            .map(({ password, ...user }) => user)
            .slice((page - 1) * limit, page * limit);
    }
    async getUserById(id) {
        const user = await this.users.find((user) => user.id === id);
        if (user) {
            const { password, ...rest } = user;
            return rest;
        }
    }
    async postUser(user) {
        const id = this.users.length + 1;
        await this.users.push({ id, ...user });
        console.log(user);
        const userCreado = await this.users.find((user) => user.id === id);
        return userCreado.id;
    }
    login(credentialDto) {
        const { email, password } = credentialDto;
        const user = this.users.find((user) => user.email === email);
        if (user && user.password === password) {
            const { password, ...rest } = user;
            const userCodificado = Buffer.from(user.email && user.password, 'utf8').toString('base64');
            return rest;
        }
        else
            return { message: 'Email o Password incorrectos' };
    }
    async updateUser(id, toUpdate) {
        const user = await this.users.find((user) => user.id === id);
        if (user) {
            const updatedUser = { id, ...toUpdate };
            this.users = this.users.map((user) => user.id === id ? (user = updatedUser) : user);
        }
        else
            return { message: 'user no encontrado' };
        return user.id;
    }
    async deleteUser(id) {
        this.users = await this.users.filter((user) => user.id !== id);
        return id;
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)()
], UserRepository);
//# sourceMappingURL=userRepository.js.map