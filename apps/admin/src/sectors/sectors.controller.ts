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
import { SectorsService } from './sectors.service';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { Sector } from './interfaces/sector.interface';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';
import { AuthGuard } from '@nestjs/passport';
import { Student } from '../students/interfaces/student.interface';
import { StudentsService } from '../students/students.service';

@Controller('sectors')
@UseGuards(AuthGuard('jwt'))
@ApiUseTags('sectors')
@ApiBearerAuth()
export class SectorsController {
  /**
   *
   * @constructor
   * @param sectorsService
   * @param studentsService
   */
  constructor(
    private readonly sectorsService: SectorsService,
    private readonly studentsService: StudentsService,
  ) {}

  /**
   *
   * @summary Response a list of sectors
   */
  @Get()
  async find(): Promise<Sector[]> {
    return await this.sectorsService.find();
  }

  /**
   *
   * @summary Response a sector by id
   * @param sectorId - The sector id
   */
  @Get(':id')
  async findById(@Param('id') sectorId: string): Promise<Sector> {
    return await this.sectorsService.findById(sectorId);
  }

  /**
   *
   * @summary Create a new sector
   * @param createSectorDto - The create sector data transfer object
   */
  @Post()
  async create(@Body() createSectorDto: CreateSectorDto): Promise<Sector> {
    return await this.sectorsService.create(createSectorDto);
  }

  /**
   *
   * @summary Update a sector by id
   * @param sectorId - The sector id
   * @param updateSectorDto - The update sector data transfer object
   */
  @Put(':id')
  async update(
    @Param('id') sectorId: string,
    @Body() updateSectorDto: UpdateSectorDto,
  ): Promise<Sector> {
    return await this.sectorsService.update(sectorId, updateSectorDto);
  }

  /**
   * @summary Delete a sector by id
   * @param sectorId - The sector id
   */
  @Delete(':id')
  async delete(@Param('id') sectorId: string): Promise<Sector> {
    return await this.sectorsService.delete(sectorId);
  }

  @Get(':id/students')
  async findStudentBySectorId(
    @Param('id') sectorId: string,
  ): Promise<Student[]> {
    return await this.studentsService.findBySectorId(sectorId);
  }
}
