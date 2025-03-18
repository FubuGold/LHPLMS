export class User {
    constructor(obj) {
        this.id = obj.id;
        this.name = obj.name;
        this.username = obj.username;
        this.dob = obj.dob;
        this.avatar = obj.avatar;
        this.gender = obj.gender;
        this.phoneNumber = obj.phoneNumber;
        this.email = obj.email;
        this.roleId = obj.roleId;
        this.role = obj.role;
        Object.freeze(this);
    }
}