export class User {
    constructor(id,name,username,email,dob,avatar) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.dob = dob;
        this.avatar = avatar;
        Object.freeze(this);
    }
}