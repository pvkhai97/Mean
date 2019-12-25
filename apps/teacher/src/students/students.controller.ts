import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Request,
  Post,
  UseGuards,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { AuthGuard } from '@nestjs/passport';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ThesisService } from '../thesis/thesis.service';

@Controller('students')
@ApiUseTags('students')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class StudentsController {
  constructor(
    private readonly studentService: StudentsService,
    private readonly thesisService: ThesisService,
  ) {}

  @Get()
  async find(): Promise<any> {
    return await this.studentService.find();
  }

  @Get(':id')
  async findById(@Param('id') studentId: string): Promise<any> {
    return await this.studentService.findById(studentId);
  }

  @Get('me')
  async getProfile(@Request() request: any) {
    return await this.studentService.findById(request.user._id);
  }

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto): Promise<any> {
    return await this.studentService.create(createStudentDto);
  }

  @Put(':id')
  async update(
    @Param('id') studentId: string,
    @Body() updateStudentDto: UpdateStudentDto,
  ): Promise<any> {
    return await this.studentService.update(studentId, updateStudentDto);
  }

  @Delete(':id')
  async delete(@Param('id') studentId: string): Promise<any> {
    return await this.studentService.delete(studentId);
  }

  @Get(':id/thesis')
  async findThesisByStudentId(@Param('id') studentId: string): Promise<any> {
    return await this.thesisService.findByStudentId(studentId);
  }
}
