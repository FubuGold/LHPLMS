import { AssignmentQuestionChoice } from "./assignmentQuestionChoice.entity";

export class AssignmentQuestion {
    constructor(obj) {
        this.origin = obj.origin;
        this.statement = obj.statement;
        this.assignmentQuestionChoice = obj.assignmentQuestionChoice.map((item) => new AssignmentQuestionChoice(item));
        Object.freeze(this);
    }
}