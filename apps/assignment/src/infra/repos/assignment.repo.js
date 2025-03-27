import { Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import { ClassAssignment } from "../../domain/entities/classAssignment.entity";
import { ClassAssignmentQuestion } from "../../domain/entities/classAssignmentQuestion.entity";

@Injectable()
@Dependencies(PrismaService)
export class AssignmentRepo {
    constructor(prisma) {
        this.prisma = prisma;
    }

    async getOne(id) {
        return new ClassAssignment(
            await this.prisma.classAssignment.findUnique({
                where: {
                    id: id
                },
                include: {
                    ClassAssignmentQuestion: {
                        omit: {
                            assignmentId: true
                        }
                    }
                }
            })
        );
    }

    async getAll(where) {
        let res = await this.prisma.classAssignment.findMany({
            where: where,
            include: {
                ClassAssignmentQuestion: {
                    omit: {
                        assignmentId: true
                    }
                }
            }
        })
        res.map((item) => new ClassAssignment(item));
        return res;
    }

    async create(payload) {
        console.log(payload);
        return await this.prisma.classAssignment.create({
            data: payload,
            select: {
                id: true
            }
        })
    }

    async update(payload) {
        return await this.prisma.classAssignment.update({
            where: {
                id: payload.id
            },
            data: payload,
            select: {
                id: true
            }
        })
    }

    async delete(id) {
        await this.prisma.classAssignment.delete({
            where: {
                id: id
            }
        })
        return null;
    }
}