export class QuestionBank {
    constructor(obj) {
        obj = obj ?? {};
        this.id = obj.id;
        this.subjectId = obj.subjectId;
        this.name = obj.name;
        this.Question = obj.Question;
        this.ownerId = obj.ownerId;
        if (this.ownerId === undefined) this.ownerId = user;
        this.createAt = obj.createAt;
    }
}