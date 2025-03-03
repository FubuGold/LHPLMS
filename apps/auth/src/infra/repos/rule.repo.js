import { Injectable, Dependencies } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Rule } from '../../domain/entities/rule.entity';

@Injectable()
@Dependencies(PrismaService)
export class RuleRepo {
  constructor(PrismaService) {
    this.prisma = PrismaService;
  }

  async create(rule) {
    await this.prisma.rule.create({
      data: rule,
    });
  }

  async get(where) {
    const response = await this.prisma.rule.findMany({
      where: where,
    });

    response.map((item) => new Rule({ ...item }));

    return response;
  }

  async delete(rule) {
    try {
      await this.prisma.rule.delete({
        where: { id: rule.id },
      });
    } catch (err) {
      return;
    }
  }

  async save(rule) {
    await this.prisma.rule.upsert({
      where: { id: rule.id },
      update: { ...rule },
      create: { ...rule },
    });
  }
}
