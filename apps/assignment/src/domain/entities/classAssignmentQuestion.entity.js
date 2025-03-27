export class ClassAssignmentQuestion {
    constructor(obj) {
        this.assignmentId = obj.assignmentId;
        this.origin = obj.origin;
        this.statement = obj.statement;
        this.assignmentQuestionChoice = obj.assignmentQuestionChoice;
        if (this.assignmentQuestionChoice === undefined) this.assignmentQuestionChoice = obj.questionChoice;
        this.assignmentCorrectAnswer = obj.assignmentCorrectAnswer;
        if (this.assignmentCorrectAnswer === undefined) this.assignmentCorrectAnswer = obj.correctAnswer;
        Object.freeze(this);
    }
}