import { Dependencies, Injectable } from '@nestjs/common';
import { SubmissionRepo } from '../../infra/repos/submission.repo';
import { SubmissionAnswerRepo } from '../../infra/repos/submissionAnswer.repo';
import { ASSIGNMENT_PATTERN } from '../../../../../libs/contracts/src/assignment/assignment.pattern'
import { Submission } from '../entities/submission.entity';
import { SubmissionAnswer } from '../entities/submissionAnswer.entity';
import { lastValueFrom } from 'rxjs';

@Injectable()
@Dependencies('API_GATEWAY', SubmissionRepo, SubmissionAnswerRepo)
export class SubmissionService {
  constructor(gateway, submissionRepo, submissionAnswerRepo) {
    this.gateway = gateway;
    this.submissionRepo = submissionRepo;
    this.submissionAnswerRepo = submissionAnswerRepo;
  }

  async judge(payload) {
    let count = 0;
    for (const answer of payload.SubmissionAnswer) {
      let questionAnswer = await lastValueFrom(
        this.gateway.send(ASSIGNMENT_PATTERN.GET_ONE_QUESTION, { id: answer.questionId })
      )
      questionAnswer = questionAnswer.assignmentCorrectAnswer;
      let userAnswer = answer.answers;
      if (questionAnswer.toString() == userAnswer.toString()) count++;
    }
    return count;
  }

  async submit(payload) {
    payload.score = await this.judge(payload);
    let submissionId = await this.submissionRepo.create(new Submission(payload));
    payload.SubmissionAnswer.forEach(async (element) => {
      element.submissionId = submissionId.id;
      await this.submissionAnswerRepo.create(element);
    });

    return submissionId;
  }

  async getOne(payload) {
    return await this.submissionRepo.getOne(payload);
  }

  async getAll(payload) {
    return await this.submissionRepo.getAll(new Submission(payload));
  }
}
