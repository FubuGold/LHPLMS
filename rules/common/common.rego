package common

is_author(user) = true if {
    user.id == input.resource.ownerId
}

allow_action(action) = true if {
    rule := input.policy.PolicyRuleset[_]
    rule.action == action
}