export class QuestionBank {
    constructor(obj) {
        obj = obj ?? {};
        this.id = obj.id;
        this.subjectId = obj.subjectId;
        this.name = obj.name;
        this.ownerId = obj.ownerId;
        this.createAt = obj.createAt;
    }
}