import { Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import { ClassAssignmentQuestion } from "../../domain/entities/classAssignmentQuestion.entity";

@Injectable()
@Dependencies(PrismaService)
export class AssignmentQuestionRepo {
    constructor(prisma) {
        this.prisma = prisma;
    }

    async getOne(id) {
        return new ClassAssignmentQuestion(
            await this.prisma.classAssignmentQuestion.findUnique({
                where: {
                    id: id
                }
            })
        );
    }

    async getAll(where) {
        let res = await this.prisma.classAssignmentQuestion.findMany({
            where: where,
        })
        res.map((item) => new ClassAssignmentQuestion(item));
        return res;
    }

    async create(payload) {
        return await this.prisma.classAssignmentQuestion.create({
            data: payload,
            select: {
                id: true
            }
        })
    }

    async update(payload) {
        return await this.prisma.classAssignmentQuestion.update({
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
        await this.prisma.classAssignmentQuestion.delete({
            where: {
                id: id
            }
        })
        return null;
    }
}