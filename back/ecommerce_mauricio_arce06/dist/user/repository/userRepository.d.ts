import { userDto } from '../Dto/userDto';
import { CredentialDto } from 'src/credential/Dto/credentialDto';
export declare class UserRepository {
    private users;
    getUser(page: any, limit: any): Promise<{
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
    login(credentialDto: CredentialDto): {
        id: number;
        email: string;
        name: string;
        adress: string;
        phone: string;
        country: string;
        city: string;
    } | {
        message: string;
    };
    updateUser(id: number, toUpdate: userDto): Promise<number | {
        message: string;
    }>;
    deleteUser(id: number): Promise<number>;
}
