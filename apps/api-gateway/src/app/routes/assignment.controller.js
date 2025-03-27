import { Bind, Body, Controller, Delete, Dependencies, Get, Param, Patch, Query, Post } from '@nestjs/common';
import { AssignmentService } from '../../domain/services/assignment.service';

@Controller('classes/:classId/assignments')
@Dependencies(AssignmentService)
export class AssignmentController {
    constructor(assignmentService) {
        this.assignmentService = assignmentService;
    }

    @Post()
    @Bind(Param('classId'), Body())
    async create(classId, body) {
        return await this.assignmentService.create({ ...body, classId: classId });
    }

    @Get(':assignmentId')
    @Bind(Param('assignmentId'))
    async getOne(id) {
        return await this.assignmentService.getOne(id);
    }

    @Get()
    @Bind(Param('classId'), Query())
    async getAll(classId, queryParam) {
        return await this.assignmentService.getAll({ ...queryParam, classId: classId });
    }

    @Patch(':assignmentId')
    @Bind(Param('assignmentId'), Body())
    async update(id, body) {
        return await this.assignmentService.update({ ...body, assignmentId: id });
    }

    @Delete(':assignmentId')
    @Bind(Param('assignmentId'))
    async delete(id) {
        return await this.assignmentService.delete(id);
    }
}
