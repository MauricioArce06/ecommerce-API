import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from '../product.entity';
import { Repository } from 'typeorm';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { CreateProductsDto } from '../productDto';
import { log } from 'console';
import { Categories } from 'src/categories/category.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>,

    @InjectRepository(Categories)
    private readonly categoriesRepository: Repository<Categories>,
  ) {}

  async getProducts() {
    return await this.productsRepository.find({ relations: ['category'] });
  }

  async getProductById(id: string) {
    const producto = await this.productsRepository.findOne({
      where: { id },
      relations: ['category'],
    });
    if (!producto) throw new BadRequestException("Product doesn't exist");
    return producto;
  }

  async postProduct(product: CreateProductsDto) {
    const existingProduct = await this.productsRepository.findOne({
      where: { name: product.name },
    });
    if (existingProduct) {
      throw new ConflictException('Product already exists');
    }

    const category = await this.categoriesRepository.findOne({
      where: { name: product.category },
    });

    if (!category) {
      throw new BadRequestException("Category doesn't exist");
    }
    const newProduct = await this.productsRepository.create({
      ...product,
      category,
    });
    if (newProduct) {
      const prodSaved = await this.productsRepository.save(newProduct);
      return await this.productsRepository.findOne({
        where: { id: prodSaved.id },
        relations: ['category'],
      });
    } else return { message: 'El prodcuto no se pudo crear' };
  }

  async updateProduct(id: string, toUpdate: CreateProductsDto) {
    const product = await this.productsRepository.findOne({ where: { id } });
    const category = await this.categoriesRepository.findOne({
      where: { name: toUpdate.category },
    });
    if (product) {
      await this.productsRepository.update(product, { ...toUpdate, category });
      return product.id;
    } else return { message: 'El producto no existe' };
  }

  async deleteProduct(id: string) {
    const user = await this.productsRepository.findOne({ where: { id } });
    if (user) {
      try {
        await this.productsRepository.delete(user);
        return 'Producto eliminado con éxito';
      } catch (error) {
        throw new InternalServerErrorException();
      }
    } else return { message: 'El producto no existe' };
  }

  async preLoadedProducts() {
    log('preloaded products...');
    const productos = JSON.parse(readFileSync('./src/utils/data.json', 'utf8'));
    for (const producto of productos) {
      try {
        const ExistingProduct = await this.productsRepository.findOne({
          where: { name: producto.name },
        });

        const existingCategory = await this.categoriesRepository.findOne({
          where: { name: producto.category },
        });

        if (ExistingProduct) {
          return 'Seeder ya hecho';
        } else {
          const { name, description, price, stock, imgUrl } = producto;
          const preLoadedProduct = await this.productsRepository.create({
            name,
            description,
            price,
            stock,
            imgUrl,
            category: existingCategory,
          });
          await this.productsRepository.save(preLoadedProduct);
        }
      } catch (error) {
        error;
      }
    }
    return await this.productsRepository.find();
  }
}
