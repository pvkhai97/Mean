import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import StudentSchema from './schemas/student.schema';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { ThesisModule } from '../thesis/thesis.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),
    ThesisModule,
  ],
  providers: [StudentsService],
  controllers: [StudentsController],
  exports: [StudentsService],
})
export class StudentsModule {}
