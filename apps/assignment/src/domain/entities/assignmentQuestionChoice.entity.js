export class AssignmentQuestionChoice {
    constructor(obj) {
        this.id = obj.id;
        this.statement = obj.statement;
        this.isCorrect = obj.isCorrect;
        Object.freeze(this);
    }
}