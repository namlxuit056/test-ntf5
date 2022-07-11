import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';

@Module({
  providers: [MovieService, PrismaService],
  controllers: [MovieController],
})
export class MovieModule {}
