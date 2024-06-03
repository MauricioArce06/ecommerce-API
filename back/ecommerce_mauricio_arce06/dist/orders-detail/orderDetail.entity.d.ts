import { Products } from 'src/product/product.entity';
import { Orders } from 'src/orders/order.entity';
export declare class OrdersDetail {
    id: string;
    price: number;
    order_id: Orders;
    product: Products[];
}
