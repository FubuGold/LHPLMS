import { Module } from '@nestjs/common';
import { SubmissionController } from '../routes/submission.controller';
import { SubmissionService } from '../../domain/services/submission.service';

@Module({
  controllers: [SubmissionController],
  providers: [SubmissionService],
})
export class SubmissionModule {}
