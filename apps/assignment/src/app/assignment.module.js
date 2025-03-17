import { Module } from '@nestjs/common';
import { AssignmentController } from './assignment.controller';
import { AssignmentService } from '../domain/services/assignment.service';

@Module({
    imports: [],
    controllers: [AssignmentController],
    providers: [AssignmentService],
})
export class AssignmentModule {}
