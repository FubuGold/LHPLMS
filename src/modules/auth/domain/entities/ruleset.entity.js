export class Ruleset {
  constructor({ id, name, description, rules }) {
    if (!id || !name || !rules)
      throw new Error('id, name, and rules must not be empty');

    if (!Array.isArray(rules)) throw new Error('rules must be an array');

    this.id = id;
    this.name = name;
    this.description = description;
    this.rules = [...rules];
    Object.freeze(this);
  }

  updateName(name) {
    return new Ruleset(this.id, name, this.description, this.rules);
  }

  updateDescription(description) {
    return new Ruleset(this.id, this.name, description, this.rules);
  }

  addRule(rule) {
    return new Ruleset(this.id, this.name, this.description, [
      ...this.rules,
      rule,
    ]);
  }

  updateRule(ruleId, newRule) {
    if (ruleId !== newRule.id)
      throw new Error('New rule and target rule must have the same id');

    return new Ruleset(
      this.id,
      this.name,
      this.description,
      this.rules.map((rule) => (rule.id === ruleId ? newRule : rule)),
    );
  }
}
