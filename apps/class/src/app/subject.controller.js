import { Bind, Controller, Dependencies } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SubjectService } from '../domain/service/subject.service';
import { SUBJECT_PATTERN } from '../../../../libs/contracts/src/subject/subject.pattern'

@Controller()
@Dependencies(SubjectService)
export class SubjectController {
    @MessagePattern(SUBJECT_PATTERN.CREATE)
    @Bind(Payload())
    async create(payload) { }

    @MessagePattern(SUBJECT_PATTERN.UPDATE)
    @Bind(Payload())
    async update(payload) { }

    @MessagePattern(SUBJECT_PATTERN.DELETE)
    @Bind(Payload())
    async delete(payload) { }

    @MessagePattern(SUBJECT_PATTERN.GET_ALL)
    @Bind(Payload())
    async getAll(payload) { }

    @MessagePattern(SUBJECT_PATTERN.GET_ONE)
    @Bind(Payload())
    async getOne(payload) { }
}
