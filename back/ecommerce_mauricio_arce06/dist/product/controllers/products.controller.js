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
exports.ProductsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const products_service_1 = require("../services/products.service");
const AuthGuard_1 = require("../../auth/guard/AuthGuard");
const productDto_1 = require("../productDto");
const roles_guard_1 = require("../../auth/guard/roles.guard");
const roles_decoratos_1 = require("../../auth/Decorators/roles.decoratos");
const rolEnum_1 = require("../../auth/rolEnum");
const swagger_1 = require("@nestjs/swagger");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    getProducts() {
        return this.productsService.getProducts();
    }
    preLoadedProducts() {
        return this.productsService.preLoadedProducts();
    }
    getProductById(id) {
        return this.productsService.getProductById(id);
    }
    postProduct(product) {
        console.log('aca llega');
        return this.productsService.postProduct(product);
    }
    updateProduct(id, toUpdate) {
        return this.productsService.updateProduct(id, toUpdate);
    }
    deleteProduct(id) {
        return this.productsService.deleteProduct(id);
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("../product.entity").Products] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Get)('seeder'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "preLoadedProducts", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("../product.entity").Products }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "getProductById", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('post'),
    (0, common_1.UseGuards)(AuthGuard_1.headerAuthorization),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [productDto_1.CreateProductsDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "postProduct", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Put)('/update/:id'),
    (0, roles_decoratos_1.Roles)(rolEnum_1.Role.Admin),
    (0, common_1.UseGuards)(AuthGuard_1.headerAuthorization, roles_guard_1.RolesGuard),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, productDto_1.CreateProductsDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "updateProduct", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(AuthGuard_1.headerAuthorization),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "deleteProduct", null);
exports.ProductsController = ProductsController = __decorate([
    (0, swagger_1.ApiTags)('products'),
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map