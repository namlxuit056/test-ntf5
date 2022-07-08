import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Match } from 'src/decorator/match.decorator';
import { errMessage } from 'src/message/errMessage';

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
  @IsNumber()
  @MinLength(8)
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
  @IsString()
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
