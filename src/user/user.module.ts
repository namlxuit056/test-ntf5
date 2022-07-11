import { ShareService } from './../share/share.service';
import { PrismaModule } from './../prisma/prisma.module';
import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
@Module({
  imports: [PrismaModule],
  providers: [UserService, ShareService, PrismaService],
  controllers: [UserController],
  exports: [UserModule],
})
export class UserModule {}
