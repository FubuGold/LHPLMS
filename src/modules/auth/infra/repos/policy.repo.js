import { Injectable, Dependencies } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Policy } from '../../domain/entities/policy.entity';

@Injectable()
@Dependencies(PrismaService)
export class PolicyRepo {
  constructor(PrismaService) {
    this.prisma = PrismaService;
  }

  async getPoliciesApplied(resource) {
    const response = await this.prisma.policy.findMany({
      where: {
        PolicyResource: {
          resourceId: resource.id,
        },
      },
      select: {
        name: true,
        PolicyRuleset: { select: { ruleset: { select: { Rule: true } } } },
        PolicyUser: { select: { user: { select: { id: true } } } },
        PolicyGroup: { select: { group: { select: { id: true } } } },
        PolicyResource: {
          select: {
            resource: {
              select: {
                id: true,
                ownerId: true,
                PolicyResource: { select: { policyId: true } },
                Class: { select: { id: true } },
                ClassPost: { select: { id: true } },
                Assignment: { select: { id: true } },
                QuestionBank: { select: { id: true } },
              },
            },
          },
        },
      },
    });

    response.map((item) => new Policy({ ...item }));

    return response;
  }
}
