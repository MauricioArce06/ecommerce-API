import { Injectable } from '@nestjs/common';
import { ProductsRepository } from '../repository/productsRepository';
import { ProductDto } from '../productDto';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}
  getProducts() {
    return this.productsRepository.getProducts();
  }
  getProductById(id: number) {
    return this.productsRepository.getProductById(id);
  }
  postProduct(product: ProductDto) {
    return this.productsRepository.postProduct(product);
  }
  updateProduct(id: number, toUpdate: ProductDto) {
    return this.productsRepository.updateProduct(id, toUpdate);
  }
  deleteProduct(id: number) {
    return this.productsRepository.deleteProduct(id);
  }
}
