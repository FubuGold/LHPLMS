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

    async getOne(id) {
        try {
            return new User(
                await this.prisma.user.findUnique({
                    where: { id: id },
                }));
        }
        catch (err) {
            return null;
        }
    }

    async getByUsername(username) {
        try {
            const res = await this.prisma.user.findUnique({
                where: { username: username },
            });
            console.log("Database fetch: ", res);
            return new User(
                await this.prisma.user.findUnique({
                    where: { username: username },
                })
            );
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
        console.log(user);
        console.log(await this.prisma.user.create({
            data: user,
        }));
        return await this.prisma.user.create({
            data: user,
        });
    }

    async delete(user) {
        await this.prisma.user.delete({
            where: { id: user.id }
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