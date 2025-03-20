import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices'
import { QuestionBankController } from './question-bank.controller';
import { QuestionBankService } from '../domain/services/question-bank.service';

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
    controllers: [QuestionBankController],
    providers: [QuestionBankService],
})
export class QuestionBankModule {}
