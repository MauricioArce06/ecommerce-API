import { Module } from '@nestjs/common';
import { ProductsController } from 'src/controllers/products.controller';
import { ProductsService } from 'src/services/products.service';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
