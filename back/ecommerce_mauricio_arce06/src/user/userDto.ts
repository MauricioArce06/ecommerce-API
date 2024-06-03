import { ApiProperty } from '@nestjs/swagger';
import { IsPhoneNumber, Length, MaxLength } from 'class-validator';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(80)
  @ApiProperty({
    description:
      'Nombre del usuario. Debe tener al menos 3 caracteres y no superar los 80',
    example: 'Mauricio',
  })
  name: string;

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

  @IsNotEmpty()
  @ApiProperty({
    description: 'Confirma la contraseña del usuario',
    example: 'Password123!',
  })
  confirmPassword: string;

  @MinLength(3)
  @MaxLength(80)
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description:
      'Dirección del usuario. Debe tener al menos 3 caracteres y no superar los 80',
    example: 'Calle Falsa 123',
  })
  address: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Teléfono del usuario. Debe ser un número de teléfono válido',
    example: '+546581234567',
  })
  phone: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(20)
  @ApiProperty({
    description:
      'País del usuario. Debe tener al menos 5 caracteres y no superar los 20',
    example: 'Colombia',
  })
  country: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(20)
  @ApiProperty({
    description:
      'Ciudad del usuario. Debe tener al menos 5 caracteres y no superar los 20',
    example: 'Bogota',
  })
  city: string;
}

export class LoginUserDto {
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

export class CreateHashedUserDto extends CreateUserDto {
  @Length(60)
  @IsNotEmpty()
  password: string;
}
