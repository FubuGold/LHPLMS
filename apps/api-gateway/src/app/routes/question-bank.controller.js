import {
    Bind,
    Body,
    ConsoleLogger,
    Controller,
    Delete,
    Dependencies,
    Get,
    Param,
    Patch,
    Post,
    Query,
} from '@nestjs/common';
import { QuestionBankService } from '../../domain/services/question-bank.service';
@Controller('question-banks')
@Dependencies(QuestionBankService)
export class QuestionBankController {
    constructor(questionBankService) {
        this.questionBankService = questionBankService;
    }

    @Get(':id')
    @Bind(Param('id'))
    async getOne(id) {
        return await this.questionBankService.getOne(id);
    }

    @Get()
    @Bind(Query())
    async getAll(queryParam) {
        return await this.questionBankService.getAll(queryParam);
    }

    @Post()
    @Bind(Body())
    async create(body) {
        return await this.questionBankService.create(body);
    }

    @Patch(':id')
    @Bind(Param('id'), Body())
    async update(id, body) {
        return await this.questionBankService.update({ ...body, id: id });
    }

    @Delete(':id')
    @Bind(Param('id'))
    async delete(id) {
        return await this.questionBankService.delete(id);
    }

    @Get(':id/questions')
    @Bind(Param('id'), Query())
    async getAllQuestions(id, queryParam) {
        return await this.questionBankService.getAllQuestion({ ...queryParam, questionBankId: id });
    }

    @Get(':id/questions/:questionId')
    @Bind(Param('id'), Param('questionId'))
    async getOneQuestions(id, questionId) {
        return await this.questionBankService.getOneQuestion(questionId);
    }

    @Post(':id/questions')
    @Bind(Param('id'), Body())
    async createQuestion(id, body) {
        return await this.questionBankService.createQuestion({ ...body, questionBankId: id });
    }

    @Patch(':id/questions/:questionId')
    @Bind(Param('id'), Param('questionId'), Body())
    async updateQuestion(id, questionId, body) {
        return await this.questionBankService.updateQuestion({ ...body, questionBankId: id, id: questionId })
    }

    @Delete(':id/questions/:questionId')
    @Bind(Param('id'), Param('questionId'))
    async deleteQuestion(id, questionId) {
        return await this.questionBankService.deleteQuestion(questionId);
    }
}
