import { Module } from '@nestjs/common';
import { SubmissionController } from './submission.controller';
import { SubmissionService } from '../domain/services/submission.service';

@Module({
    imports: [],
    controllers: [SubmissionController],
    providers: [SubmissionService],
})
export class SubmissionModule {}
