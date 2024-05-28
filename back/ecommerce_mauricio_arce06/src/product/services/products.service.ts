import { Injectable } from '@nestjs/common';
import { ProductDto } from '../productDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from '../product.entity';
import { Repository } from 'typeorm';
import { Products as ProductsEntity } from '../product.entity';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>,
  ) {}

  async getProducts() {
    return await this.productsRepository.find();
  }

  async getProductById(id: string) {
    return await this.productsRepository.findOne({ where: { id } });
  }

  async postProduct(product: ProductsEntity) {
    const newProduct = await this.productsRepository.create(product);
    if (newProduct) {
      const prodSaved = await this.productsRepository.save(newProduct);
      console.log(prodSaved);
      return prodSaved;
    } else return { message: 'El prodcuto no se pudo crear' };
  }

  async updateProduct(id: string, toUpdate: ProductDto) {
    const user = await this.productsRepository.findOne({ where: { id } });
    if (user) {
      await this.productsRepository.update(user, toUpdate);
      return user.id;
    } else return { message: 'El producto no existe' };
  }

  async deleteProduct(id: string) {
    const user = await this.productsRepository.findOne({ where: { id } });
    if (user) {
      return this.productsRepository.delete(user);
    } else return { message: 'El producto no existe' };
  }
  async preLoadedProducts() {
    const productos = JSON.parse(
      readFileSync(
        'c:/Users/Mauri/Documents/Programación/PM4-MauricioArce06/back/ecommerce_mauricio_arce06/src/utils/data.json',
        'utf8',
      ),
    );
    const preLoadedProducts = await this.productsRepository.create(productos);
    await this.productsRepository.save(preLoadedProducts);
    console.log(productos);

    return preLoadedProducts;
  }
}
