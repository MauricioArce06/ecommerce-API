import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get('seeder')
  getCategories() {
    return this.categoriesService.getCategories();
  }

  @Post('add')
  addCategory(@Body() category: CategoryDto) {
    return this.categoriesService.addCategory(category);
  }
}
