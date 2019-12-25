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
import { DepartmentsService } from './departments.service';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { Department } from './interfaces/department.interface';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Sector } from '../sectors/interfaces/sector.interface';
import { SectorsService } from '../sectors/sectors.service';
import { AuthGuard } from '@nestjs/passport';
import { TeachersService } from '../teachers/teachers.service';

@Controller('departments')
@UseGuards(AuthGuard('jwt'))
@ApiUseTags('departments')
@ApiBearerAuth()
export class DepartmentsController {
  /**
   *
   * @constructor
   * @param departmentsService
   * @param sectorsService
   * @param teachersService
   */
  constructor(
    private readonly departmentsService: DepartmentsService,
    private readonly sectorsService: SectorsService,
    private readonly teachersService: TeachersService,
  ) {}

  /**
   *
   * @summary Response a list of departments
   */
  @Get()
  async find(): Promise<Department[]> {
    return await this.departmentsService.find();
  }

  /**
   *
   * @summary Response a department by id
   * @param departmentId - The department id
   */
  @Get(':id')
  async findById(@Param('id') departmentId: string): Promise<Department> {
    return await this.departmentsService.findById(departmentId);
  }

  /**
   *
   * @summary Create a new department
   * @param createDepartmentDto - The create department data transfer object
   */
  @Post()
  async create(
    @Body() createDepartmentDto: CreateDepartmentDto,
  ): Promise<Department> {
    return await this.departmentsService.create(createDepartmentDto);
  }

  /**
   *
   * @summary Update a department by id
   * @param departmentId - The department id
   * @param updateDepartmentDto - The update department data transfer object
   */
  @Put(':id')
  async update(
    @Param('id') departmentId: string,
    @Body() updateDepartmentDto: UpdateDepartmentDto,
  ): Promise<Department> {
    return await this.departmentsService.update(
      departmentId,
      updateDepartmentDto,
    );
  }

  /**
   * @summary Delete a department by id
   * @param departmentId - The department id
   */
  @Delete(':id')
  async delete(@Param('id') departmentId: string): Promise<Department> {
    return await this.departmentsService.delete(departmentId);
  }

  /**
   *
   * @summary Get a list of sectors by department id
   * @param departmentId - The department id
   */
  @Get(':id/sectors')
  async findSectorByDepartmentId(
    @Param('id') departmentId: string,
  ): Promise<Sector[]> {
    return await this.sectorsService.findByDepartmentId(departmentId);
  }

  @Get(':id/teachers')
  async findTeacherByDepartmentId(
    @Param('id') departmentId: string,
  ): Promise<any> {
    return await this.teachersService.findByDepartmentId(departmentId);
  }
}
