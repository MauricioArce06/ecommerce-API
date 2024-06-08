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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const fs_1 = require("fs");
const category_entity_1 = require("./category.entity");
let CategoriesService = class CategoriesService {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async getCategories() {
        return await this.categoryService.find();
    }
    async getCategoryById(id) {
        const category = await this.categoryService.findOne({
            where: { id },
            relations: ['products'],
        });
        if (!category)
            throw new common_1.BadRequestException("Category doesn't exist");
        return category;
    }
    async getCategoriesSeeder() {
        const productos = JSON.parse((0, fs_1.readFileSync)('./src/utils/data.json', 'utf8'));
        for (const product of productos) {
            try {
                const ExistingCategory = await this.categoryService.findOne({
                    where: { name: product.category },
                });
                if (!ExistingCategory) {
                    const newCategory = this.categoryService.create({
                        name: product.category,
                    });
                    const savedCategory = await this.categoryService.save(newCategory);
                    console.log(savedCategory);
                }
            }
            catch (error) {
                return 'Seeder already exists';
            }
        }
        return await this.categoryService.find();
    }
    async addCategory(category) {
        const ExistingCategory = await this.categoryService.findOne({
            where: { name: category.name },
        });
        if (ExistingCategory) {
            throw new common_1.ConflictException('Category already exists');
        }
        const newCategory = await this.categoryService.create(category);
        return await this.categoryService.save(newCategory);
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Categories)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map