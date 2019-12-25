import { IsEmail, IsMobilePhone, IsNotEmpty, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateAdminDto {
  @IsEmail()
  @ApiModelProperty({format: 'email'})
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiModelProperty({format: 'password'})
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiModelProperty()
  fullName: string;

  @IsMobilePhone('vi-VN')
  @ApiModelProperty()
  phoneNumber: string;
}
