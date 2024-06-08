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
const console_1 = require("console");
const category_entity_1 = require("../../categories/category.entity");
let ProductsService = class ProductsService {
    constructor(productsRepository, categoriesRepository) {
        this.productsRepository = productsRepository;
        this.categoriesRepository = categoriesRepository;
    }
    async getProducts() {
        return await this.productsRepository.find({ relations: ['category'] });
    }
    async getProductById(id) {
        const producto = await this.productsRepository.findOne({ where: { id } });
        if (!producto)
            throw new common_1.BadRequestException("Product doesn't exist");
        return producto;
    }
    async postProduct(product) {
        console.log('hasta aca llega');
        const existingProduct = await this.productsRepository.findOne({
            where: { name: product.name },
        });
        if (existingProduct) {
            throw new common_1.ConflictException('Product already exists');
        }
        try {
            const newProduct = await this.productsRepository.create(product);
            if (newProduct) {
                const prodSaved = await this.productsRepository.save(newProduct);
                console.log(prodSaved);
                return prodSaved;
            }
            else
                return { message: 'El prodcuto no se pudo crear' };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException("Can't create product");
        }
    }
    async updateProduct(id, toUpdate) {
        const product = await this.productsRepository.findOne({ where: { id } });
        if (product) {
            await this.productsRepository.update(product, toUpdate);
            return product.id;
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
        (0, console_1.log)('preloaded products...');
        const productos = JSON.parse((0, fs_1.readFileSync)('./src/utils/data.json', 'utf8'));
        for (const producto of productos) {
            try {
                const ExistingProduct = await this.productsRepository.findOne({
                    where: { name: producto.name },
                });
                const existingCategory = await this.categoriesRepository.findOne({
                    where: { name: producto.category },
                });
                if (ExistingProduct) {
                    return 'Seeder ya hecho';
                }
                else {
                    const { name, description, price, stock, imgUrl } = producto;
                    const preLoadedProduct = await this.productsRepository.create({
                        name,
                        description,
                        price,
                        stock,
                        imgUrl,
                        category: existingCategory,
                    });
                    await this.productsRepository.save(preLoadedProduct);
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        return await this.productsRepository.find();
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Products)),
    __param(1, (0, typeorm_1.InjectRepository)(category_entity_1.Categories)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductsService);
//# sourceMappingURL=products.service.js.map