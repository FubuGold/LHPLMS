export class Rule {
  constructor(id, subject, resource, environment, action, name, description) {
    this.id = id;
    this.subject = subject;
    this.resource = resource;
    this.environment = environment;
    this.action = action;
    this.description = description;
    this.name = name;

    Object.freeze(this.id);
  }
}
