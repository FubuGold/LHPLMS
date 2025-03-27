export class Submission {
    constructor(obj) {
        obj = obj ?? {};
        this.id = obj.id;
        this.assignmentId = obj.assignmentId;
        this.score = obj.score;
        this.ownerId = obj.ownerId;
        this.ownerId = this.ownerId ?? obj.userId;
    }
}