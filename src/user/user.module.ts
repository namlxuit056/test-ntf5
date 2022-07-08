import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { ShareService } from 'src/share/share.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  imports: [PrismaModule],
  providers: [UserService, ShareService, PrismaService],
  controllers: [UserController],
  exports: [UserModule],
})
export class UserModule {}
