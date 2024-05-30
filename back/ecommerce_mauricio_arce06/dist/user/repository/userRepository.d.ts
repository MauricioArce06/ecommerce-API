import { CreateHashedUserDto, CreateUserDto } from '../Dto/userDto';
import { CredentialDto } from 'src/credential/Dto/credentialDto';
import { User } from '../Entities/user.entity';
import { Repository } from 'typeorm';
export declare class UserRepository {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    getUser(page: any, limit: any): Promise<User[]>;
    getUserById(id: string): Promise<User>;
    postUser(user: Omit<CreateHashedUserDto, 'confirmPassword'>): Promise<User>;
    login(credentialDto: CredentialDto): Promise<User>;
    updateUser(id: string, toUpdate: CreateUserDto): Promise<string | {
        message: string;
    }>;
    deleteUser(id: string): Promise<string | {
        message: string;
    }>;
}
