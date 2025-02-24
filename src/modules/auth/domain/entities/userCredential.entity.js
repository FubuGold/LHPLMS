export class UserCredential {
  constructor(userId, password) {
    this.userId = userId;
    this.password = password;
    Object.freeze(this);
  }

  updatePassword(password) {
    return new UserCredential(userId, password);
  }
}
