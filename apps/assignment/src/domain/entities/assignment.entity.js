export class Assignment {
    constructor(obj) {
        this.id = obj.id;
        this.name = obj.name;
        this.classId = obj.classId;
        this.startTime = (new Date(obj.startTime)).toISOString();
        this.endTime = (new Date(obj.endTime)).toISOString();
        this.isTest = obj.isTest;
        this.ownerId = obj.ownerId;
        Object.freeze(this);
    }
}