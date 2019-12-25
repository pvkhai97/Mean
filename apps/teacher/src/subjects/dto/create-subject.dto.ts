import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateSubjectDto {
  @IsString()
  @ApiModelProperty()
  name: string;
}
