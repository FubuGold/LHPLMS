import { Bind, Controller, Dependencies, Get } from '@nestjs/common';
import { SubmissionService } from '../domain/services/submission.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SUBMISSION_PATTERN } from '../../../../libs/contracts/src/submission/submission.pattern'

@Controller()
@Dependencies(SubmissionService)
export class SubmissionController {
    constructor(submissionService) {
        this.submissionService = submissionService;
    }

    @MessagePattern(SUBMISSION_PATTERN.SUBMIT)
    @Bind(Payload())
    async submit(payload) {
        return await this.submissionService.submit(payload);
    }

    @MessagePattern(SUBMISSION_PATTERN.GET_ONE)
    @Bind(Payload())
    async getOne(payload) {
        return await this.submissionService.getOne(payload);
    }

    @MessagePattern(SUBMISSION_PATTERN.GET_ALL)
    @Bind(Payload())
    async getAll(payload) {
        return await this.submissionService.getAll(payload);
    }
}
