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
exports.headerAuthorization = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("../../config");
async function headerAuthorizationValidation(req, jwtService) {
    console.log('inicia bien');
    const token = req.headers['authorization']?.split(' ')[1] ?? '';
    if (!token) {
        throw new common_1.UnauthorizedException('Bearer token not found');
    }
    try {
        console.log('inicia bien 2');
        const payload = await jwtService.verifyAsync(token, { secret: config_1.JWT_SECRET });
        payload.iat = new Date(payload.iat * 1000).toUTCString();
        payload.exp = new Date(payload.exp * 1000).toUTCString();
        req.user = payload;
        console.log(payload);
        console.log('termina bien');
        return true;
    }
    catch (error) {
        throw new common_1.UnauthorizedException('Invalid token');
    }
}
let headerAuthorization = class headerAuthorization {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        return headerAuthorizationValidation(req, this.jwtService);
    }
};
exports.headerAuthorization = headerAuthorization;
exports.headerAuthorization = headerAuthorization = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], headerAuthorization);
//# sourceMappingURL=AuthGuard.js.map