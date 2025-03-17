import { Module } from '@nestjs/common';
import { QuestionBankController } from './question-bank.controller';
import { QuestionBankService } from '../domain/services/question-bank.service';

@Module({
    imports: [],
    controllers: [QuestionBankController],
    providers: [QuestionBankService],
})
export class QuestionBankModule {}
