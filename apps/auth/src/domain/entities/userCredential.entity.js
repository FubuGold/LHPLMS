export class UserCredential {
  constructor({ userId, password, salt }) {
    this.userId = userId;
    this.password = password;
    this.salt = salt;
    Object.freeze(this);
  }

  updatePassword(password) {
    return new UserCredential(userId, password);
  }
}
