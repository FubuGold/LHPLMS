import {
    Bind,
    Controller,
    Dependencies,
    Get,
    Post,
    Patch,
    Delete,
    Param,
} from '@nestjs/common';
import { GroupService } from '../../domain/services/group.service';

@Controller('groups')
@Dependencies(GroupService)
export class GroupController {
    constructor(GroupService) {
        this.GroupService = GroupService;
    }

    @Get()
    getAll() {}

    @Get(':id')
    @Bind(Param('id'))
    getOne(id) {}

    @Post()
    createGroup() {}

    @Patch(':id')
    @Bind(Param('id'))
    updateGroup(id) {}

    @Delete(':id')
    @Bind(Param('id'))
    deleteGroup(id) {}

    @Post(':id/users/:userId')
    @Bind(Param('id'), Param('userId'))
    addUser(id, userId) {}

    @Delete(':id/users/:userId')
    @Bind(Param('id'), Param('userId'))
    deleteUser(id, userId) {}
}
