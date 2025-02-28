import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class MessageService {
  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: { host: 'localhost', port: 3001 },
    });
  }

  async onModuleInit() {
    this.client.connect();
  }

  async message(topic, payload) {
    return await lastValueFrom(this.client.send(topic, payload));
  }
}
