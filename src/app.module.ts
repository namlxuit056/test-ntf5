import { PrismaService } from './prisma/prisma.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ShareService } from './share/share.service';
import { ShareModule } from './share/share.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user/user.service';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [
    PrismaModule,
    ShareModule,
    AuthModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    MovieModule,
  ],
  controllers: [AppController, AuthController],
  providers: [
    AppService,
    ShareService,
    AuthService,
    PrismaService,
    JwtService,
    UserService,
  ],
})
export class AppModule {}
