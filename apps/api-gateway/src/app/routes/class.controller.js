import { Bind, Body, Controller, Delete, Dependencies, Get, Injectable, Param, Patch, Post, Query } from '@nestjs/common';
import { ClassService } from '../../domain/services/class.service';

@Controller('classes')
@Dependencies(ClassService)
export class ClassController {
    constructor(classService) {
        this.classService = classService;
    }
}