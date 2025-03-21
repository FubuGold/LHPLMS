import { Injectable, Dependencies, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { GROUP_PATTERN } from '@app/lib/contracts/group/group.pattern';


@Injectable()
@Dependencies('GROUP_SERVICE')
export class GroupService {
    constructor(groupClient) {
        this.groupClient = groupClient;
    }
}
