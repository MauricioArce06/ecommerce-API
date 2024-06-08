import { Categories } from 'src/categories/category.entity';
import { OrdersDetail } from 'src/orders-detail/orderDetail.entity';
export declare class Products {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    imgUrl: string;
    category: Categories;
    orderDetail: OrdersDetail[];
}
