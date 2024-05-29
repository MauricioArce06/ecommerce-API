// export interface ProductDto {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   stock: number;
//   imgUrl: string;
// }

import {
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProductsDto {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  @IsNotEmpty()
  name: string;

  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsNumber({
    maxDecimalPlaces: 2,
  })
  price: number;

  @IsNotEmpty()
  @IsNumber({
    allowNaN: false,
    allowInfinity: false,
    maxDecimalPlaces: 0,
  })
  stock: number;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  imgUrl: string;
}
