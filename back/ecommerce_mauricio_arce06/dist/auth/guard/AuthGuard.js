"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.headerAuthorization = void 0;
const common_1 = require("@nestjs/common");
function headerAuthorizationValidation(req) {
    const authHeader = req.headers['authorization'];
    if (!authHeader)
        throw new common_1.UnauthorizedException();
    const [type, credentials] = authHeader.split(' ');
    console.log(type, credentials);
    if (type !== 'Basic' || !credentials)
        throw new common_1.UnauthorizedException();
    const [email, password] = credentials.split(':');
    if (!email || !password)
        throw new common_1.UnauthorizedException();
    return true;
}
let headerAuthorization = class headerAuthorization {
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        return headerAuthorizationValidation(req);
    }
};
exports.headerAuthorization = headerAuthorization;
exports.headerAuthorization = headerAuthorization = __decorate([
    (0, common_1.Injectable)()
], headerAuthorization);
//# sourceMappingURL=AuthGuard.js.map