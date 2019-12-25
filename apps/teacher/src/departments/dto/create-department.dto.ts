import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import {
  IsMobilePhone,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateDepartmentDto {
  @ApiModelProperty()
  @IsString()
  name: string;

  @ApiModelPropertyOptional()
  @IsOptional()
  @IsMobilePhone('vi-VN')
  phoneNumber: string;
}
