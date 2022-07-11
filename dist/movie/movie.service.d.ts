import { PrismaService } from './../prisma/prisma.service';
import { ShareMovieDto } from './../dto/movie.dto';
import { User } from '@prisma/client';
export declare class MovieService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    share(movie: ShareMovieDto, user: User): Promise<{}>;
    getMany({ take, skip }: {
        take: any;
        skip: any;
    }): Promise<{
        data: {}[];
        count: number;
    }>;
}
