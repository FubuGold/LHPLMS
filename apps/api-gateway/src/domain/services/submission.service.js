import { Injectable, Dependencies } from '@nestjs/common';
import { SUBMISSION_PATTERN } from '@app/lib/contracts/submission/submission.pattern';

@Injectable()
@Dependencies('SUBMISSION_SERVICE')
export class SubmissionService {
    constructor(submissionClient) {
        this.submissionClient = submissionClient;
    }

    async submit(payload = {}) {
        return await this.submissionClient
            .send(SUBMISSION_PATTERN.SUBMIT, payload)
            .toPromise();
    }

    async getAll(payload = {}) {
        return await this.submissionClient
            .send(SUBMISSION_PATTERN.GET_ALL, payload)
            .toPromise();
    }

    async getOne(payload = {}) {
        return await this.submissionClient
            .send(SUBMISSION_PATTERN.GET_ONE, payload)
            .toPromise();
    }
}
