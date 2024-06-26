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
exports.AuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_service_1 = require("../services/auth.service");
const credentialDto_1 = require("../../credential/Dto/credentialDto");
const userDto_1 = require("../../user/Dto/userDto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    getAuth() {
        return this.authService.getAuth();
    }
    sing_up(user) {
        return this.authService.sing_up(user);
    }
    login(credentialDto) {
        const { email, password } = credentialDto;
        console.log('idiota');
        if (!email || !password) {
            return { message: 'Hay campos vacios' };
        }
        return this.authService.login(credentialDto);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getAuth", null);
__decorate([
    (0, swagger_1.ApiBody)({ type: userDto_1.CreateUserDto }),
    (0, common_1.Post)('signup'),
    openapi.ApiResponse({ status: 201, type: require("../../user/entity/user.entity").User }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userDto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "sing_up", null);
__decorate([
    (0, common_1.Post)('signin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [credentialDto_1.CredentialDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map