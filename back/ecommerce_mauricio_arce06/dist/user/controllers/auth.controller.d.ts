import { AuthService } from 'src/user/services/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getAuth(): string;
}
