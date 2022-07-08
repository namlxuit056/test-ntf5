import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ShareMovieDto {
  @IsString()
  @ApiProperty({
    type: 'string',
    example: '',
    required: true,
  })
  url: string;
}
