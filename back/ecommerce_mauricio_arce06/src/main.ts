import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalMidd } from './middlewares/globalMidd';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ProductsService } from './product/services/products.service';
import { CategoriesService } from './categories/categories.service';
import { log } from 'console';
import { getConnection, DataSource, DataSourceOptions } from 'typeorm';
import { AppDataSource } from './config/data-source';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  log('Iniciando...');
  //* Pipes and middlewares
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.use(GlobalMidd);

  //* Preload data
  log('Preload data...');
  const productsService = app.get(ProductsService);
  const categoriesService = app.get(CategoriesService);

  categoriesService.getCategoriesSeeder();
  productsService.preLoadedProducts();

  log('Preload data done!');
  //* Swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Ecommerce API')
    .setDescription(
      'Esta es una API de nest para ser empleada para un ecommerce',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api', app, document);

  //* Start server
  await app.listen(3000);
  AppDataSource;
}
bootstrap();
