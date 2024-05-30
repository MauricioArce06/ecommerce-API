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
var UsersModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_controller_1 = require("../controllers/users.controller");
const users_service_1 = require("../services/users.service");
const userRepository_1 = require("../repository/userRepository");
const authenticationMidd_1 = require("../../middlewares/authenticationMidd");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../Entities/user.entity");
let UsersModule = UsersModule_1 = class UsersModule {
    configure(consumer) {
        consumer.apply(authenticationMidd_1.AuthenticationMiddUser).forRoutes('users/register');
    }
    constructor() {
        this.logger = new common_1.Logger(UsersModule_1.name);
        this.logger.log('UsersModule initialized');
    }
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = UsersModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User])],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService, userRepository_1.UserRepository],
        exports: [userRepository_1.UserRepository],
    }),
    __metadata("design:paramtypes", [])
], UsersModule);
//# sourceMappingURL=users.module.js.map