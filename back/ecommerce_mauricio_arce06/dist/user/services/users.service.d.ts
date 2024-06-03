import { CreateUserDto, LoginUserDto } from '../userDto';
import { UserRepository } from '../userRepository';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    getUsers(page: number, limit: number): Promise<import("../user.entity").User[]>;
    getUserById(id: string): Promise<import("../user.entity").User>;
    postUser(user: CreateUserDto): Promise<import("../user.entity").User>;
    updateUser(id: string, toUpdate: CreateUserDto): Promise<string | {
        message: string;
    }>;
    deleteUser(id: string): Promise<string | {
        message: string;
    }>;
    login(credentialDto: LoginUserDto): Promise<import("../user.entity").User>;
}
