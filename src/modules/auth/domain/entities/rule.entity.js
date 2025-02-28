export class Rule {
  constructor({ id, action, name, description }) {
    this.id = id;
    this.action = action;
    this.description = description;
    this.name = name;

    Object.freeze(this);
  }

  updateId(newId) {
    return new Rule({ ...this, id: newId });
  }

  updateAction(newAction) {
    return new Rule({ ...this, action: newAction });
  }

  updateName(newName) {
    return new Rule({ ...this, name: newName });
  }

  updateDescription(newDescription) {
    return new Rule({ ...this, description: newDescription });
  }
}
