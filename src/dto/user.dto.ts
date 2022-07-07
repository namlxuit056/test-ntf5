import {
  IsEmail,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Match } from 'src/decorator/match.decorator';

export class CreateUserDto {
  @IsEmail()
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
    required: false,
  })
  @ApiPropertyOptional()
  username: string;

  @IsString()
  @ApiProperty({
    type: 'string',
    example: '',
    required: false,
  })
  @ApiPropertyOptional()
  fullname: string;

  @ApiProperty({
    type: 'string',
    example: '',
    required: true,
  })
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @IsString()
  @MinLength(4)
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
  username: string;

  @IsString()
  @ApiProperty({
    type: 'string',
    example: '',
    required: true,
  })
  password: string;
}
