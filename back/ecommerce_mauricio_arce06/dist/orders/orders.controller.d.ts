import { OrdersService } from './orders.service';
import ordersDto from './ordersDto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    postOrders(order: ordersDto): Promise<import("../entities/order.entity").Orders>;
    getOrders(id: string): Promise<import("../entities/order.entity").Orders>;
}
