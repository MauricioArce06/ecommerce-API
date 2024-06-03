/// <reference types="multer" />
import { ProductsService } from 'src/product/services/products.service';
export declare class CloudinaryService {
    private readonly productsService;
    constructor(productsService: ProductsService);
    uploadFile(file: Express.Multer.File, id: string): Promise<{
        message: string;
        updatedProduct: string | {
            message: string;
        };
    }>;
}
