import { Controller, Dependencies, Get } from '@nestjs/common';
import { QuestionBankService } from '../domain/services/question-bank.service';

@Controller()
@Dependencies(QuestionBankService)
export class QuestionBankController {
    constructor(questionBankService) {
        this.questionBankService = questionBankService;
    }

    @Get()
    getHello() {
        return this.questionBankService.getHello();
    }
}
