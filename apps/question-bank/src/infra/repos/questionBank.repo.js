import { PrismaService } from "../database/prisma.service";
import { QuestionBank } from "../../domain/entities/questionBank.entity";
import { Dependencies, Injectable } from "@nestjs/common";

@Injectable()
@Dependencies(PrismaService)
export class QuestionBankRepo {
    constructor(prisma) {
        this.prisma = prisma;
    }

    async getAll(queryParam) {
        let res = await this.prisma.questionBank.findMany({
            where: queryParam,
        });

        res.map((item) => new QuestionBank(item));

        return res;
    }

    async getOne(id) {
        return new QuestionBank(
            await this.prisma.questionBank.findUnique({
                where: {
                    id: id
                }
            })
        );
    }

    async create(payload) {
        return await this.prisma.questionBank.create({
            data: payload,
            select: {
                id: true
            }
        })
    }

    async update(payload) {
        return await this.prisma.questionBank.update({
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
        await this.prisma.questionBank.delete({
            where: {
                id: id
            }
        });
        return null;
    }
}