import { Injectable, Dependencies } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { Class } from '../../domain/entities/class.entity';
@Injectable()
@Dependencies(PrismaClient)
export class ClassRepo {
    constructor(prisma) {
        this.prisma = prisma;
    }

    async create(payload) {
        const data = new Class(payload),
            currentClass = new Class(await this.prisma.class.create({
                data: {
                    ...data,
                },
                select: {
                    id: true
                }
            }));

        await this.prisma.userClass.create({
            data: {
                classId: currentClass.id,
                userId: data.ownerId
            }
        });

        return currentClass;
    }

    async update(payload) {
        const target = new Class(payload);

        return new Class(await this.prisma.class.update({
            where: {
                id: target.id,
                ownerId: target.ownerId,
            },
            data: target,
            select: {
                id: true
            }
        }));
    }

    async delete(payload) {
        const target = new Class(payload);

        await this.prisma.class.delete({
            where: {
                id: target.id,
                ownerId: target.ownerId
            }
        });
    }

    async getAll(payload) {
        const query = new Class(payload);
        return (await this.prisma.class.findMany({
            where: query,
            include: {
                UserClass: {
                    select: {
                        userId: true
                    }
                },
                ClassPost: {
                    omit: {
                        classId: true
                    }
                },
                ClassAssignment: {
                    omit: {
                        classId: true
                    }
                }
            }
        })).map((item) => new Class(item));
    }

    async getOne(payload) {
        const query = new Class(payload);
        const response = await this.prisma.class.findUnique({
            where: query,
            include: {
                UserClass: {
                    select: {
                        userId: true
                    }
                },
                ClassPost: {
                    omit: {
                        classId: true
                    }
                },
                ClassAssignment: {
                    omit: {
                        classId: true
                    }
                }
            }
        });
        return new Class(response);
    }

    async addUser(payload) {
        const target = new Class(payload);
        const availableUsers = await this.prisma.user.findMany({
            where: {
                id: {
                    in: payload.users
                }
            },
            select: {
                id: true
            }
        });
        const userList = payload.users.map(user => ({
            classId: target.id,
            userId: user
        })).filter((item) => item in availableUsers);


        await this.prisma.userClass.createMany({
            data: userList,
            skipDuplicates: true
        })

        return new Class(target.id);
    }

    async deleteUser(payload) {
        const target = new Class(payload);
        if (target.ownerId === payload.userId) return;

        await this.prisma.userClass.delete({
            where: {
                classId: target.id,
                userId: payload.userId
            }
        });
    }

    async getAllUsers(payload) {
        const target = new Class(payload);

        return await this.prisma.userClass.findMany({
            where: {
                classId: target.id,
            },
            select: {
                userId: true,
            }
        });
    }
}
