import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class ShareMovieDto {
  @IsString()
  @ApiProperty({
    type: 'string',
    example: '',
    required: true,
  })
  url: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    type: 'string',
    example: '',
    required: false,
  })
  title: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    type: 'string',
    example: '',
    required: false,
  })
  desc: string;
}
export class GetManyMovieDto {
  @IsInt()
  @Min(0)
  @Max(100)
  @ApiProperty({
    type: 'number',
    example: 10,
    required: false,
  })
  @Transform((take) => Number(take))
  take = 10;

  @IsInt()
  @ApiProperty({
    type: 'number',
    example: 0,
    required: false,
  })
  @Transform((skip) => Number(skip))
  skip?: number = 0;
}
