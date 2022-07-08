import { GetMovieSelect } from './movie.select';
import { ShareMovieDto } from './../dto/movie.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class MovieService {
  constructor(private readonly prismaService: PrismaService) {}
  async share(movie: ShareMovieDto, user: User) {
    const created = await this.prismaService.movie.create({
      data: {
        url: movie.url,
        title: movie.title,
        desc: movie.desc,
        authorId: user.id,
      },
      select: GetMovieSelect,
    });
    return created;
  }
  async getMany({ take, skip }) {
    const movies = await this.prismaService.movie.findMany({
      take,
      skip,
      select: GetMovieSelect,
      orderBy: { updatedAt: 'desc' },
    });

    const count = await this.prismaService.movie.count();

    return { data: movies, count };
  }
}
