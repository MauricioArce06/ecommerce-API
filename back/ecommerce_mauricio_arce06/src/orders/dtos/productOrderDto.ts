import { IsNotEmpty, IsString } from 'class-validator';

export default class ProductOrderDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
