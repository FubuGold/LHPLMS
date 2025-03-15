import { Dependencies, Injectable } from '@nestjs/common';
import { UserRepo } from '../../infra/repo/user.repo';
import { UserSettingRepo } from '../../infra/repo/userSetting.repo';
import { UserTaskRepo } from '../../infra/repo/userTask.repo';
import { User } from '../../domain/entities/user.entity';
import { Setting } from '../../domain/entities/setting.entity';
import { Task } from '../../domain/entities/task.entity';


function validateUUID(id) {
    return id.match("[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}");
}

@Injectable()
@Dependencies(UserRepo, UserSettingRepo, UserTaskRepo)
export class UserService {
    constructor(userRepo, userSettingRepo, userTaskRepo) {
        this.userRepo = userRepo;
        this.userSettingRepo = userSettingRepo;
        this.userTaskRepo = userTaskRepo;
    }

    async getId(id) {
        if (validateUUID(id)) return id;
        return await this.userRepo.getId(id);
    }

    async getOne(id) {
        id = await this.getId(id);
        return await this.userRepo.getOne(id);
    }

    async getAll() {
        return await this.userRepo.getAll();
    }

    async getSetting(id) {
        id = await this.getId(id);
        return await this.userSettingRepo.get(id);
    }

    async getTask(id) {
        id = await this.getId(id);
        return await this.userTaskRepo.get(id);
    }

    async register(payload) {
        return await this.userRepo.create(new User(payload));
    }

    async update(payload) {
        payload.userId = await this.getId(payload.userId);
        return await this.userRepo.update(new User(payload));
    }

    async updateSetting(payload) {
        payload.userId = await this.getId(payload.userId);
        return await this.userSettingRepo.update(new Setting(payload));
    }

    async delete(id) {
        id = await this.getId(id);
        return await this.userRepo.delete(id);
    }

}
