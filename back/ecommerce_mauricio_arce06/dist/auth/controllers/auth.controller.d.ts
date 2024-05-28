import { AuthService } from 'src/auth/services/auth.service';
import { CredentialDto } from 'src/credential/Dto/credentialDto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getAuth(): string;
    login(credentialDto: CredentialDto): any;
}
