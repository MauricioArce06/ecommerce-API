import { Orders } from 'src/entities/order.entity';
export declare class User {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: number;
    country: string;
    adress: string;
    city: string;
    orders_id: Orders[];
}
