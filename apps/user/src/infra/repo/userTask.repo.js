import { PrismaService } from "../database/prisma.service";
import { Injectable, Dependencies } from '@nestjs/common'
import { Task } from "../../domain/entities/task.entity";

@Injectable()
@Dependencies(PrismaService)
export class UserTaskRepo {
    constructor(prismaService) {
        this.prisma = prismaService;
    }

    async getAll(id) {
        let res = await this.prisma.findMany({
                where: {
                    id: id
                }
            });
        res.forEach(element => {
            element = new Task(element.endTime);
        });
        return res;
    }
}
