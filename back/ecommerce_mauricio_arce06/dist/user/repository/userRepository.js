"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const common_1 = require("@nestjs/common");
let UserEntity = class UserEntity {
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
        ];
    }
    getUser() {
        return this.users;
    }
};
exports.UserEntity = UserEntity;
exports.UserEntity = UserEntity = __decorate([
    (0, common_1.Injectable)()
], UserEntity);
//# sourceMappingURL=userRepository.js.map