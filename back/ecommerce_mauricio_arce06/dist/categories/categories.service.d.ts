import { Repository } from 'typeorm';
import { Categories } from './category.entity';
import { CategoryDto } from './categoryDto';
export declare class CategoriesService {
    private readonly categoryService;
    constructor(categoryService: Repository<Categories>);
    getCategories(): Promise<Categories[]>;
    getCategoryById(id: string): Promise<Categories>;
    getCategoriesSeeder(): Promise<"Seeder already exists" | Categories[]>;
    addCategory(category: CategoryDto): Promise<Categories>;
}
