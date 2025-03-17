import { Module } from '@nestjs/common';
import { GroupService } from '../../domain/services/group.service';
import { GroupController } from '../routes/group.controller';

@Module({
    providers: [GroupService],
    controllers: [GroupController],
})
export class GroupModule {}
