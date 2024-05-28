import { OrdersDetail } from './orderDetail.entity';
import { User } from 'src/user/Entities/user.entity';
export declare class Orders {
    id: string;
    user_id: User;
    date: string;
    total: number;
    orderDetail: OrdersDetail[];
}
