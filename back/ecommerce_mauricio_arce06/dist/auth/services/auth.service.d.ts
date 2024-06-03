import { CredentialDto } from 'src/credential/Dto/credentialDto';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/userDto';
import { UserRepository } from 'src/user/userRepository';
export declare class AuthService {
    private readonly jwtService;
    private readonly UserRepository;
    constructor(jwtService: JwtService, UserRepository: UserRepository);
    getAuth(): string;
    sing_up(user: CreateUserDto): Promise<import("../../user/user.entity").User>;
    login(credentialDto: CredentialDto): Promise<{
        message: string;
        token: string;
    }>;
}
