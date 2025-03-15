export class Setting {
    constructor(obj) {
        this.userId = obj.userId;
        this.name = obj.name;
        this.description = obj.description;
        this.property = obj.property;
        Object.freeze(this);
    }
}