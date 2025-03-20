import { Module } from '@nestjs/common';
import { GroupController } from '../group.controller';
import { GroupService } from '../domain/services/group.service';

@Module({
    imports: [
        ClientsModule.register([
          {
            name: 'API_GATEWAY',
            transport: Transport.TCP,
            options: { port: 3001 },
            retryAttempts: 10,
            retryDelay: 1000,
          }
        ])
      ],
    controllers: [GroupController],
    providers: [GroupService],
})
export class GroupModule {}
