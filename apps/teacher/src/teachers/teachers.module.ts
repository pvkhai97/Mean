import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import TeacherSchema from './schemas/teacher.schema';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { ThesisModule } from '../thesis/thesis.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Teacher', schema: TeacherSchema }]),
    ThesisModule,
  ],
  providers: [TeachersService],
  controllers: [TeachersController],
  exports: [TeachersService],
})
export class TeachersModule {}
