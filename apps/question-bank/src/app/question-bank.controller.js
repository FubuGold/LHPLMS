import { Bind, Controller, Dependencies } from '@nestjs/common';
import { QuestionBankService } from '../domain/services/questionBank.service';
import { QUESTIONBANK_PATTERN } from '@app/lib/contracts/question-bank/question-bank.pattern';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
@Dependencies(QuestionBankService)
export class QuestionBankController {
    constructor(questionBankService) {
        this.questionBankService = questionBankService;
    }

    @MessagePattern(QUESTIONBANK_PATTERN.GET_ALL)
    @Bind(Payload())
    async getAll(payload) {
        return await this.questionBankService.getAll(payload);
    }

    @MessagePattern(QUESTIONBANK_PATTERN.GET_ONE)
    @Bind(Payload())
    async getOne(payload) {
        return await this.questionBankService.getOne(payload);
    }

    @MessagePattern(QUESTIONBANK_PATTERN.CREATE)
    @Bind(Payload())
    async create(payload) {
        return await this.questionBankService.create(payload);
    }

    @MessagePattern(QUESTIONBANK_PATTERN.UPDATE)
    @Bind(Payload())
    async update(payload) {
        return await this.questionBankService.update(payload);
    }

    @MessagePattern(QUESTIONBANK_PATTERN.DELETE)
    @Bind(Payload())
    async delete(payload) {
        return await this.questionBankService.delete(payload);
    }

    @MessagePattern(QUESTIONBANK_PATTERN.GET_ALL_QUESTION)
    @Bind(Payload())
    async getAllQuestion(payload) {
        return await this.questionBankService.getAllQuestion(payload);
    }

    @MessagePattern(QUESTIONBANK_PATTERN.GET_ONE_QUESTION)
    @Bind(Payload())
    async getOneQuestion(payload) {
        return await this.questionBankService.getOneQuestion(payload);
    }

    @MessagePattern(QUESTIONBANK_PATTERN.CREATE_QUESTION)
    @Bind(Payload())
    async createQuestion(payload) {
        return await this.questionBankService.createQuestion(payload);
    }

    @MessagePattern(QUESTIONBANK_PATTERN.UPDATE_QUESTION)
    @Bind(Payload())
    async updateQuestion(payload) {
        return await this.questionBankService.updateQuestion(payload);
    }

    @MessagePattern(QUESTIONBANK_PATTERN.DELETE_QUESTION)
    @Bind(Payload())
    async deleteQuestion(payload) {
        return await this.questionBankService.deleteQuestion(payload);
    }
}
