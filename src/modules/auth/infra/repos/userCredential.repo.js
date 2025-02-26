import { Injectable, Dependencies } from '@nestjs/common';
import { UserCredential } from '@/modules/auth/domain/entities/userCredential.entity';
import { PrismaService } from '../database/prisma.service';

@Injectable()
@Dependencies(PrismaService)
export class UserCredentialRepo {
  constructor(PrismaService) {
    this.prisma = PrismaService;
  }

  async create(userCredential) {
    await this.prisma.userCredential.create({
      data: userCredential,
    });
  }

  async save(userCredential) {
    await this.prisma.userCredential.upsert({
      where: { userId: userCredential.userId },
      update: {
        password: userCredential.password,
        salt: userCredential.salt,
      },
      create: {
        userId: userCredential.userId,
        password: userCredential.password,
        salt: userCredential.salt,
      },
    });
  }

  async getByUserId(userId) {
    const userCredential = await this.prisma.userCredential.findFirst({
      where: { userId: userId },
    });

    return userCredential
      ? new UserCredential(
          userCredential.userId,
          userCredential.password,
          userCredential.salt,
        )
      : null;
  }

  async getByPassword(password) {
    return new UserCredential(
      await this.prisma.userCredential.findMany({
        where: { password: password },
      }),
    );
  }

  async delete(userCredential) {
    try {
      await this.prisma.userCredential.delete({
        where: { userId: userCredential.userId },
      });
    } catch (err) {
      return;
    }
  }
}
