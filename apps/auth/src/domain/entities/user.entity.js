export class User {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.username = obj.username;
    this.dob = obj.dob;
    this.avatar = obj.avatar;
    this.group = obj.group;
    Object.freeze(this);
  }
}
