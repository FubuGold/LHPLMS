import { Injectable, Dependencies } from '@nestjs/common';
import { SUBMISSION_PATTERN } from '@app/lib/contracts/submission/submission.pattern'

@Injectable()
@Dependencies('SUBMISSION_CLIENT')
export class SubmissionService {
    constructor(submissionClient) {
        this.submissionClient = submissionClient;
    }
}
