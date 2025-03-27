import { Dependencies, Injectable } from '@nestjs/common';
import { QuestionRepo } from '../../infra/repos/question.repo';
import { QuestionBankRepo } from '../../infra/repos/questionBank.repo';
import { Question } from '../entities/question.entity';
import { QuestionBank } from '../entities/questionBank.entity';

@Injectable()
@Dependencies(QuestionBankRepo, QuestionRepo)
export class QuestionBankService {
  constructor(questionBankRepo, questionRepo) {
    this.questionBankRepo = questionBankRepo;
    this.questionRepo = questionRepo;
  }

  async getOne(id) {
    return await this.questionBankRepo.getOne(id);
  }

  async getAll(queryParam) {
    return await this.questionBankRepo.getAll(queryParam);
  }

  async create(body) {
    return await this.questionBankRepo.create(new QuestionBank(body));
  }

  async update(body) {
    return await this.questionBankRepo.update(new QuestionBank(body));
  }

  async delete(id) {
    return await this.questionBankRepo.delete(id);
  }

  async getAllQuestion(queryParam) {
    return await this.questionRepo.getAll(queryParam);
  }

  async getOneQuestion(id) {
    return await this.questionRepo.getOne(id);
  }

  async createQuestion(payload) {
    return await this.questionRepo.create(payload);
  }

  async updateQuestion(payload) {
    return await this.questionRepo.update(payload);
  }

  async deleteQuestion(id) {
    return await this.questionRepo.delete(id);
  }
}
