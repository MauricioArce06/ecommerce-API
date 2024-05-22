import { AuthService } from 'src/auth/services/auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getAuth(): string;
}
