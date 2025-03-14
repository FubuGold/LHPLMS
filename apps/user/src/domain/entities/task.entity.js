export class Task {
    constructor(obj) {
        this.id = obj.id;
        this.userId = obj.userId;
        this.assignmentId = obj.assignmentId;
        this.assignment = obj.assignment;
        Object.freeze(this);
    }
}