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
}
