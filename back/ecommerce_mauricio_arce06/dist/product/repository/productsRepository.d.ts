import { ProductEntity } from '../entityProduct';
import { ProductDto } from '../productDto';
export declare class ProductsRepository {
    private products;
    getProducts(): Promise<ProductEntity[]>;
    getProductById(id: number): Promise<ProductEntity>;
    postProduct(product: ProductDto): Promise<number>;
    updateProduct(id: number, toUpdate: ProductDto): Promise<number | {
        message: string;
    }>;
    deleteProduct(id: number): Promise<number>;
}
