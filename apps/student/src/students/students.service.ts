import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Student } from './interfaces/student.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel('Student') private readonly studentModel: Model<Student>,
  ) {}

  async find(): Promise<Student[]> {
    return await this.studentModel
      .find()
      .populate('sector')
      .exec();
  }

  async findById(studentId: string): Promise<Student> {
    return await this.studentModel.findById(studentId).populate('sector').exec();
  }

  async findByEmail(email: string): Promise<Student> {
    return await this.studentModel.findOne({ email }).exec();
  }

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    return await this.studentModel.create({
      ...createStudentDto,
      password: createStudentDto.email,
    });
  }

  async update(
    studentId: string,
    updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    return await this.studentModel
      .findOneAndUpdate(studentId, updateStudentDto)
      .exec();
  }

  async delete(studentId: string): Promise<Student> {
    return await this.studentModel.findByIdAndDelete(studentId).exec();
  }

  async findBySectorId(sectorId: string): Promise<Student[]> {
    return await this.studentModel.find({ sector: sectorId }).exec();
  }
}
