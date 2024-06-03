import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsObject,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Products } from 'src/product/product.entity';
import ProductOrderDto from './productOrderDto';
import { ApiProperty } from '@nestjs/swagger';

type productsId = {
  id: string;
};

export interface ordersDto {
  user_id: string;
  products: productsId[];
  date: Date;
}

export class CreateOrdersDto {
  @IsUUID('all')
  @IsNotEmpty()
  @ApiProperty({
    description:
      'Id del usuario al cual crearle la orden de compra. Tiene que ser un UUID',
    example: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
  })
  user_id: string;

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ProductOrderDto)
  @ApiProperty({
    description:
      'Array de objetos con los id de los productos a comprar. Tiene que ser un Array',
  })
  products: ProductOrderDto[];
}
