"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../Entities/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let UserRepository = class UserRepository {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async getUser(page, limit) {
        const pagina = (page - 1) * limit;
        const limite = page * limit;
        return await this.usersRepository.find({
            skip: pagina,
            take: limite,
        });
    }
    async getUserById(id) {
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
    async postUser(user) {
        const newUser = await this.usersRepository.create(user);
        const userCreado = await this.usersRepository.save(newUser);
        return userCreado.id;
    }
    login(credentialDto) {
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
    async updateUser(id, toUpdate) {
        const user = await this.usersRepository.find({ where: { id } });
        if (user) {
            await this.usersRepository.update(user[0], toUpdate);
            return user[0].id;
        }
        else
            return { message: 'user no encontrado' };
    }
    async deleteUser(id) {
        const user = await this.usersRepository.find({ where: { id } });
        if (user.length > 0) {
            await this.usersRepository.delete(user[0]);
            return id;
        }
        else
            return { message: 'user no encontrado' };
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserRepository);
//# sourceMappingURL=userRepository.js.map