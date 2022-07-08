import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { CreateUserDto } from 'src/dto/user.dto';
import { ShareService } from 'src/share/share.service';
export declare class UserService {
    private readonly prismaService;
    private readonly shareService;
    constructor(prismaService: PrismaService, shareService: ShareService);
    create(user: CreateUserDto): Promise<User>;
}
