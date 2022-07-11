import { PrismaService } from './../prisma/prisma.service';
import { ShareMovieDto } from './../dto/movie.dto';
import { User } from '@prisma/client';
import { Cache } from 'cache-manager';
export declare class MovieService {
    private readonly prismaService;
    private cacheManager;
    constructor(prismaService: PrismaService, cacheManager: Cache);
    share(movie: ShareMovieDto, user: User): Promise<{}>;
    getMany({ take, skip }: {
        take: any;
        skip: any;
    }): Promise<{
        data: {}[];
        count: number;
    }>;
}
