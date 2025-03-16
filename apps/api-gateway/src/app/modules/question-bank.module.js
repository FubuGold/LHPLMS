import { Module } from '@nestjs/common';
import { QuestionBankController } from '../routes/question-bank.controller';
import { QuestionBankService } from '../../domain/services/question-bank.service';

@Module({
  providers: [QuestionBankService],
  controllers: [QuestionBankController],
})
export class QuestionBankModule {}
