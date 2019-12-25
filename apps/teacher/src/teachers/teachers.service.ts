import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Teacher } from './interfaces/teacher.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

@Injectable()
export class TeachersService {
  constructor(
    @InjectModel('Teacher') private readonly teacherModel: Model<Teacher>,
  ) {}

  async find(): Promise<Teacher[]> {
    return await this.teacherModel
      .find()
      .populate('department')
      .exec();
  }

  async findById(teacherId: string): Promise<Teacher> {
    return await this.teacherModel.findById(teacherId).populate('department').exec();
  }

  async findByEmail(email: string): Promise<Teacher> {
    return await this.teacherModel.findOne({ email }).exec();
  }

  async create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    return await this.teacherModel.create({
      ...createTeacherDto,
      password: createTeacherDto.email,
    });
  }

  async update(teacherId: string, updateTeacherDto: UpdateTeacherDto) {
    return await this.teacherModel.update(teacherId, updateTeacherDto).exec();
  }

  async delete(teacherId: string): Promise<Teacher> {
    return await this.teacherModel.findByIdAndDelete(teacherId).exec();
  }

  async findByDepartmentId(departmentId: string): Promise<Teacher[]> {
    return await this.teacherModel.find({ department: departmentId }).exec();
  }
}
