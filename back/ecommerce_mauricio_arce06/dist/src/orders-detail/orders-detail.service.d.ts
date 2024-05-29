import { OrdersDetail } from 'src/entities/orderDetail.entity';
import { Repository } from 'typeorm';
import { OrderDetailDto } from './order-detail.dto';
import { Products } from 'src/product/product.entity';
import { Orders } from 'src/entities/order.entity';
import { ProductsService } from 'src/product/services/products.service';
export declare class OrdersDetailService {
    private ordersDetailRepository;
    private orderRepository;
    private productsRepository;
    private readonly productsRepositoryDB;
    constructor(ordersDetailRepository: Repository<OrdersDetail>, orderRepository: Repository<Orders>, productsRepository: Repository<Products>, productsRepositoryDB: ProductsService);
    getOrdersDetail(order: Orders): Promise<OrdersDetail[]>;
    addOrderDetail(orderDetail: OrderDetailDto): Promise<OrdersDetail>;
}
