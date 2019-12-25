import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Admin } from './interfaces/admin.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminsService {
  constructor(
    @InjectModel('Admin') private readonly adminModel: Model<Admin>,
  ) {}

  async find(): Promise<Admin[]> {
    return await this.adminModel.find().exec();
  }

  async findById(adminId: string): Promise<Admin> {
    return await this.adminModel.findById(adminId).exec();
  }

  async findByEmail(email: string): Promise<Admin> {
    return await this.adminModel.findOne({ email }).exec();
  }

  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    return await this.adminModel.create(createAdminDto);
  }

  async update(
    adminId: string,
    updateAdminDto: UpdateAdminDto,
  ): Promise<Admin> {
    return await this.adminModel
      .findOneAndUpdate(adminId, updateAdminDto)
      .exec();
  }

  async delete(adminId: string): Promise<Admin> {
    return await this.adminModel.findByIdAndDelete(adminId).exec();
  }
}
