import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { AuthGuard } from '@nestjs/passport';
import { ThesisService } from '../thesis/thesis.service';

@Controller('subjects')
@UseGuards(AuthGuard('jwt'))
@ApiUseTags('subjects')
@ApiBearerAuth()
export class SubjectsController {
  /**
   *
   * @constructor
   * @param subjectsService
   * @param thesisService
   */
  constructor(
    private readonly subjectsService: SubjectsService,
    private readonly thesisService: ThesisService,
  ) {}

  /**
   *
   * @summary Response a list of subjects
   */
  @Get()
  async find(): Promise<any> {
    return await this.subjectsService.find();
  }

  /**
   *
   * @summary Response a subject by id
   * @param subjectId - The subject id
   */
  @Get(':id')
  async findById(@Param('id') subjectId: string): Promise<any> {
    return await this.subjectsService.findById(subjectId);
  }

  /**
   *
   * @summary Create a new subject
   * @param createSubjectDto - The create subject data transfer object
   */
  @Post()
  async create(@Body() createSubjectDto: CreateSubjectDto): Promise<any> {
    return await this.subjectsService.create(createSubjectDto);
  }

  /**
   *
   * @summary Update a subject by id
   * @param subjectId - The subject id
   * @param updateSubjectDto - The update subject data transfer object
   */
  @Put(':id')
  async update(
    @Param('id') subjectId: string,
    @Body() updateSubjectDto: UpdateSubjectDto,
  ): Promise<any> {
    return await this.subjectsService.update(subjectId, updateSubjectDto);
  }

  /**
   * @summary Delete a subject by id
   * @param subjectId - The subject id
   */
  @Delete(':id')
  async delete(@Param('id') subjectId: string): Promise<any> {
    return await this.subjectsService.delete(subjectId);
  }

  @Get(':id/thesis')
  async findThesisBySubjectId(@Param('id') subjectId: string): Promise<any> {
    return await this.thesisService.findBySubjectId(subjectId);
  }
}
