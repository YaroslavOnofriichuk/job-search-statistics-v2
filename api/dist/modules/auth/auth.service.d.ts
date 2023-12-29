import { AuthInput } from './dto/auth.input';
import { RefreshInput } from './dto/refresh.input';
import { User } from '../../entities/user/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<User>, jwtService: JwtService);
    register(authInput: AuthInput): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    login(authInput: AuthInput): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    refresh(refreshInput: RefreshInput): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
