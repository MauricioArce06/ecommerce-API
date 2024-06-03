import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from 'src/product/product.entity';
import { Repository } from 'typeorm';
import { ProductsService } from 'src/product/services/products.service';
import { readFileSync } from 'fs';
import { Categories } from '../category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private readonly categoryService: Repository<Categories>,
  ) {}

  async getCategories() {
    const productos = JSON.parse(
      readFileSync(
        'c:/Users/Mauri/Documents/Programación/PM4-MauricioArce06/back/ecommerce_mauricio_arce06/src/utils/data.json',
        'utf8',
      ),
    );
    // console.log(productos);
    const categories = [];
    for (const product of productos) {
      const { category } = product;
      const categoryObj = {};
      const categories2 = [];
      if (!categories.includes(category)) {
        categories.push(category);
        categoryObj['name'] = category;
        categories2.push(categoryObj);
      }
      const newCategories = await this.categoryService.create(categories2);
      await this.categoryService.save(newCategories);
    }
    return await this.categoryService.find();
  }

  async addCategory(category: CategoryDto) {
    console.log(category);

    const newCategory = await this.categoryService.create(category);
    return await this.categoryService.save(newCategory);
  }
}
