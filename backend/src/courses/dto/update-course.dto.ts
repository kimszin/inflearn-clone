import { PartialType } from '@nestjs/swagger';
import { CreateCourseDto } from './create-course.dto';
import {
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
  IsArray,
  IsUUID,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  //  프론트에서 넣는게 아니라 백엔드에서 심는 방식
  //   @ApiProperty({ description: '코스 슬러그(URL에 사용됨)' })
  //   @IsString()
  //   slug: string;

  @ApiProperty({ description: '코스 1~2줄 짧은 설명', required: false })
  @IsString()
  @IsOptional()
  shortDescription?: string;

  @ApiProperty({ description: '코스 상세페이지 설명', required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: '썸네일 이미지 URL', required: false })
  @IsString()
  @IsOptional()
  thumbnailUrl?: string;

  @ApiProperty({ description: '코스 가격', required: false })
  @IsNumber()
  price: number;

  @ApiProperty({ description: '코스 할인 가격', required: false })
  @IsNumber()
  @IsOptional()
  discountPrice?: number;

  @ApiProperty({ description: '코스 난이도', required: false })
  @IsString()
  @IsOptional()
  level?: string;

  @ApiProperty({ description: '코스 게시 여부', required: false })
  @IsBoolean()
  @IsOptional()
  isPublished?: boolean;

  @ApiProperty({ description: '코스 카테고리 ID 목록', required: false })
  @IsArray()
  @IsUUID(undefined, { each: true })
  @IsOptional()
  categoryIds?: string[];
}
