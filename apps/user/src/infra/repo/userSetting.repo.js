import { Injectable, Dependencies } from '@nestjs/common'
import { PrismaService } from '../database/prisma.service'
import { Setting } from '../../domain/entities/setting.entity'

@Injectable()
@Dependencies(PrismaService)
export class UserSettingRepo {
    constructor(prismaService) {
        this.prisma = prismaService;
    }

    async update(payload) {
        return await this.prisma.userSetting.upsert({
            where: { userId: payload.userId },
            update: { ...payload },
            create: { ...payload }
        })
    }

    async get(userId) {
        try {
            let res = new Setting(await this.prisma.userSetting.findUnique({
                where: {
                    userId: userId
                }
            }));
            return res;
        }
        catch (err) {
            return null;
        }
    }
}