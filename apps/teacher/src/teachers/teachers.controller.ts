import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
  Request,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { TeachersService } from './teachers.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { AuthGuard } from '@nestjs/passport';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { ThesisService } from '../thesis/thesis.service';

@Controller('teachers')
@ApiUseTags('teachers')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class TeachersController {
  constructor(
    private readonly teacherService: TeachersService,
    private readonly thesisService: ThesisService,
  ) {}

  @Get()
  async find(): Promise<any> {
    return await this.teacherService.find();
  }

  @Post()
  async create(@Body() createTeacherDto: CreateTeacherDto): Promise<any> {
    return await this.teacherService.create(createTeacherDto);
  }

  @Put(':id')
  async update(
    @Param('id') teacherId: string,
    @Body() updateTeacherDto: UpdateTeacherDto,
  ) {
    return await this.teacherService.update(teacherId, updateTeacherDto);
  }

  @Delete(':id')
  async delete(@Param('id') teacherId: string): Promise<any> {
    return await this.teacherService.delete(teacherId);
  }

  @Get(':id/thesis')
  async findThesisByTeacherId(@Param('id') teacherId: string): Promise<any> {
    return await this.thesisService.findByTeacherId(teacherId);
  }

  @Get('me')
  async getProfile(@Request() request: any): Promise<any> {
    return await this.teacherService.findById(request.user._id);
  }
}
