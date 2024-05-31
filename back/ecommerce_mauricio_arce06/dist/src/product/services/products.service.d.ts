import { Products } from '../product.entity';
import { Repository } from 'typeorm';
import { CreateProductsDto } from '../productDto';
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: Repository<Products>);
    getProducts(): Promise<Products[]>;
    getProductById(id: string): Promise<Products>;
    postProduct(product: CreateProductsDto): Promise<Products | {
        message: string;
    }>;
    updateProduct(id: string, toUpdate: CreateProductsDto): Promise<string | {
        message: string;
    }>;
    deleteProduct(id: string): Promise<import("typeorm").DeleteResult | {
        message: string;
    }>;
    preLoadedProducts(): Promise<Products[]>;
}
