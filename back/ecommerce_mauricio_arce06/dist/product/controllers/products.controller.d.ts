import { ProductsService } from '../services/products.service';
import { CreateProductsDto } from '../productDto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(): Promise<import("../product.entity").Products[]>;
    preLoadedProducts(): Promise<import("../product.entity").Products[]>;
    getProductById(id: string): Promise<import("../product.entity").Products>;
    postProduct(product: CreateProductsDto): Promise<import("../product.entity").Products | {
        message: string;
    }>;
    updateProduct(id: string, toUpdate: CreateProductsDto): Promise<string | {
        message: string;
    }>;
    deleteProduct(id: string): Promise<import("typeorm").DeleteResult | {
        message: string;
    }>;
}
