import { CreateUserDto, LoginDto } from './../dto/user.dto';
import { UserService } from './../user/user.service';
import { User } from '@prisma/client';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UserService);
    getProfile(currentUser: User): Promise<User>;
    create(user: CreateUserDto): Promise<User>;
    login(user: LoginDto): Promise<{
        access_token: string;
    }>;
}
