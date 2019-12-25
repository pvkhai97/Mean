import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subject } from './interfaces/subject.interface';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';

@Injectable()
export class SubjectsService {
  /**
   *
   * @constructor
   * @param subjectModel - The mongoose subject model
   */
  constructor(
    @InjectModel('Subject') private readonly subjectModel: Model<Subject>,
  ) {}

  /**
   *
   * @summary Get a list of subjects
   */
  async find(): Promise<Subject[]> {
    return await this.subjectModel.find().exec();
  }

  /**
   *
   * @summary Get a subject by id
   * @param subjectId - The subject id
   */
  async findById(subjectId: string): Promise<Subject> {
    return await this.subjectModel.findById(subjectId).exec();
  }

  /**
   *
   * @summary Get a list of subjects by department id
   * @param departmentId - The department id
   */
  async findByDepartmentId(departmentId: string): Promise<Subject[]> {
    return await this.subjectModel.find({ department: departmentId }).exec();
  }

  /**
   *
   * @summary Create a new subject
   * @param createSubjectDto - The create subject data transfer object
   */
  async create(createSubjectDto: CreateSubjectDto): Promise<Subject> {
    return await this.subjectModel.create(createSubjectDto);
  }

  /**
   *
   * @summary Update a subject by id
   * @param subjectId - The subject id
   * @param updateSubjectDto - The update subject data transfer object
   */
  async update(
    subjectId: string,
    updateSubjectDto: UpdateSubjectDto,
  ): Promise<Subject> {
    return await this.subjectModel
      .findByIdAndUpdate(subjectId, updateSubjectDto)
      .exec();
  }

  /**
   *
   * @summary Delete a subject by id
   * @param subjectId - The subject id
   */
  async delete(subjectId: string): Promise<Subject> {
    return await this.subjectModel.findByIdAndDelete(subjectId).exec();
  }
}
