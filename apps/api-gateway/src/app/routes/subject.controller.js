import {
    Bind,
    Body,
    Controller,
    Delete,
    Dependencies,
    Get,
    Param,
    Patch,
    Post,
    Query,
} from '@nestjs/common';
import { SubjectService } from '../../domain/services/subject.service';

@Controller('subjects')
@Dependencies(SubjectService)
export class SubjectController {
    constructor(SubjectService) {
        this.SubjectService = SubjectService;
    }

    @Get()
    @Bind(Query())
    getAll(query) {
        this.SubjectService.getAll(query);
    }

    @Get(':id')
    @Bind(Param())
    getOne(param) {
        this.SubjectService.getOne(param)
    }

    @Post()
    @Bind(Body())
    create(body) {
        this.SubjectService.create(body);
    }

    @Patch(':id')
    @Bind(Param(), Body())
    update(param, body) {
        this.SubjectService.update()
    }

    @Delete(':id')
    @Bind(Param())
    delete(id) { }
}
