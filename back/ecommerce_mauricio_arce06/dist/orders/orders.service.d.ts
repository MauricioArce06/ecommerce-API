import { Repository } from 'typeorm';
import { OrdersDetailService } from 'src/orders-detail/orders-detail.service';
import { Products } from 'src/product/product.entity';
import { OrderDetailDto2 } from 'src/orders-detail/order-detail.dto';
import { CreateOrdersDto } from './dtos/ordersDto';
import { Orders } from './order.entity';
import { OrdersDetail } from 'src/orders-detail/orderDetail.entity';
import { User } from 'src/user/entity/user.entity';
export declare class OrdersService {
    private ordersRepository;
    private userRepository;
    private ordersDetailService;
    private ordersDetailRepository;
    private productsRepository;
    private readonly logger;
    constructor(ordersRepository: Repository<Orders>, userRepository: Repository<User>, ordersDetailService: OrdersDetailService, ordersDetailRepository: Repository<OrdersDetail>, productsRepository: Repository<Products>);
    getOrders(OrderDetail: OrderDetailDto2): Promise<Orders>;
    postOrders(orders: CreateOrdersDto): Promise<Orders>;
}
