import { UsersService } from 'src/user/services/users.service';
import { CreateUserDto, LoginUserDto } from '../Dto/userDto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(page: number, limit: number): Promise<import("../Entities/user.entity").User[]>;
    getUserById(id: string): Promise<import("../Entities/user.entity").User>;
    postUser(user: CreateUserDto): Promise<string>;
    login(credentialDto: LoginUserDto): Promise<void>;
    updateUser(id: string, toUpdate: CreateUserDto): Promise<string | {
        message: string;
    }>;
    deleteUser(id: string): Promise<string | {
        message: string;
    }>;
}
