import { IsOptional, IsString } from 'class-validator';
import { ApiModelPropertyOptional } from '@nestjs/swagger';

export class UpdateSubjectDto {
  @IsString()
  @IsOptional()
  @ApiModelPropertyOptional()
  name?: string;
}
