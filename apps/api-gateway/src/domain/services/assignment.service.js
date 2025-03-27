import { Injectable, Dependencies } from '@nestjs/common';
import { ASSIGNMENT_PATTERN } from '@app/lib/contracts/assignment/assignment.pattern';
import { last, lastValueFrom } from 'rxjs';

@Injectable()
@Dependencies('ASSIGNMENT_SERVICE')
export class AssignmentService {
    constructor(assignmentClient) {
        this.assignmentClient = assignmentClient;
    }

    async create(payload = {}) {
        return await lastValueFrom(
            this.assignmentClient.send(ASSIGNMENT_PATTERN.CREATE, payload)
        );
    }

    async getOne(payload = {}) {
        return await lastValueFrom(
            this.assignmentClient.send(ASSIGNMENT_PATTERN.GET_ONE, payload)
        );
    }

    async getAll(payload = {}) {
        return await lastValueFrom(
            this.assignmentClient.send(ASSIGNMENT_PATTERN.GET_ALL, payload)
        );
    }

    async update(payload = {}) {
        return await lastValueFrom(
            this.assignmentClient.send(ASSIGNMENT_PATTERN.UPDATE, payload)
        );
    }

    async delete(payload = {}) {
        return await lastValueFrom(
            this.assignmentClient.send(ASSIGNMENT_PATTERN.DELETE, payload)
        );
    }

    async getOneQuestion(payload = {}) {
        return await lastValueFrom(
            this.assignmentClient.send(ASSIGNMENT_PATTERN.GET_ONE_QUESTION, payload)
        )
    }

    async addQuestions(payload = {}) {
        return await this.assignmentClient
            .send(ASSIGNMENT_PATTERN.ADD_QUESTION, payload)
            .toPromise();
    }

    async deleteQuestion(payload = {}) {
        return await this.assignmentClient
            .send(ASSIGNMENT_PATTERN.DELETE_QUESTION, payload)
            .toPromise();
    }
}
