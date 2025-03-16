import { Module } from '@nestjs/common';
import { AssignmentController } from '../routes/assignment.controller';
import { AssignmentService } from '../../domain/services/assignment.service';

@Module({
  controllers: [AssignmentController],
  providers: [AssignmentService],
})
export class AssignmentModule {}
