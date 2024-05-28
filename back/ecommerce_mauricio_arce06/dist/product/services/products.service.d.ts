import { ProductDto } from '../productDto';
import { Products } from '../product.entity';
import { Repository } from 'typeorm';
import { Products as ProductsEntity } from '../product.entity';
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: Repository<Products>);
    getProducts(): Promise<Products[]>;
    getProductById(id: string): Promise<Products>;
    postProduct(product: ProductsEntity): Promise<Products | {
        message: string;
    }>;
    updateProduct(id: string, toUpdate: ProductDto): Promise<string | {
        message: string;
    }>;
    deleteProduct(id: string): Promise<import("typeorm").DeleteResult | {
        message: string;
    }>;
    preLoadedProducts(): Promise<Products[]>;
}
