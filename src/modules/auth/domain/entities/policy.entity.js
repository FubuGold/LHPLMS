export class Policy {
  constructor({ id, ruleset, user, client, group, resource }) {
    if (!ruleset) {
      throw new Error('Ruleset is required');
    }

    this.id = id;
    this.ruleset = ruleset;
    this.user = user;
    this.client = client;
    this.group = group;
    this.resource = resource;

    Object.freeze(this);
  }

  updateRuleset(updatedRuleset) {
    return new Policy(
      this.id,
      updatedRuleset,
      this.user,
      this.client,
      this.group,
      this.resource,
    );
  }

  updateRule(ruleId, updatedRuleData) {
    const updatedRuleset = this.ruleset.updateRule(ruleId, updatedRuleData);
    return this.updateRuleset(updatedRuleset);
  }

  updateUser(newUser) {
    return new Policy(
      this.id,
      this.ruleset,
      newUser,
      this.client,
      this.group,
      this.resource,
    );
  }

  updateClient(newClient) {
    return new Policy(
      this.id,
      this.ruleset,
      this.user,
      newClient,
      this.group,
      this.resource,
    );
  }

  updateGroup(newGroup) {
    return new Policy(
      this.id,
      this.ruleset,
      this.user,
      this.client,
      newGroup,
      this.resource,
    );
  }

  updateResource(newResource) {
    return new Policy(
      this.id,
      this.ruleset,
      this.user,
      this.client,
      this.group,
      newResource,
    );
  }

  updateId(newId) {
    return new Policy(
      newId,
      this.ruleset,
      this.user,
      this.client,
      this.group,
      this.resource,
    );
  }
}
