import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiModelProperty({ format: 'email' })
  @IsEmail()
  readonly email: string;

  @ApiModelProperty({format: 'password'})
  @IsString()
  @IsNotEmpty()
  readonly password: string;
}
