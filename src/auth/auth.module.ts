import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ShareService } from 'src/share/share.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: { expiresIn: process.env.TIME_EXPIRE_TOKEN },
    }),
  ],
  providers: [
    AuthService,
    JwtAuthGuard,
    UserService,
    PrismaService,
    ShareService,
    JwtStrategy,
  ],
  controllers: [AuthController],
  exports: [AuthModule],
})
export class AuthModule {}
