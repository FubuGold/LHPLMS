import { Injectable, Dependencies } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Ruleset } from '../../domain/entities/ruleset.entity';
@Injectable()
@Dependencies(PrismaService)
export class RulesetRepo {
  constructor(PrismaService) {
    this.prisma = PrismaService;
  }

  async create(ruleset) {
    await this.prisma.ruleset.create({
      data: ruleset,
    });
  }

  async get(where) {
    const response = await this.prisma.ruleset.findMany({
      where: where,
      include: {
        rule: true,
      },
    });

    response.map((item) => new Ruleset({ ...item }));

    return response;
  }

  async delete(ruleset) {
    try {
      await this.prisma.ruleset.delete({
        where: { id: ruleset.id },
      });
    } catch (err) {
      return;
    }
  }

  async update(ruleset) {
    await this.prisma.ruleset.upsert({
      where: { id: ruleset.id },
      update: { ...ruleset },
      create: { ...ruleset },
    });
  }
}
