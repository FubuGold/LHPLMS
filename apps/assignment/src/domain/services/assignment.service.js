import { Dependencies, Injectable } from '@nestjs/common';
import { AssignmentRepo } from '../../infra/repos/assignment.repo';
import { AssignmentQuestionRepo } from '../../infra/repos/assignmentQuestion.repo';
import { Assignment } from '../entities/assignment.entity';
import { AssignmentQuestion } from '../entities/assignmentQuestion.entity';

@Injectable()
@Dependencies(AssignmentRepo, AssignmentQuestionRepo)
export class AssignmentService {
  constructor(assignmentRepo, assignmentQuestionRepo) {
    this.assignmentRepo = assignmentRepo;
    this.assignmentQuestionRepo = assignmentQuestionRepo;
  }

  async create(payload) {
    let assignmentQuestion = payload.question;
    const assignmentId = (await this.assignmentRepo.create(new Assignment(payload))).id;
    if (assignmentQuestion !== undefined && assignmentQuestion !== null) {
      for (const question of assignmentQuestion) {
        await this.assignmentQuestionRepo.create(new AssignmentQuestion({ ...question, assignmentId: assignmentId }));
      }
    }
    return assignmentId;
  }

  async getOne(id) {
    return await this.assignmentRepo.getOne(id);
  }

  // Currently not have filter
  async getAll(queryParam) {
    return await this.assignmentRepo.getAll(queryParam);
  }

  async update(payload) {
    return await this.assignmentRepo.update(payload);
  }

  async delete(id) {
    return await this.assignmentRepo.delete(id);
  }
}
