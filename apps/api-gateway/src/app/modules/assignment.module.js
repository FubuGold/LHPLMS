import { Module } from '@nestjs/common';
import { AssignmentController } from '../routes/assignment.controller';
import { AssignmentService } from '../../domain/services/assignment.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ASSIGNMENT_SERVICE',
        transport: Transport.TCP,
        options: { port: 3003 },
        retryAttempts: 10,
        retryDelay: 1000,
      },
    ]),
  ],
  controllers: [AssignmentController],
  providers: [AssignmentService],
})
export class AssignmentModule {}
