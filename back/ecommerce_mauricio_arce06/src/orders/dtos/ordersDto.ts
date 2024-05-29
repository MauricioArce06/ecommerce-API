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
  user_id: string;

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => ProductOrderDto)
  products: ProductOrderDto[];
}
