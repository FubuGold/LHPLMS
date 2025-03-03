import { Ruleset } from './ruleset.entity';
import { Resource } from './resource.entity';

export class Policy {
  constructor({ id, ruleset, user, group, resource }) {
    if (!PolicyRuleset) {
      throw new Error('Ruleset is required');
    }

    this.id = id;
    this.PolicyRuleset = new Ruleset(ruleset);
    this.PolicyUser = user;
    this.PolicyGroup = group;
    this.PolicyResource = resource.map((src) => new Resource(src));

    Object.freeze(this);
  }

  updateRuleset(ruleset) {
    return new Policy({ ...this, ruleset });
  }

  updateUser(user) {
    return new Policy({ ...this, user });
  }

  updateGroup(group) {
    return new Policy({ ...this, group });
  }

  updateResource(resource) {
    return new Policy({ ...this, resource });
  }

  updateId(id) {
    return new Policy({ ...this, id });
  }
}
