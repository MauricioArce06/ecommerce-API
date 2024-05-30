import { Categories } from 'src/entities/category.entity';
import { OrdersDetail } from 'src/entities/orderDetail.entity';
export declare class Products {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    imgUrl: string;
    categories: Categories;
    orderDetail: OrdersDetail[];
}
