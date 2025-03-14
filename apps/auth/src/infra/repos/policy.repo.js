import { Injectable, Dependencies } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Policy } from '../../domain/entities/policy.entity';

@Injectable()
@Dependencies(PrismaService)
export class PolicyRepo {
  constructor(PrismaService) {
    this.prisma = PrismaService;
  }

  async getPoliciesApplied(resource, user, group) {
    const response = await this.prisma.policy.findMany({
      where: {
        PolicyResource: {
          resourceId: resource.id,
        },
        OR: [
          { PolicyUser: { userId: user.id } },
          { PolicyGroup: { groupId: group.id } },
        ],
      },
      select: {
        id: true,
        PolicyRuleset: { select: { ruleset: { select: { Rule: true } } } },
        PolicyUser: { select: { user: { select: { id: true } } } },
        PolicyGroup: { select: { group: { select: { id: true } } } },
        PolicyResource: {
          select: { resource: { select: { id: true, }, }, },
        },
      },
    });

    response.map((item) => new Policy({
      id: item.id,
      ruleset: item.PolicyRuleset.ruleset,
      user: item.PolicyUser.user,
      group: item.PolicyGroup.group,
      resource: item.PolicyResource.resource
    }));

    return response;
  }
}
