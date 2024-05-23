import { UserRepository } from '../repository/userRepository';
import { userDto } from '../Dto/userDto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    getUsers(page: number, limit: number): Promise<{
        id: number;
        email: string;
        name: string;
        adress: string;
        phone: string;
        country: string;
        city: string;
    }[]>;
    getUserById(id: number): Promise<{
        id: number;
        email: string;
        name: string;
        adress: string;
        phone: string;
        country: string;
        city: string;
    }>;
    postUser(user: userDto): Promise<number>;
    updateUser(id: number, toUpdate: userDto): Promise<number | {
        message: string;
    }>;
    deleteUser(id: number): Promise<number>;
}
