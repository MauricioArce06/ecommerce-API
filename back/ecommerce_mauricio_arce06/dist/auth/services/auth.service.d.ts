import { CredentialDto } from 'src/credential/Dto/credentialDto';
import { UserRepository } from '../../user/repository/userRepository';
export declare class AuthService {
    private readonly UserRepository;
    constructor(UserRepository: UserRepository);
    getAuth(): string;
    login(credentialDto: CredentialDto): any;
}
