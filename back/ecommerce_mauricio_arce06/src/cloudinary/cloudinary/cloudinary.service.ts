import { BadRequestException, Injectable } from '@nestjs/common';
import { UploadApiResponse, v2 } from 'cloudinary';
import * as toStream from 'buffer-to-stream';
import { ProductsService } from 'src/product/services/products.service';
import { Products } from 'src/product/product.entity';

@Injectable()
export class CloudinaryService {
  constructor(private readonly productsService: ProductsService) {}

  async uploadFile(file: Express.Multer.File, id: string) {
    const uploadStream = (): Promise<UploadApiResponse> => {
      return new Promise((resolve, reject) => {
        const upload = v2.uploader.upload_stream(
          { resource_type: 'auto' },
          (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          },
        );
        toStream(file.buffer).pipe(upload);
      });
    };

    const updateImgUrl = async (file: Express.Multer.File, id: string) => {
      const result = await uploadStream();
      const product: Products = await this.productsService.getProductById(id);

      if (!product) {
        throw new BadRequestException('Producto no encontrado');
      }

      const updatedProduct = await this.productsService.updateProduct(id, {
        description: product.description,
        name: product.name,
        price: product.price,
        stock: product.stock,
        imgUrl: result.secure_url,
      });
      console.log(result.secure_url);

      return { message: ' actualizacion correcta', updatedProduct };
    };

    return updateImgUrl(file, id);
  }
}
