import { Module } from '@nestjs/common';
import { SubjectService } from '../../domain/services/subject.service';
import { SubjectController } from '../routes/subject.controller';

@Module({
  providers: [SubjectService],
  controllers: [SubjectController],
})
export class SubjectModule {}
