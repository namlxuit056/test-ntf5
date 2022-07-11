import { ShareMovieDto, GetManyMovieDto } from './../dto/movie.dto';
import { CurrentUser } from './../decorator/currentUser.decorator';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import {
  Body,
  Controller,
  Post,
  UseGuards,
  Get,
  Param,
  CacheTTL,
  CacheKey,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '@prisma/client';
import { MovieService } from './movie.service';

@Controller('movies')
@ApiTags('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}
  @Post('/share')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Share movie' })
  @ApiOkResponse({ description: 'Create movie success' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error ' })
  @ApiBadRequestResponse({ description: 'Bad Request Response' })
  share(@Body() movie: ShareMovieDto, @CurrentUser() currentUser: User) {
    return this.movieService.share(movie, currentUser);
  }

  @ApiOperation({ summary: 'Get movies' })
  @ApiOkResponse({ description: 'Get movies success' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error ' })
  @ApiBadRequestResponse({ description: 'Bad Request Response' })
  @CacheKey('share-movie')
  @CacheTTL(20)
  @Get('')
  getMany(@Param() params: GetManyMovieDto) {
    return this.movieService.getMany({ take: params.take, skip: params.skip });
  }
}
