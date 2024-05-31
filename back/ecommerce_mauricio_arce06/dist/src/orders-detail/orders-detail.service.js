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
exports.OrdersDetailService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const orderDetail_entity_1 = require("../entities/orderDetail.entity");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("../product/product.entity");
const order_entity_1 = require("../entities/order.entity");
const products_service_1 = require("../product/services/products.service");
let OrdersDetailService = class OrdersDetailService {
    constructor(ordersDetailRepository, orderRepository, productsRepository, productsRepositoryDB) {
        this.ordersDetailRepository = ordersDetailRepository;
        this.orderRepository = orderRepository;
        this.productsRepository = productsRepository;
        this.productsRepositoryDB = productsRepositoryDB;
    }
    async getOrdersDetail(order) {
        const ordersDetail = await this.ordersDetailRepository.find({
            where: { order_id: order },
            relations: ['order_id', 'product'],
            select: {
                id: true,
                price: true,
                product: {
                    id: true,
                    name: true,
                    description: true,
                    price: true,
                    stock: true,
                },
            },
        });
        return ordersDetail;
    }
    async addOrderDetail(orderDetail) {
        const { product_id, order_id } = orderDetail;
        const order = await this.orderRepository.findOne({
            where: { id: order_id },
        });
        if (!order) {
            throw new Error('La orden no existe');
        }
        const product = await this.productsRepositoryDB.getProductById(product_id);
        if (!product) {
            throw new Error('El producto no existe');
        }
        const existingOrderDetail = await this.ordersDetailRepository.findOne({
            where: { order_id: order, product: product },
        });
        if (existingOrderDetail) {
            throw new Error('El producto ya existe');
        }
        const newOrderDetail = new orderDetail_entity_1.OrdersDetail();
        const productArray = [];
        productArray.push(product);
        newOrderDetail.price = product.price;
        newOrderDetail.order_id = order;
        newOrderDetail.product = productArray;
        product.stock -= 1;
        await this.productsRepository.save(product);
        const orderDetailSaved = await this.ordersDetailRepository.save(newOrderDetail);
        const orderDetailCreated = await this.ordersDetailRepository.findOne({
            where: { id: orderDetailSaved.id },
            relations: { product: true },
            select: ['id', 'price', 'order_id', 'product'],
        });
        console.log(orderDetailCreated);
        return orderDetailCreated;
    }
};
exports.OrdersDetailService = OrdersDetailService;
exports.OrdersDetailService = OrdersDetailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(orderDetail_entity_1.OrdersDetail)),
    __param(1, (0, typeorm_1.InjectRepository)(order_entity_1.Orders)),
    __param(2, (0, typeorm_1.InjectRepository)(product_entity_1.Products)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        products_service_1.ProductsService])
], OrdersDetailService);
//# sourceMappingURL=orders-detail.service.js.map