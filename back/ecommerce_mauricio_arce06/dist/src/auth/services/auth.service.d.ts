import { CredentialDto } from 'src/credential/Dto/credentialDto';
import { UserRepository } from '../../user/repository/userRepository';
import { CreateUserDto } from 'src/user/Dto/userDto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly jwtService;
    private readonly UserRepository;
    constructor(jwtService: JwtService, UserRepository: UserRepository);
    getAuth(): string;
    sing_up(user: CreateUserDto): Promise<import("../../user/Entities/user.entity").User>;
    login(credentialDto: CredentialDto): Promise<{
        message: string;
        token: string;
    }>;
}
