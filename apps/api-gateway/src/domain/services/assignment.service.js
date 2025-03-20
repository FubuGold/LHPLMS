import { Injectable, Dependencies } from '@nestjs/common';
import { ASSIGNMENT_PATTERN } from '@app/lib/contracts/assignment/assignment.pattern';
import { last, lastValueFrom } from 'rxjs';

@Injectable()
@Dependencies('ASSIGNMENT_SERVICE')
export class AssignmentService {
    constructor(assignmentClient) {
        this.assignmentClient = assignmentClient;
    }

    async create(payload) {
        await lastValueFrom(
            this.assignmentClient.send(ASSIGNMENT_PATTERN.CREATE, payload)
        );
    }

    async getOne(id) {
        return await lastValueFrom(
            this.assignmentClient.send(ASSIGNMENT_PATTERN.GET_ONE,id)
        );
    }

    async getAll(queryParam) {
        return await lastValueFrom(
            this.assignmentClient.send(ASSIGNMENT_PATTERN.GET_ALL, queryParam)
        );
    }

    async update(payload) {
        await lastValueFrom(
            this.assignmentClient.send(ASSIGNMENT_PATTERN.UPDATE, payload)
        );
    }

    async delete(id) {
        await lastValueFrom (
            this.assignmentClient.send(ASSIGNMENT_PATTERN.DELETE, id)
        );
    }
}
