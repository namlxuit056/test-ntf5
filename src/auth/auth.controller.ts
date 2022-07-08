import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from 'src/dto/user.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

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
  login(@Request() req) {
    return this.authService.login(req.user);
  }
}