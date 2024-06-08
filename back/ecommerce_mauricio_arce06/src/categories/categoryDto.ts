import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CategoryDto {
  @ApiProperty({
    description: 'Nombre de la categoria a agregar',
    example: 'Tablet',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
