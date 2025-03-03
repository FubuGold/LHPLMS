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
        let res = this.prisma.user.findMany();
        return res;
    }

    async getOne(id) {
        try {
            return new User( 
                await this.prisma.user.findUnique({
                    where: { id: id },
            }));
        }
        catch (err) {
            return undefined;
        }
    }

    async getByUsername(username) {
        try {
            return new User(
                await this.prisma.user.findUnique({
                    where: { username: username },
                })
            );
        }
        catch (err) {
            return undefined;
        }
    }

    async create(user) {
        try {
            return await this.prisma.user.create({
                data: user,
            });
        }
        catch (err) {
            return null;
        }
    }

    async delete(user) {
        await this.prisma.user.delete({
            where: { id: user.id }
        });
        return null;
    }

    async update(user) {
        return await this.prisma.user.update({
            where : { id : user.id},
            data : user
        })
    }
}