import { IsEmail, IsMobilePhone, IsMongoId, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateTeacherDto {
  @IsEmail()
  @ApiModelProperty()
  email: string;

  @IsString()
  @ApiModelProperty()
  fullName: string;

  @IsMobilePhone('vi-VN')
  @ApiModelProperty()
  phoneNumber: string;

  @IsMongoId()
  @ApiModelProperty()
  department: string;
}
