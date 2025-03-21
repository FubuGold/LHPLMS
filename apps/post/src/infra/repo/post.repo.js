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
                    resource: {
                        ownerId: true,
                        createAt: true,
                    },
                },
            })
        ).map(
            (post) =>
                new Post({
                    id: post.id,
                    title: post.title,
                    content: post.content,
                    ownerId: post.resource.ownerId,
                    createAt: post.resource.createAt,
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
                resource: {
                    ownerId: true,
                    createAt: true,
                },
            },
        });

        return new Post({
            id: data.id,
            title: data.title,
            content: data.content,
            ownerId: data.resource.ownerId,
            createAt: data.resource.createAt,
        });
    }
}
