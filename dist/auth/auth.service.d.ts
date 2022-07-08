import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/dto/user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AuthService {
    private prismaService;
    private readonly jwtService;
    constructor(prismaService: PrismaService, jwtService: JwtService);
    validateUser({ email, password }: LoginDto): Promise<any>;
    login(email: any, password: any): Promise<{
        access_token: string;
    }>;
}
