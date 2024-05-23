import { ProductsService } from '../services/products.service';
import { ProductDto } from '../productDto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(): Promise<import("../entityProduct").ProductEntity[]>;
    getProductById(id: number): Promise<import("../entityProduct").ProductEntity>;
    postProduct(product: ProductDto): Promise<number>;
    updateProduct(id: string, toUpdate: ProductDto): Promise<number | {
        message: string;
    }>;
    deleteProduct(id: string): Promise<number>;
}
