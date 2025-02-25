import { Injectable, Dependencies } from '@nestjs/common'
import { PrismaService } from './database/prisma.service'
import { User } from '../../domain/entities/user.entity';

@Injectable()
@Dependencies(PrismaService)
export class userRepo {
    constructor(PrismaService) {
        this.prisma = PrismaService;
    }

    async getAll() {
        return this.prisma.user.findMany();
    }
    async getOne(id) {
        return new User(
            await this.prisma.user.findUnique({
                where: { id: id },
            })
        );
    }
    async create(user) {
        await this.prisma.user.create({
            data: user,
        });
    }
    async delete(user) {
        await this.prisma.user.delete({
            where: { id: user.id }
        });
    }
    async update() {
        
    }
}