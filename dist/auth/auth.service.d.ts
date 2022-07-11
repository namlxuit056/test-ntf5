import { LoginDto } from './../dto/user.dto';
import { UserService } from './../user/user.service';
import { PrismaService } from './../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
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
