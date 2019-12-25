import { IsMongoId, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateSectorDto {
  @IsString()
  @ApiModelProperty()
  name: string;

  @IsMongoId()
  @ApiModelProperty()
  department: string;
}
