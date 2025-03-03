import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

import { UserService } from './app/services/user.service';
import { PrismaService } from './infra/database/prisma.service';

import { UserRepo } from './infra/repo/user.repo';
import { UserSettingRepo } from './infra/repo/userSetting.repo';
import { UserTaskRepo } from './infra/repo/userTask.repo';

@Module({
    controllers: [UserController],
    providers: [
        UserService, PrismaService,
        UserRepo, UserSettingRepo, UserTaskRepo
    ],
})
export class UserModule {}
