import { UsersService } from 'src/user/services/users.service';
import { CreateUserDto } from '../Dto/userDto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(page: number, limit: number): Promise<import("../entity/user.entity").User[]>;
    getUserById(id: string): Promise<import("../entity/user.entity").User>;
    updateUser(id: string, toUpdate: CreateUserDto): Promise<any>;
    deleteUser(id: string): Promise<string | {
        message: string;
    }>;
}
