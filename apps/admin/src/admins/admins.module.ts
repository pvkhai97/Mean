import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminSchema } from './schemas/admin.schema';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Admin', schema: AdminSchema}])],
  providers: [AdminsService],
  controllers: [AdminsController],
  exports: [AdminsService],
})
export class AdminsModule {}
