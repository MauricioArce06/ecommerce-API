"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const globalMidd_1 = require("./middlewares/globalMidd");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const products_service_1 = require("./product/services/products.service");
const categories_service_1 = require("./categories/categories.service");
const console_1 = require("console");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    (0, console_1.log)('Iniciando...');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    app.use(globalMidd_1.GlobalMidd);
    (0, console_1.log)('Preload data...');
    const productsService = app.get(products_service_1.ProductsService);
    const categoriesService = app.get(categories_service_1.CategoriesService);
    categoriesService.getCategoriesSeeder();
    productsService.preLoadedProducts();
    (0, console_1.log)('Preload data done!');
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('Ecommerce API')
        .setDescription('Esta es una API de nest para ser empleada para un ecommerce')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map