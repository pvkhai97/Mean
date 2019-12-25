import { IsEmail, IsMobilePhone, IsOptional, IsString } from 'class-validator';
import { ApiModelPropertyOptional } from '@nestjs/swagger';

export class UpdateAdminDto {
  @IsEmail()
  @IsOptional()
  @ApiModelPropertyOptional()
  email: string;

  @IsString()
  @IsOptional()
  @ApiModelPropertyOptional()
  password: string;

  @IsString()
  @IsOptional()
  @ApiModelPropertyOptional()
  fullName: string;

  @IsMobilePhone('vi-VN')
  @IsOptional()
  @ApiModelPropertyOptional()
  phoneNumber: string;
}
