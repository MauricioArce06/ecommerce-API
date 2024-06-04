import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsStrongPassword,
  MaxLength,
} from 'class-validator';

export class CredentialDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Email del usuario. Debe ser un email válido',
    example: 'z9XkI@example.com',
  })
  email: string;

  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  @MaxLength(15)
  @IsNotEmpty()
  @ApiProperty({
    description:
      'Contraseña del usuario. Debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo',
    example: 'Password123!',
  })
  password: string;
}
