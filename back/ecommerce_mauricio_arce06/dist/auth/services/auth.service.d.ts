import { CredentialDto } from 'src/credential/Dto/credentialDto';
import { UserRepository } from '../../user/repository/userRepository';
export declare class AuthService {
    private readonly UserRepository;
    constructor(UserRepository: UserRepository);
    getAuth(): string;
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
}
