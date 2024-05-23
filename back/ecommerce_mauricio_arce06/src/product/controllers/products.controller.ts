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

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productsService.getProducts();
  }

  @Get(':id')
  getProductById(@Param('id') id: number) {
    const idParse = Number(id);
    return this.productsService.getProductById(idParse);
  }

  @Post('post')
  @UseGuards(headerAuthorization)
  postProduct(@Body() product: ProductDto) {
    return this.productsService.postProduct(product);
  }

  @Put('/update/:id')
  @UseGuards(headerAuthorization)
  updateProduct(@Param('id') id: string, @Body() toUpdate: ProductDto) {
    const idParseado = Number(id);
    return this.productsService.updateProduct(idParseado, toUpdate);
  }

  @Delete(':id')
  @UseGuards(headerAuthorization)
  deleteProduct(@Param('id') id: string) {
    const idParseado = Number(id);
    return this.productsService.deleteProduct(idParseado);
  }
}
