"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsRepository = void 0;
class ProductsRepository {
    constructor() {
        this.products = [
            {
                id: 1,
                name: 'Smartphone XYZ',
                description: 'A high-end smartphone with a large display and powerful processor.',
                price: 699.99,
                stock: true,
                imgUrl: 'https://example.com/images/smartphone_xyz.jpg',
            },
            {
                id: 2,
                name: 'Wireless Headphones ABC',
                description: 'Noise-cancelling wireless headphones with long battery life.',
                price: 199.99,
                stock: true,
                imgUrl: 'https://example.com/images/wireless_headphones_abc.jpg',
            },
        ];
    }
    async getProducts() {
        return await this.products;
    }
    async getProductById(id) {
        console.log(id);
        const product = await this.products.find((product) => product.id === id);
        if (product) {
            console.log('El producto es:', product);
        }
        else
            console.log('El producto no existe');
        return product;
    }
    async postProduct(product) {
        const id = this.products.length + 1;
        if (this.products.find((product) => product.id === id)) {
            const id2 = this.products.length + 2;
            await this.products.push({ id: id2, ...product });
            return id2;
        }
        else {
            await this.products.push({ id, ...product });
            const productoCreado = await this.products.find((product) => product.id === id);
            return productoCreado.id;
        }
    }
    async updateProduct(id, toUpdate) {
        const product = await this.products.find((product) => product.id === id);
        if (product) {
            const newProduct = { id, ...toUpdate };
            this.products = this.products.map((product) => product.id === id ? (product = newProduct) : product);
        }
        else
            return { message: 'El producto no existe' };
        return product.id;
    }
    async deleteProduct(id) {
        this.products = this.products.filter((product) => product.id !== id);
        return id;
    }
}
exports.ProductsRepository = ProductsRepository;
//# sourceMappingURL=productsRepository.js.map