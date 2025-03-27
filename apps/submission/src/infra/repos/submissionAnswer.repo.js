import { Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";

@Injectable()
@Dependencies(PrismaService)
export class SubmissionAnswerRepo {
    constructor(prisma) {
        this.prisma = prisma;
    }

    async create(payload) {
        return await this.prisma.submissionAnswer.create({
            data: payload,
            select: {
                id: true
            }
        })
    }
}