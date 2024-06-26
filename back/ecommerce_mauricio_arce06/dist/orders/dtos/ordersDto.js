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
exports.CreateOrdersDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const productOrderDto_1 = require("./productOrderDto");
const swagger_1 = require("@nestjs/swagger");
class CreateOrdersDto {
}
exports.CreateOrdersDto = CreateOrdersDto;
__decorate([
    (0, class_validator_1.IsUUID)('all'),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: 'Id del usuario al cual crearle la orden de compra. Tiene que ser un UUID',
        example: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
    }),
    __metadata("design:type", String)
], CreateOrdersDto.prototype, "user_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => productOrderDto_1.default),
    (0, swagger_1.ApiProperty)({
        description: 'Array de objetos con los id de los productos a comprar. Tiene que ser un Array',
    }),
    __metadata("design:type", Array)
], CreateOrdersDto.prototype, "products", void 0);
//# sourceMappingURL=ordersDto.js.map