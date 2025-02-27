export class Rule {
  constructor({ id, subject, environment, action, name, description }) {
    this.id = id;
    this.subject = subject;
    this.environment = environment;
    this.action = action;
    this.description = description;
    this.name = name;

    Object.freeze(this);
  }
}
