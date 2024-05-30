import {
  IsPhoneNumber,
  Length,
  Matches,
  MaxLength,
  Validate,
} from 'class-validator';
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
  name: string;

  @IsEmail()
  @IsNotEmpty()
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
  password: string;

  @IsNotEmpty()
  confirmPassword: string;

  @MinLength(3)
  @MaxLength(80)
  @IsString()
  @IsNotEmpty()
  address: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(20)
  country: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(20)
  city: string;
}

export class LoginUserDto {
  @IsEmail()
  @IsNotEmpty()
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
  password: string;
}

export class CreateHashedUserDto extends CreateUserDto {
  @Length(60)
  @IsNotEmpty()
  password: string;
}
