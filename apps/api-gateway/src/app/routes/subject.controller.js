import { Controller, Dependencies } from '@nestjs/common';
import { SubjectService } from '../../domain/services/subject.service';

@Controller('subject')
@Dependencies(SubjectService)
export class SubjectController {

}
