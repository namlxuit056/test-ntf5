import { User } from '@prisma/client';
import { GetManyMovieDto, ShareMovieDto } from 'src/dto/movie.dto';
import { MovieService } from './movie.service';
export declare class MovieController {
    private readonly movieService;
    constructor(movieService: MovieService);
    login(movie: ShareMovieDto, currentUser: User): Promise<{}>;
    getMany(params: GetManyMovieDto): Promise<{
        data: {}[];
        count: number;
    }>;
}
