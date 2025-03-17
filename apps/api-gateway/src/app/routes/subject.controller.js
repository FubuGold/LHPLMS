import {
    Bind,
    Controller,
    Delete,
    Dependencies,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { SubjectService } from '../../domain/services/subject.service';

@Controller('subjects')
@Dependencies(SubjectService)
export class SubjectController {
    constructor(SubjectService) {
        this.SubjectService = SubjectService;
    }

    @Get()
    getAll() {}

    @Get(':id')
    @Bind(Param('id'))
    getOne() {}

    @Post()
    createSubject() {}

    @Patch(':id')
    @Bind(Param('id'))
    updateSubject(id) {}

    @Delete(':id')
    @Bind(Param('id'))
    deleteSubject(id) {}
}
