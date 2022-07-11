import { PrismaService } from './../prisma/prisma.service';
import { CacheModule, Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';

@Module({
  imports: [
    CacheModule.register({
      ttl: 20,
      max: 10,
      isGlobal: true,
    }),
  ],
  providers: [MovieService, PrismaService],
  controllers: [MovieController],
})
export class MovieModule {}
