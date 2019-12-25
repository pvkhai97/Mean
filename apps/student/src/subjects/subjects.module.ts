import { Module } from '@nestjs/common';
import { SubjectsController } from './subjects.controller';
import { SubjectsService } from './subjects.service';
import { MongooseModule } from '@nestjs/mongoose';
import SubjectSchema from './schemas/subject.schema';
import { ThesisModule } from '../thesis/thesis.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Subject', schema: SubjectSchema }]),
    ThesisModule,
  ],
  controllers: [SubjectsController],
  providers: [SubjectsService],
  exports: [SubjectsService],
})
export class SubjectsModule {}
