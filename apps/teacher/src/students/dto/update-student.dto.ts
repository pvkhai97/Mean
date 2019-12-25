import {
  IsEmail,
  IsMobilePhone,
  IsMongoId,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiModelPropertyOptional } from '@nestjs/swagger';

export class UpdateStudentDto {
  @IsString()
  @IsOptional()
  @ApiModelPropertyOptional()
  code: string;

  @IsEmail()
  @IsOptional()
  @ApiModelPropertyOptional()
  email: string;

  @IsString()
  @IsOptional()
  @ApiModelPropertyOptional()
  fullName: string;

  @IsString()
  @IsOptional()
  @ApiModelPropertyOptional({ type: String, format: 'date' })
  dateOfBirth: Date;

  @IsMobilePhone('vi-VN')
  @IsOptional()
  @ApiModelPropertyOptional()
  phoneNumber: string;

  @IsMongoId()
  @IsOptional()
  @ApiModelPropertyOptional()
  sector: string;
}
