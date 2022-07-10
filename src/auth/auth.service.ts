import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from 'src/dto/user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async validateUser({ email, password }: LoginDto): Promise<any> {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    const valid = await bcrypt.compare(password, user.password);
    if (user && valid) {
      delete user.password;

      return user;
    }
    return null;
  }

  async login(email, password) {
    let user = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (!user) {
      user = await this.userService.create({
        email,
        password,
        passwordConfirm: password,
      });
    } else {
      user = await this.validateUser({ email, password });
    }
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: process.env.SECRET,
      }),
    };
  }

  async profile(user) {
    const profile = await this.prismaService.user.findUnique({
      where: { id: user.id },
    });
    delete profile.password;
    return profile;
  }
}
