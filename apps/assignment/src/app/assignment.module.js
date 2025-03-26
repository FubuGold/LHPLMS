import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AssignmentController } from './assignment.controller';
import { AssignmentService } from '../domain/services/assignment.service';
import { AssignmentRepo } from '../infra/repos/assignment.repo';
import { PrismaService } from '../infra/database/prisma.service';
import { AssignmentQuestionRepo } from '../infra/repos/assignmentQuestion.repo';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'API_GATEWAY',
        transport: Transport.TCP,
        options: { port: 3001 },
        retryAttempts: 10,
        retryDelay: 1000,
      }
    ])
  ],
  controllers: [AssignmentController],
  providers: [AssignmentService, AssignmentRepo, AssignmentQuestionRepo, PrismaService],
})
export class AssignmentModule { }
