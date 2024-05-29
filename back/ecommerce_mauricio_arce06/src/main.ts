import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalMidd } from './middlewares/globalMidd';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.use(GlobalMidd);
  await app.listen(3000);
}
bootstrap();
