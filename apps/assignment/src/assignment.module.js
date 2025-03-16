import { Module } from '@nestjs/common';
import { AppController } from './assignement.controller';
import { AssignmentService } from './assignment.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AssignmentService],
})
export class AppModule { }
