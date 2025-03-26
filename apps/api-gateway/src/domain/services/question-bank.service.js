import { Injectable, Dependencies } from '@nestjs/common';
import { QUESTIONBANK_PATTERN } from '@app/lib/contracts/question-bank/question-bank.pattern'
import { lastValueFrom } from 'rxjs';

@Injectable()
@Dependencies('QUESTIONBANK_SERVICE')
export class QuestionBankService {
    constructor(questionBankClient) {
        this.questionBankClient = questionBankClient;
    }

    async getOneQuestionBank(id) {
        return await lastValueFrom(
            this.questionBankClient.send(QUESTIONBANK_PATTERN.GET_ONE, id)
        )
    }

    async getAllQuestionBank(queryParam) {
        return await lastValueFrom(
            this.questionBankClient.send(QUESTIONBANK_PATTERN.GET_ALL, queryParam)
        )
    }

    // async createQuestionBank()
}
