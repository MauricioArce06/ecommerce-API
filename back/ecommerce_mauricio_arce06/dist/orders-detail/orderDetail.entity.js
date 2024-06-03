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
exports.OrdersDetail = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const product_entity_1 = require("../product/product.entity");
const order_entity_1 = require("../orders/order.entity");
let OrdersDetail = class OrdersDetail {
    constructor() {
        this.id = (0, uuid_1.v4)();
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String, default: (0, uuid_1.v4)() }, price: { required: true, type: () => Number }, order_id: { required: true, type: () => require("../orders/order.entity").Orders }, product: { required: true, type: () => [require("../product/product.entity").Products] } };
    }
};
exports.OrdersDetail = OrdersDetail;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], OrdersDetail.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'numeric',
        precision: 10,
        scale: 2,
    }),
    __metadata("design:type", Number)
], OrdersDetail.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => order_entity_1.Orders, (order) => order.orderDetail),
    (0, typeorm_1.JoinColumn)({ name: 'order_id' }),
    __metadata("design:type", order_entity_1.Orders)
], OrdersDetail.prototype, "order_id", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => product_entity_1.Products, { cascade: true }),
    (0, typeorm_1.JoinTable)({
        name: 'order_detail_product',
        joinColumn: {
            name: 'order_detail_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'product_id',
            referencedColumnName: 'id',
        },
    }),
    __metadata("design:type", Array)
], OrdersDetail.prototype, "product", void 0);
exports.OrdersDetail = OrdersDetail = __decorate([
    (0, typeorm_1.Entity)('order_details')
], OrdersDetail);
//# sourceMappingURL=orderDetail.entity.js.map