import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalMidd } from './middlewares/globalMidd';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.use(GlobalMidd);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Ecommerce API')
    .setDescription(
      'Esta es una API de nest para ser empleada para un ecommerce',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
