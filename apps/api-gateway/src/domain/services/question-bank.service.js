import { Injectable, Dependencies } from '@nestjs/common';
import { QUESTIONBANK_PATTERN } from '@app/lib/contracts/question-bank/question-bank.pattern'
import { lastValueFrom } from 'rxjs';

@Injectable()
@Dependencies('QUESTIONBANK_SERVICE')
export class QuestionBankService {
    constructor(questionBankClient) {
        this.questionBankClient = questionBankClient;
    }

    async getOne(id) {
        return await lastValueFrom(
            this.questionBankClient.send(QUESTIONBANK_PATTERN.GET_ONE, id)
        );
    }

    async getAll(queryParam) {
        return await lastValueFrom(
            this.questionBankClient.send(QUESTIONBANK_PATTERN.GET_ALL, queryParam)
        );
    }

    async create(payload) {
        return await lastValueFrom(
            this.questionBankClient.send(QUESTIONBANK_PATTERN.CREATE, payload)
        );
    }

    async update(payload) {
        return await lastValueFrom(
            this.questionBankClient.send(QUESTIONBANK_PATTERN.UPDATE, payload)
        );
    }

    async delete(id) {
        return await lastValueFrom(
            this.questionBankClient.send(QUESTIONBANK_PATTERN.DELETE, id)
        );
    }

    async getAllQuestion(queryParam) {
        return await lastValueFrom(
            this.questionBankClient.send(QUESTIONBANK_PATTERN.GET_ALL_QUESTION, queryParam)
        );
    }

    async getOneQuestion(id) {
        return await lastValueFrom(
            this.questionBankClient.send(QUESTIONBANK_PATTERN.GET_ONE_QUESTION, id)
        );
    }

    async createQuestion(payload) {
        return await lastValueFrom(
            this.questionBankClient.send(QUESTIONBANK_PATTERN.CREATE_QUESTION, payload)
        );
    }

    async updateQuestion(payload) {
        return await lastValueFrom(
            this.questionBankClient.send(QUESTIONBANK_PATTERN.UPDATE_QUESTION, payload)
        );
    }

    async deleteQuestion(id) {
        return await lastValueFrom(
            this.questionBankClient.send(QUESTIONBANK_PATTERN.DELETE_QUESTION, id)
        );
    }
}
