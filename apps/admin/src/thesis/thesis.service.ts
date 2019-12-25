import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Thesis } from './interfaces/thesis.interface';
import { CreateThesisDto } from './dto/create-thesis.dto';
import { UpdateThesisDto } from './dto/update-thesis.dto';

@Injectable()
export class ThesisService {
  constructor(
    @InjectModel('Thesis') private readonly thesisModel: Model<Thesis>,
  ) {}

  /**
   *
   * @summary Get a list of thesis
   */
  async find(): Promise<Thesis[]> {
    return await this.thesisModel
      .find()
      .populate('teacher')
      .populate('student')
      .populate('subject')
      .exec();
  }

  /**
   *
   * @summary Create a new thesis
   * @param createThesisDto - Create thesis data transfer object
   */
  async create(createThesisDto: CreateThesisDto): Promise<Thesis> {
    return await this.thesisModel.create(createThesisDto);
  }

  /**
   *
   * @summary Update a thesis by id
   * @param thesisId - Thesis id
   * @param updateThesisDto - Update thesis data transfer object
   */
  async update(
    thesisId: string,
    updateThesisDto: UpdateThesisDto,
  ): Promise<Thesis> {
    return await this.thesisModel
      .findByIdAndUpdate(thesisId, updateThesisDto)
      .exec();
  }

  /**
   *
   * @summary Delete a thesis by id
   * @param thesisId - Thesis id
   */
  async delete(thesisId: string): Promise<Thesis> {
    return await this.thesisModel.findByIdAndDelete(thesisId).exec();
  }

  async findById(thesisId: string): Promise<Thesis> {
    return await this.thesisModel.findById(thesisId).exec();
  }

  async findByStudentId(studentId: string): Promise<Thesis[]> {
    return await this.thesisModel.find({ student: studentId }).exec();
  }

  async findByTeacherId(teacherId: string): Promise<Thesis[]> {
    return await this.thesisModel.find({ teacher: teacherId }).exec();
  }

  async findBySubjectId(subjectId: string): Promise<Thesis[]> {
    return await this.thesisModel.find({ subject: subjectId }).exec();
  }

  public async updateAttached(
    thesisId: string,
    attached: string,
  ): Promise<any> {
    return await this.thesisModel
      .findByIdAndUpdate(thesisId, { attached }, { new: true })
      .exec();
  }
}
