import { AssignmentQuestion } from "./assignmentQuestion.entity";

export class Assignment {
    constructor(obj) {
        this.id = obj.id;
        this.name = obj.name;
        this.startTime = obj.startTime;
        this.endTime = obj.endTime;
        this.isTest = obj.isTest;
        this.resourceId = obj.resourceId;
        this.assignmentQuestion = obj.assignmentQuestion.map((item) => new AssignmentQuestion(item));
        Object.freeze(this);
    }
}