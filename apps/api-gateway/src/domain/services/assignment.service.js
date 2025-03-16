import { Injectable } from '@nestjs/common';
import { ASSIGNMENT_PATTERN } from '@app/lib/contracts/assignment/assignment.pattern'

@Injectable()
export class AssignmentService {
    constructor() {

    }

    async create(payload) {
        throw new Error('Function not implemented');
    }

    async getOne(id) {
        throw new Error('Function not implemented');
    }

    async getAll() {
        throw new Error('Function not implemented');
    }

    async update(payload) {
        throw new Error('Function not implemented');
    }

    async delete() {
        throw new Error('Function not implemented');
    }
}
