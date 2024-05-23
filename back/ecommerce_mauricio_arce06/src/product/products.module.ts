import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { ProductsController } from './controllers/products.controller';
import { ProductsRepository } from './repository/productsRepository';
import { AuthenticationMiddProduct } from 'src/middlewares/authenticationMidd';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsRepository],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddProduct)
      .forRoutes('products/post', 'products/update/:id');
  }
}
