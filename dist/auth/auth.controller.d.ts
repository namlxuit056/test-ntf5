import { CreateUserDto, LoginDto } from 'src/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UserService);
    create(user: CreateUserDto): Promise<import(".prisma/client").User>;
    login(user: LoginDto): Promise<{
        access_token: string;
    }>;
}
