import { Injectable, Dependencies } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Policy } from '../../domain/entities/policy.entity';

@Injectable()
@Dependencies(PrismaService)
export class PolicyRepo {
  constructor(PrismaService) {
    this.prisma = PrismaService;
  }

  async get(where, select) {
    const response = await this.prisma.policy.findMany({
      where: where,
      select: select,
    });

    return response;
  }

  async getPoliciesApplied(resource, user, action) {
    const response = await this.get({
      PolicyResource: { id: resource.id },
      OR: [
        { PolicyUser: { id: user.id } },
        { PolicyGroup: { in: user.group } },
        { PolicyRules: { action: action } },
      ],
    });

    response.map(
      (item) =>
        new Policy({
          id: item.id,
          rules: item.PolicyRules.rule,
        }),
    );

    return response;
  }
}
