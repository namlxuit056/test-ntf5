import { User } from '@prisma/client';
import { CreateUserDto, LoginDto } from 'src/dto/user.dto';
import { UserService } from 'src/user/user.service';
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
