export class ProductsRepository {
  //*Aca iría despues la conección a la db
  private products = [
    {
      id: 1,
      name: 'Smartphone XYZ',
      description:
        'A high-end smartphone with a large display and powerful processor.',
      price: 699.99,
      stock: true,
      imgUrl: 'https://example.com/images/smartphone_xyz.jpg',
    },
    {
      id: 2,
      name: 'Wireless Headphones ABC',
      description:
        'Noise-cancelling wireless headphones with long battery life.',
      price: 199.99,
      stock: true,
      imgUrl: 'https://example.com/images/wireless_headphones_abc.jpg',
    },
  ];

  //*esto devolvería despues los datos de la conección
  async getProducts() {
    return await this.products;
  }
}
