export class User {
  constructor(obj) {
    this.name = obj.name;
    this.username = obj.username;
    this.dob = obj.dob;
    this.avatar = obj.avatar;
    Object.freeze(this);
  }
}
