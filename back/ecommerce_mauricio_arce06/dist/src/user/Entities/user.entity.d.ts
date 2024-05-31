import { Orders } from 'src/entities/order.entity';
export declare class User {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    country: string;
    address: string;
    city: string;
    isAdmin: boolean;
    orders_id: Orders[];
}
