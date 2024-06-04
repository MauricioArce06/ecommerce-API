import { CredentialDto } from 'src/credential/Dto/credentialDto';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/Dto/userDto';
import { UserRepository } from 'src/user/repository/userRepository';
export declare class AuthService {
    private readonly jwtService;
    private readonly UserRepository;
    constructor(jwtService: JwtService, UserRepository: UserRepository);
    getAuth(): string;
    sing_up(user: CreateUserDto): Promise<import("../../user/entity/user.entity").User>;
    login(credentialDto: CredentialDto): Promise<{
        message: string;
        token: string;
    }>;
}
