import { CreateUserDto, LoginUserDto } from '../Dto/userDto';
import { UserRepository } from '../repository/userRepository';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    getUsers(page: number, limit: number): Promise<import("../entity/user.entity").User[]>;
    getUserById(id: string): Promise<import("../entity/user.entity").User>;
    postUser(user: CreateUserDto): Promise<import("../entity/user.entity").User>;
    updateUser(id: string, toUpdate: CreateUserDto): Promise<string | {
        message: string;
    }>;
    deleteUser(id: string): Promise<string | {
        message: string;
    }>;
    login(credentialDto: LoginUserDto): Promise<import("../entity/user.entity").User>;
}
