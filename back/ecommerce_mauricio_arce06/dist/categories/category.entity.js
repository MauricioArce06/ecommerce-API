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
exports.Categories = void 0;
const openapi = require("@nestjs/swagger");
const product_entity_1 = require("../product/product.entity");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
let Categories = class Categories {
    constructor() {
        this.id = (0, uuid_1.v4)();
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String, default: (0, uuid_1.v4)() }, name: { required: true, type: () => String }, product: { required: true, type: () => require("../product/product.entity").Products } };
    }
};
exports.Categories = Categories;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Categories.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Categories.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_entity_1.Products, (product) => product.categories),
    __metadata("design:type", product_entity_1.Products)
], Categories.prototype, "product", void 0);
exports.Categories = Categories = __decorate([
    (0, typeorm_1.Entity)('categories')
], Categories);
//# sourceMappingURL=category.entity.js.map