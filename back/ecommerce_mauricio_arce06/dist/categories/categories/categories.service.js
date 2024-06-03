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
const category_entity_1 = require("../category.entity");
let CategoriesService = class CategoriesService {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async getCategories() {
        const productos = JSON.parse((0, fs_1.readFileSync)('c:/Users/Mauri/Documents/Programación/PM4-MauricioArce06/back/ecommerce_mauricio_arce06/src/utils/data.json', 'utf8'));
        const categories = [];
        for (const product of productos) {
            const { category } = product;
            const categoryObj = {};
            const categories2 = [];
            if (!categories.includes(category)) {
                categories.push(category);
                categoryObj['name'] = category;
                categories2.push(categoryObj);
            }
            const newCategories = await this.categoryService.create(categories2);
            await this.categoryService.save(newCategories);
        }
        return await this.categoryService.find();
    }
    async addCategory(category) {
        console.log(category);
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