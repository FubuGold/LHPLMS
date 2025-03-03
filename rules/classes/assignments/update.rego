package authz.assignments.update

import data.common.allow_action
import data.common.is_author
import data.class.can_access
default allow = false

allow if {
    can_access(input.user)
    allow_action(input.action)
}

allow if {
    can_access(input.user)
    is_author(input.user)
}