import { Injectable, Dependencies } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
@Dependencies(PrismaClient)
export class SubjectRepo {
    constructor(prisma) {
        this.prisma = prisma;
    }
}
