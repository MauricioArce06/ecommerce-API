import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'src/product/product.entity';
import { Repository } from 'typeorm';
import { ProductsService } from 'src/product/services/products.service';
import { readFileSync } from 'fs';
import { Categories } from './category.entity';
import { log } from 'console';
import { CategoryDto } from './categoryDto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private readonly categoryService: Repository<Categories>,
  ) {}

  async getCategories() {
    return await this.categoryService.find();
  }

  async getCategoryById(id: string) {
    const category = await this.categoryService.findOne({
      where: { id },
      relations: ['products'],
    });
    if (!category) throw new BadRequestException("Category doesn't exist");
    return category;
  }

  async getCategoriesSeeder() {
    const productos = JSON.parse(readFileSync('./src/utils/data.json', 'utf8'));
    for (const product of productos) {
      const ExistingCategory = await this.categoryService.findOne({
        where: { name: product.category },
      });

      if (!ExistingCategory) {
        const newCategory = this.categoryService.create({
          name: product.category,
        });

        await this.categoryService.save(newCategory);
      } else continue;
    }
    return await this.categoryService.find();
  }
  async addCategory(category: CategoryDto) {
    const ExistingCategory = await this.categoryService.findOne({
      where: { name: category.name },
    });
    if (ExistingCategory) {
      throw new ConflictException('Category already exists');
    }
    const newCategory = await this.categoryService.create(category);
    return await this.categoryService.save(newCategory);
  }
}
