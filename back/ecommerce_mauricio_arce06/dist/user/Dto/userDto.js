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
exports.CreateHashedUserDto = exports.LoginUserDto = exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_validator_2 = require("class-validator");
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_2.IsNotEmpty)(),
    (0, class_validator_2.IsString)(),
    (0, class_validator_2.MinLength)(3),
    (0, class_validator_1.MaxLength)(80),
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del usuario. Debe tener al menos 3 caracteres y no superar los 80',
        example: 'Mauricio',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_2.IsEmail)(),
    (0, class_validator_2.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Email del usuario. Debe ser un email válido',
        example: 'z9XkI@example.com',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_2.IsStrongPassword)({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    }),
    (0, class_validator_1.MaxLength)(15),
    (0, class_validator_2.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Contraseña del usuario. Debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo',
        example: 'Password123!',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_2.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Confirma la contraseña del usuario',
        example: 'Password123!',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "confirmPassword", void 0);
__decorate([
    (0, class_validator_2.MinLength)(3),
    (0, class_validator_1.MaxLength)(80),
    (0, class_validator_2.IsString)(),
    (0, class_validator_2.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Dirección del usuario. Debe tener al menos 3 caracteres y no superar los 80',
        example: 'Calle Falsa 123',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsPhoneNumber)(),
    (0, class_validator_2.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Teléfono del usuario. Debe ser un número de teléfono válido',
        example: '+543516070515',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_2.IsString)(),
    (0, class_validator_2.IsNotEmpty)(),
    (0, class_validator_2.MinLength)(5),
    (0, class_validator_1.MaxLength)(20),
    (0, swagger_1.ApiProperty)({
        description: 'País del usuario. Debe tener al menos 5 caracteres y no superar los 20',
        example: 'Colombia',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_2.IsString)(),
    (0, class_validator_2.IsNotEmpty)(),
    (0, class_validator_2.MinLength)(5),
    (0, class_validator_1.MaxLength)(20),
    (0, swagger_1.ApiProperty)({
        description: 'Ciudad del usuario. Debe tener al menos 5 caracteres y no superar los 20',
        example: 'Bogota',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "city", void 0);
class LoginUserDto {
}
exports.LoginUserDto = LoginUserDto;
__decorate([
    (0, class_validator_2.IsEmail)(),
    (0, class_validator_2.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Email del usuario. Debe ser un email válido',
        example: 'z9XkI@example.com',
    }),
    __metadata("design:type", String)
], LoginUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_2.IsStrongPassword)({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    }),
    (0, class_validator_1.MaxLength)(15),
    (0, class_validator_2.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Contraseña del usuario. Debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo',
        example: 'Password123!',
    }),
    __metadata("design:type", String)
], LoginUserDto.prototype, "password", void 0);
class CreateHashedUserDto extends CreateUserDto {
}
exports.CreateHashedUserDto = CreateHashedUserDto;
__decorate([
    (0, class_validator_1.Length)(60),
    (0, class_validator_2.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateHashedUserDto.prototype, "password", void 0);
//# sourceMappingURL=userDto.js.map