import { Injectable, Dependencies } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Resource } from '../../domain/entities/resource.entity';

@Injectable()
@Dependencies(PrismaService)
export class ResourceRepo {
  constructor(PrismaService) {
    this.prisma = PrismaService;
  }

  async getRequiredResource(resourceId) {
    const response = await this.prisma.findMany({
      where: {
        OR: [
          { Class: { id: resourceId } },
          { ClassPost: { id: resourceId } },
          { Assignment: { id: resourceId } },
          { QuestionBank: { id: resourceId } },
        ],
      },
      select: {
        id: true,
        ownerId: true,
        PolicyResource: { select: { policyId: true } },
        Class: {
          select: {
            id: true,
            UserClass: { select: { userId: true } },
          },
        },
        ClassPost: { select: { id: true } },
        Assignment: { select: { id: true } },
        QuestionBank: { select: { id: true } },
      },
    });

    response.map((item) => new Resource(item));

    return response;
  }
}
