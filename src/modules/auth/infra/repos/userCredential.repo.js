import { Injectable } from '@nestjs/common';
import { UserCredential } from '@/modules/auth/domain/entities/userCredential.entity';

@Injectable()
export class UserCredentialRepo {
  async save(userCredential) {
    throw new Error('Method is not implemented');
  }

  async get(userId) {
    throw new Error('Method is not implemented');
  }

  async getUserByPassword(password) {
    throw new Error('Method is not implemented');
  }

  async delete(userCredential) {
    throw new Error('Method is not implemented');
  }
}
