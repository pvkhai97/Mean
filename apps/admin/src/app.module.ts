import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { DepartmentsModule } from './departments/departments.module';
import { SectorsModule } from './sectors/sectors.module';
import { SubjectsModule } from './subjects/subjects.module';
import { ThesisModule } from './thesis/thesis.module';
import { AdminsModule } from './admins/admins.module';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://cluster0-r6l6b.azure.mongodb.net', {
      user: 'admin',
      pass: 'pvduc196',
      dbName: 'test',
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: 'client',
    }),
    AuthModule,
    AdminsModule,
    DepartmentsModule,
    SectorsModule,
    SubjectsModule,
    ThesisModule,
    StudentsModule,
    TeachersModule,
  ],
})
export class AppModule {}
