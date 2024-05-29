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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("../product.entity");
const typeorm_2 = require("typeorm");
const fs_1 = require("fs");
let ProductsService = class ProductsService {
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }
    async getProducts() {
        return await this.productsRepository.find();
    }
    async getProductById(id) {
        return await this.productsRepository.findOne({ where: { id } });
    }
    async postProduct(product) {
        const newProduct = await this.productsRepository.create(product);
        if (newProduct) {
            const prodSaved = await this.productsRepository.save(newProduct);
            console.log(prodSaved);
            return prodSaved;
        }
        else
            return { message: 'El prodcuto no se pudo crear' };
    }
    async updateProduct(id, toUpdate) {
        const user = await this.productsRepository.findOne({ where: { id } });
        if (user) {
            await this.productsRepository.update(user, toUpdate);
            return user.id;
        }
        else
            return { message: 'El producto no existe' };
    }
    async deleteProduct(id) {
        const user = await this.productsRepository.findOne({ where: { id } });
        if (user) {
            return this.productsRepository.delete(user);
        }
        else
            return { message: 'El producto no existe' };
    }
    async preLoadedProducts() {
        const productos = JSON.parse((0, fs_1.readFileSync)('c:/Users/Mauri/Documents/Programación/PM4-MauricioArce06/back/ecommerce_mauricio_arce06/src/utils/data.json', 'utf8'));
        const preLoadedProducts = await this.productsRepository.create(productos);
        await this.productsRepository.save(preLoadedProducts);
        console.log(productos);
        return preLoadedProducts;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Products)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductsService);
//# sourceMappingURL=products.service.js.map