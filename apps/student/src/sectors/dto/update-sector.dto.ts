import { IsMongoId, IsOptional, IsString } from 'class-validator';
import { ApiModelPropertyOptional } from '@nestjs/swagger';

export class UpdateSectorDto {
  @IsString()
  @IsOptional()
  @ApiModelPropertyOptional()
  name?: string;

  @IsMongoId()
  @IsOptional()
  @ApiModelPropertyOptional()
  department?: string;
}
