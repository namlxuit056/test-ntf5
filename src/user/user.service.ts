import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { errMessage } from 'src/message/errMessage';
import { User } from '@prisma/client';
import { CreateUserDto } from 'src/dto/user.dto';
import { ShareService } from 'src/share/share.service';

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly shareService: ShareService,
  ) {}

  async create(user: CreateUserDto): Promise<User> {
    const userExist = await this.prismaService.user.findUnique({
      where: { email: user.email },
    });

    if (userExist)
      throw new HttpException(errMessage.auth.exist, HttpStatus.BAD_REQUEST);

    const password = await this.shareService.hashPassword(user.password);

    const created = await this.prismaService.user.create({
      data: {
        ...user,
        password,
      },
    });

    delete created.password;

    return created;
  }
}
