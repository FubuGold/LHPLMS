import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices'
import { QuestionBankController } from './question-bank.controller';
import { QuestionBankService } from '../domain/services/questionBank.service';
import { QuestionBankRepo } from '../infra/repos/questionBank.repo';
import { QuestionRepo } from '../infra/repos/question.repo';
import { PrismaService } from '../infra/database/prisma.service';

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
  providers: [QuestionBankService,
    QuestionBankRepo, QuestionRepo,
    PrismaService
  ],
})
export class QuestionBankModule { }
