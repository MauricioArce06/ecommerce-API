import { AuthService } from 'src/auth/services/auth.service';
import { CredentialDto } from 'src/credential/Dto/credentialDto';
import { CreateUserDto } from 'src/user/userDto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getAuth(): string;
    sing_up(user: CreateUserDto): Promise<import("../../user/user.entity").User>;
    login(credentialDto: CredentialDto): Promise<{
        message: string;
        token: string;
    }> | {
        message: string;
    };
}
