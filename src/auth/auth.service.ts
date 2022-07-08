import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from 'src/dto/user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser({ email, password }: LoginDto): Promise<any> {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });
    if (!user) return null;

    const valid = await bcrypt.compare(password, user.password);
    if (user && valid) {
      delete user.password;

      return user;
    }
    return null;
  }

  async login(user: any) {
    if (!user) throw new UnauthorizedException();
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload, {
        secret: process.env.SECRET,
      }),
    };
  }
}
