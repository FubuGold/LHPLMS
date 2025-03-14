import { Rule } from './rule.entity';
import { Resource } from './resource.entity';

export class Policy {
  constructor({ id, rules, user, group, resource }) {
    this.id = id;
    this.user = user;
    this.group = group;
    this.rules = rules.map((rule) => new Rule(rule));
    this.resource = resource.map((src) => new Resource(src));

    Object.freeze(this);
  }
}
