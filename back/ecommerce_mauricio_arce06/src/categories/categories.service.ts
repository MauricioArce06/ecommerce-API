import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'src/product/product.entity';
import { Repository } from 'typeorm';
import { ProductsService } from 'src/product/services/products.service';
import { readFileSync } from 'fs';
import { Categories } from './category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private readonly categoryService: Repository<Categories>,
  ) {}

  async getCategories() {
    return await this.categoryService.find();
  }

  async getCategoriesSeeder() {
    const productos = JSON.parse(
      readFileSync(
        'c:/Users/Mauri/Documents/Programacion/PM4-MauricioArce06/back/ecommerce_mauricio_arce06/src/utils/data.json',
        'utf8',
      ),
    );
    for (const product of productos) {
      const ExistingCategory = await this.categoryService.findOne({
        where: { name: product.category },
      });

      if (!ExistingCategory) {
        const newCategory = await this.categoryService.create({
          name: product.category,
        });
        await this.categoryService.save(newCategory);
      }
    }
    return await this.categoryService.find();
  }

  async addCategory(category: CategoryDto) {
    console.log(category);
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
