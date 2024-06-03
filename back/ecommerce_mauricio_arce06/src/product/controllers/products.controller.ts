import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { headerAuthorization } from 'src/auth/guard/AuthGuard';
import { CreateProductsDto } from '../productDto';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { Roles } from 'src/auth/Decorators/roles.decoratos';
import { Role } from 'src/auth/rolEnum';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('products')
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
  getProductById(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.getProductById(id);
  }

  @Post('post')
  @UseGuards(headerAuthorization)
  postProduct(@Body() product: CreateProductsDto) {
    console.log('aca llega');

    return this.productsService.postProduct(product);
  }

  @Put('/update/:id')
  @Roles(Role.Admin)
  @UseGuards(headerAuthorization, RolesGuard)
  updateProduct(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() toUpdate: CreateProductsDto,
  ) {
    return this.productsService.updateProduct(id, toUpdate);
  }

  @Delete(':id')
  @UseGuards(headerAuthorization)
  deleteProduct(@Param('id', ParseUUIDPipe) id: string) {
    return this.productsService.deleteProduct(id);
  }
}
