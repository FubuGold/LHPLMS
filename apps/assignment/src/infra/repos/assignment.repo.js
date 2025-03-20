import { Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import { Assignment } from "../../domain/entities/assignment.entity";

@Injectable()
@Dependencies(PrismaService)
export class AssignmentRepo {
    constructor(prisma) {
        this.prisma = prisma;
    }

    async getOne(id) {
        return new Assignment(
            await this.prisma.assignment.findUnique({
                where: {
                    id: id
                }
            })
        );
    }

    async getAll(where) {
        let res = await this.prisma.assignment.findMany({
            where: where,
            include: {
                assignmentQuestion: {
                    include: {
                        assignmentQuestionChoice: true
                    }
                }
            }
        })
        res.map((item) => new Assignment(item));
        return res;
    }

    async create(payload) {
        Object.defineProperty(payload,create);
        payload.create = payload.assignmentQuestion;
        payload.create.assignmentQuestion.map((item) => {
            Object.defineProperty(item,create);
            item.create = assignmentQuestionChoice;
            return item;
        });
        await this.prisma.assignment.create({
            data: payload
        })
    }

    async update(payload) {
        await this.prisma.assignment.update({
            where: {
                id : payload.id
            },
            update: payload
        })
    }

    async delete(id) {
        await this.prisma.assignment.delete({
            where: {
                id: id
            }
        })
    }
}