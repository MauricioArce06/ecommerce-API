import { UsersService } from 'src/user/services/users.service';
import { CreateUserDto } from './userDto';
import { User } from './user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(page: number, limit: number): Promise<User[]>;
    getUserById(id: string): Promise<User>;
    updateUser(id: string, toUpdate: CreateUserDto): Promise<string | {
        message: string;
    }>;
    deleteUser(id: string): Promise<string | {
        message: string;
    }>;
}
