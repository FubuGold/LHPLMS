import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices'
import { SubmissionController } from './submission.controller';
import { SubmissionService } from '../domain/services/submission.service';
import { PrismaService } from '../infra/database/prisma.service';
import { SubmissionRepo } from '../infra/repos/submission.repo';
import { SubmissionAnswerRepo } from '../infra/repos/submissionAnswer.repo';

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
  controllers: [SubmissionController],
  providers: [
    SubmissionService, PrismaService,
    SubmissionRepo, SubmissionAnswerRepo,
  ],
})
export class SubmissionModule { }
