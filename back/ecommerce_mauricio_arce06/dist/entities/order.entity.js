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
exports.Orders = void 0;
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const orderDetail_entity_1 = require("./orderDetail.entity");
const user_entity_1 = require("../user/Entities/user.entity");
let Orders = class Orders {
    constructor() {
        this.id = (0, uuid_1.v4)();
    }
};
exports.Orders = Orders;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Orders.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.orders_id),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], Orders.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: new Date().toLocaleDateString('es-Ar') }),
    __metadata("design:type", String)
], Orders.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'numeric',
        precision: 10,
        scale: 2,
        default: 0,
    }),
    __metadata("design:type", Number)
], Orders.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => orderDetail_entity_1.OrdersDetail, (orderDetail) => orderDetail.order_id, {
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'orderDetail' }),
    __metadata("design:type", Array)
], Orders.prototype, "orderDetail", void 0);
exports.Orders = Orders = __decorate([
    (0, typeorm_1.Entity)('orders')
], Orders);
//# sourceMappingURL=order.entity.js.map