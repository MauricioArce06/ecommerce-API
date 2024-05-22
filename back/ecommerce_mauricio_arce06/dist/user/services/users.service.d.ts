import { UserEntity } from '../repository/userRepository';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: UserEntity);
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
