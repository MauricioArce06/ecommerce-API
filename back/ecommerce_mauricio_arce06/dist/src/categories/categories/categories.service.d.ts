import { Repository } from 'typeorm';
import { Categories } from '../../entities/category.entity';
export declare class CategoriesService {
    private readonly categoryService;
    constructor(categoryService: Repository<Categories>);
    getCategories(): Promise<Categories[]>;
    addCategory(category: CategoryDto): Promise<Categories>;
}
