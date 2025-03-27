import { Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma.service";
import { Submission } from "../../domain/entities/submission.entity";

@Injectable()
@Dependencies(PrismaService)
export class SubmissionRepo {
    constructor(prisma) {
        this.prisma = prisma;
    }

    async create(payload) {
        return await this.prisma.submission.create({
            data: payload,
            select: {
                id: true
            }
        })
    }

    async getOne(payload) {
        return new Submission(
            await this.prisma.submission.findUnique({
                where: {
                    id: payload.id
                },
                include: {
                    SubmissionAnswer: {
                        omit: {
                            submissionId: true
                        }
                    }
                }
            }));
    }

    async getAll(payload) {
        let res = await this.prisma.submission.findMany({
            where: payload,
            include: {
                SubmissionAnswer: {
                    omit: {
                        submissionId: true
                    }
                }
            }
        })

        res.map((item) => new Submission(item));
        return res;
    }
}