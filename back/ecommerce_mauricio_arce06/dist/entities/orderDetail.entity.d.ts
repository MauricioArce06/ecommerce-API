import { Orders } from './order.entity';
import { Products } from 'src/product/product.entity';
export declare class OrdersDetail {
    id: string;
    price: number;
    order_id: Orders;
    product: Products[];
}
