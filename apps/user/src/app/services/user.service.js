import { Dependencies, Injectable } from '@nestjs/common';
import { UserRepo } from '../../infra/repo/user.repo';
import { UserSettingRepo } from '../../infra/repo/userSetting.repo';
import { UserTaskRepo } from '../../infra/repo/userTask.repo';

@Injectable()
@Dependencies(UserRepo, UserSettingRepo, UserTaskRepo)
export class UserService {
    constructor(userRepo, userSettingRepo, userTaskRepo) {
        this.userRepo = userRepo;
        this.userSettingRepo = userSettingRepo;
        this.userTaskRepo = userTaskRepo;
    }

    async getOne(id) {
        return { id: id, name: "Dummy User"}
    }
    
    async getAll() {
        
    }

    async getSetting(id) {

    }

    async getTask(id) {
        
    }

    async register(payload) {

    }

    async update(payload) {

    }

    async updateSetting(payload) {

    }

    async delete(id) {

    }

}
