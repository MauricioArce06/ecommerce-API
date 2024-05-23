import { AuthService } from 'src/auth/services/auth.service';
import { CredentialDto } from 'src/credential/Dto/credentialDto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
