import { Categories } from 'src/categories/category.entity';
export declare class CreateProductsDto {
    name: string;
    description: string;
    price: number;
    stock: number;
    imgUrl: string;
    category: Categories;
}
