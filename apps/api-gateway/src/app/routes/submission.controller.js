import {
    Bind,
    Controller,
    Dependencies,
    Get,
    Post,
    Delete,
    Param,
} from '@nestjs/common';
import { SubmissionService } from '../../domain/services/submission.service';
@Controller('submissions')
@Dependencies(SubmissionService)
export class SubmissionController {
    constructor(SubmissionService) {
        this.SubmissionService = SubmissionService;
    }

    getAll() {}

    getOne(id) {}

    createSubmission() {}

    deleteSubmission(id) {}
}
