import { Injectable, Dependencies } from '@nestjs/common';
import { QUESTIONBANK_PATTERN } from '@app/lib/contracts/question-bank/question-bank.pattern'

@Injectable()
@Dependencies('QUESTIONBANK_SERVICE')
export class QuestionBankService {
    constructor(questionBankClient) {
        this.questionBankClient = questionBankClient;
    }
}
