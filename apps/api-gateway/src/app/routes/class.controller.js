import {
    Bind,
    Body,
    Controller,
    Delete,
    Dependencies,
    Get,
    Param,
    Patch,
    Post,
    Query,
    Req,
} from '@nestjs/common';
import { ClassService } from '../../domain/services/class.service';
import { PostService } from '../../domain/services/post.service';
import { AssignmentService } from '../../domain/services/assignment.service';
import { SubmissionService } from '../../domain/services/submission.service';

@Controller('classes')
@Dependencies(ClassService, PostService, AssignmentService, SubmissionService)
export class ClassController {
    constructor(
        classService,
        postService,
        assignmentService,
        submissionService,
    ) {
        this.classService = classService;
        this.postService = postService;
        this.assignmentService = assignmentService;
        this.submissionService = submissionService;
    }

    @Post()
    @Bind(Body(), Req())
    async create(body, req) {
        return await this.classService.create({
            ownerId: req.user,
            ...body,
        });
    }

    @Post(':classId/assignments')
    @Bind(Param(), Body(), Req())
    async createAssignment(param, body, req) {
        return await this.assignmentService.create({
            classId: param.classId,
            ownerId: req.userId,
            ...body,
        });
    }

    @Post(':classId/assignments/:assignmentId/questions')
    @Bind(Param(), Body())
    async addQuestions(param, body) {
        return await this.assignmentService.addQuestions({
            id: param.assignmentId,
            classId: param.classId,
            ...body,
        });
    }

    @Post(':classId/assignments/:assignmentId/submit')
    @Bind(Param(), Body())
    async submitAssignment(param, body) {
        return await this.submissionService.submit({
            assignmentId: param.assignmentId,
            classId: param.classId,
            ...body,
        });
    }

    @Post(':classId/users')
    @Bind(Param(), Body())
    async addUsers(param, body) {
        return await this.classService.addUser({
            id: param.classId,
            ...body,
        });
    }

    @Post(':classId/posts')
    @Bind(Param(), Body(), Req())
    async createPost(param, body, req) {
        return await this.postService.create({
            classId: param.classId,
            ownerId: req.id,
            ...body,
        });
    }

    @Patch(':classId')
    @Bind(Param(), Body())
    async update(param, body) {
        return await this.classService.update({
            id: param.classId,
            ...body,
        });
    }

    @Patch(':classId/assignments/:assignmentId')
    @Bind(Param(), Body())
    async updateAssigment(param, body) {
        return await this.assignmentService.update({
            id: param.assignmentId,
            classId: param.classId,
            ...body,
        });
    }

    @Patch(':classId/posts/:postId')
    @Bind(Param(), Body())
    async updatePost(param, body) {
        return await this.postService.update({
            id: param.postId,
            classId: param.classId,
            ...body,
        });
    }

    @Delete(':classId')
    @Delete(Param())
    async deleteOne(param) {
        return await this.classService.delete({
            id: param.id,
        });
    }

    @Delete(':classId/assignments/:assignmentId')
    @Bind(Param())
    async deleteOneAssignment(param) {
        return await this.assignmentService.delete({
            id: param.assignmentId,
            classId: param.classId,
        });
    }

    @Delete(':classId/assignments/:assignmentId/questions/:questionId')
    @Bind(Param())
    async deleteOneQuestion(param) {
        return await this.assignmentService.deleteQuestion({
            id: param.assignmentId,
            questionId: param.questionId,
            classId: param.classId,
        });
    }

    @Delete(':classId/posts/:postId')
    @Bind(Param())
    async deleteOnePost(param) {
        return await this.postService.delete({
            id: param.postId,
            classId: param.classId,
        });
    }

    @Delete(':classId/users/:userId')
    @Bind(Param())
    async deleteOneUser(param) {
        return await this.classService.deleteUser({
            id: param.classId,
            userId: param.userId,
        });
    }

    @Get('')
    @Bind(Query())
    async getAll() {
        return await this.classService.getAll();
    }

    @Get(':classId')
    @Bind(Param())
    async getOne(param) {
        return await this.classService.getOne({
            id: param.classId,
        });
    }

    @Get(':classId/posts')
    @Bind(Param(), Query())
    async getAllPost(param, query) {
        return await this.postService.getAll({
            id: param.postId,
            classId: param.classId,
            ...query,
        });
    }

    @Get(':classId/posts/:postId')
    @Bind(Param())
    async getOnePost(param) {
        return await this.postService.getOne({
            id: param.postId,
            classId: param.classId,
        });
    }

    @Get(':classId/assignments')
    @Bind(Param(), Query())
    async getAllAssignment(param, query) {
        return await this.assignmentService.getAll({
            id: param.assignmentId,
            classId: param.classId,
            ...query,
        });
    }

    @Get(':classId/assignments/:assignmentId')
    @Bind(Param())
    async getOneAssignment(param) {
        return await this.assignmentService.getOne({
            id: param.assignmentId,
            classId: param.classId,
        });
    }

    @Get(':classId/submissions')
    @Bind(Param(), Query(), Req())
    async getAllSubmissions(param, query, req) {
        return await this.submissionService.getAll({
            classId: param.classId,
            ownerId: req.user,
            ...query
        })
    }

    @Get(':classId/submissions/:submissionId')
    @Bind(Param())
    async getOneSubmission(param) {
        return await this.assignmentService.getOne({
            id: param.submissionId,
            classId: param.classId,
        });
    }

    @Get(':classId/users')
    @Bind(Param(), Query())
    async getAllUser(param, query) {
        return await this.classService.getAll({
            id: param.classId,
            ...query,
        });
    }

    @Get(':classId/users/:userId')
    @Bind(Param(), Req())
    async getOneUser(param, req) { }
}
