import { Repository } from 'typeorm';
import { Categories } from './category.entity';
export declare class CategoriesService {
    private readonly categoryService;
    constructor(categoryService: Repository<Categories>);
    getCategories(): Promise<Categories[]>;
    getCategoriesSeeder(): Promise<Categories[]>;
    addCategory(category: CategoryDto): Promise<Categories>;
}