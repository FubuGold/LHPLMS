import { Bind, Body, Controller, Delete, Dependencies, Get, Param, Patch, Post } from '@nestjs/common';
import { PostService } from '../../domain/services/post.service';


@Controller('posts')
@Dependencies(PostService)
export class PostController {
    constructor(postService) {
        this.postService = postService;
    }

    @Post()
    @Bind(Body())
    async create(payload) {
        return await this.postService.create(payload);
    }

    @Get(':id')
    @Bind(Param('id'))
    async getOne(id) {
        return await this.postService.getOne(id);
    }

    @Get()
    @Bind()
    async getAll() {
        return await this.postService.getAll();
    }

    @Patch(':id')
    @Bind(Param('id'), Body())
    async update(id, payload) {
        return await this.postService.update({ ...payload, id });
    }

    @Delete(':id')
    @Bind(Param('id'))
    async delete(id) {
        return await this.postService.delete(id);
    }
}
