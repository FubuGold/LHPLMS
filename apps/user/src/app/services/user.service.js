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

    async getOne(id) {
        return await this.userRepo.getOne(id);
    }

    async getAll() {
        return await this.userRepo.getAll();
    }

    async getByUsername(username) {
        return await this.userRepo.getByUsername(username);
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
