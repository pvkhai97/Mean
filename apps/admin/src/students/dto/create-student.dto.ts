import {
  IsEmail,
  IsMobilePhone,
  IsMongoId,
  IsString,
} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @IsString()
  @ApiModelProperty()
  code: string;

  @IsEmail()
  @ApiModelProperty({format: 'email'})
  email: string;

  @IsString()
  @ApiModelProperty()
  fullName: string;

  @IsString()
  @ApiModelProperty({ type: String, format: 'date' })
  dateOfBirth: Date;

  @IsMobilePhone('vi-VN')
  @ApiModelProperty()
  phoneNumber: string;

  @IsMongoId()
  @ApiModelProperty()
  sector: string;
}
