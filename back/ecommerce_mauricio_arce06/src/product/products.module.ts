import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { ProductsController } from './controllers/products.controller';
// import { ProductsRepository } from './repository/productsRepository';
import { AuthenticationMiddProduct } from 'src/middlewares/authenticationMidd';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './product.entity';
import { CloudinaryConfig } from 'src/config/cloudinary';
import { CloudinaryService } from 'src/cloudinary/cloudinary/cloudinary.service';

@Module({
  imports: [TypeOrmModule.forFeature([Products])],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddProduct)
      .forRoutes('products/post', 'products/update/:id');
  }
}
