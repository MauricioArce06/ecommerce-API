import { Module } from '@nestjs/common';
import { CloudinaryController } from './cloudinary.controller';
import { CloudinaryService } from './cloudinary.service';
import { CloudinaryConfig } from 'src/config/cloudinary';
import { ProductsModule } from 'src/product/products.module';
import { Products } from 'src/product/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ProductsModule],
  controllers: [CloudinaryController],
  providers: [CloudinaryService, CloudinaryConfig],
})
export class CloudinaryModule {}
