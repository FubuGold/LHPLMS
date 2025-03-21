import { Bind, Body, Controller, Delete, Dependencies, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { AssignmentService } from '../../domain/services/assignment.service';

@Controller('assignments')
@Dependencies(AssignmentService)
export class AssignmentController {
    constructor(assignmentService) {
        this.assignmentService = assignmentService;
    }

    @Post()
    @Bind(Body())
    async create(payload) {
        return await this.assignmentService.create(payload);
    }

    @Get(':id')
    @Bind(Param('id'))
    async getOne(id) {
        return await this.assignmentService.getOne(id);
    }

    @Get()
    @Bind(Query())
    async getAll(queryParam) {
        return await this.assignmentService.getAll(queryParam);
    }

    @Patch(':id')
    @Bind(Param('id'), Body())
    async update(id, payload) {
        return await this.assignmentService.update({ ...payload, id: id });
    }

    @Delete(':id')
    @Bind(Param('id'))
    async delete(id) {
        return await this.assignmentService.delete(id);
    }
}
