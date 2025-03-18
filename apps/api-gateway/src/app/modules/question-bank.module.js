import { Module } from '@nestjs/common';
import { QuestionBankController } from '../routes/question-bank.controller';
import { QuestionBankService } from '../../domain/services/question-bank.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'QUESTIONBANK_SERVICE',
        transport: Transport.TCP,
        options: { port: 3006 },
        retryAttempts: 10,
        retryDelay: 1000,
      },
    ]),
  ],
  providers: [QuestionBankService],
  controllers: [QuestionBankController],
})
export class QuestionBankModule {}
