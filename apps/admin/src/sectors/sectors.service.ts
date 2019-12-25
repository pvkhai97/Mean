import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sector } from './interfaces/sector.interface';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';

@Injectable()
export class SectorsService {
  /**
   *
   * @constructor
   * @param sectorModel - The mongoose sector model
   */
  constructor(
    @InjectModel('Sector') private readonly sectorModel: Model<Sector>,
  ) {}

  /**
   *
   * @summary Get a list of sectors
   */
  async find(): Promise<Sector[]> {
    return await this.sectorModel.find().populate('department').exec();
  }

  /**
   *
   * @summary Create a new sector
   * @param createSectorDto - The create sector data transfer object
   */
  async create(createSectorDto: CreateSectorDto): Promise<Sector> {
    return await this.sectorModel.create(createSectorDto);
  }

  /**
   *
   * @summary Update a sector by id
   * @param sectorId - The sector id
   * @param updateSectorDto - The update sector data transfer object
   */
  async update(
    sectorId: string,
    updateSectorDto: UpdateSectorDto,
  ): Promise<Sector> {
    return await this.sectorModel
      .findByIdAndUpdate(sectorId, updateSectorDto)
      .exec();
  }

  /**
   *
   * @summary Delete a sector by id
   * @param sectorId - The sector id
   */
  async delete(sectorId: string): Promise<Sector> {
    return await this.sectorModel.findByIdAndDelete(sectorId).exec();
  }

  /**
   *
   * @summary Get a sector by id
   * @param sectorId - The sector id
   */
  async findById(sectorId: string): Promise<Sector> {
    return await this.sectorModel.findById(sectorId).exec();
  }

  async findByDepartmentId(departmentId: string): Promise<Sector[]> {
    return await this.sectorModel.find({ department: departmentId }).exec();
  }
}
