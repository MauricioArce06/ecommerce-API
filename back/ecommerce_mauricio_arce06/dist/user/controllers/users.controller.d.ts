import { UsersService } from 'src/user/services/users.service';
import { userDto } from '../Dto/userDto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(page: number, limit: number): Promise<{
        id: number;
        email: string;
        name: string;
        adress: string;
        phone: string;
        country: string;
        city: string;
    }[]>;
    getUserById(id: string): Promise<{
        id: number;
        email: string;
        name: string;
        adress: string;
        phone: string;
        country: string;
        city: string;
    }>;
    postUser(user: userDto): Promise<number>;
    updateUser(id: string, toUpdate: userDto): Promise<number | {
        message: string;
    }>;
    deleteUser(id: string): Promise<number>;
}
