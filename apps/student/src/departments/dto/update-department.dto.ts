import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsMobilePhone, IsPhoneNumber, IsString } from 'class-validator';

export class UpdateDepartmentDto {
  @ApiModelProperty()
  @IsString()
  name?: string;

  @ApiModelPropertyOptional()
  @IsMobilePhone('vi-VN')
  phoneNumber?: string;
}
