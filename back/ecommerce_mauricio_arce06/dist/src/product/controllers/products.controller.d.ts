import { ProductsService } from '../services/products.service';
import { ProductDto } from '../productDto';
import { Products as ProductsEntity } from '../product.entity';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(): Promise<ProductsEntity[]>;
    preLoadedProducts(): Promise<ProductsEntity[]>;
    getProductById(id: string): Promise<ProductsEntity>;
    postProduct(product: ProductsEntity): Promise<ProductsEntity | {
        message: string;
    }>;
    updateProduct(id: string, toUpdate: ProductDto): Promise<string | {
        message: string;
    }>;
    deleteProduct(id: string): Promise<import("typeorm").DeleteResult | {
        message: string;
    }>;
}
