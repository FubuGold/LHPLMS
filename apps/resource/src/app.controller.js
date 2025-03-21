import { Controller, Dependencies } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
@Dependencies(AppService)
export class AppController {
    constructor(appService) {
        this.appService = appService;
    }
}
