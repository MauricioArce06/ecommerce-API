export declare class CreateUserDto {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    address: string;
    phone: string;
    country: string;
    city: string;
    isAdmin: boolean;
}
export declare class LoginUserDto {
    email: string;
    password: string;
}
export declare class CreateHashedUserDto extends CreateUserDto {
    password: string;
}
