import { CategoriesService } from './categories.service';
import { CategoryDto } from './categoryDto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    getCategories(): Promise<import("./category.entity").Categories[]>;
    seederCategories(): Promise<"Seeder already exists" | import("./category.entity").Categories[]>;
    getCategoryById(id: string): Promise<import("./category.entity").Categories>;
    addCategory(category: CategoryDto): Promise<import("./category.entity").Categories>;
}
