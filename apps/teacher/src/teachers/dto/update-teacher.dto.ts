import {
  IsEmail,
  IsMobilePhone,
  IsMongoId,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiModelPropertyOptional } from '@nestjs/swagger';

export class UpdateTeacherDto {
  @IsEmail()
  @IsOptional()
  @ApiModelPropertyOptional()
  email: string;

  @IsString()
  @IsOptional()
  @ApiModelPropertyOptional()
  fullName: string;

  @IsMobilePhone('vi-VN')
  @IsOptional()
  @ApiModelPropertyOptional()
  phoneNumber: string;

  @IsMongoId()
  @IsOptional()
  @ApiModelPropertyOptional()
  department: string;
}
