import { PrismaService } from './../prisma/prisma.service';
import { GetMovieSelect } from './movie.select';
import { ShareMovieDto } from './../dto/movie.dto';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { Cache } from 'cache-manager';
@Injectable()
export class MovieService {
  constructor(
    private readonly prismaService: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
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
    await this.cacheManager.del('share-movie');
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
