import { Dependencies, Injectable } from '@nestjs/common';
import { ClassRepo } from '../../infra/repos/class.repo';

@Injectable()
@Dependencies(ClassRepo)
export class ClassService {
    async create(payload) {}
    async update(payload) {}
    async delete(payload) {}
    async getAll(payload) {}
    async getOne(payload) {}
    async addUser(payload) {}
    async deleteUser(payload) {}
    async getAllUsers(payload) {}
}
