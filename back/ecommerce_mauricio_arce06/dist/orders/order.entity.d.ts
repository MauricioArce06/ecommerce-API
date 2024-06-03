import { OrdersDetail } from 'src/orders-detail/orderDetail.entity';
import { User } from 'src/user/user.entity';
export declare class Orders {
    id: string;
    user_id: User;
    date: string;
    total: number;
    orderDetail: OrdersDetail[];
}
