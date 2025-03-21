import { Bind, Controller, Dependencies } from '@nestjs/common';
import { AssignmentService } from '../../domain/services/assignment.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ASSIGNMENT_PATTERN } from '@app/lib/contracts/assignment/assignment.pattern';

@Controller('classes/:classId/assignments')
@Dependencies(AssignmentService)
export class AssignmentController {
    constructor(assignmentService) {
        this.assignmentService = assignmentService;
    }

    @MessagePattern(ASSIGNMENT_PATTERN.CREATE)
    @Bind(Payload())
    async create(payload) {
        return await this.assignmentService.create(payload);
    }

    // @Get('test')
    // @Bind(Param('classId'))
    // test(classId) {
    //     return `Test: ${classId}`
    // }

    @MessagePattern(ASSIGNMENT_PATTERN.GET_ONE)
    @Bind(Payload())
    async getOne(id) {
        return await this.assignmentService.getOne(id);
    }

    @MessagePattern(ASSIGNMENT_PATTERN.GET_ALL)
    @Bind(Payload())
    async getAll(queryParam) {
        return await this.assignmentService.getAll(queryParam);
    }

    @MessagePattern(ASSIGNMENT_PATTERN.UPDATE)
    @Bind(Payload())
    async update(payload) {
        return await this.assignmentService.update({ ...payload });
    }

    @MessagePattern(ASSIGNMENT_PATTERN.DELETE)
    @Bind(Payload())
    async delete(id) {
        return await this.assignmentService.delete(id);
    }
}
