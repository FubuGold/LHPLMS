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
        await this.prisma.upsert({
            where: { id: payload.id },
            update: {...payload},
            create: {...payload}
        })
    }

    async get(id) {
        return new Setting(
            await this.prisma.findUnique(id)
        );
    }
}