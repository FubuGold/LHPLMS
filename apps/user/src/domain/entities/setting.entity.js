export class Setting {
    constructor(userId,name,description) {
        this.userId = userId;
        this.name = name;
        this.description = description;
        Object.freeze(this);
    }
}