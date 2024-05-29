import { UserRepository } from '../repository/userRepository';
import { CreateUserDto, LoginUserDto } from '../Dto/userDto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    getUsers(page: number, limit: number): Promise<import("../Entities/user.entity").User[]>;
    getUserById(id: string): Promise<import("../Entities/user.entity").User>;
    postUser(user: CreateUserDto): Promise<string>;
    updateUser(id: string, toUpdate: CreateUserDto): Promise<string | {
        message: string;
    }>;
    deleteUser(id: string): Promise<string | {
        message: string;
    }>;
    login(credentialDto: LoginUserDto): Promise<void>;
}
