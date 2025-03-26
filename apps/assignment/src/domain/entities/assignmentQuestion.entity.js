export class AssignmentQuestion {
    constructor(obj) {
        this.assignmentId = obj.assignmentId;
        this.origin = obj.origin;
        this.statement = obj.statement;
        this.assignmentQuestionChoice = obj.assignmentQuestionChoice;
        this.assignmentCorrectAnswer = obj.assignmentCorrectAnswer;
        Object.freeze(this);
    }
}