package authz.posts.read

import data.common.allow_action
import data.class.can_access
default allow = false

allow if {
    can_access(input.user)
    allow_action(input.action)
}