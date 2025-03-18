import { Injectable, Dependencies } from '@nestjs/common';
import { SUBJECT_PATTERN } from '@app/lib/contracts/subject/subject.pattern'

@Injectable()
@Dependencies('SUBJECT_SERVICE')
export class SubjectService {
    constructor(subjectClient) {
        this.subjectClient = subjectClient;
    }
}
