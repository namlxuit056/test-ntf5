import { errMessage } from './../message/errMessage';
import { CreateUserDto } from './../dto/user.dto';
import { ShareService } from './../share/share.service';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { User } from '@prisma/client';
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
        email: user.email,
        password,
      },
    });

    delete created.password;

    return created;
  }
}
