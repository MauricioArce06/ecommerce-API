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
var OrdersService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const orders_detail_service_1 = require("../orders-detail/orders-detail.service");
const product_entity_1 = require("../product/product.entity");
const order_entity_1 = require("./order.entity");
const orderDetail_entity_1 = require("../orders-detail/orderDetail.entity");
const user_entity_1 = require("../user/entity/user.entity");
let OrdersService = OrdersService_1 = class OrdersService {
    constructor(ordersRepository, userRepository, ordersDetailService, ordersDetailRepository, productsRepository) {
        this.ordersRepository = ordersRepository;
        this.userRepository = userRepository;
        this.ordersDetailService = ordersDetailService;
        this.ordersDetailRepository = ordersDetailRepository;
        this.productsRepository = productsRepository;
        this.logger = new common_1.Logger(OrdersService_1.name);
    }
    async getOrders(OrderDetail) {
        const { order_id } = OrderDetail;
        const order = await this.ordersRepository.findOne({
            where: { id: order_id },
            relations: ['orderDetail', 'orderDetail.product'],
            select: {
                id: true,
                date: true,
                total: true,
                orderDetail: {
                    id: true,
                    price: true,
                    product: {
                        name: true,
                    },
                },
            },
        });
        return order;
    }
    async postOrders(orders) {
        const { user_id, products } = orders;
        let total = 0;
        const user = await this.userRepository.findOne({ where: { id: user_id } });
        if (user) {
            const Hoy = new Date().toLocaleDateString('es-Ar');
            const order = new order_entity_1.Orders();
            const orderSaved = await this.ordersRepository.save(order);
            const ordersDetail = [];
            console.log('ID DEL ORDER', order.id);
            orderSaved.date = Hoy;
            orderSaved.user_id = user;
            for (const producto of products) {
                const { id } = producto;
                console.log(id);
                try {
                    const orderDetail = await this.ordersDetailService.addOrderDetail({
                        product_id: id,
                        order_id: order.id,
                    });
                    total = total + Number(orderDetail.price);
                    ordersDetail.push(orderDetail);
                }
                catch (error) {
                    throw new common_1.BadRequestException();
                }
            }
            console.log('orderSaved por actualizar');
            orderSaved.orderDetail = ordersDetail;
            orderSaved.total = total;
            console.log('orderSaved actualizado');
            const updatedOrder = await this.ordersRepository.save(orderSaved);
            return await this.ordersRepository.findOne({
                where: { id: orderSaved.id },
                relations: ['orderDetail'],
                select: {
                    id: true,
                    date: true,
                    total: true,
                    orderDetail: {
                        id: true,
                    },
                },
            });
        }
        else
            throw new Error('El usuario no existe');
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = OrdersService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Orders)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(3, (0, typeorm_1.InjectRepository)(orderDetail_entity_1.OrdersDetail)),
    __param(4, (0, typeorm_1.InjectRepository)(product_entity_1.Products)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        orders_detail_service_1.OrdersDetailService,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OrdersService);
//# sourceMappingURL=orders.service.js.map