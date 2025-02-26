import { Injectable } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class messageService {
    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: { host: 'localhost', port: 3001 }
        });
    }

    async message(topic, payload) {
        return await this.client.send(topic, payload).toPromise();
    }
}