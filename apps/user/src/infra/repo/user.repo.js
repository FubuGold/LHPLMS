import { Injectable, Dependencies } from '@nestjs/common'
import { PrismaService } from '../database/prisma.service'
import { User } from '../../domain/entities/user.entity';

@Injectable()
@Dependencies(PrismaService)
export class UserRepo {
    constructor(PrismaService) {
        this.prisma = PrismaService;
    }

    async getAll() {
        return this.prisma.user.findMany();
    }

    async getId(username) {
        try {
            return (await this.prisma.user.findUnique({
                where: {
                    username: username,
                },
                select: {
                    id: true,
                }
            })).id;
        }
        catch (err) {
            return null;
        }
    }

    async getOne(id) {
        try {
            return await this.prisma.user.findUnique({
                where: { id: id }
            })
        }
        catch (err) {
            return null;
        }
    }

    async getSetting(id) {
        try {
            return new Setting(
                await this.prisma.userSetting.findUnique({
                    where: { userId: id }
                })
            )
        }
        catch (err) {
            return null;
        }
    }
    
    async create(user) {
        try {
            return await this.prisma.user.create({
                data: user,
                select: {
                    id: true
                }
            });
        }
        catch (err) {
            return null;
        }
    }

    async delete(id) {
        await this.prisma.user.delete({
            where: { id: id }
        });
        return null;
    }

    async update(user) {
        return await this.prisma.user.update({
            where: { id: user.id },
            data: user
        })
    }
}