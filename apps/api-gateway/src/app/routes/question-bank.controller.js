import {
    Bind,
    Controller,
    Delete,
    Dependencies,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { QuestionBankService } from '../../domain/services/question-bank.service';

@Controller('question-bank')
@Dependencies(QuestionBankService)
export class QuestionBankController {
    constructor(QuestionBankService) {
        this.QuestionBankService = QuestionBankService;
    }

    @Get(':id')
    @Bind(Param('id'))
    getOne(id) {}

    @Get()
    getAll() {}

    @Post()
    createQuestionBank() {}

    @Patch(':id')
    @Bind(Param('id'))
    updateQuestionBank(id) {}

    @Delete(':id')
    @Bind(Param('id'))
    deleteQuestionBank(id) {}

    @Get(':id/questions')
    @Bind(Param('id'))
    getAllQuestions(id) {}

    @Get(':id/questions/:questionId')
    @Bind(Param('id'), Param('questionId'))
    getOneQuestions(id, questionId) {}

    @Post(':id/questions')
    createQuestion(id) {}

    @Patch(':id/questions/:questionId')
    @Bind(Param('id'), Param('questionId'))
    updateQuestion(id, questionId) {}

    @Delete(':id/questions/:questionId')
    @Bind(Param('id'), Param('questionId'))
    deleteQuestion(id, questionId) {}
}
