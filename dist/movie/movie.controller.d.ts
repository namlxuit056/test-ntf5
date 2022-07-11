import { ShareMovieDto, GetManyMovieDto } from './../dto/movie.dto';
import { User } from '@prisma/client';
import { MovieService } from './movie.service';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    share(movie: ShareMovieDto, currentUser: User): Promise<{}>;
    getMany(params: GetManyMovieDto): Promise<{
        data: {}[];
        count: number;
    }>;
}
