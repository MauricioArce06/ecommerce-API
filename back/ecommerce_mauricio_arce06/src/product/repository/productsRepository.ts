// import { ProductDto } from '../productDto';
// import { Products } from '../product.entity';
// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';

// @Injectable()
// export class ProductsRepository {
//   //*Aca iría despues la conección a la db
//   constructor(
//     @InjectRepository(Products)
//     private productsRepository: Repository<Products>,
//   ) {}

//   //*esto devolvería despues los datos de la conección
//   async getProducts() {
//     return await this.productsRepository.find();
//   }

//   async getProductById(id: string) {
//     console.log(id);
//     const product = await this.productsRepository.findOne({ where: { id } });
//     if (product) {
//       console.log('El producto es:', product);
//     } else console.log('El producto no existe');

//     return product;
//   }

//   async postProduct(product: ProductDto) {
//     const product = await this.productsRepository.save(product);
//     return product.id;
//   }

//   async updateProduct(id: number, toUpdate: ProductDto) {
//     const product = await this.products.find((product) => product.id === id);
//     if (product) {
//       const newProduct = { id, ...toUpdate };
//       this.products = this.products.map((product) =>
//         product.id === id ? (product = newProduct) : product,
//       );
//     } else return { message: 'El producto no existe' };

//     // console.log(product);
//     // Object.assign(product, toUpdate);
//     return product.id;
//   }

//   async deleteProduct(id: number) {
//     this.products = this.products.filter((product) => product.id !== id);
//     return id;
//   }
// }
