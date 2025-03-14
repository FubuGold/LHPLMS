export class Rule {
  constructor({ id, action, conditionName, name, description }) {
    this.id = id;
    this.action = action;
    this.conditionName = conditionName;
    this.description = description;
    this.name = name;

    Object.freeze(this);
  }

  updateId(newId) {
    return new Rule({ ...this, id: newId });
  }

  updateConditionName(newConditionName) {
    return new Rule({ ...this, ConditionName: newConditionName });
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
