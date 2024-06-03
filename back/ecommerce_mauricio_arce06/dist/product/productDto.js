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
exports.CreateProductsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateProductsDto {
}
exports.CreateProductsDto = CreateProductsDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(50),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Nombre del producto. Debe ser de 3 a 50 caracteres',
        example: 'Coca Cola',
    }),
    __metadata("design:type", String)
], CreateProductsDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Descripción del producto. Debe ser de 3 a 50 caracteres',
        example: 'Botella de Coca Cola de 1L',
    }),
    __metadata("design:type", String)
], CreateProductsDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)({
        maxDecimalPlaces: 2,
    }),
    (0, swagger_1.ApiProperty)({
        description: 'Precio del producto. Debe ser mayor a 0',
        example: 1000,
    }),
    __metadata("design:type", Number)
], CreateProductsDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)({
        allowNaN: false,
        allowInfinity: false,
        maxDecimalPlaces: 0,
    }),
    (0, swagger_1.ApiProperty)({
        description: 'Stock del producto. Debe ser mayor a 0',
        example: 10,
    }),
    __metadata("design:type", Number)
], CreateProductsDto.prototype, "stock", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)(),
    (0, swagger_1.ApiProperty)({
        description: 'Url de la imagen del producto. Debe ser una url',
        example: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuPG_UiU5N_bv03CJFww0jlpyW-dsYFHLRNg&s',
    }),
    __metadata("design:type", String)
], CreateProductsDto.prototype, "imgUrl", void 0);
//# sourceMappingURL=productDto.js.map