import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CurrentUser } from 'src/decorator/currentUser.decorator';
import { ShareMovieDto } from 'src/dto/movie.dto';
import { MovieService } from './movie.service';

@Controller('movie')
@ApiTags('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}
  @Post('/share')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Share movie' })
  @ApiOkResponse({ description: 'Get user success' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error ' })
  @ApiBadRequestResponse({ description: 'Bad Request Response' })
  login(@Body() movie: ShareMovieDto, @CurrentUser() currentUser: User) {
    return this.movieService.share(movie, currentUser);
  }
}
