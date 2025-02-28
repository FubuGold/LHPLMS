package authz.classes.delete

import data.common.allow_action
import data.common.is_author
default allow = false

allow if {
    allow_action(input.action)
}

allow if {
    is_author(input.user)
}