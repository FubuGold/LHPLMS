export class ClassAssignment {
    constructor(obj) {
        obj = obj ?? {};
        this.id = obj.id;
        this.name = obj.name;
        this.classId = obj.classId;
        if (obj.startTime !== undefined) this.startTime = (new Date(obj.startTime)).toISOString();
        if (obj.endTime !== undefined) this.endTime = (new Date(obj.endTime)).toISOString();
        this.isTest = obj.isTest;
        if (typeof this.isTest == 'string') this.isTest = (this.isTest == 'true');
        this.ownerId = obj.ownerId;
        if (this.ownerId === undefined) this.ownerId = obj.user;

        this.ClassAssignmentQuestion = obj.ClassAssignmentQuestion;

        Object.freeze(this);
    }
}