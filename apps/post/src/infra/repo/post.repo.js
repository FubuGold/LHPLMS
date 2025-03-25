import { Injectable, Dependencies } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { Post } from '../../domain/entities/post.entity';

@Injectable()
@Dependencies(PrismaClient)
export class PostRepo {
    constructor(prisma) {
        this.prisma = prisma;
    }

    async getAll(where) {
        return (
            await this.prisma.classPost.findMany({
                where: where,
                select: {
                    id: true,
                    title: true,
                    content: true,
                    ownerId: true,
                    createAt: true,
                },
            })
        ).map(
            (post) =>
                new Post({
                    id: post.id,
                    title: post.title,
                    content: post.content,
                    ownerId: post.ownerId,
                    createAt: post.createAt,
                }),
        );
    }

    async getOne({ id }) {
        const data = await this.prisma.classPost.findUnique({
            where: { id: id },
            select: {
                id: true,
                title: true,
                content: true,
                ownerId: true,
                createAt: true,
            },
        });

        return new Post({
            id: data.id,
            title: data.title,
            content: data.content,
            ownerId: data.ownerId,
            createAt: data.createAt,
        });
    }

    async create(payload) {
        return await this.prisma.classPost.create({
            data: payload,
            select: {
                id: true
            }
        });
    }

    async update({ id, ...payload }) {
        return await this.prisma.classPost.update({
            where: { id: id },
            data: payload,
            select: {
                id: true
            }
        })
    }

    async delete({ id }) {
        return await this.prisma.classPost.delete({
            where: { id: id }
        });
    }
}

