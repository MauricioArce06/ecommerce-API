import { UsersService } from 'src/user/services/users.service';
import { userDto } from '../Dto/userDto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(page: number, limit: number): Promise<import("../Entities/user.entity").User[]>;
    getUserById(id: string): Promise<import("../Entities/user.entity").User>;
    postUser(user: userDto): Promise<string>;
    updateUser(id: string, toUpdate: userDto): Promise<string | {
        message: string;
    }>;
    deleteUser(id: string): Promise<string | {
        message: string;
    }>;
}
