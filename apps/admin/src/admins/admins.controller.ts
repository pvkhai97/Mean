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
import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { AuthGuard } from '@nestjs/passport';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Controller('admins')
@ApiUseTags('admins')
@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth()
export class AdminsController {
  constructor(private readonly adminService: AdminsService) {}

  @Get()
  public async find(): Promise<any> {
    return await this.adminService.find();
  }

  @Get(':id')
  public async findById(@Param('id') adminId: string): Promise<any> {
    return await this.adminService.findById(adminId);
  }

  @Get('me')
  public async getProfile(@Request() request: any) {
    return await this.adminService.findById(request.user._id);
  }

  @Post()
  public async create(@Body() createAdminDto: CreateAdminDto): Promise<any> {
    return await this.adminService.create(createAdminDto);
  }

  @Put(':id')
  public async update(
    @Param('id') adminId: string,
    @Body() updateAdminDto: UpdateAdminDto,
  ): Promise<any> {
    return await this.adminService.update(adminId, updateAdminDto);
  }

  @Delete(':id')
  public async delete(@Param(':id') adminId: string): Promise<any> {
    return await this.adminService.delete(adminId);
  }
}
