import { RuleRepo } from './rule.repo';
import { Rule } from '../../domain/entities/rule.entity';
import { PrismaService } from '../database/prisma.service';
import { Test } from '@nestjs/testing';

describe('RuleRepo', () => {
  let repo;
  let prisma;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [PrismaService, RuleRepo],
    }).compile();

    repo = module.get(RuleRepo);
    prisma = module.get(PrismaService);

    await prisma.$executeRawUnsafe('BEGIN');
  });

  it('should create a rule', async () => {
    const ruleData = {
      id: '692e81fa-63fa-4991-a55f-0481b3d36ee2',
      name: 'Test Rule',
      subject: {},
      environment: {},
      action: 'CREATE',
      description: 'A test rule',
    };
    await repo.create(ruleData);
    const result = await prisma.rule.findUnique({
      where: { id: '692e81fa-63fa-4991-a55f-0481b3d36ee2' },
    });
    expect(result).toMatchObject(ruleData);
  });

  it('should get rules based on criteria', async () => {
    const rules = await repo.get({
      id: '692e81fa-63fa-4991-a55f-0481b3d36ee2',
    });
    expect(rules.length).toBeGreaterThan(0);
    expect(rules[0].id).toBe('692e81fa-63fa-4991-a55f-0481b3d36ee2');
  });

  it('should delete a rule', async () => {
    await repo.delete(new Rule({ id: '692e81fa-63fa-4991-a55f-0481b3d36ee2' }));
    const result = await prisma.rule.findUnique({
      where: { id: '692e81fa-63fa-4991-a55f-0481b3d36ee2' },
    });
    expect(result).toBeNull();
  });

  it('should save a rule (upsert)', async () => {
    const ruleData = {
      id: '692e81fa-63fa-4991-a55f-0481b3d36ee2',
      name: 'Updated Rule',
      subject: {},
      environment: {},
      action: 'UPDATE',
      description: 'Updated description',
    };
    await repo.save(ruleData);
    const result = await prisma.rule.findUnique({
      where: { id: '692e81fa-63fa-4991-a55f-0481b3d36ee2' },
    });
    expect(result).toMatchObject(ruleData);
  });

  afterAll(async () => {
    await prisma.$executeRawUnsafe('ROLLBACK');
  });
});
