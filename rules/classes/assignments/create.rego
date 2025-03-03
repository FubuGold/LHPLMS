package authz.assignments.create

import data.common.allow_action
import data.class.can_access
default allow = false

allow if {
    allow_action(input.action)
    can_access(input.user)
}