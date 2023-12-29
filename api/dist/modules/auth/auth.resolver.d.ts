import { AuthService } from './auth.service';
import { AuthInput } from './dto/auth.input';
import { RefreshInput } from './dto/refresh.input';
export declare class AuthResolver {
    private readonly service;
    constructor(service: AuthService);
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
