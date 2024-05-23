import { ProductsRepository } from '../repository/productsRepository';
import { ProductDto } from '../productDto';
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: ProductsRepository);
    getProducts(): Promise<import("../entityProduct").ProductEntity[]>;
    getProductById(id: number): Promise<import("../entityProduct").ProductEntity>;
    postProduct(product: ProductDto): Promise<number>;
    updateProduct(id: number, toUpdate: ProductDto): Promise<number | {
        message: string;
    }>;
    deleteProduct(id: number): Promise<number>;
}
