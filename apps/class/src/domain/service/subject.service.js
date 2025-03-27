import { Dependencies, Injectable } from '@nestjs/common';
import { SubjectRepo } from '../../infra/repos/subject.repo';

@Injectable()
@Dependencies(SubjectRepo)
export class SubjectService {

}
