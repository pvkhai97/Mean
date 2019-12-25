import {
  IsDateString,
  IsInt,
  IsMongoId,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiModelPropertyOptional } from '@nestjs/swagger';

export class UpdateThesisDto {
  @IsString()
  @IsOptional()
  @ApiModelPropertyOptional()
  name?: string;

  @IsString()
  @IsOptional()
  @ApiModelPropertyOptional()
  description?: string;

  @IsMongoId()
  @IsOptional()
  @ApiModelPropertyOptional()
  student?: string;

  @IsMongoId()
  @IsOptional()
  @ApiModelPropertyOptional()
  teacher?: string;

  @IsMongoId()
  @IsOptional()
  @ApiModelPropertyOptional()
  subject?: string;

  @IsDateString()
  @IsOptional()
  @ApiModelPropertyOptional({ type: String, format: 'date-time' })
  deadline?: Date;

  @IsNumber()
  @IsOptional()
  @ApiModelPropertyOptional()
  score?: number;
}
