import { UsersService } from 'src/user/services/users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        adress: string;
        phone: string;
        country: string;
        city: string;
    }[]>;
}
