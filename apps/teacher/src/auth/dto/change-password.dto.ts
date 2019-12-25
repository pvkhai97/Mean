import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ChangePasswordDto {
  @ApiModelProperty()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiModelProperty()
  @IsString()
  @IsNotEmpty()
  newPassword: string;
}
