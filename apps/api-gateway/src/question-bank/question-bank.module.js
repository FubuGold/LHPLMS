import { Module } from '@nestjs/common';
import { QuestionBankController } from './question-bank.controller';

@Module({
  controllers: [QuestionBankController]
})
export class QuestionBankModule {}
