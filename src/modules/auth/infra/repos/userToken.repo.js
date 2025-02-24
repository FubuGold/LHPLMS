import { Injectable, Dependencies } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { UserToken } from '../../domain/entities/userToken.entity';

@Injectable()
@Dependencies(PrismaService)
export class userTokenRepo {
  constructor(PrismaService) {
    this.prisma = PrismaService;
  }
  async create(userToken) {
    await this.prisma.userToken.create({
      data: userToken,
    });
  }
  async save(userToken) {
    await this.prisma.userToken.upsert({
      where: { userId: userToken.userId },
      update: { token: userToken.token },
      create: { token: userToken.token, userId: userToken.userId },
    });
  }
  async getByUserId(userId) {
    const userToken = await this.prisma.userToken.findFirst({
      where: { userId: userId },
    });

    return userToken ? new UserToken(userToken.userId, userToken.token) : null;
  }

  async getByToken(token) {
    return new UserToken(
      await this.prisma.userToken.findMany({
        where: { token: token },
      }),
    );
  }

  async delete(userToken) {
    await this.prisma.userToken.delete({
      where: { userId: userToken.userId },
    });
  }
}
