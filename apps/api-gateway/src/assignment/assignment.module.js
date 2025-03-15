import { Module } from '@nestjs/common';
import { AssignmentController } from './assignment.controller';
import { Assignment } from './assignment';
import { AssignmentService } from './assignment.service';

@Module({
  controllers: [AssignmentController],
  providers: [Assignment, AssignmentService]
})
export class AssignmentModule {}
