import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Department } from './interfaces/department.interface';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentsService {
  /**
   *
   * @constructor
   * @param departmentModel - The mongoose department model
   */
  constructor(
    @InjectModel('Department') private readonly departmentModel: Model<Department>,
  ) {}

  /**
   *
   * @summary Get a list of departments
   */
  async find(): Promise<Department[]> {
    return await this.departmentModel.find().exec();
  }

  /**
   *
   * @summary Get a department by id
   * @param departmentId - The department id
   */
  async findById(departmentId: string): Promise<Department> {
    return await this.departmentModel.findById(departmentId).exec();
  }

  /**
   *
   * @summary Get a list of departments by department id
   * @param departmentId - The department id
   */
  async findByDepartmentId(departmentId: string): Promise<Department[]> {
    return await this.departmentModel.find({ department: departmentId }).exec();
  }

  /**
   *
   * @summary Create a new department
   * @param createDepartmentDto - The create department data transfer object
   */
  async create(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
    return await this.departmentModel.create(createDepartmentDto);
  }

  /**
   *
   * @summary Update a department by id
   * @param departmentId - The department id
   * @param updateDepartmentDto - The update department data transfer object
   */
  async update(
    departmentId: string,
    updateDepartmentDto: UpdateDepartmentDto,
  ): Promise<Department> {
    return await this.departmentModel
      .findByIdAndUpdate(departmentId, updateDepartmentDto)
      .exec();
  }

  /**
   *
   * @summary Delete a department by id
   * @param departmentId - The department id
   */
  async delete(departmentId: string): Promise<Department> {
    return await this.departmentModel.findByIdAndDelete(departmentId).exec();
  }
}
