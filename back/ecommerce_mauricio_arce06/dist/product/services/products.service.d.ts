import { Products } from '../product.entity';
import { Repository } from 'typeorm';
import { CreateProductsDto } from '../productDto';
import { Categories } from 'src/categories/category.entity';
export declare class ProductsService {
    private readonly productsRepository;
    private readonly categoriesRepository;
    constructor(productsRepository: Repository<Products>, categoriesRepository: Repository<Categories>);
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
    preLoadedProducts(): Promise<Products[] | "Seeder ya hecho">;
}
