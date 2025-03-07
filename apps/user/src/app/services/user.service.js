import { Dependencies, Injectable } from '@nestjs/common';
import { UserRepo } from '../../infra/repo/user.repo';
import { UserSettingRepo } from '../../infra/repo/userSetting.repo';
import { UserTaskRepo } from '../../infra/repo/userTask.repo';
import { User } from '../../domain/entities/user.entity';
import { Setting } from '../../domain/entities/setting.entity';
import { Task } from '../../domain/entities/task.entity';

@Injectable()
@Dependencies(UserRepo, UserSettingRepo, UserTaskRepo)
export class UserService {
    constructor(userRepo, userSettingRepo, userTaskRepo) {
        this.userRepo = userRepo;
        this.userSettingRepo = userSettingRepo;
        this.userTaskRepo = userTaskRepo;
    }

    async getId(unique_id) {

    }

    async getOne(unique_id) {
        let res = await this.userRepo.getOne(unique_id);
        if (res === null) res = await this.userRepo.getByUsername(unique_id);
        console.log("getOne return: ", res);
        return res;
    }

    async getAll() {
        return await this.userRepo.getAll();
    }

    async getSetting(id) {
        return await this.userSettingRepo.get(id);
    }

    async getTask(id) {
        return await this.userTaskRepo.get(id);
    }

    async register(payload) {
        return await this.userRepo.create(new User(payload));
    }

    async update(payload) {
        return await this.userRepo.create(new User(payload));
    }

    async updateSetting(payload) {
        return await this.userSettingRepo.update(new Setting(payload));
    }

    async delete(id) {
        return await this.userRepo.delete(id);
    }

}
