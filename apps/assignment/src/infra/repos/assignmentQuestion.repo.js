import { Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import { AssignmentQuestion } from "../../domain/entities/assignmentQuestion.entity";

@Injectable()
@Dependencies(PrismaService)
export class AssignmentQuestionRepo {
    constructor(prisma) {
        this.prisma = prisma;
    }

    async getOne(id) {
        return new AssignmentQuestion(
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
        res.map((item) => new AssignmentQuestion(item));
        return res;
    }

    async create(payload) {
        console.log(payload);
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
            update: payload
        })
    }

    async delete(id) {
        await this.prisma.classAssignmentQuestion.delete({
            where: {
                id: id
            }
        })
    }
}