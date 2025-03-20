import { Dependencies, Injectable } from '@nestjs/common';
import { AssignmentRepo } from '../../infra/repos/assignment.repo';
import { Assignment } from '../entities/assignment.entity';

@Injectable()
@Dependencies(AssignmentRepo)
export class AssignmentService {
  constructor(assignmentRepo) {
    this.assignmentRepo = assignmentRepo;
  }

  async create(payload) {
    await this.assignmentRepo.create(new Assignment(payload));
    return null;
  }

  async getOne(id) {
    return await this.assignmentRepo.getOne(id);
  }

  async getAll(queryParam) {
    return await this.assignmentRepo.getAll(queryParam);
  }

  async update(payload) {
    await this.assignmentRepo.update(payload);
    return null;
  }

  async delete(id) {
    await this.assignmentRepo.delete(id);
    return null;
  }
}
