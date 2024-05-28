import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    getCategories(): Promise<import("../../entities/category.entity").Categories[]>;
    addCategory(category: CategoryDto): Promise<import("../../entities/category.entity").Categories>;
}
