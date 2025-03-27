import { Dependencies, Injectable } from '@nestjs/common';
import { AssignmentRepo } from '../../infra/repos/assignment.repo';
import { AssignmentQuestionRepo } from '../../infra/repos/assignmentQuestion.repo';
import { ClassAssignment } from '../entities/classAssignment.entity';
import { ClassAssignmentQuestion } from '../entities/classAssignmentQuestion.entity';
import { QUESTIONBANK_PATTERN } from '../../../../../libs/contracts/src/question-bank/question-bank.pattern';
import { lastValueFrom } from 'rxjs';

@Injectable()
@Dependencies('API_GATEWAY', AssignmentRepo, AssignmentQuestionRepo)
export class AssignmentService {
  constructor(gateway, assignmentRepo, assignmentQuestionRepo) {
    this.gateway = gateway;
    this.assignmentRepo = assignmentRepo;
    this.assignmentQuestionRepo = assignmentQuestionRepo;
  }

  async create(payload) {
    console.log();
    let assignmentQuestion = payload.question;
    const assignmentId = (await this.assignmentRepo.create(new ClassAssignment(payload))).id;
    if (assignmentQuestion !== undefined && assignmentQuestion !== null) {
      for (const question of assignmentQuestion) {
        let res = await lastValueFrom(
          this.gateway.send(QUESTIONBANK_PATTERN.GET_ONE_QUESTION, question.origin)
        );
        res.origin = question.origin;
        await this.assignmentQuestionRepo.create(new ClassAssignmentQuestion({ ...res, assignmentId: assignmentId }));
      }
    }
    return { "id": assignmentId };
  }

  async getOne(id) {
    return await this.assignmentRepo.getOne(id.id);
  }

  // Currently not have filter
  async getAll(queryParam) {
    return await this.assignmentRepo.getAll(new ClassAssignment(queryParam));
  }

  async update(payload) {
    return await this.assignmentRepo.update(new ClassAssignment(payload));
  }

  async delete(id) {
    return await this.assignmentRepo.delete(id.id);
  }

  async addQuestion(payload) {
    console.log(payload);
    let res = await lastValueFrom(
      this.gateway.send(QUESTIONBANK_PATTERN.GET_ONE_QUESTION, payload.origin)
    );
    return await this.assignmentQuestionRepo.create(new ClassAssignmentQuestion({ ...res, ...payload }));
  }

  async deleteQuestion(payload) {
    return await this.assignmentQuestionRepo.delete(payload.questionId);
  }
}
