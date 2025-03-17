import { Module } from '@nestjs/common';
import { GroupController } from '../group.controller';
import { GroupService } from '../domain/services/group.service';

@Module({
    imports: [],
    controllers: [GroupController],
    providers: [GroupService],
})
export class GroupModule {}
