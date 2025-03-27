import { PrismaService } from "../database/prisma.service";
import { Question } from "../../domain/entities/question.entity";
import { Dependencies, Injectable } from "@nestjs/common";

@Injectable()
@Dependencies(PrismaService)
export class QuestionRepo {
    constructor(prisma) {
        this.prisma = prisma;
    }

    async getAll(queryParam) {
        let res = await this.prisma.question.findMany({
            where: queryParam
        });

        res.map((item) => new Question(item));
        return res;
    }

    async getOne(id) {
        return new Question(
            await this.prisma.question.findUnique({
                where: {
                    id: id
                }
            })
        );
    }

    async create(payload) {
        return await this.prisma.question.create({
            data: payload,
            select: {
                id: true
            }
        })
    }

    async update(payload) {
        return await this.prisma.question.update({
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
        await this.prisma.question.delete({
            where: {
                id: id
            }
        })
        return null;
    }
}