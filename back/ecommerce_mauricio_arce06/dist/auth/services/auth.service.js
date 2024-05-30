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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const userRepository_1 = require("../../user/repository/userRepository");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(jwtService, UserRepository) {
        this.jwtService = jwtService;
        this.UserRepository = UserRepository;
    }
    getAuth() {
        return 'auth';
    }
    async sing_up(user) {
        const { password, confirmPassword } = user;
        console.log(user);
        if (password) {
            if (password === confirmPassword) {
                const hashedPassword = await bcrypt.hash(password, 10);
                if (!hashedPassword) {
                    throw new common_1.BadRequestException('Password could not be hashed');
                }
                else
                    user.password = hashedPassword;
            }
            else {
                throw new common_1.BadRequestException('Passwords do not match');
            }
        }
        else
            throw new common_1.BadRequestException('Password is required');
        console.log('llega despues del hasheo');
        try {
            const userExists = await this.UserRepository.login({
                email: user.email,
                password: user.password,
            });
            if (userExists) {
                throw new common_1.BadRequestException('User already exists');
            }
        }
        catch (error) {
            console.log('llega despues de verificar si existe el usuario');
            return this.UserRepository.postUser(user);
        }
    }
    async login(credentialDto) {
        const user = await this.UserRepository.login(credentialDto);
        if (!user) {
            throw new common_1.BadRequestException('Email o password are incorrect');
        }
        const passwordMatch = await bcrypt.compare(credentialDto.password, user.password);
        if (!passwordMatch) {
            throw new common_1.BadRequestException('Email o password are incorrect');
        }
        const userPayload = {
            sub: user.id,
            id: user.id,
            email: user.email,
        };
        const token = await this.jwtService.signAsync(userPayload);
        return { message: 'user logged in successfully', token };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        userRepository_1.UserRepository])
], AuthService);
//# sourceMappingURL=auth.service.js.map