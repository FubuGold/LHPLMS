import { Module } from '@nestjs/common';
import { GroupService } from '../../domain/services/group.service';
import { GroupController } from '../routes/group.controller';

@Module({
    imports: [
        ClientsModule.register([
          {
            name: 'GROUP_SERVICE',
            transport: Transport.TCP,
            options: { port: 3004 },
            retryAttempts: 10,
            retryDelay: 1000,
          },
        ]),
      ],
    providers: [GroupService],
    controllers: [GroupController],
})
export class GroupModule {}
