import { CreateUserDto } from './../dto/user.dto';
import { ShareService } from './../share/share.service';
import { PrismaService } from './../prisma/prisma.service';
import { User } from '@prisma/client';
export declare class UserService {
    private readonly prismaService;
    private readonly shareService;
    constructor(prismaService: PrismaService, shareService: ShareService);
    create(user: CreateUserDto): Promise<User>;
}
