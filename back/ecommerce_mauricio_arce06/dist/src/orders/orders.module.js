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
var OrdersModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersModule = void 0;
const common_1 = require("@nestjs/common");
const orders_service_1 = require("./orders.service");
const typeorm_1 = require("@nestjs/typeorm");
const order_entity_1 = require("../entities/order.entity");
const orders_detail_service_1 = require("../orders-detail/orders-detail.service");
const orders_controller_1 = require("./orders.controller");
const users_module_1 = require("../user/modules/users.module");
const user_entity_1 = require("../user/Entities/user.entity");
const orderDetail_entity_1 = require("../entities/orderDetail.entity");
const product_entity_1 = require("../product/product.entity");
const products_service_1 = require("../product/services/products.service");
let OrdersModule = OrdersModule_1 = class OrdersModule {
    constructor() {
        this.logger = new common_1.Logger(OrdersModule_1.name);
        this.logger.log('OrdersModule initialized');
    }
};
exports.OrdersModule = OrdersModule;
exports.OrdersModule = OrdersModule = OrdersModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([order_entity_1.Orders]),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            typeorm_1.TypeOrmModule.forFeature([orderDetail_entity_1.OrdersDetail]),
            typeorm_1.TypeOrmModule.forFeature([product_entity_1.Products]),
            users_module_1.UsersModule,
        ],
        providers: [orders_service_1.OrdersService, orders_detail_service_1.OrdersDetailService, products_service_1.ProductsService],
        controllers: [orders_controller_1.OrdersController],
    }),
    __metadata("design:paramtypes", [])
], OrdersModule);
//# sourceMappingURL=orders.module.js.map