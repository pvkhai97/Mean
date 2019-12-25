import { Module } from '@nestjs/common';
import { SectorsController } from './sectors.controller';
import { SectorsService } from './sectors.service';
import { MongooseModule } from '@nestjs/mongoose';
import SectorSchema from './schemas/sector.schema';
import { StudentsModule } from '../students/students.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Sector', schema: SectorSchema }]),
    StudentsModule,
  ],
  controllers: [SectorsController],
  providers: [SectorsService],
  exports: [SectorsService],
})
export class SectorsModule {}
