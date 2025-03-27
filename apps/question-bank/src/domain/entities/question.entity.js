export class Question {
    constructor(obj) {
        obj = obj ?? {};
        this.id = obj.id;
        this.statement = obj.statement;
        this.questionBankId = obj.questionBankId;
        this.questionChoice = obj.questionChoice;
        this.correctAnswer = obj.correctAnswer;
    }
}