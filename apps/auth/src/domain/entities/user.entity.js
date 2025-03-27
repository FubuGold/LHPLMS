export class User {
    constructor(obj) {
        this.name = obj.name;
        this.username = obj.username;
        this.dob = obj.dob;
        this.avatar = obj.avatar;
        this.quote = obj.quote;
        this.gender = obj.gender;
        this.phoneNumber = obj.phoneNumber;
        this.email = obj.email;
        this.roleId = obj.roleId;
        Object.freeze(this);
    }
}
