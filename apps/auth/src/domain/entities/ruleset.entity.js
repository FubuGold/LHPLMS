import { Rule } from './rule.entity';
export class Ruleset {
  constructor({ id, name, description, rule }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.Rule = rule.map((item) => new Rule({ ...item }));
    Object.freeze(this);
  }

  updateName(name) {
    return new Ruleset(this.id, name, this.description, this.Rule);
  }

  updateDescription(description) {
    return new Ruleset(this.id, this.name, description, this.Rule);
  }

  addRule(rule) {
    return new Ruleset(this.id, this.name, this.description, [
      ...this.Rule,
      new Rule({ ...rule }),
    ]);
  }

  updateRule(ruleId, newRule) {
    return new Ruleset(
      this.id,
      this.name,
      this.description,
      this.Rule.map((Rule) =>
        Rule.id === ruleId ? new Rule({ ...newRule }) : Rule,
      ),
    );
  }
}
