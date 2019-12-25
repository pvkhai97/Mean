import { IsMongoId, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateThesisDto {
  @IsString()
  @ApiModelProperty()
  name: string;

  @IsString()
  @ApiModelProperty()
  description: string;

  @IsMongoId()
  @ApiModelProperty()
  student: string;

  @IsMongoId()
  @ApiModelProperty()
  subject: string;

  @IsString()
  @ApiModelProperty({type: String, format: 'date-time' })
  deadline: string;
}
