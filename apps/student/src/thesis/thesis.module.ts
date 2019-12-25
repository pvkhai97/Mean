import { Module } from '@nestjs/common';
import { ThesisService } from './thesis.service';
import { ThesisController } from './thesis.controller';
import { MongooseModule } from '@nestjs/mongoose';
import ThesisSchema from './schemas/thesis.schema';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Thesis', schema: ThesisSchema }]),
    MulterModule.register({
      storage: diskStorage({
        destination: './upload',
        filename: (req, file, cb) => {
          const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  ],
  providers: [ThesisService],
  controllers: [ThesisController],
  exports: [ThesisService],
})
export class ThesisModule {}
