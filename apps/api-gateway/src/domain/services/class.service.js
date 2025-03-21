import { Injectable, Dependencies } from '@nestjs/common';
import { CLASS_PATTERN } from '@app/lib/contracts/class/class.pattern'
import { lastValueFrom } from 'rxjs';

@Injectable()
@Dependencies('CLASS_SERVICE')
export class ClassService {
    constructor(classClient) {
        this.classClient = classClient;
    }
}