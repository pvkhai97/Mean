import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import DepartmentSchema from './schemas/department.schema';
import { SectorsModule } from '../sectors/sectors.module';
import { TeachersModule } from '../teachers/teachers.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Department', schema: DepartmentSchema },
    ]),
    SectorsModule,
    TeachersModule,
  ],
  providers: [DepartmentsService],
  controllers: [DepartmentsController],
})
export class DepartmentsModule {}
