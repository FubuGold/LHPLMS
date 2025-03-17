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

    @Get()
    getAll() {}

    @Get(':id')
    @Bind(Param('id'))
    getOne(id) {}

    @Post()
    createSubmission() {}

    @Delete(':id')
    @Bind(Param('id'))
    deleteSubmission(id) {}
}
