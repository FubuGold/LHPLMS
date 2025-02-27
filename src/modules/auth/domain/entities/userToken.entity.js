export class UserToken {
  constructor({ userId, token }) {
    this.userId = userId;
    this.token = token;
    Object.freeze(this);
  }

  updateToken(token) {
    return new UserToken(this.userId, token);
  }
}
