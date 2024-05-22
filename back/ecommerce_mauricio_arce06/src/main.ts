import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalMidd } from './middlewares/globalMidd';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(GlobalMidd);
  await app.listen(3000);
}
bootstrap();
