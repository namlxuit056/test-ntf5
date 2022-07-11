import { CreateUserDto, LoginDto } from './../dto/user.dto';
import { CurrentUser } from './../decorator/currentUser.decorator';
import { UserService } from './../user/user.service';
import { Body, Controller, Post, UseGuards, Get } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '@prisma/client';

import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  @ApiBearerAuth()
  getProfile(@CurrentUser() currentUser: User) {
    console.log(currentUser);
    return this.authService.profile(currentUser);
  }

  @Post('/signup')
  @ApiOperation({ summary: 'Sign up ' })
  @ApiOkResponse({ description: 'Get user success' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error ' })
  @ApiBadRequestResponse({ description: 'Bad Request Response' })
  create(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

  @Post('/login')
  @ApiOperation({ summary: 'Login' })
  @ApiOkResponse({ description: 'Get user success' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error ' })
  @ApiBadRequestResponse({ description: 'Bad Request Response' })
  login(@Body() user: LoginDto) {
    return this.authService.login(user.email, user.password);
  }
}
