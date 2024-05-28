import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { ProductDto } from '../productDto';
import { headerAuthorization } from 'src/auth/guard/AuthGuard';
import { Products as ProductsEntity } from '../product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  @Get('seeder')
  preLoadedProducts() {
    return this.productsService.preLoadedProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(id);
  }

  @Post('post')
  @UseGuards(headerAuthorization)
  postProduct(@Body() product: ProductsEntity) {
    return this.productsService.postProduct(product);
  }

  @Put('/update/:id')
  @UseGuards(headerAuthorization)
  updateProduct(@Param('id') id: string, @Body() toUpdate: ProductDto) {
    return this.productsService.updateProduct(id, toUpdate);
  }

  @Delete(':id')
  @UseGuards(headerAuthorization)
  deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(id);
  }
}
