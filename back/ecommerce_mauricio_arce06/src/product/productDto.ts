// export interface ProductDto {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   stock: number;
//   imgUrl: string;
// }

import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    description: 'Nombre del producto. Debe ser de 3 a 50 caracteres',
    example: 'Coca Cola',
  })
  name: string;

  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  @ApiProperty({
    description: 'Descripción del producto. Debe ser de 3 a 50 caracteres',
    example: 'Botella de Coca Cola de 1L',
  })
  description: string;

  @IsNotEmpty()
  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @ApiProperty({
    description: 'Precio del producto. Debe ser mayor a 0',
    example: 1000,
  })
  price: number;

  @IsNotEmpty()
  @IsNumber({
    allowNaN: false,
    allowInfinity: false,
    maxDecimalPlaces: 0,
  })
  @ApiProperty({
    description: 'Stock del producto. Debe ser mayor a 0',
    example: 10,
  })
  stock: number;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  @ApiProperty({
    description: 'Url de la imagen del producto. Debe ser una url',
    example:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuPG_UiU5N_bv03CJFww0jlpyW-dsYFHLRNg&s',
  })
  imgUrl: string;
}
