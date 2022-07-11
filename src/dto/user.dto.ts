import { errMessage } from './../message/errMessage';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Match } from '../decorator/match.decorator';

export class CreateUserDto {
  @IsEmail()
  @IsString()
  @ApiProperty({
    type: 'string',
    example: '',
    required: true,
  })
  email: string;

  @ApiProperty({
    type: 'string',
    example: '',
    required: true,
  })
  @MinLength(8, { message: errMessage.auth.shortPassword })
  @IsNumber()
  @MaxLength(20)
  password: string;

  @IsNumber()
  @MinLength(8, { message: errMessage.auth.shortPassword })
  @MaxLength(20)
  @Match('password')
  @ApiProperty({
    type: 'string',
    example: '',
    required: true,
  })
  passwordConfirm: string;
}

export class LoginDto {
  @IsEmail()
  @ApiProperty({
    type: 'string',
    example: '',
    required: true,
  })
  email: string;

  @IsString()
  @ApiProperty({
    type: 'string',
    example: '',
    required: true,
  })
  password: string;
}
