import { Dependencies, Injectable } from '@nestjs/common';
import { ClassRepo } from '../../infra/repos/class.repo';

@Injectable()
@Dependencies(ClassRepo)
export class ClassService {
    constructor(classRepo) {
        this.classRepo = classRepo;
    }

    async create(payload) {
        return await this.classRepo.create(payload);
    }
    async update(payload) {
        return await this.classRepo.update(payload);
    }
    async delete(payload) {
        return await this.classRepo.delete(payload);

    }
    async getAll(payload) {
        return await this.classRepo.getAll(payload);

    }
    async getOne(payload) {
        return await this.classRepo.getOne(payload);

    }
    async addUser(payload) {
        return await this.classRepo.addUser(payload);
    }
    async deleteUser(payload) {
        return await this.classRepo.deleteUser(payload);
    }
    async getAllUsers(payload) {
        return await this.classRepo.getAllUsers(payload);
    }
}
