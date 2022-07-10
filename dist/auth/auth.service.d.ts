import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/dto/user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private prismaService;
    private readonly jwtService;
    private readonly userService;
    constructor(prismaService: PrismaService, jwtService: JwtService, userService: UserService);
    validateUser({ email, password }: LoginDto): Promise<any>;
    login(email: any, password: any): Promise<{
        access_token: string;
    }>;
    profile(user: any): Promise<import(".prisma/client").User>;
}
