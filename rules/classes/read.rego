package authz.classes.read

import data.common.allow_action
default allow = false

allow if {
    allow_action(input.action)
}