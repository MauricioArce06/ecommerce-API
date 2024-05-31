import { OrdersService } from './orders.service';
import { CreateOrdersDto } from './dtos/ordersDto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    postOrders(order: CreateOrdersDto): Promise<import("../entities/order.entity").Orders>;
    getOrders(id: string): Promise<import("../entities/order.entity").Orders>;
}
