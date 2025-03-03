export class Task {
    constructor(endTime) {
        this.endTime = endTime;
        Object.freeze(this);
    }
}