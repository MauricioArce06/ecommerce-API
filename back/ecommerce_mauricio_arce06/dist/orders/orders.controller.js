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
exports.OrdersController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const orders_service_1 = require("./orders.service");
const ordersDto_1 = require("./dtos/ordersDto");
const orders_interceptor_1 = require("./interceptors/orders.interceptor");
const AuthGuard_1 = require("../auth/guard/AuthGuard");
const swagger_1 = require("@nestjs/swagger");
let OrdersController = class OrdersController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    postOrders(order) {
        return this.ordersService.postOrders(order);
    }
    getOrders(id) {
        return this.ordersService.getOrders({ order_id: id });
    }
};
exports.OrdersController = OrdersController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(AuthGuard_1.headerAuthorization),
    openapi.ApiResponse({ status: 201, type: require("./order.entity").Orders }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ordersDto_1.CreateOrdersDto]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "postOrders", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.UseInterceptors)(orders_interceptor_1.OrdersInterceptor),
    openapi.ApiResponse({ status: 200, type: require("./order.entity").Orders }),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrdersController.prototype, "getOrders", null);
exports.OrdersController = OrdersController = __decorate([
    (0, swagger_1.ApiTags)('Orders'),
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], OrdersController);
//# sourceMappingURL=orders.controller.js.map