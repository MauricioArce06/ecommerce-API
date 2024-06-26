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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const userRepository_1 = require("../repository/userRepository");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getUsers(page, limit) {
        return this.userRepository.getUser(page, limit);
    }
    async getUserById(id) {
        return this.userRepository.getUserById(id);
    }
    async postUser(user) {
        console.log('aca llega');
        return this.userRepository.postUser(user);
    }
    async updateUser(id, toUpdate) {
        return this.userRepository.updateUser(id, toUpdate);
    }
    async deleteUser(id) {
        return this.userRepository.deleteUser(id);
    }
    async login(credentialDto) {
        return await this.userRepository.login(credentialDto);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [userRepository_1.UserRepository])
], UsersService);
//# sourceMappingURL=users.service.js.map