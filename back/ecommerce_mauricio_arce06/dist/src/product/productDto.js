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
const class_validator_1 = require("class-validator");
class CreateProductsDto {
}
exports.CreateProductsDto = CreateProductsDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(50),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProductsDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProductsDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)({
        maxDecimalPlaces: 2,
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
    __metadata("design:type", Number)
], CreateProductsDto.prototype, "stock", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateProductsDto.prototype, "imgUrl", void 0);
//# sourceMappingURL=productDto.js.map