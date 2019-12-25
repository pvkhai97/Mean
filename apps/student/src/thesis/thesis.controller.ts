import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put, Request, UploadedFile,
  UseGuards, UseInterceptors,
} from '@nestjs/common';
import { ThesisService } from './thesis.service';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { Thesis } from './interfaces/thesis.interface';
import { AuthGuard } from '@nestjs/passport';
import { CreateThesisDto } from './dto/create-thesis.dto';
import { UpdateThesisDto } from './dto/update-thesis.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('thesis')
@UseGuards(AuthGuard('jwt'))
@ApiUseTags('thesis')
@ApiBearerAuth()
export class ThesisController {
  constructor(private readonly thesisService: ThesisService) {}

  @Get()
  async find(): Promise<Thesis[]> {
    return await this.thesisService.find();
  }

  @Post()
  async create(@Body() createThesisDto: CreateThesisDto): Promise<Thesis> {
    return await this.thesisService.create(createThesisDto);
  }

  @Put(':id')
  async update(
    @Param('id') thesisId: string,
    @Body() updateThesisDto: UpdateThesisDto,
  ): Promise<Thesis> {
    return await this.thesisService.update(thesisId, updateThesisDto);
  }

  @Delete(':id')
  async delete(@Param('id') thesisId: string): Promise<Thesis> {
    return await this.thesisService.delete(thesisId);
  }

  @Post(':id/upload')
  @UseInterceptors(FileInterceptor('attached'))
  public async uploadFile(
    @Param('id') thesisId: string,
    @UploadedFile() file: any,
  ): Promise<any> {
    return await this.thesisService.updateAttached(thesisId, file.filename);
  }

  @Get('me')
  public async getThesisMe(@Request() request: any): Promise<any> {
    return await this.thesisService.findByStudentId(request.user._id);
  }
}
